/**
 * AcousticAnalyzer - Động cơ Phân tích Âm học Offline (DSP) cho Đánh giá Phát âm Tiếng Nhật
 * Architecture: Decoupled UMD Module (Browser Web Audio API & Node.js Test Compatible)
 *
 * Bao gồm 4 thuật toán cốt lõi (Phương án 3):
 * 1. YIN Pitch Tracking (de Cheveigné & Kawahara, 2002): Bắt tần số cơ bản F0 chính xác, chống nhảy quãng tám
 * 2. RMS Energy Envelope & Silence Gap Detector: Kiểm tra khoảng ngắt hơi thực tế (100-180ms) của Xúc âm「っ」
 * 3. Vowel Elongation Detector: Kiểm tra độ ngân dài nguyên âm của Trường âm「ー」
 * 4. Dynamic Time Warping (DTW): So khớp đường cong ngữ điệu Tokyo (F0 + đạo hàm bậc 1) và bắt lỗi đọc ngang (Monotone)
 */
(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(root);
  } else {
    root.AcousticAnalyzer = factory(root);
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this), function(root) {
  'use strict';

  /**
   * 1. THUẬT TOÁN YIN PITCH TRACKING TRÊN 1 KHUNG TÍN HIỆU (FRAME)
   * Trả về { f0, confidence, rms } hoặc null nếu là khoảng lặng / âm vô thanh
   */
  function detectPitchYin(float32Frame, sampleRate, threshold) {
    if (!float32Frame || float32Frame.length < 64 || !sampleRate || sampleRate <= 0) {
      return null;
    }
    const yinThreshold = typeof threshold === 'number' ? threshold : 0.14;
    const n = float32Frame.length;

    let sumSq = 0;
    for (let i = 0; i < n; i++) {
      const v = float32Frame[i];
      sumSq += v * v;
    }
    const rms = Math.sqrt(sumSq / n);
    if (rms < 0.010) {
      return null; // Khung im lặng hoặc nhiễu nền nhỏ
    }

    // Dải tần số giọng nói con người: 70 Hz (trầm) -> 450 Hz (cao)
    const minLag = Math.max(2, Math.floor(sampleRate / 450));
    const maxLag = Math.min(Math.floor(n / 2), Math.floor(sampleRate / 70));
    if (maxLag <= minLag) {
      return null;
    }

    const winSize = n - maxLag;
    const diff = new Float32Array(maxLag + 1);
    const cmndf = new Float32Array(maxLag + 1);
    cmndf[0] = 1.0;

    // Bước 1 & 2: Hàm sai분 bình phương d(tau) & Chuẩn hóa tích lũy d'(tau)
    let runningSum = 0;
    for (let tau = 1; tau <= maxLag; tau++) {
      let d = 0;
      for (let j = 0; j < winSize; j++) {
        const delta = float32Frame[j] - float32Frame[j + tau];
        d += delta * delta;
      }
      diff[tau] = d;
      runningSum += d;
      cmndf[tau] = runningSum > 0 ? (d * tau) / runningSum : 1.0;
    }

    // Bước 3: Tìm ngưỡng tuyệt đối đầu tiên (Absolute Threshold) chống nhảy quãng tám (octave error)
    let bestTau = -1;
    for (let tau = minLag; tau <= maxLag; tau++) {
      if (cmndf[tau] < yinThreshold) {
        while (tau + 1 <= maxLag && cmndf[tau + 1] < cmndf[tau]) {
          tau++;
        }
        bestTau = tau;
        break;
      }
    }

    // Nếu không có điểm nào dưới ngưỡng tuyệt đối, tìm cực tiểu toàn cục nếu đủ rõ (< 0.35)
    if (bestTau === -1) {
      let minVal = Infinity;
      let minIdx = -1;
      for (let tau = minLag; tau <= maxLag; tau++) {
        if (cmndf[tau] < minVal) {
          minVal = cmndf[tau];
          minIdx = tau;
        }
      }
      if (minIdx > 0 && minVal < 0.35) {
        bestTau = minIdx;
      } else {
        return null;
      }
    }

    // Bước 4: Nội suy Parabol (Parabolic Interpolation) đạt độ chính xác dưới mẫu (sub-sample)
    let refinedTau = bestTau;
    if (bestTau > minLag && bestTau < maxLag) {
      const y0 = cmndf[bestTau - 1];
      const y1 = cmndf[bestTau];
      const y2 = cmndf[bestTau + 1];
      const denom = 2 * (y0 - 2 * y1 + y2);
      if (Math.abs(denom) > 1e-9) {
        const offset = (y0 - y2) / denom;
        if (offset >= -0.6 && offset <= 0.6) {
          refinedTau = bestTau + offset;
        }
      }
    }

    const f0 = sampleRate / refinedTau;
    if (f0 < 65 || f0 > 460) {
      return null;
    }

    const confidence = Math.max(0, Math.min(1, 1 - cmndf[bestTau]));
    return {
      f0: Number(f0.toFixed(2)),
      confidence: Number(confidence.toFixed(3)),
      rms: Number(rms.toFixed(4))
    };
  }

  /**
   * Bộ lọc trung vị 3 điểm (3-point Median Filter) khử nhiễu gai F0
   */
  function medianSmoothF0(f0Arr) {
    if (!Array.isArray(f0Arr) || f0Arr.length < 3) return f0Arr ? f0Arr.slice() : [];
    const out = f0Arr.slice();
    for (let i = 1; i < f0Arr.length - 1; i++) {
      const a = f0Arr[i - 1];
      const b = f0Arr[i];
      const c = f0Arr[i + 1];
      out[i] = a + b + c - Math.min(a, b, c) - Math.max(a, b, c);
    }
    return out;
  }

  /**
   * Chuẩn hóa mảng tần số F0 (Hz) về đường cong chuẩn [0.18, 0.92] có bảo toàn độ phẳng nếu đọc ngang (Monotone)
   */
  function normalizeF0ToPitchCurve(rawF0Samples, targetLength) {
    const len = Math.max(4, targetLength || 7);
    if (!Array.isArray(rawF0Samples) || rawF0Samples.length < 3) {
      return null;
    }
    const smoothed = medianSmoothF0(rawF0Samples);
    const minHz = Math.min(...smoothed);
    const maxHz = Math.max(...smoothed);
    const hzSpan = maxHz - minHz;
    // Khoảng biến thiên chuẩn tối thiểu cho ngữ điệu Tokyo là 45Hz (~4-5 bán âm)
    // Nếu người học đọc ngang (hzSpan < 18Hz), effectiveSpan = 45Hz sẽ giữ đường cong phẳng quanh 0.50
    const effectiveSpan = Math.max(45, hzSpan);
    const midHz = (minHz + maxHz) / 2;

    const normalized = smoothed.map(hz => {
      const centeredRatio = (hz - midHz) / effectiveSpan;
      return Math.max(0.18, Math.min(0.92, 0.50 + centeredRatio * 0.68));
    });

    const resampled = [];
    for (let i = 0; i < len; i++) {
      const pos = (i / Math.max(1, len - 1)) * (normalized.length - 1);
      const idx0 = Math.floor(pos);
      const idx1 = Math.min(normalized.length - 1, idx0 + 1);
      const frac = pos - idx0;
      const val = normalized[idx0] * (1 - frac) + normalized[idx1] * frac;
      resampled.push(Number(val.toFixed(2)));
    }

    // Xác định hướng ngữ điệu cuối câu (endPitch: 'up' | 'down' | 'flat')
    let userEndPitch = 'flat';
    if (resampled.length >= 3) {
      const tailDelta = resampled[resampled.length - 1] - resampled[resampled.length - 2];
      const tailDelta2 = resampled[resampled.length - 1] - resampled[Math.max(0, resampled.length - 3)];
      const combinedTail = 0.6 * tailDelta + 0.4 * tailDelta2;
      if (combinedTail > 0.035) userEndPitch = 'up';
      else if (combinedTail < -0.035) userEndPitch = 'down';
    }

    return {
      userCurve: resampled,
      userEndPitch,
      minHz: Number(minHz.toFixed(1)),
      maxHz: Number(maxHz.toFixed(1)),
      hzSpan: Number(hzSpan.toFixed(1)),
      isMonotone: hzSpan < 18
    };
  }

  /**
   * Trích xuất toàn bộ đường cong F0 từ AudioBuffer / Float32Array bằng YIN
   */
  function extractPitchContourYin(float32Buffer, sampleRate, targetLength) {
    if (!float32Buffer || float32Buffer.length === 0 || !sampleRate) {
      return null;
    }
    const windowSize = Math.max(256, Math.floor(sampleRate * 0.032)); // 32ms window
    const hopSize = Math.max(128, Math.floor(sampleRate * 0.015));    // 15ms hop
    const f0Samples = [];
    const voicedFrames = [];

    for (let start = 0; start + windowSize <= float32Buffer.length; start += hopSize) {
      const frame = float32Buffer.subarray(start, start + windowSize);
      const res = detectPitchYin(frame, sampleRate, 0.15);
      if (res && res.f0) {
        f0Samples.push(res.f0);
        voicedFrames.push({
          timeSec: Number((start / sampleRate).toFixed(3)),
          f0: res.f0,
          confidence: res.confidence,
          rms: res.rms
        });
      }
    }

    const norm = normalizeF0ToPitchCurve(f0Samples, targetLength || 7);
    if (!norm) {
      return {
        f0Samples: [],
        voicedFrames: [],
        userCurve: null,
        userEndPitch: 'flat',
        hzSpan: 0,
        isMonotone: true
      };
    }

    return {
      f0Samples,
      voicedFrames,
      userCurve: norm.userCurve,
      userEndPitch: norm.userEndPitch,
      minHz: norm.minHz,
      maxHz: norm.maxHz,
      hzSpan: norm.hzSpan,
      isMonotone: norm.isMonotone
    };
  }

  /**
   * 2. TRÍCH XUẤT BAO HÌNH NĂNG LƯỢNG RMS (ROOT-MEAN-SQUARE ENERGY ENVELOPE)
   */
  function extractRmsEnvelope(float32Buffer, sampleRate, windowMs, hopMs) {
    if (!float32Buffer || float32Buffer.length === 0 || !sampleRate || sampleRate <= 0) {
      return {
        frames: [],
        peakRms: 0,
        meanVoicedRms: 0,
        voicedDurationSec: 0,
        totalDurationSec: 0,
        windowMs: windowMs || 15,
        hopMs: hopMs || 5
      };
    }

    const winMs = typeof windowMs === 'number' && windowMs > 0 ? windowMs : 15;
    const stepMs = typeof hopMs === 'number' && hopMs > 0 ? hopMs : 5;
    const winSamples = Math.max(32, Math.floor((sampleRate * winMs) / 1000));
    const hopSamples = Math.max(16, Math.floor((sampleRate * stepMs) / 1000));

    const frames = [];
    let peakRms = 0;

    for (let start = 0; start + winSamples <= float32Buffer.length; start += hopSamples) {
      let sumSq = 0;
      for (let i = start; i < start + winSamples; i++) {
        const v = float32Buffer[i];
        sumSq += v * v;
      }
      const rms = Math.sqrt(sumSq / winSamples);
      if (rms > peakRms) peakRms = rms;
      frames.push({
        timeSec: Number((start / sampleRate).toFixed(4)),
        rms: Number(rms.toFixed(5))
      });
    }

    const speechThresh = Math.max(0.012, peakRms * 0.18);
    let firstVoicedIdx = -1;
    let lastVoicedIdx = -1;
    let voicedSum = 0;
    let voicedCount = 0;

    for (let i = 0; i < frames.length; i++) {
      const isVoiced = frames[i].rms >= speechThresh;
      frames[i].isVoiced = isVoiced;
      if (isVoiced) {
        if (firstVoicedIdx === -1) firstVoicedIdx = i;
        lastVoicedIdx = i;
        voicedSum += frames[i].rms;
        voicedCount++;
      }
    }

    const totalDurationSec = Number((float32Buffer.length / sampleRate).toFixed(3));
    const voicedDurationSec = (firstVoicedIdx !== -1 && lastVoicedIdx >= firstVoicedIdx)
      ? Number((frames[lastVoicedIdx].timeSec - frames[firstVoicedIdx].timeSec + winMs / 1000).toFixed(3))
      : 0;

    return {
      frames,
      peakRms: Number(peakRms.toFixed(5)),
      meanVoicedRms: voicedCount > 0 ? Number((voicedSum / voicedCount).toFixed(5)) : 0,
      firstVoicedIdx,
      lastVoicedIdx,
      voicedDurationSec,
      totalDurationSec,
      windowMs: winMs,
      hopMs: stepMs
    };
  }

  /**
   * 3. KIỂM TRA KHOẢNG NGẮT HƠI NỘI CÂU (SILENCE GAP DETECTOR CHO XÚC ÂM「っ」)
   * Xúc âm chuẩn tiếng Nhật yêu cầu đóng thanh môn/khẩu hình tạo khoảng lặng 55ms - 320ms ở giữa câu
   */
  function detectSilenceGaps(rmsData, expectedSokuonCount, targetMoras) {
    const expCount = typeof expectedSokuonCount === 'number'
      ? expectedSokuonCount
      : (Array.isArray(targetMoras) ? targetMoras.filter(m => m === 'っ').length : 0);

    if (!rmsData || !Array.isArray(rmsData.frames) || rmsData.frames.length === 0) {
      return {
        expectedSokuonCount: expCount,
        detectedGapCount: 0,
        gaps: [],
        sokuonVerified: expCount === 0,
        sokuonAcousticScore: expCount === 0 ? 100 : 40
      };
    }

    const { frames, peakRms, firstVoicedIdx, lastVoicedIdx, hopMs } = rmsData;
    const stepMs = hopMs || 5;
    const dipThresh = Math.max(0.008, peakRms * 0.15);
    const gaps = [];

    if (firstVoicedIdx !== -1 && lastVoicedIdx > firstVoicedIdx + 4) {
      let gapStartIdx = -1;
      let minGapRms = Infinity;

      for (let i = firstVoicedIdx + 1; i <= lastVoicedIdx; i++) {
        if (frames[i].rms < dipThresh) {
          if (gapStartIdx === -1) {
            gapStartIdx = i;
            minGapRms = frames[i].rms;
          } else if (frames[i].rms < minGapRms) {
            minGapRms = frames[i].rms;
          }
        } else if (gapStartIdx !== -1) {
          const gapFrames = i - gapStartIdx;
          const durationMs = gapFrames * stepMs;
          // Khoảng ngắt hơi xúc âm っ hợp lệ nằm trong khoảng 45ms - 340ms
          if (durationMs >= 45 && durationMs <= 340) {
            gaps.push({
              startSec: frames[gapStartIdx].timeSec,
              endSec: frames[i].timeSec,
              durationMs,
              depthRatio: peakRms > 0 ? Number((minGapRms / peakRms).toFixed(3)) : 0
            });
          }
          gapStartIdx = -1;
          minGapRms = Infinity;
        }
      }
    }

    const detectedGapCount = gaps.length;
    if (expCount <= 0) {
      return {
        expectedSokuonCount: 0,
        detectedGapCount,
        gaps,
        sokuonVerified: true,
        sokuonAcousticScore: 100
      };
    }

    const sokuonVerified = detectedGapCount >= expCount;
    const ratio = Math.min(1, detectedGapCount / expCount);
    const sokuonAcousticScore = sokuonVerified
      ? 100
      : Math.max(30, Math.round(35 + ratio * 45));

    return {
      expectedSokuonCount: expCount,
      detectedGapCount,
      gaps,
      sokuonVerified,
      sokuonAcousticScore
    };
  }

  /**
   * 4. KIỂM TRA ĐỘ NGÂN DÀI NGUYÊN ÂM (VOWEL ELONGATION CHO TRƯỜNG ÂM「ー」)
   */
  function detectVowelElongation(rmsData, expectedChouonCount, targetMoras) {
    const expCount = typeof expectedChouonCount === 'number'
      ? expectedChouonCount
      : (Array.isArray(targetMoras) ? targetMoras.filter(m => m === 'ー').length : 0);

    if (expCount <= 0) {
      return {
        expectedChouonCount: 0,
        elongatedCount: 0,
        chouonVerified: true,
        chouonAcousticScore: 100
      };
    }

    if (!rmsData || !Array.isArray(rmsData.frames) || rmsData.voicedDurationSec <= 0) {
      return {
        expectedChouonCount: expCount,
        elongatedCount: 0,
        chouonVerified: false,
        chouonAcousticScore: 45
      };
    }

    const totalMoraCount = Array.isArray(targetMoras) && targetMoras.length > 0 ? targetMoras.length : 4;
    // Thời lượng tối thiểu mong đợi cho mỗi mora chuẩn (~110ms)
    const expectedMinVoicedSec = totalMoraCount * 0.095;
    const durationRatio = rmsData.voicedDurationSec / Math.max(0.25, expectedMinVoicedSec);

    // Tìm các phân đoạn hữu thanh duy trì năng lượng liên tục
    const { frames, peakRms, hopMs } = rmsData;
    const sustainThresh = Math.max(0.012, peakRms * 0.22);
    const stepSec = (hopMs || 5) / 1000;
    const avgMoraSec = Math.max(0.09, rmsData.voicedDurationSec / Math.max(2, totalMoraCount));

    let currentRun = 0;
    let elongatedCount = 0;
    for (let i = 0; i < frames.length; i++) {
      if (frames[i].rms >= sustainThresh) {
        currentRun++;
      } else if (currentRun > 0) {
        const segSec = currentRun * stepSec;
        if (segSec >= avgMoraSec * 1.45) {
          elongatedCount++;
        }
        currentRun = 0;
      }
    }
    if (currentRun > 0) {
      const segSec = currentRun * stepSec;
      if (segSec >= avgMoraSec * 1.45) {
        elongatedCount++;
      }
    }

    const chouonVerified = durationRatio >= 0.82 && elongatedCount >= 1;
    const chouonAcousticScore = chouonVerified
      ? 100
      : Math.max(35, Math.min(80, Math.round(durationRatio * 75)));

    return {
      expectedChouonCount: expCount,
      elongatedCount,
      durationRatio: Number(durationRatio.toFixed(2)),
      chouonVerified,
      chouonAcousticScore
    };
  }

  /**
   * 5. THUẬT TOÁN DYNAMIC TIME WARPING (DTW) SO KHỚP ĐƯỜNG CONG NGỮ ĐIỆU TOKYO
   * Kết hợp khoảng cách độ cao F0 (50%) và đạo hàm bậc 1 (hướng lên/xuống giữa các nhịp Mora - 50%)
   */
  function computeDtwSimilarity(modelCurve, userCurve) {
    if (!Array.isArray(modelCurve) || !Array.isArray(userCurve) || modelCurve.length === 0 || userCurve.length === 0) {
      return {
        similarity: 0,
        dtwDistance: 1,
        stepMatchRatio: 0,
        isMonotone: false,
        warpingPath: []
      };
    }

    const n = modelCurve.length;
    const m = userCurve.length;

    const mMin = Math.min(...modelCurve);
    const mMax = Math.max(...modelCurve);
    const mSpan = mMax - mMin;

    const uMin = Math.min(...userCurve);
    const uMax = Math.max(...userCurve);
    const uSpan = uMax - uMin;

    // Phát hiện lỗi đọc ngang như robot (Monotone) khi câu mẫu có biến thiên rõ rệt (mSpan >= 0.18)
    const isMonotone = mSpan >= 0.18 && uSpan < 0.075;

    // Tính đạo hàm bậc 1 (Slope / Pitch step transitions)
    const dM = new Array(n).fill(0);
    const dU = new Array(m).fill(0);
    for (let i = 1; i < n; i++) dM[i] = modelCurve[i] - modelCurve[i - 1];
    for (let j = 1; j < m; j++) dU[j] = userCurve[j] - userCurve[j - 1];
    if (n > 1) dM[0] = dM[1];
    if (m > 1) dU[0] = dU[1];

    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(Infinity));
    dp[0][0] = 0;

    const band = Math.max(2, Math.ceil(Math.max(n, m) * 0.5));

    for (let i = 1; i <= n; i++) {
      const jCenter = Math.round((i / n) * m);
      const jStart = Math.max(1, jCenter - band);
      const jEnd = Math.min(m, jCenter + band);

      for (let j = jStart; j <= jEnd; j++) {
        const valDiff = Math.abs(modelCurve[i - 1] - userCurve[j - 1]);
        const slopeDiff = Math.abs(dM[i - 1] - dU[j - 1]);

        // Phạt ngược hướng bước nhảy cao độ (High->Low bị đọc thành Low->High)
        let dirPenalty = 0;
        if (Math.abs(dM[i - 1]) > 0.04) {
          if (dM[i - 1] * dU[j - 1] < -0.0008) {
            dirPenalty = 0.22;
          } else if (Math.abs(dU[j - 1]) < 0.015) {
            dirPenalty = 0.10;
          }
        }

        const localCost = 0.48 * valDiff + 0.52 * slopeDiff + dirPenalty;
        dp[i][j] = localCost + Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j] + 0.035,
          dp[i][j - 1] + 0.035
        );
      }
    }

    // Nếu band quá hẹp ở biên, lấy ô cuối
    let totalCost = dp[n][m];
    if (!Number.isFinite(totalCost)) {
      totalCost = 0;
      const len = Math.min(n, m);
      for (let k = 0; k < len; k++) {
        totalCost += Math.abs(modelCurve[k] - userCurve[k]);
      }
    }

    // Truy vết đường đi DTW tối ưu
    const warpingPath = [];
    let i = n;
    let j = m;
    let stepMatches = 0;
    let stepTotal = 0;

    while (i > 0 && j > 0) {
      warpingPath.push([i - 1, j - 1]);
      if (i > 1 && j > 1 && Math.abs(dM[i - 1]) > 0.025) {
        stepTotal++;
        if (dM[i - 1] * dU[j - 1] > 0) {
          stepMatches++;
        }
      }
      const diag = dp[i - 1][j - 1];
      const up = dp[i - 1][j];
      const left = dp[i][j - 1];
      if (diag <= up && diag <= left) {
        i--;
        j--;
      } else if (up <= left) {
        i--;
      } else {
        j--;
      }
    }
    warpingPath.reverse();

    const pathLen = Math.max(1, warpingPath.length);
    const dtwDistance = Number((totalCost / pathLen).toFixed(4));
    const stepMatchRatio = stepTotal > 0 ? Number((stepMatches / stepTotal).toFixed(2)) : 1;

    let similarity = Math.round((1 - dtwDistance * 2.15) * 100);
    if (stepTotal > 0 && stepMatchRatio < 0.5) {
      similarity = Math.min(similarity, Math.round(45 + stepMatchRatio * 35));
    }
    if (isMonotone) {
      similarity = Math.min(similarity, 54);
    }
    similarity = Math.max(20, Math.min(100, similarity));

    return {
      similarity,
      dtwDistance,
      stepMatchRatio,
      isMonotone,
      warpingPath
    };
  }

  /**
   * 6. PHÂN TÍCH TỔNG HỢP OFFLINE TRÊN AUDIOBUFFER HOẶC DỮ LIỆU PCM
   */
  function analyzeAudioBufferOffline(audioInput, options) {
    const opts = options || {};
    const modelCurve = Array.isArray(opts.modelCurve) && opts.modelCurve.length >= 4
      ? opts.modelCurve
      : [0.32, 0.68, 0.62, 0.56, 0.50, 0.44, 0.36];
    const targetMoras = Array.isArray(opts.targetMoras) ? opts.targetMoras : [];
    const expectedSokuonCount = typeof opts.expectedSokuonCount === 'number'
      ? opts.expectedSokuonCount
      : targetMoras.filter(m => m === 'っ').length;
    const expectedChouonCount = typeof opts.expectedChouonCount === 'number'
      ? opts.expectedChouonCount
      : targetMoras.filter(m => m === 'ー').length;

    let samples = null;
    let sampleRate = 16000;

    if (audioInput) {
      if (typeof audioInput.getChannelData === 'function') {
        samples = audioInput.getChannelData(0);
        sampleRate = audioInput.sampleRate || 44100;
      } else if (audioInput.samples instanceof Float32Array || Array.isArray(audioInput.samples)) {
        samples = audioInput.samples instanceof Float32Array
          ? audioInput.samples
          : new Float32Array(audioInput.samples);
        sampleRate = audioInput.sampleRate || 16000;
      } else if (audioInput instanceof Float32Array) {
        samples = audioInput;
        sampleRate = opts.sampleRate || 16000;
      }
    }

    if (!samples || samples.length < 128) {
      return null;
    }

    const rmsData = extractRmsEnvelope(samples, sampleRate, 15, 5);
    const pitchData = extractPitchContourYin(samples, sampleRate, modelCurve.length);
    const sokuonAudit = detectSilenceGaps(rmsData, expectedSokuonCount, targetMoras);
    const chouonAudit = detectVowelElongation(rmsData, expectedChouonCount, targetMoras);

    const userCurve = (pitchData && pitchData.userCurve)
      ? pitchData.userCurve
      : modelCurve.map(() => 0.50);

    const dtw = computeDtwSimilarity(modelCurve, userCurve);
    if (pitchData && pitchData.isMonotone) {
      dtw.isMonotone = true;
      dtw.similarity = Math.min(dtw.similarity, 54);
    }

    return {
      hasRealAudio: true,
      sampleRate,
      f0Samples: pitchData ? pitchData.f0Samples : [],
      userCurve,
      userEndPitch: pitchData ? pitchData.userEndPitch : 'flat',
      hzSpan: pitchData ? pitchData.hzSpan : 0,
      isMonotone: Boolean((pitchData && pitchData.isMonotone) || dtw.isMonotone),
      dtw,
      rms: {
        peakRms: rmsData.peakRms,
        meanVoicedRms: rmsData.meanVoicedRms,
        voicedDurationSec: rmsData.voicedDurationSec,
        totalDurationSec: rmsData.totalDurationSec
      },
      sokuon: sokuonAudit,
      chouon: chouonAudit
    };
  }

  /**
   * 7. GIẢI MÃ BLOB THU ÂM TỪ MEDIARECORDER BẰNG WEB AUDIO API OFFLINE
   * Không gây tranh chấp luồng thời gian thực trên Mobile & tự động đóng AudioContext sau khi giải mã
   */
  async function decodeAndAnalyzeBlob(blob, options) {
    if (!blob || typeof blob.arrayBuffer !== 'function') {
      return null;
    }
    const AudioCtxClass = (root && (root.AudioContext || root.webkitAudioContext)) || null;
    if (!AudioCtxClass) {
      return null;
    }
    let tempCtx = null;
    try {
      const arrayBuf = await blob.arrayBuffer();
      if (!arrayBuf || arrayBuf.byteLength === 0) return null;
      tempCtx = new AudioCtxClass();
      const decodedBuffer = await new Promise((resolve, reject) => {
        const p = tempCtx.decodeAudioData(
          arrayBuf,
          (buf) => resolve(buf),
          (err) => reject(err)
        );
        if (p && typeof p.then === 'function') {
          p.then(resolve).catch(reject);
        }
      });
      const report = analyzeAudioBufferOffline(decodedBuffer, options);
      if (tempCtx && typeof tempCtx.close === 'function') {
        try { await tempCtx.close(); } catch (e) {}
      }
      return report;
    } catch (err) {
      if (tempCtx && typeof tempCtx.close === 'function') {
        try { await tempCtx.close(); } catch (e) {}
      }
      return null;
    }
  }

  return {
    detectPitchYin,
    medianSmoothF0,
    normalizeF0ToPitchCurve,
    extractPitchContourYin,
    extractRmsEnvelope,
    detectSilenceGaps,
    detectVowelElongation,
    computeDtwSimilarity,
    analyzeAudioBufferOffline,
    decodeAndAnalyzeBlob
  };
});
