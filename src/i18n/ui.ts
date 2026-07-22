import type { Locale } from "./locale";

export const ui = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      research: "Research",
      experience: "Experience",
      contact: "Contact",
    },
    resume: "Resume",
    languageSwitch: "한국어",
    languageSwitchAria: "Switch to Korean",
    hero: {
      welcome: "// Welcome to my portfolio",
      greeting: "Hello, I'm ",
      greetingAfter: "",
      subtitle:
        "Fresh Graduate @ NYU Abu Dhabi · CS Major, Applied Math Minor · Graduated May 2026",
      bio: "I'm passionate about systems that scale and integrating data and AI into practical software solutions. Currently I'm especially interested in data and machine learning: problems where data, infrastructure, and intelligent automation meet. I enjoy building end-to-end solutions. Always open to new challenges and collaborations!",
    },
    roles: [
      "Data Science",
      "Data Engineering",
      "Backend",
      "Machine Learning",
      "Software Engineering",
    ],
    sections: {
      about: "About Me",
      projects: "Projects",
      research: "Research",
      experience: "Experience",
      contactLabel: "05. What's Next?",
      contactTitle: "Get In Touch",
      contactBody:
        "I'm currently looking for new opportunities and collaborations. Whether you have a question, want to discuss research, or just want to say hi, my inbox is always open!",
      sayHello: "Say Hello",
      researchSub: "Research",
      previewOpen: "Open",
      location: "Abu Dhabi, UAE",
    },
    footer: {
      line: "Built with",
      heart: "and lots of",
      code: "code",
    },
  },
  ko: {
    nav: {
      about: "소개",
      projects: "프로젝트",
      research: "연구",
      experience: "경력",
      contact: "연락",
    },
    resume: "이력서",
    languageSwitch: "English",
    languageSwitchAria: "영문 버전으로 이동",
    hero: {
      welcome: "// 김민석의 포트폴리오에 오신 것을 환영해요!",
      greeting: "",
      greetingAfter: "입니다",
      subtitle:
        "NYU Abu Dhabi (뉴욕대학교 아부다비) 신입 졸업생 – 컴퓨터공학 전공, 응용수학 부전공 (2026년 5월 졸업)",
      bio: "확장 가능한 시스템 구축과 데이터 및 AI를 실용적인 소프트웨어 솔루션에 녹여내는 일에 열정을 가지고 있습니다. 최근에는 데이터, 인프라, 그리고 지능형 자동화가 맞물리는 데이터 및 머신러닝 분야에 깊은 관심을 두고 있습니다. 엔드투엔드(End-to-End) 솔루션을 개발하는 과정을 즐기며, 언제나 새로운 도전과 협업을 환영합니다!",
    },
    roles: [
      "데이터 사이언스",
      "데이터 엔지니어링",
      "백엔드",
      "머신러닝",
      "소프트웨어 엔지니어링",
    ],
    sections: {
      about: "소개",
      projects: "프로젝트",
      research: "연구",
      experience: "경력",
      contactLabel: "05. What's Next?",
      contactTitle: "연락 주세요!",
      contactBody:
        "현재 새로운 기회와 협업을 적극적으로 모색하고 있습니다. 궁금한 점이 있으시거나, 연구에 대해 논의하고 싶으시거나, 혹은 가볍게 인사를 나누고 싶으시다면 언제든 편하게 연락해 주세요. 제 메일함은 항상 열려 있습니다!",
      sayHello: "인사 남기기",
      researchSub: "연구",
      previewOpen: "미리보기",
      location: "대한민국",
    },
    footer: {
      line: "Built with",
      heart: "and lots of",
      code: "code",
    },
  },
} as const;

export type UiStrings = (typeof ui)[Locale];

export const getUi = (locale: Locale): UiStrings => ui[locale];
