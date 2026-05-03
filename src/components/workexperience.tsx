'use client'
import Image from "next/image";
import WorldIcon from "./worldicon";

export default function WorkExperience() {
  return (
    <div className="work-section">

      {/* ── The Capsulelab ── */}
      <div className="work-item">
        <Image
          src="/the_capsule.png"
          alt="The Capsulelab"
          width={44}
          height={44}
          className="work-logo"
        />
        <div className="work-content">
          <p className="work-meta">June 2025 – Current · Contract</p>
          <p className="work-company">The Capsulelab</p>
          <p className="work-role">Full Stack Developer</p>
          <ul className="work-list">
            <li>Built a web platform for a startup enabling users to store digital assets on the IPFS</li>
            <li>Developed iOS and VisionOS apps in Flutter and Dart, including spatial computing UI for VisionOS</li>
            <li>Shipped a community post page with article sharing, image uploads, and threaded comments</li>
            <li>Built an admin dashboard with email template customisation and bulk send capabilities</li>
            <li>Integrated RESTful APIs including EmailJS for transactional messaging</li>
            <li>Implemented BIP-39 mnemonic generation to support secure account recovery flows</li>
            <li>Authored technical documentation and aligned architecture decisions across the team</li>
          </ul>
        </div>
      </div>

      {/* ── Brisk Cloudware ── */}
      <div className="work-item">
        <Image
          src="/briskicon_new.png"
          alt="Brisk Cloudware"
          width={44}
          height={44}
          className="work-logo"
        />
        <div className="work-content">
          <p className="work-meta">June 2024 – June 2025 · 12-month Contract</p>
          <p className="work-company">Brisk Cloudware</p>
          <p className="work-role">Front End Developer</p>
          <ul className="work-list">
            <li>
              Delivered front-end work on the live booking platform:
              <ul className="work-sublist">
                <li>
                  <a
                    className="work-link"
                    href="https://appointment.briskcloudware.com/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WorldIcon /> Brisk Appointment
                  </a>
                </li>
              </ul>
            </li>
            <li>Modernised the landing page UI using vanilla JavaScript, HTML and CSS</li>
            <li>Worked closely with the Product Manager and engineering team to ship features and resolve bugs</li>
            <li>Improved first-time user retention through targeted feature flags</li>
            <li>
              Introduced UX improvements including:
              <ul className="work-sublist">
                <li><strong style={{ color: 'var(--text-primary)' }}>Combobox</strong> — free-text search and record entry for clients</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Out-of-hours bookings</strong> — flexible scheduling beyond standard times</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Context menu</strong> — rapid access to common actions from the appointment grid</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Juggle Rewards ── */}
      <div className="work-item">
        <Image
          src="/jugglerewards.svg"
          alt="Juggle Rewards"
          width={44}
          height={44}
          className="work-logo"
        />
        <div className="work-content">
          <p className="work-meta">June 2023 – Feb 2024 · Contract</p>
          <p className="work-company">Juggle Rewards</p>
          <p className="work-role">Lead App Developer</p>
          <ul className="work-list">
            <li>
              Led development of the MVP for a NZ-based rewards platform where users earn and redeem points at partner businesses:
              <ul className="work-sublist">
                <li>
                  <a
                    className="work-link"
                    href="https://play.google.com/store/apps/details?id=com.juggle.jugglerewards"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/apple_logo.svg" alt="Store" width={14} height={14} />
                    Juggle Rewards App (React Native)
                  </a>
                </li>
              </ul>
            </li>
            <li>Translated Figma wireframes into production-ready TypeScript components with a strong focus on UX</li>
            <li>Set up user authentication including OTP and email verification flows</li>
            <li>
              Built the marketing landing page:
              <ul className="work-sublist">
                <li>
                  <a
                    className="work-link"
                    href="https://jugglerewards.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WorldIcon /> Juggle Rewards (React)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}