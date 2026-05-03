'use client';
import { useState } from 'react';
import WorldIcon from "./worldicon";
import Link from 'next/link';

interface Project {
  title: string;
  url: string;
  description: string;
  techStack: string;
  links: { label: string; href: string; icon?: React.ReactNode }[];
}

const projects: Project[] = [
  {
    title: 'Fearless Nuzlocke Tracker',
    url: 'http://fearlesslocke.xyz/',
    description:
      'A web app for Pokémon fans to track their Nuzlocke runs, including a custom ruleset I designed called the Fearlesslocke. Features include Pokédex selection, type-based search and filtering, and a full playthrough log tracking catches, evolutions and losses.',
    techStack: 'React · Firebase (Auth + Storage) · PokéAPI · Vercel',
    links: [
      { label: 'Live site', href: 'https://www.fearlesslocke.xyz/', icon: <WorldIcon /> },
      { label: 'GitHub', href: 'https://github.com/DoTheG95/fearlesslocke' },
    ],
  },
  {
    title: 'Cardboard Addiction',
    url: 'https://www.cardboardaddiction.com/',
    description:
      'A community-driven marketplace for TCG collectors. Users can create card listings, build community groups and share market posts — all in one place.',
    techStack: 'React · Firebase · Vercel',
    links: [
      { label: 'Live site', href: 'https://www.cardboardaddiction.com/', icon: <WorldIcon /> },
      { label: 'GitHub', href: 'https://github.com/DoTheG95/bristbanetradesystem' },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [techVisible, setTechVisible] = useState(false);

  return (
    <div className="project-card">
      <p className="project-title">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
        <WorldIcon />
      </p>

      <p className="project-description">{project.description}</p>

      {techVisible ? (
        <div className="project-tech-reveal">{project.techStack}</div>
      ) : (
        <button
          className="project-tech-toggle"
          onClick={() => setTechVisible(true)}
        >
          View tech stack →
        </button>
      )}

      <div className="project-links">
        {project.links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="project-link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon && link.icon}
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  );
}