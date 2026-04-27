'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import About from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";
import Button from "../components/utils/Buttons";
import Footer from "../components/Footer";

function useTyping(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: NodeJS.Timeout;
    if (!deleting && charIdx < current.length) { timeout = setTimeout(() => setCharIdx((c) => c + 1), speed); } 

    if (!deleting && charIdx === current.length) { timeout = setTimeout(() => setDeleting(true), pause); } 

    if (deleting && charIdx > 0) { timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2); } 

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("about");
  const typed = useTyping(["Fullstack Developer", "Software Engineer", "React & NestJS"]);

  const contentMap: Record<string, React.ReactNode> = {
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  };

  const navButtons = [
    { id: 'about', title: 'About', name: 'about' },
    { id: 'projects', title: 'Projects', name: 'projects' },
    { id: 'skills', title: 'Skills', name: 'skills' },
    { id: 'contact', title: 'Contact', name: 'contact' },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--color-text)] selection:bg-[var(--bg-button)]/30 selection:text-white font-sans overflow-x-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--bg-button)_0%,transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,var(--accent-blue)_0%,transparent_50%)] opacity-5" />
      </div>

      <div className="relative z-10">
        <section id="hero" className="w-full min-h-screen max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 text-center md:text-left flex-1"
          >
            <div className="inline-block">
               <span className="font-mono text-[var(--bg-button)] text-xs tracking-widest uppercase border border-[var(--bg-button)]/30 bg-[var(--bg-button)]/5 px-4 py-1.5 rounded-full">
                ✦ Available for new opportunities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tight font-syne leading-none">
              Luís Eduardo<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--bg-button)] via-[var(--accent-blue)] to-[var(--accent-purple)] animate-grad">
                Souza
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-mono text-[var(--color-text-muted)] min-h-[40px]">
              <span className="text-[var(--accent-blue)]">// </span>
              {typed}
              <span className="animate-pulse text-[var(--bg-button)] ml-1">|</span>
            </div>

            <p className="text-lg text-[var(--color-text-muted)] max-w-lg mx-auto md:mx-0 leading-relaxed font-inter">
              Building high-performance fullstack applications from database to interface, focusing on exceptional user experience and scalable architecture.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
              <Link 
                href="#content"
                onClick={() => setSelectedSection('projects')}
                className="py-4 px-8 bg-[var(--bg-button)] text-black hover:scale-105 transition-all rounded-xl font-bold shadow-[0_0_20px_rgba(110,231,183,0.2)]"
              >
                View Projects →
              </Link>
              <div className="flex gap-4 items-center">
                <a href="https://github.com/LuisESouza" target="_blank" className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors font-mono text-sm">GitHub</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-[400px] md:h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-button)] to-[var(--accent-blue)] rounded-3xl rotate-6 opacity-10 animate-pulse" />
            <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 relative z-10 shadow-2xl">
              <Image
                src="/images/praia.jpg"
                alt="Luis Eduardo Souza"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </section>

        <section id="content" className="w-full min-h-screen py-20 flex flex-col items-center">
          <div className="sticky top-6 z-50 mb-16 p-1 bg-[#111118]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl">
            <Button 
              buttons={navButtons}
              onSelect={setSelectedSection}
              activeSection={selectedSection} 
            />
          </div>

          <div className="w-full max-w-5xl px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {contentMap[selectedSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}