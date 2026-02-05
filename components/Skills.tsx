import React from 'react';
import { SKILLS } from '../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
      
      <h2 className="text-center text-3xl md:text-5xl font-display font-bold mb-16 text-white">
        Tech Stack
      </h2>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {SKILLS.concat(SKILLS).map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="flex flex-col items-center justify-center w-32 h-32 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group-hover:pause">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
              <span className="text-neutral-300 font-medium">{skill.name}</span>
            </div>
          ))}
           {/* Repeat for infinite effect */}
           {SKILLS.concat(SKILLS).map((skill, index) => (
            <div key={`dup-${skill.name}-${index}`} className="flex flex-col items-center justify-center w-32 h-32 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
              <span className="text-neutral-300 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
