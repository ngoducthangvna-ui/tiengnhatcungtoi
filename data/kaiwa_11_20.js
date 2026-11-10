/**
 * Dữ liệu Hội thoại (Kaiwa), Luyện tập C (練習C) & Kiểm tra phản xạ Bài 11 - 20
 * 100% Annotated Furigana (<ruby>)
 */
(function(root) {
  'use strict';
  const kaiwa_11_20 = {
  "kaiwa-11": {
    "id": "kaiwa-11",
    "lesson": 11,
    "level": "Sơ cấp 1",
    "titleJp": "これ、<ruby>お願いします<rt>おねがいします</rt></ruby>",
    "titleVi": "Cho tôi gửi cái này",
    "subtitleVi": "Gửi bưu kiện quốc tế tại bưu điện",
    "sceneType": "post_office",
    "context": "Anh Wang mang một thùng quà đến bưu điện để gửi về Úc. Anh hỏi nhân viên bưu điện về cước phí và thời gian vận chuyển giữa đường hàng không (Air mail) và đường biển (Funabin).",
    "objectives": [
      "Biết cách sử dụng lượng từ đếm vật, người, thời gian và hỏi khoảng thời gian: どのくらい かかりますか.",
      "So sánh thời gian và chi phí giữa <ruby>航空便<rt>こうくうびん</rt></ruby> (đường hàng không) và <ruby>船便<rt>ふなびん</rt></ruby> (đường biển).",
      "Yêu cầu dịch vụ tại bưu điện bằng mẫu: これ、<ruby>船便<rt>ふなびん</rt></ruby>で <ruby>お願いします<rt>おねがいします</rt></ruby>."
    ],
    "audioSrc": "audio/kaiwa/lesson_11.mp3",
    "audioDuration": 24.55,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_11.mp3",
    "renshuuAudioDuration": 48.5,
    "characters": [
      {
        "id": "wang",
        "badgeJp": "ワン",
        "fullNameJp": "ワン",
        "roleVi": "anh Wang · bác sĩ người Trung Quốc tại Bệnh viện Kobe",
        "color": "emerald",
        "gender": "male",
        "pitch": 1.02,
        "rate": 0.95,
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "speechGenVoice": "Hyunsu",
        "voiceName": "Hyunsu (Bác sĩ trẻ điềm tĩnh)"
      },
      {
        "id": "staff",
        "badgeJp": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "fullNameJp": "<ruby>係員<rt>かかりいん</rt></ruby> / <ruby>受付<rt>うけつけ</rt></ruby>",
        "roleVi": "nhân viên phụ trách / lễ tân hướng dẫn",
        "color": "blue",
        "gender": "female",
        "pitch": 1.03,
        "rate": 0.95,
        "voice": "ja-JP-NanamiNeural",
        "speechGenVoice": "Nanami",
        "voiceName": "Nanami-Reception (Lễ tân hướng dẫn)"
      }
    ],
    "dialogue": [
      {
        "id": "k11-1",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "statement",
        "jp": "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "これ、オーストラリアまで お願いします。",
        "vi": "Cho tôi gửi kiện hàng này đến Úc với ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.56,
          0.59,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.51,
          0.48,
          0.35
        ],
        "explanation": "「[Vật]、[Đích đến] まで <ruby>お願いします<rt>おねがいします</rt></ruby>」dùng khi gửi hàng ở bưu điện.",
        "time": [
          0,
          2.93
        ]
      },
      {
        "id": "k11-2",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
        "rawJp": "はい。航空便ですか、船便ですか。",
        "vi": "Vâng. Anh gửi đường hàng không hay đường biển ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.53,
          0.52,
          0.55,
          0.57,
          0.56,
          0.53,
          0.62,
          0.85
        ],
        "explanation": "<ruby>航空便<rt>こうくうびん</rt></ruby> (こうくうびん): đường hàng không; <ruby>船便<rt>ふなびん</rt></ruby> (ふなびん): đường tàu biển.",
        "time": [
          3.31,
          6.5
        ]
      },
      {
        "id": "k11-3",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
        "rawJp": "航空便は いくらですか。",
        "vi": "Gửi đường hàng không thì hết bao nhiêu tiền ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.51,
          0.51,
          0.52,
          0.62,
          0.85
        ],
        "explanation": "Hỏi cước phí trước khi quyết định.",
        "time": [
          6.96,
          8.76
        ]
      },
      {
        "id": "k11-4",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "7,600<ruby>円<rt>えん</rt></ruby>です。",
        "rawJp": "7,600円です。",
        "vi": "Hết 7.600 yên ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.53,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Nhân viên cân kiện hàng và báo giá.",
        "time": [
          9.22,
          11.11
        ]
      },
      {
        "id": "k11-5",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>船便<rt>ふなびん</rt></ruby>は？",
        "rawJp": "船便は？",
        "vi": "Thế còn đường biển thì sao ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.85
        ],
        "explanation": "Lược bỏ「いくらですか」trong hội thoại tự nhiên.",
        "time": [
          11.5,
          12.58
        ]
      },
      {
        "id": "k11-6",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "3,450<ruby>円<rt>えん</rt></ruby>です。",
        "rawJp": "3,450円です。",
        "vi": "Là 3.450 yên ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.53,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Cước phí đường biển rẻ hơn một nửa so với đường bay.",
        "time": [
          13.03,
          15.31
        ]
      },
      {
        "id": "k11-7",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "question",
        "jp": "どのくらい かかりますか。",
        "rawJp": "どのくらい かかりますか。",
        "vi": "Mất khoảng bao lâu thì tới nơi ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.52,
          0.51,
          0.53,
          0.55,
          0.62,
          0.85
        ],
        "explanation": "「どのくらい かかりますか」hỏi tổng thời gian hoặc chi phí cần thiết.",
        "time": [
          15.7,
          17.33
        ]
      },
      {
        "id": "k11-8",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>航空便<rt>こうくうびん</rt></ruby>で 7<ruby>日<rt>にち</rt></ruby>ぐらい、<ruby>船便<rt>ふなびん</rt></ruby>で 2<ruby>か月<rt>かげつ</rt></ruby>ぐらいです。",
        "rawJp": "航空便で 7日ぐらい、船便で 2か月ぐらいです。",
        "vi": "Bằng đường hàng không mất khoảng 7 ngày, đường biển khoảng 2 tháng ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「ぐらい」biểu thị số lượng ước chừng (khoảng chừng).",
        "time": [
          17.78,
          21.7
        ]
      },
      {
        "id": "k11-9",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "statement",
        "jp": "じゃ、<ruby>船便<rt>ふなびん</rt></ruby>で <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "じゃ、船便で お願いします。",
        "vi": "Vậy cho tôi gửi bằng đường biển nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.52,
          0.51,
          0.53,
          0.55,
          0.48,
          0.35
        ],
        "explanation": "Chốt phương thức gửi hàng với nhân viên.",
        "time": [
          22.08,
          24.55
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc11-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Mua tem và phong bì theo số lượng",
        "context": "Sử dụng lượng từ <ruby>～枚<rt>～まい</rt></ruby> tại quầy bưu điện.",
        "lines": [
          {
            "id": "rc11-1-l1",
            "speaker": "A",
            "jp": "すみません。<u>80<ruby>円<rt>えん</rt></ruby>の <ruby>切手<rt>きって</rt></ruby></u>を <u>5<ruby>枚<rt>まい</rt></ruby></u> ください。",
            "rawJp": "すみません。80円の 切手を 5枚 ください。",
            "vi": "Xin lỗi, bán cho tôi 5 con tem 80 yên."
          },
          {
            "id": "rc11-1-l2",
            "speaker": "B",
            "jp": "はい。<ruby>全部で<rt>ぜんぶで</rt></ruby> <u>400<ruby>円<rt>えん</rt></ruby></u>です。",
            "rawJp": "はい。全部で 400円です。",
            "vi": "Vâng. Tổng cộng là 400 yên ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Tem 80 yên / 5 tờ / 400 yên)",
            "values": [
              "80<ruby>円<rt>えん</rt></ruby>の <ruby>切手<rt>きって</rt></ruby>",
              "5<ruby>枚<rt>まい</rt></ruby>",
              "400<ruby>円<rt>えん</rt></ruby>"
            ],
            "rawValues": [
              "80円の 切手",
              "5枚",
              "400円"
            ],
            "viValues": [
              "tem 80 yên",
              "5 tờ",
              "400 yên"
            ],
            "lineTimings": [
              [
                0,
                3.74
              ],
              [
                4.13,
                6.48
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Bưu thiếp / 10 tờ / 500 yên)",
            "values": [
              "はがき",
              "10<ruby>枚<rt>まい</rt></ruby>",
              "500<ruby>円<rt>えん</rt></ruby>"
            ],
            "rawValues": [
              "はがき",
              "10枚",
              "500円"
            ],
            "viValues": [
              "bưu thiếp",
              "10 tờ",
              "500 yên"
            ],
            "lineTimings": [
              [
                6.86,
                9.96
              ],
              [
                10.34,
                12.67
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.53,
                  0.53,
                  0.5,
                  0.46,
                  0.43,
                  0.43,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Phong bì / 3 chiếc / 240 yên)",
            "values": [
              "<ruby>封筒<rt>ふうとう</rt></ruby>",
              "3<ruby>枚<rt>まい</rt></ruby>",
              "240<ruby>円<rt>えん</rt></ruby>"
            ],
            "rawValues": [
              "封筒",
              "3枚",
              "240円"
            ],
            "viValues": [
              "phong bì",
              "3 chiếc",
              "240 yên"
            ],
            "lineTimings": [
              [
                13.06,
                16.15
              ],
              [
                16.54,
                19.22
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.51,
                  0.48,
                  0.48,
                  0.5,
                  0.52,
                  0.52,
                  0.49,
                  0.44,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc11-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nói về số người trong gia đình",
        "context": "Đếm người bằng <ruby>～人<rt>～じん</rt></ruby> (ひとり、ふたり、～にん).",
        "lines": [
          {
            "id": "rc11-2-l1",
            "speaker": "A",
            "jp": "ご<ruby>家族<rt>かぞく</rt></ruby>は <ruby>何人<rt>なんにん</rt></ruby>ですか。",
            "rawJp": "ご家族は 何人ですか。",
            "vi": "Gia đình bạn có mấy người?"
          },
          {
            "id": "rc11-2-l2",
            "speaker": "B",
            "jp": "<u>4<ruby>人<rt>ひと</rt></ruby></u>です。<ruby>両親<rt>りょうしん</rt></ruby>と <u><ruby>姉<rt>あね</rt></ruby></u>と わたしです。",
            "rawJp": "4人です。両親と 姉と わたしです。",
            "vi": "Có 4 người. Bố mẹ, chị gái và tôi."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (4 người / Chị gái)",
            "values": [
              "4<ruby>人<rt>ひと</rt></ruby>",
              "<ruby>姉<rt>あね</rt></ruby>"
            ],
            "rawValues": [
              "4人",
              "姉"
            ],
            "viValues": [
              "4 người",
              "chị gái"
            ],
            "lineTimings": [
              [
                19.61,
                21.26
              ],
              [
                21.65,
                24.84
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (5 người / Anh trai và em gái)",
            "values": [
              "5<ruby>人<rt>ひと</rt></ruby>",
              "<ruby>兄<rt>あに</rt></ruby>と <ruby>妹<rt>いもうと</rt></ruby>"
            ],
            "rawValues": [
              "5人",
              "兄と 妹"
            ],
            "viValues": [
              "5 người",
              "anh trai và em gái"
            ],
            "lineTimings": [
              [
                19.61,
                21.26
              ],
              [
                25.22,
                29.26
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (3 người / Vợ và con)",
            "values": [
              "3<ruby>人<rt>にん</rt></ruby>",
              "<ruby>妻<rt>つま</rt></ruby>と <ruby>子<rt>こ</rt></ruby>ども"
            ],
            "rawValues": [
              "3人",
              "妻と 子ども"
            ],
            "viValues": [
              "3 người",
              "vợ và con"
            ],
            "lineTimings": [
              [
                19.61,
                21.26
              ],
              [
                29.64,
                33.7
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc11-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi khoảng thời gian đã học / sinh sống",
        "context": "Sử dụng どのくらい để hỏi thời lượng.",
        "lines": [
          {
            "id": "rc11-3-l1",
            "speaker": "A",
            "jp": "どのくらい <u><ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました</u>か。",
            "rawJp": "どのくらい 日本語を 勉強しましたか。",
            "vi": "Bạn đã học tiếng Nhật được bao lâu rồi?"
          },
          {
            "id": "rc11-3-l2",
            "speaker": "B",
            "jp": "<u>3<ruby>か月<rt>かげつ</rt></ruby></u>ぐらい <u><ruby>勉強<rt>べんきょう</rt></ruby>しました</u>。",
            "rawJp": "3か月ぐらい 勉強しました。",
            "vi": "Tôi đã học được khoảng 3 tháng."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Học tiếng Nhật / 3 tháng)",
            "values": [
              "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました",
              "3<ruby>か月<rt>かげつ</rt></ruby>",
              "<ruby>勉強<rt>べんきょう</rt></ruby>しました"
            ],
            "rawValues": [
              "日本語を 勉強しました",
              "3か月",
              "勉強しました"
            ],
            "viValues": [
              "học tiếng Nhật",
              "3 tháng",
              "đã học"
            ],
            "lineTimings": [
              [
                34.08,
                36.65
              ],
              [
                37.03,
                39.14
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.52,
                  0.52,
                  0.54,
                  0.56,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Ở Nhật / 1 năm)",
            "values": [
              "<ruby>日本<rt>にほん</rt></ruby>に いました",
              "1<ruby>年<rt>ねん</rt></ruby>",
              "いました"
            ],
            "rawValues": [
              "日本に いました",
              "1年",
              "いました"
            ],
            "viValues": [
              "ở Nhật",
              "1 năm",
              "đã ở"
            ],
            "lineTimings": [
              [
                39.53,
                41.57
              ],
              [
                41.95,
                43.42
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Làm việc tại công ty / 2 năm rưỡi)",
            "values": [
              "<ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>きました",
              "2<ruby>年<rt>ねん</rt></ruby><ruby>半<rt>はん</rt></ruby>",
              "<ruby>働<rt>はたら</rt></ruby>きました"
            ],
            "rawValues": [
              "会社で 働きました",
              "2年半",
              "働きました"
            ],
            "viValues": [
              "làm việc",
              "2 năm rưỡi",
              "đã làm"
            ],
            "lineTimings": [
              [
                43.8,
                46.18
              ],
              [
                46.56,
                48.5
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq11-1",
        "question": "Chủ đề chính của bài hội thoại Bài 11「これ、<ruby>お願いします<rt>おねがいします</rt></ruby>」mang ý nghĩa là gì?",
        "options": [
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Cho tôi gửi cái này"
        ],
        "correctIdx": 3,
        "explanation": "「これ、<ruby>お願いします<rt>おねがいします</rt></ruby>」trong Bài 11 có nghĩa là \"Cho tôi gửi cái này\". Bối cảnh: Anh Wang mang một thùng quà đến bưu điện để gửi về Úc. Anh hỏi nhân viên bưu điện về cước phí và thời gian vận chuyển giữa đường hàng không (Air mail) và đường biển (Funabin)."
      },
      {
        "id": "kq11-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Cho tôi gửi kiện hàng này đến Úc với ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
          "7,600<ruby>円<rt>えん</rt></ruby>です。",
          "<ruby>船便<rt>ふなびん</rt></ruby>は？"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。」(Vâng. Anh gửi đường hàng không hay đường biển ạ?). <ruby>航空便<rt>こうくうびん</rt></ruby> (こうくうびん): đường hàng không; <ruby>船便<rt>ふなびん</rt></ruby> (ふなびん): đường tàu biển."
      },
      {
        "id": "kq11-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。」(Vâng. Anh gửi đường hàng không hay đường biển ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>船便<rt>ふなびん</rt></ruby>は？",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "7,600<ruby>円<rt>えん</rt></ruby>です。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。」(Gửi đường hàng không thì hết bao nhiêu tiền ạ?). Hỏi cước phí trước khi quyết định."
      },
      {
        "id": "kq11-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。」(Gửi đường hàng không thì hết bao nhiêu tiền ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
          "<ruby>船便<rt>ふなびん</rt></ruby>は？",
          "7,600<ruby>円<rt>えん</rt></ruby>です。",
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「7,600<ruby>円<rt>えん</rt></ruby>です。」(Hết 7.600 yên ạ.). Nhân viên cân kiện hàng và báo giá."
      },
      {
        "id": "kq11-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「7,600<ruby>円<rt>えん</rt></ruby>です。」(Hết 7.600 yên ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
          "<ruby>船便<rt>ふなびん</rt></ruby>は？"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「<ruby>船便<rt>ふなびん</rt></ruby>は？」(Thế còn đường biển thì sao ạ?). Lược bỏ「いくらですか」trong hội thoại tự nhiên."
      },
      {
        "id": "kq11-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>船便<rt>ふなびん</rt></ruby>は？」(Thế còn đường biển thì sao ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "3,450<ruby>円<rt>えん</rt></ruby>です。",
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「3,450<ruby>円<rt>えん</rt></ruby>です。」(Là 3.450 yên ạ.). Cước phí đường biển rẻ hơn một nửa so với đường bay."
      },
      {
        "id": "kq11-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「3,450<ruby>円<rt>えん</rt></ruby>です。」(Là 3.450 yên ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
          "どのくらい かかりますか。",
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「どのくらい かかりますか。」(Mất khoảng bao lâu thì tới nơi ạ?). 「どのくらい かかりますか」hỏi tổng thời gian hoặc chi phí cần thiết."
      },
      {
        "id": "kq11-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「どのくらい かかりますか。」(Mất khoảng bao lâu thì tới nơi ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>で 7<ruby>日<rt>にち</rt></ruby>ぐらい、<ruby>船便<rt>ふなびん</rt></ruby>で 2<ruby>か月<rt>かげつ</rt></ruby>ぐらいです。",
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「<ruby>航空便<rt>こうくうびん</rt></ruby>で 7<ruby>日<rt>にち</rt></ruby>ぐらい、<ruby>船便<rt>ふなびん</rt></ruby>で 2<ruby>か月<rt>かげつ</rt></ruby>ぐらいです。」(Bằng đường hàng không mất khoảng 7 ngày, đường biển khoảng 2 tháng ạ.). 「ぐらい」biểu thị số lượng ước chừng (khoảng chừng)."
      },
      {
        "id": "kq11-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>航空便<rt>こうくうびん</rt></ruby>で 7<ruby>日<rt>にち</rt></ruby>ぐらい、<ruby>船便<rt>ふなびん</rt></ruby>で 2<ruby>か月<rt>かげつ</rt></ruby>ぐらいです。」(Bằng đường hàng không mất khoảng 7 ngày, đường biển khoảng 2 tháng ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
          "じゃ、<ruby>船便<rt>ふなびん</rt></ruby>で <ruby>お願いします<rt>おねがいします</rt></ruby>。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 11, câu đáp chuẩn xác là:「じゃ、<ruby>船便<rt>ふなびん</rt></ruby>で <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Vậy cho tôi gửi bằng đường biển nhé.). Chốt phương thức gửi hàng với nhân viên."
      },
      {
        "id": "kq11-10",
        "question": "Để diễn đạt ý: \"Cho tôi gửi kiện hàng này đến Úc với ạ.\" trong tình huống Bài 11, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "はい。<ruby>航空便<rt>こうくうびん</rt></ruby>ですか、<ruby>船便<rt>ふなびん</rt></ruby>ですか。",
          "<ruby>航空便<rt>こうくうびん</rt></ruby>は いくらですか。",
          "7,600<ruby>円<rt>えん</rt></ruby>です。"
        ],
        "correctIdx": 0,
        "explanation": "Câu「これ、オーストラリアまで <ruby>お願いします<rt>おねがいします</rt></ruby>。」dịch nghĩa là \"Cho tôi gửi kiện hàng này đến Úc với ạ.\". 「[Vật]、[Đích đến] まで <ruby>お願いします<rt>おねがいします</rt></ruby>」dùng khi gửi hàng ở bưu điện."
      }
    ]
  },
  "kaiwa-12": {
    "id": "kaiwa-12",
    "lesson": 12,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>お祭<rt>まつ</rt></ruby>りは どうでしたか",
    "titleVi": "Lễ hội thế nào hả bạn?",
    "subtitleVi": "Kể về chuyến đi Kyoto & lễ hội Gion",
    "sceneType": "festival_opinion",
    "context": "Anh Miller vừa đi du lịch Kyoto về và mang quà lưu niệm tặng gia đình Yamada. Hai bên trò chuyện rôm rả về Lễ hội Gion (<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>), thời tiết và so sánh giữa các mùa.",
    "objectives": [
      "Hỏi cảm tưởng về một sự kiện đã qua ở thì quá khứ: ～は どうでしたか.",
      "So sánh hơn giữa hai đối tượng (N1 は N2 より A です) và chọn lựa giữa 2 bên (どちらが A ですか).",
      "Diễn tả so sánh bậc nhất trong một phạm vi: ～で <ruby>何<rt>なん</rt></ruby>が いちばん A ですか."
    ],
    "audioSrc": "audio/kaiwa/lesson_12.mp3",
    "audioDuration": 28.46,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_12.mp3",
    "renshuuAudioDuration": 47.64,
    "characters": [
      {
        "id": "miller",
        "badgeJp": "ミラー",
        "fullNameJp": "マイク・ミラー",
        "roleVi": "anh Mike Miller · người Mỹ, nhân viên mới của IMC",
        "color": "amber",
        "gender": "male",
        "pitch": 1.04,
        "rate": 0.95,
        "voice": "en-US-BrianMultilingualNeural",
        "speechGenVoice": "Brian",
        "voiceName": "Brian (Nam thanh niên trẻ)"
      },
      {
        "id": "yamada",
        "badgeJp": "<ruby>山田<rt>やまだ</rt></ruby>",
        "fullNameJp": "<ruby>山田<rt>やまだ</rt></ruby><ruby>一郎<rt>いちろう</rt></ruby>",
        "roleVi": "anh Yamada Ichiro · nhân viên công ty IMC",
        "color": "emerald",
        "gender": "male",
        "pitch": 1,
        "rate": 0.96,
        "voice": "ja-JP-KeitaNeural",
        "speechGenVoice": "Keita",
        "voiceName": "Keita (Nam công sở chuẩn Tokyo)"
      },
      {
        "id": "sato",
        "badgeJp": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "fullNameJp": "<ruby>佐藤<rt>さとう</rt></ruby>けい<ruby>子<rt>こ</rt></ruby>",
        "roleVi": "chị Sato Keiko · nhân viên công ty IMC",
        "color": "blue",
        "gender": "female",
        "pitch": 1.02,
        "rate": 0.96,
        "voice": "ja-JP-NanamiNeural",
        "speechGenVoice": "Nanami",
        "voiceName": "Nanami (Nữ công sở chuẩn Tokyo)"
      }
    ],
    "dialogue": [
      {
        "id": "k12-1",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。",
        "rawJp": "ただいま 帰りました。",
        "vi": "Tôi vừa đi về đây ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.59,
          0.54,
          0.5,
          0.5,
          0.48,
          0.35
        ],
        "explanation": "Cách nói lịch sự của「ただいま」khi đi xa trở về.",
        "time": [
          0,
          1.7
        ]
      },
      {
        "id": "k12-2",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。",
        "rawJp": "あ、お帰りなさい。",
        "vi": "Ồ, mừng anh đã về.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.67,
          0.63,
          0.57,
          0.53,
          0.38
        ],
        "explanation": "Đáp lại lời chào khi người nhà hoặc khách quen đi về.",
        "time": [
          2.09,
          3.65
        ]
      },
      {
        "id": "k12-3",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。",
        "rawJp": "これ、京都の お土産です。",
        "vi": "Cái này là quà lưu niệm từ Kyoto ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.51,
          0.51,
          0.52,
          0.48,
          0.35
        ],
        "explanation": "Trao quà đặc sản vùng Kyoto.",
        "time": [
          4.03,
          6.5
        ]
      },
      {
        "id": "k12-4",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "empathy_apology",
        "jp": "どうも すみません。",
        "rawJp": "どうも すみません。",
        "vi": "Cảm ơn anh nhiều nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.57,
          0.53,
          0.48,
          0.44,
          0.43,
          0.32
        ],
        "explanation": "Nhận quà với thái độ trân trọng.",
        "time": [
          6.89,
          8.38
        ]
      },
      {
        "id": "k12-5",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は どうでしたか。",
        "rawJp": "祇園祭は どうでしたか。",
        "vi": "Lễ hội Gion thế nào hả anh?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.51,
          0.51,
          0.52,
          0.62,
          0.85
        ],
        "explanation": "「どうでしたか」hỏi cảm nhận về sự việc đã diễn ra trong quá khứ.",
        "time": [
          8.76,
          10.46
        ]
      },
      {
        "id": "k12-6",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "おもしろかったです。とても にぎやかでした。",
        "rawJp": "おもしろかったです。とても にぎやかでした。",
        "vi": "Thú vị lắm ạ. Không khí vô cùng náo nhiệt.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "Chia quá khứ tính từ い (おもしろかった) và tính từ な (にぎやかでした).",
        "time": [
          10.92,
          14.38
        ]
      },
      {
        "id": "k12-7",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は <ruby>京都<rt>きょうと</rt></ruby>の <ruby>祭<rt>まつ</rt></ruby>りで いちばん <ruby>有名<rt>ゆうめい</rt></ruby>ですからね。",
        "rawJp": "祇園祭は 京都の 祭りで いちばん 有名ですからね。",
        "vi": "Vì lễ hội Gion là nổi tiếng nhất trong các lễ hội ở Kyoto mà nhỉ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>京都<rt>きょうと</rt></ruby>の<ruby>祭<rt>まつ</rt></ruby>りで いちばん <ruby>有名<rt>ゆうめい</rt></ruby>」: nổi tiếng nhất trong phạm vi các lễ hội ở Kyoto.",
        "time": [
          14.76,
          18.38
        ]
      },
      {
        "id": "k12-8",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "そうですね。<ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。これです。",
        "rawJp": "そうですね。写真を たくさん 撮りました。これです。",
        "vi": "Vâng đúng vậy. Tôi đã chụp rất nhiều ảnh. Đây ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "Khoe ảnh chụp chuyến đi.",
        "time": [
          18.77,
          23.45
        ]
      },
      {
        "id": "k12-9",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "exclamation",
        "jp": "わあ、すごい <ruby>人<rt>ひと</rt></ruby>ですね。",
        "rawJp": "わあ、すごい 人ですね。",
        "vi": "Chà, đông người ghê nhỉ!",
        "endPitch": "down",
        "pitchCurve": [
          0.36,
          0.76,
          0.71,
          0.67,
          0.62,
          0.58,
          0.58,
          0.56,
          0.52
        ],
        "explanation": "「すごい<ruby>人<rt>ひと</rt></ruby>」trong ngữ cảnh lễ hội nghĩa là lượng người đông nghịt.",
        "time": [
          23.83,
          25.8
        ]
      },
      {
        "id": "k12-10",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "ええ。ちょっと <ruby>疲れました<rt>つかれました</rt></ruby>。",
        "rawJp": "ええ。ちょっと 疲れました。",
        "vi": "Vâng. Cũng hơi mệt một chút ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.58,
          0.55,
          0.5,
          0.47,
          0.46,
          0.48,
          0.5,
          0.43,
          0.32
        ],
        "explanation": "Chia sẻ cảm giác thực tế sau chuyến đi đông người.",
        "time": [
          26.18,
          28.46
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc12-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi cảm nhận về chuyến đi đã qua",
        "context": "Hỏi thăm thời tiết và ấn tượng sau kỳ nghỉ.",
        "lines": [
          {
            "id": "rc12-1-l1",
            "speaker": "A",
            "jp": "<u><ruby>京都<rt>きょうと</rt></ruby></u>は どうでしたか。",
            "rawJp": "京都は どうでしたか。",
            "vi": "Chuyến đi Kyoto thế nào?"
          },
          {
            "id": "rc12-1-l2",
            "speaker": "B",
            "jp": "とても <u>きれいでした</u>。でも、<u><ruby>人<rt>ひと</rt></ruby>が <ruby>多<rt>おお</rt></ruby>かったです</u>。",
            "rawJp": "とても きれいでした。でも、人が 多かったです。",
            "vi": "Rất đẹp. Nhưng mà đông người lắm."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Kyoto / Đẹp / Đông người)",
            "values": [
              "<ruby>京都<rt>きょうと</rt></ruby>",
              "きれいでした",
              "<ruby>人<rt>ひと</rt></ruby>が <ruby>多<rt>おお</rt></ruby>かったです"
            ],
            "rawValues": [
              "京都",
              "きれいでした",
              "人が 多かったです"
            ],
            "viValues": [
              "Kyoto",
              "đẹp",
              "đông người"
            ],
            "lineTimings": [
              [
                0,
                1.61
              ],
              [
                1.99,
                5.57
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Hokkaido / Mát mẻ / Đồ ăn ngon)",
            "values": [
              "<ruby>北海道<rt>ほっかいどう</rt></ruby>",
              "<ruby>涼<rt>すず</rt></ruby>しかったです",
              "<ruby>料理<rt>りょうり</rt></ruby>が おいしかったです"
            ],
            "rawValues": [
              "北海道",
              "涼しかったです",
              "料理が おいしかったです"
            ],
            "viValues": [
              "Hokkaido",
              "mát mẻ",
              "đồ ăn ngon"
            ],
            "lineTimings": [
              [
                5.95,
                7.78
              ],
              [
                8.16,
                12.36
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Okinawa / Vui / Thời tiết nóng)",
            "values": [
              "<ruby>沖縄<rt>おきなわ</rt></ruby>",
              "<ruby>楽<rt>たの</rt></ruby>しかったです",
              "<ruby>暑<rt>あつ</rt></ruby>かったです"
            ],
            "rawValues": [
              "沖縄",
              "楽しかったです",
              "暑かったです"
            ],
            "viValues": [
              "Okinawa",
              "vui",
              "nóng"
            ],
            "lineTimings": [
              [
                12.74,
                14.45
              ],
              [
                14.83,
                18.34
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc12-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: So sánh lựa chọn giữa hai phương án",
        "context": "Hỏi đối phương thích cái nào hơn bằng どちらが.",
        "lines": [
          {
            "id": "rc12-2-l1",
            "speaker": "A",
            "jp": "<u>ビール</u>と <u><ruby>日本酒<rt>にほんしゅ</rt></ruby></u>と どちらが <ruby>好<rt>す</rt></ruby>きですか。",
            "rawJp": "ビールと 日本酒と どちらが 好きですか。",
            "vi": "Giữa bia và rượu Sake thì bạn thích cái nào hơn?"
          },
          {
            "id": "rc12-2-l2",
            "speaker": "B",
            "jp": "<u>ビール</u>の ほうが <ruby>好<rt>す</rt></ruby>きです。",
            "rawJp": "ビールの ほうが 好きです。",
            "vi": "Tôi thích bia hơn."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Bia / Rượu Sake)",
            "values": [
              "ビール",
              "<ruby>日本酒<rt>にほんしゅ</rt></ruby>",
              "ビール"
            ],
            "rawValues": [
              "ビール",
              "日本酒",
              "ビール"
            ],
            "viValues": [
              "bia",
              "rượu Sake",
              "bia"
            ],
            "lineTimings": [
              [
                18.72,
                21.07
              ],
              [
                21.46,
                23.18
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.51,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Mùa hè / Mùa đông)",
            "values": [
              "<ruby>夏<rt>なつ</rt></ruby>",
              "<ruby>冬<rt>ふゆ</rt></ruby>",
              "<ruby>夏<rt>なつ</rt></ruby>"
            ],
            "rawValues": [
              "夏",
              "冬",
              "夏"
            ],
            "viValues": [
              "mùa hè",
              "mùa đông",
              "mùa hè"
            ],
            "lineTimings": [
              [
                23.57,
                25.63
              ],
              [
                26.02,
                27.7
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Thịt / Cá)",
            "values": [
              "<ruby>肉<rt>にく</rt></ruby>",
              "<ruby>魚<rt>さかな</rt></ruby>",
              "<ruby>魚<rt>さかな</rt></ruby>"
            ],
            "rawValues": [
              "肉",
              "魚",
              "魚"
            ],
            "viValues": [
              "thịt",
              "cá",
              "cá"
            ],
            "lineTimings": [
              [
                28.08,
                30.26
              ],
              [
                30.65,
                32.47
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc12-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi cái nhất trong một nhóm (いちばん)",
        "context": "Hỏi món ăn, môn thể thao hoặc mùa yêu thích nhất.",
        "lines": [
          {
            "id": "rc12-3-l1",
            "speaker": "A",
            "jp": "<u><ruby>日本料理<rt>にほんりょうり</rt></ruby></u>で <ruby>何<rt>なん</rt></ruby>が いちばん <ruby>好<rt>す</rt></ruby>きですか。",
            "rawJp": "日本料理で 何が いちばん 好きですか。",
            "vi": "Trong các món ăn Nhật thì bạn thích món gì nhất?"
          },
          {
            "id": "rc12-3-l2",
            "speaker": "B",
            "jp": "<u>てんぷら</u>が いちばん <ruby>好<rt>す</rt></ruby>きです。",
            "rawJp": "てんぷらが いちばん 好きです。",
            "vi": "Tôi thích món Tempura nhất."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Món Nhật / Tempura)",
            "values": [
              "<ruby>日本料理<rt>にほんりょうり</rt></ruby>",
              "てんぷら"
            ],
            "rawValues": [
              "日本料理",
              "てんぷら"
            ],
            "viValues": [
              "món Nhật",
              "Tempura"
            ],
            "lineTimings": [
              [
                32.86,
                35.54
              ],
              [
                35.93,
                37.73
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Thể thao / Bóng đá)",
            "values": [
              "スポーツ",
              "サッカー"
            ],
            "rawValues": [
              "スポーツ",
              "サッカー"
            ],
            "viValues": [
              "thể thao",
              "bóng đá"
            ],
            "lineTimings": [
              [
                38.11,
                40.58
              ],
              [
                40.97,
                42.82
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Một năm / Tháng 5)",
            "values": [
              "1<ruby>年<rt>ねん</rt></ruby>",
              "5<ruby>月<rt>がつ</rt></ruby>"
            ],
            "rawValues": [
              "1年",
              "5月"
            ],
            "viValues": [
              "một năm",
              "tháng 5"
            ],
            "lineTimings": [
              [
                43.2,
                45.53
              ],
              [
                45.91,
                47.64
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq12-1",
        "question": "Chủ đề chính của bài hội thoại Bài 12「<ruby>お祭<rt>まつ</rt></ruby>りは どうでしたか」mang ý nghĩa là gì?",
        "options": [
          "Lễ hội thế nào hả bạn?",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật"
        ],
        "correctIdx": 0,
        "explanation": "「<ruby>お祭<rt>まつ</rt></ruby>りは どうでしたか」trong Bài 12 có nghĩa là \"Lễ hội thế nào hả bạn?\". Bối cảnh: Anh Miller vừa đi du lịch Kyoto về và mang quà lưu niệm tặng gia đình Yamada. Hai bên trò chuyện rôm rả về Lễ hội Gion (<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>), thời tiết và so sánh giữa các mùa."
      },
      {
        "id": "kq12-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「ただいま <ruby>帰<rt>かえ</rt></ruby>りました。」(Tôi vừa đi về đây ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は どうでしたか。",
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。",
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。",
          "どうも すみません。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。」(Ồ, mừng anh đã về.). Đáp lại lời chào khi người nhà hoặc khách quen đi về."
      },
      {
        "id": "kq12-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。」(Ồ, mừng anh đã về.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どうも すみません。",
          "<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は どうでしたか。",
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。",
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。」(Cái này là quà lưu niệm từ Kyoto ạ.). Trao quà đặc sản vùng Kyoto."
      },
      {
        "id": "kq12-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。」(Cái này là quà lưu niệm từ Kyoto ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。",
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。",
          "<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は どうでしたか。",
          "どうも すみません。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「どうも すみません。」(Cảm ơn anh nhiều nhé.). Nhận quà với thái độ trân trọng."
      },
      {
        "id": "kq12-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「どうも すみません。」(Cảm ơn anh nhiều nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は どうでしたか。",
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。",
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。",
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は どうでしたか。」(Lễ hội Gion thế nào hả anh?). 「どうでしたか」hỏi cảm nhận về sự việc đã diễn ra trong quá khứ."
      },
      {
        "id": "kq12-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は どうでしたか。」(Lễ hội Gion thế nào hả anh?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。",
          "おもしろかったです。とても にぎやかでした。",
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。",
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「おもしろかったです。とても にぎやかでした。」(Thú vị lắm ạ. Không khí vô cùng náo nhiệt.). Chia quá khứ tính từ い (おもしろかった) và tính từ な (にぎやかでした)."
      },
      {
        "id": "kq12-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「おもしろかったです。とても にぎやかでした。」(Thú vị lắm ạ. Không khí vô cùng náo nhiệt.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。",
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。",
          "<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は <ruby>京都<rt>きょうと</rt></ruby>の <ruby>祭<rt>まつ</rt></ruby>りで いちばん <ruby>有名<rt>ゆうめい</rt></ruby>ですからね。",
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は <ruby>京都<rt>きょうと</rt></ruby>の <ruby>祭<rt>まつ</rt></ruby>りで いちばん <ruby>有名<rt>ゆうめい</rt></ruby>ですからね。」(Vì lễ hội Gion là nổi tiếng nhất trong các lễ hội ở Kyoto mà nhỉ.). 「<ruby>京都<rt>きょうと</rt></ruby>の<ruby>祭<rt>まつ</rt></ruby>りで いちばん <ruby>有名<rt>ゆうめい</rt></ruby>」: nổi tiếng nhất trong phạm vi các lễ hội ở Kyoto."
      },
      {
        "id": "kq12-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>祇園祭<rt>ぎおんまつり</rt></ruby>は <ruby>京都<rt>きょうと</rt></ruby>の <ruby>祭<rt>まつ</rt></ruby>りで いちばん <ruby>有名<rt>ゆうめい</rt></ruby>ですからね。」(Vì lễ hội Gion là nổi tiếng nhất trong các lễ hội ở Kyoto mà nhỉ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。",
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。",
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。",
          "そうですね。<ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。これです。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「そうですね。<ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。これです。」(Vâng đúng vậy. Tôi đã chụp rất nhiều ảnh. Đây ạ.). Khoe ảnh chụp chuyến đi."
      },
      {
        "id": "kq12-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですね。<ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。これです。」(Vâng đúng vậy. Tôi đã chụp rất nhiều ảnh. Đây ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "わあ、すごい <ruby>人<rt>ひと</rt></ruby>ですね。",
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。",
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。",
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「わあ、すごい <ruby>人<rt>ひと</rt></ruby>ですね。」(Chà, đông người ghê nhỉ!). 「すごい<ruby>人<rt>ひと</rt></ruby>」trong ngữ cảnh lễ hội nghĩa là lượng người đông nghịt."
      },
      {
        "id": "kq12-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「わあ、すごい <ruby>人<rt>ひと</rt></ruby>ですね。」(Chà, đông người ghê nhỉ!), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これ、<ruby>京都<rt>きょうと</rt></ruby>の <ruby>お土産<rt>おみやげ</rt></ruby>です。",
          "ええ。ちょっと <ruby>疲れました<rt>つかれました</rt></ruby>。",
          "ただいま <ruby>帰<rt>かえ</rt></ruby>りました。",
          "あ、<ruby>お帰りなさい<rt>おかえりなさい</rt></ruby>。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 12, câu đáp chuẩn xác là:「ええ。ちょっと <ruby>疲れました<rt>つかれました</rt></ruby>。」(Vâng. Cũng hơi mệt một chút ạ.). Chia sẻ cảm giác thực tế sau chuyến đi đông người."
      }
    ]
  },
  "kaiwa-13": {
    "id": "kaiwa-13",
    "lesson": 13,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>別々に<rt>べつべつに</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>",
    "titleVi": "Tính tiền riêng giúp chúng tôi nhé",
    "subtitleVi": "Đi ăn trưa tại quán ăn & gọi món",
    "sceneType": "restaurant",
    "context": "Giờ nghỉ trưa, anh Yamada và anh Miller cùng đi ra ngoài ăn trưa tại quán ăn truyền thống Nhật Bản Tsuruya. Hai người gọi món và lúc thanh toán xin tính tiền riêng từng người.",
    "objectives": [
      "Nói về mong muốn ăn uống của bản thân bằng V-たいです và <ruby>何か<rt>なにか</rt></ruby>が ほしいです.",
      "Gọi món ăn tại nhà hàng Nhật (<ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>、<ruby>牛丼<rt>ぎゅうどん</rt></ruby>) bằng ～に します / ～を <ruby>お願いします<rt>おねがいします</rt></ruby>.",
      "Yêu cầu thanh toán tiền riêng từng người tại quầy thu ngân: <ruby>別々に<rt>べつべつに</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>."
    ],
    "audioSrc": "audio/kaiwa/lesson_13.mp3",
    "audioDuration": 36.74,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_13.mp3",
    "renshuuAudioDuration": 43.99,
    "characters": [
      {
        "id": "yamada",
        "badgeJp": "<ruby>山田<rt>やまだ</rt></ruby>",
        "fullNameJp": "<ruby>山田<rt>やまだ</rt></ruby><ruby>一郎<rt>いちろう</rt></ruby>",
        "roleVi": "anh Yamada Ichiro · nhân viên công ty IMC",
        "color": "emerald",
        "gender": "male",
        "pitch": 1,
        "rate": 0.96,
        "voice": "ja-JP-KeitaNeural",
        "speechGenVoice": "Keita",
        "voiceName": "Keita (Nam công sở chuẩn Tokyo)"
      },
      {
        "id": "miller",
        "badgeJp": "ミラー",
        "fullNameJp": "マイク・ミラー",
        "roleVi": "anh Mike Miller · người Mỹ, nhân viên mới của IMC",
        "color": "amber",
        "gender": "male",
        "pitch": 1.04,
        "rate": 0.95,
        "voice": "en-US-BrianMultilingualNeural",
        "speechGenVoice": "Brian",
        "voiceName": "Brian (Nam thanh niên trẻ)"
      },
      {
        "id": "clerk",
        "badgeJp": "<ruby>店員<rt>てんいん</rt></ruby>",
        "fullNameJp": "<ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby> / <ruby>店員<rt>てんいん</rt></ruby>",
        "roleVi": "nhân viên cửa hàng / quầy phục vụ",
        "color": "emerald",
        "gender": "female",
        "pitch": 1.05,
        "rate": 0.97,
        "voice": "en-US-EmmaMultilingualNeural",
        "speechGenVoice": "Emma",
        "voiceName": "Emma-Service (Nhân viên quầy)"
      }
    ],
    "dialogue": [
      {
        "id": "k13-1",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。",
        "rawJp": "もう 12時ですね。昼ごはんを 食べに 行きませんか。",
        "vi": "Đã 12 giờ rồi nhỉ. Chúng ta đi ăn trưa nhé?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.62,
          0.85
        ],
        "explanation": "「<ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きます」: đi để ăn (cấu trúc chỉ mục đích của động từ di chuyển).",
        "time": [
          0,
          3.53
        ]
      },
      {
        "id": "k13-2",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ。",
        "rawJp": "ええ。",
        "vi": "Vâng, đi thôi ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Đồng ý đi ăn trưa cùng đồng nghiệp.",
        "time": [
          3.98,
          4.54
        ]
      },
      {
        "id": "k13-3",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。",
        "rawJp": "どこへ 行きましょうか。",
        "vi": "Chúng mình đi quán nào bây giờ nhỉ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.51,
          0.51,
          0.52,
          0.62,
          0.85
        ],
        "explanation": "Hỏi ý kiến người đi cùng.",
        "time": [
          4.92,
          6.29
        ]
      },
      {
        "id": "k13-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "そうですね。きょうは <ruby>日本料理<rt>にほんりょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいですね。",
        "rawJp": "そうですね。きょうは 日本料理が 食べたいですね。",
        "vi": "Để xem nào... Hôm nay tôi muốn ăn món Nhật ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「V-たいです」diễn tả nguyện vọng của bản thân; đối tượng có thể dùng が hoặc を.",
        "time": [
          6.74,
          10.68
        ]
      },
      {
        "id": "k13-5",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "じゃ、「つるや」へ <ruby>行<rt>い</rt></ruby>きましょう。",
        "rawJp": "じゃ、「つるや」へ 行きましょう。",
        "vi": "Vậy thì chúng ta đến quán \"Tsuruya\" đi.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.52,
          0.52,
          0.54,
          0.56,
          0.55,
          0.48,
          0.35
        ],
        "explanation": "Đề xuất một quán ăn Nhật quen thuộc.",
        "time": [
          11.06,
          13.06
        ]
      },
      {
        "id": "k13-6",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>ご注文は？<rt>ごちゅうもんは？</rt></ruby>",
        "rawJp": "ご注文は？",
        "vi": "Quý khách dùng món gì ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.85
        ],
        "explanation": "Câu hỏi gọi món ngắn gọn của nhân viên phục vụ.",
        "time": [
          13.44,
          14.64
        ]
      },
      {
        "id": "k13-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "わたしは <ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>。",
        "rawJp": "わたしは 天ぷら定食。",
        "vi": "Cho tôi một suất cơm Tempura.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.59,
          0.54,
          0.5,
          0.5,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>定食<rt>ていしょく</rt></ruby>」(ていしょく) là suất cơm phần gồm món chính, cơm, súp miso và đồ chua.",
        "time": [
          15.1,
          17.06
        ]
      },
      {
        "id": "k13-8",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "わたしは <ruby>牛丼<rt>ぎゅうどん</rt></ruby>。",
        "rawJp": "わたしは 牛丼。",
        "vi": "Còn tôi lấy cơm thịt bò Gyudon.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.61,
          0.57,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>牛丼<rt>ぎゅうどん</rt></ruby>」(ぎゅうどん) là cơm bát tô phủ thịt bò hầm hành tây.",
        "time": [
          17.45,
          18.72
        ]
      },
      {
        "id": "k13-9",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>と <ruby>牛丼<rt>ぎゅうどん</rt></ruby>ですね。<ruby>少々<rt>しょうしょう</rt></ruby> お<ruby>待<rt>ま</rt></ruby>ち ください。",
        "rawJp": "天ぷら定食と 牛丼ですね。少々 お待ち ください。",
        "vi": "Một suất Tempura và một cơm bò phải không ạ. Xin quý khách đợi một chút.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "Nhân viên xác nhận lại đơn hàng và xin khách chờ.",
        "time": [
          19.1,
          23.57
        ]
      },
      {
        "id": "k13-10",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "1,680<ruby>円<rt>えん</rt></ruby>で ございます。",
        "rawJp": "1,680円で ございます。",
        "vi": "Tổng cộng hết 1.680 yên ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.52,
          0.52,
          0.54,
          0.56,
          0.55,
          0.48,
          0.35
        ],
        "explanation": "Nhân viên thông báo tổng số tiền tại quầy thu ngân.",
        "time": [
          23.88,
          26.69
        ]
      },
      {
        "id": "k13-11",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "すみません。<ruby>別々に<rt>べつべつに</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "すみません。別々に お願いします。",
        "vi": "Xin lỗi, làm ơn tính tiền riêng từng người giúp chúng tôi nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.56,
          0.51,
          0.48,
          0.48,
          0.5,
          0.52,
          0.52,
          0.49,
          0.44,
          0.43,
          0.32
        ],
        "explanation": "「<ruby>別々に<rt>べつべつに</rt></ruby><ruby>お願いします<rt>おねがいします</rt></ruby>」(べつべつにおねがいします): văn hóa chia tiền sòng phẳng (Warikan/tính riêng) rất phổ biến ở Nhật.",
        "time": [
          27.07,
          30.5
        ]
      },
      {
        "id": "k13-12",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "はい。<ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>は 980<ruby>円<rt>えん</rt></ruby>、<ruby>牛丼<rt>ぎゅうどん</rt></ruby>は 700<ruby>円<rt>えん</rt></ruby>です。",
        "rawJp": "はい。天ぷら定食は 980円、牛丼は 700円です。",
        "vi": "Vâng ạ. Suất Tempura là 980 yên, cơm bò là 700 yên ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "Nhân viên tách hóa đơn riêng cho từng người.",
        "time": [
          30.89,
          36.74
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc13-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Nói về thứ mình đang muốn có (ほしい)",
        "context": "Chia sẻ mong muốn mua sắm.",
        "lines": [
          {
            "id": "rc13-1-l1",
            "speaker": "A",
            "jp": "<ruby>今<rt>いま</rt></ruby> <ruby>何<rt>なん</rt></ruby>が いちばん ほしいですか。",
            "rawJp": "今 何が いちばん ほしいですか。",
            "vi": "Bây giờ bạn muốn có thứ gì nhất?"
          },
          {
            "id": "rc13-1-l2",
            "speaker": "B",
            "jp": "<u><ruby>新<rt>あたら</rt></ruby>しい パソコン</u>が ほしいです。",
            "rawJp": "新しい パソコンが ほしいです。",
            "vi": "Tôi muốn có một chiếc máy tính cá nhân mới."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Máy tính mới)",
            "values": [
              "<ruby>新<rt>あたら</rt></ruby>しい パソコン"
            ],
            "rawValues": [
              "新しい パソコン"
            ],
            "viValues": [
              "máy tính mới"
            ],
            "lineTimings": [
              [
                0,
                2.21
              ],
              [
                2.59,
                4.73
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Xe hơi)",
            "values": [
              "<ruby>車<rt>くるま</rt></ruby>"
            ],
            "rawValues": [
              "車"
            ],
            "viValues": [
              "xe hơi"
            ],
            "lineTimings": [
              [
                0,
                2.21
              ],
              [
                5.11,
                6.58
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Máy ảnh kỹ thuật số)",
            "values": [
              "デジカメ"
            ],
            "rawValues": [
              "デジカメ"
            ],
            "viValues": [
              "máy ảnh kỹ thuật số"
            ],
            "lineTimings": [
              [
                0,
                2.21
              ],
              [
                6.96,
                8.62
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc13-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nói về nơi muốn đi và việc muốn làm (V-たい)",
        "context": "Hỏi dự định kỳ nghỉ hè.",
        "lines": [
          {
            "id": "rc13-2-l1",
            "speaker": "A",
            "jp": "<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>きたいですか。",
            "rawJp": "夏休みは どこへ 行きたいですか。",
            "vi": "Kỳ nghỉ hè bạn muốn đi đâu?"
          },
          {
            "id": "rc13-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>沖縄<rt>おきなわ</rt></ruby></u>へ <ruby>行<rt>い</rt></ruby>きたいです。",
            "rawJp": "沖縄へ 行きたいです。",
            "vi": "Tôi muốn đi Okinawa."
          },
          {
            "id": "rc13-2-l3",
            "speaker": "A",
            "jp": "いいですね。<ruby>何<rt>なん</rt></ruby>を したいですか。",
            "rawJp": "いいですね。何を したいですか。",
            "vi": "Hay quá. Bạn muốn làm gì ở đó?"
          },
          {
            "id": "rc13-2-l4",
            "speaker": "B",
            "jp": "<u><ruby>海<rt>うみ</rt></ruby>で <ruby>泳<rt>およ</rt></ruby>ぎたい</u>です。",
            "rawJp": "海で 泳ぎたいです。",
            "vi": "Tôi muốn bơi ở biển."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Okinawa / Bơi ở biển)",
            "values": [
              "<ruby>沖縄<rt>おきなわ</rt></ruby>",
              "<ruby>海<rt>うみ</rt></ruby>で <ruby>泳<rt>およ</rt></ruby>ぎたい"
            ],
            "rawValues": [
              "沖縄",
              "海で 泳ぎたい"
            ],
            "viValues": [
              "Okinawa",
              "bơi ở biển"
            ],
            "lineTimings": [
              [
                9,
                11.06
              ],
              [
                11.45,
                13.13
              ],
              [
                13.51,
                15.77
              ],
              [
                16.15,
                17.74
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Hokkaido / Trượt tuyết)",
            "values": [
              "<ruby>北海道<rt>ほっかいどう</rt></ruby>",
              "スキーを したい"
            ],
            "rawValues": [
              "北海道",
              "スキーを したい"
            ],
            "viValues": [
              "Hokkaido",
              "trượt tuyết"
            ],
            "lineTimings": [
              [
                9,
                11.06
              ],
              [
                18.12,
                20.02
              ],
              [
                13.51,
                15.77
              ],
              [
                20.4,
                21.91
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Pháp / Mua sắm)",
            "values": [
              "フランス",
              "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を したい"
            ],
            "rawValues": [
              "フランス",
              "買い物を したい"
            ],
            "viValues": [
              "Pháp",
              "mua sắm"
            ],
            "lineTimings": [
              [
                9,
                11.06
              ],
              [
                22.3,
                23.98
              ],
              [
                13.51,
                15.77
              ],
              [
                24.36,
                25.9
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc13-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Rủ đi ăn uống khi đói / khát",
        "context": "Dùng <ruby>何か<rt>なにか</rt></ruby> <ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>きませんか.",
        "lines": [
          {
            "id": "rc13-3-l1",
            "speaker": "A",
            "jp": "<u>おなかが すきました</u>ね。",
            "rawJp": "おなかが すきましたね。",
            "vi": "Đói bụng rồi nhỉ."
          },
          {
            "id": "rc13-3-l2",
            "speaker": "B",
            "jp": "ええ。<ruby>何か<rt>なにか</rt></ruby> <u><ruby>食<rt>た</rt></ruby>べ</u>に <ruby>行<rt>い</rt></ruby>きませんか。",
            "rawJp": "ええ。何か 食べに 行きませんか。",
            "vi": "Ừ. Chúng mình đi ăn cái gì đó nhé?"
          },
          {
            "id": "rc13-3-l3",
            "speaker": "A",
            "jp": "いいですね。<ruby>行<rt>い</rt></ruby>きましょう。",
            "rawJp": "いいですね。行きましょう。",
            "vi": "Ý hay đấy. Đi thôi."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đói bụng / Đi ăn)",
            "values": [
              "おなかが すきました",
              "<ruby>食<rt>た</rt></ruby>べ"
            ],
            "rawValues": [
              "おなかが すきました",
              "食べ"
            ],
            "viValues": [
              "đói bụng",
              "ăn"
            ],
            "lineTimings": [
              [
                26.28,
                27.84
              ],
              [
                28.22,
                30.62
              ],
              [
                31.01,
                33.05
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.71,
                  0.68,
                  0.63,
                  0.6,
                  0.59,
                  0.61,
                  0.63,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Khát nước / Đi uống ở quán)",
            "values": [
              "のどが <ruby>渇<rt>かわ</rt></ruby>きました",
              "<ruby>喫茶店<rt>きっさてん</rt></ruby>へ <ruby>飲<rt>の</rt></ruby>み"
            ],
            "rawValues": [
              "のどが 渇きました",
              "喫茶店へ 飲み"
            ],
            "viValues": [
              "khát nước",
              "uống nước"
            ],
            "lineTimings": [
              [
                33.43,
                35.09
              ],
              [
                35.47,
                38.47
              ],
              [
                31.01,
                33.05
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.51,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.71,
                  0.68,
                  0.63,
                  0.6,
                  0.59,
                  0.61,
                  0.63,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Muốn mua quà / Đi bách hóa)",
            "values": [
              "プレゼントが ほしいです",
              "デパートへ <ruby>買<rt>か</rt></ruby>い"
            ],
            "rawValues": [
              "プレゼントが ほしいです",
              "デパートへ 買い"
            ],
            "viValues": [
              "muốn mua quà",
              "mua"
            ],
            "lineTimings": [
              [
                38.86,
                40.68
              ],
              [
                41.06,
                43.99
              ],
              [
                31.01,
                33.05
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.65,
                  0.61,
                  0.57,
                  0.57,
                  0.59,
                  0.61,
                  0.6,
                  0.53,
                  0.38
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.71,
                  0.68,
                  0.63,
                  0.6,
                  0.59,
                  0.61,
                  0.63,
                  0.56,
                  0.52
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq13-1",
        "question": "Chủ đề chính của bài hội thoại Bài 13「<ruby>別々に<rt>べつべつに</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Tính tiền riêng giúp chúng tôi nhé",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「<ruby>別々に<rt>べつべつに</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>」trong Bài 13 có nghĩa là \"Tính tiền riêng giúp chúng tôi nhé\". Bối cảnh: Giờ nghỉ trưa, anh Yamada và anh Miller cùng đi ra ngoài ăn trưa tại quán ăn truyền thống Nhật Bản Tsuruya. Hai người gọi món và lúc thanh toán xin tính tiền riêng từng người."
      },
      {
        "id": "kq13-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。」(Đã 12 giờ rồi nhỉ. Chúng ta đi ăn trưa nhé?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですね。きょうは <ruby>日本料理<rt>にほんりょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいですね。",
          "じゃ、「つるや」へ <ruby>行<rt>い</rt></ruby>きましょう。",
          "ええ。",
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「ええ。」(Vâng, đi thôi ạ.). Đồng ý đi ăn trưa cùng đồng nghiệp."
      },
      {
        "id": "kq13-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。」(Vâng, đi thôi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。",
          "そうですね。きょうは <ruby>日本料理<rt>にほんりょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいですね。",
          "じゃ、「つるや」へ <ruby>行<rt>い</rt></ruby>きましょう。",
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「どこへ <ruby>行<rt>い</rt></ruby>きましょうか。」(Chúng mình đi quán nào bây giờ nhỉ?). Hỏi ý kiến người đi cùng."
      },
      {
        "id": "kq13-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「どこへ <ruby>行<rt>い</rt></ruby>きましょうか。」(Chúng mình đi quán nào bây giờ nhỉ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですね。きょうは <ruby>日本料理<rt>にほんりょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいですね。",
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。",
          "ええ。",
          "じゃ、「つるや」へ <ruby>行<rt>い</rt></ruby>きましょう。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「そうですね。きょうは <ruby>日本料理<rt>にほんりょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいですね。」(Để xem nào... Hôm nay tôi muốn ăn món Nhật ạ.). 「V-たいです」diễn tả nguyện vọng của bản thân; đối tượng có thể dùng が hoặc を."
      },
      {
        "id": "kq13-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですね。きょうは <ruby>日本料理<rt>にほんりょうり</rt></ruby>が <ruby>食<rt>た</rt></ruby>べたいですね。」(Để xem nào... Hôm nay tôi muốn ăn món Nhật ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。",
          "じゃ、「つるや」へ <ruby>行<rt>い</rt></ruby>きましょう。",
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。",
          "ええ。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「じゃ、「つるや」へ <ruby>行<rt>い</rt></ruby>きましょう。」(Vậy thì chúng ta đến quán \"Tsuruya\" đi.). Đề xuất một quán ăn Nhật quen thuộc."
      },
      {
        "id": "kq13-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「じゃ、「つるや」へ <ruby>行<rt>い</rt></ruby>きましょう。」(Vậy thì chúng ta đến quán \"Tsuruya\" đi.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。",
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。",
          "<ruby>ご注文は？<rt>ごちゅうもんは？</rt></ruby>",
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「<ruby>ご注文は？<rt>ごちゅうもんは？</rt></ruby>」(Quý khách dùng món gì ạ?). Câu hỏi gọi món ngắn gọn của nhân viên phục vụ."
      },
      {
        "id": "kq13-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>ご注文は？<rt>ごちゅうもんは？</rt></ruby>」(Quý khách dùng món gì ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。",
          "ええ。",
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。",
          "わたしは <ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「わたしは <ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>。」(Cho tôi một suất cơm Tempura.). 「<ruby>定食<rt>ていしょく</rt></ruby>」(ていしょく) là suất cơm phần gồm món chính, cơm, súp miso và đồ chua."
      },
      {
        "id": "kq13-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「わたしは <ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>。」(Cho tôi một suất cơm Tempura.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "わたしは <ruby>牛丼<rt>ぎゅうどん</rt></ruby>。",
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。",
          "ええ。",
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「わたしは <ruby>牛丼<rt>ぎゅうどん</rt></ruby>。」(Còn tôi lấy cơm thịt bò Gyudon.). 「<ruby>牛丼<rt>ぎゅうどん</rt></ruby>」(ぎゅうどん) là cơm bát tô phủ thịt bò hầm hành tây."
      },
      {
        "id": "kq13-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「わたしは <ruby>牛丼<rt>ぎゅうどん</rt></ruby>。」(Còn tôi lấy cơm thịt bò Gyudon.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。",
          "<ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>と <ruby>牛丼<rt>ぎゅうどん</rt></ruby>ですね。<ruby>少々<rt>しょうしょう</rt></ruby> お<ruby>待<rt>ま</rt></ruby>ち ください。",
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。",
          "ええ。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「<ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>と <ruby>牛丼<rt>ぎゅうどん</rt></ruby>ですね。<ruby>少々<rt>しょうしょう</rt></ruby> お<ruby>待<rt>ま</rt></ruby>ち ください。」(Một suất Tempura và một cơm bò phải không ạ. Xin quý khách đợi một chút.). Nhân viên xác nhận lại đơn hàng và xin khách chờ."
      },
      {
        "id": "kq13-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>天ぷら<rt>てんぷら</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>と <ruby>牛丼<rt>ぎゅうどん</rt></ruby>ですね。<ruby>少々<rt>しょうしょう</rt></ruby> お<ruby>待<rt>ま</rt></ruby>ち ください。」(Một suất Tempura và một cơm bò phải không ạ. Xin quý khách đợi một chút.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。",
          "どこへ <ruby>行<rt>い</rt></ruby>きましょうか。",
          "1,680<ruby>円<rt>えん</rt></ruby>で ございます。",
          "もう 12<ruby>時<rt>じ</rt></ruby>ですね。<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 13, câu đáp chuẩn xác là:「1,680<ruby>円<rt>えん</rt></ruby>で ございます。」(Tổng cộng hết 1.680 yên ạ.). Nhân viên thông báo tổng số tiền tại quầy thu ngân."
      }
    ]
  },
  "kaiwa-14": {
    "id": "kaiwa-14",
    "lesson": 14,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください",
    "titleVi": "Cho tôi đi đến Umeda",
    "subtitleVi": "Chỉ đường cho tài xế taxi & trả tiền",
    "sceneType": "taxi",
    "context": "Chị Karina bắt xe taxi đi đến ga Umeda. Trên đường đi, chị dùng mẫu câu V-てください để hướng dẫn tài xế rẽ phải, đi thẳng và dừng lại trước cửa hàng hoa.",
    "objectives": [
      "Biết cách nói điểm đến khi lên xe taxi: [Địa điểm] まで <ruby>行<rt>い</rt></ruby>って ください.",
      "Hướng dẫn tài xế rẽ trái/phải ở tín hiệu đèn giao thông (<ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください) và dừng xe (<ruby>止<rt>と</rt></ruby>めて ください).",
      "Đưa tiền thanh toán và nhận tiền thừa trên xe taxi."
    ],
    "audioSrc": "audio/kaiwa/lesson_14.mp3",
    "audioDuration": 25.94,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_14.mp3",
    "renshuuAudioDuration": 41.06,
    "characters": [
      {
        "id": "karina",
        "badgeJp": "カリナ",
        "fullNameJp": "カリナ",
        "roleVi": "chị Karina · du học sinh người Indonesia tại ĐH Fuji",
        "color": "rose",
        "gender": "female",
        "pitch": 1.05,
        "rate": 0.98,
        "voice": "en-US-EmmaMultilingualNeural",
        "speechGenVoice": "Emma",
        "voiceName": "Emma (Nữ sinh viên trẻ trung)"
      },
      {
        "id": "driver",
        "badgeJp": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>",
        "fullNameJp": "タクシーの <ruby>運転手<rt>うんてんしゅ</rt></ruby>",
        "roleVi": "tài xế xe taxi",
        "color": "emerald",
        "gender": "male",
        "pitch": 0.96,
        "rate": 0.97,
        "voice": "ja-JP-KeitaNeural",
        "speechGenVoice": "Keita",
        "voiceName": "Keita-Driver (Tài xế năng động)"
      }
    ],
    "dialogue": [
      {
        "id": "k14-1",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。",
        "rawJp": "梅田まで 行って ください。",
        "vi": "Cho tôi đi đến Umeda với ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.52,
          0.51,
          0.53,
          0.55,
          0.48,
          0.35
        ],
        "explanation": "「V-てください」dùng để yêu cầu hoặc hướng dẫn lịch sự.",
        "time": [
          0,
          1.87
        ]
      },
      {
        "id": "k14-2",
        "speakerId": "driver",
        "speakerBadge": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "はい。",
        "rawJp": "はい。",
        "vi": "Vâng.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Tài xế nhận điểm đến và khởi hành.",
        "time": [
          2.26,
          2.78
        ]
      },
      {
        "id": "k14-3",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
        "rawJp": "すみません。あの 信号を 右へ 曲がって ください。",
        "vi": "Xin lỗi bác tài, ở chỗ đèn tín hiệu kia làm ơn rẽ phải giúp tôi nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.52,
          0.54,
          0.54,
          0.51,
          0.47,
          0.44,
          0.44,
          0.46,
          0.49,
          0.43,
          0.32
        ],
        "explanation": "「<ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がる」: rẽ phải tại cột đèn giao thông.",
        "time": [
          3.17,
          7.54
        ]
      },
      {
        "id": "k14-4",
        "speakerId": "driver",
        "speakerBadge": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "<ruby>右<rt>みぎ</rt></ruby>ですね。",
        "rawJp": "右ですね。",
        "vi": "Rẽ phải phải không ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Tài xế xác nhận lại hướng rẽ.",
        "time": [
          7.92,
          8.83
        ]
      },
      {
        "id": "k14-5",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ。",
        "rawJp": "ええ。",
        "vi": "Vâng ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Khẳng định lại với tài xế.",
        "time": [
          9.22,
          9.82
        ]
      },
      {
        "id": "k14-6",
        "speakerId": "driver",
        "speakerBadge": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "まっすぐですか。",
        "rawJp": "まっすぐですか。",
        "vi": "Đi thẳng tiếp chứ ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.52,
          0.62,
          0.85
        ],
        "explanation": "「まっすぐ」nghĩa là đi thẳng.",
        "time": [
          10.2,
          11.3
        ]
      },
      {
        "id": "k14-7",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ、まっすぐ <ruby>行<rt>い</rt></ruby>って ください。",
        "rawJp": "ええ、まっすぐ 行って ください。",
        "vi": "Vâng, xin cứ đi thẳng ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.53,
          0.52,
          0.55,
          0.57,
          0.56,
          0.53,
          0.48,
          0.35
        ],
        "explanation": "Yêu cầu tài xế tiếp tục đi thẳng.",
        "time": [
          11.76,
          14.09
        ]
      },
      {
        "id": "k14-8",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あの <ruby>花屋<rt>はなや</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>で <ruby>止<rt>と</rt></ruby>めて ください。",
        "rawJp": "あの 花屋の 前で 止めて ください。",
        "vi": "Làm ơn cho xe dừng lại ở trước tiệm hoa kia giúp tôi nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.62,
          0.58,
          0.55,
          0.5,
          0.47,
          0.47,
          0.49,
          0.51,
          0.51,
          0.48,
          0.43,
          0.42,
          0.32
        ],
        "explanation": "「<ruby>止<rt>と</rt></ruby>めてください」(とめてください): xin hãy dừng xe lại.",
        "time": [
          14.4,
          17.26
        ]
      },
      {
        "id": "k14-9",
        "speakerId": "driver",
        "speakerBadge": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "はい。1,800<ruby>円<rt>えん</rt></ruby>です。",
        "rawJp": "はい。1,800円です。",
        "vi": "Vâng. Hết 1.800 yên ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.51,
          0.51,
          0.52,
          0.48,
          0.35
        ],
        "explanation": "Tài xế dừng xe và báo cước phí trên đồng hồ.",
        "time": [
          17.64,
          19.82
        ]
      },
      {
        "id": "k14-10",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "これで <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "これで お願いします。",
        "vi": "Cho tôi gửi bằng tờ tiền này nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.59,
          0.54,
          0.5,
          0.5,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>これでお願いします<rt>これでおねがいします</rt></ruby>」dùng khi đưa tờ tiền mệnh giá lớn để thanh toán.",
        "time": [
          20.21,
          21.94
        ]
      },
      {
        "id": "k14-11",
        "speakerId": "driver",
        "speakerBadge": "<ruby>運転手<rt>うんてんしゅ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "3,200<ruby>円<rt>えん</rt></ruby>の <ruby>お釣り<rt>おつり</rt></ruby>です。ありがとう ございました。",
        "rawJp": "3,200円の お釣りです。ありがとう ございました。",
        "vi": "Đây là 3.200 yên tiền thừa của quý khách. Xin cảm ơn.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.62,
          0.59,
          0.59,
          0.62,
          0.64,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.56,
          0.59,
          0.53,
          0.38
        ],
        "explanation": "「<ruby>お釣り<rt>おつり</rt></ruby>」(おつり) là tiền thừa trả lại (Karina đã đưa tờ 5.000 yên).",
        "time": [
          22.32,
          25.94
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc14-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Nhờ vả lịch sự bằng V-てください",
        "context": "Nhờ người khác chỉ dẫn hoặc cho mượn đồ.",
        "lines": [
          {
            "id": "rc14-1-l1",
            "speaker": "A",
            "jp": "すみません。この <ruby>漢字<rt>かんじ</rt></ruby>の <u><ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて</u> ください。",
            "rawJp": "すみません。この 漢字の 読み方を 教えて ください。",
            "vi": "Xin lỗi, hãy chỉ cho tôi cách đọc chữ Hán này."
          },
          {
            "id": "rc14-1-l2",
            "speaker": "B",
            "jp": "「<u>えき</u>」ですよ。",
            "rawJp": "「えき」ですよ。",
            "vi": "Đọc là \"Eki\" (Nhà ga) đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Chỉ cách đọc chữ <ruby>駅<rt>えき</rt></ruby>)",
            "values": [
              "<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて",
              "えき"
            ],
            "rawValues": [
              "読み方を 教えて",
              "えき"
            ],
            "viValues": [
              "chỉ cách đọc",
              "eki"
            ],
            "lineTimings": [
              [
                0,
                3.91
              ],
              [
                4.3,
                5.3
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.6,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Viết tên và địa chỉ)",
            "values": [
              "ここに <ruby>住所<rt>じゅうしょ</rt></ruby>と <ruby>名前<rt>なまえ</rt></ruby>を <ruby>書<rt>か</rt></ruby>いて",
              "はい、わかりました"
            ],
            "rawValues": [
              "ここに 住所と 名前を 書いて",
              "はい、わかりました"
            ],
            "viValues": [
              "viết địa chỉ và tên",
              "vâng"
            ],
            "lineTimings": [
              [
                5.69,
                10.27
              ],
              [
                10.66,
                12.77
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Cho mượn bút bi)",
            "values": [
              "ボールペンを <ruby>貸<rt>か</rt></ruby>して",
              "はい、どうぞ"
            ],
            "rawValues": [
              "ボールペンを 貸して",
              "はい、どうぞ"
            ],
            "viValues": [
              "cho mượn bút bi",
              "xin mời"
            ],
            "lineTimings": [
              [
                13.15,
                16.99
              ],
              [
                17.38,
                19.08
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.67,
                  0.63,
                  0.58,
                  0.54,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc14-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Đề nghị giúp đỡ bằng V-ましょうか",
        "context": "Chủ động ngỏ ý giúp đồng nghiệp xách đồ, mở cửa, gọi taxi.",
        "lines": [
          {
            "id": "rc14-2-l1",
            "speaker": "A",
            "jp": "<ruby>荷物<rt>にもつ</rt></ruby>が たくさん ありますね。<u><ruby>持<rt>も</rt></ruby>ちましょうか</u>。",
            "rawJp": "荷物が たくさん ありますね。持ちましょうか。",
            "vi": "Bạn có nhiều hành lý quá nhỉ. Để tôi xách giúp một tay nhé?"
          },
          {
            "id": "rc14-2-l2",
            "speaker": "B",
            "jp": "すみません。<ruby>お願いします<rt>おねがいします</rt></ruby>。",
            "rawJp": "すみません。お願いします。",
            "vi": "Ngại quá. Làm ơn giúp tôi nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Xách đồ giúp)",
            "values": [
              "<ruby>持<rt>も</rt></ruby>ちましょうか"
            ],
            "rawValues": [
              "持ちましょうか"
            ],
            "viValues": [
              "xách giúp"
            ],
            "lineTimings": [
              [
                19.46,
                22.51
              ],
              [
                22.9,
                25.3
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.58,
                  0.55,
                  0.5,
                  0.47,
                  0.46,
                  0.48,
                  0.5,
                  0.43,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Đóng cửa sổ giúp)",
            "values": [
              "<ruby>窓<rt>まど</rt></ruby>を <ruby>閉<rt>し</rt></ruby>めましょうか"
            ],
            "rawValues": [
              "窓を 閉めましょうか"
            ],
            "viValues": [
              "đóng cửa sổ giúp"
            ],
            "lineTimings": [
              [
                25.68,
                29.09
              ],
              [
                22.9,
                25.3
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.58,
                  0.55,
                  0.5,
                  0.47,
                  0.46,
                  0.48,
                  0.5,
                  0.43,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Bật điều hòa giúp)",
            "values": [
              "エアコンを つけましょうか"
            ],
            "rawValues": [
              "エアコンを つけましょうか"
            ],
            "viValues": [
              "bật điều hòa giúp"
            ],
            "lineTimings": [
              [
                29.47,
                33.07
              ],
              [
                22.9,
                25.3
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.58,
                  0.55,
                  0.5,
                  0.47,
                  0.46,
                  0.48,
                  0.5,
                  0.43,
                  0.32
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc14-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi thăm hành động đang diễn ra (V-ています)",
        "context": "Gọi điện hỏi xem đối phương đang làm gì.",
        "lines": [
          {
            "id": "rc14-3-l1",
            "speaker": "A",
            "jp": "<ruby>今<rt>いま</rt></ruby> <ruby>何<rt>なん</rt></ruby>を して いますか。",
            "rawJp": "今 何を して いますか。",
            "vi": "Bây giờ bạn đang làm gì thế?"
          },
          {
            "id": "rc14-3-l2",
            "speaker": "B",
            "jp": "<u>ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べて</u> います。",
            "rawJp": "ご飯を 食べて います。",
            "vi": "Tôi đang ăn cơm."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đang ăn cơm)",
            "values": [
              "ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べて"
            ],
            "rawValues": [
              "ご飯を 食べて"
            ],
            "viValues": [
              "đang ăn cơm"
            ],
            "lineTimings": [
              [
                33.46,
                35.18
              ],
              [
                35.57,
                37.08
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Đang đọc báo)",
            "values": [
              "<ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んで"
            ],
            "rawValues": [
              "新聞を 読んで"
            ],
            "viValues": [
              "đang đọc báo"
            ],
            "lineTimings": [
              [
                33.46,
                35.18
              ],
              [
                37.46,
                39.1
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Đang nấu ăn)",
            "values": [
              "<ruby>料理<rt>りょうり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って"
            ],
            "rawValues": [
              "料理を 作って"
            ],
            "viValues": [
              "đang nấu ăn"
            ],
            "lineTimings": [
              [
                33.46,
                35.18
              ],
              [
                39.48,
                41.06
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq14-1",
        "question": "Chủ đề chính của bài hội thoại Bài 14「<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Cho tôi đi đến Umeda",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください」trong Bài 14 có nghĩa là \"Cho tôi đi đến Umeda\". Bối cảnh: Chị Karina bắt xe taxi đi đến ga Umeda. Trên đường đi, chị dùng mẫu câu V-てください để hướng dẫn tài xế rẽ phải, đi thẳng và dừng lại trước cửa hàng hoa."
      },
      {
        "id": "kq14-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。」(Cho tôi đi đến Umeda với ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
          "<ruby>右<rt>みぎ</rt></ruby>ですね。",
          "ええ。",
          "はい。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「はい。」(Vâng.). Tài xế nhận điểm đến và khởi hành."
      },
      {
        "id": "kq14-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。」(Vâng.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。",
          "<ruby>右<rt>みぎ</rt></ruby>ですね。",
          "ええ。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。」(Xin lỗi bác tài, ở chỗ đèn tín hiệu kia làm ơn rẽ phải giúp tôi nhé.). 「<ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がる」: rẽ phải tại cột đèn giao thông."
      },
      {
        "id": "kq14-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。」(Xin lỗi bác tài, ở chỗ đèn tín hiệu kia làm ơn rẽ phải giúp tôi nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。",
          "<ruby>右<rt>みぎ</rt></ruby>ですね。",
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。",
          "はい。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「<ruby>右<rt>みぎ</rt></ruby>ですね。」(Rẽ phải phải không ạ.). Tài xế xác nhận lại hướng rẽ."
      },
      {
        "id": "kq14-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>右<rt>みぎ</rt></ruby>ですね。」(Rẽ phải phải không ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。",
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
          "ええ。",
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「ええ。」(Vâng ạ.). Khẳng định lại với tài xế."
      },
      {
        "id": "kq14-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。」(Vâng ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。",
          "はい。",
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
          "まっすぐですか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「まっすぐですか。」(Đi thẳng tiếp chứ ạ?). 「まっすぐ」nghĩa là đi thẳng."
      },
      {
        "id": "kq14-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「まっすぐですか。」(Đi thẳng tiếp chứ ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ、まっすぐ <ruby>行<rt>い</rt></ruby>って ください。",
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。",
          "はい。",
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「ええ、まっすぐ <ruby>行<rt>い</rt></ruby>って ください。」(Vâng, xin cứ đi thẳng ạ.). Yêu cầu tài xế tiếp tục đi thẳng."
      },
      {
        "id": "kq14-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、まっすぐ <ruby>行<rt>い</rt></ruby>って ください。」(Vâng, xin cứ đi thẳng ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
          "あの <ruby>花屋<rt>はなや</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>で <ruby>止<rt>と</rt></ruby>めて ください。",
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。",
          "はい。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「あの <ruby>花屋<rt>はなや</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>で <ruby>止<rt>と</rt></ruby>めて ください。」(Làm ơn cho xe dừng lại ở trước tiệm hoa kia giúp tôi nhé.). 「<ruby>止<rt>と</rt></ruby>めてください」(とめてください): xin hãy dừng xe lại."
      },
      {
        "id": "kq14-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「あの <ruby>花屋<rt>はなや</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>で <ruby>止<rt>と</rt></ruby>めて ください。」(Làm ơn cho xe dừng lại ở trước tiệm hoa kia giúp tôi nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。",
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
          "はい。1,800<ruby>円<rt>えん</rt></ruby>です。",
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「はい。1,800<ruby>円<rt>えん</rt></ruby>です。」(Vâng. Hết 1.800 yên ạ.). Tài xế dừng xe và báo cước phí trên đồng hồ."
      },
      {
        "id": "kq14-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。1,800<ruby>円<rt>えん</rt></ruby>です。」(Vâng. Hết 1.800 yên ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って ください。",
          "はい。",
          "すみません。あの <ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がって ください。",
          "これで <ruby>お願いします<rt>おねがいします</rt></ruby>。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 14, câu đáp chuẩn xác là:「これで <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Cho tôi gửi bằng tờ tiền này nhé.). 「<ruby>これでお願いします<rt>これでおねがいします</rt></ruby>」dùng khi đưa tờ tiền mệnh giá lớn để thanh toán."
      }
    ]
  },
  "kaiwa-15": {
    "id": "kaiwa-15",
    "lesson": 15,
    "level": "Sơ cấp 1",
    "titleJp": "ご<ruby>家族<rt>かぞく</rt></ruby>は？",
    "titleVi": "Gia đình bạn thế nào?",
    "subtitleVi": "Trò chuyện về gia đình, nơi ở và nghề nghiệp",
    "sceneType": "family_photo",
    "context": "Anh<ruby>木村<rt>きむら</rt></ruby> (Kimura) và anh Miller cùng đi xem phim rồi trò chuyện về gia đình của nhau. Chị Kimura cho anh Miller xem bức ảnh gia đình mình chụp ở Kyoto.",
    "objectives": [
      "Biết cách xin phép làm việc gì đó lịch sự bằng mẫu: V-ても いいですか.",
      "Nói về trạng thái hiện tại, nghề nghiệp và nơi cư trú bằng V-て います (<ruby>住<rt>す</rt></ruby>んで います、<ruby>働<rt>はたら</rt></ruby>いて います、<ruby>結婚<rt>けっこん</rt></ruby>して います).",
      "Trò chuyện tự nhiên về các thành viên trong gia đình."
    ],
    "audioSrc": "audio/kaiwa/lesson_15.mp3",
    "audioDuration": 29.26,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_15.mp3",
    "renshuuAudioDuration": 51.6,
    "characters": [
      {
        "id": "kimura",
        "badgeJp": "<ruby>木村<rt>きむら</rt></ruby>",
        "fullNameJp": "<ruby>木村<rt>きむら</rt></ruby>いずみ",
        "roleVi": "chị Kimura Izumi · phát thanh viên, bạn của Miller",
        "color": "rose",
        "gender": "female",
        "pitch": 1.04,
        "rate": 0.97,
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "speechGenVoice": "Seraphina",
        "voiceName": "Seraphina (Nữ phát thanh viên)"
      },
      {
        "id": "miller",
        "badgeJp": "ミラー",
        "fullNameJp": "マイク・ミラー",
        "roleVi": "anh Mike Miller · người Mỹ, nhân viên mới của IMC",
        "color": "amber",
        "gender": "male",
        "pitch": 1.04,
        "rate": 0.95,
        "voice": "en-US-BrianMultilingualNeural",
        "speechGenVoice": "Brian",
        "voiceName": "Brian (Nam thanh niên trẻ)"
      }
    ],
    "dialogue": [
      {
        "id": "k15-1",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "statement",
        "jp": "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。",
        "rawJp": "いい 映画でしたね。",
        "vi": "Bộ phim hay quá anh nhỉ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.53,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Nhận xét về bộ phim vừa xem xong.",
        "time": [
          0,
          1.56
        ]
      },
      {
        "id": "k15-2",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
        "rawJp": "ええ。わたしは 家族を 思い出しました。",
        "vi": "Vâng. Bộ phim làm tôi nhớ đến gia đình mình.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.56,
          0.58,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>します」(おもいだします): nhớ lại, hồi tưởng.",
        "time": [
          1.94,
          5.18
        ]
      },
      {
        "id": "k15-3",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "question",
        "jp": "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
        "rawJp": "そうですか。ミラーさんの ご家族は？",
        "vi": "Thế ạ. Gia đình của anh Miller có những ai?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.56,
          0.58,
          0.57,
          0.54,
          0.5,
          0.47,
          0.62,
          0.85
        ],
        "explanation": "「ご<ruby>家族<rt>かぞく</rt></ruby>」là cách gọi tôn kính gia đình của người nghe.",
        "time": [
          5.57,
          8.83
        ]
      },
      {
        "id": "k15-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>姉<rt>あね</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby> います。",
        "rawJp": "両親と 姉が 1人 います。",
        "vi": "Tôi có bố mẹ và một người chị gái.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.51,
          0.51,
          0.52,
          0.48,
          0.35
        ],
        "explanation": "Khi kể về người thân của mình cho người ngoài, dùng từ khiêm nhường: <ruby>両親<rt>りょうしん</rt></ruby> (bố mẹ), <ruby>姉<rt>あね</rt></ruby> (chị gái).",
        "time": [
          9.29,
          11.54
        ]
      },
      {
        "id": "k15-5",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "question",
        "jp": "どこに いらっしゃいますか。",
        "rawJp": "どこに いらっしゃいますか。",
        "vi": "Họ đang sống ở đâu thế ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.52,
          0.52,
          0.54,
          0.56,
          0.55,
          0.62,
          0.85
        ],
        "explanation": "「いらっしゃいます」là tôn kính ngữ của います.",
        "time": [
          11.93,
          13.7
        ]
      },
      {
        "id": "k15-6",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>両親<rt>りょうしん</rt></ruby>は ニューヨークの <ruby>近<rt>ちか</rt></ruby>くに <ruby>住<rt>す</rt></ruby>んで います。",
        "rawJp": "両親は ニューヨークの 近くに 住んで います。",
        "vi": "Bố mẹ tôi đang sống ở gần New York.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「[Địa điểm] に <ruby>住<rt>す</rt></ruby>んで います」chỉ nơi cư trú hiện tại.",
        "time": [
          14.16,
          17.21
        ]
      },
      {
        "id": "k15-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>姉<rt>あね</rt></ruby>は ロンドンで <ruby>働<rt>はたら</rt></ruby>いて います。",
        "rawJp": "姉は ロンドンで 働いて います。",
        "vi": "Chị gái tôi thì đang làm việc ở Luân Đôn.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.53,
          0.52,
          0.55,
          0.57,
          0.56,
          0.53,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>働<rt>はたら</rt></ruby>いています」chỉ nghề nghiệp/công việc đang làm lâu dài.",
        "time": [
          17.52,
          19.87
        ]
      },
      {
        "id": "k15-8",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>木村<rt>きむら</rt></ruby>さんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
        "rawJp": "木村さんの ご家族は？",
        "vi": "Còn gia đình chị Kimura thì sao ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.59,
          0.54,
          0.5,
          0.5,
          0.62,
          0.85
        ],
        "explanation": "Hỏi lại về gia đình của chị Kimura.",
        "time": [
          20.18,
          22.08
        ]
      },
      {
        "id": "k15-9",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "statement",
        "jp": "3<ruby>人<rt>にん</rt></ruby>です。<ruby>父<rt>ちち</rt></ruby>は <ruby>銀行員<rt>ぎんこういん</rt></ruby>です。",
        "rawJp": "3人です。父は 銀行員です。",
        "vi": "Nhà tôi có 3 người. Bố tôi là nhân viên ngân hàng.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.52,
          0.51,
          0.53,
          0.55,
          0.48,
          0.35
        ],
        "explanation": "Giới thiệu nghề nghiệp của bố mình.",
        "time": [
          22.54,
          26.09
        ]
      },
      {
        "id": "k15-10",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>母<rt>はは</rt></ruby>は <ruby>高校<rt>こうこう</rt></ruby>で <ruby>英語<rt>えいご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて います。",
        "rawJp": "母は 高校で 英語を 教えて います。",
        "vi": "Mẹ tôi thì đang dạy tiếng Anh ở trường cấp 3.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>教<rt>おし</rt></ruby>えています」diễn tả công việc giảng dạy hiện tại.",
        "time": [
          26.4,
          29.26
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc15-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Xin phép chụp ảnh / ngồi / xem tài liệu",
        "context": "Dùng V-ても いいですか tại viện bảo tàng hoặc văn phòng.",
        "lines": [
          {
            "id": "rc15-1-l1",
            "speaker": "A",
            "jp": "すみません。ここで <u><ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>っても</u> いいですか。",
            "rawJp": "すみません。ここで 写真を 撮っても いいですか。",
            "vi": "Xin lỗi, tôi chụp ảnh ở đây có được không ạ?"
          },
          {
            "id": "rc15-1-l2",
            "speaker": "B",
            "jp": "いいえ、<u><ruby>撮<rt>と</rt></ruby>っては いけません</u>。",
            "rawJp": "いいえ、撮っては いけません。",
            "vi": "Không được đâu. Ở đây cấm chụp ảnh ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Chụp ảnh / Cấm chụp)",
            "values": [
              "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>っても",
              "<ruby>撮<rt>と</rt></ruby>っては いけません"
            ],
            "rawValues": [
              "写真を 撮っても",
              "撮っては いけません"
            ],
            "viValues": [
              "chụp ảnh",
              "cấm chụp"
            ],
            "lineTimings": [
              [
                0,
                3.43
              ],
              [
                3.82,
                5.9
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.52,
                  0.52,
                  0.54,
                  0.56,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Hút thuốc / Cấm hút)",
            "values": [
              "たばこを <ruby>吸<rt>す</rt></ruby>っても",
              "<ruby>吸<rt>す</rt></ruby>っては いけません。<ruby>禁煙<rt>きんえん</rt></ruby>ですから"
            ],
            "rawValues": [
              "たばこを 吸っても",
              "吸っては いけません。禁煙ですから"
            ],
            "viValues": [
              "hút thuốc",
              "cấm hút vì là khu vực không khói thuốc"
            ],
            "lineTimings": [
              [
                6.29,
                9.67
              ],
              [
                10.06,
                13.51
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Ngồi ghế này / Xin mời)",
            "values": [
              "ここに <ruby>座<rt>すわ</rt></ruby>っても",
              "ええ、どうぞ"
            ],
            "rawValues": [
              "ここに 座っても",
              "ええ、どうぞ"
            ],
            "viValues": [
              "ngồi ở đây",
              "vâng xin mời"
            ],
            "lineTimings": [
              [
                13.9,
                17.38
              ],
              [
                17.76,
                19.97
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.67,
                  0.63,
                  0.58,
                  0.54,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc15-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Xin mượn катаlog / tài liệu",
        "context": "Xin phép xem hoặc mang tài liệu về.",
        "lines": [
          {
            "id": "rc15-2-l1",
            "speaker": "A",
            "jp": "この <u>カタログ</u>を <u>もらっても</u> いいですか。",
            "rawJp": "この カタログを もらっても いいですか。",
            "vi": "Tôi xin quyển catalog này có được không ạ?"
          },
          {
            "id": "rc15-2-l2",
            "speaker": "B",
            "jp": "ええ、いいですよ。どうぞ。",
            "rawJp": "ええ、いいですよ。どうぞ。",
            "vi": "Vâng, được chứ ạ. Xin mời anh."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Xin quyển catalog)",
            "values": [
              "カタログ",
              "もらっても"
            ],
            "rawValues": [
              "カタログ",
              "もらっても"
            ],
            "viValues": [
              "catalog",
              "xin"
            ],
            "lineTimings": [
              [
                20.35,
                22.44
              ],
              [
                22.82,
                25.27
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.51,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Xem cuốn từ điển)",
            "values": [
              "<ruby>辞書<rt>じしょ</rt></ruby>",
              "<ruby>見<rt>み</rt></ruby>ても"
            ],
            "rawValues": [
              "辞書",
              "見ても"
            ],
            "viValues": [
              "từ điển",
              "xem"
            ],
            "lineTimings": [
              [
                25.66,
                27.43
              ],
              [
                22.82,
                25.27
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Dùng máy điện thoại)",
            "values": [
              "<ruby>電話<rt>でんわ</rt></ruby>",
              "<ruby>使<rt>つか</rt></ruby>っても"
            ],
            "rawValues": [
              "電話",
              "使っても"
            ],
            "viValues": [
              "điện thoại",
              "dùng"
            ],
            "lineTimings": [
              [
                27.82,
                29.86
              ],
              [
                22.82,
                25.27
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc15-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi tình trạng hôn nhân và công việc",
        "context": "Trò chuyện tìm hiểu thông tin đồng nghiệp.",
        "lines": [
          {
            "id": "rc15-3-l1",
            "speaker": "A",
            "jp": "<u>ミラー</u>さんは <ruby>結婚<rt>けっこん</rt></ruby>して いますか。",
            "rawJp": "ミラーさんは 結婚して いますか。",
            "vi": "Anh Miller đã kết hôn chưa?"
          },
          {
            "id": "rc15-3-l2",
            "speaker": "B",
            "jp": "<u>いいえ、<ruby>独身<rt>どくしん</rt></ruby>です</u>。",
            "rawJp": "いいえ、独身です。",
            "vi": "Chưa, anh ấy còn độc thân."
          },
          {
            "id": "rc15-3-l3",
            "speaker": "A",
            "jp": "<ruby>お仕事<rt>おしごと</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
            "rawJp": "お仕事は 何ですか。",
            "vi": "Công việc của anh ấy là gì?"
          },
          {
            "id": "rc15-3-l4",
            "speaker": "B",
            "jp": "<u><ruby>IMC<rt>アイエムシー</rt></ruby>の <ruby>社員<rt>しゃいん</rt></ruby>です</u>。",
            "rawJp": "IMCの 社員です。",
            "vi": "Là nhân viên của công ty IMC."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Miller / Độc thân / Nhân viên <ruby>IMC<rt>アイエムシー</rt></ruby>)",
            "values": [
              "ミラー",
              "いいえ、<ruby>独身<rt>どくしん</rt></ruby>です",
              "<ruby>IMC<rt>アイエムシー</rt></ruby>の <ruby>社員<rt>しゃいん</rt></ruby>です"
            ],
            "rawValues": [
              "ミラー",
              "いいえ、独身です",
              "IMCの 社員です"
            ],
            "viValues": [
              "Miller",
              "độc thân",
              "nhân viên IMC"
            ],
            "lineTimings": [
              [
                30.24,
                32.52
              ],
              [
                32.9,
                34.8
              ],
              [
                35.18,
                36.72
              ],
              [
                37.1,
                38.86
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Santos / Đã kết hôn / Brazil Air)",
            "values": [
              "サントス",
              "はい、<ruby>結婚<rt>けっこん</rt></ruby>して います",
              "ブラジルエアーで <ruby>働<rt>はたら</rt></ruby>いて います"
            ],
            "rawValues": [
              "サントス",
              "はい、結婚して います",
              "ブラジルエアーで 働いて います"
            ],
            "viValues": [
              "Santos",
              "đã kết hôn",
              "làm ở Brazil Air"
            ],
            "lineTimings": [
              [
                39.24,
                41.74
              ],
              [
                42.12,
                44.23
              ],
              [
                35.18,
                36.72
              ],
              [
                44.62,
                46.73
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Thầy Watt / Độc thân / Dạy ĐH)",
            "values": [
              "ワット",
              "いいえ、<ruby>独身<rt>どくしん</rt></ruby>です",
              "<ruby>大学<rt>だいがく</rt></ruby>で <ruby>教<rt>おし</rt></ruby>えて います"
            ],
            "rawValues": [
              "ワット",
              "いいえ、独身です",
              "大学で 教えて います"
            ],
            "viValues": [
              "Watt",
              "độc thân",
              "dạy ở đại học"
            ],
            "lineTimings": [
              [
                47.11,
                49.46
              ],
              [
                32.9,
                34.8
              ],
              [
                35.18,
                36.72
              ],
              [
                49.85,
                51.6
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq15-1",
        "question": "Chủ đề chính của bài hội thoại Bài 15「ご<ruby>家族<rt>かぞく</rt></ruby>は？」mang ý nghĩa là gì?",
        "options": [
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Gia đình bạn thế nào?"
        ],
        "correctIdx": 3,
        "explanation": "「ご<ruby>家族<rt>かぞく</rt></ruby>は？」trong Bài 15 có nghĩa là \"Gia đình bạn thế nào?\". Bối cảnh: Anh<ruby>木村<rt>きむら</rt></ruby> (Kimura) và anh Miller cùng đi xem phim rồi trò chuyện về gia đình của nhau. Chị Kimura cho anh Miller xem bức ảnh gia đình mình chụp ở Kyoto."
      },
      {
        "id": "kq15-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「いい <ruby>映画<rt>えいが</rt></ruby>でしたね。」(Bộ phim hay quá anh nhỉ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
          "<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>姉<rt>あね</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby> います。",
          "どこに いらっしゃいますか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。」(Vâng. Bộ phim làm tôi nhớ đến gia đình mình.). 「<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>します」(おもいだします): nhớ lại, hồi tưởng."
      },
      {
        "id": "kq15-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。」(Vâng. Bộ phim làm tôi nhớ đến gia đình mình.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どこに いらっしゃいますか。",
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。",
          "<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>姉<rt>あね</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby> います。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？」(Thế ạ. Gia đình của anh Miller có những ai?). 「ご<ruby>家族<rt>かぞく</rt></ruby>」là cách gọi tôn kính gia đình của người nghe."
      },
      {
        "id": "kq15-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？」(Thế ạ. Gia đình của anh Miller có những ai?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
          "どこに いらっしゃいますか。",
          "<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>姉<rt>あね</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby> います。",
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>姉<rt>あね</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby> います。」(Tôi có bố mẹ và một người chị gái.). Khi kể về người thân của mình cho người ngoài, dùng từ khiêm nhường: <ruby>両親<rt>りょうしん</rt></ruby> (bố mẹ), <ruby>姉<rt>あね</rt></ruby> (chị gái)."
      },
      {
        "id": "kq15-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>両親<rt>りょうしん</rt></ruby>と <ruby>姉<rt>あね</rt></ruby>が 1<ruby>人<rt>ひと</rt></ruby> います。」(Tôi có bố mẹ và một người chị gái.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。",
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
          "どこに いらっしゃいますか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「どこに いらっしゃいますか。」(Họ đang sống ở đâu thế ạ?). 「いらっしゃいます」là tôn kính ngữ của います."
      },
      {
        "id": "kq15-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「どこに いらっしゃいますか。」(Họ đang sống ở đâu thế ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>両親<rt>りょうしん</rt></ruby>は ニューヨークの <ruby>近<rt>ちか</rt></ruby>くに <ruby>住<rt>す</rt></ruby>んで います。",
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。",
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「<ruby>両親<rt>りょうしん</rt></ruby>は ニューヨークの <ruby>近<rt>ちか</rt></ruby>くに <ruby>住<rt>す</rt></ruby>んで います。」(Bố mẹ tôi đang sống ở gần New York.). 「[Địa điểm] に <ruby>住<rt>す</rt></ruby>んで います」chỉ nơi cư trú hiện tại."
      },
      {
        "id": "kq15-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>両親<rt>りょうしん</rt></ruby>は ニューヨークの <ruby>近<rt>ちか</rt></ruby>くに <ruby>住<rt>す</rt></ruby>んで います。」(Bố mẹ tôi đang sống ở gần New York.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
          "<ruby>姉<rt>あね</rt></ruby>は ロンドンで <ruby>働<rt>はたら</rt></ruby>いて います。",
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。",
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「<ruby>姉<rt>あね</rt></ruby>は ロンドンで <ruby>働<rt>はたら</rt></ruby>いて います。」(Chị gái tôi thì đang làm việc ở Luân Đôn.). 「<ruby>働<rt>はたら</rt></ruby>いています」chỉ nghề nghiệp/công việc đang làm lâu dài."
      },
      {
        "id": "kq15-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>姉<rt>あね</rt></ruby>は ロンドンで <ruby>働<rt>はたら</rt></ruby>いて います。」(Chị gái tôi thì đang làm việc ở Luân Đôn.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
          "<ruby>木村<rt>きむら</rt></ruby>さんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「<ruby>木村<rt>きむら</rt></ruby>さんの ご<ruby>家族<rt>かぞく</rt></ruby>は？」(Còn gia đình chị Kimura thì sao ạ?). Hỏi lại về gia đình của chị Kimura."
      },
      {
        "id": "kq15-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>木村<rt>きむら</rt></ruby>さんの ご<ruby>家族<rt>かぞく</rt></ruby>は？」(Còn gia đình chị Kimura thì sao ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。",
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？",
          "3<ruby>人<rt>にん</rt></ruby>です。<ruby>父<rt>ちち</rt></ruby>は <ruby>銀行員<rt>ぎんこういん</rt></ruby>です。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「3<ruby>人<rt>にん</rt></ruby>です。<ruby>父<rt>ちち</rt></ruby>は <ruby>銀行員<rt>ぎんこういん</rt></ruby>です。」(Nhà tôi có 3 người. Bố tôi là nhân viên ngân hàng.). Giới thiệu nghề nghiệp của bố mình."
      },
      {
        "id": "kq15-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「3<ruby>人<rt>にん</rt></ruby>です。<ruby>父<rt>ちち</rt></ruby>は <ruby>銀行員<rt>ぎんこういん</rt></ruby>です。」(Nhà tôi có 3 người. Bố tôi là nhân viên ngân hàng.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>母<rt>はは</rt></ruby>は <ruby>高校<rt>こうこう</rt></ruby>で <ruby>英語<rt>えいご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて います。",
          "いい <ruby>映画<rt>えいが</rt></ruby>でしたね。",
          "ええ。わたしは <ruby>家族<rt>かぞく</rt></ruby>を <ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>しました。",
          "そうですか。ミラーさんの ご<ruby>家族<rt>かぞく</rt></ruby>は？"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 15, câu đáp chuẩn xác là:「<ruby>母<rt>はは</rt></ruby>は <ruby>高校<rt>こうこう</rt></ruby>で <ruby>英語<rt>えいご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて います。」(Mẹ tôi thì đang dạy tiếng Anh ở trường cấp 3.). 「<ruby>教<rt>おし</rt></ruby>えています」diễn tả công việc giảng dạy hiện tại."
      }
    ]
  },
  "kaiwa-16": {
    "id": "kaiwa-16",
    "lesson": 16,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください",
    "titleVi": "Hãy chỉ cho tôi cách sử dụng",
    "subtitleVi": "Hướng dẫn rút tiền tại máy ATM ngân hàng",
    "sceneType": "atm_bank",
    "context": "Chị Maria lần đầu đi rút tiền tại máy ATM trong ngân hàng Nhật Bản nhưng chưa biết quy trình bấm nút nên nhờ nhân viên ngân hàng hướng dẫn từng bước.",
    "objectives": [
      "Nắm vững cách nối chuỗi hành động theo trình tự thời gian bằng: V1-て、V2-て、～.",
      "Sử dụng mẫu V1-て から、V2 để nhấn mạnh xong việc 1 mới làm việc 2.",
      "Biết cách hỏi và hướng dẫn quy trình thao tác máy móc (カードの <ruby>入<rt>い</rt></ruby>れ<ruby>方<rt>かた</rt></ruby>、お<ruby>金<rt>かね</rt></ruby>の <ruby>下<rt>お</rt></ruby>ろし<ruby>方<rt>かた</rt></ruby>)."
    ],
    "audioSrc": "audio/kaiwa/lesson_16.mp3",
    "audioDuration": 33.5,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_16.mp3",
    "renshuuAudioDuration": 51.22,
    "characters": [
      {
        "id": "maria",
        "badgeJp": "マリア",
        "fullNameJp": "マリア・サントス",
        "roleVi": "chị Maria Santos · phu nhân anh Santos",
        "color": "rose",
        "gender": "female",
        "pitch": 0.97,
        "rate": 0.94,
        "voice": "en-US-AvaMultilingualNeural",
        "speechGenVoice": "Ava",
        "voiceName": "Ava (Nữ đằm thắm, ấm áp)"
      },
      {
        "id": "staff",
        "badgeJp": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "fullNameJp": "<ruby>係員<rt>かかりいん</rt></ruby> / <ruby>受付<rt>うけつけ</rt></ruby>",
        "roleVi": "nhân viên phụ trách / lễ tân hướng dẫn",
        "color": "blue",
        "gender": "female",
        "pitch": 1.03,
        "rate": 0.95,
        "voice": "ja-JP-NanamiNeural",
        "speechGenVoice": "Nanami",
        "voiceName": "Nanami-Reception (Lễ tân hướng dẫn)"
      }
    ],
    "dialogue": [
      {
        "id": "k16-1",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。",
        "rawJp": "すみません。ちょっと 使い方を 教えて ください。",
        "vi": "Xin lỗi, làm ơn chỉ giúp tôi cách sử dụng máy này với ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.52,
          0.54,
          0.54,
          0.51,
          0.47,
          0.44,
          0.44,
          0.46,
          0.49,
          0.43,
          0.32
        ],
        "explanation": "「<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>」(つかいかた): cách sử dụng (V-bỏ ます + <ruby>方<rt>かた</rt></ruby>).",
        "time": [
          0,
          3.24
        ]
      },
      {
        "id": "k16-2",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。",
        "rawJp": "お引き出しですか。",
        "vi": "Chị muốn rút tiền phải không ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.53,
          0.49,
          0.62,
          0.85
        ],
        "explanation": "「お<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>し」(おひきだし) là thuật ngữ ngân hàng chỉ giao dịch rút tiền mặt.",
        "time": [
          3.62,
          4.9
        ]
      },
      {
        "id": "k16-3",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "そうです。",
        "rawJp": "そうです。",
        "vi": "Đúng vậy ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Xác nhận nhu cầu rút tiền.",
        "time": [
          5.35,
          6.19
        ]
      },
      {
        "id": "k16-4",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "じゃ、まず ここを <ruby>押<rt>お</rt></ruby>して ください。",
        "rawJp": "じゃ、まず ここを 押して ください。",
        "vi": "Vậy trước tiên, chị hãy bấm vào nút này nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "「まず」: đầu tiên, trước hết.",
        "time": [
          6.58,
          8.98
        ]
      },
      {
        "id": "k16-5",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "はい。",
        "rawJp": "はい。",
        "vi": "Vâng.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Làm theo bước 1.",
        "time": [
          9.36,
          9.86
        ]
      },
      {
        "id": "k16-6",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>次に<rt>つぎに</rt></ruby> キャッシュカードを ここに <ruby>入<rt>い</rt></ruby>れて、<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。",
        "rawJp": "次に キャッシュカードを ここに 入れて、暗証番号を 押して ください。",
        "vi": "Tiếp theo, chị đút thẻ ATM vào đây, rồi bấm mã số PIN nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>」(あんしょうばんごう) là mật khẩu / mã PIN 4 chữ số của thẻ ngân hàng.",
        "time": [
          10.25,
          15.19
        ]
      },
      {
        "id": "k16-7",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "はい、<ruby>押<rt>お</rt></ruby>しました。",
        "rawJp": "はい、押しました。",
        "vi": "Vâng, tôi đã bấm xong rồi.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.52,
          0.48,
          0.35
        ],
        "explanation": "Báo đã nhập xong mã PIN.",
        "time": [
          15.58,
          17.09
        ]
      },
      {
        "id": "k16-8",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "それから、<ruby>金額<rt>きんがく</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。",
        "rawJp": "それから、金額を 押して ください。",
        "vi": "Sau đó, chị hãy bấm số tiền cần rút nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>金額<rt>きんがく</rt></ruby>」(きんがく): số tiền.",
        "time": [
          17.47,
          20.06
        ]
      },
      {
        "id": "k16-9",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "hesitation",
        "jp": "5<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、5…0…0…0…0…？",
        "rawJp": "5万円ですが、5…0…0…0…0…？",
        "vi": "Tôi rút 5 vạn yên, bấm 5...0...0...0...0 phải không ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.29,
          0.62,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.5,
          0.52,
          0.52,
          0.49,
          0.45,
          0.42,
          0.42,
          0.56,
          0.85
        ],
        "explanation": "Trên máy ATM Nhật có phím đơn vị「<ruby>万<rt>まん</rt></ruby>」và「<ruby>千<rt>せん</rt></ruby>」nên không cần bấm 4 số 0.",
        "time": [
          20.45,
          24.6
        ]
      },
      {
        "id": "k16-10",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "いいえ、ここの「5」と「<ruby>万<rt>まん</rt></ruby>」を <ruby>押<rt>お</rt></ruby>して ください。",
        "rawJp": "いいえ、ここの「5」と「万」を 押して ください。",
        "vi": "Không ạ, chị hãy bấm số \"5\" và chữ \"Vạn (万)\" ở đây nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.56,
          0.59,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.51,
          0.48,
          0.35
        ],
        "explanation": "Bấm「5」rồi bấm「<ruby>万<rt>まん</rt></ruby>」thay vì bấm 50000.",
        "time": [
          25.06,
          28.78
        ]
      },
      {
        "id": "k16-11",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "あと、「<ruby>確認<rt>かくにん</rt></ruby>」を <ruby>押<rt>お</rt></ruby>して ください。",
        "rawJp": "あと、「確認」を 押して ください。",
        "vi": "Cuối cùng, chị bấm nút \"Xác nhận (確認)\" là xong ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.52,
          0.52,
          0.54,
          0.56,
          0.55,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>確認<rt>かくにん</rt></ruby>」(かくにん) là nút xác nhận hoàn tất giao dịch.",
        "time": [
          29.09,
          31.42
        ]
      },
      {
        "id": "k16-12",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうも ありがとう ございました。",
        "rawJp": "どうも ありがとう ございました。",
        "vi": "Xin chân thành cảm ơn anh/chị.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.61,
          0.58,
          0.58,
          0.6,
          0.62,
          0.62,
          0.59,
          0.54,
          0.53,
          0.38
        ],
        "explanation": "Cảm ơn nhân viên sau khi rút được tiền.",
        "time": [
          31.8,
          33.5
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc16-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Kể chuỗi hoạt động ngày nghỉ (V-て、V-て)",
        "context": "Thuật lại trình tự các việc đã làm hôm qua.",
        "lines": [
          {
            "id": "rc16-1-l1",
            "speaker": "A",
            "jp": "きのうは <ruby>何<rt>なん</rt></ruby>を しましたか。",
            "rawJp": "きのうは 何を しましたか。",
            "vi": "Hôm qua bạn đã làm gì?"
          },
          {
            "id": "rc16-1-l2",
            "speaker": "B",
            "jp": "<u><ruby>図書館<rt>としょかん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>って、<ruby>本<rt>ほん</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて</u>、それから <u><ruby>友だち<rt>ともだち</rt></ruby>に <ruby>会<rt>あ</rt></ruby>いました</u>。",
            "rawJp": "図書館へ 行って、本を 借りて、それから 友だちに 会いました。",
            "vi": "Tôi đến thư viện, mượn sách, rồi sau đó gặp bạn."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đến thư viện mượn sách / Gặp bạn)",
            "values": [
              "<ruby>図書館<rt>としょかん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>って、<ruby>本<rt>ほん</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて",
              "<ruby>友だち<rt>ともだち</rt></ruby>に <ruby>会<rt>あ</rt></ruby>いました"
            ],
            "rawValues": [
              "図書館へ 行って、本を 借りて",
              "友だちに 会いました"
            ],
            "viValues": [
              "đến thư viện mượn sách",
              "gặp bạn"
            ],
            "lineTimings": [
              [
                0,
                1.87
              ],
              [
                2.26,
                6.74
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Chạy bộ công viên / Tắm vòi sen)",
            "values": [
              "<ruby>公園<rt>こうえん</rt></ruby>を ジョギングして、シャワーを <ruby>浴<rt>あ</rt></ruby>びて",
              "<ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました"
            ],
            "rawValues": [
              "公園を ジョギングして、シャワーを 浴びて",
              "朝ごはんを 食べました"
            ],
            "viValues": [
              "chạy bộ rồi tắm",
              "ăn sáng"
            ],
            "lineTimings": [
              [
                0,
                1.87
              ],
              [
                7.13,
                12.17
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Xem phim ở Umeda / Ăn tối)",
            "values": [
              "<ruby>梅田<rt>うめだ</rt></ruby>で <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>て、<ruby>喫茶店<rt>きっさてん</rt></ruby>で お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで",
              "<ruby>帰<rt>かえ</rt></ruby>りました"
            ],
            "rawValues": [
              "梅田で 映画を 見て、喫茶店で お茶を 飲んで",
              "帰りました"
            ],
            "viValues": [
              "xem phim uống trà",
              "về nhà"
            ],
            "lineTimings": [
              [
                0,
                1.87
              ],
              [
                12.55,
                17.45
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc16-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi cách đi đến một địa điểm",
        "context": "Hướng dẫn lộ trình chuyển tàu xe.",
        "lines": [
          {
            "id": "rc16-2-l1",
            "speaker": "A",
            "jp": "<u><ruby>大学<rt>だいがく</rt></ruby></u>まで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
            "rawJp": "大学まで どうやって 行きますか。",
            "vi": "Bạn đi đến trường đại học bằng cách nào?"
          },
          {
            "id": "rc16-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>京都駅<rt>きょうとえき</rt></ruby>まで <ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>って、バスに <ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えます</u>。",
            "rawJp": "京都駅まで 電車で 行って、バスに 乗り換えます。",
            "vi": "Tôi đi tàu điện đến ga Kyoto, rồi chuyển sang xe buýt."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đi tàu đến ga Kyoto / Đổi sang buýt)",
            "values": [
              "<ruby>大学<rt>だいがく</rt></ruby>",
              "<ruby>京都駅<rt>きょうとえき</rt></ruby>まで <ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>って、バスに <ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えます"
            ],
            "rawValues": [
              "大学",
              "京都駅まで 電車で 行って、バスに 乗り換えます"
            ],
            "viValues": [
              "trường đại học",
              "đi tàu đến ga Kyoto rồi đổi xe buýt"
            ],
            "lineTimings": [
              [
                17.83,
                19.9
              ],
              [
                20.28,
                23.93
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Bắt buýt trước nhà / Xuống ở bến số 3)",
            "values": [
              "<ruby>病院<rt>びょういん</rt></ruby>",
              "<ruby>家<rt>いえ</rt></ruby>の <ruby>前から<rt>まえから</rt></ruby> バスに <ruby>乗<rt>の</rt></ruby>って、3つ<ruby>目<rt>め</rt></ruby>の バス<ruby>停<rt>てい</rt></ruby>で <ruby>下<rt>お</rt></ruby>ります"
            ],
            "rawValues": [
              "病院",
              "家の 前から バスに 乗って、3つ目の バス停で 下ります"
            ],
            "viValues": [
              "bệnh viện",
              "lên buýt trước nhà rồi xuống ở bến thứ 3"
            ],
            "lineTimings": [
              [
                24.31,
                26.38
              ],
              [
                26.76,
                30.82
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Đi tàu ngầm / Đi bộ 5 phút)",
            "values": [
              "<ruby>美術館<rt>びじゅつかん</rt></ruby>",
              "<ruby>地下鉄<rt>ちかてつ</rt></ruby>で <ruby>梅田<rt>うめだ</rt></ruby>まで <ruby>行<rt>い</rt></ruby>って、5<ruby>分<rt>ふん</rt></ruby>ぐらい <ruby>歩<rt>ある</rt></ruby>きます"
            ],
            "rawValues": [
              "美術館",
              "地下鉄で 梅田まで 行って、5分ぐらい 歩きます"
            ],
            "viValues": [
              "bảo tàng",
              "đi tàu ngầm đến Umeda rồi đi bộ 5 phút"
            ],
            "lineTimings": [
              [
                31.2,
                33.41
              ],
              [
                33.79,
                37.49
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc16-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Làm việc gì sau khi kết thúc việc khác (V-てから)",
        "context": "Rủ đồng nghiệp đi ăn uống sau giờ làm.",
        "lines": [
          {
            "id": "rc16-3-l1",
            "speaker": "A",
            "jp": "<u><ruby>仕事<rt>しごと</rt></ruby>が <ruby>終<rt>お</rt></ruby>わって</u>から、<u><ruby>泳<rt>およ</rt></ruby>ぎに <ruby>行<rt>い</rt></ruby>きませんか</u>。",
            "rawJp": "仕事が 終わってから、泳ぎに 行きませんか。",
            "vi": "Sau khi tan làm, chúng mình đi bơi nhé?"
          },
          {
            "id": "rc16-3-l2",
            "speaker": "B",
            "jp": "いいですね。<ruby>行<rt>い</rt></ruby>きましょう。",
            "rawJp": "いいですね。行きましょう。",
            "vi": "Tuyệt đấy. Cùng đi nào."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Tan làm / Đi bơi)",
            "values": [
              "<ruby>仕事<rt>しごと</rt></ruby>が <ruby>終<rt>お</rt></ruby>わって",
              "<ruby>泳<rt>およ</rt></ruby>ぎに <ruby>行<rt>い</rt></ruby>きませんか"
            ],
            "rawValues": [
              "仕事が 終わって",
              "泳ぎに 行きませんか"
            ],
            "viValues": [
              "tan làm",
              "đi bơi"
            ],
            "lineTimings": [
              [
                37.87,
                41.11
              ],
              [
                41.5,
                43.46
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.71,
                  0.68,
                  0.63,
                  0.6,
                  0.59,
                  0.61,
                  0.63,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Hết giờ học / Đi uống trà)",
            "values": [
              "<ruby>授業<rt>じゅぎょう</rt></ruby>が <ruby>終<rt>お</rt></ruby>わって",
              "お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みに <ruby>行<rt>い</rt></ruby>きませんか"
            ],
            "rawValues": [
              "授業が 終わって",
              "お茶を 飲みに 行きませんか"
            ],
            "viValues": [
              "hết giờ học",
              "đi uống trà"
            ],
            "lineTimings": [
              [
                43.85,
                47.28
              ],
              [
                41.5,
                43.46
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.71,
                  0.68,
                  0.63,
                  0.6,
                  0.59,
                  0.61,
                  0.63,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Xem phim xong / Đi ăn tối)",
            "values": [
              "<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>て",
              "<ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べに <ruby>行<rt>い</rt></ruby>きませんか"
            ],
            "rawValues": [
              "映画を 見て",
              "晩ごはんを 食べに 行きませんか"
            ],
            "viValues": [
              "xem phim xong",
              "đi ăn tối"
            ],
            "lineTimings": [
              [
                47.66,
                51.22
              ],
              [
                41.5,
                43.46
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.71,
                  0.68,
                  0.63,
                  0.6,
                  0.59,
                  0.61,
                  0.63,
                  0.56,
                  0.52
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq16-1",
        "question": "Chủ đề chính của bài hội thoại Bài 16「<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください」mang ý nghĩa là gì?",
        "options": [
          "Hãy chỉ cho tôi cách sử dụng",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật"
        ],
        "correctIdx": 0,
        "explanation": "「<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください」trong Bài 16 có nghĩa là \"Hãy chỉ cho tôi cách sử dụng\". Bối cảnh: Chị Maria lần đầu đi rút tiền tại máy ATM trong ngân hàng Nhật Bản nhưng chưa biết quy trình bấm nút nên nhờ nhân viên ngân hàng hướng dẫn từng bước."
      },
      {
        "id": "kq16-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。」(Xin lỗi, làm ơn chỉ giúp tôi cách sử dụng máy này với ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。",
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。",
          "そうです。",
          "じゃ、まず ここを <ruby>押<rt>お</rt></ruby>して ください。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。」(Chị muốn rút tiền phải không ạ?). 「お<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>し」(おひきだし) là thuật ngữ ngân hàng chỉ giao dịch rút tiền mặt."
      },
      {
        "id": "kq16-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。」(Chị muốn rút tiền phải không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "じゃ、まず ここを <ruby>押<rt>お</rt></ruby>して ください。",
          "はい。",
          "そうです。",
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「そうです。」(Đúng vậy ạ.). Xác nhận nhu cầu rút tiền."
      },
      {
        "id": "kq16-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうです。」(Đúng vậy ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。",
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。",
          "はい。",
          "じゃ、まず ここを <ruby>押<rt>お</rt></ruby>して ください。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「じゃ、まず ここを <ruby>押<rt>お</rt></ruby>して ください。」(Vậy trước tiên, chị hãy bấm vào nút này nhé.). 「まず」: đầu tiên, trước hết."
      },
      {
        "id": "kq16-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「じゃ、まず ここを <ruby>押<rt>お</rt></ruby>して ください。」(Vậy trước tiên, chị hãy bấm vào nút này nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。",
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。",
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。",
          "そうです。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「はい。」(Vâng.). Làm theo bước 1."
      },
      {
        "id": "kq16-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。」(Vâng.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうです。",
          "<ruby>次に<rt>つぎに</rt></ruby> キャッシュカードを ここに <ruby>入<rt>い</rt></ruby>れて、<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。",
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。",
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「<ruby>次に<rt>つぎに</rt></ruby> キャッシュカードを ここに <ruby>入<rt>い</rt></ruby>れて、<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。」(Tiếp theo, chị đút thẻ ATM vào đây, rồi bấm mã số PIN nhé.). 「<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>」(あんしょうばんごう) là mật khẩu / mã PIN 4 chữ số của thẻ ngân hàng."
      },
      {
        "id": "kq16-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>次に<rt>つぎに</rt></ruby> キャッシュカードを ここに <ruby>入<rt>い</rt></ruby>れて、<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。」(Tiếp theo, chị đút thẻ ATM vào đây, rồi bấm mã số PIN nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。",
          "そうです。",
          "はい、<ruby>押<rt>お</rt></ruby>しました。",
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「はい、<ruby>押<rt>お</rt></ruby>しました。」(Vâng, tôi đã bấm xong rồi.). Báo đã nhập xong mã PIN."
      },
      {
        "id": "kq16-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい、<ruby>押<rt>お</rt></ruby>しました。」(Vâng, tôi đã bấm xong rồi.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。",
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。",
          "そうです。",
          "それから、<ruby>金額<rt>きんがく</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「それから、<ruby>金額<rt>きんがく</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。」(Sau đó, chị hãy bấm số tiền cần rút nhé.). 「<ruby>金額<rt>きんがく</rt></ruby>」(きんがく): số tiền."
      },
      {
        "id": "kq16-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「それから、<ruby>金額<rt>きんがく</rt></ruby>を <ruby>押<rt>お</rt></ruby>して ください。」(Sau đó, chị hãy bấm số tiền cần rút nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "5<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、5…0…0…0…0…？",
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。",
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。",
          "そうです。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「5<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、5…0…0…0…0…？」(Tôi rút 5 vạn yên, bấm 5...0...0...0...0 phải không ạ?). Trên máy ATM Nhật có phím đơn vị「<ruby>万<rt>まん</rt></ruby>」và「<ruby>千<rt>せん</rt></ruby>」nên không cần bấm 4 số 0."
      },
      {
        "id": "kq16-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「5<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、5…0…0…0…0…？」(Tôi rút 5 vạn yên, bấm 5...0...0...0...0 phải không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうです。",
          "いいえ、ここの「5」と「<ruby>万<rt>まん</rt></ruby>」を <ruby>押<rt>お</rt></ruby>して ください。",
          "すみません。ちょっと <ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて ください。",
          "<ruby>お引き出しですか<rt>おひきだしですか</rt></ruby>。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 16, câu đáp chuẩn xác là:「いいえ、ここの「5」と「<ruby>万<rt>まん</rt></ruby>」を <ruby>押<rt>お</rt></ruby>して ください。」(Không ạ, chị hãy bấm số \"5\" và chữ \"Vạn (<ruby>万<rt>まん</rt></ruby>)\" ở đây nhé.). Bấm「5」rồi bấm「<ruby>万<rt>まん</rt></ruby>」thay vì bấm 50000."
      }
    ]
  },
  "kaiwa-17": {
    "id": "kaiwa-17",
    "lesson": 17,
    "level": "Sơ cấp 1",
    "titleJp": "どう しましたか",
    "titleVi": "Anh bị làm sao thế?",
    "subtitleVi": "Khám bệnh tại phòng khám & lời dặn của bác sĩ",
    "sceneType": "hospital",
    "context": "Anh Matsumoto bị sốt, đau họng và ho từ hôm qua nên đến phòng khám. Bác sĩ hỏi triệu chứng, khám bệnh và dặn anh không được tắm bồn nước nóng cũng như phải uống thuốc đầy đủ.",
    "objectives": [
      "Biết cách trình bày triệu chứng bệnh khi đi khám: のどが <ruby>痛<rt>いた</rt></ruby>いです、<ruby>熱<rt>ねつ</rt></ruby>が あります.",
      "Hiểu và sử dụng câu khuyên bảo không cần làm gì: V-ないで ください.",
      "Diễn tả nghĩa vụ bắt buộc phải làm: V-なければ なりません và không cần thiết: V-なくても いいです."
    ],
    "audioSrc": "audio/kaiwa/lesson_17.mp3",
    "audioDuration": 33.26,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_17.mp3",
    "renshuuAudioDuration": 62.86,
    "characters": [
      {
        "id": "doctor",
        "badgeJp": "<ruby>医者<rt>いしゃ</rt></ruby>",
        "fullNameJp": "<ruby>医者<rt>いしゃ</rt></ruby> (<ruby>先生<rt>せんせい</rt></ruby>)",
        "roleVi": "bác sĩ khám bệnh tại phòng khám",
        "color": "purple",
        "gender": "male",
        "pitch": 0.94,
        "rate": 0.93,
        "voice": "de-DE-FlorianMultilingualNeural",
        "speechGenVoice": "Florian",
        "voiceName": "Florian-Doctor (Bác sĩ ân cần)"
      },
      {
        "id": "matsumoto",
        "badgeJp": "<ruby>松本<rt>まつもと</rt></ruby>",
        "fullNameJp": "<ruby>松本<rt>まつもと</rt></ruby><ruby>部長<rt>ぶちょう</rt></ruby>",
        "roleVi": "ông Matsumoto · Trưởng phòng tại IMC",
        "color": "blue",
        "gender": "male",
        "pitch": 0.93,
        "rate": 0.92,
        "voice": "en-AU-WilliamMultilingualNeural",
        "speechGenVoice": "William",
        "voiceName": "William-Senior (Trưởng phòng uy nghiêm)"
      }
    ],
    "dialogue": [
      {
        "id": "k17-1",
        "speakerId": "doctor",
        "speakerBadge": "<ruby>医者<rt>いしゃ</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "question",
        "jp": "どう しましたか。",
        "rawJp": "どう しましたか。",
        "vi": "Ông bị làm sao thế ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.52,
          0.62,
          0.85
        ],
        "explanation": "Câu hỏi mở đầu của bác sĩ khi bệnh nhân vào khám.",
        "time": [
          0,
          1.25
        ]
      },
      {
        "id": "k17-2",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。",
        "rawJp": "きのうから のどが 痛くて、熱も 少し あります。",
        "vi": "Từ hôm qua tôi bị đau họng, và cũng có hơi sốt một chút ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.52,
          0.54,
          0.54,
          0.51,
          0.47,
          0.44,
          0.44,
          0.46,
          0.49,
          0.43,
          0.32
        ],
        "explanation": "Nối các triệu chứng bệnh bằng thể て (<ruby>痛<rt>いた</rt></ruby>くて).",
        "time": [
          1.7,
          5.18
        ]
      },
      {
        "id": "k17-3",
        "speakerId": "doctor",
        "speakerBadge": "<ruby>医者<rt>いしゃ</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。",
        "rawJp": "そうですか。ちょっと 口を 開けて ください。",
        "vi": "Vậy à. Ông há miệng ra một chút nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.52,
          0.54,
          0.54,
          0.51,
          0.47,
          0.44,
          0.44,
          0.46,
          0.49,
          0.43,
          0.32
        ],
        "explanation": "Bác sĩ kiểm tra cổ họng bệnh nhân.",
        "time": [
          5.57,
          8.81
        ]
      },
      {
        "id": "k17-4",
        "speakerId": "doctor",
        "speakerBadge": "<ruby>医者<rt>いしゃ</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "statement",
        "jp": "ああ、かぜですね。ゆっくり <ruby>休<rt>やす</rt></ruby>んで ください。",
        "rawJp": "ああ、かぜですね。ゆっくり 休んで ください。",
        "vi": "À, ông bị cảm rồi. Hãy nghỉ ngơi thư thả nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "Chẩn đoán cảm lạnh (かぜ) và khuyên nghỉ ngơi.",
        "time": [
          9.12,
          12.79
        ]
      },
      {
        "id": "k17-5",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あのう、あしたから <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>しなければ なりませんが…。",
        "rawJp": "あのう、あしたから 東京へ 出張しなければ なりませんが…。",
        "vi": "À thưa bác sĩ, từ ngày mai tôi phải đi công tác Tokyo mất rồi...",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.62,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.51,
          0.53,
          0.53,
          0.5,
          0.46,
          0.43,
          0.43,
          0.45,
          0.48,
          0.42,
          0.32
        ],
        "explanation": "「V-なければ なりません」diễn tả việc bắt buộc phải làm do trách nhiệm công việc.",
        "time": [
          13.3,
          18.1
        ]
      },
      {
        "id": "k17-6",
        "speakerId": "doctor",
        "speakerBadge": "<ruby>医者<rt>いしゃ</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "statement",
        "jp": "じゃ、<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで、きょうは <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て ください。",
        "rawJp": "じゃ、薬を 飲んで、きょうは 早く 寝て ください。",
        "vi": "Vậy thì ông hãy uống thuốc, và hôm nay phải đi ngủ sớm nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "Lời dặn dò điều trị nhanh của bác sĩ.",
        "time": [
          18.48,
          21.94
        ]
      },
      {
        "id": "k17-7",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "statement",
        "jp": "はい。",
        "rawJp": "はい。",
        "vi": "Vâng ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Tiếp nhận lời khuyên.",
        "time": [
          22.32,
          23.04
        ]
      },
      {
        "id": "k17-8",
        "speakerId": "doctor",
        "speakerBadge": "<ruby>医者<rt>いしゃ</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "statement",
        "jp": "それから、<ruby>今晩<rt>こんばん</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで ください。",
        "rawJp": "それから、今晩は お風呂に 入らないで ください。",
        "vi": "Ngoài ra, tối nay ông đừng ngâm bồn tắm nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「V-ないで ください」dùng để khuyên can không nên làm việc gì có hại cho sức khỏe.",
        "time": [
          23.42,
          26.59
        ]
      },
      {
        "id": "k17-9",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "statement",
        "jp": "はい、わかりました。",
        "rawJp": "はい、わかりました。",
        "vi": "Vâng, tôi hiểu rồi ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.58,
          0.53,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Đồng ý làm theo chỉ dẫn.",
        "time": [
          26.98,
          28.68
        ]
      },
      {
        "id": "k17-10",
        "speakerId": "doctor",
        "speakerBadge": "<ruby>医者<rt>いしゃ</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "じゃ、<ruby>お大事に<rt>おだいじに</rt></ruby>。",
        "rawJp": "じゃ、お大事に。",
        "vi": "Vậy chúc ông mau bình phục nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.56,
          0.52,
          0.43,
          0.32
        ],
        "explanation": "「<ruby>お大事に<rt>おだいじに</rt></ruby>」(おだいじに) là câu chúc sức khỏe bắt buộc dành cho người đang bị ốm.",
        "time": [
          29.06,
          30.84
        ]
      },
      {
        "id": "k17-11",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうも ありがとう ございました。",
        "rawJp": "どうも ありがとう ございました。",
        "vi": "Xin chân thành cảm ơn bác sĩ.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.61,
          0.58,
          0.58,
          0.6,
          0.62,
          0.62,
          0.59,
          0.54,
          0.53,
          0.38
        ],
        "explanation": "Cảm ơn bác sĩ trước khi rời phòng khám.",
        "time": [
          31.22,
          33.26
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc17-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Khuyên bảo bằng V-ないで ください",
        "context": "Nhắc nhở bệnh nhân hoặc bạn bè giữ gìn sức khỏe.",
        "lines": [
          {
            "id": "rc17-1-l1",
            "speaker": "A",
            "jp": "どう しましたか。",
            "rawJp": "どう しましたか。",
            "vi": "Bạn bị sao thế?"
          },
          {
            "id": "rc17-1-l2",
            "speaker": "B",
            "jp": "<u><ruby>熱<rt>ねつ</rt></ruby>が あります</u>。",
            "rawJp": "熱が あります。",
            "vi": "Tôi bị sốt."
          },
          {
            "id": "rc17-1-l3",
            "speaker": "A",
            "jp": "そうですか。じゃ、<u>お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで</u> ください。<ruby>お大事に<rt>おだいじに</rt></ruby>。",
            "rawJp": "そうですか。じゃ、お風呂に 入らないで ください。お大事に。",
            "vi": "Vậy à. Thế thì bạn đừng tắm bồn nhé. Chúc mau khỏe."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Bị sốt / Đừng tắm bồn)",
            "values": [
              "<ruby>熱<rt>ねつ</rt></ruby>が あります",
              "お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで"
            ],
            "rawValues": [
              "熱が あります",
              "お風呂に 入らないで"
            ],
            "viValues": [
              "bị sốt",
              "đừng tắm bồn"
            ],
            "lineTimings": [
              [
                0,
                1.25
              ],
              [
                1.63,
                2.9
              ],
              [
                3.29,
                8.11
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.56,
                  0.52,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Đau dạ dày / Đừng uống rượu)",
            "values": [
              "おなかが <ruby>痛<rt>いた</rt></ruby>いです",
              "お<ruby>酒<rt>さけ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>まないで"
            ],
            "rawValues": [
              "おなかが 痛いです",
              "お酒を 飲まないで"
            ],
            "viValues": [
              "đau bụng",
              "đừng uống rượu"
            ],
            "lineTimings": [
              [
                0,
                1.25
              ],
              [
                8.5,
                10.01
              ],
              [
                10.39,
                15.19
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.57,
                  0.53,
                  0.48,
                  0.44,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Đau họng / Đừng hút thuốc)",
            "values": [
              "のどが <ruby>痛<rt>いた</rt></ruby>いです",
              "たばこを <ruby>吸<rt>す</rt></ruby>わないで"
            ],
            "rawValues": [
              "のどが 痛いです",
              "たばこを 吸わないで"
            ],
            "viValues": [
              "đau họng",
              "đừng hút thuốc"
            ],
            "lineTimings": [
              [
                0,
                1.25
              ],
              [
                15.58,
                17.02
              ],
              [
                17.4,
                22.25
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.57,
                  0.53,
                  0.47,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc17-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Xin về sớm vì nghĩa vụ bắt buộc (V-なければ なりません)",
        "context": "Nêu việc phải làm để xin phép cáo từ.",
        "lines": [
          {
            "id": "rc17-2-l1",
            "speaker": "A",
            "jp": "すみません。これから <u><ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなければ</u> なりませんから、お<ruby>先<rt>さき</rt></ruby>に <ruby>失礼します<rt>しつれいします</rt></ruby>。",
            "rawJp": "すみません。これから 病院へ 行かなければ なりませんから、お先に 失礼します。",
            "vi": "Xin lỗi. Bây giờ tôi phải đi bệnh viện nên xin phép về trước ạ."
          },
          {
            "id": "rc17-2-l2",
            "speaker": "B",
            "jp": "そうですか。<ruby>お大事に<rt>おだいじに</rt></ruby>。",
            "rawJp": "そうですか。お大事に。",
            "vi": "Vậy à. Bạn giữ gìn sức khỏe nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Phải đi bệnh viện)",
            "values": [
              "<ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>かなければ"
            ],
            "rawValues": [
              "病院へ 行かなければ"
            ],
            "viValues": [
              "phải đi bệnh viện"
            ],
            "lineTimings": [
              [
                22.63,
                28.58
              ],
              [
                28.97,
                31.08
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.58,
                  0.54,
                  0.49,
                  0.45,
                  0.45,
                  0.43,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Phải nộp báo cáo)",
            "values": [
              "レポートを <ruby>出<rt>だ</rt></ruby>さなければ"
            ],
            "rawValues": [
              "レポートを 出さなければ"
            ],
            "viValues": [
              "phải nộp báo cáo"
            ],
            "lineTimings": [
              [
                31.46,
                37.49
              ],
              [
                28.97,
                31.08
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.58,
                  0.54,
                  0.49,
                  0.45,
                  0.45,
                  0.43,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Phải đi đón con)",
            "values": [
              "<ruby>子<rt>こ</rt></ruby>どもを <ruby>迎<rt>むか</rt></ruby>えに <ruby>行<rt>い</rt></ruby>かなければ"
            ],
            "rawValues": [
              "子どもを 迎えに 行かなければ"
            ],
            "viValues": [
              "phải đi đón con"
            ],
            "lineTimings": [
              [
                37.87,
                44.28
              ],
              [
                28.97,
                31.08
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.52,
                  0.54,
                  0.54,
                  0.51,
                  0.47,
                  0.44,
                  0.44,
                  0.46,
                  0.49,
                  0.43,
                  0.32
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "empathy_apology",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.63,
                  0.58,
                  0.54,
                  0.49,
                  0.45,
                  0.45,
                  0.43,
                  0.32
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc17-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi xem có cần phải làm gì không (V-なくても いいです)",
        "context": "Hỏi bác sĩ hoặc giáo viên về quy định.",
        "lines": [
          {
            "id": "rc17-3-l1",
            "speaker": "A",
            "jp": "あしたも <u><ruby>来<rt>き</rt></ruby>なければ</u> なりませんか。",
            "rawJp": "あしたも 来なければ なりませんか。",
            "vi": "Ngày mai tôi cũng phải đến khám nữa ạ?"
          },
          {
            "id": "rc17-3-l2",
            "speaker": "B",
            "jp": "いいえ、あしたは <u><ruby>来<rt>き</rt></ruby>なくても</u> いいです。",
            "rawJp": "いいえ、あしたは 来なくても いいです。",
            "vi": "Không, ngày mai anh không cần đến cũng được."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đến khám / Không cần đến)",
            "values": [
              "<ruby>来<rt>き</rt></ruby>なければ",
              "<ruby>来<rt>き</rt></ruby>なくても"
            ],
            "rawValues": [
              "来なければ",
              "来なくても"
            ],
            "viValues": [
              "phải đến",
              "không cần đến"
            ],
            "lineTimings": [
              [
                44.66,
                46.9
              ],
              [
                47.28,
                49.99
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Uống thuốc / Không cần uống)",
            "values": [
              "<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>まなければ",
              "<ruby>飲<rt>の</rt></ruby>まなくても"
            ],
            "rawValues": [
              "薬を 飲まなければ",
              "飲まなくても"
            ],
            "viValues": [
              "phải uống thuốc",
              "không cần uống"
            ],
            "lineTimings": [
              [
                50.38,
                53.21
              ],
              [
                53.59,
                56.47
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.51,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Cởi giày / Không cần cởi)",
            "values": [
              "<ruby>靴<rt>くつ</rt></ruby>を <ruby>脱<rt>ぬ</rt></ruby>がなければ",
              "<ruby>脱<rt>ぬ</rt></ruby>がなくても"
            ],
            "rawValues": [
              "靴を 脱がなければ",
              "脱がなくても"
            ],
            "viValues": [
              "phải cởi giày",
              "không cần cởi"
            ],
            "lineTimings": [
              [
                56.86,
                59.62
              ],
              [
                60,
                62.86
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.51,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq17-1",
        "question": "Chủ đề chính của bài hội thoại Bài 17「どう しましたか」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Anh bị làm sao thế?",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「どう しましたか」trong Bài 17 có nghĩa là \"Anh bị làm sao thế?\". Bối cảnh: Anh Matsumoto bị sốt, đau họng và ho từ hôm qua nên đến phòng khám. Bác sĩ hỏi triệu chứng, khám bệnh và dặn anh không được tắm bồn nước nóng cũng như phải uống thuốc đầy đủ."
      },
      {
        "id": "kq17-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「どう しましたか。」(Ông bị làm sao thế ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ああ、かぜですね。ゆっくり <ruby>休<rt>やす</rt></ruby>んで ください。",
          "あのう、あしたから <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>しなければ なりませんが…。",
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。",
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。」(Từ hôm qua tôi bị đau họng, và cũng có hơi sốt một chút ạ.). Nối các triệu chứng bệnh bằng thể て (<ruby>痛<rt>いた</rt></ruby>くて)."
      },
      {
        "id": "kq17-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。」(Từ hôm qua tôi bị đau họng, và cũng có hơi sốt một chút ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どう しましたか。",
          "ああ、かぜですね。ゆっくり <ruby>休<rt>やす</rt></ruby>んで ください。",
          "あのう、あしたから <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>しなければ なりませんが…。",
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。」(Vậy à. Ông há miệng ra một chút nhé.). Bác sĩ kiểm tra cổ họng bệnh nhân."
      },
      {
        "id": "kq17-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。」(Vậy à. Ông há miệng ra một chút nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ああ、かぜですね。ゆっくり <ruby>休<rt>やす</rt></ruby>んで ください。",
          "どう しましたか。",
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。",
          "あのう、あしたから <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>しなければ なりませんが…。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「ああ、かぜですね。ゆっくり <ruby>休<rt>やす</rt></ruby>んで ください。」(À, ông bị cảm rồi. Hãy nghỉ ngơi thư thả nhé.). Chẩn đoán cảm lạnh (かぜ) và khuyên nghỉ ngơi."
      },
      {
        "id": "kq17-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「ああ、かぜですね。ゆっくり <ruby>休<rt>やす</rt></ruby>んで ください。」(À, ông bị cảm rồi. Hãy nghỉ ngơi thư thả nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。",
          "あのう、あしたから <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>しなければ なりませんが…。",
          "どう しましたか。",
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「あのう、あしたから <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>しなければ なりませんが…。」(À thưa bác sĩ, từ ngày mai tôi phải đi công tác Tokyo mất rồi...). 「V-なければ なりません」diễn tả việc bắt buộc phải làm do trách nhiệm công việc."
      },
      {
        "id": "kq17-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「あのう、あしたから <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>出張<rt>しゅっちょう</rt></ruby>しなければ なりませんが…。」(À thưa bác sĩ, từ ngày mai tôi phải đi công tác Tokyo mất rồi...), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。",
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。",
          "じゃ、<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで、きょうは <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て ください。",
          "どう しましたか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「じゃ、<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで、きょうは <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て ください。」(Vậy thì ông hãy uống thuốc, và hôm nay phải đi ngủ sớm nhé.). Lời dặn dò điều trị nhanh của bác sĩ."
      },
      {
        "id": "kq17-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「じゃ、<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>んで、きょうは <ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>て ください。」(Vậy thì ông hãy uống thuốc, và hôm nay phải đi ngủ sớm nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どう しましたか。",
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。",
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。",
          "はい。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「はい。」(Vâng ạ.). Tiếp nhận lời khuyên."
      },
      {
        "id": "kq17-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。」(Vâng ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "それから、<ruby>今晩<rt>こんばん</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで ください。",
          "どう しましたか。",
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。",
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「それから、<ruby>今晩<rt>こんばん</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで ください。」(Ngoài ra, tối nay ông đừng ngâm bồn tắm nhé.). 「V-ないで ください」dùng để khuyên can không nên làm việc gì có hại cho sức khỏe."
      },
      {
        "id": "kq17-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「それから、<ruby>今晩<rt>こんばん</rt></ruby>は お<ruby>風呂<rt>ふろ</rt></ruby>に <ruby>入<rt>はい</rt></ruby>らないで ください。」(Ngoài ra, tối nay ông đừng ngâm bồn tắm nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。",
          "はい、わかりました。",
          "どう しましたか。",
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「はい、わかりました。」(Vâng, tôi hiểu rồi ạ.). Đồng ý làm theo chỉ dẫn."
      },
      {
        "id": "kq17-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい、わかりました。」(Vâng, tôi hiểu rồi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "きのうから のどが <ruby>痛<rt>いた</rt></ruby>くて、<ruby>熱<rt>ねつ</rt></ruby>も <ruby>少<rt>すこ</rt></ruby>し あります。",
          "そうですか。ちょっと <ruby>口<rt>くち</rt></ruby>を <ruby>開<rt>あ</rt></ruby>けて ください。",
          "じゃ、<ruby>お大事に<rt>おだいじに</rt></ruby>。",
          "どう しましたか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 17, câu đáp chuẩn xác là:「じゃ、<ruby>お大事に<rt>おだいじに</rt></ruby>。」(Vậy chúc ông mau bình phục nhé.). 「<ruby>お大事に<rt>おだいじに</rt></ruby>」(おだいじに) là câu chúc sức khỏe bắt buộc dành cho người đang bị ốm."
      }
    ]
  },
  "kaiwa-18": {
    "id": "kaiwa-18",
    "lesson": 18,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>",
    "titleVi": "Sở thích của bạn là gì?",
    "subtitleVi": "Chia sẻ sở thích cá nhân & khả năng",
    "sceneType": "hobby",
    "context": "Anh Yamada hỏi chuyện anh Santos và chị Maria về sở thích cá nhân. Anh Santos thích chụp ảnh, còn chị Maria thích xem tranh và anh Yamada có ước mơ cưỡi ngựa.",
    "objectives": [
      "Biết cách nói về khả năng làm được việc gì bằng: N / V-ることが できます.",
      "Giới thiệu sở thích cá nhân bằng danh từ hóa động từ: わたしの <ruby>趣味<rt>しゅみ</rt></ruby>は V-ることです.",
      "Sử dụng mẫu V1-る <ruby>前<rt>まえ</rt></ruby>に、V2 để chỉ việc làm trước một mốc thời gian hoặc hành động."
    ],
    "audioSrc": "audio/kaiwa/lesson_18.mp3",
    "audioDuration": 29.38,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_18.mp3",
    "renshuuAudioDuration": 35.04,
    "characters": [
      {
        "id": "yamada",
        "badgeJp": "<ruby>山田<rt>やまだ</rt></ruby>",
        "fullNameJp": "<ruby>山田<rt>やまだ</rt></ruby><ruby>一郎<rt>いちろう</rt></ruby>",
        "roleVi": "anh Yamada Ichiro · nhân viên công ty IMC",
        "color": "emerald",
        "gender": "male",
        "pitch": 1,
        "rate": 0.96,
        "voice": "ja-JP-KeitaNeural",
        "speechGenVoice": "Keita",
        "voiceName": "Keita (Nam công sở chuẩn Tokyo)"
      },
      {
        "id": "santos",
        "badgeJp": "サントス",
        "fullNameJp": "ホセ・サントス",
        "roleVi": "anh Jose Santos · người Brazil, nhân viên Brazil Air",
        "color": "purple",
        "gender": "male",
        "pitch": 0.95,
        "rate": 0.94,
        "voice": "en-US-AndrewMultilingualNeural",
        "speechGenVoice": "Andrew",
        "voiceName": "Andrew (Nam trầm ấm)"
      },
      {
        "id": "maria",
        "badgeJp": "マリア",
        "fullNameJp": "マリア・サントス",
        "roleVi": "chị Maria Santos · phu nhân anh Santos",
        "color": "rose",
        "gender": "female",
        "pitch": 0.97,
        "rate": 0.94,
        "voice": "en-US-AvaMultilingualNeural",
        "speechGenVoice": "Ava",
        "voiceName": "Ava (Nữ đằm thắm, ấm áp)"
      }
    ],
    "dialogue": [
      {
        "id": "k18-1",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
        "rawJp": "サントスさんの 趣味は 何ですか。",
        "vi": "Sở thích của anh Santos là gì thế?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.62,
          0.85
        ],
        "explanation": "「<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何ですか<rt>なんですか</rt></ruby>」: câu hỏi mở chuyện kinh điển về sở thích.",
        "time": [
          0,
          1.94
        ]
      },
      {
        "id": "k18-2",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>写真<rt>しゃしん</rt></ruby>です。",
        "rawJp": "写真です。",
        "vi": "Là nhiếp ảnh ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Trả lời trực tiếp bằng danh từ.",
        "time": [
          2.4,
          3.34
        ]
      },
      {
        "id": "k18-3",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
        "rawJp": "どんな 写真を 撮りますか。",
        "vi": "Anh thường chụp những bức ảnh như thế nào?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.52,
          0.51,
          0.53,
          0.55,
          0.62,
          0.85
        ],
        "explanation": "Hỏi sâu hơn về chủ đề nhiếp ảnh của đối phương.",
        "time": [
          3.72,
          5.38
        ]
      },
      {
        "id": "k18-4",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>動物<rt>どうぶつ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>です。<ruby>特<rt>とく</rt></ruby>に <ruby>馬<rt>うま</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。",
        "rawJp": "動物の 写真です。特に 馬が 好きです。",
        "vi": "Là ảnh động vật ạ. Đặc biệt tôi rất thích ngựa.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.56,
          0.58,
          0.57,
          0.54,
          0.5,
          0.47,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>特<rt>とく</rt></ruby>に」(とくに): đặc biệt là.",
        "time": [
          5.83,
          9.26
        ]
      },
      {
        "id": "k18-5",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "exclamation",
        "jp": "へえ、それは おもしろいですね。",
        "rawJp": "へえ、それは おもしろいですね。",
        "vi": "Ồ, điều đó thú vị thật đấy nhỉ.",
        "endPitch": "down",
        "pitchCurve": [
          0.36,
          0.76,
          0.72,
          0.68,
          0.64,
          0.61,
          0.6,
          0.63,
          0.65,
          0.64,
          0.61,
          0.56,
          0.52
        ],
        "explanation": "「へえ」biểu thị sự ngạc nhiên và thích thú trước thông tin mới.",
        "time": [
          9.65,
          11.76
        ]
      },
      {
        "id": "k18-6",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "<ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>馬<rt>うま</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。",
        "rawJp": "日本へ 来る 前に、馬に 乗りましたか。",
        "vi": "Trước khi đến Nhật, anh có hay cưỡi ngựa không?",
        "endPitch": "up",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.61,
          0.58,
          0.58,
          0.61,
          0.63,
          0.62,
          0.59,
          0.55,
          0.52,
          0.67,
          0.85
        ],
        "explanation": "「<ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に」: trước khi đến Nhật (V-る + <ruby>前<rt>まえ</rt></ruby>に); cưỡi ngựa dùng trợ từ に (<ruby>馬<rt>うま</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります).",
        "time": [
          12.14,
          14.81
        ]
      },
      {
        "id": "k18-7",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ、ブラジルで よく <ruby>乗<rt>の</rt></ruby>りました。",
        "rawJp": "ええ、ブラジルで よく 乗りました。",
        "vi": "Vâng, hồi ở Brazil tôi thường xuyên cưỡi ngựa lắm.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Kể về trải nghiệm ở quê nhà.",
        "time": [
          15.26,
          17.69
        ]
      },
      {
        "id": "k18-8",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "わたしは <ruby>日本<rt>にほん</rt></ruby>で <ruby>馬<rt>うま</rt></ruby>を <ruby>見<rt>み</rt></ruby>る ことは できますが、<ruby>乗<rt>の</rt></ruby>る ことは なかなか できません。",
        "rawJp": "わたしは 日本で 馬を 見る ことは できますが、乗る ことは なかなか できません。",
        "vi": "Ở Nhật thì việc ngắm ngựa có thể làm được, chứ việc cưỡi ngựa thì mãi chẳng có dịp thực hiện được.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「なかなか + Phủ định」nghĩa là \"mãi mà không thể / rất khó để làm được\".",
        "time": [
          18.07,
          22.7
        ]
      },
      {
        "id": "k18-9",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>北海道<rt>ほっかいどう</rt></ruby>で <ruby>乗<rt>の</rt></ruby>る ことが できますよ。",
        "rawJp": "北海道で 乗る ことが できますよ。",
        "vi": "Ở Hokkaido có thể cưỡi ngựa được đấy anh ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Gợi ý địa điểm có trang trại ngựa nổi tiếng ở Nhật.",
        "time": [
          23.09,
          25.25
        ]
      },
      {
        "id": "k18-10",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "exclamation",
        "jp": "ほんとうですか。じゃ、<ruby>夏休<rt>なつやす</rt></ruby>みに ぜひ <ruby>行<rt>い</rt></ruby>きたいです。",
        "rawJp": "ほんとうですか。じゃ、夏休みに ぜひ 行きたいです。",
        "vi": "Thật vậy sao! Thế thì kỳ nghỉ hè này nhất định tôi muốn đi thử.",
        "endPitch": "down",
        "pitchCurve": [
          0.36,
          0.76,
          0.72,
          0.69,
          0.65,
          0.62,
          0.62,
          0.65,
          0.67,
          0.67,
          0.64,
          0.6,
          0.57,
          0.57,
          0.59,
          0.62,
          0.56,
          0.52
        ],
        "explanation": "「ぜひ」đi với「V-たいです」nhấn mạnh mong muốn mãnh liệt (\"nhất định\").",
        "time": [
          25.63,
          29.38
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc18-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi về kỹ năng / khả năng (できます)",
        "context": "Hỏi xem đối phương có biết trượt tuyết, nấu ăn, lái xe không.",
        "lines": [
          {
            "id": "rc18-1-l1",
            "speaker": "A",
            "jp": "<u>スキー</u>が できますか。",
            "rawJp": "スキーが できますか。",
            "vi": "Bạn có biết trượt tuyết không?"
          },
          {
            "id": "rc18-1-l2",
            "speaker": "B",
            "jp": "ええ、できます。でも、あまり <ruby>上手<rt>じょうず</rt></ruby>じゃ ありません。",
            "rawJp": "ええ、できます。でも、あまり 上手じゃ ありません。",
            "vi": "Vâng, tôi biết. Nhưng mà không giỏi lắm đâu."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Trượt tuyết)",
            "values": [
              "スキー"
            ],
            "rawValues": [
              "スキー"
            ],
            "viValues": [
              "trượt tuyết"
            ],
            "lineTimings": [
              [
                0,
                1.46
              ],
              [
                1.85,
                5.9
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Chơi đàn Piano)",
            "values": [
              "ピアノを <ruby>弾<rt>ひ</rt></ruby>く こと"
            ],
            "rawValues": [
              "ピアノを 弾く こと"
            ],
            "viValues": [
              "chơi đàn Piano"
            ],
            "lineTimings": [
              [
                6.29,
                8.28
              ],
              [
                1.85,
                5.9
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Nấu món ăn Nhật)",
            "values": [
              "<ruby>日本料理<rt>にほんりょうり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>る こと"
            ],
            "rawValues": [
              "日本料理を 作る こと"
            ],
            "viValues": [
              "nấu món ăn Nhật"
            ],
            "lineTimings": [
              [
                8.66,
                11.21
              ],
              [
                1.85,
                5.9
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc18-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Trò chuyện về sở thích (<ruby>趣味<rt>しゅみ</rt></ruby>は V-ることです)",
        "context": "Nói về sở thích sưu tầm, nghe nhạc, vẽ tranh.",
        "lines": [
          {
            "id": "rc18-2-l1",
            "speaker": "A",
            "jp": "<ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
            "rawJp": "趣味は 何ですか。",
            "vi": "Sở thích của bạn là gì?"
          },
          {
            "id": "rc18-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>古<rt>ふる</rt></ruby>い <ruby>時計<rt>とけい</rt></ruby>を <ruby>集<rt>あつ</rt></ruby>める</u> ことです。",
            "rawJp": "古い 時計を 集める ことです。",
            "vi": "Là sưu tầm những chiếc đồng hồ cổ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Sưu tầm đồng hồ cổ)",
            "values": [
              "<ruby>古<rt>ふる</rt></ruby>い <ruby>時計<rt>とけい</rt></ruby>を <ruby>集<rt>あつ</rt></ruby>める"
            ],
            "rawValues": [
              "古い 時計を 集める"
            ],
            "viValues": [
              "sưu tầm đồng hồ cổ"
            ],
            "lineTimings": [
              [
                11.59,
                12.89
              ],
              [
                13.27,
                15.5
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.52,
                  0.52,
                  0.54,
                  0.56,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Vẽ tranh phong cảnh)",
            "values": [
              "<ruby>絵<rt>え</rt></ruby>を かく"
            ],
            "rawValues": [
              "絵を かく"
            ],
            "viValues": [
              "vẽ tranh"
            ],
            "lineTimings": [
              [
                11.59,
                12.89
              ],
              [
                15.89,
                17.38
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Xem phim nước ngoài)",
            "values": [
              "<ruby>外国<rt>がいこく</rt></ruby>の <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>る"
            ],
            "rawValues": [
              "外国の 映画を 見る"
            ],
            "viValues": [
              "xem phim nước ngoài"
            ],
            "lineTimings": [
              [
                11.59,
                12.89
              ],
              [
                17.76,
                19.97
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.52,
                  0.52,
                  0.54,
                  0.56,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc18-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Việc cần làm trước một hành động (<ruby>前<rt>まえ</rt></ruby>に)",
        "context": "Thói quen trước khi đi ngủ hoặc trước khi ăn.",
        "lines": [
          {
            "id": "rc18-3-l1",
            "speaker": "A",
            "jp": "<u><ruby>寝<rt>ね</rt></ruby>る</u> <ruby>前<rt>まえ</rt></ruby>に、いつも <ruby>何<rt>なん</rt></ruby>を しますか。",
            "rawJp": "寝る 前に、いつも 何を しますか。",
            "vi": "Trước khi đi ngủ, bạn thường làm gì?"
          },
          {
            "id": "rc18-3-l2",
            "speaker": "B",
            "jp": "<u><ruby>日記<rt>にっき</rt></ruby>を <ruby>書<rt>か</rt></ruby>きます</u>。",
            "rawJp": "日記を 書きます。",
            "vi": "Tôi viết nhật ký."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đi ngủ / Viết nhật ký)",
            "values": [
              "<ruby>寝<rt>ね</rt></ruby>る",
              "<ruby>日記<rt>にっき</rt></ruby>を <ruby>書<rt>か</rt></ruby>きます"
            ],
            "rawValues": [
              "寝る",
              "日記を 書きます"
            ],
            "viValues": [
              "đi ngủ",
              "viết nhật ký"
            ],
            "lineTimings": [
              [
                20.35,
                23.02
              ],
              [
                23.4,
                24.72
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Đi du lịch / Đặt khách sạn)",
            "values": [
              "<ruby>旅行<rt>りょこう</rt></ruby>する",
              "ホテルを <ruby>予約<rt>よやく</rt></ruby>します"
            ],
            "rawValues": [
              "旅行する",
              "ホテルを 予約します"
            ],
            "viValues": [
              "đi du lịch",
              "đặt khách sạn"
            ],
            "lineTimings": [
              [
                25.1,
                28.03
              ],
              [
                28.42,
                29.95
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Ăn cơm / Rửa tay)",
            "values": [
              "<ruby>食事する<rt>しょくじする</rt></ruby>",
              "<ruby>手<rt>て</rt></ruby>を <ruby>洗<rt>あら</rt></ruby>います"
            ],
            "rawValues": [
              "食事する",
              "手を 洗います"
            ],
            "viValues": [
              "ăn cơm",
              "rửa tay"
            ],
            "lineTimings": [
              [
                30.34,
                33.48
              ],
              [
                33.86,
                35.04
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.61,
                  0.57,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq18-1",
        "question": "Chủ đề chính của bài hội thoại Bài 18「<ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Sở thích của bạn là gì?",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「<ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>」trong Bài 18 có nghĩa là \"Sở thích của bạn là gì?\". Bối cảnh: Anh Yamada hỏi chuyện anh Santos và chị Maria về sở thích cá nhân. Anh Santos thích chụp ảnh, còn chị Maria thích xem tranh và anh Yamada có ước mơ cưỡi ngựa."
      },
      {
        "id": "kq18-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。」(Sở thích của anh Santos là gì thế?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
          "<ruby>動物<rt>どうぶつ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>です。<ruby>特<rt>とく</rt></ruby>に <ruby>馬<rt>うま</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。",
          "へえ、それは おもしろいですね。",
          "<ruby>写真<rt>しゃしん</rt></ruby>です。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「<ruby>写真<rt>しゃしん</rt></ruby>です。」(Là nhiếp ảnh ạ.). Trả lời trực tiếp bằng danh từ."
      },
      {
        "id": "kq18-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>写真<rt>しゃしん</rt></ruby>です。」(Là nhiếp ảnh ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>動物<rt>どうぶつ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>です。<ruby>特<rt>とく</rt></ruby>に <ruby>馬<rt>うま</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。",
          "へえ、それは おもしろいですね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。」(Anh thường chụp những bức ảnh như thế nào?). Hỏi sâu hơn về chủ đề nhiếp ảnh của đối phương."
      },
      {
        "id": "kq18-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。」(Anh thường chụp những bức ảnh như thế nào?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "へえ、それは おもしろいですね。",
          "<ruby>動物<rt>どうぶつ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>です。<ruby>特<rt>とく</rt></ruby>に <ruby>馬<rt>うま</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。",
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>写真<rt>しゃしん</rt></ruby>です。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「<ruby>動物<rt>どうぶつ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>です。<ruby>特<rt>とく</rt></ruby>に <ruby>馬<rt>うま</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。」(Là ảnh động vật ạ. Đặc biệt tôi rất thích ngựa.). 「<ruby>特<rt>とく</rt></ruby>に」(とくに): đặc biệt là."
      },
      {
        "id": "kq18-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>動物<rt>どうぶつ</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>です。<ruby>特<rt>とく</rt></ruby>に <ruby>馬<rt>うま</rt></ruby>が <ruby>好<rt>す</rt></ruby>きです。」(Là ảnh động vật ạ. Đặc biệt tôi rất thích ngựa.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>写真<rt>しゃしん</rt></ruby>です。",
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
          "へえ、それは おもしろいですね。",
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「へえ、それは おもしろいですね。」(Ồ, điều đó thú vị thật đấy nhỉ.). 「へえ」biểu thị sự ngạc nhiên và thích thú trước thông tin mới."
      },
      {
        "id": "kq18-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「へえ、それは おもしろいですね。」(Ồ, điều đó thú vị thật đấy nhỉ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>写真<rt>しゃしん</rt></ruby>です。",
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
          "<ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>馬<rt>うま</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「<ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>馬<rt>うま</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。」(Trước khi đến Nhật, anh có hay cưỡi ngựa không?). 「<ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に」: trước khi đến Nhật (V-る + <ruby>前<rt>まえ</rt></ruby>に); cưỡi ngựa dùng trợ từ に (<ruby>馬<rt>うま</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります)."
      },
      {
        "id": "kq18-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>く</rt></ruby>る <ruby>前<rt>まえ</rt></ruby>に、<ruby>馬<rt>うま</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。」(Trước khi đến Nhật, anh có hay cưỡi ngựa không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ、ブラジルで よく <ruby>乗<rt>の</rt></ruby>りました。",
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>写真<rt>しゃしん</rt></ruby>です。",
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「ええ、ブラジルで よく <ruby>乗<rt>の</rt></ruby>りました。」(Vâng, hồi ở Brazil tôi thường xuyên cưỡi ngựa lắm.). Kể về trải nghiệm ở quê nhà."
      },
      {
        "id": "kq18-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、ブラジルで よく <ruby>乗<rt>の</rt></ruby>りました。」(Vâng, hồi ở Brazil tôi thường xuyên cưỡi ngựa lắm.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
          "わたしは <ruby>日本<rt>にほん</rt></ruby>で <ruby>馬<rt>うま</rt></ruby>を <ruby>見<rt>み</rt></ruby>る ことは できますが、<ruby>乗<rt>の</rt></ruby>る ことは なかなか できません。",
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>写真<rt>しゃしん</rt></ruby>です。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「わたしは <ruby>日本<rt>にほん</rt></ruby>で <ruby>馬<rt>うま</rt></ruby>を <ruby>見<rt>み</rt></ruby>る ことは できますが、<ruby>乗<rt>の</rt></ruby>る ことは なかなか できません。」(Ở Nhật thì việc ngắm ngựa có thể làm được, chứ việc cưỡi ngựa thì mãi chẳng có dịp thực hiện được.). 「なかなか + Phủ định」nghĩa là \"mãi mà không thể / rất khó để làm được\"."
      },
      {
        "id": "kq18-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「わたしは <ruby>日本<rt>にほん</rt></ruby>で <ruby>馬<rt>うま</rt></ruby>を <ruby>見<rt>み</rt></ruby>る ことは できますが、<ruby>乗<rt>の</rt></ruby>る ことは なかなか できません。」(Ở Nhật thì việc ngắm ngựa có thể làm được, chứ việc cưỡi ngựa thì mãi chẳng có dịp thực hiện được.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>写真<rt>しゃしん</rt></ruby>です。",
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
          "<ruby>北海道<rt>ほっかいどう</rt></ruby>で <ruby>乗<rt>の</rt></ruby>る ことが できますよ。",
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「<ruby>北海道<rt>ほっかいどう</rt></ruby>で <ruby>乗<rt>の</rt></ruby>る ことが できますよ。」(Ở Hokkaido có thể cưỡi ngựa được đấy anh ạ.). Gợi ý địa điểm có trang trại ngựa nổi tiếng ở Nhật."
      },
      {
        "id": "kq18-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>北海道<rt>ほっかいどう</rt></ruby>で <ruby>乗<rt>の</rt></ruby>る ことが できますよ。」(Ở Hokkaido có thể cưỡi ngựa được đấy anh ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "サントスさんの <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>写真<rt>しゃしん</rt></ruby>です。",
          "どんな <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。",
          "ほんとうですか。じゃ、<ruby>夏休<rt>なつやす</rt></ruby>みに ぜひ <ruby>行<rt>い</rt></ruby>きたいです。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 18, câu đáp chuẩn xác là:「ほんとうですか。じゃ、<ruby>夏休<rt>なつやす</rt></ruby>みに ぜひ <ruby>行<rt>い</rt></ruby>きたいです。」(Thật vậy sao! Thế thì kỳ nghỉ hè này nhất định tôi muốn đi thử.). 「ぜひ」đi với「V-たいです」nhấn mạnh mong muốn mãnh liệt (\"nhất định\")."
      }
    ]
  },
  "kaiwa-19": {
    "id": "kaiwa-19",
    "lesson": 19,
    "level": "Sơ cấp 1",
    "titleJp": "ダイエットは あしたから します",
    "titleVi": "Chuyện ăn kiêng để mai tôi sẽ bắt đầu",
    "subtitleVi": "Tiệc ăn uống & câu chuyện giảm cân hài hước",
    "sceneType": "diet_party",
    "context": "Trong bữa tiệc, chị Maria được mời rất nhiều món ngon nhưng ban đầu từ chối vì đang ăn kiêng. Tuy nhiên trước chiếc bánh kem hấp dẫn, chị quyết định dời việc ăn kiêng sang ngày mai.",
    "objectives": [
      "Nói về kinh nghiệm từng làm trong quá khứ: V-た ことが あります.",
      "Liệt kê các hành động tiêu biểu trong ngày bằng: V1-たり、V2-たり します.",
      "Diễn tả sự biến đổi trạng thái với tính từ và danh từ: A-く / A-に / N-に なります."
    ],
    "audioSrc": "audio/kaiwa/lesson_19.mp3",
    "audioDuration": 29.52,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_19.mp3",
    "renshuuAudioDuration": 47.14,
    "characters": [
      {
        "id": "yamada",
        "badgeJp": "<ruby>山田<rt>やまだ</rt></ruby>",
        "fullNameJp": "<ruby>山田<rt>やまだ</rt></ruby><ruby>一郎<rt>いちろう</rt></ruby>",
        "roleVi": "anh Yamada Ichiro · nhân viên công ty IMC",
        "color": "emerald",
        "gender": "male",
        "pitch": 1,
        "rate": 0.96,
        "voice": "ja-JP-KeitaNeural",
        "speechGenVoice": "Keita",
        "voiceName": "Keita (Nam công sở chuẩn Tokyo)"
      },
      {
        "id": "sato",
        "badgeJp": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "fullNameJp": "<ruby>佐藤<rt>さとう</rt></ruby>けい<ruby>子<rt>こ</rt></ruby>",
        "roleVi": "chị Sato Keiko · nhân viên công ty IMC",
        "color": "blue",
        "gender": "female",
        "pitch": 1.02,
        "rate": 0.96,
        "voice": "ja-JP-NanamiNeural",
        "speechGenVoice": "Nanami",
        "voiceName": "Nanami (Nữ công sở chuẩn Tokyo)"
      },
      {
        "id": "maria",
        "badgeJp": "マリア",
        "fullNameJp": "マリア・サントス",
        "roleVi": "chị Maria Santos · phu nhân anh Santos",
        "color": "rose",
        "gender": "female",
        "pitch": 0.97,
        "rate": 0.94,
        "voice": "en-US-AvaMultilingualNeural",
        "speechGenVoice": "Ava",
        "voiceName": "Ava (Nữ đằm thắm, ấm áp)"
      }
    ],
    "dialogue": [
      {
        "id": "k19-1",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。",
        "rawJp": "マリアさん、あまり 食べませんね。",
        "vi": "Chị Maria này, sao chị không ăn mấy thế?",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Chủ nhà quan tâm khi thấy khách ăn ít.",
        "time": [
          0,
          2.5
        ]
      },
      {
        "id": "k19-2",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ。きのうから ダイエットを して います。",
        "rawJp": "ええ。きのうから ダイエットを して います。",
        "vi": "Vâng. Từ hôm qua tôi đang thực hiện chế độ ăn kiêng ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「ダイエットをしています」: đang ăn kiêng giảm cân.",
        "time": [
          2.88,
          5.45
        ]
      },
      {
        "id": "k19-3",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "そうですか。わたしも よく ダイエットを します。",
        "rawJp": "そうですか。わたしも よく ダイエットを します。",
        "vi": "Thế ạ. Tôi cũng hay ăn kiêng lắm.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "Chia sẻ sự đồng cảm của phái nữ.",
        "time": [
          5.83,
          9.34
        ]
      },
      {
        "id": "k19-4",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "question",
        "jp": "どんな ダイエットを した ことが ありますか。",
        "rawJp": "どんな ダイエットを した ことが ありますか。",
        "vi": "Chị đã từng thử phương pháp ăn kiêng như thế nào rồi ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.62,
          0.85
        ],
        "explanation": "「V-た ことが あります」hỏi về trải nghiệm trong quá khứ.",
        "time": [
          9.72,
          11.9
        ]
      },
      {
        "id": "k19-5",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>毎日<rt>まいにち</rt></ruby> りんごだけ <ruby>食<rt>た</rt></ruby>べたり、<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだり しました。",
        "rawJp": "毎日 りんごだけ 食べたり、水を たくさん 飲んだり しました。",
        "vi": "Nào là mỗi ngày chỉ ăn toàn táo, nào là uống thật nhiều nước...",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.48,
          0.35
        ],
        "explanation": "「V1-たり、V2-たり しました」liệt kê các phương pháp tiêu biểu đã thử.",
        "time": [
          12.36,
          16.49
        ]
      },
      {
        "id": "k19-6",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "empathy_apology",
        "jp": "しかし、<ruby>無理<rt>むり</rt></ruby>な ダイエットは <ruby>体<rt>からだ</rt></ruby>に よくないですよ。",
        "rawJp": "しかし、無理な ダイエットは 体に よくないですよ。",
        "vi": "Tuy nhiên, việc ăn kiêng quá sức thì không tốt cho cơ thể đâu nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.52,
          0.54,
          0.54,
          0.51,
          0.47,
          0.44,
          0.44,
          0.46,
          0.49,
          0.43,
          0.32
        ],
        "explanation": "「<ruby>無理<rt>むり</rt></ruby>な」(むりな): quá sức, ép xác.",
        "time": [
          16.87,
          20.62
        ]
      },
      {
        "id": "k19-7",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "そうですね。",
        "rawJp": "そうですね。",
        "vi": "Vâng, đúng thế thật ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.55,
          0.43,
          0.32
        ],
        "explanation": "Tán đồng với lời khuyên của anh Yamada.",
        "time": [
          21,
          21.96
        ]
      },
      {
        "id": "k19-8",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "マリアさん、この ケーキ、おいしいですよ。",
        "rawJp": "マリアさん、この ケーキ、おいしいですよ。",
        "vi": "Chị Maria ơi, món bánh kem này ngon lắm đấy.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.56,
          0.59,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.51,
          0.48,
          0.35
        ],
        "explanation": "Mời món tráng miệng hấp dẫn.",
        "time": [
          22.34,
          25.32
        ]
      },
      {
        "id": "k19-9",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "hesitation",
        "jp": "そうですか。…じゃ、ダイエットは あしたから します。",
        "rawJp": "そうですか。…じゃ、ダイエットは あしたから します。",
        "vi": "Thế ạ?... Vậy thì chuyện ăn kiêng để từ ngày mai tôi sẽ làm vậy!",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.62,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.51,
          0.53,
          0.53,
          0.5,
          0.46,
          0.43,
          0.43,
          0.45,
          0.48,
          0.42,
          0.32
        ],
        "explanation": "Câu kết hài hước rất nổi tiếng của Bài 19 Minna no Nihongo.",
        "time": [
          25.7,
          29.52
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc19-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi về trải nghiệm từng làm (V-たことが ありますか)",
        "context": "Hỏi bạn bè đã từng đi Hokkaido, từng ăn Sushi, từng leo núi Phú Sĩ chưa.",
        "lines": [
          {
            "id": "rc19-1-l1",
            "speaker": "A",
            "jp": "<u><ruby>相撲<rt>すもう</rt></ruby>を <ruby>見<rt>み</rt></ruby>た</u> ことが ありますか。",
            "rawJp": "相撲を 見た ことが ありますか。",
            "vi": "Bạn đã từng xem đấu vật Sumo bao giờ chưa?"
          },
          {
            "id": "rc19-1-l2",
            "speaker": "B",
            "jp": "いいえ、<ruby>一度<rt>いちど</rt></ruby>も ありません。ぜひ <u><ruby>見<rt>み</rt></ruby>たい</u>です。",
            "rawJp": "いいえ、一度も ありません。ぜひ 見たいです。",
            "vi": "Chưa, chưa một lần nào cả. Nhất định tôi rất muốn xem thử."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Xem đấu vật Sumo)",
            "values": [
              "<ruby>相撲<rt>すもう</rt></ruby>を <ruby>見<rt>み</rt></ruby>た",
              "<ruby>見<rt>み</rt></ruby>たい"
            ],
            "rawValues": [
              "相撲を 見た",
              "見たい"
            ],
            "viValues": [
              "xem Sumo",
              "muốn xem"
            ],
            "lineTimings": [
              [
                0,
                2.16
              ],
              [
                2.54,
                6.07
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Leo núi Phú Sĩ)",
            "values": [
              "<ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>った",
              "<ruby>登<rt>のぼ</rt></ruby>りたい"
            ],
            "rawValues": [
              "富士山に 登った",
              "登りたい"
            ],
            "viValues": [
              "leo núi Phú Sĩ",
              "muốn leo"
            ],
            "lineTimings": [
              [
                6.46,
                8.86
              ],
              [
                9.24,
                13.01
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Tắm suối nước nóng Onsen)",
            "values": [
              "<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>った",
              "<ruby>入<rt>はい</rt></ruby>りたい"
            ],
            "rawValues": [
              "温泉に 入った",
              "入りたい"
            ],
            "viValues": [
              "tắm Onsen",
              "muốn tắm"
            ],
            "lineTimings": [
              [
                13.39,
                15.65
              ],
              [
                16.03,
                19.78
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.66,
                  0.62,
                  0.59,
                  0.59,
                  0.62,
                  0.64,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc19-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Kể các hoạt động ngày nghỉ (V-たり、V-たり)",
        "context": "Nói về những việc thường làm vào Chủ nhật.",
        "lines": [
          {
            "id": "rc19-2-l1",
            "speaker": "A",
            "jp": "<ruby>休み<rt>やすみ</rt></ruby>の <ruby>日<rt>にち</rt></ruby>は いつも <ruby>何<rt>なん</rt></ruby>を しますか。",
            "rawJp": "休みの 日は いつも 何を しますか。",
            "vi": "Vào ngày nghỉ bạn thường làm gì?"
          },
          {
            "id": "rc19-2-l2",
            "speaker": "B",
            "jp": "<u>テニスを したり、<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>いたり</u> します。",
            "rawJp": "テニスを したり、音楽を 聞いたり します。",
            "vi": "Lúc thì tôi chơi tennis, lúc thì nghe nhạc."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Chơi tennis / Nghe nhạc)",
            "values": [
              "テニスを したり、<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>いたり"
            ],
            "rawValues": [
              "テニスを したり、音楽を 聞いたり"
            ],
            "viValues": [
              "chơi tennis, nghe nhạc"
            ],
            "lineTimings": [
              [
                20.16,
                22.37
              ],
              [
                22.75,
                25.9
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.59,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.51,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Dọn phòng / Giặt giũ)",
            "values": [
              "<ruby>掃除<rt>そうじ</rt></ruby>したり、<ruby>洗濯<rt>せんたく</rt></ruby>したり"
            ],
            "rawValues": [
              "掃除したり、洗濯したり"
            ],
            "viValues": [
              "dọn phòng, giặt giũ"
            ],
            "lineTimings": [
              [
                20.16,
                22.37
              ],
              [
                26.28,
                28.97
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Đi mua sắm / Xem phim)",
            "values": [
              "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を したり、<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>たり"
            ],
            "rawValues": [
              "買い物を したり、映画を 見たり"
            ],
            "viValues": [
              "mua sắm, xem phim"
            ],
            "lineTimings": [
              [
                20.16,
                22.37
              ],
              [
                29.35,
                32.21
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc19-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Nhận xét sự thay đổi (～く/に なりました)",
        "context": "Khen bạn giỏi tiếng Nhật hơn hoặc nhận xét thời tiết chuyển mùa.",
        "lines": [
          {
            "id": "rc19-3-l1",
            "speaker": "A",
            "jp": "だんだん <u><ruby>暖<rt>あたた</rt></ruby>かく</u> なりましたね。",
            "rawJp": "だんだん 暖かく なりましたね。",
            "vi": "Trời ấm dần lên rồi nhỉ."
          },
          {
            "id": "rc19-3-l2",
            "speaker": "B",
            "jp": "ええ、もうすぐ <u><ruby>春<rt>はる</rt></ruby></u>ですね。",
            "rawJp": "ええ、もうすぐ 春ですね。",
            "vi": "Vâng, sắp sửa sang mùa xuân rồi nhỉ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Ấm dần lên / Mùa xuân)",
            "values": [
              "<ruby>暖<rt>あたた</rt></ruby>かく",
              "<ruby>春<rt>はる</rt></ruby>"
            ],
            "rawValues": [
              "暖かく",
              "春"
            ],
            "viValues": [
              "ấm lên",
              "mùa xuân"
            ],
            "lineTimings": [
              [
                32.59,
                34.85
              ],
              [
                35.23,
                37.34
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Mát mẻ hơn / Mùa thu)",
            "values": [
              "<ruby>涼<rt>すず</rt></ruby>しく",
              "<ruby>秋<rt>あき</rt></ruby>"
            ],
            "rawValues": [
              "涼しく",
              "秋"
            ],
            "viValues": [
              "mát mẻ",
              "mùa thu"
            ],
            "lineTimings": [
              [
                37.73,
                39.82
              ],
              [
                40.2,
                42.31
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.53,
                  0.52,
                  0.55,
                  0.57,
                  0.56,
                  0.53,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Lạnh đi / Mùa đông)",
            "values": [
              "<ruby>寒<rt>さむ</rt></ruby>く",
              "<ruby>冬<rt>ふゆ</rt></ruby>"
            ],
            "rawValues": [
              "寒く",
              "冬"
            ],
            "viValues": [
              "lạnh đi",
              "mùa đông"
            ],
            "lineTimings": [
              [
                42.7,
                44.66
              ],
              [
                45.05,
                47.14
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.52,
                  0.52,
                  0.54,
                  0.56,
                  0.55,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq19-1",
        "question": "Chủ đề chính của bài hội thoại Bài 19「ダイエットは あしたから します」mang ý nghĩa là gì?",
        "options": [
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Chuyện ăn kiêng để mai tôi sẽ bắt đầu"
        ],
        "correctIdx": 3,
        "explanation": "「ダイエットは あしたから します」trong Bài 19 có nghĩa là \"Chuyện ăn kiêng để mai tôi sẽ bắt đầu\". Bối cảnh: Trong bữa tiệc, chị Maria được mời rất nhiều món ngon nhưng ban đầu từ chối vì đang ăn kiêng. Tuy nhiên trước chiếc bánh kem hấp dẫn, chị quyết định dời việc ăn kiêng sang ngày mai."
      },
      {
        "id": "kq19-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。」(Chị Maria này, sao chị không ăn mấy thế?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。きのうから ダイエットを して います。",
          "そうですか。わたしも よく ダイエットを します。",
          "どんな ダイエットを した ことが ありますか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> りんごだけ <ruby>食<rt>た</rt></ruby>べたり、<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだり しました。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「ええ。きのうから ダイエットを して います。」(Vâng. Từ hôm qua tôi đang thực hiện chế độ ăn kiêng ạ.). 「ダイエットをしています」: đang ăn kiêng giảm cân."
      },
      {
        "id": "kq19-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。きのうから ダイエットを して います。」(Vâng. Từ hôm qua tôi đang thực hiện chế độ ăn kiêng ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>毎日<rt>まいにち</rt></ruby> りんごだけ <ruby>食<rt>た</rt></ruby>べたり、<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだり しました。",
          "そうですか。わたしも よく ダイエットを します。",
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。",
          "どんな ダイエットを した ことが ありますか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「そうですか。わたしも よく ダイエットを します。」(Thế ạ. Tôi cũng hay ăn kiêng lắm.). Chia sẻ sự đồng cảm của phái nữ."
      },
      {
        "id": "kq19-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。わたしも よく ダイエットを します。」(Thế ạ. Tôi cũng hay ăn kiêng lắm.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。きのうから ダイエットを して います。",
          "<ruby>毎日<rt>まいにち</rt></ruby> りんごだけ <ruby>食<rt>た</rt></ruby>べたり、<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだり しました。",
          "どんな ダイエットを した ことが ありますか。",
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「どんな ダイエットを した ことが ありますか。」(Chị đã từng thử phương pháp ăn kiêng như thế nào rồi ạ?). 「V-た ことが あります」hỏi về trải nghiệm trong quá khứ."
      },
      {
        "id": "kq19-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「どんな ダイエットを した ことが ありますか。」(Chị đã từng thử phương pháp ăn kiêng như thế nào rồi ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。",
          "ええ。きのうから ダイエットを して います。",
          "そうですか。わたしも よく ダイエットを します。",
          "<ruby>毎日<rt>まいにち</rt></ruby> りんごだけ <ruby>食<rt>た</rt></ruby>べたり、<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだり しました。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「<ruby>毎日<rt>まいにち</rt></ruby> りんごだけ <ruby>食<rt>た</rt></ruby>べたり、<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだり しました。」(Nào là mỗi ngày chỉ ăn toàn táo, nào là uống thật nhiều nước...). 「V1-たり、V2-たり しました」liệt kê các phương pháp tiêu biểu đã thử."
      },
      {
        "id": "kq19-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>毎日<rt>まいにち</rt></ruby> りんごだけ <ruby>食<rt>た</rt></ruby>べたり、<ruby>水<rt>みず</rt></ruby>を たくさん <ruby>飲<rt>の</rt></ruby>んだり しました。」(Nào là mỗi ngày chỉ ăn toàn táo, nào là uống thật nhiều nước...), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "しかし、<ruby>無理<rt>むり</rt></ruby>な ダイエットは <ruby>体<rt>からだ</rt></ruby>に よくないですよ。",
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。",
          "ええ。きのうから ダイエットを して います。",
          "そうですか。わたしも よく ダイエットを します。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「しかし、<ruby>無理<rt>むり</rt></ruby>な ダイエットは <ruby>体<rt>からだ</rt></ruby>に よくないですよ。」(Tuy nhiên, việc ăn kiêng quá sức thì không tốt cho cơ thể đâu nhé.). 「<ruby>無理<rt>むり</rt></ruby>な」(むりな): quá sức, ép xác."
      },
      {
        "id": "kq19-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「しかし、<ruby>無理<rt>むり</rt></ruby>な ダイエットは <ruby>体<rt>からだ</rt></ruby>に よくないですよ。」(Tuy nhiên, việc ăn kiêng quá sức thì không tốt cho cơ thể đâu nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。わたしも よく ダイエットを します。",
          "そうですね。",
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。",
          "ええ。きのうから ダイエットを して います。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「そうですね。」(Vâng, đúng thế thật ạ.). Tán đồng với lời khuyên của anh Yamada."
      },
      {
        "id": "kq19-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですね。」(Vâng, đúng thế thật ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。きのうから ダイエットを して います。",
          "そうですか。わたしも よく ダイエットを します。",
          "マリアさん、この ケーキ、おいしいですよ。",
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「マリアさん、この ケーキ、おいしいですよ。」(Chị Maria ơi, món bánh kem này ngon lắm đấy.). Mời món tráng miệng hấp dẫn."
      },
      {
        "id": "kq19-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「マリアさん、この ケーキ、おいしいですよ。」(Chị Maria ơi, món bánh kem này ngon lắm đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。",
          "ええ。きのうから ダイエットを して います。",
          "そうですか。わたしも よく ダイエットを します。",
          "そうですか。…じゃ、ダイエットは あしたから します。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 19, câu đáp chuẩn xác là:「そうですか。…じゃ、ダイエットは あしたから します。」(Thế ạ?... Vậy thì chuyện ăn kiêng để từ ngày mai tôi sẽ làm vậy!). Câu kết hài hước rất nổi tiếng của Bài 19 Minna no Nihongo."
      },
      {
        "id": "kq19-10",
        "question": "Để diễn đạt ý: \"Chị Maria này, sao chị không ăn mấy thế?\" trong tình huống Bài 19, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。",
          "ええ。きのうから ダイエットを して います。",
          "そうですか。わたしも よく ダイエットを します。",
          "どんな ダイエットを した ことが ありますか。"
        ],
        "correctIdx": 0,
        "explanation": "Câu「マリアさん、あまり <ruby>食<rt>た</rt></ruby>べませんね。」dịch nghĩa là \"Chị Maria này, sao chị không ăn mấy thế?\". Chủ nhà quan tâm khi thấy khách ăn ít."
      }
    ]
  },
  "kaiwa-20": {
    "id": "kaiwa-20",
    "lesson": 20,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>夏休<rt>なつやす</rt></ruby>みは どう するの？",
    "titleVi": "Kỳ nghỉ hè cậu tính sao?",
    "subtitleVi": "Hội thoại thân mật (Thể thông thường - 普通形)",
    "sceneType": "summer_plan",
    "context": "Hai đồng nghiệp thân thiết là anh Kobayashi và anh <ruby>鈴木<rt>すずき</rt></ruby> (Suzuki) trò chuyện bằng thể thông thường (<ruby>普通形<rt>ふつうけい</rt></ruby>) về kế hoạch leo núi Phú Sĩ trong kỳ nghỉ hè sắp tới.",
    "objectives": [
      "Nắm vững cách chuyển đổi và sử dụng Thể thông thường (<ruby>普通形<rt>ふつうけい</rt></ruby>) trong giao tiếp thân mật với bạn bè đồng trang lứa.",
      "Biết cách lược bỏ trợ từ và lên giọng cuối câu để hỏi trong văn nói thân mật (<ruby>夏休<rt>なつやす</rt></ruby>みは どう するの？ / <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？).",
      "Đáp lại tự nhiên bằng うん (Ừ / Có) và ううん (Không)."
    ],
    "audioSrc": "audio/kaiwa/lesson_20.mp3",
    "audioDuration": 29.35,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_20.mp3",
    "renshuuAudioDuration": 40.2,
    "characters": [
      {
        "id": "kobayashi",
        "badgeJp": "<ruby>小林<rt>こばやし</rt></ruby>",
        "fullNameJp": "<ruby>小林<rt>こばやし</rt></ruby>",
        "roleVi": "anh Kobayashi · người quen / nhân viên",
        "color": "purple",
        "gender": "male",
        "pitch": 0.97,
        "rate": 0.95,
        "voice": "de-DE-FlorianMultilingualNeural",
        "speechGenVoice": "Florian",
        "voiceName": "Florian (Nam lịch thiệp)"
      },
      {
        "id": "suzuki",
        "badgeJp": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "fullNameJp": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "roleVi": "chị Suzuki · đồng nghiệp / nhân viên Nhật Bản",
        "color": "emerald",
        "gender": "female",
        "pitch": 1.03,
        "rate": 0.96,
        "voice": "fr-FR-VivienneMultilingualNeural",
        "speechGenVoice": "Vivienne",
        "voiceName": "Vivienne (Nữ đồng nghiệp)"
      }
    ],
    "dialogue": [
      {
        "id": "k20-1",
        "speakerId": "kobayashi",
        "speakerBadge": "<ruby>小林<rt>こばやし</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？",
        "rawJp": "鈴木くん、夏休みは どこへ 行くの？",
        "vi": "Suzuki này, nghỉ hè cậu định đi đâu đấy?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.62,
          0.85
        ],
        "explanation": "「<ruby>行<rt>い</rt></ruby>くの？」(lên giọng) là cách hỏi thân mật của「どこへ <ruby>行<rt>い</rt></ruby>きますか」.",
        "time": [
          0,
          2.86
        ]
      },
      {
        "id": "k20-2",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "question",
        "jp": "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
        "rawJp": "まだ 決めて いないよ。小林くんは？",
        "vi": "Tớ vẫn chưa quyết định nữa. Thế còn cậu thì sao Kobayashi?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.62,
          0.85
        ],
        "explanation": "「<ruby>決<rt>き</rt></ruby>めていないよ」= <ruby>決<rt>き</rt></ruby>めていません (vẫn chưa quyết định).",
        "time": [
          3.31,
          6
        ]
      },
      {
        "id": "k20-3",
        "speakerId": "kobayashi",
        "speakerBadge": "<ruby>小林<rt>こばやし</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "statement",
        "jp": "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。",
        "rawJp": "ぼくは 友だちと 富士山に 登るんだ。",
        "vi": "Tớ định đi leo núi Phú Sĩ với bạn đấy.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.56,
          0.58,
          0.57,
          0.54,
          0.5,
          0.47,
          0.48,
          0.35
        ],
        "explanation": "「ぼく」là đại từ xưng \"tớ/tôi\" thân mật của nam giới.",
        "time": [
          6.46,
          8.95
        ]
      },
      {
        "id": "k20-4",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "question",
        "jp": "へえ、いいね。もう <ruby>何回も<rt>なんかいも</rt></ruby> <ruby>登<rt>のぼ</rt></ruby>った ことが あるの？",
        "rawJp": "へえ、いいね。もう 何回も 登った ことが あるの？",
        "vi": "Ồ, tuyệt thế! Cậu đã từng leo nhiều lần rồi hả?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.62,
          0.85
        ],
        "explanation": "「いいね」= いいですね;「あるの？」= ありますか.",
        "time": [
          9.34,
          13.06
        ]
      },
      {
        "id": "k20-5",
        "speakerId": "kobayashi",
        "speakerBadge": "<ruby>小林<rt>こばやし</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "question",
        "jp": "ううん、<ruby>初めて<rt>はじめて</rt></ruby>だよ。<ruby>鈴木<rt>すずき</rt></ruby>くんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？",
        "rawJp": "ううん、初めてだよ。鈴木くんも 一緒に 行かない？",
        "vi": "Không, đây là lần đầu tiên đấy. Suzuki cũng đi cùng bọn tớ không?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.57,
          0.59,
          0.59,
          0.56,
          0.52,
          0.49,
          0.49,
          0.51,
          0.54,
          0.62,
          0.85
        ],
        "explanation": "「ううん」= いいえ (Không);「<ruby>行<rt>い</rt></ruby>かない？」= <ruby>行<rt>い</rt></ruby>きませんか (Rủ rê thân mật).",
        "time": [
          13.51,
          17.5
        ]
      },
      {
        "id": "k20-6",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "question",
        "jp": "うん、<ruby>行<rt>い</rt></ruby>きたいけど、いつから？",
        "rawJp": "うん、行きたいけど、いつから？",
        "vi": "Ừ, tớ cũng muốn đi lắm nhưng mà từ bao giờ thế?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.6,
          0.56,
          0.52,
          0.52,
          0.54,
          0.56,
          0.55,
          0.62,
          0.85
        ],
        "explanation": "「うん」= はい (Ừ);「～けど」= ～が (nhưng mà).",
        "time": [
          17.95,
          20.38
        ]
      },
      {
        "id": "k20-7",
        "speakerId": "kobayashi",
        "speakerBadge": "<ruby>小林<rt>こばやし</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "statement",
        "jp": "8<ruby>月<rt>がつ</rt></ruby> 10<ruby>日<rt>にち</rt></ruby>から 12<ruby>日<rt>にち</rt></ruby>までだよ。",
        "rawJp": "8月 10日から 12日までだよ。",
        "vi": "Từ ngày 10 đến ngày 12 tháng 8 đấy.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.56,
          0.53,
          0.53,
          0.55,
          0.57,
          0.57,
          0.54,
          0.49,
          0.48,
          0.35
        ],
        "explanation": "Thêm「だよ」ở cuối câu danh từ để truyền đạt thông tin thân mật.",
        "time": [
          20.83,
          23.38
        ]
      },
      {
        "id": "k20-8",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "ちょっと <ruby>考<rt>かんが</rt></ruby>えさせて。あした <ruby>電話<rt>でんわ</rt></ruby>するよ。",
        "rawJp": "ちょっと 考えさせて。あした 電話するよ。",
        "vi": "Cho tớ suy nghĩ một chút nhé. Ngày mai tớ sẽ gọi điện cho cậu.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.64,
          0.61,
          0.57,
          0.54,
          0.54,
          0.56,
          0.59,
          0.58,
          0.55,
          0.51,
          0.48,
          0.48,
          0.51,
          0.48,
          0.35
        ],
        "explanation": "「<ruby>電話<rt>でんわ</rt></ruby>するよ」= <ruby>電話<rt>でんわ</rt></ruby>します.",
        "time": [
          23.76,
          26.74
        ]
      },
      {
        "id": "k20-9",
        "speakerId": "kobayashi",
        "speakerBadge": "<ruby>小林<rt>こばやし</rt></ruby>",
        "speakerColor": "purple",
        "voice": "de-DE-FlorianMultilingualNeural",
        "emotion": "statement",
        "jp": "わかった。<ruby>待<rt>ま</rt></ruby>って いるよ。",
        "rawJp": "わかった。待って いるよ。",
        "vi": "Ok tớ hiểu rồi. Tớ chờ điện thoại của cậu nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.63,
          0.6,
          0.55,
          0.51,
          0.51,
          0.52,
          0.48,
          0.35
        ],
        "explanation": "「わかった」= わかりました.",
        "time": [
          27.12,
          29.35
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc20-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Rủ bạn đi ăn / đi chơi bằng thể thông thường",
        "context": "Dùng V-ない？ (Lên giọng cuối câu).",
        "lines": [
          {
            "id": "rc20-1-l1",
            "speaker": "A",
            "jp": "あした <u>テニスに <ruby>行<rt>い</rt></ruby>かない</u>？",
            "rawJp": "あした テニスに 行かない？",
            "vi": "Ngày mai đi đánh tennis không?"
          },
          {
            "id": "rc20-1-l2",
            "speaker": "B",
            "jp": "<u>うん、いいね</u>。",
            "rawJp": "うん、いいね。",
            "vi": "Ừ, hay đấy!"
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đi đánh tennis / Ừ hay đấy)",
            "values": [
              "テニスに <ruby>行<rt>い</rt></ruby>かない",
              "うん、いいね"
            ],
            "rawValues": [
              "テニスに 行かない",
              "うん、いいね"
            ],
            "viValues": [
              "đi đánh tennis",
              "ừ hay đấy"
            ],
            "lineTimings": [
              [
                0,
                1.73
              ],
              [
                2.11,
                3.5
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.6,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Đi xem phim / Xin lỗi mai tớ bận)",
            "values": [
              "<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>かない",
              "ううん、あしたは ちょっと <ruby>用事<rt>ようじ</rt></ruby>が あるんだ"
            ],
            "rawValues": [
              "映画を 見に 行かない",
              "ううん、あしたは ちょっと 用事が あるんだ"
            ],
            "viValues": [
              "đi xem phim",
              "mai tớ có việc bận rồi"
            ],
            "lineTimings": [
              [
                3.89,
                5.74
              ],
              [
                6.12,
                8.95
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.6,
                  0.56,
                  0.52,
                  0.52,
                  0.54,
                  0.56,
                  0.55,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.57,
                  0.59,
                  0.59,
                  0.56,
                  0.52,
                  0.49,
                  0.49,
                  0.51,
                  0.54,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Đi uống bia / Ừ đi thôi)",
            "values": [
              "ビールを <ruby>飲<rt>の</rt></ruby>みに <ruby>行<rt>い</rt></ruby>かない",
              "うん、<ruby>行<rt>い</rt></ruby>こう"
            ],
            "rawValues": [
              "ビールを 飲みに 行かない",
              "うん、行こう"
            ],
            "viValues": [
              "đi uống bia",
              "ừ đi thôi"
            ],
            "lineTimings": [
              [
                9.34,
                11.33
              ],
              [
                11.71,
                13.13
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.6,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc20-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi xem bạn có vật gì không bằng thể ngắn",
        "context": "Mượn đồ dùng của bạn thân.",
        "lines": [
          {
            "id": "rc20-2-l1",
            "speaker": "A",
            "jp": "<u><ruby>辞書<rt>じしょ</rt></ruby></u>、<ruby>持<rt>も</rt></ruby>って いる？",
            "rawJp": "辞書、持って いる？",
            "vi": "Cậu có mang theo từ điển không?"
          },
          {
            "id": "rc20-2-l2",
            "speaker": "B",
            "jp": "<u>うん、あるよ</u>。ほら、どうぞ。",
            "rawJp": "うん、あるよ。ほら、どうぞ。",
            "vi": "Ừ, có đây. Nè, cậu dùng đi."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Từ điển / Có đây)",
            "values": [
              "<ruby>辞書<rt>じしょ</rt></ruby>",
              "うん、あるよ"
            ],
            "rawValues": [
              "辞書",
              "うん、あるよ"
            ],
            "viValues": [
              "từ điển",
              "ừ có đây"
            ],
            "lineTimings": [
              [
                13.51,
                15.12
              ],
              [
                15.5,
                17.98
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Bút chì / Không có rồi)",
            "values": [
              "<ruby>鉛筆<rt>えんぴつ</rt></ruby>",
              "ううん、<ruby>持<rt>も</rt></ruby>って いないよ"
            ],
            "rawValues": [
              "鉛筆",
              "ううん、持って いないよ"
            ],
            "viValues": [
              "bút chì",
              "không có rồi"
            ],
            "lineTimings": [
              [
                18.36,
                20.18
              ],
              [
                20.57,
                23.76
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.62,
                  0.58,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.58,
                  0.57,
                  0.54,
                  0.5,
                  0.47,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Bản đồ Kyoto / Có đây)",
            "values": [
              "<ruby>京都<rt>きょうと</rt></ruby>の <ruby>地図<rt>ちず</rt></ruby>",
              "うん、あるよ"
            ],
            "rawValues": [
              "京都の 地図",
              "うん、あるよ"
            ],
            "viValues": [
              "bản đồ Kyoto",
              "ừ có đây"
            ],
            "lineTimings": [
              [
                24.14,
                26.21
              ],
              [
                15.5,
                17.98
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.51,
                  0.51,
                  0.52,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc20-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi cảm nhận cuối tuần bằng thể ngắn",
        "context": "Trò chuyện đầu tuần với bạn cùng lớp.",
        "lines": [
          {
            "id": "rc20-3-l1",
            "speaker": "A",
            "jp": "きのうの <u>パーティー</u>、どうだった？",
            "rawJp": "きのうの パーティー、どうだった？",
            "vi": "Bữa tiệc hôm qua thế nào?"
          },
          {
            "id": "rc20-3-l2",
            "speaker": "B",
            "jp": "とても <u><ruby>楽<rt>たの</rt></ruby>しかったよ</u>。",
            "rawJp": "とても 楽しかったよ。",
            "vi": "Vui lắm cậu ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Bữa tiệc / Rất vui)",
            "values": [
              "パーティー",
              "<ruby>楽<rt>たの</rt></ruby>しかったよ"
            ],
            "rawValues": [
              "パーティー",
              "楽しかったよ"
            ],
            "viValues": [
              "bữa tiệc",
              "rất vui"
            ],
            "lineTimings": [
              [
                26.59,
                28.82
              ],
              [
                29.21,
                30.67
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.56,
                  0.53,
                  0.53,
                  0.55,
                  0.57,
                  0.57,
                  0.54,
                  0.49,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.64,
                  0.59,
                  0.55,
                  0.55,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Trận bóng đá / Rất hấp dẫn)",
            "values": [
              "サッカーの <ruby>試合<rt>しあい</rt></ruby>",
              "おもしろかったよ"
            ],
            "rawValues": [
              "サッカーの 試合",
              "おもしろかったよ"
            ],
            "viValues": [
              "trận bóng đá",
              "rất hấp dẫn"
            ],
            "lineTimings": [
              [
                31.06,
                33.74
              ],
              [
                34.13,
                35.74
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.64,
                  0.61,
                  0.57,
                  0.54,
                  0.54,
                  0.56,
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Bài kiểm tra / Khó lắm)",
            "values": [
              "<ruby>試験<rt>しけん</rt></ruby>",
              "<ruby>難<rt>むずか</rt></ruby>しかったよ"
            ],
            "rawValues": [
              "試験",
              "難しかったよ"
            ],
            "viValues": [
              "bài kiểm tra",
              "khó lắm"
            ],
            "lineTimings": [
              [
                36.12,
                38.21
              ],
              [
                38.59,
                40.2
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.6,
                  0.55,
                  0.52,
                  0.51,
                  0.53,
                  0.55,
                  0.62,
                  0.85
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "statement",
                "endPitch": "down",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.63,
                  0.59,
                  0.54,
                  0.5,
                  0.5,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq20-1",
        "question": "Chủ đề chính của bài hội thoại Bài 20「<ruby>夏休<rt>なつやす</rt></ruby>みは どう するの？」mang ý nghĩa là gì?",
        "options": [
          "Kỳ nghỉ hè cậu tính sao?",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật"
        ],
        "correctIdx": 0,
        "explanation": "「<ruby>夏休<rt>なつやす</rt></ruby>みは どう するの？」trong Bài 20 có nghĩa là \"Kỳ nghỉ hè cậu tính sao?\". Bối cảnh: Hai đồng nghiệp thân thiết là anh Kobayashi và anh <ruby>鈴木<rt>すずき</rt></ruby> (Suzuki) trò chuyện bằng thể thông thường (<ruby>普通形<rt>ふつうけい</rt></ruby>) về kế hoạch leo núi Phú Sĩ trong kỳ nghỉ hè sắp tới."
      },
      {
        "id": "kq20-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？」(Suzuki này, nghỉ hè cậu định đi đâu đấy?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ううん、<ruby>初めて<rt>はじめて</rt></ruby>だよ。<ruby>鈴木<rt>すずき</rt></ruby>くんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？",
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。",
          "へえ、いいね。もう <ruby>何回も<rt>なんかいも</rt></ruby> <ruby>登<rt>のぼ</rt></ruby>った ことが あるの？"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？」(Tớ vẫn chưa quyết định nữa. Thế còn cậu thì sao Kobayashi?). 「<ruby>決<rt>き</rt></ruby>めていないよ」= <ruby>決<rt>き</rt></ruby>めていません (vẫn chưa quyết định)."
      },
      {
        "id": "kq20-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？」(Tớ vẫn chưa quyết định nữa. Thế còn cậu thì sao Kobayashi?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "へえ、いいね。もう <ruby>何回も<rt>なんかいも</rt></ruby> <ruby>登<rt>のぼ</rt></ruby>った ことが あるの？",
          "ううん、<ruby>初めて<rt>はじめて</rt></ruby>だよ。<ruby>鈴木<rt>すずき</rt></ruby>くんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？",
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。",
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。」(Tớ định đi leo núi Phú Sĩ với bạn đấy.). 「ぼく」là đại từ xưng \"tớ/tôi\" thân mật của nam giới."
      },
      {
        "id": "kq20-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。」(Tớ định đi leo núi Phú Sĩ với bạn đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？",
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
          "ううん、<ruby>初めて<rt>はじめて</rt></ruby>だよ。<ruby>鈴木<rt>すずき</rt></ruby>くんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？",
          "へえ、いいね。もう <ruby>何回も<rt>なんかいも</rt></ruby> <ruby>登<rt>のぼ</rt></ruby>った ことが あるの？"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「へえ、いいね。もう <ruby>何回も<rt>なんかいも</rt></ruby> <ruby>登<rt>のぼ</rt></ruby>った ことが あるの？」(Ồ, tuyệt thế! Cậu đã từng leo nhiều lần rồi hả?). 「いいね」= いいですね;「あるの？」= ありますか."
      },
      {
        "id": "kq20-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「へえ、いいね。もう <ruby>何回も<rt>なんかいも</rt></ruby> <ruby>登<rt>のぼ</rt></ruby>った ことが あるの？」(Ồ, tuyệt thế! Cậu đã từng leo nhiều lần rồi hả?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ううん、<ruby>初めて<rt>はじめて</rt></ruby>だよ。<ruby>鈴木<rt>すずき</rt></ruby>くんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？",
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？",
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「ううん、<ruby>初めて<rt>はじめて</rt></ruby>だよ。<ruby>鈴木<rt>すずき</rt></ruby>くんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？」(Không, đây là lần đầu tiên đấy. Suzuki cũng đi cùng bọn tớ không?). 「ううん」= いいえ (Không);「<ruby>行<rt>い</rt></ruby>かない？」= <ruby>行<rt>い</rt></ruby>きませんか (Rủ rê thân mật)."
      },
      {
        "id": "kq20-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「ううん、<ruby>初めて<rt>はじめて</rt></ruby>だよ。<ruby>鈴木<rt>すずき</rt></ruby>くんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>かない？」(Không, đây là lần đầu tiên đấy. Suzuki cũng đi cùng bọn tớ không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。",
          "うん、<ruby>行<rt>い</rt></ruby>きたいけど、いつから？",
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？",
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「うん、<ruby>行<rt>い</rt></ruby>きたいけど、いつから？」(Ừ, tớ cũng muốn đi lắm nhưng mà từ bao giờ thế?). 「うん」= はい (Ừ);「～けど」= ～が (nhưng mà)."
      },
      {
        "id": "kq20-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「うん、<ruby>行<rt>い</rt></ruby>きたいけど、いつから？」(Ừ, tớ cũng muốn đi lắm nhưng mà từ bao giờ thế?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。",
          "8<ruby>月<rt>がつ</rt></ruby> 10<ruby>日<rt>にち</rt></ruby>から 12<ruby>日<rt>にち</rt></ruby>までだよ。",
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「8<ruby>月<rt>がつ</rt></ruby> 10<ruby>日<rt>にち</rt></ruby>から 12<ruby>日<rt>にち</rt></ruby>までだよ。」(Từ ngày 10 đến ngày 12 tháng 8 đấy.). Thêm「だよ」ở cuối câu danh từ để truyền đạt thông tin thân mật."
      },
      {
        "id": "kq20-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「8<ruby>月<rt>がつ</rt></ruby> 10<ruby>日<rt>にち</rt></ruby>から 12<ruby>日<rt>にち</rt></ruby>までだよ。」(Từ ngày 10 đến ngày 12 tháng 8 đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？",
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。",
          "ちょっと <ruby>考<rt>かんが</rt></ruby>えさせて。あした <ruby>電話<rt>でんわ</rt></ruby>するよ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「ちょっと <ruby>考<rt>かんが</rt></ruby>えさせて。あした <ruby>電話<rt>でんわ</rt></ruby>するよ。」(Cho tớ suy nghĩ một chút nhé. Ngày mai tớ sẽ gọi điện cho cậu.). 「<ruby>電話<rt>でんわ</rt></ruby>するよ」= <ruby>電話<rt>でんわ</rt></ruby>します."
      },
      {
        "id": "kq20-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「ちょっと <ruby>考<rt>かんが</rt></ruby>えさせて。あした <ruby>電話<rt>でんわ</rt></ruby>するよ。」(Cho tớ suy nghĩ một chút nhé. Ngày mai tớ sẽ gọi điện cho cậu.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "わかった。<ruby>待<rt>ま</rt></ruby>って いるよ。",
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？",
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 20, câu đáp chuẩn xác là:「わかった。<ruby>待<rt>ま</rt></ruby>って いるよ。」(Ok tớ hiểu rồi. Tớ chờ điện thoại của cậu nhé.). 「わかった」= わかりました."
      },
      {
        "id": "kq20-10",
        "question": "Để diễn đạt ý: \"Suzuki này, nghỉ hè cậu định đi đâu đấy?\" trong tình huống Bài 20, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "へえ、いいね。もう <ruby>何回も<rt>なんかいも</rt></ruby> <ruby>登<rt>のぼ</rt></ruby>った ことが あるの？",
          "<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？",
          "まだ <ruby>決<rt>き</rt></ruby>めて いないよ。<ruby>小林<rt>こばやし</rt></ruby>くんは？",
          "ぼくは <ruby>友だち<rt>ともだち</rt></ruby>と <ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>るんだ。"
        ],
        "correctIdx": 1,
        "explanation": "Câu「<ruby>鈴木<rt>すずき</rt></ruby>くん、<ruby>夏休<rt>なつやす</rt></ruby>みは どこへ <ruby>行<rt>い</rt></ruby>くの？」dịch nghĩa là \"Suzuki này, nghỉ hè cậu định đi đâu đấy?\". 「<ruby>行<rt>い</rt></ruby>くの？」(lên giọng) là cách hỏi thân mật của「どこへ <ruby>行<rt>い</rt></ruby>きますか」."
      }
    ]
  }
};
  if (!root.KAIWA_DATA) root.KAIWA_DATA = {};
  Object.assign(root.KAIWA_DATA, kaiwa_11_20);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = kaiwa_11_20;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
