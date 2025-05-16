'use client'
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import About from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Button from "./components/utils/Buttons";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("about");

  const renderContent = () => {
    switch(selectedSection){
      case 'projects':
        return <Projects/>;
      case 'skills':
        return <Skills/>
      case 'contact':
        return <Contact/>
      case 'about':
        return <About/>
      default:
        return <About/>
      
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--color-text)]">

      <section className="w-full min-h-screen max-w-5xl flex flex-col-reverse sm:flex-row items-center justify-between gap-16 p-10" id="hero">
        
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-4xl font-bold">Hi, I'm <span className="text-[var(--bg-button)]">LUIS EDUARDO</span></h1>
          <p className="text-lg max-w-md mx-auto sm:mx-0">
            A web developer passionate about building clean and efficient user experiences.
          </p>
          <Link href={'#content'}
            className="py-2 px-10 bg-[var(--bg-button)] hover:brightness-110 transition rounded-lg font-medium w-fit mx-auto sm:mx-0 hover:cursor-pointer"
          >View projects</Link>
        </div>

        <div className="sm:w-100 sm:h-100 rounded-full overflow-hidden border-4 border-[var(--bg-button)] shadow-lg">
          <img
            src="/images/praia.jpg"
            alt="Luis Eduardo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="min-w-full min-h-screen max-w-3xl text-center flex flex-col" id="content">
        <div className="flex justify-center p-3 bg-[var(--foreground)]">
          <Button buttons={[
            {id: 'about', title: 'About me', name: 'about'},
            {id: 'projects', title: 'Projects', name: 'projects'},
            {id: 'skills', title: 'Skills', name: 'skills'},
            {id: 'contact', title: 'Contact', name: 'contact'},
          ]}
          onSelect={setSelectedSection}
          />
        </div>

        <div className="flex flex-col justify-center min-h-full my-auto">
          {renderContent()}
        </div>
      </section>
      
    </main>
  );
}
