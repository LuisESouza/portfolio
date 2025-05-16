import Card from "../Cards";

const Projects = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 px-4 sm:px-6 py-5 items-center">
      
      <section className="flex flex-col gap-4 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--bg-button)] border-b border-[var(--bg-button)] w-fit self-center">
          Front-End
        </h3>

        <div className="flex flex-wrap gap-6 overflow-x-auto sm:overflow-visible py-2 justify-center">
          <Card title="GitHub-Profile" desc="GitHub profile app using React, Tailwind CSS, and the GitHub API." link="https://github.com/LuisESouza/github-profile-challenges" img="/projects/Github.jpg" />
          <Card title="Contact-Form" desc="Contact form using Vue and Web3Forms API to send emails without a backend." link="https://github.com/LuisESouza/contact-us-form-FrontendPro" img="/projects/Contact.png" />
          <Card title="Simple-Coffee" desc="Simple-Coffee – Nuxt project from a DevChallenge that fetches and displays coffee data from an external API." link="https://github.com/LuisESouza/Simple-Coffee" img="/projects/Coffee.jpg" />
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--bg-button)] border-b border-[var(--bg-button)] w-fit self-center">
          Back-End
        </h3>

        <div className="flex flex-wrap gap-6 overflow-x-auto sm:overflow-visible py-2 justify-center">
          <Card title="ShortenURL" desc="URL shortener API using TypeScript, NestJS, MongoDB, Prisma, Bcrypt, and JWT for secure authentication." link="https://github.com/LuisESouza/shorturl-api" img="/projects/shorturl.png" />
          <Card title="Bank-API" desc="Banking API with TypeScript, PostgreSQL, Prisma, Express, Bcrypt, and JWT for secure authentication." link="https://github.com/LuisESouza/bank-api" img="/projects/dog1.jpg" />
          <Card title="Task-API" desc="Task board API with TypeScript, MongoDB, Prisma, Express, Bcrypt, and JWT for secure user authentication." link="https://github.com/LuisESouza/my-task-board" img="/projects/dog2.jpg" />
        </div>
      </section>

    </div>
  );
};

export default Projects;
