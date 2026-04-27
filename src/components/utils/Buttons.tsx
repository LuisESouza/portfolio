'use client'
import { motion } from "framer-motion";

interface ButtonProps {
  buttons: { id: string; title: string; name: string }[];
  onSelect: (id: string) => void;
  activeSection: string;
}

export default function Button({ buttons, onSelect, activeSection }: ButtonProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
      {buttons.map((btn) => {
        const isActive = activeSection === btn.id;
        
        return (
          <button
            key={btn.id}
            onClick={() => onSelect(btn.id)}
            className={`relative px-6 py-2.5 text-sm font-medium transition-colors duration-300 rounded-xl outline-none ${
              isActive ? "text-black" : "text-white/60 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[var(--bg-button)] rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            <span className="relative z-10">{btn.title}</span>
          </button>
        );
      })}
    </div>
  );
}