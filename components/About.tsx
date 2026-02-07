import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Zap, Database, Download } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-12 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Main Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-2 rounded-3xl p-8 bg-zinc-900/50 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              The Architect of Digital Dreams
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              I am a Full Stack Developer with 4 years of experience building
              scalable web, mobile, and software systems using React.js,
              Next.js, Node.js, Django, and PostgreSQL.
              <br />
              <br />I specialize in creating high-performance, user-centered
              products with clean architecture and modern frontend design
              systems. My passion lies in UI/UX, utilizing tools like Figma,
              shadcn/ui, and Material UI to craft professional and responsive
              interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="/khalids-resume.pdf"
                download="Khalid_Ghalib_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors hover:scale-105 active:scale-95"
              >
                <Download size={20} />
                Download CV
              </a>
              <div className="flex gap-2">
                <div className="h-2 w-10 rounded-full bg-primary"></div>
                <div className="h-2 w-5 rounded-full bg-secondary"></div>
              </div>
            </div>
          </motion.div>

          {/* Stat Block 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 flex flex-col items-center justify-center text-center"
          >
            <Code className="text-primary mb-4" size={40} />
            <span className="text-4xl font-bold text-white">4+</span>
            <span className="text-neutral-400">Years Experience</span>
          </motion.div>

          {/* Stat Block 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl p-8 bg-zinc-900/50 border border-white/10 flex flex-col items-center justify-center text-center hover:bg-zinc-900/80 transition-colors"
          >
            <Globe className="text-secondary mb-4" size={40} />
            <span className="text-4xl font-bold text-white">100%</span>
            <span className="text-neutral-400">Client Satisfaction</span>
          </motion.div>

          {/* Skill Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 rounded-3xl p-8 bg-zinc-900/50 border border-white/10 flex flex-wrap justify-around items-center gap-8"
          >
            <div className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <Zap size={32} />
              <span>Fast Performance</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <Database size={32} />
              <span>Scalable Backend</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <Code size={32} />
              <span>Clean Architecture</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
