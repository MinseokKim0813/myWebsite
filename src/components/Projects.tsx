import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const featuredProjects = [
  {
    title: "Foodify",
    description:
      "Social platform where users swipe to discover trending restaurants, like and share lists, and explore popular recommendations. Built the frontend with React, scraped data from Yelp and Google Maps, and managed the data using Firebase. Helps users connect over shared taste while helping small businesses get discovered through a social media–like experience.",
    tech: ["React", "JavaScript", "Python", "Web Scraping", "Firebase"],
    github: undefined,
    external: "https://foodify.cc",
    image: "gradient-1",
  },
  {
    title: "Brainlot",
    description:
      "Co-founded and launched an iOS application with over 300 downloads, featuring an infinite vertical scrolling interface that transforms user-uploaded documents into a continuous stream of interactive, gamified multiple choice quizzes. Engineered the endless quiz generation pipeline and a flexible inference architecture supporting cloud-based and offline local LLMs. Selected for the university startup incubator.",
    tech: ["TypeScript", "Mobile App", "Database", "LLMs"],
    github: undefined,
    external: "https://apps.apple.com/kr/app/brainlot/id6754814263?l=en-GB",
    image: "gradient-2",
  },
  {
    title: "DeepGenre",
    description:
      "Multi-label CNN model to predict movie genres across 28 distinct classes based on movie posters. Achieved 59.98% precision (16.8× the random baseline). Used OCR and in-painting to remove poster text, ensuring classification relied solely on visual artwork and eliminating predictive bias from movie titles.",
    tech: ["Python", "PyTorch", "Computer Vision", "CNN"],
    github: "https://github.com/MinseokKim0813/DeepGenre",
    external: "https://github.com/MinseokKim0813/DeepGenre",
    image: "gradient-3",
  },
];

const gradientClasses: Record<string, string> = {
  "gradient-1": "from-primary/20 to-accent/20",
  "gradient-2": "from-syntax-keyword/20 to-primary/20",
  "gradient-3": "from-accent/20 to-syntax-string/20",
};

export const Projects = () => {
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
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project image/gradient */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className={`aspect-video rounded-lg bg-gradient-to-br ${
                      gradientClasses[project.image]
                    } border border-border overflow-hidden relative group`}
                  >
                    <div className="absolute inset-0 bg-grid opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-4xl text-foreground/20">
                        {"{...}"}
                      </span>
                    </div>
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
                      {project.external?.trim() && (
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
                  </div>
                </div>

                {/* Project info */}
                <div
                  className={`md:col-span-6 ${
                    index % 2 === 1
                      ? "md:order-1 md:col-start-1"
                      : "md:col-start-6"
                  } md:row-start-1`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    {(project.external?.trim() || project.github?.trim()) ? (
                      <a
                        href={project.external?.trim() || project.github?.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </h3>
                  <div className="bg-card border border-border rounded-lg p-6 mb-4 shadow-lg">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
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
