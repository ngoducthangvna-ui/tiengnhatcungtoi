/**
 * Dữ liệu Hội thoại (Kaiwa), Luyện tập C (練習C) & Kiểm tra phản xạ Bài 1 - 10
 * 100% Annotated Furigana (<ruby>)
 */
(function(root) {
  'use strict';
  const kaiwa_1_10 = {
  "kaiwa-1": {
    "id": "kaiwa-1",
    "lesson": 1,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>初<rt>はじ</rt></ruby>めまして",
    "titleVi": "Lần đầu gặp mặt",
    "subtitleVi": "Rất vui được làm quen",
    "sceneType": "office_greeting",
    "context": "Buổi sáng ở văn phòng công ty <ruby>IMC<rt>アイエムシー</rt></ruby> (Osaka). Anh Yamada giới thiệu anh Mike Miller – nhân viên mới từ Mỹ sang – với chị Sato.",
    "objectives": [
      "Chào hỏi buổi sáng và tự giới thiệu: <ruby>初<rt>はじ</rt></ruby>めまして → tên → đến từ đâu → どうぞ よろしく.",
      "Giới thiệu người khác bằng こちらは ～さんです.",
      "Hỏi tên lịch sự (<ruby>失礼ですが、お名前は？<rt>しつれいですが、おなまえは？</rt></ruby>) và sửa lại khi bị gọi nhầm tên."
    ],
    "audioSrc": "audio/kaiwa/lesson_1.mp3",
    "audioDuration": 16.97,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_1.mp3",
    "renshuuAudioDuration": 67.94,
    "characters": [
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
      }
    ],
    "dialogue": [
      {
        "id": "k1-1",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "greeting_gratitude",
        "jp": "おはよう ございます。",
        "rawJp": "おはよう ございます。",
        "vi": "Chào anh ạ.",
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
        ],
        "explanation": "Lời chào buổi sáng lịch sự trong môi trường công sở.",
        "time": [
          0,
          1.34
        ]
      },
      {
        "id": "k1-2",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "おはよう ございます。",
        "rawJp": "おはよう ございます。",
        "vi": "Chào chị.",
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
        ],
        "explanation": "Đáp lại lời chào buổi sáng của đồng nghiệp.",
        "time": [
          1.73,
          3.1
        ]
      },
      {
        "id": "k1-3",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。",
        "rawJp": "佐藤さん、こちらは マイク・ミラーさんです。",
        "vi": "Chị Sato này, đây là anh Mike Miller.",
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
        "explanation": "Mẫu「こちらは N さんです」dùng để giới thiệu trang trọng một người với người khác.",
        "time": [
          3.41,
          6.41
        ]
      },
      {
        "id": "k1-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "<ruby>初<rt>はじ</rt></ruby>めまして。",
        "rawJp": "初めまして。",
        "vi": "Rất vui được làm quen.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.65,
          0.53,
          0.38
        ],
        "explanation": "Câu chào mở đầu bắt buộc khi gặp mặt ai đó lần đầu tiên.",
        "time": [
          6.79,
          7.99
        ]
      },
      {
        "id": "k1-5",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "マイク・ミラーです。",
        "rawJp": "マイク・ミラーです。",
        "vi": "Tôi là Mike Miller.",
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
        "explanation": "Khi tự giới thiệu tên mình, tuyệt đối không thêm hậu tố ～さん vào sau tên.",
        "time": [
          8.3,
          9.98
        ]
      },
      {
        "id": "k1-6",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "アメリカから <ruby>来<rt>き</rt></ruby>ました。",
        "rawJp": "アメリカから 来ました。",
        "vi": "Tôi đến từ Mỹ.",
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
        "explanation": "「[Quốc gia/Nơi chốn] から <ruby>来<rt>き</rt></ruby>ました」diễn tả xuất xứ, quê quán của bản thân.",
        "time": [
          10.3,
          11.98
        ]
      },
      {
        "id": "k1-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうぞ よろしく。",
        "rawJp": "どうぞ よろしく。",
        "vi": "Rất mong nhận được sự giúp đỡ.",
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
        "explanation": "Câu kết khi tự giới thiệu; trang trọng hơn có thể nói「どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>」.",
        "time": [
          12.29,
          13.58
        ]
      },
      {
        "id": "k1-8",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>佐藤<rt>さとう</rt></ruby>けい<ruby>子<rt>こ</rt></ruby>です。",
        "rawJp": "佐藤けい子です。",
        "vi": "Tôi là Sato Keiko.",
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
        "explanation": "Người đối diện xưng họ tên đầy đủ để đáp lễ.",
        "time": [
          13.97,
          15.41
        ]
      },
      {
        "id": "k1-9",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうぞ よろしく。",
        "rawJp": "どうぞ よろしく。",
        "vi": "Rất vui được làm quen với anh.",
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
        "explanation": "Đáp lại lời chào làm quen của người mới.",
        "time": [
          15.72,
          16.97
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc1-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Tự giới thiệu tên và quốc tịch",
        "context": "Lần đầu gặp mặt tại buổi giao lưu quốc tế.",
        "lines": [
          {
            "id": "rc1-1-l1",
            "speaker": "A",
            "jp": "<ruby>初<rt>はじ</rt></ruby>めまして。<u>マイク・ミラー</u>です。",
            "rawJp": "初めまして。マイク・ミラーです。",
            "vi": "Rất vui được làm quen. Tôi là Mike Miller."
          },
          {
            "id": "rc1-1-l2",
            "speaker": "A",
            "jp": "<u>アメリカ</u>から <ruby>来<rt>き</rt></ruby>ました。どうぞ よろしく。",
            "rawJp": "アメリカから 来ました。どうぞ よろしく。",
            "vi": "Tôi đến từ Mỹ. Rất mong được giúp đỡ."
          },
          {
            "id": "rc1-1-l3",
            "speaker": "B",
            "jp": "<ruby>佐藤<rt>さとう</rt></ruby>です。どうぞ よろしく。",
            "rawJp": "佐藤です。どうぞ よろしく。",
            "vi": "Tôi là Sato. Rất vui được làm quen."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Miller / Mỹ)",
            "values": [
              "マイク・ミラー",
              "アメリカ"
            ],
            "rawValues": [
              "マイク・ミラー",
              "アメリカ"
            ],
            "viValues": [
              "Mike Miller",
              "Mỹ"
            ],
            "lineTimings": [
              [
                0,
                2.45
              ],
              [
                2.83,
                5.54
              ],
              [
                5.93,
                8.4
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.65,
                  0.61,
                  0.58,
                  0.57,
                  0.6,
                  0.62,
                  0.61,
                  0.58,
                  0.53,
                  0.38
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
                  0.61,
                  0.64,
                  0.63,
                  0.6,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.53,
                  0.38
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Santos / Brazil)",
            "values": [
              "ホセ・サントス",
              "ブラジル"
            ],
            "rawValues": [
              "ホセ・サントス",
              "ブラジル"
            ],
            "viValues": [
              "Jose Santos",
              "Brazil"
            ],
            "lineTimings": [
              [
                8.78,
                11.35
              ],
              [
                11.74,
                14.47
              ],
              [
                5.93,
                8.4
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.69,
                  0.65,
                  0.61,
                  0.58,
                  0.57,
                  0.6,
                  0.62,
                  0.61,
                  0.58,
                  0.53,
                  0.38
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
                  0.61,
                  0.64,
                  0.63,
                  0.6,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.53,
                  0.38
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Karina / Indonesia)",
            "values": [
              "カリナ",
              "インドネシア"
            ],
            "rawValues": [
              "カリナ",
              "インドネシア"
            ],
            "viValues": [
              "Karina",
              "Indonesia"
            ],
            "lineTimings": [
              [
                14.86,
                17.26
              ],
              [
                17.64,
                21.17
              ],
              [
                5.93,
                8.4
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "karina",
                "voice": "en-US-EmmaMultilingualNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.56,
                  0.56,
                  0.57,
                  0.53,
                  0.38
                ]
              },
              {
                "speakerId": "karina",
                "voice": "en-US-EmmaMultilingualNeural",
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc1-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Giới thiệu người thứ ba",
        "context": "Giới thiệu đồng nghiệp hoặc người quen trong buổi gặp gỡ.",
        "lines": [
          {
            "id": "rc1-2-l1",
            "speaker": "A",
            "jp": "みなさん、こちらは <u>マイク・ミラー</u>さんです。",
            "rawJp": "みなさん、こちらは マイク・ミラーさんです。",
            "vi": "Mọi người ơi, vị này là anh Mike Miller."
          },
          {
            "id": "rc1-2-l2",
            "speaker": "B",
            "jp": "<ruby>初<rt>はじ</rt></ruby>めまして。<u>マイク・ミラー</u>です。<u><ruby>IMC<rt>アイエムシー</rt></ruby>の <ruby>社員<rt>しゃいん</rt></ruby></u>です。",
            "rawJp": "初めまして。マイク・ミラーです。IMCの 社員です。",
            "vi": "Rất vui được gặp mọi người. Tôi là Mike Miller. Nhân viên công ty IMC."
          },
          {
            "id": "rc1-2-l3",
            "speaker": "B",
            "jp": "どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
            "rawJp": "どうぞ よろしく お願いします。",
            "vi": "Rất mong nhận được sự giúp đỡ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Miller / <ruby>IMC<rt>アイエムシー</rt></ruby>)",
            "values": [
              "マイク・ミラー",
              "マイク・ミラー",
              "<ruby>IMC<rt>アイエムシー</rt></ruby>の <ruby>社員<rt>しゃいん</rt></ruby>"
            ],
            "rawValues": [
              "マイク・ミラー",
              "マイク・ミラー",
              "IMCの 社員"
            ],
            "viValues": [
              "Mike Miller",
              "Mike Miller",
              "Nhân viên IMC"
            ],
            "lineTimings": [
              [
                21.55,
                25.01
              ],
              [
                25.39,
                29.76
              ],
              [
                30.14,
                32.06
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
                  0.65,
                  0.61,
                  0.58,
                  0.57,
                  0.6,
                  0.62,
                  0.61,
                  0.58,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Thầy Watt / ĐH Sakura)",
            "values": [
              "ワット",
              "ワット",
              "さくら<ruby>大学<rt>だいがく</rt></ruby>の <ruby>先生<rt>せんせい</rt></ruby>"
            ],
            "rawValues": [
              "ワット",
              "ワット",
              "さくら大学の 先生"
            ],
            "viValues": [
              "Watt",
              "Watt",
              "Giáo viên ĐH Sakura"
            ],
            "lineTimings": [
              [
                32.45,
                35.11
              ],
              [
                35.5,
                39.74
              ],
              [
                30.14,
                32.06
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
                  0.65,
                  0.61,
                  0.58,
                  0.57,
                  0.6,
                  0.62,
                  0.61,
                  0.58,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Wang / BV Kobe)",
            "values": [
              "ワン",
              "ワン",
              "<ruby>神戸病院<rt>こうべびょういん</rt></ruby>の <ruby>医者<rt>いしゃ</rt></ruby>"
            ],
            "rawValues": [
              "ワン",
              "ワン",
              "神戸病院の 医者"
            ],
            "viValues": [
              "Wang",
              "Wang",
              "Bác sĩ BV Kobe"
            ],
            "lineTimings": [
              [
                40.13,
                42.62
              ],
              [
                43.01,
                46.87
              ],
              [
                30.14,
                32.06
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
                  0.65,
                  0.61,
                  0.58,
                  0.57,
                  0.6,
                  0.62,
                  0.61,
                  0.58,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc1-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi tên lịch sự & đính chính",
        "context": "Hỏi tên người đối diện và xác nhận lại khi nghe nhầm.",
        "lines": [
          {
            "id": "rc1-3-l1",
            "speaker": "A",
            "jp": "<ruby>失礼ですが、お名前は？<rt>しつれいですが、おなまえは？</rt></ruby>",
            "rawJp": "失礼ですが、お名前は？",
            "vi": "Xin lỗi vì thất lễ, tên anh/chị là gì ạ?"
          },
          {
            "id": "rc1-3-l2",
            "speaker": "B",
            "jp": "<u>ミラー</u>です。",
            "rawJp": "ミラーです。",
            "vi": "Tôi là Miller."
          },
          {
            "id": "rc1-3-l3",
            "speaker": "A",
            "jp": "<u>イラー</u>さんですか。",
            "rawJp": "イラーさんですか。",
            "vi": "Là anh Iller phải không ạ?"
          },
          {
            "id": "rc1-3-l4",
            "speaker": "B",
            "jp": "いいえ、<u>ミラー</u>です。",
            "rawJp": "いいえ、ミラーです。",
            "vi": "Không phải, là Miller ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Miller / Iller)",
            "values": [
              "ミラー",
              "イラー",
              "ミラー"
            ],
            "rawValues": [
              "ミラー",
              "イラー",
              "ミラー"
            ],
            "viValues": [
              "Miller",
              "Iller",
              "Miller"
            ],
            "lineTimings": [
              [
                47.26,
                49.56
              ],
              [
                49.94,
                50.95
              ],
              [
                51.34,
                52.54
              ],
              [
                52.92,
                54.72
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
                  0.6,
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
            "label": "Mẫu 2 (Karina / Rina)",
            "values": [
              "カリナ",
              "リナ",
              "カリナ"
            ],
            "rawValues": [
              "カリナ",
              "リナ",
              "カリナ"
            ],
            "viValues": [
              "Karina",
              "Rina",
              "Karina"
            ],
            "lineTimings": [
              [
                55.1,
                57.43
              ],
              [
                57.82,
                58.75
              ],
              [
                59.14,
                60.24
              ],
              [
                60.62,
                62.38
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
                  0.6,
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
            "label": "Mẫu 3 (Santos / Santo)",
            "values": [
              "サントス",
              "サント",
              "サントス"
            ],
            "rawValues": [
              "サントス",
              "サント",
              "サントス"
            ],
            "viValues": [
              "Santos",
              "Santo",
              "Santos"
            ],
            "lineTimings": [
              [
                47.26,
                49.56
              ],
              [
                62.76,
                63.84
              ],
              [
                64.22,
                65.62
              ],
              [
                66,
                67.94
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
                  0.61,
                  0.57,
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
        "id": "kq1-1",
        "question": "Chủ đề chính của bài hội thoại Bài 1「<ruby>初<rt>はじ</rt></ruby>めまして」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Lần đầu gặp mặt",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「<ruby>初<rt>はじ</rt></ruby>めまして」trong Bài 1 có nghĩa là \"Lần đầu gặp mặt\". Bối cảnh: Buổi sáng ở văn phòng công ty <ruby>IMC<rt>アイエムシー</rt></ruby> (Osaka). Anh Yamada giới thiệu anh Mike Miller – nhân viên mới từ Mỹ sang – với chị Sato."
      },
      {
        "id": "kq1-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「おはよう ございます。」(Chào chị.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "マイク・ミラーです。",
          "アメリカから <ruby>来<rt>き</rt></ruby>ました。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。",
          "<ruby>初<rt>はじ</rt></ruby>めまして。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 1, câu đáp chuẩn xác là:「<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。」(Chị Sato này, đây là anh Mike Miller.). Mẫu「こちらは N さんです」dùng để giới thiệu trang trọng một người với người khác."
      },
      {
        "id": "kq1-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。」(Chị Sato này, đây là anh Mike Miller.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "おはよう ございます。",
          "マイク・ミラーです。",
          "アメリカから <ruby>来<rt>き</rt></ruby>ました。",
          "<ruby>初<rt>はじ</rt></ruby>めまして。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 1, câu đáp chuẩn xác là:「<ruby>初<rt>はじ</rt></ruby>めまして。」(Rất vui được làm quen.). Câu chào mở đầu bắt buộc khi gặp mặt ai đó lần đầu tiên."
      },
      {
        "id": "kq1-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>初<rt>はじ</rt></ruby>めまして。」(Rất vui được làm quen.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "マイク・ミラーです。",
          "おはよう ございます。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。",
          "アメリカから <ruby>来<rt>き</rt></ruby>ました。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 1, câu đáp chuẩn xác là:「マイク・ミラーです。」(Tôi là Mike Miller.). Khi tự giới thiệu tên mình, tuyệt đối không thêm hậu tố ～さん vào sau tên."
      },
      {
        "id": "kq1-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「マイク・ミラーです。」(Tôi là Mike Miller.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>初<rt>はじ</rt></ruby>めまして。",
          "アメリカから <ruby>来<rt>き</rt></ruby>ました。",
          "おはよう ございます。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 1, câu đáp chuẩn xác là:「アメリカから <ruby>来<rt>き</rt></ruby>ました。」(Tôi đến từ Mỹ.). 「[Quốc gia/Nơi chốn] から <ruby>来<rt>き</rt></ruby>ました」diễn tả xuất xứ, quê quán của bản thân."
      },
      {
        "id": "kq1-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「アメリカから <ruby>来<rt>き</rt></ruby>ました。」(Tôi đến từ Mỹ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。",
          "<ruby>初<rt>はじ</rt></ruby>めまして。",
          "どうぞ よろしく。",
          "おはよう ございます。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 1, câu đáp chuẩn xác là:「どうぞ よろしく。」(Rất mong nhận được sự giúp đỡ.). Câu kết khi tự giới thiệu; trang trọng hơn có thể nói「どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>」."
      },
      {
        "id": "kq1-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「どうぞ よろしく。」(Rất mong nhận được sự giúp đỡ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "おはよう ございます。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。",
          "<ruby>初<rt>はじ</rt></ruby>めまして。",
          "<ruby>佐藤<rt>さとう</rt></ruby>けい<ruby>子<rt>こ</rt></ruby>です。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 1, câu đáp chuẩn xác là:「<ruby>佐藤<rt>さとう</rt></ruby>けい<ruby>子<rt>こ</rt></ruby>です。」(Tôi là Sato Keiko.). Người đối diện xưng họ tên đầy đủ để đáp lễ."
      },
      {
        "id": "kq1-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>佐藤<rt>さとう</rt></ruby>けい<ruby>子<rt>こ</rt></ruby>です。」(Tôi là Sato Keiko.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どうぞ よろしく。",
          "おはよう ございます。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。",
          "<ruby>初<rt>はじ</rt></ruby>めまして。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 1, câu đáp chuẩn xác là:「どうぞ よろしく。」(Rất vui được làm quen với anh.). Đáp lại lời chào làm quen của người mới."
      },
      {
        "id": "kq1-9",
        "question": "Để diễn đạt ý: \"Chào anh ạ.\" trong tình huống Bài 1, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "マイク・ミラーです。",
          "おはよう ございます。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。",
          "<ruby>初<rt>はじ</rt></ruby>めまして。"
        ],
        "correctIdx": 1,
        "explanation": "Câu「おはよう ございます。」dịch nghĩa là \"Chào anh ạ.\". Lời chào buổi sáng lịch sự trong môi trường công sở."
      },
      {
        "id": "kq1-10",
        "question": "Để diễn đạt ý: \"Chào chị.\" trong tình huống Bài 1, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "<ruby>初<rt>はじ</rt></ruby>めまして。",
          "マイク・ミラーです。",
          "おはよう ございます。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、こちらは マイク・ミラーさんです。"
        ],
        "correctIdx": 2,
        "explanation": "Câu「おはよう ございます。」dịch nghĩa là \"Chào chị.\". Đáp lại lời chào buổi sáng của đồng nghiệp."
      }
    ]
  },
  "kaiwa-2": {
    "id": "kaiwa-2",
    "lesson": 2,
    "level": "Sơ cấp 1",
    "titleJp": "ほんの <ruby>気持<rt>きも</rt></ruby>ちです",
    "titleVi": "Đây chỉ là chút tấm lòng",
    "subtitleVi": "Chào hỏi hàng xóm & tặng quà",
    "sceneType": "neighbor_gift",
    "context": "Anh Jose Santos vừa chuyển đến căn hộ số 408 nên sang bấm chuông chào hỏi gia đình Yamada ở phòng bên cạnh và tặng quà làm quen.",
    "objectives": [
      "Biết cách chào hỏi hàng xóm khi mới chuyển nhà đến (これから お<ruby>世話<rt>せわ</rt></ruby>に なります).",
      "Sử dụng mẫu câu khiêm tốn khi tặng quà: これ、ほんの <ruby>気持<rt>きも</rt></ruby>ちです.",
      "Hỏi tên món quà bằng これ / それ và cảm ơn lịch sự (どうも ありがとう ございます)."
    ],
    "audioSrc": "audio/kaiwa/lesson_2.mp3",
    "audioDuration": 23.06,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_2.mp3",
    "renshuuAudioDuration": 35.33,
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
      }
    ],
    "dialogue": [
      {
        "id": "k2-1",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "はい。どなたですか。",
        "rawJp": "はい。どなたですか。",
        "vi": "Vâng. Ai đấy ạ?",
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
        "explanation": "「どなたですか」là cách hỏi lịch sự của「だれですか」khi nghe chuông cửa.",
        "time": [
          0,
          1.68
        ]
      },
      {
        "id": "k2-2",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "408の サントスです。",
        "rawJp": "408の サントスです。",
        "vi": "Tôi là Santos ở phòng 408 ạ.",
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
        "explanation": "Xưng số phòng và tên để chủ nhà yên tâm mở cửa.",
        "time": [
          2.14,
          4.22
        ]
      },
      {
        "id": "k2-3",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "こんにちは。サントスです。",
        "rawJp": "こんにちは。サントスです。",
        "vi": "Xin chào. Tôi là Santos.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.68,
          0.65,
          0.6,
          0.57,
          0.56,
          0.58,
          0.6,
          0.53,
          0.38
        ],
        "explanation": "Lời chào ban ngày khi gặp mặt trực tiếp.",
        "time": [
          4.54,
          6.62
        ]
      },
      {
        "id": "k2-4",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "これから お<ruby>世話<rt>せわ</rt></ruby>に なります。",
        "rawJp": "これから お世話に なります。",
        "vi": "Từ nay về sau rất mong được anh/chị giúp đỡ.",
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
        "explanation": "Câu chào xã giao quan trọng khi mới dọn đến khu phố hoặc phòng ban mới.",
        "time": [
          6.94,
          8.69
        ]
      },
      {
        "id": "k2-5",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "どうぞ よろしく お願いします。",
        "vi": "Rất mong nhận được sự chiếu cố của anh.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.65,
          0.61,
          0.58,
          0.57,
          0.6,
          0.62,
          0.61,
          0.58,
          0.53,
          0.38
        ],
        "explanation": "Thể hiện sự tôn trọng và mong muốn giữ quan hệ láng giềng tốt đẹp.",
        "time": [
          9,
          10.99
        ]
      },
      {
        "id": "k2-6",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "こちらこそ よろしく。",
        "rawJp": "こちらこそ よろしく。",
        "vi": "Chính phía tôi mới phải mong anh giúp đỡ.",
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
        ],
        "explanation": "「こちらこそ」dùng để đáp lại lịch sự câu「どうぞよろしく」hoặc lời cảm ơn.",
        "time": [
          11.38,
          12.7
        ]
      },
      {
        "id": "k2-7",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あのう、これ、ほんの <ruby>気持<rt>きも</rt></ruby>ちです。",
        "rawJp": "あのう、これ、ほんの 気持ちです。",
        "vi": "À, cái này chỉ là chút tấm lòng của tôi thôi ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.62,
          0.58,
          0.54,
          0.5,
          0.47,
          0.46,
          0.49,
          0.51,
          0.5,
          0.47,
          0.42,
          0.32
        ],
        "explanation": "「ほんの<ruby>気持<rt>きも</rt></ruby>ちです」là câu nói khiêm nhường của người Nhật khi trao tặng một món quà nhỏ.",
        "time": [
          13.2,
          16.01
        ]
      },
      {
        "id": "k2-8",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "あ、どうも。<ruby>何ですか<rt>なんですか</rt></ruby>。",
        "rawJp": "あ、どうも。何ですか。",
        "vi": "Ồ, cảm ơn anh. Cái gì thế ạ?",
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
        "explanation": "「どうも」là cách nói rút gọn thân mật của lời cảm ơn, đi kèm câu hỏi「<ruby>何ですか<rt>なんですか</rt></ruby>」.",
        "time": [
          16.39,
          18.67
        ]
      },
      {
        "id": "k2-9",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "コーヒーです。どうぞ。",
        "rawJp": "コーヒーです。どうぞ。",
        "vi": "Là cà phê ạ. Xin mời anh nhận cho.",
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
        "explanation": "「どうぞ」dùng khi mời hoặc trao vật gì đó cho người nghe.",
        "time": [
          19.13,
          20.9
        ]
      },
      {
        "id": "k2-10",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうも ありがとう ございます。",
        "rawJp": "どうも ありがとう ございます。",
        "vi": "Xin chân thành cảm ơn anh.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.65,
          0.61,
          0.58,
          0.57,
          0.6,
          0.62,
          0.61,
          0.58,
          0.53,
          0.38
        ],
        "explanation": "Lời cảm ơn đầy đủ, lịch sự sau khi nhận quà.",
        "time": [
          21.29,
          23.06
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc2-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi tên đồ vật và xác nhận",
        "context": "Hỏi về một món đồ ở gần mình hoặc gần người nghe.",
        "lines": [
          {
            "id": "rc2-1-l1",
            "speaker": "A",
            "jp": "これは <u>テレホンカード</u>ですか。",
            "rawJp": "これは テレホンカードですか。",
            "vi": "Đây là thẻ điện thoại phải không?"
          },
          {
            "id": "rc2-1-l2",
            "speaker": "B",
            "jp": "はい、そうです。",
            "rawJp": "はい、そうです。",
            "vi": "Vâng, đúng vậy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Thẻ điện thoại)",
            "values": [
              "テレホンカード"
            ],
            "rawValues": [
              "テレホンカード"
            ],
            "viValues": [
              "thẻ điện thoại"
            ],
            "lineTimings": [
              [
                0,
                2.02
              ],
              [
                2.4,
                4.03
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
                  0.61,
                  0.57,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Sổ tay)",
            "values": [
              "<ruby>手帳<rt>てちょう</rt></ruby>"
            ],
            "rawValues": [
              "手帳"
            ],
            "viValues": [
              "sổ tay"
            ],
            "lineTimings": [
              [
                4.42,
                5.88
              ],
              [
                2.4,
                4.03
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
                  0.61,
                  0.57,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Danh thiếp)",
            "values": [
              "<ruby>名刺<rt>めいし</rt></ruby>"
            ],
            "rawValues": [
              "名刺"
            ],
            "viValues": [
              "danh thiếp"
            ],
            "lineTimings": [
              [
                6.26,
                7.66
              ],
              [
                2.4,
                4.03
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
                  0.61,
                  0.57,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc2-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi nội dung của sách/tạp chí/băng đĩa",
        "context": "Sử dụng なんの N ですか để hỏi lĩnh vực của đồ vật.",
        "lines": [
          {
            "id": "rc2-2-l1",
            "speaker": "A",
            "jp": "それは <ruby>何<rt>なん</rt></ruby>の <u><ruby>雑誌<rt>ざっし</rt></ruby></u>ですか。",
            "rawJp": "それは 何の 雑誌ですか。",
            "vi": "Đó là tạp chí về cái gì thế?"
          },
          {
            "id": "rc2-2-l2",
            "speaker": "B",
            "jp": "<u>カメラ</u>の <u><ruby>雑誌<rt>ざっし</rt></ruby></u>です。",
            "rawJp": "カメラの 雑誌です。",
            "vi": "Là tạp chí về máy ảnh."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Tạp chí máy ảnh)",
            "values": [
              "<ruby>雑誌<rt>ざっし</rt></ruby>",
              "カメラ",
              "<ruby>雑誌<rt>ざっし</rt></ruby>"
            ],
            "rawValues": [
              "雑誌",
              "カメラ",
              "雑誌"
            ],
            "viValues": [
              "tạp chí",
              "máy ảnh",
              "tạp chí"
            ],
            "lineTimings": [
              [
                8.04,
                9.7
              ],
              [
                10.08,
                11.54
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
            "label": "Mẫu 2 (Sách tiếng Nhật)",
            "values": [
              "<ruby>本<rt>ほん</rt></ruby>",
              "<ruby>日本語<rt>にほんご</rt></ruby>",
              "<ruby>本<rt>ほん</rt></ruby>"
            ],
            "rawValues": [
              "本",
              "日本語",
              "本"
            ],
            "viValues": [
              "sách",
              "tiếng Nhật",
              "sách"
            ],
            "lineTimings": [
              [
                11.93,
                13.51
              ],
              [
                13.9,
                15.46
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
            "label": "Mẫu 3 (Từ điển tiếng Anh)",
            "values": [
              "<ruby>辞書<rt>じしょ</rt></ruby>",
              "<ruby>英語<rt>えいご</rt></ruby>",
              "<ruby>辞書<rt>じしょ</rt></ruby>"
            ],
            "rawValues": [
              "辞書",
              "英語",
              "辞書"
            ],
            "viValues": [
              "từ điển",
              "tiếng Anh",
              "từ điển"
            ],
            "lineTimings": [
              [
                15.84,
                17.45
              ],
              [
                17.83,
                19.2
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
                  0.62,
                  0.58,
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
        "id": "rc2-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Xác nhận quyền sở hữu đồ vật",
        "context": "Hỏi chiếc cặp hoặc chiếc ô bị bỏ quên là của ai.",
        "lines": [
          {
            "id": "rc2-3-l1",
            "speaker": "A",
            "jp": "この <u>かばん</u>は あなたの ですか。",
            "rawJp": "この かばんは あなたの ですか。",
            "vi": "Chiếc cặp này là của bạn phải không?"
          },
          {
            "id": "rc2-3-l2",
            "speaker": "B",
            "jp": "いいえ、わたしのじゃ ありません。",
            "rawJp": "いいえ、わたしのじゃ ありません。",
            "vi": "Không, không phải của tôi."
          },
          {
            "id": "rc2-3-l3",
            "speaker": "A",
            "jp": "だれの ですか。",
            "rawJp": "だれの ですか。",
            "vi": "Thế của ai vậy nhỉ?"
          },
          {
            "id": "rc2-3-l4",
            "speaker": "B",
            "jp": "<u><ruby>佐藤<rt>さとう</rt></ruby></u>さんの です。",
            "rawJp": "佐藤さんの です。",
            "vi": "Là của chị Sato đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Cặp / Sato)",
            "values": [
              "かばん",
              "<ruby>佐藤<rt>さとう</rt></ruby>"
            ],
            "rawValues": [
              "かばん",
              "佐藤"
            ],
            "viValues": [
              "cặp",
              "Sato"
            ],
            "lineTimings": [
              [
                19.58,
                21.55
              ],
              [
                21.94,
                24.22
              ],
              [
                24.6,
                25.7
              ],
              [
                26.09,
                27.46
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.61,
                  0.57,
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
            "label": "Mẫu 2 (Ô dù / Yamada)",
            "values": [
              "<ruby>傘<rt>かさ</rt></ruby>",
              "<ruby>山田<rt>やまだ</rt></ruby>"
            ],
            "rawValues": [
              "傘",
              "山田"
            ],
            "viValues": [
              "ô dù",
              "Yamada"
            ],
            "lineTimings": [
              [
                27.84,
                29.69
              ],
              [
                21.94,
                24.22
              ],
              [
                24.6,
                25.7
              ],
              [
                30.07,
                31.42
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.61,
                  0.57,
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
            "label": "Mẫu 3 (Chìa khóa / Miller)",
            "values": [
              "<ruby>鍵<rt>かぎ</rt></ruby>",
              "ミラー"
            ],
            "rawValues": [
              "鍵",
              "ミラー"
            ],
            "viValues": [
              "chìa khóa",
              "Miller"
            ],
            "lineTimings": [
              [
                31.8,
                33.62
              ],
              [
                21.94,
                24.22
              ],
              [
                24.6,
                25.7
              ],
              [
                34.01,
                35.33
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "question",
                "endPitch": "up",
                "pitchCurve": [
                  0.32,
                  0.68,
                  0.61,
                  0.57,
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq2-1",
        "question": "Chủ đề chính của bài hội thoại Bài 2「ほんの <ruby>気持<rt>きも</rt></ruby>ちです」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Đây chỉ là chút tấm lòng",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「ほんの <ruby>気持<rt>きも</rt></ruby>ちです」trong Bài 2 có nghĩa là \"Đây chỉ là chút tấm lòng\". Bối cảnh: Anh Jose Santos vừa chuyển đến căn hộ số 408 nên sang bấm chuông chào hỏi gia đình Yamada ở phòng bên cạnh và tặng quà làm quen."
      },
      {
        "id": "kq2-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。どなたですか。」(Vâng. Ai đấy ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "こんにちは。サントスです。",
          "これから お<ruby>世話<rt>せわ</rt></ruby>に なります。",
          "どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "408の サントスです。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「408の サントスです。」(Tôi là Santos ở phòng 408 ạ.). Xưng số phòng và tên để chủ nhà yên tâm mở cửa."
      },
      {
        "id": "kq2-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「408の サントスです。」(Tôi là Santos ở phòng 408 ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "こんにちは。サントスです。",
          "はい。どなたですか。",
          "これから お<ruby>世話<rt>せわ</rt></ruby>に なります。",
          "どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「こんにちは。サントスです。」(Xin chào. Tôi là Santos.). Lời chào ban ngày khi gặp mặt trực tiếp."
      },
      {
        "id": "kq2-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「こんにちは。サントスです。」(Xin chào. Tôi là Santos.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "これから お<ruby>世話<rt>せわ</rt></ruby>に なります。",
          "はい。どなたですか。",
          "408の サントスです。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「これから お<ruby>世話<rt>せわ</rt></ruby>に なります。」(Từ nay về sau rất mong được anh/chị giúp đỡ.). Câu chào xã giao quan trọng khi mới dọn đến khu phố hoặc phòng ban mới."
      },
      {
        "id": "kq2-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「これから お<ruby>世話<rt>せわ</rt></ruby>に なります。」(Từ nay về sau rất mong được anh/chị giúp đỡ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "408の サントスです。",
          "こんにちは。サントスです。",
          "どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "はい。どなたですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Rất mong nhận được sự chiếu cố của anh.). Thể hiện sự tôn trọng và mong muốn giữ quan hệ láng giềng tốt đẹp."
      },
      {
        "id": "kq2-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「どうぞ よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Rất mong nhận được sự chiếu cố của anh.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。どなたですか。",
          "408の サントスです。",
          "こんにちは。サントスです。",
          "こちらこそ よろしく。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「こちらこそ よろしく。」(Chính phía tôi mới phải mong anh giúp đỡ.). 「こちらこそ」dùng để đáp lại lịch sự câu「どうぞよろしく」hoặc lời cảm ơn."
      },
      {
        "id": "kq2-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「こちらこそ よろしく。」(Chính phía tôi mới phải mong anh giúp đỡ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、これ、ほんの <ruby>気持<rt>きも</rt></ruby>ちです。",
          "はい。どなたですか。",
          "408の サントスです。",
          "こんにちは。サントスです。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「あのう、これ、ほんの <ruby>気持<rt>きも</rt></ruby>ちです。」(À, cái này chỉ là chút tấm lòng của tôi thôi ạ.). 「ほんの<ruby>気持<rt>きも</rt></ruby>ちです」là câu nói khiêm nhường của người Nhật khi trao tặng một món quà nhỏ."
      },
      {
        "id": "kq2-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「あのう、これ、ほんの <ruby>気持<rt>きも</rt></ruby>ちです。」(À, cái này chỉ là chút tấm lòng của tôi thôi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "こんにちは。サントスです。",
          "あ、どうも。<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "はい。どなたですか。",
          "408の サントスです。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「あ、どうも。<ruby>何ですか<rt>なんですか</rt></ruby>。」(Ồ, cảm ơn anh. Cái gì thế ạ?). 「どうも」là cách nói rút gọn thân mật của lời cảm ơn, đi kèm câu hỏi「<ruby>何ですか<rt>なんですか</rt></ruby>」."
      },
      {
        "id": "kq2-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「あ、どうも。<ruby>何ですか<rt>なんですか</rt></ruby>。」(Ồ, cảm ơn anh. Cái gì thế ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "408の サントスです。",
          "こんにちは。サントスです。",
          "コーヒーです。どうぞ。",
          "はい。どなたですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「コーヒーです。どうぞ。」(Là cà phê ạ. Xin mời anh nhận cho.). 「どうぞ」dùng khi mời hoặc trao vật gì đó cho người nghe."
      },
      {
        "id": "kq2-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「コーヒーです。どうぞ。」(Là cà phê ạ. Xin mời anh nhận cho.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい。どなたですか。",
          "408の サントスです。",
          "こんにちは。サントスです。",
          "どうも ありがとう ございます。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 2, câu đáp chuẩn xác là:「どうも ありがとう ございます。」(Xin chân thành cảm ơn anh.). Lời cảm ơn đầy đủ, lịch sự sau khi nhận quà."
      }
    ]
  },
  "kaiwa-3": {
    "id": "kaiwa-3",
    "lesson": 3,
    "level": "Sơ cấp 1",
    "titleJp": "これを ください",
    "titleVi": "Cho tôi lấy cái này",
    "subtitleVi": "Mua sắm tại cửa hàng bách hóa",
    "sceneType": "shopping",
    "context": "Chị Maria đi mua rượu vang tại tầng hầm cửa hàng bách hóa. Chị hỏi nhân viên về xuất xứ, giá tiền của các chai rượu trước khi quyết định mua.",
    "objectives": [
      "Biết cách hỏi vị trí quầy hàng trong trung tâm thương mại (～<ruby>売り場<rt>うりば</rt></ruby>は どこですか).",
      "Hỏi xuất xứ hàng hóa (どこの ～ですか) và hỏi giá tiền (いくらですか).",
      "Yêu cầu nhân viên cho xem món đồ (<ruby>見<rt>み</rt></ruby>せて ください) và chốt mua hàng (これを ください)."
    ],
    "audioSrc": "audio/kaiwa/lesson_3.mp3",
    "audioDuration": 21.48,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_3.mp3",
    "renshuuAudioDuration": 45.05,
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
        "id": "k3-1",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "question",
        "jp": "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。",
        "rawJp": "すみません。ワイン売り場は どこですか。",
        "vi": "Xin lỗi. Quầy bán rượu vang ở đâu vậy ạ?",
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
        ],
        "explanation": "「～<ruby>売り場<rt>うりば</rt></ruby>」là quầy bán mặt hàng gì đó trong siêu thị hoặc bách hóa.",
        "time": [
          0,
          2.81
        ]
      },
      {
        "id": "k3-2",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
        "rawJp": "地下1階で ございます。",
        "vi": "Ở tầng hầm 1 ạ.",
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
        "explanation": "Nhân viên bán hàng dùng「でございます」(dạng lịch sự trọng thị của です) với khách.",
        "time": [
          3.26,
          5.16
        ]
      },
      {
        "id": "k3-3",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "どうも。",
        "rawJp": "どうも。",
        "vi": "Cảm ơn chị.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Câu cảm ơn ngắn gọn khi hỏi đường hoặc hỏi thông tin.",
        "time": [
          5.54,
          6.12
        ]
      },
      {
        "id": "k3-4",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "すみません。その ワインを <ruby>見<rt>み</rt></ruby>せて ください。",
        "rawJp": "すみません。その ワインを 見せて ください。",
        "vi": "Xin lỗi, cho tôi xem chai rượu vang đó với ạ.",
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
        "explanation": "「<ruby>見<rt>み</rt></ruby>せてください」dùng để nhờ nhân viên lấy món đồ trong tủ kính cho mình xem.",
        "time": [
          6.43,
          9.34
        ]
      },
      {
        "id": "k3-5",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "はい、どうぞ。",
        "rawJp": "はい、どうぞ。",
        "vi": "Vâng, xin mời quý khách.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.65,
          0.53,
          0.38
        ],
        "explanation": "Nhân viên đưa sản phẩm cho khách xem.",
        "time": [
          9.72,
          11.23
        ]
      },
      {
        "id": "k3-6",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "question",
        "jp": "これは フランスの ワインですか。",
        "rawJp": "これは フランスの ワインですか。",
        "vi": "Chai này là rượu vang của Pháp phải không?",
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
        "explanation": "「[Tên nước] の [Sản phẩm]」biểu thị nơi sản xuất hoặc thương hiệu của nước đó.",
        "time": [
          11.62,
          13.34
        ]
      },
      {
        "id": "k3-7",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "いいえ、イタリアのです。",
        "rawJp": "いいえ、イタリアのです。",
        "vi": "Không ạ, là của Ý đấy ạ.",
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
        "explanation": "Lược bỏ danh từ「ワイン」sau「の」để tránh lặp từ.",
        "time": [
          13.8,
          15.91
        ]
      },
      {
        "id": "k3-8",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "question",
        "jp": "いくらですか。",
        "rawJp": "いくらですか。",
        "vi": "Giá bao nhiêu tiền vậy ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.61,
          0.57,
          0.62,
          0.85
        ],
        "explanation": "Câu hỏi giá tiền thông dụng nhất khi đi mua sắm.",
        "time": [
          16.3,
          17.26
        ]
      },
      {
        "id": "k3-9",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "2,500<ruby>円<rt>えん</rt></ruby>です。",
        "rawJp": "2,500円です。",
        "vi": "Giá 2.500 yên ạ.",
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
        "explanation": "2,500<ruby>円<rt>えん</rt></ruby> đọc là にせんごひゃくえん.",
        "time": [
          17.71,
          19.49
        ]
      },
      {
        "id": "k3-10",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "じゃ、これを ください。",
        "rawJp": "じゃ、これを ください。",
        "vi": "Vậy thì cho tôi lấy chai này nhé.",
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
        "explanation": "「じゃ、N を ください」dùng khi đã quyết định chọn mua món hàng.",
        "time": [
          19.87,
          21.48
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc3-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi vị trí trong tòa nhà",
        "context": "Hỏi nhân viên lễ tân về vị trí nhà vệ sinh, thang máy hoặc quầy hàng.",
        "lines": [
          {
            "id": "rc3-1-l1",
            "speaker": "A",
            "jp": "すみません。<u><ruby>お手洗い<rt>おてあらい</rt></ruby></u>は どこですか。",
            "rawJp": "すみません。お手洗いは どこですか。",
            "vi": "Xin lỗi, nhà vệ sinh ở đâu ạ?"
          },
          {
            "id": "rc3-1-l2",
            "speaker": "B",
            "jp": "あそこです。",
            "rawJp": "あそこです。",
            "vi": "Ở đằng kia kìa."
          },
          {
            "id": "rc3-1-l3",
            "speaker": "A",
            "jp": "どうも。",
            "rawJp": "どうも。",
            "vi": "Cảm ơn nhiều."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Nhà vệ sinh)",
            "values": [
              "<ruby>お手洗い<rt>おてあらい</rt></ruby>"
            ],
            "rawValues": [
              "お手洗い"
            ],
            "viValues": [
              "nhà vệ sinh"
            ],
            "lineTimings": [
              [
                0,
                2.88
              ],
              [
                3.26,
                4.3
              ],
              [
                4.68,
                5.38
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
                  0.6,
                  0.48,
                  0.35
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
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Thang cuốn)",
            "values": [
              "エスカレーター"
            ],
            "rawValues": [
              "エスカレーター"
            ],
            "viValues": [
              "thang cuốn"
            ],
            "lineTimings": [
              [
                5.76,
                8.9
              ],
              [
                3.26,
                4.3
              ],
              [
                4.68,
                5.38
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
                  0.6,
                  0.48,
                  0.35
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
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Điện thoại)",
            "values": [
              "<ruby>電話<rt>でんわ</rt></ruby>"
            ],
            "rawValues": [
              "電話"
            ],
            "viValues": [
              "điện thoại"
            ],
            "lineTimings": [
              [
                9.29,
                12
              ],
              [
                3.26,
                4.3
              ],
              [
                4.68,
                5.38
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
                  0.6,
                  0.48,
                  0.35
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
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc3-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi xuất xứ sản phẩm",
        "context": "Xem hàng hóa tại cửa hàng và hỏi nước sản xuất.",
        "lines": [
          {
            "id": "rc3-2-l1",
            "speaker": "A",
            "jp": "これは どこの <u><ruby>靴<rt>くつ</rt></ruby></u>ですか。",
            "rawJp": "これは どこの 靴ですか。",
            "vi": "Đôi giày này là của nước nào vậy?"
          },
          {
            "id": "rc3-2-l2",
            "speaker": "B",
            "jp": "<u>イタリア</u>のです。",
            "rawJp": "イタリアのです。",
            "vi": "Là của Ý đấy ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Giày / Ý)",
            "values": [
              "<ruby>靴<rt>くつ</rt></ruby>",
              "イタリア"
            ],
            "rawValues": [
              "靴",
              "イタリア"
            ],
            "viValues": [
              "giày",
              "Ý"
            ],
            "lineTimings": [
              [
                12.38,
                13.9
              ],
              [
                14.28,
                15.46
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
            "label": "Mẫu 2 (Đồng hồ / Thụy Sĩ)",
            "values": [
              "<ruby>時計<rt>とけい</rt></ruby>",
              "スイス"
            ],
            "rawValues": [
              "時計",
              "スイス"
            ],
            "viValues": [
              "đồng hồ",
              "Thụy Sĩ"
            ],
            "lineTimings": [
              [
                15.84,
                17.47
              ],
              [
                17.86,
                19.08
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
                  0.52,
                  0.51,
                  0.53,
                  0.55,
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
                  0.61,
                  0.57,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Cà vạt / Pháp)",
            "values": [
              "ネクタイ",
              "フランス"
            ],
            "rawValues": [
              "ネクタイ",
              "フランス"
            ],
            "viValues": [
              "cà vạt",
              "Pháp"
            ],
            "lineTimings": [
              [
                19.46,
                21.17
              ],
              [
                21.55,
                22.8
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
                  0.62,
                  0.58,
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
        "id": "rc3-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Xem hàng, hỏi giá và mua",
        "context": "Giao tiếp hoàn chỉnh tại quầy bán hàng.",
        "lines": [
          {
            "id": "rc3-3-l1",
            "speaker": "A",
            "jp": "すみません。この <u>ネクタイ</u>を <ruby>見<rt>み</rt></ruby>せて ください。",
            "rawJp": "すみません。この ネクタイを 見せて ください。",
            "vi": "Xin lỗi, cho tôi xem chiếc cà vạt này."
          },
          {
            "id": "rc3-3-l2",
            "speaker": "B",
            "jp": "はい、どうぞ。",
            "rawJp": "はい、どうぞ。",
            "vi": "Vâng, xin mời."
          },
          {
            "id": "rc3-3-l3",
            "speaker": "A",
            "jp": "いくらですか。",
            "rawJp": "いくらですか。",
            "vi": "Giá bao nhiêu tiền ạ?"
          },
          {
            "id": "rc3-3-l4",
            "speaker": "B",
            "jp": "<u>8,200</u><ruby>円<rt>えん</rt></ruby>です。",
            "rawJp": "8,200円です。",
            "vi": "8.200 yên ạ."
          },
          {
            "id": "rc3-3-l5",
            "speaker": "A",
            "jp": "じゃ、これを ください。",
            "rawJp": "じゃ、これを ください。",
            "vi": "Vậy cho tôi lấy cái này."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Cà vạt / 8.200 yên)",
            "values": [
              "ネクタイ",
              "8,200"
            ],
            "rawValues": [
              "ネクタイ",
              "8,200"
            ],
            "viValues": [
              "cà vạt",
              "8.200"
            ],
            "lineTimings": [
              [
                23.18,
                26.42
              ],
              [
                26.81,
                28.18
              ],
              [
                28.56,
                29.64
              ],
              [
                30.02,
                31.68
              ],
              [
                32.06,
                33.82
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
                  0.65,
                  0.53,
                  0.38
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
                  0.61,
                  0.57,
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
            "label": "Mẫu 2 (Áo sơ mi / 4.500 yên)",
            "values": [
              "シャツ",
              "4,500"
            ],
            "rawValues": [
              "シャツ",
              "4,500"
            ],
            "viValues": [
              "áo sơ mi",
              "4.500"
            ],
            "lineTimings": [
              [
                34.2,
                37.32
              ],
              [
                26.81,
                28.18
              ],
              [
                28.56,
                29.64
              ],
              [
                37.7,
                39.34
              ],
              [
                32.06,
                33.82
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
                  0.65,
                  0.53,
                  0.38
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
                  0.61,
                  0.57,
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
            "label": "Mẫu 3 (Đồng hồ / 18.000 yên)",
            "values": [
              "<ruby>時計<rt>とけい</rt></ruby>",
              "18,000"
            ],
            "rawValues": [
              "時計",
              "18,000"
            ],
            "viValues": [
              "đồng hồ",
              "18.000"
            ],
            "lineTimings": [
              [
                39.72,
                42.91
              ],
              [
                26.81,
                28.18
              ],
              [
                28.56,
                29.64
              ],
              [
                43.3,
                45.05
              ],
              [
                32.06,
                33.82
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
                  0.54,
                  0.53,
                  0.5,
                  0.46,
                  0.43,
                  0.43,
                  0.46,
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
                  0.65,
                  0.53,
                  0.38
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
                  0.61,
                  0.57,
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
        "id": "kq3-1",
        "question": "Chủ đề chính của bài hội thoại Bài 3「これを ください」mang ý nghĩa là gì?",
        "options": [
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Cho tôi lấy cái này"
        ],
        "correctIdx": 3,
        "explanation": "「これを ください」trong Bài 3 có nghĩa là \"Cho tôi lấy cái này\". Bối cảnh: Chị Maria đi mua rượu vang tại tầng hầm cửa hàng bách hóa. Chị hỏi nhân viên về xuất xứ, giá tiền của các chai rượu trước khi quyết định mua."
      },
      {
        "id": "kq3-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。」(Xin lỗi. Quầy bán rượu vang ở đâu vậy ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
          "どうも。",
          "すみません。その ワインを <ruby>見<rt>み</rt></ruby>せて ください。",
          "はい、どうぞ。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。」(Ở tầng hầm 1 ạ.). Nhân viên bán hàng dùng「でございます」(dạng lịch sự trọng thị của です) với khách."
      },
      {
        "id": "kq3-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。」(Ở tầng hầm 1 ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい、どうぞ。",
          "どうも。",
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。",
          "すみません。その ワインを <ruby>見<rt>み</rt></ruby>せて ください。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「どうも。」(Cảm ơn chị.). Câu cảm ơn ngắn gọn khi hỏi đường hoặc hỏi thông tin."
      },
      {
        "id": "kq3-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「どうも。」(Cảm ơn chị.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
          "はい、どうぞ。",
          "すみません。その ワインを <ruby>見<rt>み</rt></ruby>せて ください。",
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「すみません。その ワインを <ruby>見<rt>み</rt></ruby>せて ください。」(Xin lỗi, cho tôi xem chai rượu vang đó với ạ.). 「<ruby>見<rt>み</rt></ruby>せてください」dùng để nhờ nhân viên lấy món đồ trong tủ kính cho mình xem."
      },
      {
        "id": "kq3-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。その ワインを <ruby>見<rt>み</rt></ruby>せて ください。」(Xin lỗi, cho tôi xem chai rượu vang đó với ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。",
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
          "どうも。",
          "はい、どうぞ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「はい、どうぞ。」(Vâng, xin mời quý khách.). Nhân viên đưa sản phẩm cho khách xem."
      },
      {
        "id": "kq3-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい、どうぞ。」(Vâng, xin mời quý khách.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これは フランスの ワインですか。",
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。",
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
          "どうも。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「これは フランスの ワインですか。」(Chai này là rượu vang của Pháp phải không?). 「[Tên nước] の [Sản phẩm]」biểu thị nơi sản xuất hoặc thương hiệu của nước đó."
      },
      {
        "id": "kq3-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「これは フランスの ワインですか。」(Chai này là rượu vang của Pháp phải không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どうも。",
          "いいえ、イタリアのです。",
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。",
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「いいえ、イタリアのです。」(Không ạ, là của Ý đấy ạ.). Lược bỏ danh từ「ワイン」sau「の」để tránh lặp từ."
      },
      {
        "id": "kq3-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「いいえ、イタリアのです。」(Không ạ, là của Ý đấy ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
          "どうも。",
          "いくらですか。",
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「いくらですか。」(Giá bao nhiêu tiền vậy ạ?). Câu hỏi giá tiền thông dụng nhất khi đi mua sắm."
      },
      {
        "id": "kq3-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「いくらですか。」(Giá bao nhiêu tiền vậy ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。",
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
          "どうも。",
          "2,500<ruby>円<rt>えん</rt></ruby>です。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「2,500<ruby>円<rt>えん</rt></ruby>です。」(Giá 2.500 yên ạ.). 2,500<ruby>円<rt>えん</rt></ruby> đọc là にせんごひゃくえん."
      },
      {
        "id": "kq3-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「2,500<ruby>円<rt>えん</rt></ruby>です。」(Giá 2.500 yên ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "じゃ、これを ください。",
          "すみません。ワイン<ruby>売り場<rt>うりば</rt></ruby>は どこですか。",
          "<ruby>地下<rt>ちか</rt></ruby>1<ruby>階<rt>かい</rt></ruby>で ございます。",
          "どうも。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 3, câu đáp chuẩn xác là:「じゃ、これを ください。」(Vậy thì cho tôi lấy chai này nhé.). 「じゃ、N を ください」dùng khi đã quyết định chọn mua món hàng."
      }
    ]
  },
  "kaiwa-4": {
    "id": "kaiwa-4",
    "lesson": 4,
    "level": "Sơ cấp 1",
    "titleJp": "そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか",
    "titleVi": "Chỗ đó mở cửa từ mấy giờ đến mấy giờ?",
    "subtitleVi": "Gọi điện hỏi giờ làm việc & ngày nghỉ",
    "sceneType": "phone_inquiry",
    "context": "Anh Mike Miller tra số điện thoại của Bảo tàng Mỹ thuật Yamato trên tổng đài 104, sau đó gọi điện trực tiếp đến bảo tàng để hỏi giờ mở cửa và ngày nghỉ.",
    "objectives": [
      "Hỏi số điện thoại và xác nhận thông tin qua điện thoại.",
      "Hỏi giờ mở cửa - đóng cửa bằng mẫu: <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか.",
      "Hỏi ngày nghỉ trong tuần: <ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか."
    ],
    "audioSrc": "audio/kaiwa/lesson_4.mp3",
    "audioDuration": 15.14,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_4.mp3",
    "renshuuAudioDuration": 73.08,
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
        "id": "k4-1",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
        "rawJp": "はい、大和美術館です。",
        "vi": "Xin nghe, đây là Bảo tàng Mỹ thuật Yamato ạ.",
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
        "explanation": "Khi nhấc máy điện thoại ở cơ quan, nhân viên luôn nói「はい、[Tên cơ quan]です」.",
        "time": [
          0,
          2.26
        ]
      },
      {
        "id": "k4-2",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。",
        "rawJp": "すみません。そちらは 何時から 何時までですか。",
        "vi": "Xin lỗi, bên mình mở cửa từ mấy giờ đến mấy giờ ạ?",
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
        "explanation": "「そちら」dùng trên điện thoại để chỉ cơ quan/địa điểm của người nghe.",
        "time": [
          2.64,
          6.6
        ]
      },
      {
        "id": "k4-3",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
        "rawJp": "9時から 4時までです。",
        "vi": "Từ 9 giờ sáng đến 4 giờ chiều ạ.",
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
        "explanation": "「～から ～までです」nêu khoảng thời gian bắt đầu và kết thúc.",
        "time": [
          7.06,
          8.71
        ]
      },
      {
        "id": "k4-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
        "rawJp": "休みは 何曜日ですか。",
        "vi": "Ngày nghỉ là thứ mấy vậy ạ?",
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
        "explanation": "「<ruby>何曜日<rt>なんようび</rt></ruby>」(なんようび) dùng để hỏi thứ mấy trong tuần.",
        "time": [
          9.1,
          10.99
        ]
      },
      {
        "id": "k4-5",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>月曜日<rt>げつようび</rt></ruby>です。",
        "rawJp": "月曜日です。",
        "vi": "Là thứ Hai ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.6,
          0.48,
          0.35
        ],
        "explanation": "Các bảo tàng ở Nhật thường nghỉ định kỳ vào thứ Hai hàng tuần.",
        "time": [
          11.45,
          12.7
        ]
      },
      {
        "id": "k4-6",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうも ありがとう ございました。",
        "rawJp": "どうも ありがとう ございました。",
        "vi": "Xin cảm ơn rất nhiều ạ.",
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
        "explanation": "Dùng「ありがとうございました」(quá khứ) khi việc hỏi thông tin đã hoàn tất.",
        "time": [
          13.08,
          15.14
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc4-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi giờ mở cửa và ngày nghỉ",
        "context": "Gọi điện hỏi lịch làm việc của thư viện, ngân hàng, bưu điện.",
        "lines": [
          {
            "id": "rc4-1-l1",
            "speaker": "A",
            "jp": "すみません。<u><ruby>図書館<rt>としょかん</rt></ruby></u>は <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。",
            "rawJp": "すみません。図書館は 何時から 何時までですか。",
            "vi": "Xin lỗi, thư viện làm việc từ mấy giờ đến mấy giờ ạ?"
          },
          {
            "id": "rc4-1-l2",
            "speaker": "B",
            "jp": "<u>9<ruby>時<rt>じ</rt></ruby></u>から <u>5<ruby>時<rt>じ</rt></ruby></u>までです。",
            "rawJp": "9時から 5時までです。",
            "vi": "Từ 9 giờ đến 5 giờ ạ."
          },
          {
            "id": "rc4-1-l3",
            "speaker": "A",
            "jp": "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
            "rawJp": "休みは 何曜日ですか。",
            "vi": "Ngày nghỉ là thứ mấy ạ?"
          },
          {
            "id": "rc4-1-l4",
            "speaker": "B",
            "jp": "<u><ruby>水曜日<rt>すいようび</rt></ruby></u>です。",
            "rawJp": "水曜日です。",
            "vi": "Thứ Tư ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Thư viện / 9h-5h / Thứ Tư)",
            "values": [
              "<ruby>図書館<rt>としょかん</rt></ruby>",
              "9<ruby>時<rt>じ</rt></ruby>",
              "5<ruby>時<rt>じ</rt></ruby>",
              "<ruby>水曜日<rt>すいようび</rt></ruby>"
            ],
            "rawValues": [
              "図書館",
              "9時",
              "5時",
              "水曜日"
            ],
            "viValues": [
              "thư viện",
              "9 giờ",
              "5 giờ",
              "Thứ Tư"
            ],
            "lineTimings": [
              [
                0,
                3.79
              ],
              [
                4.18,
                5.76
              ],
              [
                6.14,
                8.04
              ],
              [
                8.42,
                9.65
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
                  0.6,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Ngân hàng / 9h-3h / T7 & CN)",
            "values": [
              "<ruby>銀行<rt>ぎんこう</rt></ruby>",
              "9<ruby>時<rt>じ</rt></ruby>",
              "3<ruby>時<rt>じ</rt></ruby>",
              "<ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>"
            ],
            "rawValues": [
              "銀行",
              "9時",
              "3時",
              "土曜日と 日曜日"
            ],
            "viValues": [
              "ngân hàng",
              "9 giờ",
              "3 giờ",
              "Thứ Bảy và Chủ Nhật"
            ],
            "lineTimings": [
              [
                10.03,
                13.82
              ],
              [
                14.21,
                15.86
              ],
              [
                6.14,
                8.04
              ],
              [
                16.25,
                18
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
            "label": "Mẫu 3 (Siêu thị / 10h-8h / Không nghỉ)",
            "values": [
              "スーパー",
              "10<ruby>時<rt>じ</rt></ruby>",
              "8<ruby>時<rt>じ</rt></ruby>",
              "ありません"
            ],
            "rawValues": [
              "スーパー",
              "10時",
              "8時",
              "ありません"
            ],
            "viValues": [
              "siêu thị",
              "10 giờ",
              "8 giờ",
              "không có ngày nghỉ"
            ],
            "lineTimings": [
              [
                18.38,
                22.15
              ],
              [
                22.54,
                24.38
              ],
              [
                6.14,
                8.04
              ],
              [
                24.77,
                25.94
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
                  0.62,
                  0.58,
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
        "id": "rc4-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nói về giờ giấc sinh hoạt hàng ngày",
        "context": "Hỏi thăm thói quen thức dậy và đi ngủ của bạn bè.",
        "lines": [
          {
            "id": "rc4-2-l1",
            "speaker": "A",
            "jp": "<ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。",
            "rawJp": "毎朝 何時に 起きますか。",
            "vi": "Mỗi sáng bạn thức dậy lúc mấy giờ?"
          },
          {
            "id": "rc4-2-l2",
            "speaker": "B",
            "jp": "<u>6<ruby>時<rt>じ</rt></ruby></u>に <ruby>起<rt>お</rt></ruby>きます。",
            "rawJp": "6時に 起きます。",
            "vi": "Tôi dậy lúc 6 giờ."
          },
          {
            "id": "rc4-2-l3",
            "speaker": "A",
            "jp": "きのうも <u>6<ruby>時<rt>じ</rt></ruby></u>に <ruby>起<rt>お</rt></ruby>きましたか。",
            "rawJp": "きのうも 6時に 起きましたか。",
            "vi": "Hôm qua bạn cũng dậy lúc 6 giờ à?"
          },
          {
            "id": "rc4-2-l4",
            "speaker": "B",
            "jp": "いいえ、きのうは <u>8<ruby>時<rt>じ</rt></ruby></u>に <ruby>起<rt>お</rt></ruby>きました。",
            "rawJp": "いいえ、きのうは 8時に 起きました。",
            "vi": "Không, hôm qua tôi dậy lúc 8 giờ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (6 giờ / 8 giờ)",
            "values": [
              "6<ruby>時<rt>じ</rt></ruby>",
              "6<ruby>時<rt>じ</rt></ruby>",
              "8<ruby>時<rt>じ</rt></ruby>"
            ],
            "rawValues": [
              "6時",
              "6時",
              "8時"
            ],
            "viValues": [
              "6 giờ",
              "6 giờ",
              "8 giờ"
            ],
            "lineTimings": [
              [
                26.33,
                28.1
              ],
              [
                28.49,
                29.98
              ],
              [
                30.36,
                32.28
              ],
              [
                32.66,
                35.47
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
                  0.62,
                  0.58,
                  0.52,
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
            "label": "Mẫu 2 (7 giờ / 9 giờ)",
            "values": [
              "7<ruby>時<rt>じ</rt></ruby>",
              "7<ruby>時<rt>じ</rt></ruby>",
              "9<ruby>時<rt>じ</rt></ruby>"
            ],
            "rawValues": [
              "7時",
              "7時",
              "9時"
            ],
            "viValues": [
              "7 giờ",
              "7 giờ",
              "9 giờ"
            ],
            "lineTimings": [
              [
                26.33,
                28.1
              ],
              [
                35.86,
                37.27
              ],
              [
                37.66,
                39.55
              ],
              [
                39.94,
                42.58
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
                  0.62,
                  0.58,
                  0.52,
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
            "label": "Mẫu 3 (6 rưỡi / 7 rưỡi)",
            "values": [
              "6<ruby>時半<rt>じはん</rt></ruby>",
              "6<ruby>時半<rt>じはん</rt></ruby>",
              "7<ruby>時半<rt>じはん</rt></ruby>"
            ],
            "rawValues": [
              "6時半",
              "6時半",
              "7時半"
            ],
            "viValues": [
              "6 giờ rưỡi",
              "6 giờ rưỡi",
              "7 giờ rưỡi"
            ],
            "lineTimings": [
              [
                26.33,
                28.1
              ],
              [
                42.96,
                44.62
              ],
              [
                45,
                47.04
              ],
              [
                47.42,
                50.45
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
                  0.62,
                  0.58,
                  0.53,
                  0.49,
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
        "id": "rc4-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi số điện thoại",
        "context": "Hỏi số điện thoại liên lạc của đồng nghiệp.",
        "lines": [
          {
            "id": "rc4-3-l1",
            "speaker": "A",
            "jp": "<u><ruby>佐藤<rt>さとう</rt></ruby></u>さんの <ruby>電話番号<rt>でんわばんごう</rt></ruby>は <ruby>何番<rt>なんばん</rt></ruby>ですか。",
            "rawJp": "佐藤さんの 電話番号は 何番ですか。",
            "vi": "Số điện thoại của chị Sato là số mấy?"
          },
          {
            "id": "rc4-3-l2",
            "speaker": "B",
            "jp": "<u>03-3589-6721</u>です。",
            "rawJp": "03-3589-6721です。",
            "vi": "Là 03-3589-6721."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Sato / 03-3589-6721)",
            "values": [
              "<ruby>佐藤<rt>さとう</rt></ruby>",
              "03-3589-6721"
            ],
            "rawValues": [
              "佐藤",
              "03-3589-6721"
            ],
            "viValues": [
              "Sato",
              "03-3589-6721"
            ],
            "lineTimings": [
              [
                50.83,
                53.62
              ],
              [
                54,
                57.86
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
            "label": "Mẫu 2 (Yamada / 06-6451-8902)",
            "values": [
              "<ruby>山田<rt>やまだ</rt></ruby>",
              "06-6451-8902"
            ],
            "rawValues": [
              "山田",
              "06-6451-8902"
            ],
            "viValues": [
              "Yamada",
              "06-6451-8902"
            ],
            "lineTimings": [
              [
                58.25,
                61.03
              ],
              [
                61.42,
                65.28
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
            "label": "Mẫu 3 (Bệnh viện Kobe / 078-231-5500)",
            "values": [
              "<ruby>神戸病院<rt>こうべびょういん</rt></ruby>",
              "078-231-5500"
            ],
            "rawValues": [
              "神戸病院",
              "078-231-5500"
            ],
            "viValues": [
              "Bệnh viện Kobe",
              "078-231-5500"
            ],
            "lineTimings": [
              [
                65.66,
                68.88
              ],
              [
                69.26,
                73.08
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq4-1",
        "question": "Chủ đề chính của bài hội thoại Bài 4「そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか」mang ý nghĩa là gì?",
        "options": [
          "Chỗ đó mở cửa từ mấy giờ đến mấy giờ?",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật"
        ],
        "correctIdx": 0,
        "explanation": "「そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか」trong Bài 4 có nghĩa là \"Chỗ đó mở cửa từ mấy giờ đến mấy giờ?\". Bối cảnh: Anh Mike Miller tra số điện thoại của Bảo tàng Mỹ thuật Yamato trên tổng đài 104, sau đó gọi điện trực tiếp đến bảo tàng để hỏi giờ mở cửa và ngày nghỉ."
      },
      {
        "id": "kq4-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。」(Xin nghe, đây là Bảo tàng Mỹ thuật Yamato ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>月曜日<rt>げつようび</rt></ruby>です。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。",
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
          "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 4, câu đáp chuẩn xác là:「すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。」(Xin lỗi, bên mình mở cửa từ mấy giờ đến mấy giờ ạ?). 「そちら」dùng trên điện thoại để chỉ cơ quan/địa điểm của người nghe."
      },
      {
        "id": "kq4-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。」(Xin lỗi, bên mình mở cửa từ mấy giờ đến mấy giờ ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
          "<ruby>月曜日<rt>げつようび</rt></ruby>です。",
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 4, câu đáp chuẩn xác là:「9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。」(Từ 9 giờ sáng đến 4 giờ chiều ạ.). 「～から ～までです」nêu khoảng thời gian bắt đầu và kết thúc."
      },
      {
        "id": "kq4-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。」(Từ 9 giờ sáng đến 4 giờ chiều ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。",
          "<ruby>月曜日<rt>げつようび</rt></ruby>です。",
          "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 4, câu đáp chuẩn xác là:「<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。」(Ngày nghỉ là thứ mấy vậy ạ?). 「<ruby>何曜日<rt>なんようび</rt></ruby>」(なんようび) dùng để hỏi thứ mấy trong tuần."
      },
      {
        "id": "kq4-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。」(Ngày nghỉ là thứ mấy vậy ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>月曜日<rt>げつようび</rt></ruby>です。",
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。",
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 4, câu đáp chuẩn xác là:「<ruby>月曜日<rt>げつようび</rt></ruby>です。」(Là thứ Hai ạ.). Các bảo tàng ở Nhật thường nghỉ định kỳ vào thứ Hai hàng tuần."
      },
      {
        "id": "kq4-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>月曜日<rt>げつようび</rt></ruby>です。」(Là thứ Hai ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
          "どうも ありがとう ございました。",
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 4, câu đáp chuẩn xác là:「どうも ありがとう ございました。」(Xin cảm ơn rất nhiều ạ.). Dùng「ありがとうございました」(quá khứ) khi việc hỏi thông tin đã hoàn tất."
      },
      {
        "id": "kq4-7",
        "question": "Để diễn đạt ý: \"Xin nghe, đây là Bảo tàng Mỹ thuật Yamato ạ.\" trong tình huống Bài 4, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
          "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。"
        ],
        "correctIdx": 2,
        "explanation": "Câu「はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。」dịch nghĩa là \"Xin nghe, đây là Bảo tàng Mỹ thuật Yamato ạ.\". Khi nhấc máy điện thoại ở cơ quan, nhân viên luôn nói「はい、[Tên cơ quan]です」."
      },
      {
        "id": "kq4-8",
        "question": "Để diễn đạt ý: \"Xin lỗi, bên mình mở cửa từ mấy giờ đến mấy giờ ạ?\" trong tình huống Bài 4, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
          "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。"
        ],
        "correctIdx": 3,
        "explanation": "Câu「すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。」dịch nghĩa là \"Xin lỗi, bên mình mở cửa từ mấy giờ đến mấy giờ ạ?\". 「そちら」dùng trên điện thoại để chỉ cơ quan/địa điểm của người nghe."
      },
      {
        "id": "kq4-9",
        "question": "Để diễn đạt ý: \"Từ 9 giờ sáng đến 4 giờ chiều ạ.\" trong tình huống Bài 4, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。",
          "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。"
        ],
        "correctIdx": 0,
        "explanation": "Câu「9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。」dịch nghĩa là \"Từ 9 giờ sáng đến 4 giờ chiều ạ.\". 「～から ～までです」nêu khoảng thời gian bắt đầu và kết thúc."
      },
      {
        "id": "kq4-10",
        "question": "Để diễn đạt ý: \"Ngày nghỉ là thứ mấy vậy ạ?\" trong tình huống Bài 4, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "9<ruby>時<rt>じ</rt></ruby>から 4<ruby>時<rt>じ</rt></ruby>までです。",
          "<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
          "はい、<ruby>大和<rt>やまと</rt></ruby><ruby>美術館<rt>びじゅつかん</rt></ruby>です。",
          "すみません。そちらは <ruby>何時<rt>なんじ</rt></ruby>から <ruby>何時<rt>なんじ</rt></ruby>までですか。"
        ],
        "correctIdx": 1,
        "explanation": "Câu「<ruby>休み<rt>やすみ</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>ですか。」dịch nghĩa là \"Ngày nghỉ là thứ mấy vậy ạ?\". 「<ruby>何曜日<rt>なんようび</rt></ruby>」(なんようび) dùng để hỏi thứ mấy trong tuần."
      }
    ]
  },
  "kaiwa-5": {
    "id": "kaiwa-5",
    "lesson": 5,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>甲子園<rt>こうしえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか",
    "titleVi": "Tàu này có đi Koshien không?",
    "subtitleVi": "Hỏi giá vé và sân ga tàu điện",
    "sceneType": "train_station",
    "context": "Anh Miller ở ga Umeda muốn bắt tàu đi đến Koshien. Anh hỏi người phụ nữ cạnh máy bán vé về tiền vé, sau đó hỏi nhân viên nhà ga về đường ray số mấy.",
    "objectives": [
      "Biết cách hỏi giá vé tàu đến một nhà ga: ～まで いくらですか.",
      "Hỏi sân ga / đường ray số mấy: <ruby>何番線<rt>なんばんせん</rt></ruby>ですか.",
      "Xác nhận đoàn tàu đang đỗ có đi đến điểm đích của mình không (この <ruby>電車<rt>でんしゃ</rt></ruby>は ～へ <ruby>行<rt>い</rt></ruby>きますか)."
    ],
    "audioSrc": "audio/kaiwa/lesson_5.mp3",
    "audioDuration": 27.02,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_5.mp3",
    "renshuuAudioDuration": 40.78,
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
        "id": "k5-1",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。",
        "rawJp": "すみません。甲子園まで いくらですか。",
        "vi": "Xin lỗi, vé đi đến Koshien là bao nhiêu tiền ạ?",
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
        ],
        "explanation": "「[Địa điểm] まで いくらですか」dùng để hỏi giá vé tàu/xe đến nơi nào đó.",
        "time": [
          0,
          3.34
        ]
      },
      {
        "id": "k5-2",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "350<ruby>円<rt>えん</rt></ruby>です。",
        "rawJp": "350円です。",
        "vi": "350 yên ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.61,
          0.57,
          0.48,
          0.35
        ],
        "explanation": "350<ruby>円<rt>えん</rt></ruby> đọc là さんびゃくごじゅうえん.",
        "time": [
          3.79,
          5.47
        ]
      },
      {
        "id": "k5-3",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。",
        "rawJp": "350円ですね。ありがとう ございます。",
        "vi": "350 yên nhỉ. Xin cảm ơn chị.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.62,
          0.59,
          0.59,
          0.61,
          0.64,
          0.63,
          0.6,
          0.56,
          0.53,
          0.53,
          0.56,
          0.53,
          0.38
        ],
        "explanation": "Trợ từ「ね」ở cuối câu dùng để xác nhận lại thông tin vừa nghe được.",
        "time": [
          5.86,
          9.67
        ]
      },
      {
        "id": "k5-4",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "どう いたしまして。",
        "rawJp": "どう いたしまして。",
        "vi": "Không có gì đâu ạ.",
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
        ],
        "explanation": "Câu đáp lịch sự khi người khác cảm ơn mình.",
        "time": [
          10.06,
          11.28
        ]
      },
      {
        "id": "k5-5",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>は <ruby>何番線<rt>なんばんせん</rt></ruby>ですか。",
        "rawJp": "すみません。甲子園は 何番線ですか。",
        "vi": "Xin lỗi, tàu đi Koshien ở sân ga số mấy ạ?",
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
        "explanation": "「<ruby>何番線<rt>なんばんせん</rt></ruby>」(なんばんせん) dùng để hỏi số hiệu sân ga / đường ray tàu.",
        "time": [
          11.66,
          15.24
        ]
      },
      {
        "id": "k5-6",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "5<ruby>番線<rt>ばんせん</rt></ruby>です。",
        "rawJp": "5番線です。",
        "vi": "Ở sân ga số 5 ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.6,
          0.48,
          0.35
        ],
        "explanation": "Nhân viên nhà ga chỉ dẫn số đường tàu.",
        "time": [
          15.7,
          16.92
        ]
      },
      {
        "id": "k5-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "どうも。",
        "rawJp": "どうも。",
        "vi": "Cảm ơn anh.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Cảm ơn ngắn gọn khi đang vội di chuyển.",
        "time": [
          17.3,
          18.07
        ]
      },
      {
        "id": "k5-8",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あのう、この <ruby>電車<rt>でんしゃ</rt></ruby>は <ruby>甲子園<rt>こうしえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
        "rawJp": "あのう、この 電車は 甲子園へ 行きますか。",
        "vi": "À xin lỗi, đoàn tàu này có đi đến Koshien không ạ?",
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
          0.53,
          0.52,
          0.49,
          0.45,
          0.42,
          0.42,
          0.45,
          0.56,
          0.85
        ],
        "explanation": "Xác nhận trực tiếp trước khi bước lên tàu để tránh đi nhầm tàu tốc hành.",
        "time": [
          18.38,
          21.86
        ]
      },
      {
        "id": "k5-9",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "いいえ。<ruby>次の<rt>つぎの</rt></ruby> <ruby>普通<rt>ふつう</rt></ruby>ですよ。",
        "rawJp": "いいえ。次の 普通ですよ。",
        "vi": "Không đâu. Là chuyến tàu thường tiếp theo cơ.",
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
        "explanation": "「<ruby>普通<rt>ふつう</rt></ruby>」(ふつう) là tàu thường dừng ở tất cả các ga; tàu tốc hành có thể bỏ qua ga nhỏ.",
        "time": [
          22.32,
          24.58
        ]
      },
      {
        "id": "k5-10",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "そうですか。どうも。",
        "rawJp": "そうですか。どうも。",
        "vi": "Thế ạ. Cảm ơn anh/chị.",
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
        "explanation": "「そうですか」(hạ giọng cuối câu) biểu thị sự tiếp nhận thông tin mới.",
        "time": [
          24.96,
          27.02
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc5-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi kế hoạch đi đâu vào ngày nghỉ",
        "context": "Trò chuyện với đồng nghiệp về dự định cuối tuần.",
        "lines": [
          {
            "id": "rc5-1-l1",
            "speaker": "A",
            "jp": "あしたは <ruby>日曜日<rt>にちようび</rt></ruby>ですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。",
            "rawJp": "あしたは 日曜日ですね。どこへ 行きますか。",
            "vi": "Ngày mai là Chủ nhật nhỉ. Bạn sẽ đi đâu?"
          },
          {
            "id": "rc5-1-l2",
            "speaker": "B",
            "jp": "<u><ruby>京都<rt>きょうと</rt></ruby></u>へ <ruby>行<rt>い</rt></ruby>きます。",
            "rawJp": "京都へ 行きます。",
            "vi": "Tôi sẽ đi Kyoto."
          },
          {
            "id": "rc5-1-l3",
            "speaker": "A",
            "jp": "いいですね。だれと <ruby>行<rt>い</rt></ruby>きますか。",
            "rawJp": "いいですね。だれと 行きますか。",
            "vi": "Tuyệt nhỉ. Bạn đi với ai thế?"
          },
          {
            "id": "rc5-1-l4",
            "speaker": "B",
            "jp": "<u><ruby>友だち<rt>ともだち</rt></ruby></u>と <ruby>行<rt>い</rt></ruby>きます。",
            "rawJp": "友だちと 行きます。",
            "vi": "Tôi đi với bạn bè."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Kyoto / Bạn bè)",
            "values": [
              "<ruby>京都<rt>きょうと</rt></ruby>",
              "<ruby>友だち<rt>ともだち</rt></ruby>"
            ],
            "rawValues": [
              "京都",
              "友だち"
            ],
            "viValues": [
              "Kyoto",
              "bạn bè"
            ],
            "lineTimings": [
              [
                0,
                3.41
              ],
              [
                3.79,
                5.09
              ],
              [
                5.47,
                7.87
              ],
              [
                8.26,
                9.65
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
                  0.53,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Nara / Người yêu)",
            "values": [
              "<ruby>奈良<rt>なら</rt></ruby>",
              "<ruby>恋人<rt>こいびと</rt></ruby>"
            ],
            "rawValues": [
              "奈良",
              "恋人"
            ],
            "viValues": [
              "Nara",
              "người yêu"
            ],
            "lineTimings": [
              [
                0,
                3.41
              ],
              [
                10.03,
                11.21
              ],
              [
                5.47,
                7.87
              ],
              [
                11.59,
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
            "label": "Mẫu 3 (Lâu đài Osaka / Gia đình)",
            "values": [
              "<ruby>大阪城<rt>おおさかじょう</rt></ruby>",
              "<ruby>家族<rt>かぞく</rt></ruby>"
            ],
            "rawValues": [
              "大阪城",
              "家族"
            ],
            "viValues": [
              "Lâu đài Osaka",
              "gia đình"
            ],
            "lineTimings": [
              [
                0,
                3.41
              ],
              [
                13.39,
                15
              ],
              [
                5.47,
                7.87
              ],
              [
                15.38,
                16.68
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
                  0.62,
                  0.58,
                  0.53,
                  0.49,
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
          }
        ]
      },
      {
        "id": "rc5-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi phương tiện đi lại",
        "context": "Hỏi cách di chuyển đến địa điểm du lịch.",
        "lines": [
          {
            "id": "rc5-2-l1",
            "speaker": "A",
            "jp": "<ruby>先週末<rt>せんしゅうまつ</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
            "rawJp": "先週末 どこへ 行きましたか。",
            "vi": "Cuối tuần trước bạn đã đi đâu?"
          },
          {
            "id": "rc5-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>姫路<rt>ひめじ</rt></ruby></u>へ <ruby>行<rt>い</rt></ruby>きました。",
            "rawJp": "姫路へ 行きました。",
            "vi": "Tôi đã đi Himeji."
          },
          {
            "id": "rc5-2-l3",
            "speaker": "A",
            "jp": "<ruby>何<rt>なん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きましたか。",
            "rawJp": "何で 行きましたか。",
            "vi": "Bạn đã đi bằng phương tiện gì?"
          },
          {
            "id": "rc5-2-l4",
            "speaker": "B",
            "jp": "<u><ruby>新幹線<rt>しんかんせん</rt></ruby></u>で <ruby>行<rt>い</rt></ruby>きました。",
            "rawJp": "新幹線で 行きました。",
            "vi": "Tôi đã đi bằng tàu Shinkansen."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Himeji / Shinkansen)",
            "values": [
              "<ruby>姫路<rt>ひめじ</rt></ruby>",
              "<ruby>新幹線<rt>しんかんせん</rt></ruby>"
            ],
            "rawValues": [
              "姫路",
              "新幹線"
            ],
            "viValues": [
              "Himeji",
              "Shinkansen"
            ],
            "lineTimings": [
              [
                17.06,
                19.13
              ],
              [
                19.51,
                21
              ],
              [
                21.38,
                22.7
              ],
              [
                23.09,
                24.94
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
              },
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
                  0.53,
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
              }
            ]
          },
          {
            "label": "Mẫu 2 (Tokyo / Máy bay)",
            "values": [
              "<ruby>東京<rt>とうきょう</rt></ruby>",
              "<ruby>飛行機<rt>ひこうき</rt></ruby>"
            ],
            "rawValues": [
              "東京",
              "飛行機"
            ],
            "viValues": [
              "Tokyo",
              "máy bay"
            ],
            "lineTimings": [
              [
                17.06,
                19.13
              ],
              [
                25.32,
                26.86
              ],
              [
                21.38,
                22.7
              ],
              [
                27.24,
                28.8
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
              },
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
                  0.53,
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
              }
            ]
          },
          {
            "label": "Mẫu 3 (Kobe / Tàu điện)",
            "values": [
              "<ruby>神戸<rt>こうべ</rt></ruby>",
              "<ruby>電車<rt>でんしゃ</rt></ruby>"
            ],
            "rawValues": [
              "神戸",
              "電車"
            ],
            "viValues": [
              "Kobe",
              "tàu điện"
            ],
            "lineTimings": [
              [
                17.06,
                19.13
              ],
              [
                29.18,
                30.55
              ],
              [
                21.38,
                22.7
              ],
              [
                30.94,
                32.33
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
              },
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
                  0.53,
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
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc5-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi ngày sinh nhật",
        "context": "Hỏi thăm ngày tháng sinh nhật của bạn bè.",
        "lines": [
          {
            "id": "rc5-3-l1",
            "speaker": "A",
            "jp": "<ruby>誕生日<rt>たんじょうび</rt></ruby>は <ruby>何月<rt>なんがつ</rt></ruby> <ruby>何日ですか<rt>なんにちですか</rt></ruby>。",
            "rawJp": "誕生日は 何月 何日ですか。",
            "vi": "Sinh nhật của bạn là ngày mấy tháng mấy?"
          },
          {
            "id": "rc5-3-l2",
            "speaker": "B",
            "jp": "<u>9<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby></u>です。",
            "rawJp": "9月 15日です。",
            "vi": "Là ngày 15 tháng 9."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (15 tháng 9)",
            "values": [
              "9<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>"
            ],
            "rawValues": [
              "9月 15日"
            ],
            "viValues": [
              "15 tháng 9"
            ],
            "lineTimings": [
              [
                32.71,
                35.11
              ],
              [
                35.5,
                37.06
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
            "label": "Mẫu 2 (20 tháng 4)",
            "values": [
              "4<ruby>月<rt>がつ</rt></ruby> 20<ruby>日<rt>にち</rt></ruby>"
            ],
            "rawValues": [
              "4月 20日"
            ],
            "viValues": [
              "20 tháng 4"
            ],
            "lineTimings": [
              [
                32.71,
                35.11
              ],
              [
                37.44,
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
            "label": "Mẫu 3 (8 tháng 12)",
            "values": [
              "12<ruby>月<rt>がつ</rt></ruby> 8<ruby>日<rt>にち</rt></ruby>"
            ],
            "rawValues": [
              "12月 8日"
            ],
            "viValues": [
              "8 tháng 12"
            ],
            "lineTimings": [
              [
                32.71,
                35.11
              ],
              [
                39.24,
                40.78
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
                  0.62,
                  0.58,
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
        "id": "kq5-1",
        "question": "Chủ đề chính của bài hội thoại Bài 5「<ruby>甲子園<rt>こうしえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Tàu này có đi Koshien không?",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「<ruby>甲子園<rt>こうしえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか」trong Bài 5 có nghĩa là \"Tàu này có đi Koshien không?\". Bối cảnh: Anh Miller ở ga Umeda muốn bắt tàu đi đến Koshien. Anh hỏi người phụ nữ cạnh máy bán vé về tiền vé, sau đó hỏi nhân viên nhà ga về đường ray số mấy."
      },
      {
        "id": "kq5-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。」(Xin lỗi, vé đi đến Koshien là bao nhiêu tiền ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どう いたしまして。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>は <ruby>何番線<rt>なんばんせん</rt></ruby>ですか。",
          "350<ruby>円<rt>えん</rt></ruby>です。",
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「350<ruby>円<rt>えん</rt></ruby>です。」(350 yên ạ.). 350<ruby>円<rt>えん</rt></ruby> đọc là さんびゃくごじゅうえん."
      },
      {
        "id": "kq5-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「350<ruby>円<rt>えん</rt></ruby>です。」(350 yên ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。",
          "どう いたしまして。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>は <ruby>何番線<rt>なんばんせん</rt></ruby>ですか。",
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。」(350 yên nhỉ. Xin cảm ơn chị.). Trợ từ「ね」ở cuối câu dùng để xác nhận lại thông tin vừa nghe được."
      },
      {
        "id": "kq5-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。」(350 yên nhỉ. Xin cảm ơn chị.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どう いたしまして。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。",
          "350<ruby>円<rt>えん</rt></ruby>です。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>は <ruby>何番線<rt>なんばんせん</rt></ruby>ですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「どう いたしまして。」(Không có gì đâu ạ.). Câu đáp lịch sự khi người khác cảm ơn mình."
      },
      {
        "id": "kq5-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「どう いたしまして。」(Không có gì đâu ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>は <ruby>何番線<rt>なんばんせん</rt></ruby>ですか。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。",
          "350<ruby>円<rt>えん</rt></ruby>です。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>は <ruby>何番線<rt>なんばんせん</rt></ruby>ですか。」(Xin lỗi, tàu đi Koshien ở sân ga số mấy ạ?). 「<ruby>何番線<rt>なんばんせん</rt></ruby>」(なんばんせん) dùng để hỏi số hiệu sân ga / đường ray tàu."
      },
      {
        "id": "kq5-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>は <ruby>何番線<rt>なんばんせん</rt></ruby>ですか。」(Xin lỗi, tàu đi Koshien ở sân ga số mấy ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "350<ruby>円<rt>えん</rt></ruby>です。",
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。",
          "5<ruby>番線<rt>ばんせん</rt></ruby>です。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「5<ruby>番線<rt>ばんせん</rt></ruby>です。」(Ở sân ga số 5 ạ.). Nhân viên nhà ga chỉ dẫn số đường tàu."
      },
      {
        "id": "kq5-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「5<ruby>番線<rt>ばんせん</rt></ruby>です。」(Ở sân ga số 5 ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。",
          "350<ruby>円<rt>えん</rt></ruby>です。",
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。",
          "どうも。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「どうも。」(Cảm ơn anh.). Cảm ơn ngắn gọn khi đang vội di chuyển."
      },
      {
        "id": "kq5-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「どうも。」(Cảm ơn anh.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、この <ruby>電車<rt>でんしゃ</rt></ruby>は <ruby>甲子園<rt>こうしえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。",
          "350<ruby>円<rt>えん</rt></ruby>です。",
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「あのう、この <ruby>電車<rt>でんしゃ</rt></ruby>は <ruby>甲子園<rt>こうしえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。」(À xin lỗi, đoàn tàu này có đi đến Koshien không ạ?). Xác nhận trực tiếp trước khi bước lên tàu để tránh đi nhầm tàu tốc hành."
      },
      {
        "id": "kq5-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「あのう、この <ruby>電車<rt>でんしゃ</rt></ruby>は <ruby>甲子園<rt>こうしえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。」(À xin lỗi, đoàn tàu này có đi đến Koshien không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。",
          "いいえ。<ruby>次の<rt>つぎの</rt></ruby> <ruby>普通<rt>ふつう</rt></ruby>ですよ。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。",
          "350<ruby>円<rt>えん</rt></ruby>です。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「いいえ。<ruby>次の<rt>つぎの</rt></ruby> <ruby>普通<rt>ふつう</rt></ruby>ですよ。」(Không đâu. Là chuyến tàu thường tiếp theo cơ.). 「<ruby>普通<rt>ふつう</rt></ruby>」(ふつう) là tàu thường dừng ở tất cả các ga; tàu tốc hành có thể bỏ qua ga nhỏ."
      },
      {
        "id": "kq5-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「いいえ。<ruby>次の<rt>つぎの</rt></ruby> <ruby>普通<rt>ふつう</rt></ruby>ですよ。」(Không đâu. Là chuyến tàu thường tiếp theo cơ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "350<ruby>円<rt>えん</rt></ruby>です。",
          "350<ruby>円<rt>えん</rt></ruby>ですね。ありがとう ございます。",
          "そうですか。どうも。",
          "すみません。<ruby>甲子園<rt>こうしえん</rt></ruby>まで いくらですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 5, câu đáp chuẩn xác là:「そうですか。どうも。」(Thế ạ. Cảm ơn anh/chị.). 「そうですか」(hạ giọng cuối câu) biểu thị sự tiếp nhận thông tin mới."
      }
    ]
  },
  "kaiwa-6": {
    "id": "kaiwa-6",
    "lesson": 6,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか",
    "titleVi": "Cùng đi với tôi nhé?",
    "subtitleVi": "Mời bạn đi xem hòa nhạc & hẹn gặp",
    "sceneType": "invitation",
    "context": "Chị Sato có 2 vé xem buổi hòa nhạc Jazz vào tối thứ Bảy tuần sau nên rủ anh Miller đi cùng và thống nhất thời gian, địa điểm hẹn gặp.",
    "objectives": [
      "Biết cách gợi ý đề xuất lịch sự khi mở lời (ちょっと いいですか) và rủ ai đó làm gì (<ruby>一緒に<rt>いっしょに</rt></ruby> V-ませんか).",
      "Đồng ý lời mời một cách hào hứng: いいですね、<ruby>行<rt>い</rt></ruby>きましょう.",
      "Thống nhất giờ giấc và địa điểm hẹn gặp (～で <ruby>会<rt>あ</rt></ruby>いましょう)."
    ],
    "audioSrc": "audio/kaiwa/lesson_6.mp3",
    "audioDuration": 21.41,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_6.mp3",
    "renshuuAudioDuration": 53.66,
    "characters": [
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
        "id": "k6-1",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "ミラーさん。",
        "rawJp": "ミラーさん。",
        "vi": "Anh Miller ơi.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.6,
          0.48,
          0.35
        ],
        "explanation": "Gọi tên đồng nghiệp để bắt chuyện.",
        "time": [
          0,
          0.94
        ]
      },
      {
        "id": "k6-2",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>何ですか<rt>なんですか</rt></ruby>。",
        "rawJp": "何ですか。",
        "vi": "Có chuyện gì thế chị?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.85
        ],
        "explanation": "Đáp lại khi có người gọi tên mình.",
        "time": [
          1.32,
          2.35
        ]
      },
      {
        "id": "k6-3",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
        "rawJp": "あした 友だちと お花見を します。",
        "vi": "Ngày mai tôi đi ngắm hoa anh đào với bạn.",
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
        "explanation": "「お<ruby>花見<rt>はなみ</rt></ruby>をします」là hoạt động truyền thống ngắm hoa anh đào vào mùa xuân.",
        "time": [
          2.81,
          5.06
        ]
      },
      {
        "id": "k6-4",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "ミラーさんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか。",
        "rawJp": "ミラーさんも 一緒に 行きませんか。",
        "vi": "Anh Miller cũng cùng đi với chúng tôi nhé?",
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
        "explanation": "「<ruby>一緒に<rt>いっしょに</rt></ruby> V-ませんか」là mẫu câu rủ rê, mời mọc lịch sự tôn trọng ý muốn của người nghe.",
        "time": [
          5.38,
          7.61
        ]
      },
      {
        "id": "k6-5",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "いいですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "rawJp": "いいですね。どこへ 行きますか。",
        "vi": "Hay quá nhỉ. Mọi người đi đâu thế ạ?",
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
        "explanation": "「いいですね」thể hiện sự tán thành, hào hứng với lời mời.",
        "time": [
          8.06,
          10.61
        ]
      },
      {
        "id": "k6-6",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby>です。",
        "rawJp": "大阪城公園です。",
        "vi": "Là công viên Lâu đài Osaka ạ.",
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
        "explanation": "Công viên Lâu đài Osaka là địa điểm ngắm hoa nổi tiếng tại vùng Kansai.",
        "time": [
          11.06,
          12.89
        ]
      },
      {
        "id": "k6-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>何時<rt>なんじ</rt></ruby>ですか。",
        "rawJp": "何時ですか。",
        "vi": "Mấy giờ vậy chị?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.6,
          0.62,
          0.85
        ],
        "explanation": "Hỏi thời gian hẹn gặp.",
        "time": [
          13.27,
          14.42
        ]
      },
      {
        "id": "k6-8",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "10<ruby>時<rt>じ</rt></ruby>に <ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby><ruby>駅<rt>えき</rt></ruby>で <ruby>会<rt>あ</rt></ruby>いましょう。",
        "rawJp": "10時に 大阪城公園駅で 会いましょう。",
        "vi": "10 giờ chúng ta gặp nhau ở ga Công viên Lâu đài Osaka nhé.",
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
        "explanation": "Nơi diễn ra hành động gặp nhau (<ruby>会<rt>あ</rt></ruby>います) dùng trợ từ「で」.",
        "time": [
          14.88,
          18
        ]
      },
      {
        "id": "k6-9",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "わかりました。",
        "rawJp": "わかりました。",
        "vi": "Vâng, tôi hiểu rồi ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.61,
          0.57,
          0.48,
          0.35
        ],
        "explanation": "Xác nhận đã nắm rõ giờ và điểm hẹn.",
        "time": [
          18.38,
          19.58
        ]
      },
      {
        "id": "k6-10",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "じゃ、また あした。",
        "rawJp": "じゃ、また あした。",
        "vi": "Vậy hẹn gặp lại anh ngày mai nhé.",
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
        "explanation": "Câu chào tạm biệt thân mật với đồng nghiệp khi hẹn gặp vào ngày hôm sau.",
        "time": [
          19.97,
          21.41
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc6-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Kể về hoạt động ngày nghỉ",
        "context": "Hỏi đồng nghiệp đã làm gì vào cuối tuần.",
        "lines": [
          {
            "id": "rc6-1-l1",
            "speaker": "A",
            "jp": "<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>何<rt>なん</rt></ruby>を しましたか。",
            "rawJp": "日曜日は 何を しましたか。",
            "vi": "Chủ nhật bạn đã làm gì?"
          },
          {
            "id": "rc6-1-l2",
            "speaker": "B",
            "jp": "<u>テニスを しました</u>。それから、<u>ビデオを <ruby>見<rt>み</rt></ruby>ました</u>。",
            "rawJp": "テニスを しました。それから、ビデオを 見ました。",
            "vi": "Tôi đã chơi quần vợt. Sau đó tôi xem băng hình."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Chơi tennis / Xem video)",
            "values": [
              "テニスを しました",
              "ビデオを <ruby>見<rt>み</rt></ruby>ました"
            ],
            "rawValues": [
              "テニスを しました",
              "ビデオを 見ました"
            ],
            "viValues": [
              "chơi quần vợt",
              "xem băng hình"
            ],
            "lineTimings": [
              [
                0,
                2.18
              ],
              [
                2.57,
                6.12
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
            "label": "Mẫu 2 (Dọn phòng / Mua sắm)",
            "values": [
              "<ruby>部屋<rt>へや</rt></ruby>を <ruby>掃除<rt>そうじ</rt></ruby>しました",
              "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を しました"
            ],
            "rawValues": [
              "部屋を 掃除しました",
              "買い物を しました"
            ],
            "viValues": [
              "dọn phòng",
              "mua sắm"
            ],
            "lineTimings": [
              [
                0,
                2.18
              ],
              [
                6.5,
                10.34
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
            "label": "Mẫu 3 (Học tiếng Nhật / Viết báo cáo)",
            "values": [
              "<ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました",
              "レポートを <ruby>書<rt>か</rt></ruby>きました"
            ],
            "rawValues": [
              "日本語を 勉強しました",
              "レポートを 書きました"
            ],
            "viValues": [
              "học tiếng Nhật",
              "viết báo cáo"
            ],
            "lineTimings": [
              [
                0,
                2.18
              ],
              [
                10.73,
                15.02
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
        "id": "rc6-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi địa điểm ăn trưa / mua sắm",
        "context": "Sử dụng trợ từ で chỉ nơi diễn ra hành động.",
        "lines": [
          {
            "id": "rc6-2-l1",
            "speaker": "A",
            "jp": "いつも どこで <u><ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べますか</u>。",
            "rawJp": "いつも どこで 昼ごはんを 食べますか。",
            "vi": "Bạn thường ăn trưa ở đâu?"
          },
          {
            "id": "rc6-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>食堂<rt>しょくどう</rt></ruby></u>で <u><ruby>食<rt>た</rt></ruby>べます</u>。",
            "rawJp": "会社の 食堂で 食べます。",
            "vi": "Tôi ăn ở nhà ăn của công ty."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Ăn trưa / Nhà ăn công ty)",
            "values": [
              "<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べますか",
              "<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>食堂<rt>しょくどう</rt></ruby>",
              "<ruby>食<rt>た</rt></ruby>べます"
            ],
            "rawValues": [
              "昼ごはんを 食べますか",
              "会社の 食堂",
              "食べます"
            ],
            "viValues": [
              "ăn trưa",
              "nhà ăn công ty",
              "ăn"
            ],
            "lineTimings": [
              [
                15.41,
                17.69
              ],
              [
                18.07,
                20.06
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
            "label": "Mẫu 2 (Mua bánh mì / Siêu thị)",
            "values": [
              "パンを <ruby>買<rt>か</rt></ruby>いますか",
              "スーパー",
              "<ruby>買<rt>か</rt></ruby>います"
            ],
            "rawValues": [
              "パンを 買いますか",
              "スーパー",
              "買います"
            ],
            "viValues": [
              "mua bánh mì",
              "siêu thị",
              "mua"
            ],
            "lineTimings": [
              [
                20.45,
                22.37
              ],
              [
                22.75,
                24.24
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
              }
            ]
          },
          {
            "label": "Mẫu 3 (Đọc sách / Thư viện)",
            "values": [
              "<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みますか",
              "<ruby>図書館<rt>としょかん</rt></ruby>",
              "<ruby>読<rt>よ</rt></ruby>みます"
            ],
            "rawValues": [
              "本を 読みますか",
              "図書館",
              "読みます"
            ],
            "viValues": [
              "đọc sách",
              "thư viện",
              "đọc"
            ],
            "lineTimings": [
              [
                24.62,
                26.59
              ],
              [
                26.98,
                28.42
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
                  0.62,
                  0.58,
                  0.53,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc6-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Mời đi ăn / xem phim và hẹn giờ",
        "context": "Rủ bạn đi xem phim và chốt giờ hẹn.",
        "lines": [
          {
            "id": "rc6-3-l1",
            "speaker": "A",
            "jp": "あした <ruby>一緒に<rt>いっしょに</rt></ruby> <u><ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ませんか</u>。",
            "rawJp": "あした 一緒に 映画を 見ませんか。",
            "vi": "Ngày mai cùng đi xem phim với tôi nhé?"
          },
          {
            "id": "rc6-3-l2",
            "speaker": "B",
            "jp": "いいですね。<u><ruby>見<rt>み</rt></ruby>ましょう</u>。",
            "rawJp": "いいですね。見ましょう。",
            "vi": "Hay quá. Chúng mình cùng xem nhé."
          },
          {
            "id": "rc6-3-l3",
            "speaker": "A",
            "jp": "<ruby>何時<rt>なんじ</rt></ruby>に どこで <ruby>会<rt>あ</rt></ruby>いましょうか。",
            "rawJp": "何時に どこで 会いましょうか。",
            "vi": "Mấy giờ chúng ta gặp nhau ở đâu nhỉ?"
          },
          {
            "id": "rc6-3-l4",
            "speaker": "B",
            "jp": "<u>6<ruby>時<rt>じ</rt></ruby></u>に <u><ruby>駅前<rt>えきまえ</rt></ruby></u>で <ruby>会<rt>あ</rt></ruby>いましょう。",
            "rawJp": "6時に 駅前で 会いましょう。",
            "vi": "6 giờ gặp nhau ở trước nhà ga nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Xem phim / 6 giờ / Trước ga)",
            "values": [
              "<ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ませんか",
              "<ruby>見<rt>み</rt></ruby>ましょう",
              "6<ruby>時<rt>じ</rt></ruby>",
              "<ruby>駅前<rt>えきまえ</rt></ruby>"
            ],
            "rawValues": [
              "映画を 見ませんか",
              "見ましょう",
              "6時",
              "駅前"
            ],
            "viValues": [
              "xem phim",
              "cùng xem",
              "6 giờ",
              "trước nhà ga"
            ],
            "lineTimings": [
              [
                28.8,
                31.13
              ],
              [
                31.51,
                33.34
              ],
              [
                33.72,
                35.62
              ],
              [
                36,
                37.87
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
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.71,
                  0.68,
                  0.63,
                  0.59,
                  0.59,
                  0.6,
                  0.56,
                  0.52
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
              }
            ]
          },
          {
            "label": "Mẫu 2 (Ăn tối / 7 giờ / Sảnh khách sạn)",
            "values": [
              "<ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べませんか",
              "<ruby>食<rt>た</rt></ruby>べましょう",
              "7<ruby>時<rt>じ</rt></ruby>",
              "ホテルの ロビー"
            ],
            "rawValues": [
              "晩ごはんを 食べませんか",
              "食べましょう",
              "7時",
              "ホテルの ロビー"
            ],
            "viValues": [
              "ăn tối",
              "cùng ăn",
              "7 giờ",
              "sảnh khách sạn"
            ],
            "lineTimings": [
              [
                38.26,
                40.94
              ],
              [
                41.33,
                43.3
              ],
              [
                33.72,
                35.62
              ],
              [
                43.68,
                45.96
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
              },
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
                  0.61,
                  0.64,
                  0.63,
                  0.6,
                  0.56,
                  0.53,
                  0.53,
                  0.56,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Uống cà phê / 3 giờ / Quán giải khát)",
            "values": [
              "コーヒーを <ruby>飲<rt>の</rt></ruby>みませんか",
              "<ruby>飲<rt>の</rt></ruby>みましょう",
              "3<ruby>時<rt>じ</rt></ruby>",
              "<ruby>喫茶店<rt>きっさてん</rt></ruby>"
            ],
            "rawValues": [
              "コーヒーを 飲みませんか",
              "飲みましょう",
              "3時",
              "喫茶店"
            ],
            "viValues": [
              "uống cà phê",
              "cùng uống",
              "3 giờ",
              "quán giải khát"
            ],
            "lineTimings": [
              [
                46.34,
                48.94
              ],
              [
                49.32,
                51.29
              ],
              [
                33.72,
                35.62
              ],
              [
                51.67,
                53.66
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
              },
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
                  0.65,
                  0.61,
                  0.58,
                  0.57,
                  0.6,
                  0.62,
                  0.61,
                  0.58,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq6-1",
        "question": "Chủ đề chính của bài hội thoại Bài 6「<ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Cùng đi với tôi nhé?",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「<ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか」trong Bài 6 có nghĩa là \"Cùng đi với tôi nhé?\". Bối cảnh: Chị Sato có 2 vé xem buổi hòa nhạc Jazz vào tối thứ Bảy tuần sau nên rủ anh Miller đi cùng và thống nhất thời gian, địa điểm hẹn gặp."
      },
      {
        "id": "kq6-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「ミラーさん。」(Anh Miller ơi.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
          "ミラーさんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか。",
          "いいですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。",
          "<ruby>何ですか<rt>なんですか</rt></ruby>。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「<ruby>何ですか<rt>なんですか</rt></ruby>。」(Có chuyện gì thế chị?). Đáp lại khi có người gọi tên mình."
      },
      {
        "id": "kq6-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>何ですか<rt>なんですか</rt></ruby>。」(Có chuyện gì thế chị?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
          "ミラーさん。",
          "ミラーさんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか。",
          "いいですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。」(Ngày mai tôi đi ngắm hoa anh đào với bạn.). 「お<ruby>花見<rt>はなみ</rt></ruby>をします」là hoạt động truyền thống ngắm hoa anh đào vào mùa xuân."
      },
      {
        "id": "kq6-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。」(Ngày mai tôi đi ngắm hoa anh đào với bạn.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いいですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。",
          "ミラーさんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか。",
          "ミラーさん。",
          "<ruby>何ですか<rt>なんですか</rt></ruby>。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「ミラーさんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか。」(Anh Miller cũng cùng đi với chúng tôi nhé?). 「<ruby>一緒に<rt>いっしょに</rt></ruby> V-ませんか」là mẫu câu rủ rê, mời mọc lịch sự tôn trọng ý muốn của người nghe."
      },
      {
        "id": "kq6-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「ミラーさんも <ruby>一緒に<rt>いっしょに</rt></ruby> <ruby>行<rt>い</rt></ruby>きませんか。」(Anh Miller cũng cùng đi với chúng tôi nhé?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
          "いいですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。",
          "ミラーさん。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「いいですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。」(Hay quá nhỉ. Mọi người đi đâu thế ạ?). 「いいですね」thể hiện sự tán thành, hào hứng với lời mời."
      },
      {
        "id": "kq6-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「いいですね。どこへ <ruby>行<rt>い</rt></ruby>きますか。」(Hay quá nhỉ. Mọi người đi đâu thế ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ミラーさん。",
          "<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
          "<ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby>です。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「<ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby>です。」(Là công viên Lâu đài Osaka ạ.). Công viên Lâu đài Osaka là địa điểm ngắm hoa nổi tiếng tại vùng Kansai."
      },
      {
        "id": "kq6-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby>です。」(Là công viên Lâu đài Osaka ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>何時<rt>なんじ</rt></ruby>ですか。",
          "ミラーさん。",
          "<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「<ruby>何時<rt>なんじ</rt></ruby>ですか。」(Mấy giờ vậy chị?). Hỏi thời gian hẹn gặp."
      },
      {
        "id": "kq6-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>何時<rt>なんじ</rt></ruby>ですか。」(Mấy giờ vậy chị?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
          "10<ruby>時<rt>じ</rt></ruby>に <ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby><ruby>駅<rt>えき</rt></ruby>で <ruby>会<rt>あ</rt></ruby>いましょう。",
          "ミラーさん。",
          "<ruby>何ですか<rt>なんですか</rt></ruby>。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「10<ruby>時<rt>じ</rt></ruby>に <ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby><ruby>駅<rt>えき</rt></ruby>で <ruby>会<rt>あ</rt></ruby>いましょう。」(10 giờ chúng ta gặp nhau ở ga Công viên Lâu đài Osaka nhé.). Nơi diễn ra hành động gặp nhau (<ruby>会<rt>あ</rt></ruby>います) dùng trợ từ「で」."
      },
      {
        "id": "kq6-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「10<ruby>時<rt>じ</rt></ruby>に <ruby>大阪城公園<rt>おおさかじょうこうえん</rt></ruby><ruby>駅<rt>えき</rt></ruby>で <ruby>会<rt>あ</rt></ruby>いましょう。」(10 giờ chúng ta gặp nhau ở ga Công viên Lâu đài Osaka nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
          "わかりました。",
          "ミラーさん。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「わかりました。」(Vâng, tôi hiểu rồi ạ.). Xác nhận đã nắm rõ giờ và điểm hẹn."
      },
      {
        "id": "kq6-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「わかりました。」(Vâng, tôi hiểu rồi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ミラーさん。",
          "<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "あした <ruby>友だち<rt>ともだち</rt></ruby>と お<ruby>花見<rt>はなみ</rt></ruby>を します。",
          "じゃ、また あした。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 6, câu đáp chuẩn xác là:「じゃ、また あした。」(Vậy hẹn gặp lại anh ngày mai nhé.). Câu chào tạm biệt thân mật với đồng nghiệp khi hẹn gặp vào ngày hôm sau."
      }
    ]
  },
  "kaiwa-7": {
    "id": "kaiwa-7",
    "lesson": 7,
    "level": "Sơ cấp 1",
    "titleJp": "ごめんください",
    "titleVi": "Xin lỗi, có ai ở nhà không ạ?",
    "subtitleVi": "Đến thăm nhà người Nhật & tặng quà",
    "sceneType": "home_visit",
    "context": "Anh Jose Santos và vợ là chị Maria được mời đến thăm nhà gia đình anh Yamada. Sau khi vào nhà, chị Maria tặng quà kỷ niệm từ Brazil và hỏi cách dùng đũa/muỗng.",
    "objectives": [
      "Nắm vững nghi thức chào hỏi khi đến thăm nhà người Nhật: ごめんください → いらっしゃい → どうぞ お<ruby>上<rt>あ</rt></ruby>がりください → <ruby>失礼します<rt>しつれいします</rt></ruby>.",
      "Biết cách mời khách dùng đồ uống và bánh ngọt (どうぞ お<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりください).",
      "Hỏi tên một từ bằng tiếng Nhật hoặc ngôn ngữ khác (～は <ruby>日本語<rt>にほんご</rt></ruby>で <ruby>何ですか<rt>なんですか</rt></ruby>)."
    ],
    "audioSrc": "audio/kaiwa/lesson_7.mp3",
    "audioDuration": 18.79,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_7.mp3",
    "renshuuAudioDuration": 63.94,
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
        "id": "k7-1",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "ごめんください。",
        "rawJp": "ごめんください。",
        "vi": "Xin lỗi, có ai ở nhà không ạ?",
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
        "explanation": "Câu khách nói khi đứng ở tiền sảnh (Genkan) nhà người khác để báo có khách đến.",
        "time": [
          0,
          1.01
        ]
      },
      {
        "id": "k7-2",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
        "rawJp": "いらっしゃい。どうぞ お上がりください。",
        "vi": "Chào mừng anh chị đã đến. Xin mời bước lên nhà ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.62,
          0.59,
          0.59,
          0.61,
          0.64,
          0.63,
          0.6,
          0.56,
          0.53,
          0.53,
          0.56,
          0.53,
          0.38
        ],
        "explanation": "「お<ruby>上<rt>あ</rt></ruby>がりください」là lời mời khách tháo giày ở Genkan và bước lên sàn nhà.",
        "time": [
          1.39,
          3.86
        ]
      },
      {
        "id": "k7-3",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "<ruby>失礼します<rt>しつれいします</rt></ruby>。",
        "rawJp": "失礼します。",
        "vi": "Tôi xin phép bước vào ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.55,
          0.43,
          0.32
        ],
        "explanation": "Khách nói「<ruby>失礼します<rt>しつれいします</rt></ruby>」khi bước chân lên nhà người khác.",
        "time": [
          4.25,
          5.35
        ]
      },
      {
        "id": "k7-4",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "コーヒーは いかがですか。",
        "rawJp": "コーヒーは いかがですか。",
        "vi": "Chị dùng một chút cà phê nhé?",
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
        "explanation": "「N は いかがですか」là cách mời đồ ăn, thức uống rất lịch sự và nhẹ nhàng.",
        "time": [
          5.74,
          7.3
        ]
      },
      {
        "id": "k7-5",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "ありがとう ございます。",
        "rawJp": "ありがとう ございます。",
        "vi": "Vâng, xin cảm ơn chị ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.68,
          0.65,
          0.6,
          0.56,
          0.56,
          0.57,
          0.53,
          0.38
        ],
        "explanation": "Nhận lời mời của chủ nhà.",
        "time": [
          7.75,
          9.1
        ]
      },
      {
        "id": "k7-6",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "greeting_gratitude",
        "jp": "どうぞ。",
        "rawJp": "どうぞ。",
        "vi": "Xin mời chị.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.53,
          0.38
        ],
        "explanation": "Đặt tách cà phê và bánh trước mặt khách.",
        "time": [
          9.48,
          10.22
        ]
      },
      {
        "id": "k7-7",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "いただきます。",
        "rawJp": "いただきます。",
        "vi": "Tôi xin phép dùng ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.66,
          0.62,
          0.53,
          0.38
        ],
        "explanation": "Câu nói truyền thống trước khi ăn hoặc uống bất cứ món gì được mời.",
        "time": [
          10.61,
          11.57
        ]
      },
      {
        "id": "k7-8",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "この スプーン、すてきですね。",
        "rawJp": "この スプーン、すてきですね。",
        "vi": "Chiếc thìa này đẹp quá chị nhỉ.",
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
        "explanation": "Khen ngợi đồ vật của chủ nhà để tạo không khí thân thiện.",
        "time": [
          11.88,
          13.8
        ]
      },
      {
        "id": "k7-9",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "greeting_gratitude",
        "jp": "ええ。<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に もらいました。",
        "rawJp": "ええ。会社の 人に もらいました。",
        "vi": "Vâng. Tôi được một người ở công ty tặng đấy ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.65,
          0.61,
          0.58,
          0.57,
          0.6,
          0.62,
          0.61,
          0.58,
          0.53,
          0.38
        ],
        "explanation": "「N1 に N2 を もらいました」diễn tả việc nhận được món quà từ ai đó.",
        "time": [
          14.18,
          16.68
        ]
      },
      {
        "id": "k7-10",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "ヨーロッパの<ruby>お土産<rt>おみやげ</rt></ruby>です。",
        "rawJp": "ヨーロッパのお土産です。",
        "vi": "Là quà lưu niệm từ chuyến đi châu Âu ạ.",
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
        "explanation": "「<ruby>お土産<rt>おみやげ</rt></ruby>」(おみやげ) là quà đặc sản mua về sau chuyến đi xa.",
        "time": [
          16.99,
          18.79
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc7-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi cách nói một từ trong ngôn ngữ khác",
        "context": "Trao đổi ngôn ngữ giữa người Nhật và người nước ngoài.",
        "lines": [
          {
            "id": "rc7-1-l1",
            "speaker": "A",
            "jp": "すみません。「<u>Thank you</u>」は <ruby>日本語<rt>にほんご</rt></ruby>で <ruby>何ですか<rt>なんですか</rt></ruby>。",
            "rawJp": "すみません。「Thank you」は 日本語で 何ですか。",
            "vi": "Xin lỗi, \"Thank you\" trong tiếng Nhật nói là gì ạ?"
          },
          {
            "id": "rc7-1-l2",
            "speaker": "B",
            "jp": "「<u>ありがとう</u>」です。",
            "rawJp": "「ありがとう」です。",
            "vi": "Là \"Arigatou\" ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Thank you / Arigatou)",
            "values": [
              "Thank you",
              "ありがとう"
            ],
            "rawValues": [
              "Thank you",
              "ありがとう"
            ],
            "viValues": [
              "Thank you",
              "Arigatou"
            ],
            "lineTimings": [
              [
                0,
                3.7
              ],
              [
                4.08,
                5.33
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
                  0.57,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Cảm ơn / Arigatou)",
            "values": [
              "Cảm ơn",
              "ありがとう"
            ],
            "rawValues": [
              "Cảm ơn",
              "ありがとう"
            ],
            "viValues": [
              "Cảm ơn",
              "Arigatou"
            ],
            "lineTimings": [
              [
                5.71,
                9.5
              ],
              [
                4.08,
                5.33
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
                  0.57,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Xin chào / Konnichiwa)",
            "values": [
              "Xin chào",
              "こんにちは"
            ],
            "rawValues": [
              "Xin chào",
              "こんにちは"
            ],
            "viValues": [
              "Xin chào",
              "Konnichiwa"
            ],
            "lineTimings": [
              [
                9.89,
                13.51
              ],
              [
                13.9,
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
                  0.57,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc7-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Khen món đồ và kể ai đã tặng",
        "context": "Trò chuyện về món quà nhận được dịp sinh nhật hoặc Giáng sinh.",
        "lines": [
          {
            "id": "rc7-2-l1",
            "speaker": "A",
            "jp": "すてきな <u><ruby>時計<rt>とけい</rt></ruby></u>ですね。",
            "rawJp": "すてきな 時計ですね。",
            "vi": "Chiếc đồng hồ đẹp quá nhỉ."
          },
          {
            "id": "rc7-2-l2",
            "speaker": "B",
            "jp": "ありがとう ございます。<ruby>誕生日<rt>たんじょうび</rt></ruby>に <u><ruby>父<rt>ちち</rt></ruby></u>に もらいました。",
            "rawJp": "ありがとう ございます。誕生日に 父に もらいました。",
            "vi": "Cảm ơn bạn. Tôi được bố tặng vào dịp sinh nhật đấy."
          },
          {
            "id": "rc7-2-l3",
            "speaker": "A",
            "jp": "いいですね。",
            "rawJp": "いいですね。",
            "vi": "Thích thật đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đồng hồ / Bố)",
            "values": [
              "<ruby>時計<rt>とけい</rt></ruby>",
              "<ruby>父<rt>ちち</rt></ruby>"
            ],
            "rawValues": [
              "時計",
              "父"
            ],
            "viValues": [
              "đồng hồ",
              "bố"
            ],
            "lineTimings": [
              [
                15.58,
                16.99
              ],
              [
                17.38,
                21.17
              ],
              [
                21.55,
                22.42
              ]
            ],
            "lineMeta": [
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
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
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.68,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Áo sơ mi / Mẹ)",
            "values": [
              "シャツ",
              "<ruby>母<rt>はは</rt></ruby>"
            ],
            "rawValues": [
              "シャツ",
              "母"
            ],
            "viValues": [
              "áo sơ mi",
              "mẹ"
            ],
            "lineTimings": [
              [
                22.8,
                24.12
              ],
              [
                24.5,
                28.34
              ],
              [
                21.55,
                22.42
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.56,
                  0.56,
                  0.57,
                  0.53,
                  0.38
                ]
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
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
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.68,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Nhẫn / Người yêu)",
            "values": [
              "<ruby>指輪<rt>ゆびわ</rt></ruby>",
              "<ruby>恋人<rt>こいびと</rt></ruby>"
            ],
            "rawValues": [
              "指輪",
              "恋人"
            ],
            "viValues": [
              "nhẫn",
              "người yêu"
            ],
            "lineTimings": [
              [
                28.73,
                30.12
              ],
              [
                30.5,
                34.54
              ],
              [
                21.55,
                22.42
              ]
            ],
            "lineMeta": [
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
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
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.68,
                  0.56,
                  0.52
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc7-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Xác nhận đã hoàn thành công việc bằng もう",
        "context": "Sếp hỏi nhân viên xem đã gửi báo cáo hoặc mua vé chưa.",
        "lines": [
          {
            "id": "rc7-3-l1",
            "speaker": "A",
            "jp": "もう <u><ruby>新幹線<rt>しんかんせん</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>いました</u>か。",
            "rawJp": "もう 新幹線の 切符を 買いましたか。",
            "vi": "Bạn đã mua vé tàu Shinkansen rồi chứ?"
          },
          {
            "id": "rc7-3-l2",
            "speaker": "B",
            "jp": "はい、もう <u><ruby>買<rt>か</rt></ruby>いました</u>。",
            "rawJp": "はい、もう 買いました。",
            "vi": "Vâng, tôi đã mua rồi ạ."
          },
          {
            "id": "rc7-3-l3",
            "speaker": "A",
            "jp": "<u>レポートは</u>？",
            "rawJp": "レポートは？",
            "vi": "Còn bản báo cáo thì sao?"
          },
          {
            "id": "rc7-3-l4",
            "speaker": "B",
            "jp": "いいえ、まだです。これから <u><ruby>書<rt>か</rt></ruby>きます</u>。",
            "rawJp": "いいえ、まだです。これから 書きます。",
            "vi": "Chưa ạ. Bây giờ tôi mới chuẩn bị viết."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Mua vé / Viết báo cáo)",
            "values": [
              "<ruby>新幹線<rt>しんかんせん</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>を <ruby>買<rt>か</rt></ruby>いました",
              "<ruby>買<rt>か</rt></ruby>いました",
              "レポートは",
              "<ruby>書<rt>か</rt></ruby>きます"
            ],
            "rawValues": [
              "新幹線の 切符を 買いました",
              "買いました",
              "レポートは",
              "書きます"
            ],
            "viValues": [
              "mua vé Shinkansen",
              "mua rồi",
              "báo cáo",
              "viết"
            ],
            "lineTimings": [
              [
                34.92,
                37.66
              ],
              [
                38.04,
                39.84
              ],
              [
                40.22,
                41.28
              ],
              [
                41.66,
                44.78
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
                  0.6,
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
            "label": "Mẫu 2 (Gửi fax / Gọi điện thoại)",
            "values": [
              "ファクスを <ruby>送<rt>おく</rt></ruby>りました",
              "<ruby>送<rt>おく</rt></ruby>りました",
              "<ruby>電話<rt>でんわ</rt></ruby>は",
              "かけます"
            ],
            "rawValues": [
              "ファクスを 送りました",
              "送りました",
              "電話は",
              "かけます"
            ],
            "viValues": [
              "gửi fax",
              "gửi rồi",
              "điện thoại",
              "gọi"
            ],
            "lineTimings": [
              [
                45.17,
                47.21
              ],
              [
                47.59,
                49.51
              ],
              [
                49.9,
                50.78
              ],
              [
                51.17,
                54.31
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
            "label": "Mẫu 3 (Ăn trưa / Uống cà phê)",
            "values": [
              "<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました",
              "<ruby>食<rt>た</rt></ruby>べました",
              "コーヒーは",
              "<ruby>飲<rt>の</rt></ruby>みます"
            ],
            "rawValues": [
              "昼ごはんを 食べました",
              "食べました",
              "コーヒーは",
              "飲みます"
            ],
            "viValues": [
              "ăn trưa",
              "ăn rồi",
              "cà phê",
              "uống"
            ],
            "lineTimings": [
              [
                54.7,
                56.88
              ],
              [
                57.26,
                59.11
              ],
              [
                59.5,
                60.41
              ],
              [
                60.79,
                63.94
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
                  0.6,
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq7-1",
        "question": "Chủ đề chính của bài hội thoại Bài 7「ごめんください」mang ý nghĩa là gì?",
        "options": [
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Xin lỗi, có ai ở nhà không ạ?"
        ],
        "correctIdx": 3,
        "explanation": "「ごめんください」trong Bài 7 có nghĩa là \"Xin lỗi, có ai ở nhà không ạ?\". Bối cảnh: Anh Jose Santos và vợ là chị Maria được mời đến thăm nhà gia đình anh Yamada. Sau khi vào nhà, chị Maria tặng quà kỷ niệm từ Brazil và hỏi cách dùng đũa/muỗng."
      },
      {
        "id": "kq7-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「ごめんください。」(Xin lỗi, có ai ở nhà không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。",
          "コーヒーは いかがですか。",
          "ありがとう ございます。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。」(Chào mừng anh chị đã đến. Xin mời bước lên nhà ạ.). 「お<ruby>上<rt>あ</rt></ruby>がりください」là lời mời khách tháo giày ở Genkan và bước lên sàn nhà."
      },
      {
        "id": "kq7-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。」(Chào mừng anh chị đã đến. Xin mời bước lên nhà ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ありがとう ございます。",
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。",
          "ごめんください。",
          "コーヒーは いかがですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「<ruby>失礼します<rt>しつれいします</rt></ruby>。」(Tôi xin phép bước vào ạ.). Khách nói「<ruby>失礼します<rt>しつれいします</rt></ruby>」khi bước chân lên nhà người khác."
      },
      {
        "id": "kq7-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>失礼します<rt>しつれいします</rt></ruby>。」(Tôi xin phép bước vào ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
          "ありがとう ございます。",
          "コーヒーは いかがですか。",
          "ごめんください。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「コーヒーは いかがですか。」(Chị dùng một chút cà phê nhé?). 「N は いかがですか」là cách mời đồ ăn, thức uống rất lịch sự và nhẹ nhàng."
      },
      {
        "id": "kq7-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「コーヒーは いかがですか。」(Chị dùng một chút cà phê nhé?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ごめんください。",
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。",
          "ありがとう ございます。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「ありがとう ございます。」(Vâng, xin cảm ơn chị ạ.). Nhận lời mời của chủ nhà."
      },
      {
        "id": "kq7-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「ありがとう ございます。」(Vâng, xin cảm ơn chị ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "どうぞ。",
          "ごめんください。",
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「どうぞ。」(Xin mời chị.). Đặt tách cà phê và bánh trước mặt khách."
      },
      {
        "id": "kq7-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「どうぞ。」(Xin mời chị.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。",
          "いただきます。",
          "ごめんください。",
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「いただきます。」(Tôi xin phép dùng ạ.). Câu nói truyền thống trước khi ăn hoặc uống bất cứ món gì được mời."
      },
      {
        "id": "kq7-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「いただきます。」(Tôi xin phép dùng ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。",
          "この スプーン、すてきですね。",
          "ごめんください。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「この スプーン、すてきですね。」(Chiếc thìa này đẹp quá chị nhỉ.). Khen ngợi đồ vật của chủ nhà để tạo không khí thân thiện."
      },
      {
        "id": "kq7-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「この スプーン、すてきですね。」(Chiếc thìa này đẹp quá chị nhỉ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ごめんください。",
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。",
          "ええ。<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に もらいました。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「ええ。<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に もらいました。」(Vâng. Tôi được một người ở công ty tặng đấy ạ.). 「N1 に N2 を もらいました」diễn tả việc nhận được món quà từ ai đó."
      },
      {
        "id": "kq7-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>に もらいました。」(Vâng. Tôi được một người ở công ty tặng đấy ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ヨーロッパの<ruby>お土産<rt>おみやげ</rt></ruby>です。",
          "ごめんください。",
          "いらっしゃい。どうぞ お<ruby>上<rt>あ</rt></ruby>がりください。",
          "<ruby>失礼します<rt>しつれいします</rt></ruby>。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 7, câu đáp chuẩn xác là:「ヨーロッパの<ruby>お土産<rt>おみやげ</rt></ruby>です。」(Là quà lưu niệm từ chuyến đi châu Âu ạ.). 「<ruby>お土産<rt>おみやげ</rt></ruby>」(おみやげ) là quà đặc sản mua về sau chuyến đi xa."
      }
    ]
  },
  "kaiwa-8": {
    "id": "kaiwa-8",
    "lesson": 8,
    "level": "Sơ cấp 1",
    "titleJp": "そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>",
    "titleVi": "Đã đến lúc tôi xin phép cáo từ",
    "subtitleVi": "Trò chuyện trong bữa tiệc & xin phép ra về",
    "sceneType": "home_visit",
    "context": "Sau khi dùng bữa và trò chuyện vui vẻ tại nhà gia đình anh Yamada, chị Maria khen món ăn ngon và xin phép ra về một cách lịch sự khi đã muộn.",
    "objectives": [
      "Biết cách hỏi cảm nhận của người khác bằng tính từ: ～は どうですか.",
      "Mời khách dùng thêm món ăn (もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか) và từ chối khéo khi đã no (いいえ、<ruby>結構<rt>けっこう</rt></ruby>です).",
      "Nói lời cáo từ lịch sự khi kết thúc buổi ghé thăm: そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>."
    ],
    "audioSrc": "audio/kaiwa/lesson_8.mp3",
    "audioDuration": 27.22,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_8.mp3",
    "renshuuAudioDuration": 42.86,
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
        "id": "k8-1",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。",
        "rawJp": "マリアさん、日本の 生活は どうですか。",
        "vi": "Chị Maria này, cuộc sống ở Nhật thế nào ạ?",
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
        ],
        "explanation": "「N は どうですか」dùng để hỏi ấn tượng, cảm nhận về một sự việc.",
        "time": [
          0,
          2.88
        ]
      },
      {
        "id": "k8-2",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。",
        "rawJp": "毎日 とても 楽しいです。",
        "vi": "Mỗi ngày đều rất vui ạ.",
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
        "explanation": "Tính từ đuôi い「<ruby>楽<rt>たの</rt></ruby>しい」giữ nguyên い + です.",
        "time": [
          3.34,
          5.16
        ]
      },
      {
        "id": "k8-3",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。",
        "rawJp": "そうですか。仕事は どうですか。",
        "vi": "Thế à. Còn công việc thì sao?",
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
        "explanation": "Hỏi thăm tiếp về công việc.",
        "time": [
          5.54,
          7.92
        ]
      },
      {
        "id": "k8-4",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "そうですね。<ruby>忙<rt>いそが</rt></ruby>しいですが、おもしろいです。",
        "rawJp": "そうですね。忙しいですが、おもしろいです。",
        "vi": "À vâng... Tuy bận rộn nhưng mà thú vị lắm ạ.",
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
        "explanation": "「そうですね」dùng để ngập ngừng suy nghĩ trước khi trả lời;「～が」nối 2 vế ngược chiều.",
        "time": [
          8.38,
          11.95
        ]
      },
      {
        "id": "k8-5",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "コーヒー、もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか。",
        "rawJp": "コーヒー、もう 一杯 いかがですか。",
        "vi": "Chị dùng thêm một tách cà phê nữa nhé?",
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
        "explanation": "「もう<ruby>一杯<rt>いっぱい</rt></ruby>」(もういっぱい) nghĩa là thêm một cốc/chén nữa.",
        "time": [
          12.34,
          14.93
        ]
      },
      {
        "id": "k8-6",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "statement",
        "jp": "いいえ、<ruby>結構<rt>けっこう</rt></ruby>です。",
        "rawJp": "いいえ、結構です。",
        "vi": "Dạ thôi, tôi đủ rồi ạ.",
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
        "explanation": "「いいえ、<ruby>結構<rt>けっこう</rt></ruby>です」là cách từ chối lịch sự, nhẹ nhàng khi được mời thêm.",
        "time": [
          15.38,
          16.94
        ]
      },
      {
        "id": "k8-7",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "あ、もう 8<ruby>時<rt>じ</rt></ruby>ですね。そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>。",
        "rawJp": "あ、もう 8時ですね。そろそろ 失礼します。",
        "vi": "Ồ, đã 8 giờ rồi nhỉ. Đã đến lúc tôi xin phép cáo từ ạ.",
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
          0.54,
          0.53,
          0.5,
          0.46,
          0.43,
          0.43,
          0.46,
          0.43,
          0.32
        ],
        "explanation": "Người Nhật thường nêu lý do thời gian trước rồi nói「そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>」để xin về.",
        "time": [
          17.26,
          20.54
        ]
      },
      {
        "id": "k8-8",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "そうですか。",
        "rawJp": "そうですか。",
        "vi": "Thế ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.6,
          0.48,
          0.35
        ],
        "explanation": "Chủ nhà tôn trọng ý khách khi khách cần ra về.",
        "time": [
          20.93,
          21.82
        ]
      },
      {
        "id": "k8-9",
        "speakerId": "maria",
        "speakerBadge": "マリア",
        "speakerColor": "rose",
        "voice": "en-US-AvaMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "きょうは どうも ありがとう ございました。",
        "rawJp": "きょうは どうも ありがとう ございました。",
        "vi": "Hôm nay xin chân thành cảm ơn anh chị rất nhiều.",
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
        "explanation": "Cảm ơn vì buổi tiếp đón đã diễn ra xong.",
        "time": [
          22.2,
          24.24
        ]
      },
      {
        "id": "k8-10",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "greeting_gratitude",
        "jp": "いいえ。また いらっしゃって ください。",
        "rawJp": "いいえ。また いらっしゃって ください。",
        "vi": "Không có gì đâu ạ. Lần sau anh chị lại ghé chơi nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.62,
          0.59,
          0.59,
          0.61,
          0.63,
          0.63,
          0.6,
          0.56,
          0.53,
          0.53,
          0.53,
          0.38
        ],
        "explanation": "「また いらっしゃってください」là câu tiễn khách rất hiếu khách của chủ nhà.",
        "time": [
          24.62,
          27.22
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc8-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi cảm nhận về địa điểm / món ăn",
        "context": "Hỏi bạn bè về chuyến đi hoặc món ăn Nhật Bản.",
        "lines": [
          {
            "id": "rc8-1-l1",
            "speaker": "A",
            "jp": "<u><ruby>京都<rt>きょうと</rt></ruby></u>は どうですか。",
            "rawJp": "京都は どうですか。",
            "vi": "Kyoto thế nào hả bạn?"
          },
          {
            "id": "rc8-1-l2",
            "speaker": "B",
            "jp": "<u>きれい</u>です。<u><ruby>静<rt>しず</rt></ruby>かな <ruby>町<rt>まち</rt></ruby></u>です。",
            "rawJp": "きれいです。静かな 町です。",
            "vi": "Đẹp lắm. Đó là một thành phố yên tĩnh."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Kyoto / Đẹp & Yên tĩnh)",
            "values": [
              "<ruby>京都<rt>きょうと</rt></ruby>",
              "きれい",
              "<ruby>静<rt>しず</rt></ruby>かな <ruby>町<rt>まち</rt></ruby>"
            ],
            "rawValues": [
              "京都",
              "きれい",
              "静かな 町"
            ],
            "viValues": [
              "Kyoto",
              "đẹp",
              "thành phố yên tĩnh"
            ],
            "lineTimings": [
              [
                0,
                1.42
              ],
              [
                1.8,
                4.27
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
                  0.53,
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
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Osaka / Náo nhiệt & Thú vị)",
            "values": [
              "<ruby>大阪<rt>おおさか</rt></ruby>",
              "にぎやか",
              "おもしろい <ruby>町<rt>まち</rt></ruby>"
            ],
            "rawValues": [
              "大阪",
              "にぎやか",
              "おもしろい 町"
            ],
            "viValues": [
              "Osaka",
              "náo nhiệt",
              "thành phố thú vị"
            ],
            "lineTimings": [
              [
                4.66,
                6.19
              ],
              [
                6.58,
                9.26
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
                  0.53,
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
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Ký túc xá / Cũ nhưng Tiện lợi)",
            "values": [
              "<ruby>寮<rt>りょう</rt></ruby>",
              "<ruby>古<rt>ふる</rt></ruby>いですが",
              "<ruby>便利<rt>べんり</rt></ruby>な ところ"
            ],
            "rawValues": [
              "寮",
              "古いですが",
              "便利な ところ"
            ],
            "viValues": [
              "ký túc xá",
              "cũ nhưng",
              "nơi tiện lợi"
            ],
            "lineTimings": [
              [
                9.65,
                11.02
              ],
              [
                11.4,
                14.28
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
                "emotion": "greeting_gratitude",
                "endPitch": "down",
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
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc8-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi tính cách / đặc điểm của một người",
        "context": "Dùng どんな N ですか để hỏi tính chất.",
        "lines": [
          {
            "id": "rc8-2-l1",
            "speaker": "A",
            "jp": "<u>ワット<ruby>先生<rt>せんせい</rt></ruby></u>は どんな <ruby>人<rt>ひと</rt></ruby>ですか。",
            "rawJp": "ワット先生は どんな 人ですか。",
            "vi": "Thầy Watt là người như thế nào?"
          },
          {
            "id": "rc8-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>親切<rt>しんせつ</rt></ruby></u>で、<u>おもしろい</u> <ruby>人<rt>ひと</rt></ruby>です。",
            "rawJp": "親切で、おもしろい 人です。",
            "vi": "Là người tử tế và thú vị."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Thầy Watt / Tử tế & Thú vị)",
            "values": [
              "ワット<ruby>先生<rt>せんせい</rt></ruby>",
              "<ruby>親切<rt>しんせつ</rt></ruby>",
              "おもしろい"
            ],
            "rawValues": [
              "ワット先生",
              "親切",
              "おもしろい"
            ],
            "viValues": [
              "Thầy Watt",
              "tử tế",
              "thú vị"
            ],
            "lineTimings": [
              [
                14.66,
                16.7
              ],
              [
                17.09,
                19.49
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
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Chị Sato / Xinh đẹp & Dịu dàng)",
            "values": [
              "<ruby>佐藤<rt>さとう</rt></ruby>さん",
              "きれい",
              "<ruby>優<rt>やさ</rt></ruby>しい"
            ],
            "rawValues": [
              "佐藤さん",
              "きれい",
              "優しい"
            ],
            "viValues": [
              "Chị Sato",
              "xinh đẹp",
              "dịu dàng"
            ],
            "lineTimings": [
              [
                19.87,
                21.74
              ],
              [
                22.13,
                24.19
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
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.56,
                  0.56,
                  0.57,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Anh Miller / Đẹp trai & Giỏi giang)",
            "values": [
              "ミラーさん",
              "ハンサム",
              "<ruby>元気<rt>げんき</rt></ruby>な"
            ],
            "rawValues": [
              "ミラーさん",
              "ハンサム",
              "元気な"
            ],
            "viValues": [
              "Anh Miller",
              "đẹp trai",
              "năng động"
            ],
            "lineTimings": [
              [
                24.58,
                26.45
              ],
              [
                26.83,
                29.14
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
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc8-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Nhận diện đồ vật qua tính từ đặc tả",
        "context": "Hỏi cái ô hoặc chiếc cặp của ai trong nhiều chiếc.",
        "lines": [
          {
            "id": "rc8-3-l1",
            "speaker": "A",
            "jp": "ミラーさんの <u><ruby>傘<rt>かさ</rt></ruby></u>は どれですか。",
            "rawJp": "ミラーさんの 傘は どれですか。",
            "vi": "Chiếc ô của anh Miller là cái nào?"
          },
          {
            "id": "rc8-3-l2",
            "speaker": "B",
            "jp": "あの <u><ruby>青<rt>あお</rt></ruby>い <ruby>傘<rt>かさ</rt></ruby></u>です。",
            "rawJp": "あの 青い 傘です。",
            "vi": "Là chiếc ô màu xanh dương kia kìa."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Ô dù / Màu xanh)",
            "values": [
              "<ruby>傘<rt>かさ</rt></ruby>",
              "<ruby>青<rt>あお</rt></ruby>い <ruby>傘<rt>かさ</rt></ruby>"
            ],
            "rawValues": [
              "傘",
              "青い 傘"
            ],
            "viValues": [
              "ô",
              "ô màu xanh"
            ],
            "lineTimings": [
              [
                29.52,
                31.58
              ],
              [
                31.97,
                33.55
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
                "emotion": "hesitation",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.62,
                  0.56,
                  0.52,
                  0.46,
                  0.42,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Cặp / Màu đen)",
            "values": [
              "かばん",
              "<ruby>黒<rt>くろ</rt></ruby>い かばん"
            ],
            "rawValues": [
              "かばん",
              "黒い かばん"
            ],
            "viValues": [
              "cặp",
              "cặp màu đen"
            ],
            "lineTimings": [
              [
                33.94,
                36.07
              ],
              [
                36.46,
                38.18
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
                "emotion": "hesitation",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.62,
                  0.57,
                  0.53,
                  0.48,
                  0.44,
                  0.44,
                  0.42,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Xe hơi / Màu trắng)",
            "values": [
              "<ruby>車<rt>くるま</rt></ruby>",
              "<ruby>白<rt>しろ</rt></ruby>い <ruby>車<rt>くるま</rt></ruby>"
            ],
            "rawValues": [
              "車",
              "白い 車"
            ],
            "viValues": [
              "xe hơi",
              "xe hơi màu trắng"
            ],
            "lineTimings": [
              [
                38.57,
                40.7
              ],
              [
                41.09,
                42.86
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
                "emotion": "hesitation",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.62,
                  0.56,
                  0.52,
                  0.46,
                  0.42,
                  0.32
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq8-1",
        "question": "Chủ đề chính của bài hội thoại Bài 8「そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>」mang ý nghĩa là gì?",
        "options": [
          "Đã đến lúc tôi xin phép cáo từ",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật"
        ],
        "correctIdx": 0,
        "explanation": "「そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>」trong Bài 8 có nghĩa là \"Đã đến lúc tôi xin phép cáo từ\". Bối cảnh: Sau khi dùng bữa và trò chuyện vui vẻ tại nhà gia đình anh Yamada, chị Maria khen món ăn ngon và xin phép ra về một cách lịch sự khi đã muộn."
      },
      {
        "id": "kq8-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。」(Chị Maria này, cuộc sống ở Nhật thế nào ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "コーヒー、もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。",
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。",
          "そうですね。<ruby>忙<rt>いそが</rt></ruby>しいですが、おもしろいです。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。」(Mỗi ngày đều rất vui ạ.). Tính từ đuôi い「<ruby>楽<rt>たの</rt></ruby>しい」giữ nguyên い + です."
      },
      {
        "id": "kq8-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。」(Mỗi ngày đều rất vui ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですね。<ruby>忙<rt>いそが</rt></ruby>しいですが、おもしろいです。",
          "コーヒー、もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか。",
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。",
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。」(Thế à. Còn công việc thì sao?). Hỏi thăm tiếp về công việc."
      },
      {
        "id": "kq8-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。」(Thế à. Còn công việc thì sao?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。",
          "コーヒー、もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか。",
          "そうですね。<ruby>忙<rt>いそが</rt></ruby>しいですが、おもしろいです。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「そうですね。<ruby>忙<rt>いそが</rt></ruby>しいですが、おもしろいです。」(À vâng... Tuy bận rộn nhưng mà thú vị lắm ạ.). 「そうですね」dùng để ngập ngừng suy nghĩ trước khi trả lời;「～が」nối 2 vế ngược chiều."
      },
      {
        "id": "kq8-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですね。<ruby>忙<rt>いそが</rt></ruby>しいですが、おもしろいです。」(À vâng... Tuy bận rộn nhưng mà thú vị lắm ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "コーヒー、もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか。",
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。",
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「コーヒー、もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか。」(Chị dùng thêm một tách cà phê nữa nhé?). 「もう<ruby>一杯<rt>いっぱい</rt></ruby>」(もういっぱい) nghĩa là thêm một cốc/chén nữa."
      },
      {
        "id": "kq8-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「コーヒー、もう <ruby>一杯<rt>いっぱい</rt></ruby> いかがですか。」(Chị dùng thêm một tách cà phê nữa nhé?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。",
          "いいえ、<ruby>結構<rt>けっこう</rt></ruby>です。",
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「いいえ、<ruby>結構<rt>けっこう</rt></ruby>です。」(Dạ thôi, tôi đủ rồi ạ.). 「いいえ、<ruby>結構<rt>けっこう</rt></ruby>です」là cách từ chối lịch sự, nhẹ nhàng khi được mời thêm."
      },
      {
        "id": "kq8-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「いいえ、<ruby>結構<rt>けっこう</rt></ruby>です。」(Dạ thôi, tôi đủ rồi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。",
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。",
          "あ、もう 8<ruby>時<rt>じ</rt></ruby>ですね。そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>。",
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「あ、もう 8<ruby>時<rt>じ</rt></ruby>ですね。そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>。」(Ồ, đã 8 giờ rồi nhỉ. Đã đến lúc tôi xin phép cáo từ ạ.). Người Nhật thường nêu lý do thời gian trước rồi nói「そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>」để xin về."
      },
      {
        "id": "kq8-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「あ、もう 8<ruby>時<rt>じ</rt></ruby>ですね。そろそろ <ruby>失礼します<rt>しつれいします</rt></ruby>。」(Ồ, đã 8 giờ rồi nhỉ. Đã đến lúc tôi xin phép cáo từ ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。",
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。",
          "そうですか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「そうですか。」(Thế ạ.). Chủ nhà tôn trọng ý khách khi khách cần ra về."
      },
      {
        "id": "kq8-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。」(Thế ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "きょうは どうも ありがとう ございました。",
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。",
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「きょうは どうも ありがとう ございました。」(Hôm nay xin chân thành cảm ơn anh chị rất nhiều.). Cảm ơn vì buổi tiếp đón đã diễn ra xong."
      },
      {
        "id": "kq8-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「きょうは どうも ありがとう ございました。」(Hôm nay xin chân thành cảm ơn anh chị rất nhiều.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。<ruby>仕事<rt>しごと</rt></ruby>は どうですか。",
          "いいえ。また いらっしゃって ください。",
          "マリアさん、<ruby>日本<rt>にほん</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は どうですか。",
          "<ruby>毎日<rt>まいにち</rt></ruby> とても <ruby>楽<rt>たの</rt></ruby>しいです。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 8, câu đáp chuẩn xác là:「いいえ。また いらっしゃって ください。」(Không có gì đâu ạ. Lần sau anh chị lại ghé chơi nhé.). 「また いらっしゃってください」là câu tiễn khách rất hiếu khách của chủ nhà."
      }
    ]
  },
  "kaiwa-9": {
    "id": "kaiwa-9",
    "lesson": 9,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>残念<rt>ざんねん</rt></ruby>ですが",
    "titleVi": "Thật đáng tiếc nhưng mà...",
    "subtitleVi": "Mời đi xem hòa nhạc & từ chối khéo léo",
    "sceneType": "concert_invite",
    "context": "Anh Kimura có 2 vé buổi hòa nhạc cổ điển vào tối Chủ nhật nên gọi điện mời chị Sato đi cùng, nhưng chị Sato đã có hẹn từ trước nên từ chối khéo léo.",
    "objectives": [
      "Biết cách hỏi sở thích âm nhạc/thể thao trước khi ngỏ lời mời (～が <ruby>好<rt>す</rt></ruby>きですか).",
      "Trình bày lý do bằng ～から và mời đi cùng.",
      "Từ chối lời mời một cách lịch sự, giữ thể diện cho đối phương bằng: <ruby>残念<rt>ざんねん</rt></ruby>ですが、ちょっと… và hẹn dịp khác (また <ruby>今度<rt>こんど</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>)."
    ],
    "audioSrc": "audio/kaiwa/lesson_9.mp3",
    "audioDuration": 35.93,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_9.mp3",
    "renshuuAudioDuration": 57.84,
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
        "id": "k9-1",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "question",
        "jp": "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。",
        "rawJp": "もしもし、木村ですが、佐藤さん、いらっしゃいますか。",
        "vi": "Alo, tôi là Kimura đây, có chị Sato ở nhà không ạ?",
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
        "explanation": "「もしもし」dùng khi bắt đầu cuộc gọi điện thoại.",
        "time": [
          0,
          4.68
        ]
      },
      {
        "id": "k9-2",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "greeting_gratitude",
        "jp": "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。",
        "rawJp": "はい、佐藤です。ああ、木村さん、こんばんは。",
        "vi": "Vâng, Sato nghe đây. À anh Kimura đấy à, chào buổi tối anh.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.69,
          0.66,
          0.62,
          0.59,
          0.59,
          0.61,
          0.64,
          0.63,
          0.6,
          0.56,
          0.53,
          0.53,
          0.56,
          0.53,
          0.38
        ],
        "explanation": "Nhận ra giọng người quen trên điện thoại.",
        "time": [
          5.14,
          8.98
        ]
      },
      {
        "id": "k9-3",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。",
        "rawJp": "佐藤さん、クラシックの コンサート、好きですか。",
        "vi": "Chị Sato này, chị có thích hòa nhạc cổ điển không?",
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
        "explanation": "Với tính từ「<ruby>好<rt>す</rt></ruby>き」, đối tượng được yêu thích đi với trợ từ「が」(trong hội thoại có thể lược trợ từ).",
        "time": [
          9.34,
          13.27
        ]
      },
      {
        "id": "k9-4",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "ええ、<ruby>大好き<rt>だいすき</rt></ruby>ですよ。",
        "rawJp": "ええ、大好きですよ。",
        "vi": "Vâng, tôi rất thích đấy ạ.",
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
        "explanation": "「<ruby>大好き<rt>だいすき</rt></ruby>」thể hiện mức độ yêu thích rất cao.",
        "time": [
          13.73,
          15.5
        ]
      },
      {
        "id": "k9-5",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "question",
        "jp": "チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。",
        "rawJp": "チケットが 2枚 ありますから、日曜日の 晩、一緒に いかがですか。",
        "vi": "Vì tôi có 2 tấm vé nên tối Chủ nhật này chị đi cùng tôi nhé?",
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
        "explanation": "「Mệnh đề 1 から、Mệnh đề 2」dùng để nêu lý do dẫn đến lời mời.",
        "time": [
          15.89,
          20.81
        ]
      },
      {
        "id": "k9-6",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>ですか。",
        "rawJp": "日曜日の 晩ですか。",
        "vi": "Tối Chủ nhật này sao ạ?",
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
        "explanation": "Lặp lại thời gian với ngữ điệu trầm xuống báo hiệu sự khó xử.",
        "time": [
          21.26,
          22.9
        ]
      },
      {
        "id": "k9-7",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "empathy_apology",
        "jp": "すみません、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>は ちょっと <ruby>都合<rt>つごう</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>いです。",
        "rawJp": "すみません、日曜日の 晩は ちょっと 都合が 悪いです。",
        "vi": "Xin lỗi anh, tối Chủ nhật thì hơi bất tiện cho tôi rồi.",
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
        "explanation": "「<ruby>都合が悪い<rt>つごうがわるい</rt></ruby>」(つごうがわるい) là cụm từ lịch sự chỉ việc bận hoặc không thu xếp được.",
        "time": [
          23.21,
          27.86
        ]
      },
      {
        "id": "k9-8",
        "speakerId": "kimura",
        "speakerBadge": "<ruby>木村<rt>きむら</rt></ruby>",
        "speakerColor": "rose",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "statement",
        "jp": "そうですか。",
        "rawJp": "そうですか。",
        "vi": "Vậy sao.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.6,
          0.48,
          0.35
        ],
        "explanation": "Thông cảm với lịch trình của đối phương.",
        "time": [
          28.25,
          29.45
        ]
      },
      {
        "id": "k9-9",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "hesitation",
        "jp": "<ruby>友だち<rt>ともだち</rt></ruby>と <ruby>約束<rt>やくそく</rt></ruby>が ありますから、<ruby>残念<rt>ざんねん</rt></ruby>ですが…。",
        "rawJp": "友だちと 約束が ありますから、残念ですが…。",
        "vi": "Vì tôi trót có hẹn với bạn mất rồi, thật đáng tiếc quá...",
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
        "explanation": "Người Nhật thường bỏ lửng câu sau「<ruby>残念<rt>ざんねん</rt></ruby>ですが…」để từ chối mềm mỏng, tránh nói thẳng \"Tôi không đi\".",
        "time": [
          29.83,
          33.77
        ]
      },
      {
        "id": "k9-10",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "empathy_apology",
        "jp": "また <ruby>今度<rt>こんど</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "また 今度 お願いします。",
        "vi": "Hẹn anh vào một dịp khác nhé.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.58,
          0.55,
          0.5,
          0.46,
          0.46,
          0.47,
          0.43,
          0.32
        ],
        "explanation": "「<ruby>また今度お願いします<rt>またこんどおねがいします</rt></ruby>」giúp giữ gìn mối quan hệ tốt đẹp sau khi từ chối lời mời.",
        "time": [
          34.08,
          35.93
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc9-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi thể loại yêu thích",
        "context": "Tìm hiểu sở thích thể thao, ẩm thực, âm nhạc của bạn.",
        "lines": [
          {
            "id": "rc9-1-l1",
            "speaker": "A",
            "jp": "<u>スポーツ</u>が <ruby>好<rt>す</rt></ruby>きですか。",
            "rawJp": "スポーツが 好きですか。",
            "vi": "Bạn có thích thể thao không?"
          },
          {
            "id": "rc9-1-l2",
            "speaker": "B",
            "jp": "ええ、<ruby>好<rt>す</rt></ruby>きです。",
            "rawJp": "ええ、好きです。",
            "vi": "Vâng, tôi thích."
          },
          {
            "id": "rc9-1-l3",
            "speaker": "A",
            "jp": "どんな <u>スポーツ</u>が <ruby>好<rt>す</rt></ruby>きですか。",
            "rawJp": "どんな スポーツが 好きですか。",
            "vi": "Bạn thích môn thể thao như thế nào?"
          },
          {
            "id": "rc9-1-l4",
            "speaker": "B",
            "jp": "<u>サッカー</u>が <ruby>好<rt>す</rt></ruby>きです。",
            "rawJp": "サッカーが 好きです。",
            "vi": "Tôi thích bóng đá."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Thể thao / Bóng đá)",
            "values": [
              "スポーツ",
              "スポーツ",
              "サッカー"
            ],
            "rawValues": [
              "スポーツ",
              "スポーツ",
              "サッカー"
            ],
            "viValues": [
              "thể thao",
              "thể thao",
              "bóng đá"
            ],
            "lineTimings": [
              [
                0,
                1.68
              ],
              [
                2.06,
                3.7
              ],
              [
                4.08,
                6.05
              ],
              [
                6.43,
                7.9
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
                  0.61,
                  0.57,
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
            "label": "Mẫu 2 (Âm nhạc / Nhạc Jazz)",
            "values": [
              "<ruby>音楽<rt>おんがく</rt></ruby>",
              "<ruby>音楽<rt>おんがく</rt></ruby>",
              "ジャズ"
            ],
            "rawValues": [
              "音楽",
              "音楽",
              "ジャズ"
            ],
            "viValues": [
              "âm nhạc",
              "âm nhạc",
              "nhạc Jazz"
            ],
            "lineTimings": [
              [
                8.28,
                9.79
              ],
              [
                2.06,
                3.7
              ],
              [
                10.18,
                12.07
              ],
              [
                12.46,
                13.73
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
                  0.61,
                  0.57,
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
            "label": "Mẫu 3 (Món ăn / Món Nhật)",
            "values": [
              "<ruby>料理<rt>りょうり</rt></ruby>",
              "<ruby>料理<rt>りょうり</rt></ruby>",
              "<ruby>日本料理<rt>にほんりょうり</rt></ruby>"
            ],
            "rawValues": [
              "料理",
              "料理",
              "日本料理"
            ],
            "viValues": [
              "món ăn",
              "món ăn",
              "món ăn Nhật"
            ],
            "lineTimings": [
              [
                14.11,
                15.6
              ],
              [
                2.06,
                3.7
              ],
              [
                15.98,
                17.81
              ],
              [
                18.19,
                19.85
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
                  0.61,
                  0.57,
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
      },
      {
        "id": "rc9-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nêu lý do xin về sớm / từ chối",
        "context": "Dùng ～から để giải thích lý do chính đáng.",
        "lines": [
          {
            "id": "rc9-2-l1",
            "speaker": "A",
            "jp": "すみません。きょうは <u><ruby>約束<rt>やくそく</rt></ruby>が あります</u>から、<ruby>早<rt>はや</rt></ruby>く <ruby>帰<rt>かえ</rt></ruby>ります。",
            "rawJp": "すみません。きょうは 約束が ありますから、早く 帰ります。",
            "vi": "Xin lỗi. Hôm nay vì có cuộc hẹn nên tôi xin về sớm."
          },
          {
            "id": "rc9-2-l2",
            "speaker": "B",
            "jp": "そうですか。お<ruby>先<rt>さき</rt></ruby>に どうぞ。",
            "rawJp": "そうですか。お先に どうぞ。",
            "vi": "Thế à. Bạn cứ về trước nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Có cuộc hẹn)",
            "values": [
              "<ruby>約束<rt>やくそく</rt></ruby>が あります"
            ],
            "rawValues": [
              "約束が あります"
            ],
            "viValues": [
              "có cuộc hẹn"
            ],
            "lineTimings": [
              [
                20.23,
                24.6
              ],
              [
                24.98,
                27.38
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
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Có việc bận)",
            "values": [
              "<ruby>用事<rt>ようじ</rt></ruby>が あります"
            ],
            "rawValues": [
              "用事が あります"
            ],
            "viValues": [
              "có việc bận"
            ],
            "lineTimings": [
              [
                27.77,
                32.04
              ],
              [
                24.98,
                27.38
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
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Sinh nhật của con)",
            "values": [
              "<ruby>子<rt>こ</rt></ruby>どもの <ruby>誕生日<rt>たんじょうび</rt></ruby>です"
            ],
            "rawValues": [
              "子どもの 誕生日です"
            ],
            "viValues": [
              "là sinh nhật của con"
            ],
            "lineTimings": [
              [
                32.42,
                37.1
              ],
              [
                24.98,
                27.38
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
                "emotion": "greeting_gratitude",
                "endPitch": "down",
                "pitchCurve": [
                  0.35,
                  0.73,
                  0.68,
                  0.65,
                  0.6,
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc9-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Có vé mời đi xem nhưng đối phương bận",
        "context": "Thực hành mời và từ chối lịch sự bằng ちょっと…",
        "lines": [
          {
            "id": "rc9-3-l1",
            "speaker": "A",
            "jp": "<u><ruby>歌舞伎<rt>かぶき</rt></ruby></u>の チケットが あります。あした <ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。",
            "rawJp": "歌舞伎の チケットが あります。あした 一緒に いかがですか。",
            "vi": "Tôi có vé xem kịch Kabuki. Ngày mai bạn đi cùng nhé?"
          },
          {
            "id": "rc9-3-l2",
            "speaker": "B",
            "jp": "あしたですか。<ruby>残念<rt>ざんねん</rt></ruby>ですが、あしたは ちょっと…。",
            "rawJp": "あしたですか。残念ですが、あしたは ちょっと…。",
            "vi": "Ngày mai sao ạ? Thật đáng tiếc, ngày mai tôi hơi bận một chút..."
          },
          {
            "id": "rc9-3-l3",
            "speaker": "A",
            "jp": "そうですか。じゃ、また <ruby>今度<rt>こんど</rt></ruby>。",
            "rawJp": "そうですか。じゃ、また 今度。",
            "vi": "Vậy à. Thế hẹn lần sau nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Kịch Kabuki)",
            "values": [
              "<ruby>歌舞伎<rt>かぶき</rt></ruby>"
            ],
            "rawValues": [
              "歌舞伎"
            ],
            "viValues": [
              "kịch Kabuki"
            ],
            "lineTimings": [
              [
                37.49,
                41.52
              ],
              [
                41.9,
                45.79
              ],
              [
                46.18,
                48.91
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
                "emotion": "hesitation",
                "endPitch": "up",
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
                  0.56,
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
            "label": "Mẫu 2 (Trận bóng chày)",
            "values": [
              "<ruby>野球<rt>やきゅう</rt></ruby>"
            ],
            "rawValues": [
              "野球"
            ],
            "viValues": [
              "trận bóng chày"
            ],
            "lineTimings": [
              [
                49.3,
                53.35
              ],
              [
                41.9,
                45.79
              ],
              [
                46.18,
                48.91
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
                "emotion": "hesitation",
                "endPitch": "up",
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
                  0.56,
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
            "label": "Mẫu 3 (Buổi hòa nhạc)",
            "values": [
              "コンサート"
            ],
            "rawValues": [
              "コンサート"
            ],
            "viValues": [
              "buổi hòa nhạc"
            ],
            "lineTimings": [
              [
                53.74,
                57.84
              ],
              [
                41.9,
                45.79
              ],
              [
                46.18,
                48.91
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
                "emotion": "hesitation",
                "endPitch": "up",
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
                  0.56,
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq9-1",
        "question": "Chủ đề chính của bài hội thoại Bài 9「<ruby>残念<rt>ざんねん</rt></ruby>ですが」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Thật đáng tiếc nhưng mà...",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「<ruby>残念<rt>ざんねん</rt></ruby>ですが」trong Bài 9 có nghĩa là \"Thật đáng tiếc nhưng mà...\". Bối cảnh: Anh Kimura có 2 vé buổi hòa nhạc cổ điển vào tối Chủ nhật nên gọi điện mời chị Sato đi cùng, nhưng chị Sato đã có hẹn từ trước nên từ chối khéo léo."
      },
      {
        "id": "kq9-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。」(Alo, tôi là Kimura đây, có chị Sato ở nhà không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ、<ruby>大好き<rt>だいすき</rt></ruby>ですよ。",
          "チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。",
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。」(Vâng, Sato nghe đây. À anh Kimura đấy à, chào buổi tối anh.). Nhận ra giọng người quen trên điện thoại."
      },
      {
        "id": "kq9-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。」(Vâng, Sato nghe đây. À anh Kimura đấy à, chào buổi tối anh.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。",
          "ええ、<ruby>大好き<rt>だいすき</rt></ruby>ですよ。",
          "チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。」(Chị Sato này, chị có thích hòa nhạc cổ điển không?). Với tính từ「<ruby>好<rt>す</rt></ruby>き」, đối tượng được yêu thích đi với trợ từ「が」(trong hội thoại có thể lược trợ từ)."
      },
      {
        "id": "kq9-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。」(Chị Sato này, chị có thích hòa nhạc cổ điển không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ、<ruby>大好き<rt>だいすき</rt></ruby>ですよ。",
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。",
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。",
          "チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「ええ、<ruby>大好き<rt>だいすき</rt></ruby>ですよ。」(Vâng, tôi rất thích đấy ạ.). 「<ruby>大好き<rt>だいすき</rt></ruby>」thể hiện mức độ yêu thích rất cao."
      },
      {
        "id": "kq9-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、<ruby>大好き<rt>だいすき</rt></ruby>ですよ。」(Vâng, tôi rất thích đấy ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。",
          "チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。",
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。",
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。」(Vì tôi có 2 tấm vé nên tối Chủ nhật này chị đi cùng tôi nhé?). 「Mệnh đề 1 から、Mệnh đề 2」dùng để nêu lý do dẫn đến lời mời."
      },
      {
        "id": "kq9-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>一緒に<rt>いっしょに</rt></ruby> いかがですか。」(Vì tôi có 2 tấm vé nên tối Chủ nhật này chị đi cùng tôi nhé?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。",
          "<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>ですか。",
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>ですか。」(Tối Chủ nhật này sao ạ?). Lặp lại thời gian với ngữ điệu trầm xuống báo hiệu sự khó xử."
      },
      {
        "id": "kq9-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>ですか。」(Tối Chủ nhật này sao ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。",
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。",
          "すみません、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>は ちょっと <ruby>都合<rt>つごう</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>いです。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「すみません、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>は ちょっと <ruby>都合<rt>つごう</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>いです。」(Xin lỗi anh, tối Chủ nhật thì hơi bất tiện cho tôi rồi.). 「<ruby>都合が悪い<rt>つごうがわるい</rt></ruby>」(つごうがわるい) là cụm từ lịch sự chỉ việc bận hoặc không thu xếp được."
      },
      {
        "id": "kq9-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません、<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>は ちょっと <ruby>都合<rt>つごう</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>いです。」(Xin lỗi anh, tối Chủ nhật thì hơi bất tiện cho tôi rồi.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。",
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。",
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「そうですか。」(Vậy sao.). Thông cảm với lịch trình của đối phương."
      },
      {
        "id": "kq9-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。」(Vậy sao.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。",
          "<ruby>友だち<rt>ともだち</rt></ruby>と <ruby>約束<rt>やくそく</rt></ruby>が ありますから、<ruby>残念<rt>ざんねん</rt></ruby>ですが…。",
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。",
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「<ruby>友だち<rt>ともだち</rt></ruby>と <ruby>約束<rt>やくそく</rt></ruby>が ありますから、<ruby>残念<rt>ざんねん</rt></ruby>ですが…。」(Vì tôi trót có hẹn với bạn mất rồi, thật đáng tiếc quá...). Người Nhật thường bỏ lửng câu sau「<ruby>残念<rt>ざんねん</rt></ruby>ですが…」để từ chối mềm mỏng, tránh nói thẳng \"Tôi không đi\"."
      },
      {
        "id": "kq9-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>友だち<rt>ともだち</rt></ruby>と <ruby>約束<rt>やくそく</rt></ruby>が ありますから、<ruby>残念<rt>ざんねん</rt></ruby>ですが…。」(Vì tôi trót có hẹn với bạn mất rồi, thật đáng tiếc quá...), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい、<ruby>佐藤<rt>さとう</rt></ruby>です。ああ、<ruby>木村<rt>きむら</rt></ruby>さん、こんばんは。",
          "<ruby>佐藤<rt>さとう</rt></ruby>さん、クラシックの コンサート、<ruby>好<rt>す</rt></ruby>きですか。",
          "また <ruby>今度<rt>こんど</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "もしもし、<ruby>木村<rt>きむら</rt></ruby>ですが、<ruby>佐藤<rt>さとう</rt></ruby>さん、いらっしゃいますか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 9, câu đáp chuẩn xác là:「また <ruby>今度<rt>こんど</rt></ruby> <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Hẹn anh vào một dịp khác nhé.). 「<ruby>また今度お願いします<rt>またこんどおねがいします</rt></ruby>」giúp giữ gìn mối quan hệ tốt đẹp sau khi từ chối lời mời."
      }
    ]
  },
  "kaiwa-10": {
    "id": "kaiwa-10",
    "lesson": 10,
    "level": "Sơ cấp 1",
    "titleJp": "チリソースは ありませんか",
    "titleVi": "Có tương ớt không ạ?",
    "subtitleVi": "Hỏi vị trí kệ hàng trong siêu thị",
    "sceneType": "convenience_store",
    "context": "Anh Miller vào siêu thị tìm mua tương ớt (Chili sauce) để nấu ăn. Anh hỏi người dân đường đến siêu thị châu Á, sau đó hỏi nhân viên siêu thị vị trí chính xác trên kệ.",
    "objectives": [
      "Biết cách hỏi một địa điểm có ở quanh khu vực này không: この <ruby>近<rt>ちか</rt></ruby>くに ～が ありますか.",
      "Diễn tả vị trí chi tiết bằng các danh từ chỉ vị trí: <ruby>隣<rt>となり</rt></ruby>、<ruby>前<rt>まえ</rt></ruby>、<ruby>後<rt>うし</rt></ruby>ろ、<ruby>中<rt>なか</rt></ruby>、<ruby>上<rt>うえ</rt></ruby>、<ruby>下<rt>した</rt></ruby>、<ruby>間<rt>あいだ</rt></ruby>.",
      "Hỏi nhân viên cửa hàng xem có mặt hàng mình cần không: ～は ありませんか."
    ],
    "audioSrc": "audio/kaiwa/lesson_10.mp3",
    "audioDuration": 26.35,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_10.mp3",
    "renshuuAudioDuration": 55.3,
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
        "id": "k10-1",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "すみません。アジアストアは どこですか。",
        "rawJp": "すみません。アジアストアは どこですか。",
        "vi": "Xin lỗi, cửa hàng Asia Store ở đâu vậy ạ?",
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
        ],
        "explanation": "Hỏi đường người đi bộ trên phố.",
        "time": [
          0,
          3.34
        ]
      },
      {
        "id": "k10-2",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "question",
        "jp": "アジアストアですか。",
        "rawJp": "アジアストアですか。",
        "vi": "Cửa hàng Asia Store hả anh?",
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
        "explanation": "Xác nhận lại tên địa điểm người hỏi đang tìm.",
        "time": [
          3.79,
          5.09
        ]
      },
      {
        "id": "k10-3",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
        "rawJp": "あそこに 白い ビルが ありますね。",
        "vi": "Ở đằng kia có một tòa nhà màu trắng đúng không nào.",
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
        "explanation": "Chỉ vào mốc định hướng dễ nhìn thấy trước tiên.",
        "time": [
          5.4,
          7.34
        ]
      },
      {
        "id": "k10-4",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "その ビルの <ruby>中<rt>なか</rt></ruby>です。",
        "rawJp": "その ビルの 中です。",
        "vi": "Nó nằm ở bên trong tòa nhà đó đấy.",
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
        "explanation": "「ビルの <ruby>中<rt>なか</rt></ruby>」nghĩa là bên trong tòa nhà.",
        "time": [
          7.66,
          9.22
        ]
      },
      {
        "id": "k10-5",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "そうですか。どうも すみません。",
        "rawJp": "そうですか。どうも すみません。",
        "vi": "Thế ạ. Xin cảm ơn chị nhiều.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.55,
          0.51,
          0.48,
          0.47,
          0.5,
          0.52,
          0.51,
          0.48,
          0.43,
          0.32
        ],
        "explanation": "「どうも すみません」vừa mang nghĩa xin lỗi vì làm phiền, vừa mang nghĩa cảm ơn.",
        "time": [
          9.6,
          12.46
        ]
      },
      {
        "id": "k10-6",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "いいえ。",
        "rawJp": "いいえ。",
        "vi": "Không có gì đâu ạ.",
        "endPitch": "down",
        "pitchCurve": [
          0.32,
          0.68,
          0.48,
          0.35
        ],
        "explanation": "Đáp lại lời cảm ơn.",
        "time": [
          12.84,
          13.54
        ]
      },
      {
        "id": "k10-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あのう、チリソースは ありませんか。",
        "rawJp": "あのう、チリソースは ありませんか。",
        "vi": "À xin lỗi, cửa hàng mình có tương ớt không ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.29,
          0.62,
          0.58,
          0.55,
          0.5,
          0.47,
          0.47,
          0.5,
          0.52,
          0.51,
          0.48,
          0.44,
          0.41,
          0.56,
          0.85
        ],
        "explanation": "Dùng phủ định「～はありませんか」khi hỏi mua đồ sẽ lịch sự, tránh làm nhân viên khó xử nếu hết hàng.",
        "time": [
          14.04,
          16.97
        ]
      },
      {
        "id": "k10-8",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "はい。<ruby>右<rt>みぎ</rt></ruby>の <ruby>奥<rt>おく</rt></ruby>に スパイスコーナーが あります。",
        "rawJp": "はい。右の 奥に スパイスコーナーが あります。",
        "vi": "Dạ có. Ở phía sâu bên phải có quầy gia vị đấy ạ.",
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
        "explanation": "「<ruby>奥<rt>おく</rt></ruby>」(おく) là phía sâu bên trong của cửa hàng.",
        "time": [
          17.42,
          20.98
        ]
      },
      {
        "id": "k10-9",
        "speakerId": "clerk",
        "speakerBadge": "<ruby>店員<rt>てんいん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "チリソースは <ruby>下<rt>した</rt></ruby>から 2<ruby>段目<rt>だんめ</rt></ruby>です。",
        "rawJp": "チリソースは 下から 2段目です。",
        "vi": "Tương ớt nằm ở ngăn kệ thứ 2 tính từ dưới lên ạ.",
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
        "explanation": "「<ruby>下<rt>した</rt></ruby>から 2<ruby>段目<rt>だんめ</rt></ruby>」(したからにだんめ) là tầng/ngăn kệ thứ 2 tính từ dưới lên.",
        "time": [
          21.29,
          23.83
        ]
      },
      {
        "id": "k10-10",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "わかりました。どうも。",
        "rawJp": "わかりました。どうも。",
        "vi": "Tôi hiểu rồi. Cảm ơn anh/chị.",
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
        "explanation": "Cảm ơn nhân viên sau khi được chỉ vị trí chính xác.",
        "time": [
          24.22,
          26.35
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc10-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi địa điểm quanh đây và chỉ vị trí",
        "context": "Hỏi bưu điện, máy ATM, cửa hàng tiện lợi gần nhà ga.",
        "lines": [
          {
            "id": "rc10-1-l1",
            "speaker": "A",
            "jp": "すみません。この <ruby>近<rt>ちか</rt></ruby>くに <u><ruby>銀行<rt>ぎんこう</rt></ruby></u>が ありますか。",
            "rawJp": "すみません。この 近くに 銀行が ありますか。",
            "vi": "Xin lỗi, gần đây có ngân hàng nào không ạ?"
          },
          {
            "id": "rc10-1-l2",
            "speaker": "B",
            "jp": "ええ、あそこに <u><ruby>高<rt>たか</rt></ruby>い ビル</u>が ありますね。",
            "rawJp": "ええ、あそこに 高い ビルが ありますね。",
            "vi": "Vâng, ở đằng kia có tòa nhà cao tầng đúng không."
          },
          {
            "id": "rc10-1-l3",
            "speaker": "B",
            "jp": "あの <u><ruby>前<rt>まえ</rt></ruby></u>です。",
            "rawJp": "あの 前です。",
            "vi": "Nó ở ngay phía trước tòa nhà đó đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Ngân hàng / Tòa nhà cao / Phía trước)",
            "values": [
              "<ruby>銀行<rt>ぎんこう</rt></ruby>",
              "<ruby>高<rt>たか</rt></ruby>い ビル",
              "<ruby>前<rt>まえ</rt></ruby>"
            ],
            "rawValues": [
              "銀行",
              "高い ビル",
              "前"
            ],
            "viValues": [
              "ngân hàng",
              "tòa nhà cao",
              "phía trước"
            ],
            "lineTimings": [
              [
                0,
                3.53
              ],
              [
                3.91,
                6.89
              ],
              [
                7.27,
                8.52
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
                "emotion": "hesitation",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.62,
                  0.54,
                  0.42,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Bưu điện / Siêu thị / Bên cạnh)",
            "values": [
              "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
              "スーパー",
              "<ruby>隣<rt>となり</rt></ruby>"
            ],
            "rawValues": [
              "郵便局",
              "スーパー",
              "隣"
            ],
            "viValues": [
              "bưu điện",
              "siêu thị",
              "bên cạnh"
            ],
            "lineTimings": [
              [
                8.9,
                12.7
              ],
              [
                13.08,
                15.72
              ],
              [
                16.1,
                17.52
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
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.48,
                  0.35
                ]
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.62,
                  0.54,
                  0.42,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Trạm điện thoại / Công viên / Bên trong)",
            "values": [
              "<ruby>電話<rt>でんわ</rt></ruby>",
              "<ruby>公園<rt>こうえん</rt></ruby>",
              "<ruby>中<rt>なか</rt></ruby>"
            ],
            "rawValues": [
              "電話",
              "公園",
              "中"
            ],
            "viValues": [
              "điện thoại",
              "công viên",
              "bên trong"
            ],
            "lineTimings": [
              [
                17.9,
                21.22
              ],
              [
                21.6,
                24.29
              ],
              [
                24.67,
                25.92
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
              },
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
                "endPitch": "down",
                "pitchCurve": [
                  0.29,
                  0.62,
                  0.54,
                  0.42,
                  0.32
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc10-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hỏi vị trí đồ vật trong nhà / văn phòng",
        "context": "Tìm đồ dùng cá nhân hoặc văn phòng phẩm.",
        "lines": [
          {
            "id": "rc10-2-l1",
            "speaker": "A",
            "jp": "すみません。<u>セロテープ</u>は どこに ありますか。",
            "rawJp": "すみません。セロテープは どこに ありますか。",
            "vi": "Xin lỗi, băng dính để ở đâu vậy?"
          },
          {
            "id": "rc10-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの <ruby>中<rt>なか</rt></ruby></u>に ありますよ。",
            "rawJp": "引き出しの 中に ありますよ。",
            "vi": "Có ở bên trong ngăn kéo đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Băng dính / Trong ngăn kéo)",
            "values": [
              "セロテープ",
              "<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの <ruby>中<rt>なか</rt></ruby>"
            ],
            "rawValues": [
              "セロテープ",
              "引き出しの 中"
            ],
            "viValues": [
              "băng dính",
              "trong ngăn kéo"
            ],
            "lineTimings": [
              [
                26.3,
                29.38
              ],
              [
                29.76,
                31.73
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
            "label": "Mẫu 2 (Từ điển / Trên giá sách)",
            "values": [
              "<ruby>辞書<rt>じしょ</rt></ruby>",
              "<ruby>本棚<rt>ほんだな</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>"
            ],
            "rawValues": [
              "辞書",
              "本棚の 上"
            ],
            "viValues": [
              "từ điển",
              "trên giá sách"
            ],
            "lineTimings": [
              [
                32.11,
                34.85
              ],
              [
                35.23,
                37.15
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
            "label": "Mẫu 3 (Cái kéo / Cạnh máy điện thoại)",
            "values": [
              "はさみ",
              "<ruby>電話<rt>でんわ</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>"
            ],
            "rawValues": [
              "はさみ",
              "電話の 隣"
            ],
            "viValues": [
              "cái kéo",
              "cạnh điện thoại"
            ],
            "lineTimings": [
              [
                37.54,
                40.37
              ],
              [
                40.75,
                42.74
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
          }
        ]
      },
      {
        "id": "rc10-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi vị trí của một người hiện đang ở đâu",
        "context": "Hỏi đồng nghiệp xem anh Miller đang ở phòng nào.",
        "lines": [
          {
            "id": "rc10-3-l1",
            "speaker": "A",
            "jp": "<u>ミラー</u>さんは どこに いますか。",
            "rawJp": "ミラーさんは どこに いますか。",
            "vi": "Anh Miller đang ở đâu thế?"
          },
          {
            "id": "rc10-3-l2",
            "speaker": "B",
            "jp": "<u><ruby>会議室<rt>かいぎしつ</rt></ruby></u>に いますよ。",
            "rawJp": "会議室に いますよ。",
            "vi": "Anh ấy đang ở trong phòng họp đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Miller / Phòng họp)",
            "values": [
              "ミラー",
              "<ruby>会議室<rt>かいぎしつ</rt></ruby>"
            ],
            "rawValues": [
              "ミラー",
              "会議室"
            ],
            "viValues": [
              "Miller",
              "phòng họp"
            ],
            "lineTimings": [
              [
                43.13,
                45.05
              ],
              [
                45.43,
                46.87
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
                  0.53,
                  0.49,
                  0.48,
                  0.35
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Trưởng phòng / Phòng Giám đốc)",
            "values": [
              "<ruby>部長<rt>ぶちょう</rt></ruby>",
              "<ruby>社長<rt>しゃちょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>"
            ],
            "rawValues": [
              "部長",
              "社長室"
            ],
            "viValues": [
              "Trưởng phòng",
              "phòng Giám đốc"
            ],
            "lineTimings": [
              [
                47.26,
                49.25
              ],
              [
                49.63,
                51.14
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
            "label": "Mẫu 3 (Chị Sato / Quầy lễ tân)",
            "values": [
              "<ruby>佐藤<rt>さとう</rt></ruby>",
              "<ruby>受付<rt>うけつけ</rt></ruby>"
            ],
            "rawValues": [
              "佐藤",
              "受付"
            ],
            "viValues": [
              "Sato",
              "quầy lễ tân"
            ],
            "lineTimings": [
              [
                51.53,
                53.57
              ],
              [
                53.95,
                55.3
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
                  0.62,
                  0.58,
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
        "id": "kq10-1",
        "question": "Chủ đề chính của bài hội thoại Bài 10「チリソースは ありませんか」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Có tương ớt không ạ?",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「チリソースは ありませんか」trong Bài 10 có nghĩa là \"Có tương ớt không ạ?\". Bối cảnh: Anh Miller vào siêu thị tìm mua tương ớt (Chili sauce) để nấu ăn. Anh hỏi người dân đường đến siêu thị châu Á, sau đó hỏi nhân viên siêu thị vị trí chính xác trên kệ."
      },
      {
        "id": "kq10-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。アジアストアは どこですか。」(Xin lỗi, cửa hàng Asia Store ở đâu vậy ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
          "その ビルの <ruby>中<rt>なか</rt></ruby>です。",
          "そうですか。どうも すみません。",
          "アジアストアですか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「アジアストアですか。」(Cửa hàng Asia Store hả anh?). Xác nhận lại tên địa điểm người hỏi đang tìm."
      },
      {
        "id": "kq10-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「アジアストアですか。」(Cửa hàng Asia Store hả anh?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
          "すみません。アジアストアは どこですか。",
          "その ビルの <ruby>中<rt>なか</rt></ruby>です。",
          "そうですか。どうも すみません。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。」(Ở đằng kia có một tòa nhà màu trắng đúng không nào.). Chỉ vào mốc định hướng dễ nhìn thấy trước tiên."
      },
      {
        "id": "kq10-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。」(Ở đằng kia có một tòa nhà màu trắng đúng không nào.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですか。どうも すみません。",
          "その ビルの <ruby>中<rt>なか</rt></ruby>です。",
          "すみません。アジアストアは どこですか。",
          "アジアストアですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「その ビルの <ruby>中<rt>なか</rt></ruby>です。」(Nó nằm ở bên trong tòa nhà đó đấy.). 「ビルの <ruby>中<rt>なか</rt></ruby>」nghĩa là bên trong tòa nhà."
      },
      {
        "id": "kq10-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「その ビルの <ruby>中<rt>なか</rt></ruby>です。」(Nó nằm ở bên trong tòa nhà đó đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "アジアストアですか。",
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
          "そうですか。どうも すみません。",
          "すみません。アジアストアは どこですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「そうですか。どうも すみません。」(Thế ạ. Xin cảm ơn chị nhiều.). 「どうも すみません」vừa mang nghĩa xin lỗi vì làm phiền, vừa mang nghĩa cảm ơn."
      },
      {
        "id": "kq10-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。どうも すみません。」(Thế ạ. Xin cảm ơn chị nhiều.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。アジアストアは どこですか。",
          "アジアストアですか。",
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
          "いいえ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「いいえ。」(Không có gì đâu ạ.). Đáp lại lời cảm ơn."
      },
      {
        "id": "kq10-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「いいえ。」(Không có gì đâu ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、チリソースは ありませんか。",
          "すみません。アジアストアは どこですか。",
          "アジアストアですか。",
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「あのう、チリソースは ありませんか。」(À xin lỗi, cửa hàng mình có tương ớt không ạ?). Dùng phủ định「～はありませんか」khi hỏi mua đồ sẽ lịch sự, tránh làm nhân viên khó xử nếu hết hàng."
      },
      {
        "id": "kq10-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「あのう、チリソースは ありませんか。」(À xin lỗi, cửa hàng mình có tương ớt không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
          "はい。<ruby>右<rt>みぎ</rt></ruby>の <ruby>奥<rt>おく</rt></ruby>に スパイスコーナーが あります。",
          "すみません。アジアストアは どこですか。",
          "アジアストアですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「はい。<ruby>右<rt>みぎ</rt></ruby>の <ruby>奥<rt>おく</rt></ruby>に スパイスコーナーが あります。」(Dạ có. Ở phía sâu bên phải có quầy gia vị đấy ạ.). 「<ruby>奥<rt>おく</rt></ruby>」(おく) là phía sâu bên trong của cửa hàng."
      },
      {
        "id": "kq10-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。<ruby>右<rt>みぎ</rt></ruby>の <ruby>奥<rt>おく</rt></ruby>に スパイスコーナーが あります。」(Dạ có. Ở phía sâu bên phải có quầy gia vị đấy ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "アジアストアですか。",
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
          "チリソースは <ruby>下<rt>した</rt></ruby>から 2<ruby>段目<rt>だんめ</rt></ruby>です。",
          "すみません。アジアストアは どこですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「チリソースは <ruby>下<rt>した</rt></ruby>から 2<ruby>段目<rt>だんめ</rt></ruby>です。」(Tương ớt nằm ở ngăn kệ thứ 2 tính từ dưới lên ạ.). 「<ruby>下<rt>した</rt></ruby>から 2<ruby>段目<rt>だんめ</rt></ruby>」(したからにだんめ) là tầng/ngăn kệ thứ 2 tính từ dưới lên."
      },
      {
        "id": "kq10-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「チリソースは <ruby>下<rt>した</rt></ruby>から 2<ruby>段目<rt>だんめ</rt></ruby>です。」(Tương ớt nằm ở ngăn kệ thứ 2 tính từ dưới lên ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。アジアストアは どこですか。",
          "アジアストアですか。",
          "あそこに <ruby>白<rt>しろ</rt></ruby>い ビルが ありますね。",
          "わかりました。どうも。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 10, câu đáp chuẩn xác là:「わかりました。どうも。」(Tôi hiểu rồi. Cảm ơn anh/chị.). Cảm ơn nhân viên sau khi được chỉ vị trí chính xác."
      }
    ]
  }
};
  if (!root.KAIWA_DATA) root.KAIWA_DATA = {};
  Object.assign(root.KAIWA_DATA, kaiwa_1_10);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = kaiwa_1_10;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
