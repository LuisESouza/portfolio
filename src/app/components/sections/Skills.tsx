const Skills = () => {
  const frontSkills = [
  { name: "HTML", icon: "bi bi-filetype-html", level: 80 },
  { name: "CSS", icon: "bi bi-filetype-css", level: 80 },
  { name: "JavaScript", icon: "bi bi-filetype-js", level: 60 },
  { name: "TypeScript", icon: "bi bi-code-slash", level: 60 },
  { name: "React", icon: "bi bi-react", level: 65 },
  { name: "Vue", icon: "bi bi-vue", level: 60 },
];

const backSkills = [
  { name: "Java", icon: "bi bi-filetype-java", level: 50 },
  { name: "Express", icon: "bi bi-server", level: 60 },
  { name: "Nest", icon: "bi bi-diagram-3-fill", level: 60 },
  { name: "MongoDB", icon: "bi bi-database-fill", level: 60 },
  { name: "PostgreSQL", icon: "bi bi-database", level: 65 },
  { name: "REST Api", icon: "bi bi-diagram-3-fill", level: 65}
];


  const SkillBar = ({ skill }: { skill: { name: string; icon: string; level: number } }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="flex items-center gap-2 font-medium text-white">
          <i className={`${skill.icon} text-[var(--bg-button)]`}></i> {skill.name}
        </span>
        <span className="text-sm text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-[var(--bg-button)] h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 text-[var(--color-text)]">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Front-End Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <i className="bi bi-laptop text-[var(--bg-button)]"></i> Front-End
          </h3>
          {frontSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Back-End Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <i className="bi bi-hdd-network text-[var(--bg-button)]"></i> Back-End
          </h3>
          {backSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
