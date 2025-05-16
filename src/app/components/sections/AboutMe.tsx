const About = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 text-[var(--color-text)]">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold flex items-center gap-3 text-[var(--bg-button)]">
            <i className="bi bi-person text-3xl"></i>
            About me
          </h2>

          <p className="leading-relaxed">
            Hello! My name is <strong className="text-white">Luis Eduardo</strong> and I am a developer focused on creating modern digital solutions. I work with <strong>Front-End</strong> and <strong>Back-End</strong>, using technologies such as <strong>Vue</strong>, <strong>React</strong> and <strong>Node.js</strong>.
          </p>

          <p className="leading-relaxed">
            I consider myself a hard-working person who works well in a team. I am always looking for professional development.
          </p>

          <p className="leading-relaxed">
            This portfolio is a sample of my projects. Feel free to explore!
          </p>
        </div>

        {/* Imagem ou Ilustração */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/images/praia.jpg"
            alt="Ilustração Sobre Mim"
            className="w-100 object-contain rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
