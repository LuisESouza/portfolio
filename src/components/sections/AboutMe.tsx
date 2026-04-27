'use client'
import { motion } from "framer-motion";

export default function AboutMe() {
  const stats = [
    { n: "4 Years", label: "Dev Journey" },
    { n: "5+", label: "Projects" },
    { n: "10+", label: "Tech Stack" },
  ];

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center text-left">
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[var(--bg-button)] text-sm mb-4 uppercase tracking-widest">
            01. Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6">
            Crafting digital solutions
          </h2>
          
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed text-lg font-inter">
            <p>
              I am a Fullstack Developer with 4 years of hands-on experience building personal projects.
            </p>
            <p>
              I specialize in the <b>TypeScript </b> (Next.js & NestJS) and <b>Java</b>. My most notable work includes developing RPG systems for the Hytale.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-3 gap-4 mt-10">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--foreground)] border border-white/5 p-6 rounded-2xl group hover:border-[var(--bg-button)]/30 transition-colors"
            >
              <div className="text-3xl font-bold font-syne text-[var(--bg-button)] group-hover:scale-110 transition-transform duration-300">
                {stat.n}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full md:w-72 p-6 bg-[var(--foreground)] border border-white/5 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-3">
          <div className="w-2 h-2 rounded-full bg-[var(--bg-button)] animate-pulse" />
        </div>
        <h4 className="font-mono text-xs text-[var(--bg-button)] mb-4 uppercase">Current Focus</h4>
        <ul className="space-y-3 text-sm text-[var(--color-text-muted)] font-inter">
          <li className="flex items-center gap-2">
            <span className="text-[var(--accent-blue)]">→</span> Fullstack Architecture
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--accent-blue)]">→</span> Game Modding (Java)
          </li>
        </ul>
      </motion.div>
    </div>
  );
}