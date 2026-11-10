/**
 * Dữ liệu Hội thoại (Kaiwa), Luyện tập C (練習C) & Kiểm tra phản xạ Bài 21 - 30
 * 100% Annotated Furigana (<ruby>)
 */
(function(root) {
  'use strict';
  const kaiwa_21_30 = {
  "kaiwa-21": {
    "id": "kaiwa-21",
    "lesson": 21,
    "level": "Sơ cấp 1",
    "titleJp": "わたしも そう <ruby>思<rt>おも</rt></ruby>います",
    "titleVi": "Tôi cũng nghĩ như vậy",
    "subtitleVi": "Bình luận trận bóng đá & bày tỏ quan điểm",
    "sceneType": "festival_opinion",
    "context": "Anh Santos và ông Matsumoto vừa xem xong trận giao hữu bóng đá giữa đội tuyển Nhật Bản và Brazil trên tivi nên cùng thảo luận về kết quả trận đấu và sự tiến bộ của cầu thủ Nhật.",
    "objectives": [
      "Nêu ý kiến, phỏng đoán cá nhân bằng mẫu: [Thể thông thường] と <ruby>思<rt>おも</rt></ruby>います.",
      "Trích dẫn lời nói trực tiếp và gián tiếp bằng: ～と <ruby>言<rt>い</rt></ruby>いました.",
      "Xác nhận sự đồng tình của người nghe bằng ～でしょう？ và đồng ý bằng: わたしも そう <ruby>思<rt>おも</rt></ruby>います."
    ],
    "audioSrc": "audio/kaiwa/lesson_21.mp3",
    "audioDuration": 31.34,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_21.mp3",
    "renshuuAudioDuration": 48.53,
    "characters": [
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
        "id": "k21-1",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "statement",
        "jp": "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
        "rawJp": "きのうの サッカーの 試合、見ましたか。",
        "vi": "Trận bóng đá tối hôm qua anh có xem không?",
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
        "explanation": "Mở đầu cuộc trò chuyện bằng sự kiện thể thao tối qua.",
        "time": [
          0,
          2.9
        ]
      },
      {
        "id": "k21-2",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。",
        "rawJp": "ええ、見ました。いい 試合でしたね。",
        "vi": "Vâng, tôi có xem ạ. Một trận đấu thật hay ông nhỉ.",
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
        "explanation": "「いい<ruby>試合<rt>しあい</rt></ruby>でしたね」bày tỏ sự hào hứng với chất lượng trận đấu.",
        "time": [
          3.36,
          6.24
        ]
      },
      {
        "id": "k21-3",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。",
        "rawJp": "でも、残念でした。日本は 負けましたからね。",
        "vi": "Nhưng mà tiếc thật đấy. Vì đội tuyển Nhật đã thua mất rồi.",
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
        "explanation": "「<ruby>負<rt>ま</rt></ruby>けました」(まけました): thua cuộc (trái nghĩa với <ruby>勝<rt>か</rt></ruby>ちました: thắng).",
        "time": [
          6.62,
          10.78
        ]
      },
      {
        "id": "k21-4",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "ええ。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>選手<rt>せんしゅ</rt></ruby>も とても <ruby>強<rt>つよ</rt></ruby>くなったと <ruby>思<rt>おも</rt></ruby>いますよ。",
        "rawJp": "ええ。でも、日本の 選手も とても 強くなったと 思いますよ。",
        "vi": "Vâng. Nhưng tôi nghĩ các cầu thủ Nhật Bản cũng đã trở nên mạnh hơn rất nhiều rồi đấy ạ.",
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
        "explanation": "「<ruby>強<rt>つよ</rt></ruby>くなったと<ruby>思<rt>おも</rt></ruby>います」: kết hợp biến đổi trạng thái (A-くなった) với と<ruby>思<rt>おも</rt></ruby>います.",
        "time": [
          11.16,
          15.84
        ]
      },
      {
        "id": "k21-5",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "そうですか。",
        "rawJp": "そうですか。",
        "vi": "Anh thấy vậy sao.",
        "endPitch": "down",
        "pitchCurve": [
          0.35,
          0.73,
          0.65,
          0.53,
          0.38
        ],
        "explanation": "Ông Matsumoto vui khi nghe nhận xét tích cực từ người Brazil.",
        "time": [
          16.22,
          17.33
        ]
      },
      {
        "id": "k21-6",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ。<ruby>日本<rt>にほん</rt></ruby>の サッカーは これから もっと おもしろくなると <ruby>思<rt>おも</rt></ruby>います。",
        "rawJp": "ええ。日本の サッカーは これから もっと おもしろくなると 思います。",
        "vi": "Vâng. Tôi nghĩ bóng đá Nhật Bản từ nay về sau sẽ còn thú vị hơn nữa.",
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
        "explanation": "Dự đoán về tương lai bằng「おもしろくなると<ruby>思<rt>おも</rt></ruby>います」.",
        "time": [
          17.71,
          22.44
        ]
      },
      {
        "id": "k21-7",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "わたしも そう <ruby>思<rt>おも</rt></ruby>います。",
        "rawJp": "わたしも そう 思います。",
        "vi": "Tôi cũng nghĩ như vậy đấy.",
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
        "explanation": "「わたしもそう<ruby>思<rt>おも</rt></ruby>います」là câu đồng tình hoàn toàn với ý kiến của người đối diện.",
        "time": [
          22.82,
          24.72
        ]
      },
      {
        "id": "k21-8",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>今度<rt>こんど</rt></ruby> <ruby>一緒に<rt>いっしょに</rt></ruby> スタジアムへ <ruby>試合<rt>しあい</rt></ruby>を <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか。",
        "rawJp": "今度 一緒に スタジアムへ 試合を 見に 行きませんか。",
        "vi": "Lần tới chúng ta cùng đến sân vận động xem trực tiếp trận đấu nhé?",
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
        "explanation": "Rủ đi xem bóng đá trực tiếp tại sân vận động.",
        "time": [
          25.1,
          28.25
        ]
      },
      {
        "id": "k21-9",
        "speakerId": "matsumoto",
        "speakerBadge": "<ruby>松本<rt>まつもと</rt></ruby>",
        "speakerColor": "blue",
        "voice": "en-AU-WilliamMultilingualNeural",
        "emotion": "exclamation",
        "jp": "いいですね。ぜひ <ruby>行<rt>い</rt></ruby>きましょう。",
        "rawJp": "いいですね。ぜひ 行きましょう。",
        "vi": "Hay quá. Nhất định chúng ta cùng đi nhé.",
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
        "explanation": "Đồng ý lời mời một cách nhiệt tình.",
        "time": [
          28.7,
          31.34
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc21-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Nêu ý kiến cá nhân và bày tỏ đồng tình (と <ruby>思<rt>おも</rt></ruby>います)",
        "context": "Thảo luận về công việc, giao thông hoặc đời sống.",
        "lines": [
          {
            "id": "rc21-1-l1",
            "speaker": "A",
            "jp": "<u><ruby>日本<rt>にほん</rt></ruby>の <ruby>物価<rt>ぶっか</rt></ruby>は <ruby>高<rt>たか</rt></ruby>い</u>と <ruby>思<rt>おも</rt></ruby>います。",
            "rawJp": "日本の 物価は 高いと 思います。",
            "vi": "Tôi nghĩ vật giá ở Nhật Bản đắt đỏ."
          },
          {
            "id": "rc21-1-l2",
            "speaker": "B",
            "jp": "わたしも そう <ruby>思<rt>おも</rt></ruby>います。",
            "rawJp": "わたしも そう 思います。",
            "vi": "Tôi cũng nghĩ như vậy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Vật giá ở Nhật đắt đỏ)",
            "values": [
              "<ruby>日本<rt>にほん</rt></ruby>の <ruby>物価<rt>ぶっか</rt></ruby>は <ruby>高<rt>たか</rt></ruby>い"
            ],
            "rawValues": [
              "日本の 物価は 高い"
            ],
            "viValues": [
              "vật giá ở Nhật đắt đỏ"
            ],
            "lineTimings": [
              [
                0,
                2.66
              ],
              [
                3.05,
                5.42
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
                  0.58,
                  0.55,
                  0.5,
                  0.46,
                  0.46,
                  0.47,
                  0.43,
                  0.32
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Tàu điện Nhật Bản rất tiện lợi)",
            "values": [
              "<ruby>日本<rt>にほん</rt></ruby>の <ruby>電車<rt>でんしゃ</rt></ruby>は とても <ruby>便利<rt>べんり</rt></ruby>だ"
            ],
            "rawValues": [
              "日本の 電車は とても 便利だ"
            ],
            "viValues": [
              "tàu điện Nhật rất tiện lợi"
            ],
            "lineTimings": [
              [
                5.81,
                9.07
              ],
              [
                9.46,
                11.59
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
              }
            ]
          },
          {
            "label": "Mẫu 3 (Sân bay mới ở xa trung tâm)",
            "values": [
              "<ruby>新<rt>あたら</rt></ruby>しい <ruby>空港<rt>くうこう</rt></ruby>は <ruby>交通<rt>こうつう</rt></ruby>が <ruby>不便<rt>ふべん</rt></ruby>だ"
            ],
            "rawValues": [
              "新しい 空港は 交通が 不便だ"
            ],
            "viValues": [
              "sân bay mới giao thông bất tiện"
            ],
            "lineTimings": [
              [
                11.98,
                16.1
              ],
              [
                3.05,
                5.42
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
                "emotion": "empathy_apology",
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
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc21-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Truyền đạt lại lời nhắn của người khác (と <ruby>言<rt>い</rt></ruby>いました)",
        "context": "Báo lại lời nhắn của đồng nghiệp hoặc cấp trên.",
        "lines": [
          {
            "id": "rc21-2-l1",
            "speaker": "A",
            "jp": "<u>ミラー</u>さんは どこですか。",
            "rawJp": "ミラーさんは どこですか。",
            "vi": "Anh Miller đâu rồi nhỉ?"
          },
          {
            "id": "rc21-2-l2",
            "speaker": "B",
            "jp": "「<u><ruby>銀行<rt>ぎんこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く</u>」と <ruby>言<rt>い</rt></ruby>いましたよ。<u>3<ruby>時<rt>じ</rt></ruby>に <ruby>戻<rt>もど</rt></ruby>る</u>と <ruby>思<rt>おも</rt></ruby>います。",
            "rawJp": "「銀行へ 行く」と 言いましたよ。3時に 戻ると 思います。",
            "vi": "Anh ấy nói là \"Tôi đi ngân hàng\" đấy. Tôi nghĩ 3 giờ anh ấy sẽ quay lại."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Miller / Đi ngân hàng / 3 giờ quay lại)",
            "values": [
              "ミラー",
              "<ruby>銀行<rt>ぎんこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く",
              "3<ruby>時<rt>じ</rt></ruby>に <ruby>戻<rt>もど</rt></ruby>る"
            ],
            "rawValues": [
              "ミラー",
              "銀行へ 行く",
              "3時に 戻る"
            ],
            "viValues": [
              "Miller",
              "đi ngân hàng",
              "3 giờ quay lại"
            ],
            "lineTimings": [
              [
                16.49,
                18.05
              ],
              [
                18.43,
                23.02
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
            "label": "Mẫu 2 (Sato / Đi bưu điện / Sắp về)",
            "values": [
              "<ruby>佐藤<rt>さとう</rt></ruby>",
              "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く",
              "すぐ <ruby>帰<rt>かえ</rt></ruby>る"
            ],
            "rawValues": [
              "佐藤",
              "郵便局へ 行く",
              "すぐ 帰る"
            ],
            "viValues": [
              "Sato",
              "đi bưu điện",
              "sắp về"
            ],
            "lineTimings": [
              [
                23.4,
                25.01
              ],
              [
                25.39,
                29.98
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
            "label": "Mẫu 3 (Trưởng phòng / Họp ở phòng họp / 4 giờ xong)",
            "values": [
              "<ruby>部長<rt>ぶちょう</rt></ruby>",
              "<ruby>会議室<rt>かいぎしつ</rt></ruby>に いる",
              "4<ruby>時<rt>じ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わる"
            ],
            "rawValues": [
              "部長",
              "会議室に いる",
              "4時に 終わる"
            ],
            "viValues": [
              "Trưởng phòng",
              "ở phòng họp",
              "4 giờ xong"
            ],
            "lineTimings": [
              [
                30.36,
                31.92
              ],
              [
                32.3,
                36.84
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
        "id": "rc21-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Xác nhận thông tin bằng ～でしょう？",
        "context": "Xác nhận điều mà cả hai bên cùng biết.",
        "lines": [
          {
            "id": "rc21-3-l1",
            "speaker": "A",
            "jp": "あした パーティーが あるでしょう？",
            "rawJp": "あした パーティーが あるでしょう？",
            "vi": "Ngày mai có bữa tiệc đúng không nhỉ?"
          },
          {
            "id": "rc21-3-l2",
            "speaker": "B",
            "jp": "ええ。<u>6<ruby>時<rt>じ</rt></ruby>から ホテルで</u> ありますよ。",
            "rawJp": "ええ。6時から ホテルで ありますよ。",
            "vi": "Vâng. Diễn ra từ 6 giờ ở khách sạn đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (6 giờ ở khách sạn)",
            "values": [
              "6<ruby>時<rt>じ</rt></ruby>から ホテルで"
            ],
            "rawValues": [
              "6時から ホテルで"
            ],
            "viValues": [
              "từ 6 giờ ở khách sạn"
            ],
            "lineTimings": [
              [
                37.22,
                39
              ],
              [
                39.38,
                42
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
            "label": "Mẫu 2 (7 giờ ở nhà hàng)",
            "values": [
              "7<ruby>時<rt>じ</rt></ruby>から レストランで"
            ],
            "rawValues": [
              "7時から レストランで"
            ],
            "viValues": [
              "từ 7 giờ ở nhà hàng"
            ],
            "lineTimings": [
              [
                37.22,
                39
              ],
              [
                42.38,
                45.19
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
            "label": "Mẫu 3 (5 giờ rưỡi ở phòng họp)",
            "values": [
              "5<ruby>時半<rt>じはん</rt></ruby>から <ruby>会議室<rt>かいぎしつ</rt></ruby>で"
            ],
            "rawValues": [
              "5時半から 会議室で"
            ],
            "viValues": [
              "từ 5 rưỡi ở phòng họp"
            ],
            "lineTimings": [
              [
                37.22,
                39
              ],
              [
                45.58,
                48.53
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq21-1",
        "question": "Chủ đề chính của bài hội thoại Bài 21「わたしも そう <ruby>思<rt>おも</rt></ruby>います」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Tôi cũng nghĩ như vậy",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「わたしも そう <ruby>思<rt>おも</rt></ruby>います」trong Bài 21 có nghĩa là \"Tôi cũng nghĩ như vậy\". Bối cảnh: Anh Santos và ông Matsumoto vừa xem xong trận giao hữu bóng đá giữa đội tuyển Nhật Bản và Brazil trên tivi nên cùng thảo luận về kết quả trận đấu và sự tiến bộ của cầu thủ Nhật."
      },
      {
        "id": "kq21-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。」(Trận bóng đá tối hôm qua anh có xem không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>選手<rt>せんしゅ</rt></ruby>も とても <ruby>強<rt>つよ</rt></ruby>くなったと <ruby>思<rt>おも</rt></ruby>いますよ。",
          "そうですか。",
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。",
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。」(Vâng, tôi có xem ạ. Một trận đấu thật hay ông nhỉ.). 「いい<ruby>試合<rt>しあい</rt></ruby>でしたね」bày tỏ sự hào hứng với chất lượng trận đấu."
      },
      {
        "id": "kq21-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。」(Vâng, tôi có xem ạ. Một trận đấu thật hay ông nhỉ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
          "ええ。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>選手<rt>せんしゅ</rt></ruby>も とても <ruby>強<rt>つよ</rt></ruby>くなったと <ruby>思<rt>おも</rt></ruby>いますよ。",
          "そうですか。",
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。」(Nhưng mà tiếc thật đấy. Vì đội tuyển Nhật đã thua mất rồi.). 「<ruby>負<rt>ま</rt></ruby>けました」(まけました): thua cuộc (trái nghĩa với <ruby>勝<rt>か</rt></ruby>ちました: thắng)."
      },
      {
        "id": "kq21-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。」(Nhưng mà tiếc thật đấy. Vì đội tuyển Nhật đã thua mất rồi.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>選手<rt>せんしゅ</rt></ruby>も とても <ruby>強<rt>つよ</rt></ruby>くなったと <ruby>思<rt>おも</rt></ruby>いますよ。",
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。",
          "そうですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「ええ。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>選手<rt>せんしゅ</rt></ruby>も とても <ruby>強<rt>つよ</rt></ruby>くなったと <ruby>思<rt>おも</rt></ruby>いますよ。」(Vâng. Nhưng tôi nghĩ các cầu thủ Nhật Bản cũng đã trở nên mạnh hơn rất nhiều rồi đấy ạ.). 「<ruby>強<rt>つよ</rt></ruby>くなったと<ruby>思<rt>おも</rt></ruby>います」: kết hợp biến đổi trạng thái (A-くなった) với と<ruby>思<rt>おも</rt></ruby>います."
      },
      {
        "id": "kq21-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>選手<rt>せんしゅ</rt></ruby>も とても <ruby>強<rt>つよ</rt></ruby>くなったと <ruby>思<rt>おも</rt></ruby>いますよ。」(Vâng. Nhưng tôi nghĩ các cầu thủ Nhật Bản cũng đã trở nên mạnh hơn rất nhiều rồi đấy ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。",
          "そうですか。",
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「そうですか。」(Anh thấy vậy sao.). Ông Matsumoto vui khi nghe nhận xét tích cực từ người Brazil."
      },
      {
        "id": "kq21-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。」(Anh thấy vậy sao.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。",
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。",
          "ええ。<ruby>日本<rt>にほん</rt></ruby>の サッカーは これから もっと おもしろくなると <ruby>思<rt>おも</rt></ruby>います。",
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「ええ。<ruby>日本<rt>にほん</rt></ruby>の サッカーは これから もっと おもしろくなると <ruby>思<rt>おも</rt></ruby>います。」(Vâng. Tôi nghĩ bóng đá Nhật Bản từ nay về sau sẽ còn thú vị hơn nữa.). Dự đoán về tương lai bằng「おもしろくなると<ruby>思<rt>おも</rt></ruby>います」."
      },
      {
        "id": "kq21-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。<ruby>日本<rt>にほん</rt></ruby>の サッカーは これから もっと おもしろくなると <ruby>思<rt>おも</rt></ruby>います。」(Vâng. Tôi nghĩ bóng đá Nhật Bản từ nay về sau sẽ còn thú vị hơn nữa.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。",
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。",
          "わたしも そう <ruby>思<rt>おも</rt></ruby>います。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「わたしも そう <ruby>思<rt>おも</rt></ruby>います。」(Tôi cũng nghĩ như vậy đấy.). 「わたしもそう<ruby>思<rt>おも</rt></ruby>います」là câu đồng tình hoàn toàn với ý kiến của người đối diện."
      },
      {
        "id": "kq21-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「わたしも そう <ruby>思<rt>おも</rt></ruby>います。」(Tôi cũng nghĩ như vậy đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>今度<rt>こんど</rt></ruby> <ruby>一緒に<rt>いっしょに</rt></ruby> スタジアムへ <ruby>試合<rt>しあい</rt></ruby>を <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか。",
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。",
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「<ruby>今度<rt>こんど</rt></ruby> <ruby>一緒に<rt>いっしょに</rt></ruby> スタジアムへ <ruby>試合<rt>しあい</rt></ruby>を <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか。」(Lần tới chúng ta cùng đến sân vận động xem trực tiếp trận đấu nhé?). Rủ đi xem bóng đá trực tiếp tại sân vận động."
      },
      {
        "id": "kq21-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>今度<rt>こんど</rt></ruby> <ruby>一緒に<rt>いっしょに</rt></ruby> スタジアムへ <ruby>試合<rt>しあい</rt></ruby>を <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか。」(Lần tới chúng ta cùng đến sân vận động xem trực tiếp trận đấu nhé?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。",
          "いいですね。ぜひ <ruby>行<rt>い</rt></ruby>きましょう。",
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 21, câu đáp chuẩn xác là:「いいですね。ぜひ <ruby>行<rt>い</rt></ruby>きましょう。」(Hay quá. Nhất định chúng ta cùng đi nhé.). Đồng ý lời mời một cách nhiệt tình."
      },
      {
        "id": "kq21-10",
        "question": "Để diễn đạt ý: \"Trận bóng đá tối hôm qua anh có xem không?\" trong tình huống Bài 21, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "でも、<ruby>残念<rt>ざんねん</rt></ruby>でした。<ruby>日本<rt>にほん</rt></ruby>は <ruby>負<rt>ま</rt></ruby>けましたからね。",
          "ええ。でも、<ruby>日本<rt>にほん</rt></ruby>の <ruby>選手<rt>せんしゅ</rt></ruby>も とても <ruby>強<rt>つよ</rt></ruby>くなったと <ruby>思<rt>おも</rt></ruby>いますよ。",
          "きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。",
          "ええ、<ruby>見<rt>み</rt></ruby>ました。いい <ruby>試合<rt>しあい</rt></ruby>でしたね。"
        ],
        "correctIdx": 2,
        "explanation": "Câu「きのうの サッカーの <ruby>試合<rt>しあい</rt></ruby>、<ruby>見<rt>み</rt></ruby>ましたか。」dịch nghĩa là \"Trận bóng đá tối hôm qua anh có xem không?\". Mở đầu cuộc trò chuyện bằng sự kiện thể thao tối qua."
      }
    ]
  },
  "kaiwa-22": {
    "id": "kaiwa-22",
    "lesson": 22,
    "level": "Sơ cấp 1",
    "titleJp": "どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか",
    "titleVi": "Anh đang tìm căn phòng như thế nào ạ?",
    "subtitleVi": "Tìm thuê căn hộ tại văn phòng bất động sản",
    "sceneType": "house_hunting",
    "context": "Anh Wang đến văn phòng bất động sản để tìm thuê một căn hộ mới. Anh nêu rõ các điều kiện về tiền thuê, khoảng cách từ nhà ga và độ sáng sủa bằng mệnh đề định ngữ.",
    "objectives": [
      "Sử dụng thành thạo Mệnh đề định ngữ bổ nghĩa cho danh từ ([Mệnh đề thể thông thường] + N).",
      "Trình bày tiêu chí tìm thuê nhà tại Nhật Bản (<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い <ruby>部屋<rt>へや</rt></ruby>、<ruby>家賃<rt>やちん</rt></ruby>が <ruby>安<rt>やす</rt></ruby>い ところ).",
      "Nói lời từ chối đi cùng vì bận việc bằng: <ruby>約束<rt>やくそく</rt></ruby> / <ruby>用事<rt>ようじ</rt></ruby>が あります."
    ],
    "audioSrc": "audio/kaiwa/lesson_22.mp3",
    "audioDuration": 36.29,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_22.mp3",
    "renshuuAudioDuration": 49.39,
    "characters": [
      {
        "id": "realtor",
        "badgeJp": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>",
        "fullNameJp": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>",
        "roleVi": "nhân viên văn phòng bất động sản",
        "color": "blue",
        "gender": "male",
        "pitch": 0.98,
        "rate": 0.96,
        "voice": "ja-JP-KeitaNeural",
        "speechGenVoice": "Keita",
        "voiceName": "Keita-Realtor (Chuyên viên tư vấn)"
      },
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
      }
    ],
    "dialogue": [
      {
        "id": "k22-1",
        "speakerId": "realtor",
        "speakerBadge": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。",
        "rawJp": "いらっしゃいませ。どんな 部屋を お探しですか。",
        "vi": "Xin chào quý khách. Anh đang tìm căn phòng như thế nào ạ?",
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
        "explanation": "「お<ruby>探<rt>さが</rt></ruby>しですか」là cách hỏi tôn kính lịch sự của「<ruby>探<rt>さが</rt></ruby>していますか」.",
        "time": [
          0,
          2.93
        ]
      },
      {
        "id": "k22-2",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "statement",
        "jp": "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。",
        "rawJp": "そうですね。静かで、駅から 近い ところが いいんですが。",
        "vi": "Để xem nào... Tôi muốn tìm nơi nào yên tĩnh và gần nhà ga một chút.",
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
        "explanation": "Mệnh đề định ngữ「<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い」bổ nghĩa cho danh từ「ところ」.",
        "time": [
          3.38,
          8.26
        ]
      },
      {
        "id": "k22-3",
        "speakerId": "realtor",
        "speakerBadge": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
        "rawJp": "家賃は どのくらいが いいですか。",
        "vi": "Tiền thuê nhà hàng tháng khoảng bao nhiêu thì vừa ý anh ạ?",
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
        "explanation": "「<ruby>家賃<rt>やちん</rt></ruby>」(やちん): tiền thuê nhà hàng tháng.",
        "time": [
          8.64,
          10.51
        ]
      },
      {
        "id": "k22-4",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "statement",
        "jp": "8<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ぐらいまでですね。",
        "rawJp": "8万円ぐらいまでですね。",
        "vi": "Khoảng từ 8 vạn yên trở xuống thôi ạ.",
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
        "explanation": "Nêu mức ngân sách tối đa.",
        "time": [
          10.97,
          12.98
        ]
      },
      {
        "id": "k22-5",
        "speakerId": "realtor",
        "speakerBadge": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "ここは いかがですか。<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 10<ruby>分<rt>ふん</rt></ruby>です。",
        "rawJp": "ここは いかがですか。駅から 歩いて 10分です。",
        "vi": "Căn này thì sao ạ? Đi bộ từ nhà ga mất 10 phút.",
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
        "explanation": "Nhân viên đưa bản vẽ mặt bằng căn hộ cho khách xem.",
        "time": [
          13.37,
          16.8
        ]
      },
      {
        "id": "k22-6",
        "speakerId": "realtor",
        "speakerBadge": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "<ruby>家賃<rt>やちん</rt></ruby>は 8<ruby>万<rt>まん</rt></ruby>3<ruby>千<rt>せん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、ダイニングキッチンが <ruby>広<rt>ひろ</rt></ruby>いんですよ。",
        "rawJp": "家賃は 8万3千円ですが、ダイニングキッチンが 広いんですよ。",
        "vi": "Tiền thuê là 8 vạn 3 nghìn yên, nhưng phòng ăn kèm bếp rộng rãi lắm đấy ạ.",
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
        "explanation": "「ダイニングキッチン」(DK): phòng ăn kết hợp nhà bếp.",
        "time": [
          17.11,
          21.65
        ]
      },
      {
        "id": "k22-7",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "hesitation",
        "jp": "うーん、この <ruby>部屋<rt>へや</rt></ruby>は <ruby>明<rt>あか</rt></ruby>るいですか。",
        "rawJp": "うーん、この 部屋は 明るいですか。",
        "vi": "Ừm, căn phòng này có sáng sủa không ạ?",
        "endPitch": "up",
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
          0.56,
          0.85
        ],
        "explanation": "Hỏi về ánh sáng tự nhiên của căn hộ.",
        "time": [
          22.15,
          24.96
        ]
      },
      {
        "id": "k22-8",
        "speakerId": "realtor",
        "speakerBadge": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "ええ、<ruby>南向<rt>みなみむ</rt></ruby>きですから、よく <ruby>日<rt>にち</rt></ruby>が <ruby>当<rt>とう</rt></ruby>たりますよ。",
        "rawJp": "ええ、南向きですから、よく 日が 当たりますよ。",
        "vi": "Vâng, vì quay hướng Nam nên đón nắng tốt lắm ạ.",
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
        "explanation": "Ở Nhật, nhà hướng Nam (<ruby>南向<rt>みなみむ</rt></ruby>き) luôn được ưa chuộng nhất vì ấm áp và sáng sủa.",
        "time": [
          25.42,
          29.04
        ]
      },
      {
        "id": "k22-9",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "question",
        "jp": "そうですか。じゃ、これから <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>っても いいですか。",
        "rawJp": "そうですか。じゃ、これから 見に 行っても いいですか。",
        "vi": "Vậy à. Thế bây giờ tôi đi xem thực tế luôn có được không ạ?",
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
        "explanation": "Xin đi xem phòng trực tiếp.",
        "time": [
          29.42,
          33.36
        ]
      },
      {
        "id": "k22-10",
        "speakerId": "realtor",
        "speakerBadge": "<ruby>不動産屋<rt>ふどうさんや</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "greeting_gratitude",
        "jp": "ええ。<ruby>今<rt>いま</rt></ruby>すぐ ご<ruby>案内<rt>あんない</rt></ruby>します。",
        "rawJp": "ええ。今すぐ ご案内します。",
        "vi": "Vâng được chứ ạ. Tôi xin dẫn anh đi xem ngay bây giờ.",
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
        "explanation": "「ご<ruby>案内<rt>あんない</rt></ruby>します」là khiêm nhường ngữ lịch sự khi dẫn đường cho khách.",
        "time": [
          33.82,
          36.29
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc22-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi về người trong bức ảnh (Mệnh đề định ngữ)",
        "context": "Chỉ vào người đang mặc trang phục hoặc làm hành động cụ thể.",
        "lines": [
          {
            "id": "rc22-1-l1",
            "speaker": "A",
            "jp": "あの <u><ruby>眼鏡<rt>めがね</rt></ruby>を かけて いる</u> <ruby>人<rt>ひと</rt></ruby>は だれですか。",
            "rawJp": "あの 眼鏡を かけて いる 人は だれですか。",
            "vi": "Người đang đeo kính đằng kia là ai thế?"
          },
          {
            "id": "rc22-1-l2",
            "speaker": "B",
            "jp": "<u><ruby>山田<rt>やまだ</rt></ruby></u>さんですよ。",
            "rawJp": "山田さんですよ。",
            "vi": "Là anh Yamada đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đang đeo kính / Yamada)",
            "values": [
              "<ruby>眼鏡<rt>めがね</rt></ruby>を かけて いる",
              "<ruby>山田<rt>やまだ</rt></ruby>"
            ],
            "rawValues": [
              "眼鏡を かけて いる",
              "山田"
            ],
            "viValues": [
              "đang đeo kính",
              "Yamada"
            ],
            "lineTimings": [
              [
                0,
                2.98
              ],
              [
                3.36,
                4.63
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
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
            "label": "Mẫu 2 (Đang mặc kimono / Kimura)",
            "values": [
              "<ruby>着物<rt>きもの</rt></ruby>を <ruby>着<rt>き</rt></ruby>て いる",
              "<ruby>木村<rt>きむら</rt></ruby>"
            ],
            "rawValues": [
              "着物を 着て いる",
              "木村"
            ],
            "viValues": [
              "đang mặc kimono",
              "Kimura"
            ],
            "lineTimings": [
              [
                5.02,
                7.87
              ],
              [
                8.26,
                9.53
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
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
                  0.5,
                  0.52,
                  0.52,
                  0.49,
                  0.45,
                  0.42,
                  0.42,
                  0.56,
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
            "label": "Mẫu 3 (Đang nói chuyện với thầy Watt / Sato)",
            "values": [
              "ワット<ruby>先生<rt>せんせい</rt></ruby>と <ruby>話<rt>はな</rt></ruby>して いる",
              "<ruby>佐藤<rt>さとう</rt></ruby>"
            ],
            "rawValues": [
              "ワット先生と 話して いる",
              "佐藤"
            ],
            "viValues": [
              "đang nói chuyện với thầy Watt",
              "Sato"
            ],
            "lineTimings": [
              [
                9.91,
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
        "id": "rc22-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Giới thiệu đồ ăn / món quà do ai làm hoặc mua ở đâu",
        "context": "Sử dụng mệnh đề định ngữ quá khứ bổ nghĩa cho danh từ.",
        "lines": [
          {
            "id": "rc22-2-l1",
            "speaker": "A",
            "jp": "これは <u>わたしが <ruby>作<rt>つく</rt></ruby>った</u> ケーキです。どうぞ <ruby>食<rt>た</rt></ruby>べて ください。",
            "rawJp": "これは わたしが 作った ケーキです。どうぞ 食べて ください。",
            "vi": "Đây là chiếc bánh ngọt do tôi tự làm đấy. Xin mời bạn ăn thử."
          },
          {
            "id": "rc22-2-l2",
            "speaker": "B",
            "jp": "わあ、おいしそうですね。いただきます。",
            "rawJp": "わあ、おいしそうですね。いただきます。",
            "vi": "Chà, trông ngon quá nhỉ. Tôi xin phép dùng ạ."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Bánh do tôi tự làm)",
            "values": [
              "わたしが <ruby>作<rt>つく</rt></ruby>った"
            ],
            "rawValues": [
              "わたしが 作った"
            ],
            "viValues": [
              "do tôi tự làm"
            ],
            "lineTimings": [
              [
                15.58,
                19.34
              ],
              [
                19.73,
                22.78
              ]
            ],
            "lineMeta": [
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.72,
                  0.69,
                  0.65,
                  0.62,
                  0.62,
                  0.64,
                  0.66,
                  0.66,
                  0.63,
                  0.59,
                  0.56,
                  0.56,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Bánh mua ở tiệm nổi tiếng)",
            "values": [
              "<ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>店<rt>みせ</rt></ruby>で <ruby>買<rt>か</rt></ruby>った"
            ],
            "rawValues": [
              "有名な 店で 買った"
            ],
            "viValues": [
              "mua ở tiệm nổi tiếng"
            ],
            "lineTimings": [
              [
                23.16,
                27.29
              ],
              [
                19.73,
                22.78
              ]
            ],
            "lineMeta": [
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.72,
                  0.69,
                  0.65,
                  0.62,
                  0.62,
                  0.64,
                  0.66,
                  0.66,
                  0.63,
                  0.59,
                  0.56,
                  0.56,
                  0.56,
                  0.52
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Bánh được mẹ gửi từ quê)",
            "values": [
              "<ruby>母<rt>はは</rt></ruby>が <ruby>送<rt>おく</rt></ruby>った"
            ],
            "rawValues": [
              "母が 送った"
            ],
            "viValues": [
              "được mẹ gửi"
            ],
            "lineTimings": [
              [
                27.67,
                31.3
              ],
              [
                19.73,
                22.78
              ]
            ],
            "lineMeta": [
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
              },
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "exclamation",
                "endPitch": "down",
                "pitchCurve": [
                  0.36,
                  0.76,
                  0.72,
                  0.69,
                  0.65,
                  0.62,
                  0.62,
                  0.64,
                  0.66,
                  0.66,
                  0.63,
                  0.59,
                  0.56,
                  0.56,
                  0.56,
                  0.52
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc22-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Từ chối vì bận việc (V-る <ruby>約束<rt>やくそく</rt></ruby> / <ruby>時間<rt>じかん</rt></ruby>)",
        "context": "Dùng mệnh đề bổ nghĩa cho <ruby>約束<rt>やくそく</rt></ruby>, <ruby>用事<rt>ようじ</rt></ruby>, <ruby>時間<rt>じかん</rt></ruby>.",
        "lines": [
          {
            "id": "rc22-3-l1",
            "speaker": "A",
            "jp": "<ruby>今晩<rt>こんばん</rt></ruby> <ruby>一緒に<rt>いっしょに</rt></ruby> ビールを <ruby>飲<rt>の</rt></ruby>みませんか。",
            "rawJp": "今晩 一緒に ビールを 飲みませんか。",
            "vi": "Tối nay cùng đi uống bia nhé?"
          },
          {
            "id": "rc22-3-l2",
            "speaker": "B",
            "jp": "すみません。<ruby>今晩<rt>こんばん</rt></ruby>は <u><ruby>友だち<rt>ともだち</rt></ruby>に <ruby>会<rt>あ</rt></ruby>う</u> <ruby>約束<rt>やくそく</rt></ruby>が ありますから…。",
            "rawJp": "すみません。今晩は 友だちに 会う 約束が ありますから…。",
            "vi": "Xin lỗi nhé. Tối nay tôi có cuộc hẹn gặp bạn mất rồi..."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Hẹn gặp bạn)",
            "values": [
              "<ruby>友だち<rt>ともだち</rt></ruby>に <ruby>会<rt>あ</rt></ruby>う"
            ],
            "rawValues": [
              "友だちに 会う"
            ],
            "viValues": [
              "gặp bạn"
            ],
            "lineTimings": [
              [
                31.68,
                34.22
              ],
              [
                34.61,
                38.95
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
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Đi xem nhà thuê)",
            "values": [
              "うちを <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>く"
            ],
            "rawValues": [
              "うちを 見に 行く"
            ],
            "viValues": [
              "đi xem nhà"
            ],
            "lineTimings": [
              [
                31.68,
                34.22
              ],
              [
                39.34,
                43.63
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
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Phải đi đón bố mẹ ở sân bay)",
            "values": [
              "<ruby>空港<rt>くうこう</rt></ruby>へ <ruby>両親<rt>りょうしん</rt></ruby>を <ruby>迎<rt>むか</rt></ruby>えに <ruby>行<rt>い</rt></ruby>く"
            ],
            "rawValues": [
              "空港へ 両親を 迎えに 行く"
            ],
            "viValues": [
              "đi đón bố mẹ ở sân bay"
            ],
            "lineTimings": [
              [
                31.68,
                34.22
              ],
              [
                44.02,
                49.39
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
                ]
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq22-1",
        "question": "Chủ đề chính của bài hội thoại Bài 22「どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Anh đang tìm căn phòng như thế nào ạ?",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか」trong Bài 22 có nghĩa là \"Anh đang tìm căn phòng như thế nào ạ?\". Bối cảnh: Anh Wang đến văn phòng bất động sản để tìm thuê một căn hộ mới. Anh nêu rõ các điều kiện về tiền thuê, khoảng cách từ nhà ga và độ sáng sủa bằng mệnh đề định ngữ."
      },
      {
        "id": "kq22-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。」(Xin chào quý khách. Anh đang tìm căn phòng như thế nào ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
          "8<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ぐらいまでですね。",
          "ここは いかがですか。<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 10<ruby>分<rt>ふん</rt></ruby>です。",
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。」(Để xem nào... Tôi muốn tìm nơi nào yên tĩnh và gần nhà ga một chút.). Mệnh đề định ngữ「<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い」bổ nghĩa cho danh từ「ところ」."
      },
      {
        "id": "kq22-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。」(Để xem nào... Tôi muốn tìm nơi nào yên tĩnh và gần nhà ga một chút.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。",
          "8<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ぐらいまでですね。",
          "ここは いかがですか。<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 10<ruby>分<rt>ふん</rt></ruby>です。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。」(Tiền thuê nhà hàng tháng khoảng bao nhiêu thì vừa ý anh ạ?). 「<ruby>家賃<rt>やちん</rt></ruby>」(やちん): tiền thuê nhà hàng tháng."
      },
      {
        "id": "kq22-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。」(Tiền thuê nhà hàng tháng khoảng bao nhiêu thì vừa ý anh ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ここは いかがですか。<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 10<ruby>分<rt>ふん</rt></ruby>です。",
          "8<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ぐらいまでですね。",
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。",
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「8<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ぐらいまでですね。」(Khoảng từ 8 vạn yên trở xuống thôi ạ.). Nêu mức ngân sách tối đa."
      },
      {
        "id": "kq22-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「8<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>ぐらいまでですね。」(Khoảng từ 8 vạn yên trở xuống thôi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。",
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
          "ここは いかがですか。<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 10<ruby>分<rt>ふん</rt></ruby>です。",
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「ここは いかがですか。<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 10<ruby>分<rt>ふん</rt></ruby>です。」(Căn này thì sao ạ? Đi bộ từ nhà ga mất 10 phút.). Nhân viên đưa bản vẽ mặt bằng căn hộ cho khách xem."
      },
      {
        "id": "kq22-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「ここは いかがですか。<ruby>駅<rt>えき</rt></ruby>から <ruby>歩<rt>ある</rt></ruby>いて 10<ruby>分<rt>ふん</rt></ruby>です。」(Căn này thì sao ạ? Đi bộ từ nhà ga mất 10 phút.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。",
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。",
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
          "<ruby>家賃<rt>やちん</rt></ruby>は 8<ruby>万<rt>まん</rt></ruby>3<ruby>千<rt>せん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、ダイニングキッチンが <ruby>広<rt>ひろ</rt></ruby>いんですよ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「<ruby>家賃<rt>やちん</rt></ruby>は 8<ruby>万<rt>まん</rt></ruby>3<ruby>千<rt>せん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、ダイニングキッチンが <ruby>広<rt>ひろ</rt></ruby>いんですよ。」(Tiền thuê là 8 vạn 3 nghìn yên, nhưng phòng ăn kèm bếp rộng rãi lắm đấy ạ.). 「ダイニングキッチン」(DK): phòng ăn kết hợp nhà bếp."
      },
      {
        "id": "kq22-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>家賃<rt>やちん</rt></ruby>は 8<ruby>万<rt>まん</rt></ruby>3<ruby>千<rt>せん</rt></ruby><ruby>円<rt>えん</rt></ruby>ですが、ダイニングキッチンが <ruby>広<rt>ひろ</rt></ruby>いんですよ。」(Tiền thuê là 8 vạn 3 nghìn yên, nhưng phòng ăn kèm bếp rộng rãi lắm đấy ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "うーん、この <ruby>部屋<rt>へや</rt></ruby>は <ruby>明<rt>あか</rt></ruby>るいですか。",
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。",
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。",
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「うーん、この <ruby>部屋<rt>へや</rt></ruby>は <ruby>明<rt>あか</rt></ruby>るいですか。」(Ừm, căn phòng này có sáng sủa không ạ?). Hỏi về ánh sáng tự nhiên của căn hộ."
      },
      {
        "id": "kq22-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「うーん、この <ruby>部屋<rt>へや</rt></ruby>は <ruby>明<rt>あか</rt></ruby>るいですか。」(Ừm, căn phòng này có sáng sủa không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
          "ええ、<ruby>南向<rt>みなみむ</rt></ruby>きですから、よく <ruby>日<rt>にち</rt></ruby>が <ruby>当<rt>とう</rt></ruby>たりますよ。",
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。",
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「ええ、<ruby>南向<rt>みなみむ</rt></ruby>きですから、よく <ruby>日<rt>にち</rt></ruby>が <ruby>当<rt>とう</rt></ruby>たりますよ。」(Vâng, vì quay hướng Nam nên đón nắng tốt lắm ạ.). Ở Nhật, nhà hướng Nam (<ruby>南向<rt>みなみむ</rt></ruby>き) luôn được ưa chuộng nhất vì ấm áp và sáng sủa."
      },
      {
        "id": "kq22-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、<ruby>南向<rt>みなみむ</rt></ruby>きですから、よく <ruby>日<rt>にち</rt></ruby>が <ruby>当<rt>とう</rt></ruby>たりますよ。」(Vâng, vì quay hướng Nam nên đón nắng tốt lắm ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。",
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
          "そうですか。じゃ、これから <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>っても いいですか。",
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「そうですか。じゃ、これから <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>っても いいですか。」(Vậy à. Thế bây giờ tôi đi xem thực tế luôn có được không ạ?). Xin đi xem phòng trực tiếp."
      },
      {
        "id": "kq22-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですか。じゃ、これから <ruby>見<rt>み</rt></ruby>に <ruby>行<rt>い</rt></ruby>っても いいですか。」(Vậy à. Thế bây giờ tôi đi xem thực tế luôn có được không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いらっしゃいませ。どんな <ruby>部屋<rt>へや</rt></ruby>を お<ruby>探<rt>さが</rt></ruby>しですか。",
          "そうですね。<ruby>静<rt>しず</rt></ruby>かで、<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い ところが いいんですが。",
          "<ruby>家賃<rt>やちん</rt></ruby>は どのくらいが いいですか。",
          "ええ。<ruby>今<rt>いま</rt></ruby>すぐ ご<ruby>案内<rt>あんない</rt></ruby>します。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 22, câu đáp chuẩn xác là:「ええ。<ruby>今<rt>いま</rt></ruby>すぐ ご<ruby>案内<rt>あんない</rt></ruby>します。」(Vâng được chứ ạ. Tôi xin dẫn anh đi xem ngay bây giờ.). 「ご<ruby>案内<rt>あんない</rt></ruby>します」là khiêm nhường ngữ lịch sự khi dẫn đường cho khách."
      }
    ]
  },
  "kaiwa-23": {
    "id": "kaiwa-23",
    "lesson": 23,
    "level": "Sơ cấp 1",
    "titleJp": "どうやって <ruby>行<rt>い</rt></ruby>きますか",
    "titleVi": "Đi bằng cách nào ạ?",
    "subtitleVi": "Hỏi đường đến thư viện & thao tác máy móc",
    "sceneType": "library_directions",
    "context": "Chị Karina gọi điện hỏi nhân viên Thư viện Midori cách đi từ ga Honda đến thư viện, sau đó khi tới nơi chị hỏi thủ tục làm thẻ mượn sách.",
    "objectives": [
      "Sử dụng mẫu ～とき (Khi...) để diễn tả thời điểm hoặc điều kiện thực hiện hành động.",
      "Biết cách chỉ đường bằng mẫu câu điều kiện tất yếu: [Động từ nguyên dạng] と、～が あります.",
      "Hỏi và giải thích cách thao tác khi máy bán vé hoặc thiết bị gặp sự cố."
    ],
    "audioSrc": "audio/kaiwa/lesson_23.mp3",
    "audioDuration": 37.13,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_23.mp3",
    "renshuuAudioDuration": 58.56,
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
        "id": "k23-1",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。",
        "rawJp": "はい、みどり図書館です。",
        "vi": "Xin nghe, đây là Thư viện Midori ạ.",
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
        "explanation": "Nhân viên thư viện nghe điện thoại.",
        "time": [
          0,
          2.02
        ]
      },
      {
        "id": "k23-2",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
        "rawJp": "あのう、そちらまで どうやって 行きますか。",
        "vi": "À xin lỗi, đi đến chỗ thư viện mình thì đi bằng cách nào ạ?",
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
        ],
        "explanation": "「どうやって <ruby>行<rt>い</rt></ruby>きますか」hỏi lộ trình và phương thức di chuyển.",
        "time": [
          2.52,
          5.81
        ]
      },
      {
        "id": "k23-3",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。",
        "rawJp": "本田駅から 12番の バスに 乗って、図書館前で 下りて ください。",
        "vi": "Chị hãy lên xe buýt số 12 từ ga Honda, rồi xuống ở trạm \"Trước thư viện\" nhé.",
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
        "explanation": "Hướng dẫn số hiệu tuyến xe buýt và tên trạm dừng.",
        "time": [
          6.26,
          11.09
        ]
      },
      {
        "id": "k23-4",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "question",
        "jp": "<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>ですか。",
        "rawJp": "何つ目ですか。",
        "vi": "Là trạm dừng thứ mấy vậy ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.61,
          0.57,
          0.62,
          0.85
        ],
        "explanation": "「<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>」(いくつめ): thứ bao nhiêu.",
        "time": [
          11.47,
          12.82
        ]
      },
      {
        "id": "k23-5",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "3つ<ruby>目<rt>め</rt></ruby>です。<ruby>下<rt>お</rt></ruby>りると、<ruby>前<rt>まえ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が あります。",
        "rawJp": "3つ目です。下りると、前に 公園が あります。",
        "vi": "Trạm thứ 3 ạ. Hễ xuống xe là nhìn thấy ngay công viên ở phía trước.",
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
        "explanation": "「<ruby>下<rt>お</rt></ruby>りると、～があります」: dùng と để chỉ kết quả tự nhiên khi đi theo chỉ dẫn.",
        "time": [
          13.27,
          17.28
        ]
      },
      {
        "id": "k23-6",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "<ruby>図書館<rt>としょかん</rt></ruby>は その <ruby>公園<rt>こうえん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>の <ruby>白<rt>しろ</rt></ruby>い <ruby>建物<rt>たてもの</rt></ruby>です。",
        "rawJp": "図書館は その 公園の 中の 白い 建物です。",
        "vi": "Thư viện là tòa nhà màu trắng nằm ở bên trong công viên đó ạ.",
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
        "explanation": "Mô tả đặc điểm nhận diện tòa nhà.",
        "time": [
          17.59,
          21.19
        ]
      },
      {
        "id": "k23-7",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "question",
        "jp": "わかりました。それから、<ruby>本<rt>ほん</rt></ruby>を <ruby>借<rt>か</rt></ruby>りるとき、<ruby>何<rt>なん</rt></ruby>が いりますか。",
        "rawJp": "わかりました。それから、本を 借りるとき、何が いりますか。",
        "vi": "Tôi hiểu rồi ạ. À ngoài ra, khi mượn sách thì cần mang theo giấy tờ gì ạ?",
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
        "explanation": "「<ruby>本<rt>ほん</rt></ruby>を<ruby>借<rt>か</rt></ruby>りるとき」: khi mượn sách (V-る とき = trước khi hành động hoàn tất);「いります」: cần.",
        "time": [
          21.58,
          26.76
        ]
      },
      {
        "id": "k23-8",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "<ruby>初めて<rt>はじめて</rt></ruby>ですか。",
        "rawJp": "初めてですか。",
        "vi": "Chị mượn lần đầu tiên phải không ạ?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.61,
          0.57,
          0.62,
          0.85
        ],
        "explanation": "Xác nhận xem khách đã có thẻ thư viện chưa.",
        "time": [
          27.22,
          28.44
        ]
      },
      {
        "id": "k23-9",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
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
        "explanation": "Xác nhận lần đầu.",
        "time": [
          28.9,
          29.54
        ]
      },
      {
        "id": "k23-10",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "じゃ、<ruby>住所<rt>じゅうしょ</rt></ruby>と <ruby>名前<rt>なまえ</rt></ruby>が わかる ものを <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>て ください。",
        "rawJp": "じゃ、住所と 名前が わかる ものを 持って 来て ください。",
        "vi": "Vậy chị hãy mang theo giấy tờ có thể xác nhận địa chỉ và họ tên nhé.",
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
        "explanation": "Ví dụ như thẻ cư trú, bằng lái xe hoặc thẻ sinh viên.",
        "time": [
          29.93,
          33.6
        ]
      },
      {
        "id": "k23-11",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "はい。どうも ありがとう ございました。",
        "rawJp": "はい。どうも ありがとう ございました。",
        "vi": "Vâng. Xin cảm ơn rất nhiều ạ.",
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
        "explanation": "Cảm ơn trước khi cúp máy.",
        "time": [
          33.98,
          37.13
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc23-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi việc cần làm khi gặp tình huống (～とき)",
        "context": "Hỏi thủ tục khi bị ốm, khi chuyển nhà, khi quên đồ.",
        "lines": [
          {
            "id": "rc23-1-l1",
            "speaker": "A",
            "jp": "<u><ruby>道<rt>みち</rt></ruby>が わからない</u>とき、どう しますか。",
            "rawJp": "道が わからないとき、どう しますか。",
            "vi": "Khi không biết đường, bạn sẽ làm thế nào?"
          },
          {
            "id": "rc23-1-l2",
            "speaker": "B",
            "jp": "<u><ruby>交番<rt>こうばん</rt></ruby>で <ruby>聞<rt>き</rt></ruby>きます</u>。",
            "rawJp": "交番で 聞きます。",
            "vi": "Tôi sẽ hỏi ở đồn cảnh sát Koban."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Không biết đường / Hỏi đồn cảnh sát)",
            "values": [
              "<ruby>道<rt>みち</rt></ruby>が わからない",
              "<ruby>交番<rt>こうばん</rt></ruby>で <ruby>聞<rt>き</rt></ruby>きます"
            ],
            "rawValues": [
              "道が わからない",
              "交番で 聞きます"
            ],
            "viValues": [
              "không biết đường",
              "hỏi ở đồn cảnh sát"
            ],
            "lineTimings": [
              [
                0,
                2.74
              ],
              [
                3.12,
                4.49
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
            "label": "Mẫu 2 (Cơ thể mệt mỏi / Đi ngủ sớm)",
            "values": [
              "<ruby>体<rt>からだ</rt></ruby>の <ruby>調子<rt>ちょうし</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>い",
              "<ruby>早<rt>はや</rt></ruby>く <ruby>寝<rt>ね</rt></ruby>ます"
            ],
            "rawValues": [
              "体の 調子が 悪い",
              "早く 寝ます"
            ],
            "viValues": [
              "trong người không khỏe",
              "đi ngủ sớm"
            ],
            "lineTimings": [
              [
                4.87,
                7.85
              ],
              [
                8.23,
                9.31
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
              }
            ]
          },
          {
            "label": "Mẫu 3 (Không đủ tiền mặt / Rút ở ATM)",
            "values": [
              "お<ruby>金<rt>かね</rt></ruby>が ない",
              "<ruby>銀行<rt>ぎんこう</rt></ruby>で <ruby>下<rt>お</rt></ruby>ろします"
            ],
            "rawValues": [
              "お金が ない",
              "銀行で 下ろします"
            ],
            "viValues": [
              "hết tiền mặt",
              "rút ở ngân hàng"
            ],
            "lineTimings": [
              [
                9.7,
                12.07
              ],
              [
                12.46,
                13.97
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
          }
        ]
      },
      {
        "id": "rc23-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hướng dẫn thao tác nút bấm máy móc (V-ると)",
        "context": "Chỉ cách chỉnh âm lượng, bật máy điều hòa hoặc mua vé.",
        "lines": [
          {
            "id": "rc23-2-l1",
            "speaker": "A",
            "jp": "すみません。<u><ruby>音<rt>おと</rt></ruby>が <ruby>小<rt>ちい</rt></ruby>さい</u>んですが…。",
            "rawJp": "すみません。音が 小さいんですが…。",
            "vi": "Xin lỗi, âm thanh hơi nhỏ một chút..."
          },
          {
            "id": "rc23-2-l2",
            "speaker": "B",
            "jp": "この つまみを <u><ruby>右<rt>みぎ</rt></ruby>へ <ruby>回<rt>まわ</rt></ruby>す</u>と、<u><ruby>大<rt>おお</rt></ruby>きく なります</u>よ。",
            "rawJp": "この つまみを 右へ 回すと、大きく なりますよ。",
            "vi": "Vặn núm này sang bên phải thì tiếng sẽ to lên đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Tiếng nhỏ / Vặn sang phải -> To lên)",
            "values": [
              "<ruby>音<rt>おと</rt></ruby>が <ruby>小<rt>ちい</rt></ruby>さい",
              "<ruby>右<rt>みぎ</rt></ruby>へ <ruby>回<rt>まわ</rt></ruby>す",
              "<ruby>大<rt>おお</rt></ruby>きく なります"
            ],
            "rawValues": [
              "音が 小さい",
              "右へ 回す",
              "大きく なります"
            ],
            "viValues": [
              "tiếng nhỏ",
              "vặn sang phải",
              "to lên"
            ],
            "lineTimings": [
              [
                14.35,
                17.23
              ],
              [
                17.62,
                20.76
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
                "endPitch": "down",
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
                  0.42,
                  0.32
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
            "label": "Mẫu 2 (Phòng tối / Bấm nút này -> Sáng lên)",
            "values": [
              "<ruby>部屋<rt>へや</rt></ruby>が <ruby>暗<rt>くら</rt></ruby>い",
              "<ruby>押<rt>お</rt></ruby>す",
              "<ruby>明<rt>あか</rt></ruby>るく なります"
            ],
            "rawValues": [
              "部屋が 暗い",
              "押す",
              "明るく なります"
            ],
            "viValues": [
              "phòng tối",
              "bấm nút",
              "sáng lên"
            ],
            "lineTimings": [
              [
                21.14,
                23.88
              ],
              [
                24.26,
                26.9
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
                "endPitch": "down",
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
                  0.42,
                  0.32
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
            "label": "Mẫu 3 (Tiền thừa không ra / Gạt cần này -> Ra)",
            "values": [
              "<ruby>お釣り<rt>おつり</rt></ruby>が <ruby>出<rt>で</rt></ruby>ない",
              "<ruby>引<rt>ひ</rt></ruby>く",
              "<ruby>出<rt>で</rt></ruby>ます"
            ],
            "rawValues": [
              "お釣りが 出ない",
              "引く",
              "出ます"
            ],
            "viValues": [
              "tiền thừa không ra",
              "kéo cần",
              "sẽ ra"
            ],
            "lineTimings": [
              [
                27.29,
                30.14
              ],
              [
                30.53,
                32.88
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
                "endPitch": "down",
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
                  0.42,
                  0.32
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
          }
        ]
      },
      {
        "id": "rc23-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Chỉ đường qua ngã tư và cây cầu (V-て、V-ると)",
        "context": "Chỉ đường cho người đi bộ trên phố.",
        "lines": [
          {
            "id": "rc23-3-l1",
            "speaker": "A",
            "jp": "すみません。<u><ruby>駅<rt>えき</rt></ruby></u>は どこですか。",
            "rawJp": "すみません。駅は どこですか。",
            "vi": "Xin lỗi, nhà ga ở đâu vậy ạ?"
          },
          {
            "id": "rc23-3-l2",
            "speaker": "B",
            "jp": "この <ruby>道<rt>みち</rt></ruby>を まっすぐ <ruby>行<rt>い</rt></ruby>って、<u><ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>る</u>と、<u><ruby>左<rt>ひだり</rt></ruby></u>に ありますよ。",
            "rawJp": "この 道を まっすぐ 行って、橋を 渡ると、左に ありますよ。",
            "vi": "Đi thẳng con đường này, hễ qua cầu là thấy nó nằm ở bên trái đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Nhà ga / Qua cầu / Bên trái)",
            "values": [
              "<ruby>駅<rt>えき</rt></ruby>",
              "<ruby>橋<rt>はし</rt></ruby>を <ruby>渡<rt>わた</rt></ruby>る",
              "<ruby>左<rt>ひだり</rt></ruby>"
            ],
            "rawValues": [
              "駅",
              "橋を 渡る",
              "左"
            ],
            "viValues": [
              "nhà ga",
              "qua cầu",
              "bên trái"
            ],
            "lineTimings": [
              [
                33.26,
                35.86
              ],
              [
                36.24,
                40.75
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
            "label": "Mẫu 2 (Bưu điện / Rẽ phải ở đèn đỏ / Bên phải)",
            "values": [
              "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
              "<ruby>信号<rt>しんごう</rt></ruby>を <ruby>右<rt>みぎ</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がる",
              "<ruby>右<rt>みぎ</rt></ruby>"
            ],
            "rawValues": [
              "郵便局",
              "信号を 右へ 曲がる",
              "右"
            ],
            "viValues": [
              "bưu điện",
              "rẽ phải ở đèn giao thông",
              "bên phải"
            ],
            "lineTimings": [
              [
                41.14,
                44.21
              ],
              [
                44.59,
                49.63
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
            "label": "Mẫu 3 (Nhà sách / Rẽ trái ở góc thứ 2 / Phía trước)",
            "values": [
              "<ruby>本屋<rt>ほんや</rt></ruby>",
              "2つ<ruby>目<rt>め</rt></ruby>の <ruby>角<rt>かど</rt></ruby>を <ruby>左<rt>ひだり</rt></ruby>へ <ruby>曲<rt>ま</rt></ruby>がる",
              "<ruby>前<rt>まえ</rt></ruby>"
            ],
            "rawValues": [
              "本屋",
              "2つ目の 角を 左へ 曲がる",
              "前"
            ],
            "viValues": [
              "nhà sách",
              "rẽ trái ở góc thứ 2",
              "phía trước"
            ],
            "lineTimings": [
              [
                50.02,
                52.73
              ],
              [
                53.11,
                58.56
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
      }
    ],
    "quiz": [
      {
        "id": "kq23-1",
        "question": "Chủ đề chính của bài hội thoại Bài 23「どうやって <ruby>行<rt>い</rt></ruby>きますか」mang ý nghĩa là gì?",
        "options": [
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Đi bằng cách nào ạ?"
        ],
        "correctIdx": 3,
        "explanation": "「どうやって <ruby>行<rt>い</rt></ruby>きますか」trong Bài 23 có nghĩa là \"Đi bằng cách nào ạ?\". Bối cảnh: Chị Karina gọi điện hỏi nhân viên Thư viện Midori cách đi từ ga Honda đến thư viện, sau đó khi tới nơi chị hỏi thủ tục làm thẻ mượn sách."
      },
      {
        "id": "kq23-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。」(Xin nghe, đây là Thư viện Midori ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。",
          "<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>ですか。",
          "3つ<ruby>目<rt>め</rt></ruby>です。<ruby>下<rt>お</rt></ruby>りると、<ruby>前<rt>まえ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が あります。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。」(À xin lỗi, đi đến chỗ thư viện mình thì đi bằng cách nào ạ?). 「どうやって <ruby>行<rt>い</rt></ruby>きますか」hỏi lộ trình và phương thức di chuyển."
      },
      {
        "id": "kq23-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。」(À xin lỗi, đi đến chỗ thư viện mình thì đi bằng cách nào ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "3つ<ruby>目<rt>め</rt></ruby>です。<ruby>下<rt>お</rt></ruby>りると、<ruby>前<rt>まえ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が あります。",
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。",
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。",
          "<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>ですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。」(Chị hãy lên xe buýt số 12 từ ga Honda, rồi xuống ở trạm \"Trước thư viện\" nhé.). Hướng dẫn số hiệu tuyến xe buýt và tên trạm dừng."
      },
      {
        "id": "kq23-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。」(Chị hãy lên xe buýt số 12 từ ga Honda, rồi xuống ở trạm \"Trước thư viện\" nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
          "3つ<ruby>目<rt>め</rt></ruby>です。<ruby>下<rt>お</rt></ruby>りると、<ruby>前<rt>まえ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が あります。",
          "<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>ですか。",
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>ですか。」(Là trạm dừng thứ mấy vậy ạ?). 「<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>」(いくつめ): thứ bao nhiêu."
      },
      {
        "id": "kq23-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>何<rt>いく</rt></ruby>つ<ruby>目<rt>め</rt></ruby>ですか。」(Là trạm dừng thứ mấy vậy ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。",
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。",
          "3つ<ruby>目<rt>め</rt></ruby>です。<ruby>下<rt>お</rt></ruby>りると、<ruby>前<rt>まえ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が あります。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「3つ<ruby>目<rt>め</rt></ruby>です。<ruby>下<rt>お</rt></ruby>りると、<ruby>前<rt>まえ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が あります。」(Trạm thứ 3 ạ. Hễ xuống xe là nhìn thấy ngay công viên ở phía trước.). 「<ruby>下<rt>お</rt></ruby>りると、～があります」: dùng と để chỉ kết quả tự nhiên khi đi theo chỉ dẫn."
      },
      {
        "id": "kq23-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「3つ<ruby>目<rt>め</rt></ruby>です。<ruby>下<rt>お</rt></ruby>りると、<ruby>前<rt>まえ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>が あります。」(Trạm thứ 3 ạ. Hễ xuống xe là nhìn thấy ngay công viên ở phía trước.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>図書館<rt>としょかん</rt></ruby>は その <ruby>公園<rt>こうえん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>の <ruby>白<rt>しろ</rt></ruby>い <ruby>建物<rt>たてもの</rt></ruby>です。",
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。",
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「<ruby>図書館<rt>としょかん</rt></ruby>は その <ruby>公園<rt>こうえん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>の <ruby>白<rt>しろ</rt></ruby>い <ruby>建物<rt>たてもの</rt></ruby>です。」(Thư viện là tòa nhà màu trắng nằm ở bên trong công viên đó ạ.). Mô tả đặc điểm nhận diện tòa nhà."
      },
      {
        "id": "kq23-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>図書館<rt>としょかん</rt></ruby>は その <ruby>公園<rt>こうえん</rt></ruby>の <ruby>中<rt>なか</rt></ruby>の <ruby>白<rt>しろ</rt></ruby>い <ruby>建物<rt>たてもの</rt></ruby>です。」(Thư viện là tòa nhà màu trắng nằm ở bên trong công viên đó ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。",
          "わかりました。それから、<ruby>本<rt>ほん</rt></ruby>を <ruby>借<rt>か</rt></ruby>りるとき、<ruby>何<rt>なん</rt></ruby>が いりますか。",
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。",
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「わかりました。それから、<ruby>本<rt>ほん</rt></ruby>を <ruby>借<rt>か</rt></ruby>りるとき、<ruby>何<rt>なん</rt></ruby>が いりますか。」(Tôi hiểu rồi ạ. À ngoài ra, khi mượn sách thì cần mang theo giấy tờ gì ạ?). 「<ruby>本<rt>ほん</rt></ruby>を<ruby>借<rt>か</rt></ruby>りるとき」: khi mượn sách (V-る とき = trước khi hành động hoàn tất);「いります」: cần."
      },
      {
        "id": "kq23-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「わかりました。それから、<ruby>本<rt>ほん</rt></ruby>を <ruby>借<rt>か</rt></ruby>りるとき、<ruby>何<rt>なん</rt></ruby>が いりますか。」(Tôi hiểu rồi ạ. À ngoài ra, khi mượn sách thì cần mang theo giấy tờ gì ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。",
          "<ruby>初めて<rt>はじめて</rt></ruby>ですか。",
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「<ruby>初めて<rt>はじめて</rt></ruby>ですか。」(Chị mượn lần đầu tiên phải không ạ?). Xác nhận xem khách đã có thẻ thư viện chưa."
      },
      {
        "id": "kq23-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>初めて<rt>はじめて</rt></ruby>ですか。」(Chị mượn lần đầu tiên phải không ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。",
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。",
          "はい。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「はい。」(Vâng ạ.). Xác nhận lần đầu."
      },
      {
        "id": "kq23-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「はい。」(Vâng ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "じゃ、<ruby>住所<rt>じゅうしょ</rt></ruby>と <ruby>名前<rt>なまえ</rt></ruby>が わかる ものを <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>て ください。",
          "はい、みどり<ruby>図書館<rt>としょかん</rt></ruby>です。",
          "あのう、そちらまで どうやって <ruby>行<rt>い</rt></ruby>きますか。",
          "<ruby>本田<rt>ほんだ</rt></ruby><ruby>駅<rt>えき</rt></ruby>から 12<ruby>番<rt>ばん</rt></ruby>の バスに <ruby>乗<rt>の</rt></ruby>って、<ruby>図書館<rt>としょかん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で <ruby>下<rt>お</rt></ruby>りて ください。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 23, câu đáp chuẩn xác là:「じゃ、<ruby>住所<rt>じゅうしょ</rt></ruby>と <ruby>名前<rt>なまえ</rt></ruby>が わかる ものを <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>て ください。」(Vậy chị hãy mang theo giấy tờ có thể xác nhận địa chỉ và họ tên nhé.). Ví dụ như thẻ cư trú, bằng lái xe hoặc thẻ sinh viên."
      }
    ]
  },
  "kaiwa-24": {
    "id": "kaiwa-24",
    "lesson": 24,
    "level": "Sơ cấp 1",
    "titleJp": "<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか",
    "titleVi": "Giúp tôi một tay có được không?",
    "subtitleVi": "Nhờ đồng nghiệp phụ chuyển nhà (Cho - Nhận hành vi)",
    "sceneType": "moving_help",
    "context": "Chị Karina sắp chuyển nhà vào Chủ nhật tuần sau. Anh Yamada và anh Miller nhiệt tình nhận lời đến phụ giúp chuyển đồ và cho mượn xe ô tô.",
    "objectives": [
      "Nắm vững hệ thống động từ cho - nhận vật chất (あげます、もらいます、くれます).",
      "Sử dụng thành thạo mẫu câu cho - nhận hành vi ơn nghĩa: V-て あげます / V-て もらいます / V-て くれます.",
      "Nhờ vả đồng nghiệp giúp đỡ bằng: <ruby>手伝<rt>てつだ</rt></ruby>って くれませんか."
    ],
    "audioSrc": "audio/kaiwa/lesson_24.mp3",
    "audioDuration": 33.7,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_24.mp3",
    "renshuuAudioDuration": 53.59,
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
        "id": "k24-1",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。",
        "rawJp": "カリナさん、来週の 日曜日、引っ越しですね。",
        "vi": "Chị Karina ơi, Chủ nhật tuần sau chị chuyển nhà phải không?",
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
        "explanation": "「<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>し」(ひっこし): việc chuyển nhà.",
        "time": [
          0,
          3.6
        ]
      },
      {
        "id": "k24-2",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "question",
        "jp": "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
        "rawJp": "ええ。すみませんが、手伝って くれませんか。",
        "vi": "Vâng. Xin lỗi làm phiền anh, nhưng anh giúp tôi một tay có được không?",
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
        "explanation": "「V-て くれませんか」là cách nhờ vả lịch sự vừa phải với bạn bè, đồng nghiệp.",
        "time": [
          3.98,
          7.85
        ]
      },
      {
        "id": "k24-3",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。",
        "rawJp": "いいですよ。ミラーさんも 来て くれますね。",
        "vi": "Được chứ. Anh Miller cũng sẽ đến giúp chúng ta đúng không nhỉ?",
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
        "explanation": "「<ruby>来<rt>き</rt></ruby>てくれます」: người khác đến vì lợi ích của mình.",
        "time": [
          8.3,
          11.14
        ]
      },
      {
        "id": "k24-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ。わたしは タナカさんに <ruby>車<rt>くるま</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>行<rt>い</rt></ruby>きますよ。",
        "rawJp": "ええ。わたしは タナカさんに 車を 借りて 行きますよ。",
        "vi": "Vâng. Tôi sẽ mượn xe ô tô của anh Tanaka rồi lái đến nhé.",
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
        "explanation": "Miller chủ động mượn xe để chở đồ giúp Karina.",
        "time": [
          11.52,
          15.5
        ]
      },
      {
        "id": "k24-5",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "exclamation",
        "jp": "わあ、<ruby>助<rt>たす</rt></ruby>かります。どうも ありがとう ございます。",
        "rawJp": "わあ、助かります。どうも ありがとう ございます。",
        "vi": "Chà, thế thì cứu tinh cho tôi quá! Xin cảm ơn hai anh rất nhiều.",
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
        "explanation": "「<ruby>助<rt>たす</rt></ruby>かります」(たすかります): thật may quá, giúp tôi đỡ vất vả biết bao.",
        "time": [
          15.89,
          20.18
        ]
      },
      {
        "id": "k24-6",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "<ruby>何時<rt>なんじ</rt></ruby>ごろ <ruby>行<rt>い</rt></ruby>きましょうか。",
        "rawJp": "何時ごろ 行きましょうか。",
        "vi": "Khoảng mấy giờ chúng tôi đến thì được nhỉ?",
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
        "explanation": "Hỏi giờ bắt đầu dọn đồ.",
        "time": [
          20.57,
          22.15
        ]
      },
      {
        "id": "k24-7",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "そうですね。<ruby>午前中<rt>ごぜんちゅう</rt></ruby>に <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "そうですね。午前中に お願いします。",
        "vi": "Để xem nào... Nhờ hai anh đến vào buổi sáng giúp tôi nhé.",
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
        "explanation": "「<ruby>午前中<rt>ごぜんちゅう</rt></ruby>」(ごぜんちゅう): trong khoảng thời gian buổi sáng.",
        "time": [
          22.61,
          26.18
        ]
      },
      {
        "id": "k24-8",
        "speakerId": "karina",
        "speakerBadge": "カリナ",
        "speakerColor": "rose",
        "voice": "en-US-EmmaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>昼<rt>ひる</rt></ruby>ごはんは わたしが <ruby>お弁当<rt>おべんとう</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って おきますから。",
        "rawJp": "昼ごはんは わたしが お弁当を 作って おきますから。",
        "vi": "Bữa trưa thì tôi sẽ tự tay làm cơm hộp Bento chuẩn bị sẵn để mời hai anh.",
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
        "explanation": "Đáp lễ sự giúp đỡ của bạn bè bằng bữa cơm tự nấu.",
        "time": [
          26.5,
          30.14
        ]
      },
      {
        "id": "k24-9",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "exclamation",
        "jp": "ほんとうですか。<ruby>楽しみ<rt>たのしみ</rt></ruby>に して います。",
        "rawJp": "ほんとうですか。楽しみに して います。",
        "vi": "Thật vậy sao! Tôi rất mong chờ được thưởng thức đấy.",
        "endPitch": "down",
        "pitchCurve": [
          0.36,
          0.76,
          0.72,
          0.69,
          0.65,
          0.62,
          0.62,
          0.64,
          0.66,
          0.66,
          0.63,
          0.59,
          0.56,
          0.56,
          0.56,
          0.52
        ],
        "explanation": "「<ruby>楽しみにしています<rt>たのしみにしています</rt></ruby>」: rất háo hức mong đợi.",
        "time": [
          30.53,
          33.7
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc24-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Kể về sự giúp đỡ nhận được từ người khác (V-て もらいました)",
        "context": "Chia sẻ lòng biết ơn đối với bạn bè và đồng nghiệp.",
        "lines": [
          {
            "id": "rc24-1-l1",
            "speaker": "A",
            "jp": "<u><ruby>日本語<rt>にほんご</rt></ruby>の レポート</u>、もう <ruby>書<rt>か</rt></ruby>きましたか。",
            "rawJp": "日本語の レポート、もう 書きましたか。",
            "vi": "Bản báo cáo bằng tiếng Nhật bạn đã viết xong chưa?"
          },
          {
            "id": "rc24-1-l2",
            "speaker": "B",
            "jp": "ええ、<u><ruby>佐藤<rt>さとう</rt></ruby>さんに <ruby>直<rt>なお</rt></ruby>して</u> もらいました。",
            "rawJp": "ええ、佐藤さんに 直して もらいました。",
            "vi": "Rồi, tôi đã được chị Sato sửa lỗi giúp đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Báo cáo / Được chị Sato sửa giúp)",
            "values": [
              "<ruby>日本語<rt>にほんご</rt></ruby>の レポート",
              "<ruby>佐藤<rt>さとう</rt></ruby>さんに <ruby>直<rt>なお</rt></ruby>して"
            ],
            "rawValues": [
              "日本語の レポート",
              "佐藤さんに 直して"
            ],
            "viValues": [
              "báo cáo tiếng Nhật",
              "được chị Sato sửa giúp"
            ],
            "lineTimings": [
              [
                0,
                3
              ],
              [
                3.38,
                6.22
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
            "label": "Mẫu 2 (Chuyển nhà / Được anh Yamada giúp)",
            "values": [
              "<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>し",
              "<ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>手伝<rt>てつだ</rt></ruby>って"
            ],
            "rawValues": [
              "引っ越し",
              "山田さんに 手伝って"
            ],
            "viValues": [
              "chuyển nhà",
              "được anh Yamada phụ giúp"
            ],
            "lineTimings": [
              [
                6.6,
                8.9
              ],
              [
                9.29,
                12.19
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
            "label": "Mẫu 3 (Lịch trình Kyoto / Được<ruby>木村<rt>きむら</rt></ruby> dẫn đi)",
            "values": [
              "<ruby>京都<rt>きょうと</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>",
              "<ruby>木村<rt>きむら</rt></ruby>さんに <ruby>案内<rt>あんない</rt></ruby>して"
            ],
            "rawValues": [
              "京都の 旅行",
              "木村さんに 案内して"
            ],
            "viValues": [
              "du lịch Kyoto",
              "được chị Kimura dẫn đường"
            ],
            "lineTimings": [
              [
                12.58,
                15.22
              ],
              [
                15.6,
                18.58
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
      },
      {
        "id": "rc24-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Kể về việc người khác chủ động làm cho mình (V-て くれました)",
        "context": "Nhấn mạnh thiện chí của người giúp đỡ.",
        "lines": [
          {
            "id": "rc24-2-l1",
            "speaker": "A",
            "jp": "おいしい <u>お<ruby>菓子<rt>かし</rt></ruby></u>ですね。",
            "rawJp": "おいしい お菓子ですね。",
            "vi": "Món bánh kẹo này ngon quá nhỉ."
          },
          {
            "id": "rc24-2-l2",
            "speaker": "B",
            "jp": "ええ、<u><ruby>母<rt>はは</rt></ruby>が <ruby>作<rt>つく</rt></ruby>って</u> くれました。",
            "rawJp": "ええ、母が 作って くれました。",
            "vi": "Vâng, mẹ tôi đã làm cho tôi đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Bánh kẹo / Mẹ làm cho)",
            "values": [
              "お<ruby>菓子<rt>かし</rt></ruby>",
              "<ruby>母<rt>はは</rt></ruby>が <ruby>作<rt>つく</rt></ruby>って"
            ],
            "rawValues": [
              "お菓子",
              "母が 作って"
            ],
            "viValues": [
              "bánh kẹo",
              "mẹ làm cho"
            ],
            "lineTimings": [
              [
                18.96,
                20.4
              ],
              [
                20.78,
                23.21
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
            "label": "Mẫu 2 (Áo len / Bạn gái đan cho)",
            "values": [
              "セーター",
              "<ruby>恋人<rt>こいびと</rt></ruby>が <ruby>編<rt>あ</rt></ruby>んで"
            ],
            "rawValues": [
              "セーター",
              "恋人が 編んで"
            ],
            "viValues": [
              "áo len",
              "người yêu đan cho"
            ],
            "lineTimings": [
              [
                23.59,
                25.13
              ],
              [
                25.51,
                28.13
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
                  0.57,
                  0.56,
                  0.58,
                  0.6,
                  0.53,
                  0.38
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
            "label": "Mẫu 3 (Trà Nhật / Chị Sato pha cho)",
            "values": [
              "お<ruby>茶<rt>ちゃ</rt></ruby>",
              "<ruby>佐藤<rt>さとう</rt></ruby>さんが <ruby>入<rt>い</rt></ruby>れて"
            ],
            "rawValues": [
              "お茶",
              "佐藤さんが 入れて"
            ],
            "viValues": [
              "trà",
              "chị Sato pha cho"
            ],
            "lineTimings": [
              [
                28.51,
                29.86
              ],
              [
                30.24,
                32.83
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
      },
      {
        "id": "rc24-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Đề nghị làm giúp người khác (V-て あげましょうか)",
        "context": "Giúp đỡ bạn bè thân thiết hoặc cấp dưới.",
        "lines": [
          {
            "id": "rc24-3-l1",
            "speaker": "A",
            "jp": "<u><ruby>銀行<rt>ぎんこう</rt></ruby>の <ruby>場所<rt>ばしょ</rt></ruby></u>が わからないんですが…。",
            "rawJp": "銀行の 場所が わからないんですが…。",
            "vi": "Tôi không biết vị trí ngân hàng ở đâu cả..."
          },
          {
            "id": "rc24-3-l2",
            "speaker": "B",
            "jp": "じゃ、<u><ruby>地図<rt>ちず</rt></ruby>を かいて</u> あげましょうか。",
            "rawJp": "じゃ、地図を かいて あげましょうか。",
            "vi": "Vậy để tôi vẽ bản đồ cho bạn nhé?"
          },
          {
            "id": "rc24-3-l3",
            "speaker": "A",
            "jp": "すみません。<ruby>お願いします<rt>おねがいします</rt></ruby>。",
            "rawJp": "すみません。お願いします。",
            "vi": "Cảm ơn bạn. Làm ơn giúp tôi nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Không biết ngân hàng / Vẽ bản đồ cho)",
            "values": [
              "<ruby>銀行<rt>ぎんこう</rt></ruby>の <ruby>場所<rt>ばしょ</rt></ruby>",
              "<ruby>地図<rt>ちず</rt></ruby>を かいて"
            ],
            "rawValues": [
              "銀行の 場所",
              "地図を かいて"
            ],
            "viValues": [
              "vị trí ngân hàng",
              "vẽ bản đồ"
            ],
            "lineTimings": [
              [
                33.22,
                36.02
              ],
              [
                36.41,
                38.71
              ],
              [
                39.1,
                41.5
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "hesitation",
                "endPitch": "down",
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
                  0.42,
                  0.32
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
            "label": "Mẫu 2 (Không có ô khi trời mưa / Cho mượn ô)",
            "values": [
              "<ruby>傘<rt>かさ</rt></ruby>が ありません",
              "<ruby>傘<rt>かさ</rt></ruby>を <ruby>貸<rt>か</rt></ruby>して"
            ],
            "rawValues": [
              "傘が ありません",
              "傘を 貸して"
            ],
            "viValues": [
              "không có ô",
              "cho mượn ô"
            ],
            "lineTimings": [
              [
                41.88,
                44.76
              ],
              [
                45.14,
                47.45
              ],
              [
                39.1,
                41.5
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "hesitation",
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
            "label": "Mẫu 3 (Không đọc được chữ Hán / Tra từ điển giúp)",
            "values": [
              "<ruby>漢字<rt>かんじ</rt></ruby>の <ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>",
              "<ruby>辞書<rt>じしょ</rt></ruby>で <ruby>調<rt>しら</rt></ruby>べて"
            ],
            "rawValues": [
              "漢字の 読み方",
              "辞書で 調べて"
            ],
            "viValues": [
              "cách đọc chữ Hán",
              "tra từ điển"
            ],
            "lineTimings": [
              [
                47.83,
                50.78
              ],
              [
                51.17,
                53.59
              ],
              [
                39.1,
                41.5
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "hesitation",
                "endPitch": "down",
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
                  0.42,
                  0.32
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
      }
    ],
    "quiz": [
      {
        "id": "kq24-1",
        "question": "Chủ đề chính của bài hội thoại Bài 24「<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか」mang ý nghĩa là gì?",
        "options": [
          "Giúp tôi một tay có được không?",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật"
        ],
        "correctIdx": 0,
        "explanation": "「<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか」trong Bài 24 có nghĩa là \"Giúp tôi một tay có được không?\". Bối cảnh: Chị Karina sắp chuyển nhà vào Chủ nhật tuần sau. Anh Yamada và anh Miller nhiệt tình nhận lời đến phụ giúp chuyển đồ và cho mượn xe ô tô."
      },
      {
        "id": "kq24-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。」(Chị Karina ơi, Chủ nhật tuần sau chị chuyển nhà phải không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "わあ、<ruby>助<rt>たす</rt></ruby>かります。どうも ありがとう ございます。",
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。",
          "ええ。わたしは タナカさんに <ruby>車<rt>くるま</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>行<rt>い</rt></ruby>きますよ。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。」(Vâng. Xin lỗi làm phiền anh, nhưng anh giúp tôi một tay có được không?). 「V-て くれませんか」là cách nhờ vả lịch sự vừa phải với bạn bè, đồng nghiệp."
      },
      {
        "id": "kq24-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。」(Vâng. Xin lỗi làm phiền anh, nhưng anh giúp tôi một tay có được không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。わたしは タナカさんに <ruby>車<rt>くるま</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>行<rt>い</rt></ruby>きますよ。",
          "わあ、<ruby>助<rt>たす</rt></ruby>かります。どうも ありがとう ございます。",
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。",
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。」(Được chứ. Anh Miller cũng sẽ đến giúp chúng ta đúng không nhỉ?). 「<ruby>来<rt>き</rt></ruby>てくれます」: người khác đến vì lợi ích của mình."
      },
      {
        "id": "kq24-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。」(Được chứ. Anh Miller cũng sẽ đến giúp chúng ta đúng không nhỉ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。",
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
          "わあ、<ruby>助<rt>たす</rt></ruby>かります。どうも ありがとう ございます。",
          "ええ。わたしは タナカさんに <ruby>車<rt>くるま</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>行<rt>い</rt></ruby>きますよ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「ええ。わたしは タナカさんに <ruby>車<rt>くるま</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>行<rt>い</rt></ruby>きますよ。」(Vâng. Tôi sẽ mượn xe ô tô của anh Tanaka rồi lái đến nhé.). Miller chủ động mượn xe để chở đồ giúp Karina."
      },
      {
        "id": "kq24-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。わたしは タナカさんに <ruby>車<rt>くるま</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>行<rt>い</rt></ruby>きますよ。」(Vâng. Tôi sẽ mượn xe ô tô của anh Tanaka rồi lái đến nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "わあ、<ruby>助<rt>たす</rt></ruby>かります。どうも ありがとう ございます。",
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。",
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「わあ、<ruby>助<rt>たす</rt></ruby>かります。どうも ありがとう ございます。」(Chà, thế thì cứu tinh cho tôi quá! Xin cảm ơn hai anh rất nhiều.). 「<ruby>助<rt>たす</rt></ruby>かります」(たすかります): thật may quá, giúp tôi đỡ vất vả biết bao."
      },
      {
        "id": "kq24-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「わあ、<ruby>助<rt>たす</rt></ruby>かります。どうも ありがとう ございます。」(Chà, thế thì cứu tinh cho tôi quá! Xin cảm ơn hai anh rất nhiều.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。",
          "<ruby>何時<rt>なんじ</rt></ruby>ごろ <ruby>行<rt>い</rt></ruby>きましょうか。",
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。",
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「<ruby>何時<rt>なんじ</rt></ruby>ごろ <ruby>行<rt>い</rt></ruby>きましょうか。」(Khoảng mấy giờ chúng tôi đến thì được nhỉ?). Hỏi giờ bắt đầu dọn đồ."
      },
      {
        "id": "kq24-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>何時<rt>なんじ</rt></ruby>ごろ <ruby>行<rt>い</rt></ruby>きましょうか。」(Khoảng mấy giờ chúng tôi đến thì được nhỉ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。",
          "そうですね。<ruby>午前中<rt>ごぜんちゅう</rt></ruby>に <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「そうですね。<ruby>午前中<rt>ごぜんちゅう</rt></ruby>に <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Để xem nào... Nhờ hai anh đến vào buổi sáng giúp tôi nhé.). 「<ruby>午前中<rt>ごぜんちゅう</rt></ruby>」(ごぜんちゅう): trong khoảng thời gian buổi sáng."
      },
      {
        "id": "kq24-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「そうですね。<ruby>午前中<rt>ごぜんちゅう</rt></ruby>に <ruby>お願いします<rt>おねがいします</rt></ruby>。」(Để xem nào... Nhờ hai anh đến vào buổi sáng giúp tôi nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。",
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。",
          "<ruby>昼<rt>ひる</rt></ruby>ごはんは わたしが <ruby>お弁当<rt>おべんとう</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って おきますから。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「<ruby>昼<rt>ひる</rt></ruby>ごはんは わたしが <ruby>お弁当<rt>おべんとう</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って おきますから。」(Bữa trưa thì tôi sẽ tự tay làm cơm hộp Bento chuẩn bị sẵn để mời hai anh.). Đáp lễ sự giúp đỡ của bạn bè bằng bữa cơm tự nấu."
      },
      {
        "id": "kq24-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>昼<rt>ひる</rt></ruby>ごはんは わたしが <ruby>お弁当<rt>おべんとう</rt></ruby>を <ruby>作<rt>つく</rt></ruby>って おきますから。」(Bữa trưa thì tôi sẽ tự tay làm cơm hộp Bento chuẩn bị sẵn để mời hai anh.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ほんとうですか。<ruby>楽しみ<rt>たのしみ</rt></ruby>に して います。",
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。",
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 24, câu đáp chuẩn xác là:「ほんとうですか。<ruby>楽しみ<rt>たのしみ</rt></ruby>に して います。」(Thật vậy sao! Tôi rất mong chờ được thưởng thức đấy.). 「<ruby>楽しみにしています<rt>たのしみにしています</rt></ruby>」: rất háo hức mong đợi."
      },
      {
        "id": "kq24-10",
        "question": "Để diễn đạt ý: \"Chị Karina ơi, Chủ nhật tuần sau chị chuyển nhà phải không?\" trong tình huống Bài 24, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "ええ。わたしは タナカさんに <ruby>車<rt>くるま</rt></ruby>を <ruby>借<rt>か</rt></ruby>りて <ruby>行<rt>い</rt></ruby>きますよ。",
          "カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。",
          "ええ。すみませんが、<ruby>手伝<rt>てつだ</rt></ruby>って くれませんか。",
          "いいですよ。ミラーさんも <ruby>来<rt>き</rt></ruby>て くれますね。"
        ],
        "correctIdx": 1,
        "explanation": "Câu「カリナさん、<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しですね。」dịch nghĩa là \"Chị Karina ơi, Chủ nhật tuần sau chị chuyển nhà phải không?\". 「<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>し」(ひっこし): việc chuyển nhà."
      }
    ]
  },
  "kaiwa-25": {
    "id": "kaiwa-25",
    "lesson": 25,
    "level": "Sơ cấp 1",
    "titleJp": "いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました",
    "titleVi": "Anh/chị đã giúp đỡ tôi rất nhiều",
    "subtitleVi": "Tiệc chia tay đồng nghiệp chuyển công tác lên Tokyo",
    "sceneType": "farewell",
    "context": "Anh Mike Miller nhận quyết định chuyển công tác từ chi nhánh Osaka lên trụ sở chính ở Tokyo. Trong buổi chia tay, anh cảm ơn các đồng nghiệp Yamada, Sato và hứa giữ liên lạc.",
    "objectives": [
      "Sử dụng mẫu giả định quá khứ / hoàn tất V-たら để nói về điều kiện trong tương lai.",
      "Diễn tả điều kiện nhượng bộ nghịch lý bằng V-ても / A-くても / A-でも.",
      "Nói lời tri ân sâu sắc khi chia tay hoặc chuyển công tác: いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました / どうぞ お<ruby>元気<rt>げんき</rt></ruby>で."
    ],
    "audioSrc": "audio/kaiwa/lesson_25.mp3",
    "audioDuration": 40.01,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_25.mp3",
    "renshuuAudioDuration": 52.49,
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
        "id": "k25-1",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
        "rawJp": "みなさん、大阪では いろいろ お世話に なりました。",
        "vi": "Thưa mọi người, trong thời gian ở Osaka tôi đã nhận được rất nhiều sự giúp đỡ của mọi người.",
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
        "explanation": "Câu tri ân trang trọng nhất khi kết thúc nhiệm kỳ công tác hoặc khóa học.",
        "time": [
          0,
          3.53
        ]
      },
      {
        "id": "k25-2",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "empathy_apology",
        "jp": "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。",
        "rawJp": "ミラーさん、東京へ 行っても、大阪の ことを 忘れないで くださいね。",
        "vi": "Anh Miller này, dù có chuyển lên Tokyo thì cũng đừng quên những kỷ niệm ở Osaka nhé.",
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
        "explanation": "「<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても」: cho dù có đi Tokyo (cấu trúc nhượng bộ V-ても).",
        "time": [
          3.91,
          9.29
        ]
      },
      {
        "id": "k25-3",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。",
        "rawJp": "もちろん 忘れませんよ。",
        "vi": "Tất nhiên là tôi không bao giờ quên rồi.",
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
        "explanation": "「もちろん」: tất nhiên, dĩ nhiên.",
        "time": [
          9.67,
          11.54
        ]
      },
      {
        "id": "k25-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "<ruby>暇<rt>ひま</rt></ruby>が あったら、ぜひ <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。",
        "rawJp": "暇が あったら、ぜひ 東京へ 遊びに 来て ください。",
        "vi": "Nếu có thời gian rảnh rỗi, mọi người nhất định hãy lên Tokyo chơi nhé.",
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
        "explanation": "「<ruby>暇<rt>ひま</rt></ruby>が あったら」: nếu có thời gian rảnh (mẫu điều kiện giả định ～たら).",
        "time": [
          11.86,
          15.58
        ]
      },
      {
        "id": "k25-5",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "greeting_gratitude",
        "jp": "ええ。<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>連絡<rt>れんらく</rt></ruby>しますね。",
        "rawJp": "ええ。東京へ 行ったら、連絡しますね。",
        "vi": "Vâng. Khi nào lên Tokyo, chúng tôi sẽ liên lạc với anh ngay.",
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
        ],
        "explanation": "「<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら」: sau khi/khi nào đến Tokyo thì sẽ liên lạc.",
        "time": [
          15.96,
          19.18
        ]
      },
      {
        "id": "k25-6",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "<ruby>向こう<rt>むこう</rt></ruby>で いい <ruby>人<rt>ひと</rt></ruby>が <ruby>見<rt>み</rt></ruby>つかったら、<ruby>結婚式<rt>けっこんしき</rt></ruby>に <ruby>呼<rt>よ</rt></ruby>んで くださいね。",
        "rawJp": "向こうで いい 人が 見つかったら、結婚式に 呼んで くださいね。",
        "vi": "Lên trên đó nếu tìm được ý trung nhân tốt thì nhớ mời bọn tôi dự đám cưới đấy nhé.",
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
        "explanation": "Lời trêu đùa thân mật của đồng nghiệp trong tiệc chia tay.",
        "time": [
          19.56,
          23.57
        ]
      },
      {
        "id": "k25-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ、もちろん。でも、<ruby>年<rt>ねん</rt></ruby>を <ruby>取<rt>と</rt></ruby>っても、ずっと <ruby>独身<rt>どくしん</rt></ruby>かも しれませんよ。",
        "rawJp": "ええ、もちろん。でも、年を 取っても、ずっと 独身かも しれませんよ。",
        "vi": "Vâng, tất nhiên rồi. Nhưng mà biết đâu dù có nhiều tuổi đi nữa tôi vẫn độc thân suốt thì sao.",
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
        "explanation": "「<ruby>年<rt>ねん</rt></ruby>を <ruby>取<rt>と</rt></ruby>っても」(としをとっても): dù cho có già đi / thêm tuổi.",
        "time": [
          23.95,
          29.9
        ]
      },
      {
        "id": "k25-8",
        "speakerId": "sato",
        "speakerBadge": "<ruby>佐藤<rt>さとう</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "そんな ことは ありませんよ。じゃ、ミラーさん、どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。",
        "rawJp": "そんな ことは ありませんよ。じゃ、ミラーさん、どうぞ お元気で。",
        "vi": "Không có chuyện đó đâu mà. Vậy anh Miller ơi, chúc anh luôn mạnh khỏe nhé!",
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
        "explanation": "「どうぞ お<ruby>元気<rt>げんき</rt></ruby>で」là lời chúc sức khỏe khi chia tay đi xa dài ngày.",
        "time": [
          30.29,
          35.18
        ]
      },
      {
        "id": "k25-9",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "みなさんも どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。ほんとうに ありがとう ございました。",
        "rawJp": "みなさんも どうぞ お元気で。ほんとうに ありがとう ございました。",
        "vi": "Mọi người cũng giữ gìn sức khỏe nhé. Thực sự cảm ơn mọi người rất nhiều!",
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
        "explanation": "Khép lại 25 bài Sơ cấp 1 đầy cảm xúc.",
        "time": [
          35.57,
          40.01
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc25-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Đưa ra giải pháp theo điều kiện giả định (～たら)",
        "context": "Thảo luận kế hoạch tùy theo thời tiết hoặc tình huống.",
        "lines": [
          {
            "id": "rc25-1-l1",
            "speaker": "A",
            "jp": "あした <u><ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>ったら</u>、どう しますか。",
            "rawJp": "あした 雨が 降ったら、どう しますか。",
            "vi": "Ngày mai nếu trời mưa thì chúng ta làm thế nào?"
          },
          {
            "id": "rc25-1-l2",
            "speaker": "B",
            "jp": "そうですね。<u><ruby>出<rt>だ</rt></ruby>かけないで、うちに います</u>。",
            "rawJp": "そうですね。出かけないで、うちに います。",
            "vi": "Để xem nào... Tôi sẽ không ra ngoài mà ở nhà thôi."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Trời mưa / Không ra ngoài mà ở nhà)",
            "values": [
              "<ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>ったら",
              "<ruby>出<rt>だ</rt></ruby>かけないで、うちに います"
            ],
            "rawValues": [
              "雨が 降ったら",
              "出かけないで、うちに います"
            ],
            "viValues": [
              "trời mưa",
              "không ra ngoài mà ở nhà"
            ],
            "lineTimings": [
              [
                0,
                2.57
              ],
              [
                2.95,
                6.26
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
            "label": "Mẫu 2 (Trời đẹp / Đi câu cá ở biển)",
            "values": [
              "いい <ruby>天気<rt>てんき</rt></ruby>だったら",
              "<ruby>海<rt>うみ</rt></ruby>へ <ruby>釣<rt>つ</rt></ruby>りに <ruby>行<rt>い</rt></ruby>きます"
            ],
            "rawValues": [
              "いい 天気だったら",
              "海へ 釣りに 行きます"
            ],
            "viValues": [
              "trời đẹp",
              "đi câu cá ở biển"
            ],
            "lineTimings": [
              [
                6.65,
                9.34
              ],
              [
                9.72,
                12.41
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
          },
          {
            "label": "Mẫu 3 (Không kịp giờ tàu / Đi bằng taxi)",
            "values": [
              "<ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わなかったら",
              "タクシーで <ruby>行<rt>い</rt></ruby>きます"
            ],
            "rawValues": [
              "電車に 間に合わなかったら",
              "タクシーで 行きます"
            ],
            "viValues": [
              "trễ tàu",
              "đi bằng taxi"
            ],
            "lineTimings": [
              [
                12.79,
                16.08
              ],
              [
                16.46,
                18.98
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
              }
            ]
          }
        ]
      },
      {
        "id": "rc25-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Hành động tiếp nối sau khi hoàn tất (V-たら)",
        "context": "Hẹn liên lạc hoặc thực hiện việc tiếp theo khi xong việc.",
        "lines": [
          {
            "id": "rc25-2-l1",
            "speaker": "A",
            "jp": "<ruby>何時<rt>なんじ</rt></ruby>に <ruby>出<rt>で</rt></ruby>かけますか。",
            "rawJp": "何時に 出かけますか。",
            "vi": "Mấy giờ chúng ta xuất phát?"
          },
          {
            "id": "rc25-2-l2",
            "speaker": "B",
            "jp": "<u><ruby>仕事<rt>しごと</rt></ruby>が <ruby>終<rt>お</rt></ruby>わったら</u>、すぐ <ruby>出<rt>だ</rt></ruby>かけましょう。",
            "rawJp": "仕事が 終わったら、すぐ 出かけましょう。",
            "vi": "Khi nào công việc kết thúc thì chúng mình đi ngay nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Khi công việc kết thúc)",
            "values": [
              "<ruby>仕事<rt>しごと</rt></ruby>が <ruby>終<rt>お</rt></ruby>わったら"
            ],
            "rawValues": [
              "仕事が 終わったら"
            ],
            "viValues": [
              "khi công việc kết thúc"
            ],
            "lineTimings": [
              [
                19.37,
                20.86
              ],
              [
                21.24,
                24.14
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
            "label": "Mẫu 2 (Khi anh Miller đến)",
            "values": [
              "ミラーさんが <ruby>来<rt>き</rt></ruby>たら"
            ],
            "rawValues": [
              "ミラーさんが 来たら"
            ],
            "viValues": [
              "khi anh Miller đến"
            ],
            "lineTimings": [
              [
                19.37,
                20.86
              ],
              [
                24.53,
                27.34
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
          },
          {
            "label": "Mẫu 3 (Khi đến sân bay)",
            "values": [
              "<ruby>空港<rt>くうこう</rt></ruby>に <ruby>着<rt>つ</rt></ruby>いたら"
            ],
            "rawValues": [
              "空港に 着いたら"
            ],
            "viValues": [
              "khi đến sân bay"
            ],
            "lineTimings": [
              [
                19.37,
                20.86
              ],
              [
                27.72,
                30.48
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
          }
        ]
      },
      {
        "id": "rc25-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Giả định ngược chiều (～ても)",
        "context": "Khẳng định ý chí hoặc sự thật dù điều kiện bất lợi.",
        "lines": [
          {
            "id": "rc25-3-l1",
            "speaker": "A",
            "jp": "この パソコン、<u><ruby>安<rt>やす</rt></ruby>くても</u>、<ruby>買<rt>か</rt></ruby>いませんか。",
            "rawJp": "この パソコン、安くても、買いませんか。",
            "vi": "Chiếc máy tính này dù rẻ bạn cũng không mua à?"
          },
          {
            "id": "rc25-3-l2",
            "speaker": "B",
            "jp": "ええ。<u><ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が <ruby>難<rt>むずか</rt></ruby>しいです</u>から、<ruby>買<rt>か</rt></ruby>いません。",
            "rawJp": "ええ。使い方が 難しいですから、買いません。",
            "vi": "Vâng. Vì cách sử dụng khó nên tôi không mua đâu."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Dù rẻ / Vì khó sử dụng)",
            "values": [
              "<ruby>安<rt>やす</rt></ruby>くても",
              "<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が <ruby>難<rt>むずか</rt></ruby>しいです"
            ],
            "rawValues": [
              "安くても",
              "使い方が 難しいです"
            ],
            "viValues": [
              "dù rẻ",
              "cách dùng khó"
            ],
            "lineTimings": [
              [
                30.86,
                33.86
              ],
              [
                34.25,
                37.85
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
            "label": "Mẫu 2 (Dù nhấn nút / Máy vẫn không chạy)",
            "values": [
              "スイッチを <ruby>押<rt>お</rt></ruby>しても",
              "<ruby>動<rt>うご</rt></ruby>きません"
            ],
            "rawValues": [
              "スイッチを 押しても",
              "動きません"
            ],
            "viValues": [
              "dù bấm công tắc",
              "không chạy"
            ],
            "lineTimings": [
              [
                38.23,
                41.81
              ],
              [
                42.19,
                45.07
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
              }
            ]
          },
          {
            "label": "Mẫu 3 (Dù tra từ điển / Vẫn không hiểu nghĩa)",
            "values": [
              "<ruby>辞書<rt>じしょ</rt></ruby>で <ruby>調<rt>しら</rt></ruby>べても",
              "<ruby>意味<rt>いみ</rt></ruby>が わかりません"
            ],
            "rawValues": [
              "辞書で 調べても",
              "意味が わかりません"
            ],
            "viValues": [
              "dù tra từ điển",
              "không hiểu nghĩa"
            ],
            "lineTimings": [
              [
                45.46,
                48.89
              ],
              [
                49.27,
                52.49
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq25-1",
        "question": "Chủ đề chính của bài hội thoại Bài 25「いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Anh/chị đã giúp đỡ tôi rất nhiều",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました」trong Bài 25 có nghĩa là \"Anh/chị đã giúp đỡ tôi rất nhiều\". Bối cảnh: Anh Mike Miller nhận quyết định chuyển công tác từ chi nhánh Osaka lên trụ sở chính ở Tokyo. Trong buổi chia tay, anh cảm ơn các đồng nghiệp Yamada, Sato và hứa giữ liên lạc."
      },
      {
        "id": "kq25-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。」(Thưa mọi người, trong thời gian ở Osaka tôi đã nhận được rất nhiều sự giúp đỡ của mọi người.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>暇<rt>ひま</rt></ruby>が あったら、ぜひ <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。",
          "ええ。<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>連絡<rt>れんらく</rt></ruby>しますね。",
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。",
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。」(Anh Miller này, dù có chuyển lên Tokyo thì cũng đừng quên những kỷ niệm ở Osaka nhé.). 「<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても」: cho dù có đi Tokyo (cấu trúc nhượng bộ V-ても)."
      },
      {
        "id": "kq25-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。」(Anh Miller này, dù có chuyển lên Tokyo thì cũng đừng quên những kỷ niệm ở Osaka nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
          "<ruby>暇<rt>ひま</rt></ruby>が あったら、ぜひ <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。",
          "ええ。<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>連絡<rt>れんらく</rt></ruby>しますね。",
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。」(Tất nhiên là tôi không bao giờ quên rồi.). 「もちろん」: tất nhiên, dĩ nhiên."
      },
      {
        "id": "kq25-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。」(Tất nhiên là tôi không bao giờ quên rồi.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>暇<rt>ひま</rt></ruby>が あったら、ぜひ <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。",
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。",
          "ええ。<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>連絡<rt>れんらく</rt></ruby>しますね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「<ruby>暇<rt>ひま</rt></ruby>が あったら、ぜひ <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。」(Nếu có thời gian rảnh rỗi, mọi người nhất định hãy lên Tokyo chơi nhé.). 「<ruby>暇<rt>ひま</rt></ruby>が あったら」: nếu có thời gian rảnh (mẫu điều kiện giả định ～たら)."
      },
      {
        "id": "kq25-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>暇<rt>ひま</rt></ruby>が あったら、ぜひ <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。」(Nếu có thời gian rảnh rỗi, mọi người nhất định hãy lên Tokyo chơi nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。",
          "ええ。<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>連絡<rt>れんらく</rt></ruby>しますね。",
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「ええ。<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>連絡<rt>れんらく</rt></ruby>しますね。」(Vâng. Khi nào lên Tokyo, chúng tôi sẽ liên lạc với anh ngay.). 「<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら」: sau khi/khi nào đến Tokyo thì sẽ liên lạc."
      },
      {
        "id": "kq25-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>連絡<rt>れんらく</rt></ruby>しますね。」(Vâng. Khi nào lên Tokyo, chúng tôi sẽ liên lạc với anh ngay.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。",
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。",
          "<ruby>向こう<rt>むこう</rt></ruby>で いい <ruby>人<rt>ひと</rt></ruby>が <ruby>見<rt>み</rt></ruby>つかったら、<ruby>結婚式<rt>けっこんしき</rt></ruby>に <ruby>呼<rt>よ</rt></ruby>んで くださいね。",
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「<ruby>向こう<rt>むこう</rt></ruby>で いい <ruby>人<rt>ひと</rt></ruby>が <ruby>見<rt>み</rt></ruby>つかったら、<ruby>結婚式<rt>けっこんしき</rt></ruby>に <ruby>呼<rt>よ</rt></ruby>んで くださいね。」(Lên trên đó nếu tìm được ý trung nhân tốt thì nhớ mời bọn tôi dự đám cưới đấy nhé.). Lời trêu đùa thân mật của đồng nghiệp trong tiệc chia tay."
      },
      {
        "id": "kq25-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>向こう<rt>むこう</rt></ruby>で いい <ruby>人<rt>ひと</rt></ruby>が <ruby>見<rt>み</rt></ruby>つかったら、<ruby>結婚式<rt>けっこんしき</rt></ruby>に <ruby>呼<rt>よ</rt></ruby>んで くださいね。」(Lên trên đó nếu tìm được ý trung nhân tốt thì nhớ mời bọn tôi dự đám cưới đấy nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。",
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。",
          "ええ、もちろん。でも、<ruby>年<rt>ねん</rt></ruby>を <ruby>取<rt>と</rt></ruby>っても、ずっと <ruby>独身<rt>どくしん</rt></ruby>かも しれませんよ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「ええ、もちろん。でも、<ruby>年<rt>ねん</rt></ruby>を <ruby>取<rt>と</rt></ruby>っても、ずっと <ruby>独身<rt>どくしん</rt></ruby>かも しれませんよ。」(Vâng, tất nhiên rồi. Nhưng mà biết đâu dù có nhiều tuổi đi nữa tôi vẫn độc thân suốt thì sao.). 「<ruby>年<rt>ねん</rt></ruby>を <ruby>取<rt>と</rt></ruby>っても」(としをとっても): dù cho có già đi / thêm tuổi."
      },
      {
        "id": "kq25-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、もちろん。でも、<ruby>年<rt>ねん</rt></ruby>を <ruby>取<rt>と</rt></ruby>っても、ずっと <ruby>独身<rt>どくしん</rt></ruby>かも しれませんよ。」(Vâng, tất nhiên rồi. Nhưng mà biết đâu dù có nhiều tuổi đi nữa tôi vẫn độc thân suốt thì sao.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "そんな ことは ありませんよ。じゃ、ミラーさん、どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。",
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。",
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「そんな ことは ありませんよ。じゃ、ミラーさん、どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。」(Không có chuyện đó đâu mà. Vậy anh Miller ơi, chúc anh luôn mạnh khỏe nhé!). 「どうぞ お<ruby>元気<rt>げんき</rt></ruby>で」là lời chúc sức khỏe khi chia tay đi xa dài ngày."
      },
      {
        "id": "kq25-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「そんな ことは ありませんよ。じゃ、ミラーさん、どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。」(Không có chuyện đó đâu mà. Vậy anh Miller ơi, chúc anh luôn mạnh khỏe nhé!), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。",
          "みなさんも どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。ほんとうに ありがとう ございました。",
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 25, câu đáp chuẩn xác là:「みなさんも どうぞ お<ruby>元気<rt>げんき</rt></ruby>で。ほんとうに ありがとう ございました。」(Mọi người cũng giữ gìn sức khỏe nhé. Thực sự cảm ơn mọi người rất nhiều!). Khép lại 25 bài Sơ cấp 1 đầy cảm xúc."
      },
      {
        "id": "kq25-10",
        "question": "Để diễn đạt ý: \"Thưa mọi người, trong thời gian ở Osaka tôi đã nhận được rất nhiều sự giúp đỡ của mọi người.\" trong tình huống Bài 25, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "もちろん <ruby>忘<rt>わす</rt></ruby>れませんよ。",
          "<ruby>暇<rt>ひま</rt></ruby>が あったら、ぜひ <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>遊<rt>あそ</rt></ruby>びに <ruby>来<rt>き</rt></ruby>て ください。",
          "みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。",
          "ミラーさん、<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>っても、<ruby>大阪<rt>おおさか</rt></ruby>の ことを <ruby>忘<rt>わす</rt></ruby>れないで くださいね。"
        ],
        "correctIdx": 2,
        "explanation": "Câu「みなさん、<ruby>大阪<rt>おおさか</rt></ruby>では いろいろ お<ruby>世話<rt>せわ</rt></ruby>に なりました。」dịch nghĩa là \"Thưa mọi người, trong thời gian ở Osaka tôi đã nhận được rất nhiều sự giúp đỡ của mọi người.\". Câu tri ân trang trọng nhất khi kết thúc nhiệm kỳ công tác hoặc khóa học."
      }
    ]
  },
  "kaiwa-26": {
    "id": "kaiwa-26",
    "lesson": 26,
    "level": "Sơ cấp 2",
    "titleJp": "ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか",
    "titleVi": "Tôi nên đổ rác ở đâu thì được ạ?",
    "subtitleVi": "Hỏi quy định phân loại rác khi mới chuyển lên Tokyo (Mở đầu N4)",
    "sceneType": "neighbor_gift",
    "context": "Anh Miller vừa chuyển đến khu chung cư mới ở Tokyo nên gặp bà quản lý tòa nhà (<ruby>管理人<rt>かんりにん</rt></ruby>) để hỏi về lịch đổ rác đốt được, rác tái chế và nơi tập kết rác.",
    "objectives": [
      "Sử dụng thành thạo cấu trúc ～んです / ～んですが để giải thích lý do, tìm kiếm lời khuyên hoặc mở đầu câu chuyện.",
      "Xin sự chỉ dẫn, lời khuyên từ người có kinh nghiệm bằng mẫu: [Từ để hỏi] + V-たら いいですか.",
      "Hiểu văn hóa phân loại rác nghiêm ngặt tại các khu dân cư Nhật Bản (<ruby>燃<rt>も</rt></ruby>える ごみ、<ruby>燃<rt>も</rt></ruby>えない ごみ、資源ごみ)."
    ],
    "audioSrc": "audio/kaiwa/lesson_26.mp3",
    "audioDuration": 40.66,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_26.mp3",
    "renshuuAudioDuration": 55.44,
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
        "id": "kanrinin",
        "badgeJp": "<ruby>管理人<rt>かんりにん</rt></ruby>",
        "fullNameJp": "マンションの <ruby>管理人<rt>かんりにん</rt></ruby>",
        "roleVi": "người quản lý tòa chung cư",
        "color": "emerald",
        "gender": "female",
        "pitch": 0.95,
        "rate": 0.92,
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "speechGenVoice": "Seraphina",
        "voiceName": "Seraphina-Calm (Quản lý điềm đạm)"
      }
    ],
    "dialogue": [
      {
        "id": "k26-1",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
        "rawJp": "あのう、きのう 引っ越して 来た ミラーです。よろしく お願いします。",
        "vi": "À xin chào bác, cháu là Miller mới chuyển đến hôm qua ạ. Rất mong bác giúp đỡ.",
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
        "explanation": "Giới thiệu bản thân với người quản lý tòa nhà.",
        "time": [
          0,
          5.35
        ]
      },
      {
        "id": "k26-2",
        "speakerId": "kanrinin",
        "speakerBadge": "<ruby>管理人<rt>かんりにん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。",
        "rawJp": "ああ、305号室の ミラーさんですね。こちらこそ よろしく。",
        "vi": "À, anh Miller ở phòng 305 phải không. Bác cũng rất vui được biết cháu.",
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
        "explanation": "「305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>」(さんまるごごうしつ): phòng số 305.",
        "time": [
          5.74,
          11.28
        ]
      },
      {
        "id": "k26-3",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "hesitation",
        "jp": "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
        "rawJp": "あのう、ごみの 日に ついて お聞きしたいんですが、ごみは どこに 出したら いいですか。",
        "vi": "Dạ cháu muốn hỏi một chút về ngày đổ rác ạ, rác thì cháu nên mang ra để ở đâu thì được ạ?",
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
        ],
        "explanation": "Mở đầu bằng「～んですが」để dẫn dắt lịch sự vào câu hỏi xin chỉ dẫn「どこに <ruby>出<rt>だ</rt></ruby>したら いいですか」.",
        "time": [
          11.78,
          17.66
        ]
      },
      {
        "id": "k26-4",
        "speakerId": "kanrinin",
        "speakerBadge": "<ruby>管理人<rt>かんりにん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。",
        "rawJp": "燃える ごみは 月曜日と 木曜日の 朝 出して ください。",
        "vi": "Rác đốt được thì cháu hãy mang ra vào buổi sáng thứ Hai và thứ Năm nhé.",
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
        "explanation": "「<ruby>燃<rt>も</rt></ruby>えるごみ」(もえるごみ): rác cháy được (rác nhà bếp, giấy vụn).",
        "time": [
          18.12,
          22.58
        ]
      },
      {
        "id": "k26-5",
        "speakerId": "kanrinin",
        "speakerBadge": "<ruby>管理人<rt>かんりにん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>は <ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>ですよ。",
        "rawJp": "置き場所は 駐車場の 横ですよ。",
        "vi": "Chỗ tập kết rác nằm ở ngay bên cạnh bãi đỗ xe đấy.",
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
        "explanation": "「<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>」(おきばしょ): nơi đặt, điểm tập kết.",
        "time": [
          22.9,
          25.73
        ]
      },
      {
        "id": "k26-6",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "question",
        "jp": "びんや <ruby>缶<rt>かん</rt></ruby>は いつが いいですか。",
        "rawJp": "びんや 缶は いつが いいですか。",
        "vi": "Còn chai lọ thủy tinh hay vỏ lon thì đổ vào hôm nào được ạ?",
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
        "explanation": "「びんや <ruby>缶<rt>かん</rt></ruby>」thuộc nhóm rác tài nguyên tái chế.",
        "time": [
          26.11,
          28.15
        ]
      },
      {
        "id": "k26-7",
        "speakerId": "kanrinin",
        "speakerBadge": "<ruby>管理人<rt>かんりにん</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "de-DE-SeraphinaMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>土曜日<rt>どようび</rt></ruby>です。それから、お<ruby>湯<rt>ゆ</rt></ruby>が <ruby>出<rt>で</rt></ruby>ないときや ガスが つかないときは、すぐ <ruby>連絡<rt>れんらく</rt></ruby>して くださいね。",
        "rawJp": "土曜日です。それから、お湯が 出ないときや ガスが つかないときは、すぐ 連絡して くださいね。",
        "vi": "Là thứ Bảy cháu nhé. Ngoài ra, khi nào nước nóng không chảy hay bếp gas không lên lửa thì báo ngay cho bác nhé.",
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
        "explanation": "Quản lý tòa nhà dặn dò thêm về sự cố điện nước.",
        "time": [
          28.61,
          36.31
        ]
      },
      {
        "id": "k26-8",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "はい、わかりました。どうも ありがとう ございます。",
        "rawJp": "はい、わかりました。どうも ありがとう ございます。",
        "vi": "Dạ cháu rõ rồi ạ. Cháu cảm ơn bác nhiều.",
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
        "explanation": "Cảm ơn sự hướng dẫn tận tình.",
        "time": [
          36.7,
          40.66
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc26-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi lý do bằng ～んですか và trả lời bằng ～んです",
        "context": "Thắc mắc khi thấy đồng nghiệp đến muộn hoặc mua đồ mới.",
        "lines": [
          {
            "id": "rc26-1-l1",
            "speaker": "A",
            "jp": "どう したんですか。",
            "rawJp": "どう したんですか。",
            "vi": "Có chuyện gì thế?"
          },
          {
            "id": "rc26-1-l2",
            "speaker": "B",
            "jp": "<u><ruby>傘<rt>かさ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れた</u>んです。<u><ruby>駅<rt>えき</rt></ruby>の <ruby>階段<rt>かいだん</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて <ruby>来<rt>き</rt></ruby>ました</u>。",
            "rawJp": "傘を 忘れたんです。駅の 階段に 置いて 来ました。",
            "vi": "Tôi để quên ô mất rồi. Tôi để quên ở cầu thang nhà ga."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Để quên ô ở cầu thang nhà ga)",
            "values": [
              "<ruby>傘<rt>かさ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れた",
              "<ruby>駅<rt>えき</rt></ruby>の <ruby>階段<rt>かいだん</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて <ruby>来<rt>き</rt></ruby>ました"
            ],
            "rawValues": [
              "傘を 忘れた",
              "駅の 階段に 置いて 来ました"
            ],
            "viValues": [
              "để quên ô",
              "để ở cầu thang ga"
            ],
            "lineTimings": [
              [
                0,
                1.34
              ],
              [
                1.73,
                5.42
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
            "label": "Mẫu 2 (Đau bụng vì ăn quá nhiều)",
            "values": [
              "おなかが <ruby>痛<rt>いた</rt></ruby>い",
              "きのう <ruby>食<rt>た</rt></ruby>べすぎました"
            ],
            "rawValues": [
              "おなかが 痛い",
              "きのう 食べすぎました"
            ],
            "viValues": [
              "đau bụng",
              "ăn quá nhiều hôm qua"
            ],
            "lineTimings": [
              [
                0,
                1.34
              ],
              [
                5.81,
                9
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
            "label": "Mẫu 3 (Đến muộn vì tàu gặp tai nạn)",
            "values": [
              "<ruby>遅<rt>おそ</rt></ruby>れた",
              "<ruby>事故<rt>じこ</rt></ruby>が あって、<ruby>電車<rt>でんしゃ</rt></ruby>が <ruby>止<rt>と</rt></ruby>まりました"
            ],
            "rawValues": [
              "遅れた",
              "事故が あって、電車が 止まりました"
            ],
            "viValues": [
              "đến muộn",
              "có tai nạn nên tàu dừng"
            ],
            "lineTimings": [
              [
                0,
                1.34
              ],
              [
                9.38,
                13.78
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
        "id": "rc26-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nêu tình huống bằng ～んですが và nhờ giúp đỡ",
        "context": "Nhờ kiểm tra văn bản hoặc đổi tiền lẻ.",
        "lines": [
          {
            "id": "rc26-2-l1",
            "speaker": "A",
            "jp": "すみません。<u><ruby>日本語<rt>にほんご</rt></ruby>で <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた</u>んですが、ちょっと <u><ruby>見<rt>み</rt></ruby>て いただけませんか</u>。",
            "rawJp": "すみません。日本語で 手紙を 書いたんですが、ちょっと 見て いただけませんか。",
            "vi": "Xin lỗi, tôi vừa viết bức thư bằng tiếng Nhật, anh/chị xem qua giúp tôi một chút có được không ạ?"
          },
          {
            "id": "rc26-2-l2",
            "speaker": "B",
            "jp": "いいですよ。どれですか。",
            "rawJp": "いいですよ。どれですか。",
            "vi": "Được chứ. Đâu, bức nào thế?"
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Viết thư tiếng Nhật / Nhờ xem giúp)",
            "values": [
              "<ruby>日本語<rt>にほんご</rt></ruby>で <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>いた",
              "<ruby>見<rt>み</rt></ruby>て いただけませんか"
            ],
            "rawValues": [
              "日本語で 手紙を 書いた",
              "見て いただけませんか"
            ],
            "viValues": [
              "viết thư tiếng Nhật",
              "xem giúp"
            ],
            "lineTimings": [
              [
                14.16,
                19.27
              ],
              [
                19.66,
                21.67
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
              }
            ]
          },
          {
            "label": "Mẫu 2 (Không biết số ĐT / Nhờ tra giúp)",
            "values": [
              "<ruby>電話番号<rt>でんわばんごう</rt></ruby>が わからない",
              "<ruby>調<rt>しら</rt></ruby>べて いただけませんか"
            ],
            "rawValues": [
              "電話番号が わからない",
              "調べて いただけませんか"
            ],
            "viValues": [
              "không biết số ĐT",
              "tra giúp"
            ],
            "lineTimings": [
              [
                22.06,
                27.43
              ],
              [
                19.66,
                21.67
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
              }
            ]
          },
          {
            "label": "Mẫu 3 (Muốn mượn hội trường / Nhờ hướng dẫn)",
            "values": [
              "<ruby>会議室<rt>かいぎしつ</rt></ruby>を <ruby>借<rt>か</rt></ruby>りたい",
              "<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えて いただけませんか"
            ],
            "rawValues": [
              "会議室を 借りたい",
              "申し込み方を 教えて いただけませんか"
            ],
            "viValues": [
              "muốn mượn phòng họp",
              "chỉ cách đăng ký"
            ],
            "lineTimings": [
              [
                27.82,
                33.72
              ],
              [
                19.66,
                21.67
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
              }
            ]
          }
        ]
      },
      {
        "id": "rc26-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Xin lời khuyên bằng [Từ để hỏi] + V-たら いいですか",
        "context": "Hỏi nên mua quà gì hoặc nên đi khám ở đâu.",
        "lines": [
          {
            "id": "rc26-3-l1",
            "speaker": "A",
            "jp": "<u><ruby>友達<rt>ともだち</rt></ruby>の <ruby>結婚式<rt>けっこんしき</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を あげたら</u> いいですか。",
            "rawJp": "友達の 結婚式に 何を あげたら いいですか。",
            "vi": "Đám cưới của bạn thì tôi nên tặng quà gì thì được nhỉ?"
          },
          {
            "id": "rc26-3-l2",
            "speaker": "B",
            "jp": "そうですね。<u>お<ruby>金<rt>かね</rt></ruby>を あげたら</u> どうですか。",
            "rawJp": "そうですね。お金を あげたら どうですか。",
            "vi": "Để xem nào... Bạn mừng phong bì tiền thì sao?"
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đám cưới bạn / Mừng tiền)",
            "values": [
              "<ruby>友達<rt>ともだち</rt></ruby>の <ruby>結婚式<rt>けっこんしき</rt></ruby>に <ruby>何<rt>なん</rt></ruby>を あげたら",
              "お<ruby>金<rt>かね</rt></ruby>を あげたら"
            ],
            "rawValues": [
              "友達の 結婚式に 何を あげたら",
              "お金を あげたら"
            ],
            "viValues": [
              "tặng gì đám cưới bạn",
              "mừng tiền"
            ],
            "lineTimings": [
              [
                34.1,
                37.27
              ],
              [
                37.66,
                40.63
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
              }
            ]
          },
          {
            "label": "Mẫu 2 (Muốn học nấu món Nhật / Mua sách dạy nấu ăn)",
            "values": [
              "<ruby>日本料理<rt>にほんりょうり</rt></ruby>を <ruby>習<rt>なら</rt></ruby>いたいんですが、どこへ <ruby>行<rt>い</rt></ruby>ったら",
              "<ruby>料理<rt>りょうり</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら"
            ],
            "rawValues": [
              "日本料理を 習いたいんですが、どこへ 行ったら",
              "料理教室へ 行ったら"
            ],
            "viValues": [
              "đi đâu học nấu món Nhật",
              "đến lớp học nấu ăn"
            ],
            "lineTimings": [
              [
                41.02,
                44.93
              ],
              [
                45.31,
                48.58
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
              }
            ]
          },
          {
            "label": "Mẫu 3 (Bị sốt cao / Đến bệnh viện lớn)",
            "values": [
              "<ruby>熱<rt>ねつ</rt></ruby>が あるんですが、どう したら",
              "すぐ <ruby>病院<rt>びょういん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら"
            ],
            "rawValues": [
              "熱が あるんですが、どう したら",
              "すぐ 病院へ 行ったら"
            ],
            "viValues": [
              "bị sốt nên làm sao",
              "đến bệnh viện ngay"
            ],
            "lineTimings": [
              [
                48.96,
                51.84
              ],
              [
                52.22,
                55.44
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
              }
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq26-1",
        "question": "Chủ đề chính của bài hội thoại Bài 26「ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Tôi nên đổ rác ở đâu thì được ạ?",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか」trong Bài 26 có nghĩa là \"Tôi nên đổ rác ở đâu thì được ạ?\". Bối cảnh: Anh Miller vừa chuyển đến khu chung cư mới ở Tokyo nên gặp bà quản lý tòa nhà (<ruby>管理人<rt>かんりにん</rt></ruby>) để hỏi về lịch đổ rác đốt được, rác tái chế và nơi tập kết rác."
      },
      {
        "id": "kq26-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。」(À xin chào bác, cháu là Miller mới chuyển đến hôm qua ạ. Rất mong bác giúp đỡ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
          "<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。",
          "<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>は <ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>ですよ。",
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 26, câu đáp chuẩn xác là:「ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。」(À, anh Miller ở phòng 305 phải không. Bác cũng rất vui được biết cháu.). 「305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>」(さんまるごごうしつ): phòng số 305."
      },
      {
        "id": "kq26-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。」(À, anh Miller ở phòng 305 phải không. Bác cũng rất vui được biết cháu.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。",
          "<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>は <ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>ですよ。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 26, câu đáp chuẩn xác là:「あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。」(Dạ cháu muốn hỏi một chút về ngày đổ rác ạ, rác thì cháu nên mang ra để ở đâu thì được ạ?). Mở đầu bằng「～んですが」để dẫn dắt lịch sự vào câu hỏi xin chỉ dẫn「どこに <ruby>出<rt>だ</rt></ruby>したら いいですか」."
      },
      {
        "id": "kq26-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。」(Dạ cháu muốn hỏi một chút về ngày đổ rác ạ, rác thì cháu nên mang ra để ở đâu thì được ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>は <ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>ですよ。",
          "<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。",
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 26, câu đáp chuẩn xác là:「<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。」(Rác đốt được thì cháu hãy mang ra vào buổi sáng thứ Hai và thứ Năm nhé.). 「<ruby>燃<rt>も</rt></ruby>えるごみ」(もえるごみ): rác cháy được (rác nhà bếp, giấy vụn)."
      },
      {
        "id": "kq26-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。」(Rác đốt được thì cháu hãy mang ra vào buổi sáng thứ Hai và thứ Năm nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。",
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
          "<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>は <ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>ですよ。",
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 26, câu đáp chuẩn xác là:「<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>は <ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>ですよ。」(Chỗ tập kết rác nằm ở ngay bên cạnh bãi đỗ xe đấy.). 「<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>」(おきばしょ): nơi đặt, điểm tập kết."
      },
      {
        "id": "kq26-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>は <ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の <ruby>横<rt>よこ</rt></ruby>ですよ。」(Chỗ tập kết rác nằm ở ngay bên cạnh bãi đỗ xe đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。",
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
          "びんや <ruby>缶<rt>かん</rt></ruby>は いつが いいですか。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 26, câu đáp chuẩn xác là:「びんや <ruby>缶<rt>かん</rt></ruby>は いつが いいですか。」(Còn chai lọ thủy tinh hay vỏ lon thì đổ vào hôm nào được ạ?). 「びんや <ruby>缶<rt>かん</rt></ruby>」thuộc nhóm rác tài nguyên tái chế."
      },
      {
        "id": "kq26-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「びんや <ruby>缶<rt>かん</rt></ruby>は いつが いいですか。」(Còn chai lọ thủy tinh hay vỏ lon thì đổ vào hôm nào được ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>土曜日<rt>どようび</rt></ruby>です。それから、お<ruby>湯<rt>ゆ</rt></ruby>が <ruby>出<rt>で</rt></ruby>ないときや ガスが つかないときは、すぐ <ruby>連絡<rt>れんらく</rt></ruby>して くださいね。",
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。",
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 26, câu đáp chuẩn xác là:「<ruby>土曜日<rt>どようび</rt></ruby>です。それから、お<ruby>湯<rt>ゆ</rt></ruby>が <ruby>出<rt>で</rt></ruby>ないときや ガスが つかないときは、すぐ <ruby>連絡<rt>れんらく</rt></ruby>して くださいね。」(Là thứ Bảy cháu nhé. Ngoài ra, khi nào nước nóng không chảy hay bếp gas không lên lửa thì báo ngay cho bác nhé.). Quản lý tòa nhà dặn dò thêm về sự cố điện nước."
      },
      {
        "id": "kq26-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>土曜日<rt>どようび</rt></ruby>です。それから、お<ruby>湯<rt>ゆ</rt></ruby>が <ruby>出<rt>で</rt></ruby>ないときや ガスが つかないときは、すぐ <ruby>連絡<rt>れんらく</rt></ruby>して くださいね。」(Là thứ Bảy cháu nhé. Ngoài ra, khi nào nước nóng không chảy hay bếp gas không lên lửa thì báo ngay cho bác nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
          "はい、わかりました。どうも ありがとう ございます。",
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 26, câu đáp chuẩn xác là:「はい、わかりました。どうも ありがとう ございます。」(Dạ cháu rõ rồi ạ. Cháu cảm ơn bác nhiều.). Cảm ơn sự hướng dẫn tận tình."
      },
      {
        "id": "kq26-9",
        "question": "Để diễn đạt ý: \"À xin chào bác, cháu là Miller mới chuyển đến hôm qua ạ. Rất mong bác giúp đỡ.\" trong tình huống Bài 26, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
          "<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。",
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。"
        ],
        "correctIdx": 2,
        "explanation": "Câu「あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。」dịch nghĩa là \"À xin chào bác, cháu là Miller mới chuyển đến hôm qua ạ. Rất mong bác giúp đỡ.\". Giới thiệu bản thân với người quản lý tòa nhà."
      },
      {
        "id": "kq26-10",
        "question": "Để diễn đạt ý: \"À, anh Miller ở phòng 305 phải không. Bác cũng rất vui được biết cháu.\" trong tình huống Bài 26, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "あのう、きのう <ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>して <ruby>来<rt>き</rt></ruby>た ミラーです。よろしく <ruby>お願いします<rt>おねがいします</rt></ruby>。",
          "あのう、ごみの <ruby>日<rt>にち</rt></ruby>に ついて お<ruby>聞<rt>き</rt></ruby>きしたいんですが、ごみは どこに <ruby>出<rt>だ</rt></ruby>したら いいですか。",
          "<ruby>燃<rt>も</rt></ruby>える ごみは <ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>出<rt>だ</rt></ruby>して ください。",
          "ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。"
        ],
        "correctIdx": 3,
        "explanation": "Câu「ああ、305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の ミラーさんですね。こちらこそ よろしく。」dịch nghĩa là \"À, anh Miller ở phòng 305 phải không. Bác cũng rất vui được biết cháu.\". 「305<ruby>号<rt>ごう</rt></ruby><ruby>室<rt>しつ</rt></ruby>」(さんまるごごうしつ): phòng số 305."
      }
    ]
  },
  "kaiwa-27": {
    "id": "kaiwa-27",
    "lesson": 27,
    "level": "Sơ cấp 2",
    "titleJp": "<ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね",
    "titleVi": "Cái gì anh cũng tự làm được nhỉ!",
    "subtitleVi": "Thể khả năng (可能形) & khen ngợi tài khéo tay",
    "sceneType": "home_visit",
    "context": "Anh Yamada đến chơi căn hộ mới của anh Miller và vô cùng ngạc nhiên khi thấy chiếc kệ sách gỗ tuyệt đẹp do chính tay anh Miller tự đóng.",
    "objectives": [
      "Chia và sử dụng thành thạo Động từ thể khả năng (<ruby>可能形<rt>かのうけい</rt></ruby>: <ruby>書<rt>か</rt></ruby>ける、<ruby>食<rt>た</rt></ruby>べられる、<ruby>来<rt>こ</rt></ruby>られる、できる).",
      "Phân biệt giữa V-られます (khả năng do năng lực/điều kiện) và <ruby>見<rt>み</rt></ruby>えます / <ruby>聞<rt>き</rt></ruby>こえます (tự nhiên nhìn thấy/nghe thấy).",
      "Sử dụng trợ từ は và も để nhấn mạnh sự tương phản (～は できますが、～は できません)."
    ],
    "audioSrc": "audio/kaiwa/lesson_27.mp3",
    "audioDuration": 30.22,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_27.mp3",
    "renshuuAudioDuration": 48.6,
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
      }
    ],
    "dialogue": [
      {
        "id": "k27-1",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。",
        "rawJp": "いい 本棚ですね。どこで 買ったんですか。",
        "vi": "Chiếc giá sách đẹp quá nhỉ. Anh đã mua ở đâu thế?",
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
        "explanation": "Khen chiếc kệ sách trong phòng Miller.",
        "time": [
          0,
          2.86
        ]
      },
      {
        "id": "k27-2",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
        "rawJp": "これですか。自分で 作ったんですよ。",
        "vi": "Cái này hả anh? Chính tay tôi tự đóng đấy.",
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
        "explanation": "「<ruby>自分<rt>じぶん</rt></ruby>で」(じぶんで): tự bản thân mình làm.",
        "time": [
          3.31,
          6.41
        ]
      },
      {
        "id": "k27-3",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "exclamation",
        "jp": "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
        "rawJp": "えっ、ほんとうですか。ミラーさんは 何でも 作れるんですね。",
        "vi": "Ủa, thật vậy sao! Anh Miller đúng là cái gì cũng tự làm được nhỉ!",
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
        "explanation": "「<ruby>作<rt>つく</rt></ruby>れる」là thể khả năng của <ruby>作<rt>つく</rt></ruby>ります;「<ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れる」: cái gì cũng làm được.",
        "time": [
          6.79,
          10.94
        ]
      },
      {
        "id": "k27-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "いいえ、そんな ことは ありませんよ。",
        "rawJp": "いいえ、そんな ことは ありませんよ。",
        "vi": "Đâu có, không đến mức đó đâu anh.",
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
        "explanation": "Cách đáp khiêm tốn khi được khen ngợi.",
        "time": [
          11.33,
          13.97
        ]
      },
      {
        "id": "k27-5",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>簡単<rt>かんたん</rt></ruby>な ものは <ruby>作<rt>つく</rt></ruby>れますが、<ruby>大<rt>おお</rt></ruby>きい <ruby>家具<rt>かぐ</rt></ruby>は なかなか <ruby>作<rt>つく</rt></ruby>れません。",
        "rawJp": "簡単な ものは 作れますが、大きい 家具は なかなか 作れません。",
        "vi": "Đồ đơn giản thì tôi đóng được, chứ đồ nội thất lớn thì khó mà làm được lắm.",
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
        "explanation": "Dùng trợ từ「は」ở cả hai vế để đối chiếu tương phản giữa <ruby>簡単<rt>かんたん</rt></ruby>なもの và <ruby>大<rt>おお</rt></ruby>きい<ruby>家具<rt>かぐ</rt></ruby>.",
        "time": [
          14.28,
          18.77
        ]
      },
      {
        "id": "k27-6",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "<ruby>料理<rt>りょうり</rt></ruby>も <ruby>自分<rt>じぶん</rt></ruby>で するんですか。",
        "rawJp": "料理も 自分で するんですか。",
        "vi": "Thế việc nấu nướng anh cũng tự mình làm luôn à?",
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
        "explanation": "Hỏi thêm về chuyện bếp núc.",
        "time": [
          19.15,
          20.9
        ]
      },
      {
        "id": "k27-7",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ、<ruby>休み<rt>やすみ</rt></ruby>には ときどき <ruby>作<rt>つく</rt></ruby>りますよ。",
        "rawJp": "ええ、休みには ときどき 作りますよ。",
        "vi": "Vâng, vào ngày nghỉ thỉnh thoảng tôi cũng tự nấu đấy.",
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
        "explanation": "Chia sẻ thói quen nấu ăn cuối tuần.",
        "time": [
          21.36,
          24.46
        ]
      },
      {
        "id": "k27-8",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "exclamation",
        "jp": "すごいですね。<ruby>今度<rt>こんど</rt></ruby> ごちそうして くださいね。",
        "rawJp": "すごいですね。今度 ごちそうして くださいね。",
        "vi": "Giỏi thật đấy! Lần tới nhớ chiêu đãi tôi thưởng thức với nhé.",
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
        "explanation": "「ごちそうします」: chiêu đãi, khao ăn.",
        "time": [
          24.84,
          27.82
        ]
      },
      {
        "id": "k27-9",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ、いつでも どうぞ。",
        "rawJp": "ええ、いつでも どうぞ。",
        "vi": "Vâng, bất cứ lúc nào cũng hoan nghênh anh!",
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
        "explanation": "Lời mời thân thiện.",
        "time": [
          28.2,
          30.22
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc27-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hỏi khả năng đọc / viết / giao tiếp bằng thể khả năng",
        "context": "Nói về trình độ ngoại ngữ hoặc kỹ năng.",
        "lines": [
          {
            "id": "rc27-1-l1",
            "speaker": "A",
            "jp": "<u><ruby>漢字<rt>かんじ</rt></ruby></u>が <u><ruby>読<rt>よ</rt></ruby>めます</u>か。",
            "rawJp": "漢字が 読めますか。",
            "vi": "Bạn có đọc được chữ Hán không?"
          },
          {
            "id": "rc27-1-l2",
            "speaker": "B",
            "jp": "<u>500<ruby>字<rt>じ</rt></ruby>ぐらい <ruby>読<rt>よ</rt></ruby>めます</u>が、<u><ruby>書<rt>か</rt></ruby>く</u> ことは あまり できません。",
            "rawJp": "500字ぐらい 読めますが、書く ことは あまり できません。",
            "vi": "Tôi đọc được khoảng 500 chữ, nhưng viết thì không rành lắm."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đọc chữ Hán / 500 chữ / Viết)",
            "values": [
              "<ruby>漢字<rt>かんじ</rt></ruby>",
              "<ruby>読<rt>よ</rt></ruby>めます",
              "500<ruby>字<rt>じ</rt></ruby>ぐらい <ruby>読<rt>よ</rt></ruby>めます",
              "<ruby>書<rt>か</rt></ruby>く"
            ],
            "rawValues": [
              "漢字",
              "読めます",
              "500字ぐらい 読めます",
              "書く"
            ],
            "viValues": [
              "chữ Hán",
              "đọc được",
              "đọc được 500 chữ",
              "viết"
            ],
            "lineTimings": [
              [
                0,
                1.42
              ],
              [
                1.8,
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
            "label": "Mẫu 2 (Nói tiếng Nhật / Hội thoại hàng ngày / Đọc báo)",
            "values": [
              "<ruby>日本語<rt>にほんご</rt></ruby>",
              "<ruby>話<rt>はな</rt></ruby>せます",
              "<ruby>日常<rt>にちじょう</rt></ruby><ruby>会話<rt>かいわ</rt></ruby>は <ruby>話<rt>はな</rt></ruby>せます",
              "<ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>む"
            ],
            "rawValues": [
              "日本語",
              "話せます",
              "日常会話は 話せます",
              "新聞を 読む"
            ],
            "viValues": [
              "tiếng Nhật",
              "nói được",
              "nói được hội thoại hàng ngày",
              "đọc báo"
            ],
            "lineTimings": [
              [
                5.76,
                7.54
              ],
              [
                7.92,
                12.34
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
            "label": "Mẫu 3 (Bơi lội / Bơi 100 mét / Bơi biển)",
            "values": [
              "<ruby>水泳<rt>すいえい</rt></ruby>",
              "<ruby>泳<rt>およ</rt></ruby>げます",
              "100メートルぐらい <ruby>泳<rt>およ</rt></ruby>げます",
              "<ruby>海<rt>うみ</rt></ruby>で <ruby>泳<rt>およ</rt></ruby>ぐ"
            ],
            "rawValues": [
              "水泳",
              "泳げます",
              "100メートルぐらい 泳げます",
              "海で 泳ぐ"
            ],
            "viValues": [
              "bơi",
              "bơi được",
              "bơi được 100 mét",
              "bơi ở biển"
            ],
            "lineTimings": [
              [
                12.72,
                14.47
              ],
              [
                14.86,
                19.2
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
        "id": "rc27-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nói về khung cảnh nhìn thấy / âm thanh nghe thấy (<ruby>見<rt>み</rt></ruby>えます・<ruby>聞<rt>き</rt></ruby>こえます)",
        "context": "Giới thiệu tầm nhìn từ cửa sổ căn hộ hoặc khách sạn.",
        "lines": [
          {
            "id": "rc27-2-l1",
            "speaker": "A",
            "jp": "いい <ruby>部屋<rt>へや</rt></ruby>ですね。<ruby>窓<rt>まど</rt></ruby>から <u><ruby>富士山<rt>ふじさん</rt></ruby></u>が <ruby>見<rt>み</rt></ruby>えますね。",
            "rawJp": "いい 部屋ですね。窓から 富士山が 見えますね。",
            "vi": "Căn phòng tuyệt quá. Từ cửa sổ có thể nhìn thấy núi Phú Sĩ nhỉ."
          },
          {
            "id": "rc27-2-l2",
            "speaker": "B",
            "jp": "ええ。<ruby>天気<rt>てんき</rt></ruby>が いい <ruby>日<rt>にち</rt></ruby>は とても よく <ruby>見<rt>み</rt></ruby>えますよ。",
            "rawJp": "ええ。天気が いい 日は とても よく 見えますよ。",
            "vi": "Vâng. Vào những ngày trời đẹp thì nhìn thấy rõ lắm đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Nhìn thấy núi Phú Sĩ)",
            "values": [
              "<ruby>富士山<rt>ふじさん</rt></ruby>"
            ],
            "rawValues": [
              "富士山"
            ],
            "viValues": [
              "núi Phú Sĩ"
            ],
            "lineTimings": [
              [
                19.58,
                22.8
              ],
              [
                23.18,
                26.57
              ]
            ],
            "lineMeta": [
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
            "label": "Mẫu 2 (Nhìn thấy biển và đảo)",
            "values": [
              "<ruby>海<rt>うみ</rt></ruby>と <ruby>島<rt>とう</rt></ruby>"
            ],
            "rawValues": [
              "海と 島"
            ],
            "viValues": [
              "biển và đảo"
            ],
            "lineTimings": [
              [
                26.95,
                30.26
              ],
              [
                23.18,
                26.57
              ]
            ],
            "lineMeta": [
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
            "label": "Mẫu 3 (Nhìn thấy pháo hoa mùa hè)",
            "values": [
              "<ruby>夏<rt>なつ</rt></ruby>は <ruby>花火<rt>はなび</rt></ruby>"
            ],
            "rawValues": [
              "夏は 花火"
            ],
            "viValues": [
              "pháo hoa vào mùa hè"
            ],
            "lineTimings": [
              [
                30.65,
                34.15
              ],
              [
                23.18,
                26.57
              ]
            ],
            "lineMeta": [
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
        "id": "rc27-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi địa điểm có thể mua hoặc sử dụng dịch vụ",
        "context": "Hỏi nơi mua vé, nơi đổi ngoại tệ.",
        "lines": [
          {
            "id": "rc27-3-l1",
            "speaker": "A",
            "jp": "どこで <u>コンサートの チケット</u>が <u><ruby>買<rt>か</rt></ruby>えます</u>か。",
            "rawJp": "どこで コンサートの チケットが 買えますか。",
            "vi": "Có thể mua vé buổi hòa nhạc ở đâu nhỉ?"
          },
          {
            "id": "rc27-3-l2",
            "speaker": "B",
            "jp": "<u>コンビニ</u>で <u><ruby>買<rt>か</rt></ruby>えます</u>よ。",
            "rawJp": "コンビニで 買えますよ。",
            "vi": "Mua được ở cửa hàng tiện lợi đấy."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Vé hòa nhạc / Cửa hàng tiện lợi)",
            "values": [
              "コンサートの チケット",
              "<ruby>買<rt>か</rt></ruby>えます",
              "コンビニ",
              "<ruby>買<rt>か</rt></ruby>えます"
            ],
            "rawValues": [
              "コンサートの チケット",
              "買えます",
              "コンビニ",
              "買えます"
            ],
            "viValues": [
              "vé hòa nhạc",
              "mua được",
              "cửa hàng tiện lợi",
              "mua được"
            ],
            "lineTimings": [
              [
                34.54,
                37.32
              ],
              [
                37.7,
                39.17
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
              }
            ]
          },
          {
            "label": "Mẫu 2 (Sách nước ngoài / Nhà sách Maruzen)",
            "values": [
              "<ruby>外国<rt>がいこく</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>",
              "<ruby>買<rt>か</rt></ruby>えます",
              "<ruby>丸善<rt>まるぜん</rt></ruby>",
              "<ruby>買<rt>か</rt></ruby>えます"
            ],
            "rawValues": [
              "外国の 本",
              "買えます",
              "丸善",
              "買えます"
            ],
            "viValues": [
              "sách nước ngoài",
              "mua được",
              "nhà sách Maruzen",
              "mua được"
            ],
            "lineTimings": [
              [
                39.55,
                41.81
              ],
              [
                42.19,
                43.7
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
            "label": "Mẫu 3 (Mượn đĩa CD / Thư viện thành phố)",
            "values": [
              "CD",
              "<ruby>借<rt>か</rt></ruby>りられます",
              "<ruby>市<rt>し</rt></ruby>の <ruby>図書館<rt>としょかん</rt></ruby>",
              "<ruby>借<rt>か</rt></ruby>りられます"
            ],
            "rawValues": [
              "CD",
              "借りられます",
              "市の 図書館",
              "借りられます"
            ],
            "viValues": [
              "đĩa CD",
              "mượn được",
              "thư viện thành phố",
              "mượn được"
            ],
            "lineTimings": [
              [
                44.09,
                46.27
              ],
              [
                46.66,
                48.6
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq27-1",
        "question": "Chủ đề chính của bài hội thoại Bài 27「<ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね」mang ý nghĩa là gì?",
        "options": [
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Cái gì anh cũng tự làm được nhỉ!"
        ],
        "correctIdx": 3,
        "explanation": "「<ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね」trong Bài 27 có nghĩa là \"Cái gì anh cũng tự làm được nhỉ!\". Bối cảnh: Anh Yamada đến chơi căn hộ mới của anh Miller và vô cùng ngạc nhiên khi thấy chiếc kệ sách gỗ tuyệt đẹp do chính tay anh Miller tự đóng."
      },
      {
        "id": "kq27-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。」(Chiếc giá sách đẹp quá nhỉ. Anh đã mua ở đâu thế?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
          "いいえ、そんな ことは ありませんよ。",
          "<ruby>簡単<rt>かんたん</rt></ruby>な ものは <ruby>作<rt>つく</rt></ruby>れますが、<ruby>大<rt>おお</rt></ruby>きい <ruby>家具<rt>かぐ</rt></ruby>は なかなか <ruby>作<rt>つく</rt></ruby>れません。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。」(Cái này hả anh? Chính tay tôi tự đóng đấy.). 「<ruby>自分<rt>じぶん</rt></ruby>で」(じぶんで): tự bản thân mình làm."
      },
      {
        "id": "kq27-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。」(Cái này hả anh? Chính tay tôi tự đóng đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>簡単<rt>かんたん</rt></ruby>な ものは <ruby>作<rt>つく</rt></ruby>れますが、<ruby>大<rt>おお</rt></ruby>きい <ruby>家具<rt>かぐ</rt></ruby>は なかなか <ruby>作<rt>つく</rt></ruby>れません。",
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。",
          "いいえ、そんな ことは ありませんよ。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。」(Ủa, thật vậy sao! Anh Miller đúng là cái gì cũng tự làm được nhỉ!). 「<ruby>作<rt>つく</rt></ruby>れる」là thể khả năng của <ruby>作<rt>つく</rt></ruby>ります;「<ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れる」: cái gì cũng làm được."
      },
      {
        "id": "kq27-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。」(Ủa, thật vậy sao! Anh Miller đúng là cái gì cũng tự làm được nhỉ!), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
          "<ruby>簡単<rt>かんたん</rt></ruby>な ものは <ruby>作<rt>つく</rt></ruby>れますが、<ruby>大<rt>おお</rt></ruby>きい <ruby>家具<rt>かぐ</rt></ruby>は なかなか <ruby>作<rt>つく</rt></ruby>れません。",
          "いいえ、そんな ことは ありませんよ。",
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「いいえ、そんな ことは ありませんよ。」(Đâu có, không đến mức đó đâu anh.). Cách đáp khiêm tốn khi được khen ngợi."
      },
      {
        "id": "kq27-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「いいえ、そんな ことは ありませんよ。」(Đâu có, không đến mức đó đâu anh.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。",
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
          "<ruby>簡単<rt>かんたん</rt></ruby>な ものは <ruby>作<rt>つく</rt></ruby>れますが、<ruby>大<rt>おお</rt></ruby>きい <ruby>家具<rt>かぐ</rt></ruby>は なかなか <ruby>作<rt>つく</rt></ruby>れません。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「<ruby>簡単<rt>かんたん</rt></ruby>な ものは <ruby>作<rt>つく</rt></ruby>れますが、<ruby>大<rt>おお</rt></ruby>きい <ruby>家具<rt>かぐ</rt></ruby>は なかなか <ruby>作<rt>つく</rt></ruby>れません。」(Đồ đơn giản thì tôi đóng được, chứ đồ nội thất lớn thì khó mà làm được lắm.). Dùng trợ từ「は」ở cả hai vế để đối chiếu tương phản giữa <ruby>簡単<rt>かんたん</rt></ruby>なもの và <ruby>大<rt>おお</rt></ruby>きい<ruby>家具<rt>かぐ</rt></ruby>."
      },
      {
        "id": "kq27-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>簡単<rt>かんたん</rt></ruby>な ものは <ruby>作<rt>つく</rt></ruby>れますが、<ruby>大<rt>おお</rt></ruby>きい <ruby>家具<rt>かぐ</rt></ruby>は なかなか <ruby>作<rt>つく</rt></ruby>れません。」(Đồ đơn giản thì tôi đóng được, chứ đồ nội thất lớn thì khó mà làm được lắm.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>料理<rt>りょうり</rt></ruby>も <ruby>自分<rt>じぶん</rt></ruby>で するんですか。",
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。",
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「<ruby>料理<rt>りょうり</rt></ruby>も <ruby>自分<rt>じぶん</rt></ruby>で するんですか。」(Thế việc nấu nướng anh cũng tự mình làm luôn à?). Hỏi thêm về chuyện bếp núc."
      },
      {
        "id": "kq27-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>料理<rt>りょうり</rt></ruby>も <ruby>自分<rt>じぶん</rt></ruby>で するんですか。」(Thế việc nấu nướng anh cũng tự mình làm luôn à?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
          "ええ、<ruby>休み<rt>やすみ</rt></ruby>には ときどき <ruby>作<rt>つく</rt></ruby>りますよ。",
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。",
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「ええ、<ruby>休み<rt>やすみ</rt></ruby>には ときどき <ruby>作<rt>つく</rt></ruby>りますよ。」(Vâng, vào ngày nghỉ thỉnh thoảng tôi cũng tự nấu đấy.). Chia sẻ thói quen nấu ăn cuối tuần."
      },
      {
        "id": "kq27-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、<ruby>休み<rt>やすみ</rt></ruby>には ときどき <ruby>作<rt>つく</rt></ruby>りますよ。」(Vâng, vào ngày nghỉ thỉnh thoảng tôi cũng tự nấu đấy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
          "すごいですね。<ruby>今度<rt>こんど</rt></ruby> ごちそうして くださいね。",
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「すごいですね。<ruby>今度<rt>こんど</rt></ruby> ごちそうして くださいね。」(Giỏi thật đấy! Lần tới nhớ chiêu đãi tôi thưởng thức với nhé.). 「ごちそうします」: chiêu đãi, khao ăn."
      },
      {
        "id": "kq27-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「すごいですね。<ruby>今度<rt>こんど</rt></ruby> ごちそうして くださいね。」(Giỏi thật đấy! Lần tới nhớ chiêu đãi tôi thưởng thức với nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。",
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
          "ええ、いつでも どうぞ。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 27, câu đáp chuẩn xác là:「ええ、いつでも どうぞ。」(Vâng, bất cứ lúc nào cũng hoan nghênh anh!). Lời mời thân thiện."
      },
      {
        "id": "kq27-10",
        "question": "Để diễn đạt ý: \"Chiếc giá sách đẹp quá nhỉ. Anh đã mua ở đâu thế?\" trong tình huống Bài 27, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。",
          "これですか。<ruby>自分<rt>じぶん</rt></ruby>で <ruby>作<rt>つく</rt></ruby>ったんですよ。",
          "えっ、ほんとうですか。ミラーさんは <ruby>何<rt>なん</rt></ruby>でも <ruby>作<rt>つく</rt></ruby>れるんですね。",
          "いいえ、そんな ことは ありませんよ。"
        ],
        "correctIdx": 0,
        "explanation": "Câu「いい <ruby>本棚<rt>ほんだな</rt></ruby>ですね。どこで <ruby>買<rt>か</rt></ruby>ったんですか。」dịch nghĩa là \"Chiếc giá sách đẹp quá nhỉ. Anh đã mua ở đâu thế?\". Khen chiếc kệ sách trong phòng Miller."
      }
    ]
  },
  "kaiwa-28": {
    "id": "kaiwa-28",
    "lesson": 28,
    "level": "Sơ cấp 2",
    "titleJp": "お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら…",
    "titleVi": "Vừa uống chút trà vừa trò chuyện...",
    "subtitleVi": "Mời cộng tác công việc & liệt kê nguyên nhân (～し、～し)",
    "sceneType": "office_help",
    "context": "Bà Ogawa nhờ anh Wang dịch một số tài liệu tiếng Trung và đề nghị vừa uống trà vừa bàn bạc chi tiết vì anh Wang vừa giỏi tiếng Nhật lại vừa am hiểu chuyên môn.",
    "objectives": [
      "Diễn tả hai hành động diễn ra đồng thời của cùng một chủ thể bằng: V1(bỏ ます)ながら、V2.",
      "Nói về thói quen thường nhật bằng V-て います.",
      "Liệt kê nhiều lý do hoặc phẩm chất tích cực để thuyết phục người nghe bằng: ～し、～し、それに～."
    ],
    "audioSrc": "audio/kaiwa/lesson_28.mp3",
    "audioDuration": 29.64,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_28.mp3",
    "renshuuAudioDuration": 45.31,
    "characters": [
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
      }
    ],
    "dialogue": [
      {
        "id": "k28-1",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "question",
        "jp": "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。",
        "rawJp": "ワンさん、ちょっと お願いが あるんですが、今 お時間 ありますか。",
        "vi": "Anh Wang ơi, tôi có chút việc muốn nhờ anh, bây giờ anh có chút thời gian không?",
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
        "explanation": "「お<ruby>願<rt>ねが</rt></ruby>いがあるんですが」là cách mở lời lịch sự khi muốn nhờ ai đó một việc quan trọng.",
        "time": [
          0,
          4.06
        ]
      },
      {
        "id": "k28-2",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "question",
        "jp": "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
        "rawJp": "ええ、何ですか。",
        "vi": "Vâng, có việc gì thế chị?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.61,
          0.57,
          0.62,
          0.85
        ],
        "explanation": "Sẵn sàng lắng nghe.",
        "time": [
          4.51,
          6.26
        ]
      },
      {
        "id": "k28-3",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "hesitation",
        "jp": "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。",
        "rawJp": "実は 中国語の パンフレットを 翻訳して いただきたいんです。",
        "vi": "Thực ra là tôi muốn nhờ anh dịch giúp cuốn tài liệu giới thiệu bằng tiếng Trung này.",
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
        "explanation": "「<ruby>実は<rt>じつは</rt></ruby>」(じつは): thực ra là;「V-ていただきたい」: mong được anh/chị làm giúp.",
        "time": [
          6.72,
          10.3
        ]
      },
      {
        "id": "k28-4",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。",
        "rawJp": "ワンさんは 日本語も 上手だし、専門の 知識も あるし、ぜひ お願いしたいんですが。",
        "vi": "Anh Wang vừa giỏi tiếng Nhật, lại vừa có kiến thức chuyên môn nữa, nên nhất định tôi muốn nhờ anh.",
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
        "explanation": "「～し、～し」dùng để liệt kê các lý do thuyết phục dẫn đến lời nhờ vả.",
        "time": [
          10.61,
          16.22
        ]
      },
      {
        "id": "k28-5",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "question",
        "jp": "いつまでですか。",
        "rawJp": "いつまでですか。",
        "vi": "Hạn là đến bao giờ vậy chị?",
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
        "explanation": "Hỏi thời hạn hoàn thành (Deadline).",
        "time": [
          16.61,
          17.86
        ]
      },
      {
        "id": "k28-6",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "statement",
        "jp": "<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>末<rt>まつ</rt></ruby>までで いいんです。",
        "rawJp": "来月の 末までで いいんです。",
        "vi": "Chỉ cần trước cuối tháng sau là được ạ.",
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
        "explanation": "「<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>末<rt>まつ</rt></ruby>」(らいげつのすえ): cuối tháng sau.",
        "time": [
          18.31,
          20.42
        ]
      },
      {
        "id": "k28-7",
        "speakerId": "wang",
        "speakerBadge": "ワン",
        "speakerColor": "emerald",
        "voice": "ko-KR-HyunsuMultilingualNeural",
        "emotion": "statement",
        "jp": "それなら <ruby>大丈夫です<rt>だいじょうぶです</rt></ruby>。<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けますよ。",
        "rawJp": "それなら 大丈夫です。引き受けますよ。",
        "vi": "Nếu vậy thì ổn ạ. Tôi xin nhận lời nhé.",
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
        "explanation": "「<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けます」(ひきうけます): nhận lời đảm đương công việc.",
        "time": [
          20.81,
          24.14
        ]
      },
      {
        "id": "k28-8",
        "speakerId": "suzuki",
        "speakerBadge": "<ruby>鈴木<rt>すずき</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "fr-FR-VivienneMultilingualNeural",
        "emotion": "greeting_gratitude",
        "jp": "ありがとう ございます。じゃ、お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら、<ruby>詳<rt>くわ</rt></ruby>しく <ruby>話<rt>はなし</rt></ruby>しましょう。",
        "rawJp": "ありがとう ございます。じゃ、お茶でも 飲みながら、詳しく 話しましょう。",
        "vi": "Cảm ơn anh nhiều lắm. Vậy chúng ta vừa uống chút trà vừa bàn chi tiết nhé.",
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
        "explanation": "「お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら、<ruby>話<rt>はなし</rt></ruby>しましょう」: vừa uống trà vừa trò chuyện.",
        "time": [
          24.53,
          29.64
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc28-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Hai hành động diễn ra song song (V-ながら)",
        "context": "Vừa nghe nhạc vừa chạy bộ, vừa đi làm vừa đi học.",
        "lines": [
          {
            "id": "rc28-1-l1",
            "speaker": "A",
            "jp": "いつも <u><ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>き</u>ながら、<u>ジョギングします</u>か。",
            "rawJp": "いつも 音楽を 聞きながら、ジョギングしますか。",
            "vi": "Bạn thường vừa nghe nhạc vừa chạy bộ à?"
          },
          {
            "id": "rc28-1-l2",
            "speaker": "B",
            "jp": "ええ、その ほうが <ruby>楽<rt>たの</rt></ruby>しいですから。",
            "rawJp": "ええ、その ほうが 楽しいですから。",
            "vi": "Vâng, vì làm như thế vui hơn mà."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Vừa nghe nhạc vừa chạy bộ)",
            "values": [
              "<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>き",
              "ジョギングします"
            ],
            "rawValues": [
              "音楽を 聞き",
              "ジョギングします"
            ],
            "viValues": [
              "nghe nhạc",
              "chạy bộ"
            ],
            "lineTimings": [
              [
                0,
                3.29
              ],
              [
                3.67,
                6.22
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
            "label": "Mẫu 2 (Vừa đi làm thêm vừa học đại học)",
            "values": [
              "アルバイトを し",
              "<ruby>大学<rt>だいがく</rt></ruby>で <ruby>勉強します<rt>べんきょうします</rt></ruby>"
            ],
            "rawValues": [
              "アルバイトを し",
              "大学で 勉強します"
            ],
            "viValues": [
              "làm thêm",
              "học ở đại học"
            ],
            "lineTimings": [
              [
                6.6,
                10.32
              ],
              [
                3.67,
                6.22
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
            "label": "Mẫu 3 (Vừa uống trà vừa nói chuyện)",
            "values": [
              "お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>み",
              "<ruby>話<rt>はな</rt></ruby>します"
            ],
            "rawValues": [
              "お茶を 飲み",
              "話します"
            ],
            "viValues": [
              "uống trà",
              "trò chuyện"
            ],
            "lineTimings": [
              [
                10.7,
                13.39
              ],
              [
                3.67,
                6.22
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
          }
        ]
      },
      {
        "id": "rc28-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nói về thói quen vào ngày nghỉ (いつも V-ています)",
        "context": "Chia sẻ thói quen rèn luyện sức khỏe hoặc học tập.",
        "lines": [
          {
            "id": "rc28-2-l1",
            "speaker": "A",
            "jp": "<ruby>休み<rt>やすみ</rt></ruby>の <ruby>日<rt>にち</rt></ruby>は いつも <ruby>何<rt>なん</rt></ruby>を して いますか。",
            "rawJp": "休みの 日は いつも 何を して いますか。",
            "vi": "Vào ngày nghỉ bạn thường hay làm gì?"
          },
          {
            "id": "rc28-2-l2",
            "speaker": "B",
            "jp": "たいてい <u><ruby>公園<rt>こうえん</rt></ruby>で テニスを して</u> います。",
            "rawJp": "たいてい 公園で テニスを して います。",
            "vi": "Thường thì tôi đánh quần vợt ở công viên."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đánh tennis ở công viên)",
            "values": [
              "<ruby>公園<rt>こうえん</rt></ruby>で テニスを して"
            ],
            "rawValues": [
              "公園で テニスを して"
            ],
            "viValues": [
              "đánh tennis ở công viên"
            ],
            "lineTimings": [
              [
                13.78,
                16.13
              ],
              [
                16.51,
                19.01
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
            "label": "Mẫu 2 (Đọc sách ở thư viện)",
            "values": [
              "<ruby>図書館<rt>としょかん</rt></ruby>で <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んで"
            ],
            "rawValues": [
              "図書館で 本を 読んで"
            ],
            "viValues": [
              "đọc sách ở thư viện"
            ],
            "lineTimings": [
              [
                13.78,
                16.13
              ],
              [
                19.39,
                22.01
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
            "label": "Mẫu 3 (Bơi ở hồ bơi)",
            "values": [
              "プールで <ruby>泳<rt>およ</rt></ruby>いで"
            ],
            "rawValues": [
              "プールで 泳いで"
            ],
            "viValues": [
              "bơi ở hồ bơi"
            ],
            "lineTimings": [
              [
                13.78,
                16.13
              ],
              [
                22.39,
                24.48
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
      },
      {
        "id": "rc28-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Nêu nhiều lý do chọn một cửa hàng / địa điểm (～し、～し)",
        "context": "Giải thích tại sao mình hay lui tới một quán ăn hoặc siêu thị.",
        "lines": [
          {
            "id": "rc28-3-l1",
            "speaker": "A",
            "jp": "よく この <u>レストラン</u>へ <ruby>来<rt>く</rt></ruby>るんですか。",
            "rawJp": "よく この レストランへ 来るんですか。",
            "vi": "Bạn có hay đến nhà hàng này không?"
          },
          {
            "id": "rc28-3-l2",
            "speaker": "B",
            "jp": "ええ。<u><ruby>料理<rt>りょうり</rt></ruby>も おいしい</u>し、<u><ruby>値段<rt>ねだん</rt></ruby>も <ruby>安<rt>やす</rt></ruby>い</u>ですから。",
            "rawJp": "ええ。料理も おいしいし、値段も 安いですから。",
            "vi": "Vâng. Vì đồ ăn vừa ngon mà giá cả lại vừa rẻ nữa."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Nhà hàng / Đồ ăn ngon & Giá rẻ)",
            "values": [
              "レストラン",
              "<ruby>料理<rt>りょうり</rt></ruby>も おいしい",
              "<ruby>値段<rt>ねだん</rt></ruby>も <ruby>安<rt>やす</rt></ruby>い"
            ],
            "rawValues": [
              "レストラン",
              "料理も おいしい",
              "値段も 安い"
            ],
            "viValues": [
              "nhà hàng",
              "đồ ăn ngon",
              "giá rẻ"
            ],
            "lineTimings": [
              [
                24.86,
                27.14
              ],
              [
                27.53,
                31.25
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
            "label": "Mẫu 2 (Siêu thị / Nhiều mặt hàng & Gần ga)",
            "values": [
              "スーパー",
              "<ruby>品物<rt>しなもの</rt></ruby>も <ruby>多<rt>おお</rt></ruby>い",
              "<ruby>駅<rt>えき</rt></ruby>から <ruby>近<rt>ちか</rt></ruby>い"
            ],
            "rawValues": [
              "スーパー",
              "品物も 多い",
              "駅から 近い"
            ],
            "viValues": [
              "siêu thị",
              "nhiều hàng hóa",
              "gần ga"
            ],
            "lineTimings": [
              [
                31.63,
                33.86
              ],
              [
                34.25,
                38.09
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
            "label": "Mẫu 3 (Bệnh viện / Bác sĩ tận tâm & Ít phải chờ)",
            "values": [
              "<ruby>病院<rt>びょういん</rt></ruby>",
              "<ruby>先生<rt>せんせい</rt></ruby>も <ruby>親切<rt>しんせつ</rt></ruby>だ",
              "<ruby>時間<rt>じかん</rt></ruby>も かからない"
            ],
            "rawValues": [
              "病院",
              "先生も 親切だ",
              "時間も かからない"
            ],
            "viValues": [
              "bệnh viện",
              "bác sĩ tận tâm",
              "không mất thời gian chờ"
            ],
            "lineTimings": [
              [
                38.47,
                40.68
              ],
              [
                41.06,
                45.31
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq28-1",
        "question": "Chủ đề chính của bài hội thoại Bài 28「お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら…」mang ý nghĩa là gì?",
        "options": [
          "Vừa uống chút trà vừa trò chuyện...",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật"
        ],
        "correctIdx": 0,
        "explanation": "「お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら…」trong Bài 28 có nghĩa là \"Vừa uống chút trà vừa trò chuyện...\". Bối cảnh: Bà Ogawa nhờ anh Wang dịch một số tài liệu tiếng Trung và đề nghị vừa uống trà vừa bàn bạc chi tiết vì anh Wang vừa giỏi tiếng Nhật lại vừa am hiểu chuyên môn."
      },
      {
        "id": "kq28-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。」(Anh Wang ơi, tôi có chút việc muốn nhờ anh, bây giờ anh có chút thời gian không?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いつまでですか。",
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。",
          "ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 28, câu đáp chuẩn xác là:「ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。」(Vâng, có việc gì thế chị?). Sẵn sàng lắng nghe."
      },
      {
        "id": "kq28-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。」(Vâng, có việc gì thế chị?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。",
          "いつまでですか。",
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。",
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 28, câu đáp chuẩn xác là:「<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。」(Thực ra là tôi muốn nhờ anh dịch giúp cuốn tài liệu giới thiệu bằng tiếng Trung này.). 「<ruby>実は<rt>じつは</rt></ruby>」(じつは): thực ra là;「V-ていただきたい」: mong được anh/chị làm giúp."
      },
      {
        "id": "kq28-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。」(Thực ra là tôi muốn nhờ anh dịch giúp cuốn tài liệu giới thiệu bằng tiếng Trung này.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。",
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "いつまでですか。",
          "ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 28, câu đáp chuẩn xác là:「ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。」(Anh Wang vừa giỏi tiếng Nhật, lại vừa có kiến thức chuyên môn nữa, nên nhất định tôi muốn nhờ anh.). 「～し、～し」dùng để liệt kê các lý do thuyết phục dẫn đến lời nhờ vả."
      },
      {
        "id": "kq28-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。」(Anh Wang vừa giỏi tiếng Nhật, lại vừa có kiến thức chuyên môn nữa, nên nhất định tôi muốn nhờ anh.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "いつまでですか。",
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。",
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 28, câu đáp chuẩn xác là:「いつまでですか。」(Hạn là đến bao giờ vậy chị?). Hỏi thời hạn hoàn thành (Deadline)."
      },
      {
        "id": "kq28-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「いつまでですか。」(Hạn là đến bao giờ vậy chị?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。",
          "<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>末<rt>まつ</rt></ruby>までで いいんです。",
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。",
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 28, câu đáp chuẩn xác là:「<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>末<rt>まつ</rt></ruby>までで いいんです。」(Chỉ cần trước cuối tháng sau là được ạ.). 「<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>末<rt>まつ</rt></ruby>」(らいげつのすえ): cuối tháng sau."
      },
      {
        "id": "kq28-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>来月<rt>らいげつ</rt></ruby>の <ruby>末<rt>まつ</rt></ruby>までで いいんです。」(Chỉ cần trước cuối tháng sau là được ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。",
          "それなら <ruby>大丈夫です<rt>だいじょうぶです</rt></ruby>。<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けますよ。",
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 28, câu đáp chuẩn xác là:「それなら <ruby>大丈夫です<rt>だいじょうぶです</rt></ruby>。<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けますよ。」(Nếu vậy thì ổn ạ. Tôi xin nhận lời nhé.). 「<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けます」(ひきうけます): nhận lời đảm đương công việc."
      },
      {
        "id": "kq28-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「それなら <ruby>大丈夫です<rt>だいじょうぶです</rt></ruby>。<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けますよ。」(Nếu vậy thì ổn ạ. Tôi xin nhận lời nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。",
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。",
          "ありがとう ございます。じゃ、お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら、<ruby>詳<rt>くわ</rt></ruby>しく <ruby>話<rt>はなし</rt></ruby>しましょう。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 28, câu đáp chuẩn xác là:「ありがとう ございます。じゃ、お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら、<ruby>詳<rt>くわ</rt></ruby>しく <ruby>話<rt>はなし</rt></ruby>しましょう。」(Cảm ơn anh nhiều lắm. Vậy chúng ta vừa uống chút trà vừa bàn chi tiết nhé.). 「お<ruby>茶<rt>ちゃ</rt></ruby>でも <ruby>飲<rt>の</rt></ruby>みながら、<ruby>話<rt>はなし</rt></ruby>しましょう」: vừa uống trà vừa trò chuyện."
      },
      {
        "id": "kq28-9",
        "question": "Để diễn đạt ý: \"Anh Wang ơi, tôi có chút việc muốn nhờ anh, bây giờ anh có chút thời gian không?\" trong tình huống Bài 28, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。",
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。",
          "ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。"
        ],
        "correctIdx": 0,
        "explanation": "Câu「ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。」dịch nghĩa là \"Anh Wang ơi, tôi có chút việc muốn nhờ anh, bây giờ anh có chút thời gian không?\". 「お<ruby>願<rt>ねが</rt></ruby>いがあるんですが」là cách mở lời lịch sự khi muốn nhờ ai đó một việc quan trọng."
      },
      {
        "id": "kq28-10",
        "question": "Để diễn đạt ý: \"Vâng, có việc gì thế chị?\" trong tình huống Bài 28, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "ワンさんは <ruby>日本語<rt>にほんご</rt></ruby>も <ruby>上手<rt>じょうず</rt></ruby>だし、<ruby>専門<rt>せんもん</rt></ruby>の <ruby>知識<rt>ちしき</rt></ruby>も あるし、ぜひ お<ruby>願<rt>ねが</rt></ruby>いしたいんですが。",
          "ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。",
          "ワンさん、ちょっと お<ruby>願<rt>ねが</rt></ruby>いが あるんですが、<ruby>今<rt>いま</rt></ruby> お<ruby>時間<rt>じかん</rt></ruby> ありますか。",
          "<ruby>実は<rt>じつは</rt></ruby> <ruby>中国語<rt>ちゅうごくご</rt></ruby>の パンフレットを <ruby>翻訳<rt>ほんやく</rt></ruby>して いただきたいんです。"
        ],
        "correctIdx": 1,
        "explanation": "Câu「ええ、<ruby>何ですか<rt>なんですか</rt></ruby>。」dịch nghĩa là \"Vâng, có việc gì thế chị?\". Sẵn sàng lắng nghe."
      }
    ]
  },
  "kaiwa-29": {
    "id": "kaiwa-29",
    "lesson": 29,
    "level": "Sơ cấp 2",
    "titleJp": "<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんです",
    "titleVi": "Tôi lỡ để quên đồ mất rồi",
    "subtitleVi": "Trình báo để quên hành lý trên tàu điện (V-て しまいました)",
    "sceneType": "train_station",
    "context": "Anhサントス (Santos) lỡ để quên chiếc túi xách trên giá để đồ của tàu điện nên vội vã đến phòng nhân viên nhà ga để trình báo đặc điểm chiếc túi và tìm lại.",
    "objectives": [
      "Diễn tả trạng thái kết quả của tự động từ: N が V-て います (<ruby>開<rt>あ</rt></ruby>いて います、<ruby>閉<rt>し</rt></ruby>まって います、<ruby>壊<rt>こわ</rt></ruby>れて います).",
      "Sử dụng mẫu V-て しまいました để diễn tả sự việc đã lỡ xảy ra ngoài ý muốn kèm cảm giác tiếc nuối.",
      "Mô tả hình dáng, màu sắc, vị trí đồ vật bị thất lạc tại nhà ga Nhật Bản."
    ],
    "audioSrc": "audio/kaiwa/lesson_29.mp3",
    "audioDuration": 40.25,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_29.mp3",
    "renshuuAudioDuration": 43.8,
    "characters": [
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
        "id": "k29-1",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "hesitation",
        "jp": "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。",
        "rawJp": "すみません。電車の 中に 忘れ物を して しまったんですが…。",
        "vi": "Xin lỗi anh, tôi lỡ để quên đồ ở trên tàu điện mất rồi...",
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
        "explanation": "「<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまった」biểu thị sự tiếc nuối, bối rối khi lỡ bỏ quên đồ.",
        "time": [
          0,
          4.56
        ]
      },
      {
        "id": "k29-2",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。",
        "rawJp": "何を 忘れたんですか。",
        "vi": "Anh đã để quên vật gì thế ạ?",
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
        "explanation": "Nhân viên nhà ga hỏi tên món đồ thất lạc.",
        "time": [
          4.94,
          6.65
        ]
      },
      {
        "id": "k29-3",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。",
        "rawJp": "青い かばんです。このぐらいの 大きさです。",
        "vi": "Là một chiếc cặp màu xanh dương ạ. Kích thước cỡ chừng này.",
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
        "explanation": "Dùng tay mô tả kích thước (このぐらいの<ruby>大<rt>おお</rt></ruby>きさ).",
        "time": [
          7.1,
          10.22
        ]
      },
      {
        "id": "k29-4",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "<ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って いますか。",
        "rawJp": "中に 何が 入って いますか。",
        "vi": "Ở bên trong cặp có đựng những gì ạ?",
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
        "explanation": "「<ruby>入<rt>はい</rt></ruby>っています」chỉ trạng thái các vật đang nằm bên trong túi.",
        "time": [
          10.61,
          12.62
        ]
      },
      {
        "id": "k29-5",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "カメラと <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>資料<rt>しりょう</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って います。",
        "rawJp": "カメラと 大切な 資料が 入って います。",
        "vi": "Có máy ảnh và tài liệu quan trọng ở bên trong ạ.",
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
        "explanation": "Nêu những vật có giá trị để xác minh.",
        "time": [
          13.08,
          15.96
        ]
      },
      {
        "id": "k29-6",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "question",
        "jp": "<ruby>何時<rt>なんじ</rt></ruby>ごろ、どの <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。",
        "rawJp": "何時ごろ、どの 電車に 乗りましたか。",
        "vi": "Anh đã đi chuyến tàu nào vào khoảng mấy giờ thế?",
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
        "explanation": "Xác định thời gian và tuyến tàu.",
        "time": [
          16.34,
          19.18
        ]
      },
      {
        "id": "k29-7",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "10<ruby>時<rt>じ</rt></ruby>ごろ <ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>って、さっき この <ruby>駅<rt>えき</rt></ruby>で <ruby>下<rt>お</rt></ruby>りました。",
        "rawJp": "10時ごろ 新宿へ 行く 電車に 乗って、さっき この 駅で 下りました。",
        "vi": "Khoảng 10 giờ tôi lên chuyến tàu đi Shinjuku, và vừa mới xuống ở ga này lúc nãy.",
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
        "explanation": "Cung cấp lộ trình chi tiết.",
        "time": [
          19.63,
          24.29
        ]
      },
      {
        "id": "k29-8",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "statement",
        "jp": "かばんは <ruby>網棚<rt>あみだな</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>きました。",
        "rawJp": "かばんは 網棚の 上に 置きました。",
        "vi": "Chiếc cặp tôi đã để ở trên giá hành lý phía trên đầu ạ.",
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
        "explanation": "「<ruby>網棚<rt>あみだな</rt></ruby>」(あみだな): giá để hành lý phía trên ghế ngồi tàu điện.",
        "time": [
          24.6,
          27.02
        ]
      },
      {
        "id": "k29-9",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "わかりました。すぐ <ruby>調<rt>しら</rt></ruby>べますから、ちょっと <ruby>待<rt>ま</rt></ruby>って いて ください。",
        "rawJp": "わかりました。すぐ 調べますから、ちょっと 待って いて ください。",
        "vi": "Tôi hiểu rồi. Tôi sẽ kiểm tra liên lạc ngay nên anh vui lòng đợi một lát nhé.",
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
        "explanation": "Hệ thống nhà ga Nhật Bản kết nối rất nhanh để tìm đồ thất lạc.",
        "time": [
          27.41,
          31.94
        ]
      },
      {
        "id": "k29-10",
        "speakerId": "staff",
        "speakerBadge": "<ruby>係員<rt>かかりいん</rt></ruby>",
        "speakerColor": "blue",
        "voice": "ja-JP-NanamiNeural",
        "emotion": "statement",
        "jp": "あ、ありましたよ。<ruby>終点<rt>しゅうてん</rt></ruby>の <ruby>新宿<rt>しんじゅく</rt></ruby><ruby>駅<rt>えき</rt></ruby>で <ruby>見<rt>み</rt></ruby>つかりました。",
        "rawJp": "あ、ありましたよ。終点の 新宿駅で 見つかりました。",
        "vi": "Ồ, có rồi anh ơi! Đã tìm thấy ở ga cuối Shinjuku rồi ạ.",
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
        "explanation": "「<ruby>見<rt>み</rt></ruby>つかりました」(みつかりました): đã được tìm thấy.",
        "time": [
          32.26,
          36.55
        ]
      },
      {
        "id": "k29-11",
        "speakerId": "santos",
        "speakerBadge": "サントス",
        "speakerColor": "purple",
        "voice": "en-US-AndrewMultilingualNeural",
        "emotion": "exclamation",
        "jp": "ああ、よかった！どうも ありがとう ございます。",
        "rawJp": "ああ、よかった！どうも ありがとう ございます。",
        "vi": "Ôi, may quá! Xin chân thành cảm ơn anh rất nhiều.",
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
        "explanation": "「ああ、よかった」biểu lộ sự nhẹ nhõm khi tìm lại được đồ.",
        "time": [
          36.94,
          40.25
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc29-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Nhắc nhở trạng thái đồ vật (N が V-ています)",
        "context": "Nhắc người khác khi túi đang mở, cúc áo bị tuột hoặc máy bị hỏng.",
        "lines": [
          {
            "id": "rc29-1-l1",
            "speaker": "A",
            "jp": "あのう、<u>かばんが <ruby>開<rt>あ</rt></ruby>いて</u> いますよ。",
            "rawJp": "あのう、かばんが 開いて いますよ。",
            "vi": "À bạn ơi, chiếc cặp của bạn đang mở kìa."
          },
          {
            "id": "rc29-1-l2",
            "speaker": "B",
            "jp": "えっ？あ、ほんとうだ。どうも すみません。",
            "rawJp": "えっ？あ、ほんとうだ。どうも すみません。",
            "vi": "Ủa? À đúng thật. Cảm ơn bạn nhiều nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Cặp đang mở)",
            "values": [
              "かばんが <ruby>開<rt>あ</rt></ruby>いて"
            ],
            "rawValues": [
              "かばんが 開いて"
            ],
            "viValues": [
              "cặp đang mở"
            ],
            "lineTimings": [
              [
                0,
                2.62
              ],
              [
                3,
                6.62
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "hesitation",
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
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.62,
                  0.85
                ]
              }
            ]
          },
          {
            "label": "Mẫu 2 (Cúc áo bị tuột)",
            "values": [
              "ボタンが <ruby>外<rt>はず</rt></ruby>れて"
            ],
            "rawValues": [
              "ボタンが 外れて"
            ],
            "viValues": [
              "cúc áo bị tuột"
            ],
            "lineTimings": [
              [
                7.01,
                9.7
              ],
              [
                3,
                6.62
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "hesitation",
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
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.62,
                  0.85
                ]
              }
            ]
          },
          {
            "label": "Mẫu 3 (Túi áo bị rách)",
            "values": [
              "ポケットが <ruby>破<rt>やぶ</rt></ruby>れて"
            ],
            "rawValues": [
              "ポケットが 破れて"
            ],
            "viValues": [
              "túi áo bị rách"
            ],
            "lineTimings": [
              [
                10.08,
                12.89
              ],
              [
                3,
                6.62
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "sato",
                "voice": "ja-JP-NanamiNeural",
                "emotion": "hesitation",
                "endPitch": "down",
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
                  0.42,
                  0.32
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
                  0.58,
                  0.58,
                  0.55,
                  0.51,
                  0.48,
                  0.48,
                  0.62,
                  0.85
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "rc29-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Báo hỏng thiết bị bằng V-て います",
        "context": "Báo cho nhân viên khi máy photocopy hoặc ghế bị hỏng.",
        "lines": [
          {
            "id": "rc29-2-l1",
            "speaker": "A",
            "jp": "すみません。この <u>コピー<ruby>機<rt>き</rt></ruby></u>、<u><ruby>故障<rt>こしょう</rt></ruby>して</u> いるんですが…。",
            "rawJp": "すみません。この コピー機、故障して いるんですが…。",
            "vi": "Xin lỗi, chiếc máy photocopy này đang bị hỏng mất rồi..."
          },
          {
            "id": "rc29-2-l2",
            "speaker": "B",
            "jp": "ああ、そうですね。すぐ <ruby>係<rt>かかり</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>を <ruby>呼<rt>よ</rt></ruby>びます。",
            "rawJp": "ああ、そうですね。すぐ 係の 人を 呼びます。",
            "vi": "À đúng rồi nhỉ. Để tôi gọi người phụ trách đến ngay."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Máy photocopy / Bị hỏng)",
            "values": [
              "コピー<ruby>機<rt>き</rt></ruby>",
              "<ruby>故障<rt>こしょう</rt></ruby>して"
            ],
            "rawValues": [
              "コピー機",
              "故障して"
            ],
            "viValues": [
              "máy photocopy",
              "bị hỏng"
            ],
            "lineTimings": [
              [
                13.27,
                17.38
              ],
              [
                17.76,
                21.65
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
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
            "label": "Mẫu 2 (Cái ghế này / Bị gãy)",
            "values": [
              "いす",
              "<ruby>壊<rt>こわ</rt></ruby>れて"
            ],
            "rawValues": [
              "いす",
              "壊れて"
            ],
            "viValues": [
              "cái ghế",
              "bị gãy"
            ],
            "lineTimings": [
              [
                22.03,
                25.8
              ],
              [
                17.76,
                21.65
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
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
            "label": "Mẫu 3 (Bát đĩa này / Bị bẩn)",
            "values": [
              "お<ruby>皿<rt>さら</rt></ruby>",
              "<ruby>汚<rt>よご</rt></ruby>れて"
            ],
            "rawValues": [
              "お皿",
              "汚れて"
            ],
            "viValues": [
              "cái đĩa",
              "bị bẩn"
            ],
            "lineTimings": [
              [
                26.18,
                29.98
              ],
              [
                17.76,
                21.65
              ]
            ],
            "lineMeta": [
              {
                "speakerId": "yamada",
                "voice": "ja-JP-KeitaNeural",
                "emotion": "hesitation",
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
          }
        ]
      },
      {
        "id": "rc29-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Trình bày sự cố lỡ xảy ra (V-て しまいました)",
        "context": "Làm mất vé, quên mật khẩu hoặc làm rơi đồ.",
        "lines": [
          {
            "id": "rc29-3-l1",
            "speaker": "A",
            "jp": "どう したんですか。",
            "rawJp": "どう したんですか。",
            "vi": "Có chuyện gì thế?"
          },
          {
            "id": "rc29-3-l2",
            "speaker": "B",
            "jp": "<u><ruby>切符<rt>きっぷ</rt></ruby>を なくして</u> しまったんです。",
            "rawJp": "切符を なくして しまったんです。",
            "vi": "Tôi lỡ làm mất vé tàu mất rồi."
          },
          {
            "id": "rc29-3-l3",
            "speaker": "A",
            "jp": "それは <ruby>大変ですね<rt>たいへんですね</rt></ruby>。<ruby>駅員<rt>えきいん</rt></ruby>さんに <ruby>言<rt>い</rt></ruby>いましょう。",
            "rawJp": "それは 大変ですね。駅員さんに 言いましょう。",
            "vi": "Thế thì gay go nhỉ. Chúng ta ra báo với nhân viên nhà ga đi."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Làm mất vé tàu)",
            "values": [
              "<ruby>切符<rt>きっぷ</rt></ruby>を なくして"
            ],
            "rawValues": [
              "切符を なくして"
            ],
            "viValues": [
              "làm mất vé tàu"
            ],
            "lineTimings": [
              [
                30.36,
                31.7
              ],
              [
                32.09,
                34.25
              ],
              [
                34.63,
                38.45
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
            "label": "Mẫu 2 (Đi nhầm tàu điện)",
            "values": [
              "<ruby>電車<rt>でんしゃ</rt></ruby>を <ruby>間違<rt>まちが</rt></ruby>えて"
            ],
            "rawValues": [
              "電車を 間違えて"
            ],
            "viValues": [
              "đi nhầm tàu điện"
            ],
            "lineTimings": [
              [
                30.36,
                31.7
              ],
              [
                38.83,
                41.21
              ],
              [
                34.63,
                38.45
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
            "label": "Mẫu 3 (Làm rơi ví tiền)",
            "values": [
              "<ruby>財布<rt>さいふ</rt></ruby>を <ruby>落<rt>お</rt></ruby>として"
            ],
            "rawValues": [
              "財布を 落として"
            ],
            "viValues": [
              "làm rơi ví tiền"
            ],
            "lineTimings": [
              [
                30.36,
                31.7
              ],
              [
                41.59,
                43.8
              ],
              [
                34.63,
                38.45
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
      }
    ],
    "quiz": [
      {
        "id": "kq29-1",
        "question": "Chủ đề chính của bài hội thoại Bài 29「<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんです」mang ý nghĩa là gì?",
        "options": [
          "Đặt bàn trước tại nhà hàng Nhật",
          "Tôi lỡ để quên đồ mất rồi",
          "Xin phép nghỉ làm vì bị ốm",
          "Hỏi đường đến nhà ga gần nhất"
        ],
        "correctIdx": 1,
        "explanation": "「<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんです」trong Bài 29 có nghĩa là \"Tôi lỡ để quên đồ mất rồi\". Bối cảnh: Anhサントス (Santos) lỡ để quên chiếc túi xách trên giá để đồ của tàu điện nên vội vã đến phòng nhân viên nhà ga để trình báo đặc điểm chiếc túi và tìm lại."
      },
      {
        "id": "kq29-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。」(Xin lỗi anh, tôi lỡ để quên đồ ở trên tàu điện mất rồi...), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って いますか。",
          "カメラと <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>資料<rt>しりょう</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って います。",
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。",
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。」(Anh đã để quên vật gì thế ạ?). Nhân viên nhà ga hỏi tên món đồ thất lạc."
      },
      {
        "id": "kq29-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。」(Anh đã để quên vật gì thế ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。",
          "<ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って いますか。",
          "カメラと <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>資料<rt>しりょう</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って います。",
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。」(Là một chiếc cặp màu xanh dương ạ. Kích thước cỡ chừng này.). Dùng tay mô tả kích thước (このぐらいの<ruby>大<rt>おお</rt></ruby>きさ)."
      },
      {
        "id": "kq29-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。」(Là một chiếc cặp màu xanh dương ạ. Kích thước cỡ chừng này.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って いますか。",
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。",
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。",
          "カメラと <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>資料<rt>しりょう</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って います。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「<ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って いますか。」(Ở bên trong cặp có đựng những gì ạ?). 「<ruby>入<rt>はい</rt></ruby>っています」chỉ trạng thái các vật đang nằm bên trong túi."
      },
      {
        "id": "kq29-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なん</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って いますか。」(Ở bên trong cặp có đựng những gì ạ?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。",
          "カメラと <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>資料<rt>しりょう</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って います。",
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。",
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「カメラと <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>資料<rt>しりょう</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って います。」(Có máy ảnh và tài liệu quan trọng ở bên trong ạ.). Nêu những vật có giá trị để xác minh."
      },
      {
        "id": "kq29-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「カメラと <ruby>大切<rt>たいせつ</rt></ruby>な <ruby>資料<rt>しりょう</rt></ruby>が <ruby>入<rt>はい</rt></ruby>って います。」(Có máy ảnh và tài liệu quan trọng ở bên trong ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。",
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。",
          "<ruby>何時<rt>なんじ</rt></ruby>ごろ、どの <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。",
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「<ruby>何時<rt>なんじ</rt></ruby>ごろ、どの <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。」(Anh đã đi chuyến tàu nào vào khoảng mấy giờ thế?). Xác định thời gian và tuyến tàu."
      },
      {
        "id": "kq29-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>何時<rt>なんじ</rt></ruby>ごろ、どの <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>りましたか。」(Anh đã đi chuyến tàu nào vào khoảng mấy giờ thế?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。",
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。",
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。",
          "10<ruby>時<rt>じ</rt></ruby>ごろ <ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>って、さっき この <ruby>駅<rt>えき</rt></ruby>で <ruby>下<rt>お</rt></ruby>りました。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「10<ruby>時<rt>じ</rt></ruby>ごろ <ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>って、さっき この <ruby>駅<rt>えき</rt></ruby>で <ruby>下<rt>お</rt></ruby>りました。」(Khoảng 10 giờ tôi lên chuyến tàu đi Shinjuku, và vừa mới xuống ở ga này lúc nãy.). Cung cấp lộ trình chi tiết."
      },
      {
        "id": "kq29-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「10<ruby>時<rt>じ</rt></ruby>ごろ <ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>って、さっき この <ruby>駅<rt>えき</rt></ruby>で <ruby>下<rt>お</rt></ruby>りました。」(Khoảng 10 giờ tôi lên chuyến tàu đi Shinjuku, và vừa mới xuống ở ga này lúc nãy.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "かばんは <ruby>網棚<rt>あみだな</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>きました。",
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。",
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。",
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「かばんは <ruby>網棚<rt>あみだな</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>きました。」(Chiếc cặp tôi đã để ở trên giá hành lý phía trên đầu ạ.). 「<ruby>網棚<rt>あみだな</rt></ruby>」(あみだな): giá để hành lý phía trên ghế ngồi tàu điện."
      },
      {
        "id": "kq29-9",
        "question": "Trong bài hội thoại, khi đối phương nói:「かばんは <ruby>網棚<rt>あみだな</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>きました。」(Chiếc cặp tôi đã để ở trên giá hành lý phía trên đầu ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。",
          "わかりました。すぐ <ruby>調<rt>しら</rt></ruby>べますから、ちょっと <ruby>待<rt>ま</rt></ruby>って いて ください。",
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。",
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「わかりました。すぐ <ruby>調<rt>しら</rt></ruby>べますから、ちょっと <ruby>待<rt>ま</rt></ruby>って いて ください。」(Tôi hiểu rồi. Tôi sẽ kiểm tra liên lạc ngay nên anh vui lòng đợi một lát nhé.). Hệ thống nhà ga Nhật Bản kết nối rất nhanh để tìm đồ thất lạc."
      },
      {
        "id": "kq29-10",
        "question": "Trong bài hội thoại, khi đối phương nói:「わかりました。すぐ <ruby>調<rt>しら</rt></ruby>べますから、ちょっと <ruby>待<rt>ま</rt></ruby>って いて ください。」(Tôi hiểu rồi. Tôi sẽ kiểm tra liên lạc ngay nên anh vui lòng đợi một lát nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>何<rt>なん</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れたんですか。",
          "<ruby>青<rt>あお</rt></ruby>い かばんです。このぐらいの <ruby>大<rt>おお</rt></ruby>きさです。",
          "あ、ありましたよ。<ruby>終点<rt>しゅうてん</rt></ruby>の <ruby>新宿<rt>しんじゅく</rt></ruby><ruby>駅<rt>えき</rt></ruby>で <ruby>見<rt>み</rt></ruby>つかりました。",
          "すみません。<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を して しまったんですが…。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 29, câu đáp chuẩn xác là:「あ、ありましたよ。<ruby>終点<rt>しゅうてん</rt></ruby>の <ruby>新宿<rt>しんじゅく</rt></ruby><ruby>駅<rt>えき</rt></ruby>で <ruby>見<rt>み</rt></ruby>つかりました。」(Ồ, có rồi anh ơi! Đã tìm thấy ở ga cuối Shinjuku rồi ạ.). 「<ruby>見<rt>み</rt></ruby>つかりました」(みつかりました): đã được tìm thấy."
      }
    ]
  },
  "kaiwa-30": {
    "id": "kaiwa-30",
    "lesson": 30,
    "level": "Sơ cấp 2",
    "titleJp": "<ruby>予習<rt>よしゅう</rt></ruby>して おきます",
    "titleVi": "Tôi sẽ chuẩn bị bài trước",
    "subtitleVi": "Chuẩn bị trước công việc (V-て おきます) & trạng thái có chủ đích (V-て あります)",
    "sceneType": "office_help",
    "context": "Trước buổi họp tại văn phòng, anh Yamada và anh Miller kiểm tra lại phòng họp xem tài liệu, lịch trình đã được chuẩn bị sẵn sàng chưa và phân công các việc cần chuẩn bị trước.",
    "objectives": [
      "Diễn tả trạng thái kết quả do ai đó đã chuẩn bị có chủ đích từ trước: N が V-て あります.",
      "Sử dụng mẫu V-て おきます để nói về việc chuẩn bị sẵn cho tương lai hoặc dọn dẹp sau khi dùng xong.",
      "Sử dụng まだ V-て います để chỉ hành động vẫn đang tiếp diễn."
    ],
    "audioSrc": "audio/kaiwa/lesson_30.mp3",
    "audioDuration": 29.26,
    "renshuuAudioSrc": "audio/kaiwa/renshuu_30.mp3",
    "renshuuAudioDuration": 53.28,
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
      }
    ],
    "dialogue": [
      {
        "id": "k30-1",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
        "rawJp": "ミラーさん、午後の 会議の 準備は もう できましたか。",
        "vi": "Anh Miller ơi, việc chuẩn bị cho cuộc họp chiều nay đã xong xuôi chưa?",
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
        "explanation": "Kiểm tra tiến độ chuẩn bị phòng họp.",
        "time": [
          0,
          3.53
        ]
      },
      {
        "id": "k30-2",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。",
        "rawJp": "ええ。会議室の いすは もう 並べて あります。",
        "vi": "Vâng. Ghế trong phòng họp thì đã được xếp sẵn sàng rồi ạ.",
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
        "explanation": "「<ruby>並<rt>なら</rt></ruby>べてあります」nhấn mạnh ghế đã được ai đó sắp xếp có chủ đích phục vụ cuộc họp.",
        "time": [
          3.98,
          7.51
        ]
      },
      {
        "id": "k30-3",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "question",
        "jp": "<ruby>資料<rt>しりょう</rt></ruby>は？",
        "rawJp": "資料は？",
        "vi": "Thế còn tài liệu họp thì sao?",
        "endPitch": "up",
        "pitchCurve": [
          0.32,
          0.68,
          0.62,
          0.85
        ],
        "explanation": "Hỏi về tài liệu phát cho người dự họp.",
        "time": [
          7.9,
          8.74
        ]
      },
      {
        "id": "k30-4",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "statement",
        "jp": "20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。",
        "rawJp": "20部 コピーして、机の 上に 置いて あります。",
        "vi": "Tôi đã photo 20 bản và đặt sẵn ở trên bàn rồi ạ.",
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
        "explanation": "「<ruby>置<rt>お</rt></ruby>いてあります」: đã đặt sẵn trên bàn.",
        "time": [
          9.19,
          12.89
        ]
      },
      {
        "id": "k30-5",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "ご<ruby>苦労<rt>くろう</rt></ruby>さま。あ、ホワイトボードに まだ きのうの <ruby>予定<rt>よてい</rt></ruby>が <ruby>書<rt>か</rt></ruby>いて ありますね。",
        "rawJp": "ご苦労さま。あ、ホワイトボードに まだ きのうの 予定が 書いて ありますね。",
        "vi": "Cảm ơn anh đã vất vả. À, trên bảng trắng vẫn còn viết lịch trình của ngày hôm qua kìa.",
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
        "explanation": "「<ruby>書<rt>か</rt></ruby>いてあります」: chữ đã được viết trên bảng.",
        "time": [
          13.27,
          18.07
        ]
      },
      {
        "id": "k30-6",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
        "emotion": "empathy_apology",
        "jp": "あ、すみません。すぐ <ruby>消<rt>け</rt></ruby>して おきます。",
        "rawJp": "あ、すみません。すぐ 消して おきます。",
        "vi": "Ồ, xin lỗi anh. Để tôi xóa đi ngay cho sẵn sàng.",
        "endPitch": "down",
        "pitchCurve": [
          0.29,
          0.63,
          0.59,
          0.56,
          0.51,
          0.48,
          0.48,
          0.51,
          0.53,
          0.52,
          0.49,
          0.45,
          0.42,
          0.43,
          0.32
        ],
        "explanation": "「<ruby>消<rt>け</rt></ruby>しておきます」(けしておきます): xóa sẵn đi để chuẩn bị cho cuộc họp mới.",
        "time": [
          18.46,
          22.06
        ]
      },
      {
        "id": "k30-7",
        "speakerId": "yamada",
        "speakerBadge": "<ruby>山田<rt>やまだ</rt></ruby>",
        "speakerColor": "emerald",
        "voice": "ja-JP-KeitaNeural",
        "emotion": "statement",
        "jp": "それから、<ruby>会議<rt>かいぎ</rt></ruby>が <ruby>始<rt>はじ</rt></ruby>まる <ruby>前<rt>まえ</rt></ruby>に、エアコンを つけて おいて くださいね。",
        "rawJp": "それから、会議が 始まる 前に、エアコンを つけて おいて くださいね。",
        "vi": "Ngoài ra, trước khi cuộc họp bắt đầu, anh nhớ bật sẵn điều hòa lên giúp tôi nhé.",
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
        "explanation": "「つけておいてください」: hãy bật sẵn lên trước.",
        "time": [
          22.44,
          27.1
        ]
      },
      {
        "id": "k30-8",
        "speakerId": "miller",
        "speakerBadge": "ミラー",
        "speakerColor": "amber",
        "voice": "en-US-BrianMultilingualNeural",
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
        "explanation": "Tiếp nhận công việc.",
        "time": [
          27.48,
          29.26
        ]
      }
    ],
    "renshuuC": [
      {
        "id": "rc30-1",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 1: Xác nhận trạng thái đã chuẩn bị sẵn (V-て あります)",
        "context": "Kiểm tra sổ lịch, danh sách hoặc vé trước chuyến đi.",
        "lines": [
          {
            "id": "rc30-1-l1",
            "speaker": "A",
            "jp": "<ruby>今月<rt>こんげつ</rt></ruby>の <ruby>予定表<rt>よていひょう</rt></ruby>は どこですか。",
            "rawJp": "今月の 予定表は どこですか。",
            "vi": "Bảng kế hoạch của tháng này ở đâu thế?"
          },
          {
            "id": "rc30-1-l2",
            "speaker": "B",
            "jp": "あそこの <u><ruby>壁<rt>かべ</rt></ruby>に <ruby>貼<rt>は</rt></ruby>って</u> ありますよ。",
            "rawJp": "あそこの 壁に 貼って ありますよ。",
            "vi": "Đã được dán sẵn ở trên bức tường đằng kia kìa."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Đã dán trên tường)",
            "values": [
              "<ruby>壁<rt>かべ</rt></ruby>に <ruby>貼<rt>は</rt></ruby>って"
            ],
            "rawValues": [
              "壁に 貼って"
            ],
            "viValues": [
              "dán trên tường"
            ],
            "lineTimings": [
              [
                0,
                2.28
              ],
              [
                2.66,
                4.75
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
            "label": "Mẫu 2 (Đã viết trong cuốn sổ tay)",
            "values": [
              "<ruby>手帳<rt>てちょう</rt></ruby>に <ruby>書<rt>か</rt></ruby>いて"
            ],
            "rawValues": [
              "手帳に 書いて"
            ],
            "viValues": [
              "viết trong sổ tay"
            ],
            "lineTimings": [
              [
                0,
                2.28
              ],
              [
                5.14,
                7.32
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
            "label": "Mẫu 3 (Đã cất trong ngăn kéo)",
            "values": [
              "<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しに しまって"
            ],
            "rawValues": [
              "引き出しに しまって"
            ],
            "viValues": [
              "cất trong ngăn kéo"
            ],
            "lineTimings": [
              [
                0,
                2.28
              ],
              [
                7.7,
                10.1
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
          }
        ]
      },
      {
        "id": "rc30-2",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 2: Nói về các việc sẽ chuẩn bị trước (V-て おきます)",
        "context": "Chuẩn bị trước cho chuyến du lịch hoặc bữa tiệc.",
        "lines": [
          {
            "id": "rc30-2-l1",
            "speaker": "A",
            "jp": "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>、<u>ホテルは どう しますか</u>。",
            "rawJp": "来週の 旅行、ホテルは どう しますか。",
            "vi": "Chuyến du lịch tuần sau, chuyện khách sạn tính sao đây?"
          },
          {
            "id": "rc30-2-l2",
            "speaker": "B",
            "jp": "わたしが <u><ruby>予約<rt>よやく</rt></ruby>して</u> おきますよ。",
            "rawJp": "わたしが 予約して おきますよ。",
            "vi": "Để tôi đặt trước cho nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Khách sạn / Đặt trước)",
            "values": [
              "ホテルは どう しますか",
              "<ruby>予約<rt>よやく</rt></ruby>して"
            ],
            "rawValues": [
              "ホテルは どう しますか",
              "予約して"
            ],
            "viValues": [
              "khách sạn tính sao",
              "đặt trước"
            ],
            "lineTimings": [
              [
                10.49,
                13.34
              ],
              [
                13.73,
                15.94
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
            "label": "Mẫu 2 (Vé tàu Shinkansen / Mua trước)",
            "values": [
              "<ruby>新幹線<rt>しんかんせん</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>は どう しますか",
              "<ruby>買<rt>か</rt></ruby>って"
            ],
            "rawValues": [
              "新幹線の 切符は どう しますか",
              "買って"
            ],
            "viValues": [
              "vé Shinkansen tính sao",
              "mua trước"
            ],
            "lineTimings": [
              [
                16.32,
                19.99
              ],
              [
                20.38,
                22.25
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
            "label": "Mẫu 3 (Đồ uống cho bữa tiệc / Làm lạnh sẵn)",
            "values": [
              "パーティーの <ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>は どう しますか",
              "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に <ruby>入<rt>い</rt></ruby>れて"
            ],
            "rawValues": [
              "パーティーの 飲み物は どう しますか",
              "冷蔵庫に 入れて"
            ],
            "viValues": [
              "đồ uống tính sao",
              "bỏ vào tủ lạnh trước"
            ],
            "lineTimings": [
              [
                22.63,
                26.21
              ],
              [
                26.59,
                29.11
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
        "id": "rc30-3",
        "title": "<ruby>練習<rt>れんしゅう</rt></ruby>C - Mẫu 3: Hỏi có nên dọn đi hay giữ nguyên trạng thái (このままに して おきます)",
        "context": "Hỏi ý kiến sau khi dùng xong phòng họp hoặc bàn ăn.",
        "lines": [
          {
            "id": "rc30-3-l1",
            "speaker": "A",
            "jp": "<ruby>会議<rt>かいぎ</rt></ruby>が <ruby>終<rt>お</rt></ruby>わりましたが、<u>いすを <ruby>片<rt>かた</rt></ruby>づけましょうか</u>。",
            "rawJp": "会議が 終わりましたが、いすを 片づけましょうか。",
            "vi": "Cuộc họp kết thúc rồi, tôi dọn ghế đi nhé?"
          },
          {
            "id": "rc30-3-l2",
            "speaker": "B",
            "jp": "いいえ、あしたも <ruby>使<rt>つか</rt></ruby>いますから、<u>そのままに して</u> おいて ください。",
            "rawJp": "いいえ、あしたも 使いますから、そのままに して おいて ください。",
            "vi": "Không, ngày mai vẫn dùng tiếp nên bạn cứ để nguyên như thế giúp tôi nhé."
          }
        ],
        "substitutions": [
          {
            "label": "Mẫu 1 (Dọn ghế / Cứ để nguyên như thế)",
            "values": [
              "いすを <ruby>片<rt>かた</rt></ruby>づけましょうか",
              "そのままに して"
            ],
            "rawValues": [
              "いすを 片づけましょうか",
              "そのままに して"
            ],
            "viValues": [
              "dọn ghế",
              "cứ để nguyên"
            ],
            "lineTimings": [
              [
                29.5,
                32.81
              ],
              [
                33.19,
                37.61
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
            "label": "Mẫu 2 (Đóng cửa sổ / Cứ mở thế cho thoáng)",
            "values": [
              "<ruby>窓<rt>まど</rt></ruby>を <ruby>閉<rt>し</rt></ruby>めましょうか",
              "<ruby>開<rt>あ</rt></ruby>けて"
            ],
            "rawValues": [
              "窓を 閉めましょうか",
              "開けて"
            ],
            "viValues": [
              "đóng cửa sổ",
              "cứ để mở"
            ],
            "lineTimings": [
              [
                37.99,
                41.09
              ],
              [
                41.47,
                45.36
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
            "label": "Mẫu 3 (Tắt đèn / Cứ bật để đó)",
            "values": [
              "<ruby>電気<rt>でんき</rt></ruby>を <ruby>消<rt>け</rt></ruby>しましょうか",
              "つけて"
            ],
            "rawValues": [
              "電気を 消しましょうか",
              "つけて"
            ],
            "viValues": [
              "tắt đèn",
              "cứ để bật"
            ],
            "lineTimings": [
              [
                45.74,
                48.98
              ],
              [
                49.37,
                53.28
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
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "kq30-1",
        "question": "Chủ đề chính của bài hội thoại Bài 30「<ruby>予習<rt>よしゅう</rt></ruby>して おきます」mang ý nghĩa là gì?",
        "options": [
          "Hỏi đường đến nhà ga gần nhất",
          "Đặt bàn trước tại nhà hàng Nhật",
          "Tôi sẽ chuẩn bị bài trước",
          "Xin phép nghỉ làm vì bị ốm"
        ],
        "correctIdx": 2,
        "explanation": "「<ruby>予習<rt>よしゅう</rt></ruby>して おきます」trong Bài 30 có nghĩa là \"Tôi sẽ chuẩn bị bài trước\". Bối cảnh: Trước buổi họp tại văn phòng, anh Yamada và anh Miller kiểm tra lại phòng họp xem tài liệu, lịch trình đã được chuẩn bị sẵn sàng chưa và phân công các việc cần chuẩn bị trước."
      },
      {
        "id": "kq30-2",
        "question": "Trong bài hội thoại, khi đối phương nói:「ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。」(Anh Miller ơi, việc chuẩn bị cho cuộc họp chiều nay đã xong xuôi chưa?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>資料<rt>しりょう</rt></ruby>は？",
          "20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。",
          "ご<ruby>苦労<rt>くろう</rt></ruby>さま。あ、ホワイトボードに まだ きのうの <ruby>予定<rt>よてい</rt></ruby>が <ruby>書<rt>か</rt></ruby>いて ありますね。",
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 30, câu đáp chuẩn xác là:「ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。」(Vâng. Ghế trong phòng họp thì đã được xếp sẵn sàng rồi ạ.). 「<ruby>並<rt>なら</rt></ruby>べてあります」nhấn mạnh ghế đã được ai đó sắp xếp có chủ đích phục vụ cuộc họp."
      },
      {
        "id": "kq30-3",
        "question": "Trong bài hội thoại, khi đối phương nói:「ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。」(Vâng. Ghế trong phòng họp thì đã được xếp sẵn sàng rồi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>資料<rt>しりょう</rt></ruby>は？",
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
          "20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。",
          "ご<ruby>苦労<rt>くろう</rt></ruby>さま。あ、ホワイトボードに まだ きのうの <ruby>予定<rt>よてい</rt></ruby>が <ruby>書<rt>か</rt></ruby>いて ありますね。"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 30, câu đáp chuẩn xác là:「<ruby>資料<rt>しりょう</rt></ruby>は？」(Thế còn tài liệu họp thì sao?). Hỏi về tài liệu phát cho người dự họp."
      },
      {
        "id": "kq30-4",
        "question": "Trong bài hội thoại, khi đối phương nói:「<ruby>資料<rt>しりょう</rt></ruby>は？」(Thế còn tài liệu họp thì sao?), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ご<ruby>苦労<rt>くろう</rt></ruby>さま。あ、ホワイトボードに まだ きのうの <ruby>予定<rt>よてい</rt></ruby>が <ruby>書<rt>か</rt></ruby>いて ありますね。",
          "20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。",
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 30, câu đáp chuẩn xác là:「20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。」(Tôi đã photo 20 bản và đặt sẵn ở trên bàn rồi ạ.). 「<ruby>置<rt>お</rt></ruby>いてあります」: đã đặt sẵn trên bàn."
      },
      {
        "id": "kq30-5",
        "question": "Trong bài hội thoại, khi đối phương nói:「20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。」(Tôi đã photo 20 bản và đặt sẵn ở trên bàn rồi ạ.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。",
          "<ruby>資料<rt>しりょう</rt></ruby>は？",
          "ご<ruby>苦労<rt>くろう</rt></ruby>さま。あ、ホワイトボードに まだ きのうの <ruby>予定<rt>よてい</rt></ruby>が <ruby>書<rt>か</rt></ruby>いて ありますね。",
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。"
        ],
        "correctIdx": 2,
        "explanation": "Theo mạch hội thoại Bài 30, câu đáp chuẩn xác là:「ご<ruby>苦労<rt>くろう</rt></ruby>さま。あ、ホワイトボードに まだ きのうの <ruby>予定<rt>よてい</rt></ruby>が <ruby>書<rt>か</rt></ruby>いて ありますね。」(Cảm ơn anh đã vất vả. À, trên bảng trắng vẫn còn viết lịch trình của ngày hôm qua kìa.). 「<ruby>書<rt>か</rt></ruby>いてあります」: chữ đã được viết trên bảng."
      },
      {
        "id": "kq30-6",
        "question": "Trong bài hội thoại, khi đối phương nói:「ご<ruby>苦労<rt>くろう</rt></ruby>さま。あ、ホワイトボードに まだ きのうの <ruby>予定<rt>よてい</rt></ruby>が <ruby>書<rt>か</rt></ruby>いて ありますね。」(Cảm ơn anh đã vất vả. À, trên bảng trắng vẫn còn viết lịch trình của ngày hôm qua kìa.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。",
          "<ruby>資料<rt>しりょう</rt></ruby>は？",
          "あ、すみません。すぐ <ruby>消<rt>け</rt></ruby>して おきます。"
        ],
        "correctIdx": 3,
        "explanation": "Theo mạch hội thoại Bài 30, câu đáp chuẩn xác là:「あ、すみません。すぐ <ruby>消<rt>け</rt></ruby>して おきます。」(Ồ, xin lỗi anh. Để tôi xóa đi ngay cho sẵn sàng.). 「<ruby>消<rt>け</rt></ruby>しておきます」(けしておきます): xóa sẵn đi để chuẩn bị cho cuộc họp mới."
      },
      {
        "id": "kq30-7",
        "question": "Trong bài hội thoại, khi đối phương nói:「あ、すみません。すぐ <ruby>消<rt>け</rt></ruby>して おきます。」(Ồ, xin lỗi anh. Để tôi xóa đi ngay cho sẵn sàng.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "それから、<ruby>会議<rt>かいぎ</rt></ruby>が <ruby>始<rt>はじ</rt></ruby>まる <ruby>前<rt>まえ</rt></ruby>に、エアコンを つけて おいて くださいね。",
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。",
          "<ruby>資料<rt>しりょう</rt></ruby>は？"
        ],
        "correctIdx": 0,
        "explanation": "Theo mạch hội thoại Bài 30, câu đáp chuẩn xác là:「それから、<ruby>会議<rt>かいぎ</rt></ruby>が <ruby>始<rt>はじ</rt></ruby>まる <ruby>前<rt>まえ</rt></ruby>に、エアコンを つけて おいて くださいね。」(Ngoài ra, trước khi cuộc họp bắt đầu, anh nhớ bật sẵn điều hòa lên giúp tôi nhé.). 「つけておいてください」: hãy bật sẵn lên trước."
      },
      {
        "id": "kq30-8",
        "question": "Trong bài hội thoại, khi đối phương nói:「それから、<ruby>会議<rt>かいぎ</rt></ruby>が <ruby>始<rt>はじ</rt></ruby>まる <ruby>前<rt>まえ</rt></ruby>に、エアコンを つけて おいて くださいね。」(Ngoài ra, trước khi cuộc họp bắt đầu, anh nhớ bật sẵn điều hòa lên giúp tôi nhé.), nhân vật tiếp theo đã đáp lại như thế nào?",
        "options": [
          "<ruby>資料<rt>しりょう</rt></ruby>は？",
          "はい、わかりました。",
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。"
        ],
        "correctIdx": 1,
        "explanation": "Theo mạch hội thoại Bài 30, câu đáp chuẩn xác là:「はい、わかりました。」(Vâng, tôi hiểu rồi ạ.). Tiếp nhận công việc."
      },
      {
        "id": "kq30-9",
        "question": "Để diễn đạt ý: \"Anh Miller ơi, việc chuẩn bị cho cuộc họp chiều nay đã xong xuôi chưa?\" trong tình huống Bài 30, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "<ruby>資料<rt>しりょう</rt></ruby>は？",
          "20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。",
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。"
        ],
        "correctIdx": 2,
        "explanation": "Câu「ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。」dịch nghĩa là \"Anh Miller ơi, việc chuẩn bị cho cuộc họp chiều nay đã xong xuôi chưa?\". Kiểm tra tiến độ chuẩn bị phòng họp."
      },
      {
        "id": "kq30-10",
        "question": "Để diễn đạt ý: \"Vâng. Ghế trong phòng họp thì đã được xếp sẵn sàng rồi ạ.\" trong tình huống Bài 30, câu tiếng Nhật nào sau đây là chuẩn xác nhất?",
        "options": [
          "ミラーさん、<ruby>午後<rt>ごご</rt></ruby>の <ruby>会議<rt>かいぎ</rt></ruby>の <ruby>準備<rt>じゅんび</rt></ruby>は もう できましたか。",
          "<ruby>資料<rt>しりょう</rt></ruby>は？",
          "20<ruby>部<rt>ぶ</rt></ruby> コピーして、<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>置<rt>お</rt></ruby>いて あります。",
          "ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。"
        ],
        "correctIdx": 3,
        "explanation": "Câu「ええ。<ruby>会議室<rt>かいぎしつ</rt></ruby>の いすは もう <ruby>並<rt>なら</rt></ruby>べて あります。」dịch nghĩa là \"Vâng. Ghế trong phòng họp thì đã được xếp sẵn sàng rồi ạ.\". 「<ruby>並<rt>なら</rt></ruby>べてあります」nhấn mạnh ghế đã được ai đó sắp xếp có chủ đích phục vụ cuộc họp."
      }
    ]
  }
};
  if (!root.KAIWA_DATA) root.KAIWA_DATA = {};
  Object.assign(root.KAIWA_DATA, kaiwa_21_30);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = kaiwa_21_30;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
