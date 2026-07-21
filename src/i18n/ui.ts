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
    },
    footer: {
      built: "Built with",
      and: "and lots of",
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
    languageSwitchAria: "Switch to English",
    hero: {
      welcome: "// 포트폴리오에 오신 것을 환영합니다",
      greeting: "안녕하세요, ",
      subtitle:
        "NYU 아부다비 졸업 · 컴퓨터과학 전공, 응용수학 부전공 · 2026년 5월 졸업",
      bio: "확장 가능한 시스템을 구축하고 데이터와 AI를 실용적인 소프트웨어로 연결하는 일에 관심이 많습니다. 현재는 데이터, 인프라, 지능형 자동화가 만나는 데이터·머신러닝 분야에 특히 관심을 두고 있습니다. 엔드투엔드 솔루션을 만드는 것을 즐기며, 새로운 도전과 협업을 항상 환영합니다!",
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
      contactLabel: "05. 다음 단계",
      contactTitle: "연락하기",
      contactBody:
        "새로운 기회와 협업을 찾고 있습니다. 질문이 있으시거나 연구 이야기를 나누고 싶으시거나, 가볍게 인사만 하고 싶으셔도 언제든 연락 주세요!",
      sayHello: "메일 보내기",
      researchSub: "연구",
      previewOpen: "열기",
    },
    footer: {
      built: "만든 사람:",
      and: "그리고 많은",
    },
  },
} as const;

export type UiStrings = (typeof ui)[Locale];

export const getUi = (locale: Locale): UiStrings => ui[locale];
