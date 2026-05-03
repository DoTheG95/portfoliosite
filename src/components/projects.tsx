'use client';
import { useState } from 'react';
import WorldIcon from "./worldicon";
import Link from 'next/link';

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

interface Project {
  title: string;
  subtitle?: string;
  url?: string;
  role?: string;
  overview: string;
  problem?: string;
  features?: string[];
  challenges?: string;
  outcome?: string;
  techStack: string;
  links: { label: string; href: string; external?: boolean }[];
  featured?: boolean;
}

/* ─────────────────────────────────────────────
   Project data
───────────────────────────────────────────── */
const projects: Project[] = [
  {
    title: 'Cardboard Addiction',
    subtitle: 'Digimon TCG Trade & Wishlist Platform',
    url: 'https://www.cardboardaddiction.com/',
    role: 'Solo Full Stack — product, architecture, frontend, deployment',
    overview:
      'A full-stack web application that gives Digimon TCG collectors a centralised place to manage and trade their cards. Built for the Australian community that existing platforms like TCGPlayer largely ignore, where most trading still happens across Facebook groups and spreadsheets.',
    problem:
      'Local traders had no structured way to browse what others had or wanted. Cardboard Addiction solves this with persistent, account-tied trade and wishlist data — with a relational data model intentionally kept simple so peer-to-peer matching logic can be layered on without restructuring the schema.',
    features: [
      'Email authentication via Supabase Auth with email confirmation flow',
      'Onboarding flow capturing a display name before app access is granted',
      'Role-based access control — admin and user tiers stored in the profiles table',
      'Persistent wishlist and trade list per user, backed by a relational PostgreSQL database',
      'Card search surfaced through a modal with TCGPlayer integration',
      'Quantity tracking per card entry across both list types',
      'Invite-code gating for closed beta — currently live with active users',
    ],
    challenges:
      'Migrated away from a custom Facebook OAuth and JWT system mid-project after identifying it would be difficult to fully implement. The original architecture had Next.js API routes acting as middleware — receiving Facebook codes, exchanging them for tokens, and minting custom JWTs. Replaced entirely with Supabase Auth, which required rebuilding session handling, repointing all foreign keys to auth.users, and resolving a redirect loop caused by TOKEN_REFRESHED events firing on the main page.',
    outcome:
      'Live and in closed beta. Currently supports wishlist and inventory management, user matching based on lists, and direct offers between users. Upcoming: a public browse page, email notifications for offers, calendar-based meetup scheduling, and a trusted friends list.',
    techStack: 'Next.js 14 · Supabase · PostgreSQL · Vercel',
    links: [
      { label: 'Live site', href: 'https://www.cardboardaddiction.com/', external: true },
      { label: 'GitHub', href: 'https://github.com/DoTheG95/bristbanetradesystem', external: true },
    ],
    featured: true,
  },
  {
    title: 'Fearless Nuzlocke Tracker',
    subtitle: 'Pokémon Run Manager with Fearlesslocke Ruleset',
    url: 'https://www.fearlesslocke.xyz/',
    role: 'Solo Full Stack — concept, design, build, and deployment',
    overview:
      'A web app built for Pokémon fans who want to track their Nuzlocke runs with a structured, data-driven approach. Born out of a custom ruleset I designed called the Fearlesslocke — a hardcore variant where no Pokémon species can be reused across runs, forcing genuinely fresh team compositions every time.',
    problem:
      "Most Nuzlocke players track runs in spreadsheets or rely on memory. There was no dedicated tool that enforced the Fearlesslocke's core constraint — a persistent ban list of previously used Pokémon that carries across playthroughs. The app makes that tracking effortless and gives players a clear view of what's still available to them.",
    features: [
      'Pokédex selection per run — loads the correct regional Pokémon pool for the game being played',
      'Type-based filtering and search to quickly find available Pokémon',
      'Full playthrough log — track every catch, team slot, evolution, and loss across a run',
      'Ban list management — Pokémon used in previous runs are marked and excluded from future selections',
      'Team builder that surfaces only eligible Pokémon based on the ban list',
      'Firebase authentication for persistent, account-tied run data across sessions',
      'Cloud storage via Firebase so run history is never lost between devices',
    ],
    challenges:
      'The main design challenge was modelling run state in a way that felt intuitive to update mid-playthrough but was also queryable enough to power the ban list across multiple runs. The solution was structuring each run as a document with a typed encounter log, so the ban list can be derived at read time by collapsing used species across all completed runs — no separate sync required.',
    outcome:
      'Publicly live. Current focus is on hardening the Fearlesslocke mode and improving the team builder UX. Planned next: shareable run links so players can post their runs to the community, and a leaderboard for completed Fearlesslocke challenges.',
    techStack: 'React · Firebase (Auth + Firestore) · PokéAPI · Vercel',
    links: [
      { label: 'Live site', href: 'https://www.fearlesslocke.xyz/', external: true },
      { label: 'GitHub', href: 'https://github.com/DoTheG95/fearlesslocke', external: true },
    ],
    featured: true,
  },
];

/* ─────────────────────────────────────────────
   Featured project card
───────────────────────────────────────────── */
function FeaturedProjectCard({ project }: { project: Project }) {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [challengesOpen, setChallengesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  return (
    <div className="project-card project-card--featured">
      {/* Header */}
      <div className="project-featured-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span className="project-featured-badge">Featured Project</span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-live-indicator"
              >
                <span className="project-live-dot" />
                Live
              </a>
            )}
          </div>
          <p className="project-title" style={{ marginTop: '8px' }}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </p>
          {project.subtitle && (
            <p className="project-subtitle">{project.subtitle}</p>
          )}
        </div>
      </div>

      {/* Role */}
      {project.role && <p className="project-role">{project.role}</p>}

      {/* Overview + problem */}
      <p className="project-description">{project.overview}</p>
      {project.problem && (
        <p className="project-description" style={{ marginTop: '4px' }}>{project.problem}</p>
      )}

      {/* Key features */}
      {project.features && (
        <div className="project-expand-block">
          <button
            className="project-expand-toggle"
            onClick={() => setFeaturesOpen(v => !v)}
            aria-expanded={featuresOpen}
          >
            {featuresOpen ? '▾' : '▸'} Key Features
          </button>
          {featuresOpen && (
            <ul className="project-feature-list">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
        </div>
      )}

      {/* Challenges */}
      {project.challenges && (
        <div className="project-expand-block">
          <button
            className="project-expand-toggle"
            onClick={() => setChallengesOpen(v => !v)}
            aria-expanded={challengesOpen}
          >
            {challengesOpen ? '▾' : '▸'} Challenges & Solutions
          </button>
          {challengesOpen && (
            <p className="project-tech-reveal">{project.challenges}</p>
          )}
        </div>
      )}

      {/* Outcome */}
      {project.outcome && (
        <div className="project-expand-block">
          <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
            Status & Roadmap
          </p>
          <p className="project-tech-reveal">{project.outcome}</p>
        </div>
      )}

      {/* Tech stack */}
      <div className="project-expand-block">
        <button
          className="project-expand-toggle"
          onClick={() => setTechOpen(v => !v)}
          aria-expanded={techOpen}
        >
          {techOpen ? '▾' : '▸'} Tech Stack
        </button>
        {techOpen && (
          <p className="project-tech-reveal">{project.techStack}</p>
        )}
      </div>

      {/* Links */}
      <div className="project-links">
        {project.links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="project-link-btn"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label === 'Live site' && <WorldIcon />}
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Standard project card
───────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const [techVisible, setTechVisible] = useState(false);

  return (
    <div className="project-card">
      <p className="project-title">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : project.title}
        {project.url && <WorldIcon />}
      </p>
      <p className="project-description">{project.overview}</p>
      {techVisible ? (
        <div className="project-tech-reveal">{project.techStack}</div>
      ) : (
        <button className="project-tech-toggle" onClick={() => setTechVisible(true)}>
          View tech stack →
        </button>
      )}
      <div className="project-links">
        {project.links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="project-link-btn"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label === 'Live site' && <WorldIcon />}
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Export
───────────────────────────────────────────── */
export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {featured.map((p, i) => (
        <FeaturedProjectCard key={i} project={p} />
      ))}
      {rest.length > 0 && (
        <div className="projects-grid">
          {rest.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}