import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const TiltCard = ({ project }: { project: typeof PROJECTS[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-96 rounded-3xl bg-zinc-900 border border-white/10 group"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-2xl overflow-hidden bg-black shadow-lg"
      >
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
        />
        
        <div className="  absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
            <p className="text-neutral-300 text-sm mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                {project.description}
            </p>
            <div className="flex gap-2 flex-wrap mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md border border-primary/20">{tag}</span>
                ))}
            </div>
            <div className="flex gap-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                <a href={project.link} className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform">
                    <ExternalLink size={18} />
                </a>
                <a href={project.github} className="  p-2 bg-zinc-800 rounded-full text-white hover:scale-110 transition-transform">
                    <Github size={18} />
                </a>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-display font-bold mb-16 text-white text-center"
        >
          Selected Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective-1000">
            {PROJECTS.map(project => (
                <div key={project.id} className="h-[400px] w-full flex items-center justify-center">
                    <TiltCard project={project} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
