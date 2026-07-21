import { motion } from "framer-motion";
import { Code2, Database, Brain, Terminal, GraduationCap } from "lucide-react";
import { publications } from "./Research";
import { useLocale } from "@/i18n/locale";
import { getUi } from "@/i18n/ui";

const skills = [
  {
    category: "Languages (and Markup Languages)",
    items: [
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
    icon: Code2,
  },
  {
    category: "Frameworks & Tools",
    items: [
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
    icon: Terminal,
  },
  {
    category: "Databases & Infra",
    items: ["AWS RDS", "Firebase", "MongoDB", "HPC", "ArgoCD"],
    icon: Database,
  },
  {
    category: "AI/ML",
    items: ["LLMs", "Computer Vision", "NLP", "Mechanistic Interpretability"],
    icon: Brain,
  },
];

const CODING_START_YEAR = 2018;
const yearsCoding = new Date().getFullYear() - CODING_START_YEAR;

export const About = () => {
  const t = getUi(useLocale());

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">{t.sections.about}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="font-mono text-sm mb-4">
                  <span className="syntax-comment">{"/* Bio */"}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I graduated from NYU Abu Dhabi in May 2026 with a B.S. in
                  Computer Science and a minor in Applied Mathematics (GPA:
                  3.7/4.0). I am passionate about building scalable systems and
                  integrating data and AI into practical software solutions. My
                  journey spans data engineering, backend development, and
                  machine learning.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most recently, I was a{" "}
                  <strong className="text-foreground">
                    Research Assistant
                  </strong>{" "}
                  at the eBRAIN Lab at NYU Abu Dhabi, researching security and
                  vulnerabilities in audio language models on HPC clusters and
                  mechanistic interpretability for jailbreak defense. I am also
                  the co-founder of Brainlot, an iOS application with over 1,000
                  downloads that transforms documents into an infinite stream of
                  interactive, gamified quizzes using LLMs — selected for the
                  NYUAD startup incubator. My industry experience includes:{" "}
                  <strong className="text-foreground">
                    Software Engineering
                  </strong>{" "}
                  at XBTO Trading in New York (real-time performance monitoring
                  with Prometheus and Grafana, Oracle data pipeline engineering
                  for cryptocurrency markets);{" "}
                  <strong className="text-foreground">Full Stack</strong> at
                  Swop Holdings in Dubai (migrating core infrastructure from
                  Firebase to AWS and contributing to product vision at pre-seed
                  stage);{" "}
                  <strong className="text-foreground">
                    Software Engineering
                  </strong>{" "}
                  at Liwa Capital (LLM-powered email processing and personalized
                  data pipelines with Microsoft APIs); and{" "}
                  <strong className="text-foreground">Backend</strong> at IT
                  BAND in South Korea (renovating the Korea Maritime
                  Transportation Safety Authority website with Java Spring).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond industry work, I build side projects - from social
                  platforms like Foodify (trending restaurants) and ML models
                  like DeepGenre (movie genre classifier from movie posters), to
                  desktop tools like SenseFit (cursor sensitivity optimization
                  with 90%+ test coverage). I am always eager to tackle complex
                  problems with code and learn new technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    Technical toolkit:
                  </strong>{" "}
                  Python, C++, Java, JavaScript, PyTorch, AWS, React, Node.js,
                  Prometheus, Grafana, Docker, HPC, FlutterFlow, MATLAB, and
                  more. Feel free to contact me!
                </p>
              </div>

              {/* Education */}
              <div className="bg-card border border-border rounded-lg p-4 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-mono font-semibold">Education</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="text-foreground font-medium">
                    New York University Abu Dhabi (NYUAD)
                  </span>
                  <br />
                  Bachelor of Science · Major in Computer Science · Minor in
                  Applied Mathematics
                  <br />
                  2020 – 2026 · Graduated May 2026 · GPA: 3.7 / 4.0 · Abu Dhabi,
                  UAE
                  <br />
                  <span className="text-muted-foreground/90">
                    Relevant coursework: Machine Learning, Data Structures,
                    Algorithms, Computer Vision, Computer Networks, Software
                    Engineering, Operating Systems, and more.
                  </span>
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-primary">
                    {yearsCoding}+
                  </p>
                  <p className="text-sm text-muted-foreground">Years Coding</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-accent">15+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-syntax-string">
                    {publications.length}
                  </p>
                  <p className="text-sm text-muted-foreground">Researches</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-card border border-border rounded-lg p-4 card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <skillGroup.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-mono font-semibold">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
