
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './Spotlight';
import { NAV_ITEMS } from '../../constants';
import { NavItem } from '../../types';

export const FloatingDock = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for better detection
          return rect.top >= -200 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.7)]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        {NAV_ITEMS.map((item) => (
          <DockItem 
            key={item.name} 
            item={item} 
            isActive={activeSection === item.href.replace('#', '')} 
          />
        ))}
      </motion.div>
    </div>
  );
};

const DockItem: React.FC<{ item: NavItem; isActive: boolean }> = ({ item, isActive }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = item.href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 40; // Reduced offset for cleaner scrolling
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className="relative group outline-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <motion.div
        className={cn(
          "p-3 rounded-xl border transition-all duration-300 relative",
          isActive 
            ? "bg-primary/30 border-primary/50 text-white shadow-[0_0_20px_rgba(112,66,248,0.4)] scale-110" 
            : "bg-white/5 border-white/5 text-white/40 hover:bg-white/10 hover:text-white"
        )}
        whileHover={{ scale: 1.2, y: -4 }}
        whileTap={{ scale: 0.9 }}
      >
        {item.icon}
        {isActive && (
          <motion.div 
            layoutId="activeGlow"
            className="absolute inset-0 rounded-xl bg-primary/20 blur-lg -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </motion.div>
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: -16, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(4px)" }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black border border-white/20 text-[10px] text-white font-bold uppercase tracking-[0.2em] rounded-lg whitespace-nowrap shadow-2xl pointer-events-none z-[60]"
          >
            {item.name}
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-white/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};
