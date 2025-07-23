'use client'
import Image from "next/image";
import Socials from "./components/socials";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState } from 'react';
import WorkExperience from "./components/workexperience";
import Education from "./components/education";
import TechStack from "./components/techstack";
import Hobbies from "./components/hobbies";
import Projects from "./components/projects";
import Comingsoon from "./components/comingsoon";

export default function Home() {

   const [activeTab, setActiveTab] = useState<'work'|'education'>('work');

  const TextTyped = () => {
    const [text] = useTypewriter({
      words: [
        'I love to solve problems and write clean code',
        'I carry a client first mindset and pay close attention to detail'
      ],
      loop: 0,
      typeSpeed: 90,
    })
  
    return (
      <div className='App'>
        {text}
        <Cursor cursorColor="white" />
      </div>
    )
  }

  return (
    <div className="w-full">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full gap-8">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center sm:text-left leading-tight">
              Hi 
              <span className="text-[rgb(0_199_255)]"> nice </span>
              to
              <span className="text-[rgb(0_199_255)]"> meet you </span>
              <br/>
              I am 
              <span className="text-[rgb(0_199_255)]"> Gary</span>
              , a 
              <span className="text-[rgb(0_199_255)]"> front end developer </span>
            </h1>
          </div>
          <div className="flex-shrink-0">
            <Image
              className="rounded-full object-cover"
              src="/profile_picture.JPG"
              alt="Profile picture"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full gap-8">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            Why I am the Right Choice for Your Engineering Team:
            <TextTyped />
          </div>
          <div className="flex">
            <Socials />
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto">
          <div role="tablist" className="flex border border-white flex-wrap">
            <button
              role="tab"
              onClick={() => setActiveTab('work')}
              className={`${ activeTab === 'work' ? 'active-button' : 'inactive-button' }`}
              aria-selected={activeTab === 'work'}
            >
              Work Experience
            </button>
            <button 
              role="tab" 
              onClick={() => setActiveTab('education')}
              className={`${ activeTab === 'education' ? 'active-button' : 'inactive-button' }`}
              aria-selected={activeTab === 'education'}
            >
              Education & Start ups
            </button>
          </div>
          {activeTab === 'work' && (
            <WorkExperience />
            )}
          {activeTab === 'education' && (
            <Education />
          )}
        </div>
          <TechStack />
          <Hobbies />
          <Projects />
          <Comingsoon />
      </main>
    </div>
  );
}