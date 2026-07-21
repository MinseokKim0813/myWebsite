import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, ExternalLink, BookOpen, FlaskConical } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const getGoogleDriveFileId = (url: string) =>
  url.match(/\/d\/([^/]+)/)?.[1] ?? null;

const getDriveThumbnailUrl = (fileId: string) =>
  `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`;

const getDrivePreviewUrl = (fileId: string) =>
  `https://drive.google.com/file/d/${fileId}/preview`;

const ResearchPreviewBox = ({
  link,
  label,
}: {
  link: string;
  label: string;
}) => {
  const fileId = getGoogleDriveFileId(link);
  const [thumbnailError, setThumbnailError] = useState(false);

  return (
    <div className="flex w-full flex-shrink-0 flex-col gap-3 self-stretch rounded-lg border border-border bg-card p-3 card-hover sm:w-36 md:w-40">
      {fileId && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="flex min-h-36 w-full flex-1 overflow-hidden rounded-md border border-border bg-secondary transition-colors hover:border-primary md:min-h-40"
              aria-label={`Preview ${label}`}
            >
              {!thumbnailError ? (
                <img
                  src={getDriveThumbnailUrl(fileId)}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  onError={() => setThumbnailError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              )}
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0 sm:max-w-4xl">
            <DialogTitle className="sr-only">Preview: {label}</DialogTitle>
            <iframe
              src={getDrivePreviewUrl(fileId)}
              title={`Preview: ${label}`}
              className="h-[75vh] w-full"
            />
          </DialogContent>
        </Dialog>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        aria-label="Open paper"
      >
        <ExternalLink className="h-4 w-4" />
        <span className="font-mono text-xs">Open</span>
      </a>
    </div>
  );
};

const currentResearchActivity = {
  role: "Research Assistant",
  lab: "eBRAIN Lab",
  institution: "NYU Abu Dhabi",
  period: "Jan 2026 – Jul 2026",
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
  link: "https://drive.google.com/file/d/1ezMtR8nA6skwas9sc-OCNCWq0IyQkjkH/view",
};

export const publications = [
  {
    title:
      "Gender Identification of Arabic Names: A Comparative Analysis of Morphological, Semantic and Deep Learning Approaches",
    venue: "Research Paper",
    year: "2025",
    authors: ["Minseok Kim [NYU Abu Dhabi]"],
    advisors: "Nizar Habash [NYU Abu Dhabi]",
    abstract:
      "A novel hybrid gender classifier for Arabic names combining a morphological analyzer with linguistic rules and a fine-tuned Transformer, achieving 91.68% accuracy and outperforming the baseline by integrating linguistic rules with deep learning inference.",
    link: "https://drive.google.com/file/d/12Fqo6CqU5zPI6X3DGB6CRB2hLpGwGlxB/view?usp=sharing",
    type: "Research Paper",
  },
  {
    title:
      "MathTextor: Humanizing Mathematical Typesetting for Undergraduate Students",
    venue: "Research Paper",
    year: "2025",
    authors: ["Minseok Kim [NYU Abu Dhabi], Moumena Chaqfeh [NYU Abu Dhabi]"],
    advisors: "Moumena Chaqfeh [NYU Abu Dhabi], Steven Euijong Whang [KAIST]",
    abstract:
      "A context-aware web interface with LLMs that dynamically predicts and suggests mathematical symbols based on problem context. A user study with 24 participants showed a 38.6% reduction in typesetting time for novice users; the system achieved 72.9% F1 score and 4.57/7 usability.",
    link: "https://drive.google.com/file/d/1sMfhqQK3Pa2jVjlNYSmCbQ5T4j-dNu1X/view?usp=sharing",
    type: "Research Paper",
  },
];

const researchInterests = [
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
];

export const Research = () => {
  return (
    <section id="research" className="py-24">
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
            <span className="text-primary font-mono">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Research</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Research interests */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-5 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-mono font-semibold mb-2">
                  {interest.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-mono">
              <span className="syntax-comment">{"// "}</span>
              Research
            </h3>
            <div className="space-y-6">
              {/* eBRAIN Lab — first under // Research */}
              <motion.article
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
              >
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-border bg-card p-6 card-hover group sm:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FlaskConical className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-bold text-primary transition-colors group-hover:text-primary">
                      <a
                        href={currentResearchActivity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus:outline-none"
                      >
                        {currentResearchActivity.lab}:{" "}
                        {currentResearchActivity.topic}
                      </a>
                    </h4>
                    <p className="mt-1 text-sm text-foreground">
                      {currentResearchActivity.role} at{" "}
                      {currentResearchActivity.institution} ·{" "}
                      {currentResearchActivity.period}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {currentResearchActivity.authors.join(", ")}
                    </p>
                    <p className="mt-3 text-sm text-foreground">
                      {currentResearchActivity.summary}
                    </p>
                  </div>
                </div>
                <ResearchPreviewBox
                  link={currentResearchActivity.link}
                  label={`${currentResearchActivity.lab}: ${currentResearchActivity.topic}`}
                />
              </motion.article>
              {publications.map((pub, index) => (
                <motion.article
                  key={pub.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
                >
                  <div className="flex flex-1 flex-col gap-4 rounded-lg border border-border bg-card p-6 card-hover group sm:flex-row">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                        {pub.type}
                      </span>
                      <h4 className="text-lg font-bold transition-colors group-hover:text-primary">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus:outline-none"
                        >
                          {pub.title}
                        </a>
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {pub.authors.join(", ")}
                        {"affiliation" in pub &&
                          pub.affiliation &&
                          `, ${pub.affiliation}`}
                      </p>
                      {"advisors" in pub && pub.advisors && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          Advised by: {pub.advisors}
                        </p>
                      )}
                      <p className="mt-3 line-clamp-2 text-sm text-foreground">
                        {pub.abstract}
                      </p>
                    </div>
                  </div>
                  <ResearchPreviewBox link={pub.link} label={pub.title} />
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
