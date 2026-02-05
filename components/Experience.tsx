import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-black to-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-display font-bold mb-20 text-white text-center"
        >
            Professional Journey
        </motion.h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-16">
            {EXPERIENCE.map((exp, index) => (
                <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Timeline Dot */}
                    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-black shadow-[0_0_10px_rgba(112,66,248,0.8)]" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 w-fit mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <div className="text-lg text-secondary mb-4 font-medium">{exp.company}</div>
                    
                    <p className="text-neutral-400 leading-relaxed mb-6 max-w-2xl">
                        {exp.description}
                    </p>
                    
                    <div className="flex gap-3 flex-wrap">
                        {exp.skills.map(skill => (
                            <span key={skill} className="text-sm text-white/70 px-3 py-1 bg-white/5 rounded border border-white/10">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
