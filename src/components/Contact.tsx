import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useLocale } from "@/i18n/locale";
import { getUi } from "@/i18n/ui";

export const Contact = () => {
  const t = getUi(useLocale());

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section header */}
          <p className="text-primary font-mono mb-4">{t.sections.contactLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.sections.contactTitle}
          </h2>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {t.sections.contactBody}
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="mailto:mk7545@nyu.edu"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono">mk7545@nyu.edu</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-mono">{t.sections.location}</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="font-mono bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg glow-primary animate-glow-pulse"
              asChild
            >
              <a href="mailto:mk7545@nyu.edu">
                <Send className="w-5 h-5 mr-2" />
                {t.sections.sayHello}
              </a>
            </Button>
          </motion.div>

          {/* Code decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 font-mono text-sm text-muted-foreground"
          >
            <span className="syntax-keyword">const</span>{" "}
            <span className="syntax-variable">connection</span> ={" "}
            <span className="syntax-keyword">await</span>{" "}
            <span className="syntax-function">createConnection</span>(
            <span className="syntax-string">"you"</span>,{" "}
            <span className="syntax-string">"me"</span>);
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
