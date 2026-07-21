import { RESEARCH_LINKS, type SiteContent } from "./shared";

const skillItems = {
  languages: [
    "Python",
    "C++",
    "C",
    "Java",
    "JavaScript",
    "Assembly",
    "SQL",
    "HTML",
    "CSS",
    "YAML",
    "RegEx",
  ],
  frameworks: [
    "PyTorch",
    "React",
    "Node.js",
    "Express",
    "Spring",
    "Flask",
    "FastAPI",
    "pytest",
    "Selenium",
    "NumPy",
    "Pandas",
    "asyncio",
    "REST APIs",
    "Prometheus",
    "Grafana",
    "Docker",
    "Git",
    "GitHub",
    "GitLab",
    "MATLAB",
    "Figma",
    "FlutterFlow",
    "Wireshark",
  ],
  databases: ["AWS RDS", "Firebase", "MongoDB", "HPC", "ArgoCD"],
  ai: ["LLMs", "Computer Vision", "NLP", "Mechanistic Interpretability"],
};

export const enContent: SiteContent = {
  hero: {
    nameFull: "Minseok Kim",
    nameGiven: "Minseok",
  },
  about: {
    bioComment: "/* Bio */",
    bioParagraphs: [
      "I graduated from NYU Abu Dhabi in May 2026 with a B.S. in Computer Science and a minor in Applied Mathematics (GPA: 3.7/4.0). I am passionate about building scalable systems and integrating data and AI into practical software solutions. My journey spans data engineering, backend development, and machine learning.",
      "Most recently, I was a Research Assistant at the eBRAIN Lab at NYU Abu Dhabi, researching security and vulnerabilities in audio language models on HPC clusters and mechanistic interpretability for jailbreak defense. I am also the co-founder of Brainlot, an iOS application with over 1,000 downloads that transforms documents into an infinite stream of interactive, gamified quizzes using LLMs — selected for the NYUAD startup incubator. My industry experience includes Software Engineering at XBTO Trading in New York (real-time performance monitoring with Prometheus and Grafana, Oracle data pipeline engineering for cryptocurrency markets); Full Stack at Swop Holdings in Dubai (migrating core infrastructure from Firebase to AWS and contributing to product vision at pre-seed stage); Software Engineering at Liwa Capital (LLM-powered email processing and personalized data pipelines with Microsoft APIs); and Backend at IT BAND in South Korea (renovating the Korea Maritime Transportation Safety Authority website with Java Spring).",
      "Beyond industry work, I build side projects — from social platforms like Foodify (trending restaurants) and ML models like DeepGenre (movie genre classifier from movie posters), to desktop tools like SenseFit (cursor sensitivity optimization with 90%+ test coverage). I am always eager to tackle complex problems with code and learn new technologies.",
    ],
    toolkitLabel: "Technical toolkit:",
    toolkitBody:
      "Python, C++, Java, JavaScript, PyTorch, AWS, React, Node.js, Prometheus, Grafana, Docker, HPC, FlutterFlow, MATLAB, and more. Feel free to contact me!",
    educationTitle: "Education",
    educationSchool: "New York University Abu Dhabi (NYUAD)",
    educationDegree:
      "Bachelor of Science · Major in Computer Science · Minor in Applied Mathematics",
    educationDetails:
      "2020 – 2026 · Graduated May 2026 · GPA: 3.7 / 4.0 · Abu Dhabi, UAE",
    educationCoursework:
      "Relevant coursework: Machine Learning, Data Structures, Algorithms, Computer Vision, Computer Networks, Software Engineering, Operating Systems, and more.",
    statYearsCoding: "Years Coding",
    statProjects: "Projects",
    statResearch: "Research",
    skills: [
      {
        category: "Languages (and Markup Languages)",
        items: skillItems.languages,
      },
      { category: "Frameworks & Tools", items: skillItems.frameworks },
      { category: "Databases & Infra", items: skillItems.databases },
      { category: "AI/ML", items: skillItems.ai },
    ],
  },
  projects: {
    featuredLabel: "Featured Project",
    items: [
      {
        id: "brainlot",
        title: "Brainlot",
        subtitle: "Infinite Scroll Learning Platform",
        tech: ["Backend", "Mobile App", "Database"],
        highlights: [
          "Co-founded and launched an iOS application with over 1,000 downloads, featuring an infinite vertical scrolling interface that automatically transforms user-uploaded documents into a continuous stream of interactive, gamified multiple choice quizzes.",
          "Engineered the endless quizz generation pipeline in the background to support continuous scrolling, alongside a flexible inference architecture that allows users to toggle between cloud-based and offline local LLMs.",
          "Selected for the NYUAD startup incubator to accelerate product growth with professional guidance, validating the platform's potential and uniqueness in the market.",
        ],
        external:
          "https://apps.apple.com/kr/app/brainlot/id6754814263?l=en-GB",
        image: "gradient-1",
        imageSrc: "brainlot-preview.png",
      },
      {
        id: "foodify",
        title: "Foodify",
        subtitle: "Social Platform for Trending Restaurants",
        tech: [
          "Backend",
          "Web App",
          "JavaScript (React)",
          "Python",
          "Web Scraping",
          "Database",
        ],
        highlights: [
          "Built a social platform where users can swipe to discover trending restaurants, like and share lists, and explore popular recommendations.",
          "Made it easy for users to connect over shared taste while helping small businesses get discovered through social media-like experience.",
          "Scraped data from Yelp and Google Maps, and managed the data using Firebase.",
        ],
        external: "https://foodify.cc",
        image: "gradient-2",
        imageSrc: "foodify-preview.png",
      },
      {
        id: "sensefit",
        title: "SenseFit",
        subtitle: "Automatic Cursor Sensitivity Adjust Tool",
        tech: ["Software Engineering", "Python", "PyQt5", "pytest"],
        highlights: [
          "Developed a desktop application that tracks real-time cursor data and analyzes movement patterns to calculate and suggest optimal mouse sensitivity (DPI) for users.",
          "Engineered complex analysis algorithms to identify and quantify suboptimal behaviors, including complex cursor movement patterns to generate data-driven recommendations.",
          "Ensured high reliability by achieving over 90% unit and system test coverage using pytest.",
        ],
        github: "https://github.com/MinseokKim0813/Sense_Fit",
        external: "https://github.com/MinseokKim0813/Sense_Fit",
        image: "gradient-3",
        imageSrc: "sensefit-preview.png",
      },
      {
        id: "deepgenre",
        title: "DeepGenre",
        subtitle: "Deep Learning Model for Movie Genre Classifier",
        tech: ["Machine Learning", "Computer Vision", "Pytorch", "Python"],
        highlights: [
          "Developed a multi-label CNN model to predict movie genres across 28 distinct classes based on the movie poster.",
          "Achieved 59.98% precision, outperforming by 16.8 times against the random baseline precision of 3.5% and confirming robust transfer learning capabilities in complex visual recognition tasks.",
          "Eliminated predictive bias prevalent in other models stemming from movie titles by utilizing OCR and in-painting to remove text, ensuring classification relied solely on visual artwork rather than linguistic clues.",
        ],
        github: "https://github.com/MinseokKim0813/DeepGenre",
        external: "https://github.com/MinseokKim0813/DeepGenre",
        image: "gradient-4",
        imageSrc: "deepgenre-preview.png",
      },
      {
        id: "genderar",
        title: "GenderAr",
        subtitle: "Arabic Name Gender Classification (Research report)",
        tech: ["Machine Learning", "NLP", "Transformers", "Python"],
        highlights: [
          "Developed a novel hybrid gender classifier for Arabic names by combining two custom-trained models: a morphological analyzer leveraging specific linguistic rules and a fine-tuned Transformer for deep learning inference.",
          "Achieved 91.68% accuracy, outperforming the baseline by successfully integrating linguistic rules with deep learning inference.",
          "Implemented and evaluated three distinct classification methodologies: Morphological Analyzer Model (Logistic Regression), Semantic Analyzer Model (Word Embeddings), Deep Learning Model (Fine-tuning Transformer), and a Hybrid Cascade system.",
        ],
        github: "https://github.com/MinseokKim0813/GenderAr",
        external: RESEARCH_LINKS.gender,
        image: "gradient-5",
        imageSrc: "genderar-preview.png",
      },
      {
        id: "mathtextor",
        title: "MathTextor",
        subtitle: "Humanizing Mathematical Typesetting (Research report)",
        tech: [
          "Full Stack",
          "Web App",
          "Human-Computer Interaction",
          "Javascript",
        ],
        highlights: [
          "Developed a context-aware web interface with LLMs that dynamically predicts and suggests mathematical symbols based on problem context, eliminating the need for LaTeX memorization.",
          "Conducted a user study with 24 participants, demonstrating that the system reduced typesetting time by 38.6% for novice users compared to standard LaTeX editors.",
          "Optimized user experience by building an LLM inference pipeline with 72.9% F1 score, yielding a 4.57/7 usability score through the application of HCI design principles.",
        ],
        github: "https://github.com/MinseokKim0813/MathTextor",
        external: RESEARCH_LINKS.mathTextor,
        image: "gradient-6",
        imageSrc: "mathtextor-preview.png",
      },
      {
        id: "trendmap",
        title: "TrendMap",
        subtitle: "Real-Time Media Attention Analyzer",
        tech: ["Data Analysis", "Web Scraping", "Python"],
        highlights: [
          "Built a tool that tracks media mentions of top American companies, analyzing trends across industries and states.",
          "It identifies sectors and regions receiving the most attention, offering insights for informed investment decisions and market analysis.",
        ],
        github: "https://github.com/MinseokKim0813/TrendMap",
        external: "https://github.com/MinseokKim0813/TrendMap",
        image: "gradient-7",
        imageSrc: "trendmap-preview.png",
      },
      {
        id: "fundmonitor",
        title: "FundMonitor",
        subtitle: "Crowdfunding Campaign Data Scraper & Analyzer",
        tech: ["Data Analysis", "Web Scraping", "Python"],
        highlights: [
          "Developed a web scraper tool to extract and analyze real-time data from crowdfunding platforms, providing insights into funding progress across various categories and regions.",
          "Identified global funding trends and underfunded sectors to facilitate optimized corporate social responsibility strategies, targeted investments, and product innovation opportunities.",
        ],
        github: "https://github.com/MinseokKim0813/FundMonitor",
        external: "https://github.com/MinseokKim0813/FundMonitor",
        image: "gradient-8",
        imageSrc: "fundmonitor-preview.png",
      },
    ],
  },
  experiences: [
    {
      company: "eBRAIN Lab",
      role: "Research Assistant",
      period: "Jan 2026 - Jul 2026",
      location: "Abu Dhabi, UAE",
      description: [
        "Conducted research on security mechanisms and vulnerabilities of large Audio Language Models (ALMs) utilizing HPC clusters.",
        "Analyzed internal vectors, applying mechanistic interpretability to identify specific security vulnerabilities that trigger jailbreak attacks.",
      ],
    },
    {
      company: "XBTO Trading",
      role: "Software Engineering Intern",
      period: "Jun 2025 - Aug 2025",
      location: "New York, USA",
      description: [
        "Engineered and deployed a real-time performance monitoring system, leveraging Prometheus and Grafana to visualize competitor rankings and individual cryptocurrency scores.",
        "Maintained and debugged a core data pipeline ingesting purchased raw market data as Oracle data engineering team member, managing the deployment of distinct processing jobs to ensure data integrity and system reliability.",
        "Conducted data collection and analysis by web scraping competitor and asset performance data, providing key insights to improve external company rankings in cryptocurrency publishing.",
      ],
    },
    {
      company: "Swop Holdings",
      role: "Full Stack Developer",
      period: "Feb 2025 - May 2025",
      location: "Dubai, UAE",
      description: [
        "Joined as a preseed-stage team member, contributing directly to mobile app product vision and VC investments.",
        "Migrated core data infrastructure from Firebase to AWS, architecting relational database and refactoring backend endpoints.",
        "Managed data operations: cleaned and structured product data from onboarding partners and ensured accurate ingestion into the relational database.",
      ],
    },
    {
      company: "Liwa Capital",
      role: "Software Engineering Intern",
      period: "Apr 2024 - Jul 2024",
      location: "Abu Dhabi, UAE",
      description: [
        "Developed a custom software that uses LLMs to read emails and update schedules, assign group tasks, and extract actionable insights.",
        "Constructed secure and personalized data pipeline, integrating LLMs, Microsoft APIs and company's document database.",
        "Significantly enhanced team productivity by eliminating the need to check hundreds of emails daily.",
      ],
    },
    {
      company: "IT BAND",
      role: "Backend Developer",
      period: "Aug 2021 - Oct 2021",
      location: "Daejeon, South Korea",
      description: [
        "Renovated the official website for the Korea Maritime Transportation Safety Authority, optimizing performance and modernizing the user experience (komsa.or.kr).",
        "Focused on optimization and debugging, reducing load times and resolving critical errors in the backend to improve performance and reliability.",
        "Refined backend systems using Java Spring framework, Oracle, HTML, and JavaScript.",
      ],
    },
  ],
  research: {
    interests: [
      {
        title: "Machine Learning",
        description:
          "Deep learning, neural architecture search, and model compression",
      },
      {
        title: "Natural Language Processing",
        description:
          "Transformers, multilingual models, and semantic understanding",
      },
      {
        title: "Human Computer Interaction",
        description:
          "User-centered design, usability evaluation, and interactive systems",
      },
      {
        title: "LLM Security",
        description:
          "Prompt injection, model robustness, and safe deployment of language models",
      },
    ],
    current: {
      role: "Research Assistant",
      lab: "eBRAIN Lab",
      institution: "NYU Abu Dhabi",
      period: "Jan 2026 – Jul 2026",
      roleMeta: "Research Assistant at NYU Abu Dhabi · Jan 2026 – Jul 2026",
      topic: "LLM Jailbreak Security",
      summary:
        "We study how harmful instructions hidden in audio can trick speech-AI models, and where those attacks take effect inside the model. Jailbreak signals concentrate in mid-to-upper mel bands and at architecture-specific decoder depths; cross-model transfer fails yet exposes per-band asymmetry, informing band-region suppression and layer-level monitoring as defenses.",
      authors: [
        "Boyuan Chen [NYU]",
        "Sohaila Abdulsattar [NYU]",
        "Minseok Kim [NYU]",
        "Minghao Shao [NYU]",
        "Siddharth Garg [NYU]",
        "Ramesh Karri [NYU]",
        "Muhammad Shafique [NYU]",
      ],
      link: RESEARCH_LINKS.ebrain,
    },
    publications: [
      {
        title:
          "Gender Identification of Arabic Names: A Comparative Analysis of Morphological, Semantic and Deep Learning Approaches",
        type: "Research Paper",
        authors: ["Minseok Kim [NYU Abu Dhabi]"],
        advisors: "Nizar Habash [NYU Abu Dhabi]",
        abstract:
          "A novel hybrid gender classifier for Arabic names combining a morphological analyzer with linguistic rules and a fine-tuned Transformer, achieving 91.68% accuracy and outperforming the baseline by integrating linguistic rules with deep learning inference.",
        link: RESEARCH_LINKS.gender,
      },
      {
        title:
          "MathTextor: Humanizing Mathematical Typesetting for Undergraduate Students",
        type: "Research Paper",
        authors: [
          "Minseok Kim [NYU Abu Dhabi], Moumena Chaqfeh [NYU Abu Dhabi]",
        ],
        advisors:
          "Moumena Chaqfeh [NYU Abu Dhabi], Steven Euijong Whang [KAIST]",
        abstract:
          "A context-aware web interface with LLMs that dynamically predicts and suggests mathematical symbols based on problem context. A user study with 24 participants showed a 38.6% reduction in typesetting time for novice users; the system achieved 72.9% F1 score and 4.57/7 usability.",
        link: RESEARCH_LINKS.mathTextor,
      },
    ],
    advisedBy: "Advised by:",
  },
};
