import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { getUi } from "@/i18n/ui";
import { getContent } from "@/i18n/content";
import { useLocale } from "@/i18n/locale";

const gradientClasses: Record<string, string> = {
  "gradient-1": "from-primary/20 to-accent/20",
  "gradient-2": "from-syntax-keyword/20 to-primary/20",
  "gradient-3": "from-accent/20 to-syntax-string/20",
  "gradient-4": "from-primary/20 to-accent/20",
  "gradient-5": "from-syntax-keyword/20 to-primary/20",
  "gradient-6": "from-accent/20 to-syntax-string/20",
  "gradient-7": "from-primary/20 to-accent/20",
  "gradient-8": "from-syntax-keyword/20 to-primary/20",
};

export const Projects = () => {
  const locale = useLocale();
  const t = getUi(locale);
  const { featuredLabel, items: featuredProjects } = getContent(locale).projects;
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="projects" className="py-24 bg-card/30">
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
            <span className="text-primary font-mono">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">{t.sections.projects}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative grid md:grid-cols-12 gap-4 items-start"
              >
                <div
                  className={`flex flex-col gap-6 ${
                    index % 2 === 0 ? "md:col-span-7" : "md:col-span-7 md:col-start-6"
                  }`}
                >
                {/* Project image/gradient */}
                <div className="w-full">
                  <div
                    className={`aspect-video rounded-lg border border-border overflow-hidden relative group ${
                      project.imageSrc && !imageErrors[project.title]
                        ? "bg-muted"
                        : `bg-gradient-to-br ${gradientClasses[project.image]}`
                    }`}
                  >
                    {project.imageSrc && !imageErrors[project.title] ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${project.imageSrc}`}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={() =>
                          setImageErrors((prev) => ({
                            ...prev,
                            [project.title]: true,
                          }))
                        }
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-grid opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-4xl text-foreground/20">
                            {"{...}"}
                          </span>
                        </div>
                      </>
                    )}
{(project.github?.trim() || project.external?.trim()) && (
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                      {project.github?.trim() && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {project.external?.trim() &&
                        project.external !== project.github && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="External Link"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="w-full">
                  <p className="text-primary font-mono text-sm mb-2">
                    {featuredLabel}
                  </p>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold hover:text-primary transition-colors">
                      {project.external?.trim() || project.github?.trim() ? (
                        <a
                          href={
                            project.external?.trim() || project.github?.trim()
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1 font-mono break-all">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 mb-4 shadow-lg">
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="flex flex-wrap gap-3 font-mono text-sm text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
