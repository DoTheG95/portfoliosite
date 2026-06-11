'use client'
import Image from "next/image";
import WorldIcon from "./worldicon";
import { useState, useRef, useCallback } from "react";

const workItems = [
  {
    logo: "/the_capsule.png",
    alt: "The Capsulelab",
    meta: "June 2025 – Current · Contract",
    company: "The Capsulelab",
    role: "Full Stack Developer",
    bullets: [
      "Built a web platform for a startup enabling users to store digital assets on the IPFS",
      "Developed iOS and VisionOS apps in Flutter and Dart, including spatial computing UI for VisionOS",
      "Shipped a community post page with article sharing, image uploads, and threaded comments",
      "Built an admin dashboard with email template customisation and bulk send capabilities",
      "Integrated RESTful APIs including EmailJS for transactional messaging",
      "Implemented BIP-39 mnemonic generation to support secure account recovery flows",
      "Authored technical documentation and aligned architecture decisions across the team",
    ],
    links: [] as { href: string; text: string; icon: "world" | "apple" }[],
    subItems: null as { label: string; desc: string }[] | null,
  },
  {
    logo: "/briskicon_new.png",
    alt: "Brisk Cloudware",
    meta: "June 2024 – June 2025 · 12-month Contract",
    company: "Brisk Cloudware",
    role: "Front End Developer",
    bullets: [
      "Delivered front-end work on the live booking platform",
      "Modernised the landing page UI using vanilla JavaScript, HTML and CSS",
      "Worked closely with the Product Manager and engineering team to ship features and resolve bugs",
      "Improved first-time user retention through targeted feature flags",
    ],
    subItems: [
      { label: "Combobox", desc: "free-text search and record entry for clients" },
      { label: "Out-of-hours bookings", desc: "flexible scheduling beyond standard times" },
      { label: "Context menu", desc: "rapid access to common actions from the appointment grid" },
    ],
    links: [
      { href: "https://appointment.briskcloudware.com/index.html", text: "Brisk Appointment", icon: "world" as const },
    ],
    recommendation: "/BriskCloudwareRecommendation.png",
  },
  {
    logo: "/jugglerewards.svg",
    alt: "Juggle Rewards",
    meta: "June 2023 – Feb 2024 · Contract",
    company: "Juggle Rewards",
    role: "Lead App Developer",
    bullets: [
      "Led development of the MVP for a NZ-based rewards platform where users earn and redeem points at partner businesses",
      "Translated Figma wireframes into production-ready TypeScript components with a strong focus on UX",
      "Set up user authentication including OTP and email verification flows",
      "Built the marketing landing page",
    ],
    subItems: null,
    links: [
      { href: "https://play.google.com/store/apps/details?id=com.juggle.jugglerewards", text: "Juggle Rewards App (React Native)", icon: "apple" as const },
      { href: "https://jugglerewards.app/", text: "Juggle Rewards (React)", icon: "world" as const },
    ],
    recommendation: "/JuggleRewardsRecommendation.png",
  },
];

function getOffset(i: number, current: number, total: number) {
  const raw = ((i - current) % total + total) % total;
  return raw <= total / 2 ? raw : raw - total;
}

export default function WorkExperience() {
  const [current, setCurrent] = useState(0);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const spinRef = useRef(false);

const navigate = useCallback((dir: 1 | -1) => {
    if (spinRef.current) return;
    spinRef.current = true;
    setCurrent(prev => ((prev + dir) % workItems.length + workItems.length) % workItems.length);
    // Reset after animation
    setTimeout(() => {
      spinRef.current = false;
    }, 500);
  }, []);

  const item = workItems[current];

  const handleIconClick = () => {
    if (item.recommendation) {
      setShowRecommendation(true);
    }
  };

  return (
    <div>
      <div className="turntable-outer">
        <div className="turntable-left">
          <div className="turntable-stage">
            {workItems.map((w, i) => {
              const offset = getOffset(i, current, workItems.length);
              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              const x = offset * 68;
              const scale = isCenter ? 1 : 0.82;
              const opacity = isCenter ? 1 : isVisible ? 0.4 : 0;

              return (
                <div
                  key={w.company}
                  className={`turntable-layout ${isCenter ? 'is-center' : ''}`}
                  style={{
                    transform: `translateX(${x}%) scale(${scale})`,
                    opacity,
                    zIndex: isCenter ? 10 : 1,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  onClick={() => {
                    if (offset !== 0) navigate(offset > 0 ? 1 : -1);
                  }}
                >
                  <div className={`turntable-card ${isCenter ? 'is-center' : ''}`}>
                    <div className="turntable-card-content">
                      {/* Header section  */}
                      <div className="turntable-card-header">
                        <div className="turntable-card-logo">
                          <Image 
                            src={w.logo} 
                            alt={w.alt} 
                            width={64} 
                            height={64} 
                            style={{ objectFit: "contain" }} 
                            className="logo-image"
                            priority={isCenter}  
                          />
                        </div>
                        <div>
                          <div className="turntable-card-company">{w.company}</div>
                          <div className="turntable-card-meta">{w.meta}</div>
                        </div>                    
                        {w.recommendation && (
                          <div 
                              className="turntable-card-icon cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleIconClick();
                              }}
                            >
                            <div className="tooltip">
                              Co-worker Recommendation
                            </div>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="56" 
                              height="56" 
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                              className="text-white"
                            >
                              <path d="M21 15.5C21 16.6 20.1 17.5 19 17.5H13L9 21L5 17.5H3C1.9 17.5 1 16.6 1 15.5V5.5C1 4.4 1.9 3.5 3 3.5H19C20.1 3.5 21 4.4 21 5.5V15.5Z" />
                              <text 
                                x="11" 
                                y="12" 
                                fontFamily="system-ui, sans-serif" 
                                fontSize="8.5" 
                                fontWeight="700" 
                                fill="#0a0f1c" 
                                textAnchor="middle" 
                                dominantBaseline="middle"
                              >i</text>
                            </svg>
                          </div>
                        )}
                        </div>

                      <div className="turntable-card-role">{w.role}</div>

                      <ul className="turntable-card-bullets">
                        {w.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                        {w.subItems && (
                          <li>
                            UX improvements:
                            <ul style={{ paddingLeft: "1.25rem", marginTop: 4 }}>
                              {w.subItems.map((s, si) => (
                                <li key={si}>
                                  <strong>{s.label}</strong> — {s.desc}
                                </li>
                              ))}
                            </ul>
                          </li>
                        )}
                        {w.links.map((l, li) => (
                          <li key={li}>
                            <a className="work-link" href={l.href} target="_blank" rel="noopener noreferrer">
                              {l.icon === "world" ? <WorldIcon /> : <Image src="/apple_logo.svg" alt="Store" width={14} height={14} />}
                              {" "}{l.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Recommendation Modal */}
      {showRecommendation && item.recommendation && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setShowRecommendation(false)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowRecommendation(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-gray-200 transition-colors"
            >
              ×
            </button>
            
            <Image
              src={item.recommendation} 
              alt={`Recommendation from ${item.company}`} 
              width={85}
              height={50}
              className="rounded-xl shadow-2xl max-h-[85vh] w-auto mx-auto"
            />
            
            <p className="text-center text-white/70 mt-4 text-sm">
              Recommendation — {item.company}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}