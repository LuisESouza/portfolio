'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "GitHub", url: "https://github.com/LuisESouza" },
    { name: "LinkedIn", url: "#" },
    { name: "Instagram", url: "#" },
  ];

  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 mt-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-xl tracking-tighter">
            <span className="text-[var(--bg-button)]">{"<"}</span>
            LUIS EDUARDO
            <span className="text-[var(--bg-button)]">{"/>"}</span>
          </div>
          <p className="text-white/40 text-xs font-mono">
            &copy; {currentYear} • Built with Next.js
          </p>
        </div>

        <div className="flex gap-6">
          {socials.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-[var(--bg-button)] transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}