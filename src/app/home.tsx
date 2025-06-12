'use client'

import Image from "next/image";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {

  const TextTyped = () => {
    const [text] = useTypewriter({
      words: ['Love challenges', 'Optimistic', 'Attentive to detail', 'Problem solver', 'Client first attitude'],
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center gap-8 w-full">
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
        <div>
          <h4 className="text-2xl sm:text-2xl md:text-2xl font-bold text-center sm:text-left leading-tight">
            I am a Korean 🇰🇷 raised in New Zealand 🇳🇿 <br />
            Currently in Brisbane looking for great opportunities in Australia 🇦🇺
          </h4>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            href="https://github.com/DoTheG95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/gary-kim-260b42213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://github.com/DoTheG95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/mail.svg"
              alt="Mail"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          Here is a little about me:
          <TextTyped />
        </div>
        <div role="tablist" className="width:100%; border:white">
          <button type="button" role="tab">Work Experience</button>
          <button type="button" role="tab">Education</button>
        </div>
      </main>
    </div>
  );
}