
import React, { useState, useEffect } from 'react';
import { Spotlight } from './ui/Spotlight';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GradientText } from './ui/GradientText';

const ROLES = [
  "Full Stack Developer",
  "Mobile App Developer",
  "UX/UI Designer"
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = ROLES[roleIndex];
      
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullText) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Brand Watermark / Subtle Top ID */}
      <div className="absolute top-10 left-10 z-20 hidden md:block opacity-20 hover:opacity-100 transition-opacity">
        <span className="text-xs font-display font-bold tracking-[0.4em] uppercase">K. Ghalib</span>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center mb-6"
        >
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(112,66,248,0.5)] bg-zinc-900">
                    <img 
                        src="./portimg.jpeg" 
                        alt="Khalid Ghalib" 
                        className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 rounded-full border border-white/5 scale-110 pointer-events-none"></div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center"
        >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-display mb-3">
                {HERO_CONTENT.name}
            </h1>
            
            <div className="flex justify-center mb-10 h-8 md:h-10">
                <GradientText 
                    className="text-base md:text-xl font-medium opacity-70 tracking-[0.1em]"
                    colors={["#7042f8", "#00d8ff", "#7042f8"]}
                    animationSpeed={6}
                >
                    <span className="inline-flex items-center">
                      {displayText}
                      <span className="ml-1 w-[2px] h-[1em] bg-primary animate-pulse inline-block"></span>
                    </span>
                </GradientText>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-4"
        >
             <a 
                href="#about"
                onClick={scrollToAbout}
                className="group relative inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-xs font-bold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 backdrop-blur-md uppercase tracking-[0.2em]"
             >
                Explore My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={14} />
            </a>
            <p className="text-neutral-600 text-[9px] font-mono animate-bounce mt-4 tracking-[0.4em] uppercase opacity-50">Scroll</p>
        </motion.div>
      </div>
      
      <div className="absolute left-10 bottom-0 h-24 w-px bg-gradient-to-t from-primary/30 to-transparent hidden lg:block opacity-20"></div>
      <div className="absolute right-10 bottom-0 h-24 w-px bg-gradient-to-t from-secondary/30 to-transparent hidden lg:block opacity-20"></div>
    </section>
  );
};
