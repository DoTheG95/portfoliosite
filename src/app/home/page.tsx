'use client'
import Image from "next/image";
import Socials from "../../components/socials";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState } from 'react';
import WorkExperience from "../../components/workexperience";
import TechStack from "../../components/techstack";
import Hobbies from "../../components/hobbies";
import Projects from "../../components/projects";
import OtherWorkExperience from "../../components/otherworkexperience";

function TypedTagline() {
  const [text] = useTypewriter({
    words: [
      'I love solving problems and writing clean code',
      'I carry a client-first mindset with close attention to detail',
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 40,
  })
  return (
    <span>
      {text}
      <Cursor cursorColor="rgb(0,199,255)" />
    </span>
  )
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`section-wrapper ${className}`}>
      {children}
    </div>
  )
}

function SectionLabel({ text }: { text: string }) {
  return <p className="section-label">{text}</p>
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'work' | 'projects'>('work')

  return (
    <div className="w-full" style={{ position: 'relative', zIndex: 1 }}>
      <main
        className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8"
        style={{ gap: '64px', paddingBottom: '80px' }}
      >

        {/* ── HERO ── */}
        <Section className="flex flex-col sm:flex-row items-center sm:justify-between gap-10 pt-10">
          <div className="flex-1 flex flex-col gap-6 text-center sm:text-left">
            <div>
              <SectionLabel text="Full Stack Developer" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Hi, nice to{' '}
                <span className="text-accent">meet you</span>
                <br />
                I&apos;m{' '}
                <span className="text-accent">Gary</span>
              </h1>
            </div>
            <p
              className="text-base sm:text-lg"
              style={{ color: 'var(--text-secondary)', minHeight: '28px' }}
            >
              <TypedTagline />
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <Socials />
            </div>
          </div>

          <div className="flex-shrink-0 avatar-ring">
            <Image
              className="rounded-full object-cover block"
              src="/profile_picture.JPG"
              alt="Gary – Full Stack Developer"
              width={240}
              height={240}
              priority
              style={{ width: 'clamp(160px, 25vw, 240px)', height: 'clamp(160px, 25vw, 240px)' }}
            />
          </div>
        </Section>

        {/* ── BIO ── */}
        <Section>
          <SectionLabel text="About me" />
          <div className="bio-card">
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)', maxWidth: '720px' }}
            >
              I write clean, responsive code with a user-first approach — bringing both technical
              expertise and user-centred thinking to every project. My focus is on front-end
              components and interactive web experiences built with a strong eye for usability,
              accessibility, and performance.
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed mt-4"
              style={{ color: 'var(--text-secondary)', maxWidth: '720px' }}
            >
              Always eager to learn, I&apos;ve recently been weaving AI tooling into my workflow to
              drive results faster — without ever cutting corners on planning or requirements analysis.
            </p>
          </div>
        </Section>

        {/* ── WORK / PROJECTS TABS ── */}
        <Section>
          <div className="tab-container">
            <button
              role="tab"
              onClick={() => setActiveTab('work')}
              className={activeTab === 'work' ? 'active-button' : 'inactive-button'}
              aria-selected={activeTab === 'work'}
            >
              Work Experience
            </button>
            <button
              role="tab"
              onClick={() => setActiveTab('projects')}
              className={activeTab === 'projects' ? 'active-button' : 'inactive-button'}
              aria-selected={activeTab === 'projects'}
            >
              Projects
            </button>
          </div>
          {activeTab === 'work' && <WorkExperience />}
          {activeTab === 'projects' && <Projects />}
        </Section>

        {/* ── TECH STACK ── */}
        <Section>
          <TechStack />
        </Section>

        {/* ── EARLIER CAREER ── */}
        <Section>
          <OtherWorkExperience />
        </Section>

        {/* ── HOBBIES ── */}
        <Section>
          <Hobbies />
        </Section>

        {/* ── EDUCATION ── */}
        <Section>
          <SectionLabel text="Education" />
          <div className="education-card">
            <div className="education-logo-wrap">
              <Image
                src="https://icons.auckland.ac.nz/assets/logos/uoa/horizontal/uoa_logo.svg"
                alt="University of Auckland"
                width={130}
                height={36}
                style={{ width: '130px', height: 'auto' }}
              />
            </div>
            <div>
              <p className="education-year">2014 – 2017</p>
              <p className="education-institution">The University of Auckland</p>
              <p className="education-detail">
                Bachelor of Science · Computer Science &amp; Information Systems
              </p>
            </div>
          </div>
        </Section>

      </main>
    </div>
  )
}