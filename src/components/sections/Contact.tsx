'use client'
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="py-20 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-[var(--bg-button)] text-sm mb-4 uppercase tracking-[0.2em]">
          04. What's Next?
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6 mt-4">
          Get In Touch
        </h2>
        
        <p className="text-[var(--color-text-muted)] text-lg mb-10 font-inter leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:leduardosouza2204@gmail.com"
          className="inline-block py-5 px-14 bg-[var(--bg-button)] text-black font-bold rounded-2xl 
                     hover:scale-105 transition-all duration-300 shadow-2xl 
                     shadow-[var(--bg-button)]/20 hover:shadow-[var(--bg-button)]/40
                     font-inter text-lg"
        >
          Say Hello
        </a>
      </motion.div>
    </div>
  );
}