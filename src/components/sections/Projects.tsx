'use client'
import { motion } from "framer-motion";
import Link from "next/dist/client/link";

const PROJECTS = [
  {
    title: "Hytale Mod",
    desc: "Mod developed for the game Hytale, adding new mechanics and custom RPG content.",
    tags: ["Java", "Hytale API", "Modding"],
    color: "#60A5FA",
    link: "https://www.curseforge.com/hytale/mods/rpg-system-pt-br",
    github: "#"
  },
  {
    title: "Finance Dashboard",
    desc: "Personal finance dashboard where users can input values to track their weekly, monthly, and yearly expenses and revenues.",
    tags: ["Next.js", "NestJS", "PrismaORM", "Neon DB", "Tailwind CSS"],
    color: "#A78BFA",
    link: "https://fintrackr-front.vercel.app",
    github: ""
  },
  {
    title: "Shorten URL Service",
    desc: "A service designed for shortening URLs.",
    tags: ["Next.js", "NestJS", "PrismaORM", "Mongo DB", "Tailwind CSS"],
    color: "#8bfaac",
    link: "https://shorten-url.vercel.app",
    github: "https://github.com/LuisESouza/shorturl-api.git"
  },
  {
    title: "Bank API",
    desc: "An API for bank account management, allowing users to create accounts, log in, check balances, and perform transactions such as transfers and deposits.",
    tags: ["Express", "PrismaORM", "PostgreSQL"],
    color: "#fda4af",
    link: "#",
    github: "https://github.com/LuisESouza/bank-api.git"
  }
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="group relative bg-[#111118] border border-white/5 p-8 rounded-2xl overflow-hidden"
        >
          <div 
            className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
          />
          <h3 className="text-xl font-bold mb-3 font-syne">{project.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6 font-inter">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Link href={project.link} className="text-xs font-bold text-[var(--bg-button)] hover:underline">
              Live Demo
            </Link>
            {project.github !== "" && project.github !== "#" && (
              <Link href={project.github} className="text-xs font-bold text-white/40 hover:text-white transition-colors">
                GitHub
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}