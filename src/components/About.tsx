import { motion } from "framer-motion";
import { Code2, Database, Brain, Terminal, GraduationCap } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Java", "C++", "Rust"],
    icon: Code2,
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Django", "TensorFlow", "PyTorch"],
    icon: Terminal,
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    icon: Database,
  },
  {
    category: "AI/ML",
    items: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
    icon: Brain,
  },
];

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
                  I am a Computer Science major and Applied Mathematics minor at NYU Abu Dhabi (Class of 2026) with a passion for building scalable systems and integrating AI into practical software solutions. My journey in software engineering spans data engineering, full-stack development, and machine learning.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently, I am the co-founder of Brainlot, an iOS platform that uses LLMs to transform documents into interactive quizzes. My technical background is grounded in hands-on industry experience: <strong className="text-foreground">Data Engineering for FinTech & Trading</strong> at XBTO Trading in New York (real-time performance monitoring with Prometheus and Grafana); <strong className="text-foreground">Full Stack</strong> at a startup, leading migration of core data infrastructure to AWS RDS for pre-seed growth; and <strong className="text-foreground">AI Integration</strong> at Liwa Capital, developing AI-powered workflows to automate email processing and enhance team productivity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond industry work, I am deeply invested in research. I have developed novel models for Arabic name gender classification (GenderAr) and context-aware mathematical typesetting (MathTextor), tackling complex challenges in NLP and HCI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Technical toolkit:</strong> Python, C++, Java, PyTorch, AWS, React.js, Docker, and SQL. I am always looking for opportunities to solve complex problems with code. Feel free to connect!
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
                  <span className="text-foreground font-medium">New York University Abu Dhabi (NYUAD)</span>
                  <br />
                  Bachelor of Science · Major in Computer Science · Minor in Applied Mathematics
                  <br />
                  Senior · Graduation Expected May 2026 · GPA: 3.71 / 4.0 · UAE
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Coding</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-accent">20+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-syntax-string">10+</p>
                  <p className="text-sm text-muted-foreground">Publications</p>
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
                    <h3 className="font-mono font-semibold">{skillGroup.category}</h3>
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
