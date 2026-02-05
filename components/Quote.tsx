
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote as QuoteIcon, RefreshCw, Terminal } from 'lucide-react';

interface QuoteData {
  en: string;
  author: string;
}

const FALLBACK_QUOTES: QuoteData[] = [
  { en: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { en: "Complexity is the enemy of reliability.", author: "Heinz Pagels" },
  { en: "Simple things should be simple, complex things should be possible.", author: "Alan Kay" },
  { en: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { en: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { en: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { en: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { en: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { en: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
  { en: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { en: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
  { en: "User interface is the process of turning a pixel into a person.", author: "Aaron Walter" },
  { en: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { en: "The only way to go fast, is to go well.", author: "Robert C. Martin" }
];

export const Quote = () => {
  const [quotesList, setQuotesList] = useState<QuoteData[]>(FALLBACK_QUOTES);
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);
  const hasFetched = useRef(false);

  const selectNewRandomQuote = (list: QuoteData[]) => {
    if (list.length === 0) return;
    
    let randomIndex;
    let newQuote: QuoteData;
    
    // Guarantee we pick a DIFFERENT quote than the current one
    // as long as the list has more than one item
    let attempts = 0;
    do {
      randomIndex = Math.floor(Math.random() * list.length);
      newQuote = list[randomIndex];
      attempts++;
    } while (quote && newQuote.en === quote.en && list.length > 1 && attempts < 10);

    setQuote(newQuote);
    setKey(prev => prev + 1);
  };

  const handleRefresh = () => {
    if (loading) return;
    setLoading(true);
    
    // Short delay to allow the exit animation to look clean
    setTimeout(() => {
      selectNewRandomQuote(quotesList);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    const fetchAllQuotes = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;
      
      try {
        const response = await fetch('https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        // Merge fetched quotes with fallbacks to ensure a massive variety
        const combined = [...data, ...FALLBACK_QUOTES];
        setQuotesList(combined);
        selectNewRandomQuote(combined);
      } catch (error) {
        console.warn("API Fetch failed, using local wisdom bank.");
        selectNewRandomQuote(FALLBACK_QUOTES);
      } finally {
        setLoading(false);
      }
    };

    fetchAllQuotes();
  }, []);

  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
       
       <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-10 text-primary/60 font-mono text-[10px] uppercase tracking-[0.3em]"
          >
            <Terminal size={14} />
            <span>Core_Intelligence_Stream</span>
          </motion.div>

          <div className="min-h-[200px] flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <RefreshCw className="animate-spin text-primary/40" size={40} />
                    <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Recalibrating Insight...</span>
                </motion.div>
              ) : (
                <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="relative px-12"
                >
                    <QuoteIcon className="absolute -top-12 -left-4 text-white/5 w-20 h-20 transform -scale-x-100" />
                    <h3 className="text-2xl md:text-4xl font-display font-light text-white leading-snug tracking-tight max-w-3xl mx-auto italic">
                        "{quote?.en}"
                    </h3>
                    <QuoteIcon className="absolute -bottom-12 -right-4 text-white/5 w-20 h-20" />
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 flex items-center justify-center gap-6"
                    >
                        <span className="w-12 h-px bg-gradient-to-r from-transparent to-white/10"></span>
                        <p className="text-secondary/80 font-mono text-xs uppercase tracking-widest">{quote?.author}</p>
                        <span className="w-12 h-px bg-gradient-to-l from-transparent to-white/10"></span>
                    </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRefresh}
            disabled={loading}
            className="mt-16 px-8 py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 text-neutral-500 hover:text-white transition-all text-[10px] flex items-center gap-3 mx-auto uppercase tracking-[0.2em] font-bold backdrop-blur-sm disabled:opacity-30"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"} />
            New Perspective
          </motion.button>
       </div>
    </section>
  );
};
