import { motion } from "framer-motion";
import { Code2, Database, Brain, Terminal, GraduationCap } from "lucide-react";
import { useLocale } from "@/i18n/locale";
import { getUi } from "@/i18n/ui";
import { getContent } from "@/i18n/content";

const skillIcons = [Code2, Terminal, Database, Brain];

const CODING_START_YEAR = 2018;
const yearsCoding = new Date().getFullYear() - CODING_START_YEAR;

export const About = () => {
  const locale = useLocale();
  const t = getUi(locale);
  const c = getContent(locale).about;
  const publicationCount = getContent(locale).research.publications.length;

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
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">{t.sections.about}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="font-mono text-sm mb-4">
                  <span className="syntax-comment">{c.bioComment}</span>
                </div>
                {c.bioParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-foreground">{c.toolkitLabel}</strong>{" "}
                  {c.toolkitBody}
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-mono font-semibold">{c.educationTitle}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="text-foreground font-medium">
                    {c.educationSchool}
                  </span>
                  <br />
                  {c.educationDegree}
                  <br />
                  {c.educationDetails}
                  <br />
                  <span className="text-muted-foreground/90">
                    {c.educationCoursework}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-primary">
                    {yearsCoding}+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {c.statYearsCoding}
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-accent">15+</p>
                  <p className="text-sm text-muted-foreground">{c.statProjects}</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                  <p className="text-3xl font-bold text-syntax-string">
                    {publicationCount}
                  </p>
                  <p className="text-sm text-muted-foreground">{c.statResearch}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {c.skills.map((skillGroup, index) => {
                const Icon = skillIcons[index] ?? Code2;
                return (
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
                        <Icon className="w-5 h-5 text-primary" />
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
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
