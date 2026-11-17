# Open JTalk Japanese study voice

The browser wrapper and WebAssembly build are from
[openjtalkjs 0.1.0](https://www.npmjs.com/package/@keanu-thakalath/openjtalkjs/v/0.1.0).
The wrapper reads gzip-compressed dictionary files, lets the virtual filesystem
take ownership of their buffers, and returns PCM as a Float32Array.

The UTF-8 dictionary is from
[Open JTalk 1.11](https://github.com/r9y9/open_jtalk/releases/tag/v1.11.1).
The dictionary files are packaged individually with gzip.

The unmodified **NIT ATR503 M001** (1.05) voice is by the HTS Working Group,
© Nagoya Institute of Technology, Department of Computer Science. It is
distributed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
The voice data was obtained from the
[Debian source package](https://deb.debian.org/debian/pool/contrib/h/hts-voice-nitech-jp-atr503-m001/).

The accompanying license files contain the project and upstream copyright notices.
