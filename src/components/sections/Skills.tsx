'use client'
import { motion } from "framer-motion";

const COLORS = {
  accentBlue: "#60A5FA", 
  accentGreen: "#6EE7B7", 
  accentYellow: "#FBBF24",
  accentPurple: "#A78BFA",
};

const SKILLS = [
  { name: "TypeScript", level: 64, color: COLORS.accentYellow, cat: "Linguagens" },
  { name: "JavaScript", level: 67, color: COLORS.accentYellow, cat: "Linguagens" },
  { name: "Java", level: 57, color: COLORS.accentYellow, cat: "Linguagens" },
  { name: "HTML / CSS", level: 70, color: COLORS.accentYellow, cat: "Linguagens" },

  { name: "React / Next.js", level: 66, color: COLORS.accentBlue, cat: "Frameworks" },
  { name: "NestJS", level: 60, color: COLORS.accentBlue, cat: "Frameworks" },
  { name: "Express", level: 64, color: COLORS.accentBlue, cat: "Frameworks" },
  { name: "Vue / Nuxt.js", level: 36, color: COLORS.accentBlue, cat: "Frameworks" },
  { name: "Tailwind CSS", level: 65, color: COLORS.accentBlue, cat: "Frameworks" },

  { name: "Node.js", level: 66, color: COLORS.accentGreen, cat: "Backend" },
  { name: "PostgreSQL", level: 65, color: COLORS.accentGreen, cat: "Backend" },
  { name: "MongoDB", level: 50, color: COLORS.accentGreen, cat: "Backend" },
  { name: "Prisma ORM", level: 67, color: COLORS.accentGreen, cat: "Backend" },

  { name: "Docker", level: 0, color: COLORS.accentPurple, cat: "Tools" },
  { name: "Git / GitHub", level: 70, color: COLORS.accentPurple, cat: "Tools" },
  { name: "Figma", level: 60, color: COLORS.accentPurple, cat: "Tools" },
];

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.cat)));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((cat, idx) => (
        <motion.div 
          key={cat}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="bg-[var(--foreground)] p-6 rounded-2xl border border-white/5"
        >
          <h3 className="text-[var(--bg-button)] font-mono text-sm mb-6 uppercase tracking-wider">{cat}</h3>
          <div className="space-y-6">
            {SKILLS.filter(s => s.cat === cat).map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-white/40">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}