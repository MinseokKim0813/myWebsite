import { motion } from "framer-motion";
import { Code2, Database, Brain, Terminal, GraduationCap } from "lucide-react";
import { publications } from "./Research";

const skills = [
  {
    category: "Languages (and Markup Languages)",
    items: [
      "Python",
      "C++",
      "SQL",
      "C",
      "JavaScript",
      "Java",
      "Assembly",
      "Regex",
      "HTML",
      "CSS",
      "YAML",
    ],
    icon: Code2,
  },
  {
    category: "Frameworks & Tools",
    items: [
      "Figma",
      "Git",
      "React",
      "Node.js",
      "Grafana",
      "Wireshark",
      "FlutterFlow",
      "Prometheus",
      "Express",
      "Spring",
      "Flask",
      "REST APIs",
      "FastAPI",
      "PyTorch",
      "pytest",
      "Selenium",
      "MATLAB",
    ],
    icon: Terminal,
  },
  {
    category: "Databases & Infra",
    items: ["AWS RDS", "MongoDB", "Firebase", "Prometheus"],
    icon: Database,
  },
  {
    category: "AI/ML",
    items: ["PyTorch", "LLMs", "Computer Vision", "NLP", "MLLMs"],
    icon: Brain,
  },
];

const CODING_START_YEAR = 2018;
const yearsCoding = new Date().getFullYear() - CODING_START_YEAR;

export const About = () => {
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
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
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
                  I am a Computer Science major and Applied Mathematics minor at
                  NYU Abu Dhabi (Class of 2026, GPA: 3.71) with a passion for
                  building scalable systems and integrating data and AI into
                  practical software solutions. My journey spans data
                  engineering, full-stack development, and machine learning.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently, I am a{" "}
                  <strong className="text-foreground">
                    Research Assistant
                  </strong>{" "}
                  at the eBRAIN Lab at NYU Abu Dhabi, working on LLM Jailbreak
                  Security research with a focus on multimodal LLMs (MLLMs). I
                  am also the co-founder of Brainlot, an iOS application with
                  over 400 downloads that transforms documents into an infinite
                  stream of interactive, gamified quizzes using LLMs—selected
                  for the NYUAD startup incubator. My industry experience
                  includes:{" "}
                  <strong className="text-foreground">
                    Software Engineering
                  </strong>{" "}
                  at XBTO Trading in New York (real-time performance monitoring
                  with Prometheus and Grafana, data pipeline engineering with
                  Oracle);{" "}
                  <strong className="text-foreground">Full Stack</strong> at
                  Swop Holdings in Dubai (migrating core infrastructure from
                  Firebase to AWS RDS at preseed stage);{" "}
                  <strong className="text-foreground">AI Integration</strong> at
                  Liwa Capital (AI-powered email processing with OpenAI and
                  Microsoft Graph API); and{" "}
                  <strong className="text-foreground">Backend</strong> at IT
                  BAND in South Korea (renovating the Korea Maritime
                  Transportation Safety Authority website with Java Spring and
                  Oracle).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond industry work, I build side projects—from social
                  platforms like Foodify (trending restaurants) and ML models
                  like DeepGenre (movie genre classification from posters), to
                  desktop tools like SenseFit (cursor sensitivity optimization
                  with 90%+ test coverage). I am always eager to tackle complex
                  problems with code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    Technical toolkit:
                  </strong>{" "}
                  Python, C++, Java, JavaScript, PyTorch, AWS, React, Node.js,
                  Docker, SQL, Prometheus, Grafana, and more. Feel free to
                  connect!
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
                  Senior · Graduation Expected May 2026 · GPA: 3.71 / 4.0 · UAE
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
