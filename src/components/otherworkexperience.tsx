'use client'
import WorldIcon from "./worldicon";
import Image from "next/image";

interface CareerEntry {
  logo: string;
  alt: string;
  period: string;
  company: string;
  role: string;
  achievements: React.ReactNode[];
}

const entries: CareerEntry[] = [
  {
    logo: '/ezyvet.png',
    alt: 'ezyVet',
    period: 'Aug 2021 – Feb 2024 · Full Time',
    company: 'ezyVet',
    role: 'Intermediate Software Solutions Advisor',
    achievements: [
      'Delivered software training, technical support and documentation for a global stakeholder base',
      'Contributed to revenue retention through cross-functional work across customer support and QA',
      'Tested and logged reported bugs in Jira, reviewed with QA and engineering',
      'Wrote custom PHP/TWIG templates to generate additional client revenue',
      'Designed and ran a technical onboarding programme covering hardware troubleshooting, network configuration and TWIG templating',
      <>
        Hosted a public-facing{' '}
        <a
          className="work-link"
          href="https://www.ezyvet.com/webinar/ezyprint"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WorldIcon /> ezyPrint Webinar
        </a>{' '}
        covering core platform workflows
      </>,
    ],
  },
  {
    logo: '/gorillatechlogo.jpeg',
    alt: 'Gorilla Technology',
    period: 'Aug 2019 – Aug 2021 · Full Time',
    company: 'Gorilla Technology',
    role: 'IT Technician & Audiovisual Engineer',
    achievements: [
      'Provided L1/L2/L3 IT support for clients including the Cancer Society NZ (500+ users)',
      <>
        Managed and maintained{' '}
        <a
          className="work-link"
          href="https://gorillatechnology.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WorldIcon /> Gorilla Technology
        </a>{' '}
        and{' '}
        <a
          className="work-link"
          href="https://worldpodcasts.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WorldIcon /> World Podcasts
        </a>
      </>,
      'Recorded and edited audio and video content for the NZ Tech Podcast',
    ],
  },
  {
    logo: '/jnj.png',
    alt: 'National Holdings',
    period: 'Sep 2018 – June 2019 · Full Time',
    company: 'National Holdings / JNJ Management',
    role: 'IT Admin',
    achievements: [
      'Sole IT administrator responsible for all infrastructure and assets within the Sky World building',
      <>
        Managed multiple websites including{' '}
        <a
          className="work-link"
          href="https://www.skyworld.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WorldIcon /> Sky World
        </a>{' '}
        and{' '}
        <a
          className="work-link"
          href="https://www.metrolanes.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WorldIcon /> Metrolanes
        </a>
      </>,
    ],
  },
];

export default function OtherWorkExperience() {
  return (
    <div>
      <p className="section-label">Earlier Career</p>
      <div className="career-section">
        {entries.map((entry, i) => (
          <div className="career-item" key={i}>
            <Image
              src={entry.logo}
              alt={entry.alt}
              width={44}
              height={44}
              className="career-logo"
            />
            <div className="career-content">
              <p className="career-meta">{entry.period}</p>
              <p className="career-company">{entry.company}</p>
              <p className="career-role">{entry.role}</p>
              <ul className="career-list">
                {entry.achievements.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}