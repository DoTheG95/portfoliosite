'use client'

import Image from "next/image";
import WorldIcon from "./worldicon";

export default function WorkExperience() {
  return (
    <div className="work-section">
      <h4 className="work-title">Work Experience</h4>


      {/* ===== The Capsulelab ===== */}
      <div className="work-item">
        <Image
          src="/briskicon_new.png"
          alt="The Capsulelab"
          width={48}
          height={48}
          className="work-logo"
        />

        <div className="work-content">
          <div className="work-meta">
            June 2025 - Current (Contract)
          </div>

          <div className="work-company">
            The Capsulelab
          </div>

          <div>Full Stack Developer</div>

          <b>Key Achievements:</b>

          <ul className="work-list">
            <li>
              Create a web application for a startup company with the goal of providing a platform for users to store their digital assets in the IPFS:
              <ul className="work-sublist">
                <li>
                  <a
                    className="work-link"
                    href="https://www.thecapsulelab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WorldIcon />
                    The Capsule Lab
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* ===== Brisk Cloudware ===== */}
      <div className="work-item">
        <Image
          src="/briskicon_new.png"
          alt="Brisk Cloudware"
          width={48}
          height={48}
          className="work-logo"
        />

        <div className="work-content">
          <div className="work-meta">
            June 2024 - June 2025 (12 month Contract)
          </div>

          <div className="work-company">
            Brisk Cloudware
          </div>

          <div>Front End Developer</div>

          <b>Key Achievements:</b>

          <ul className="work-list">
            <li>
              Worked on the front end of the Brisk Cloudware booking software:
              <ul className="work-sublist">
                <li>
                  <a
                    className="work-link"
                    href="https://appointment.briskcloudware.com/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WorldIcon />
                    Brisk Appointment
                  </a>
                </li>
              </ul>
            </li>

            <li>
              Modernised the UI of the landing page using vanilla JavaScript,
              HTML, CSS
            </li>

            <li>
              Worked closely with Product Manager and other developers to deliver
              new features and resolve bugs
            </li>

            <li>
              Improved first-time user retention through targeted feature flags
            </li>

            <li>Enhanced UX by introducing features such as:</li>

            <ul className="work-sublist">
              <li>
                <b>Combobox</b> – Enabled users to search and enter records
              </li>
              <li>
                <b>Out of hour bookings</b> – Allowed flexible scheduling
              </li>
              <li>
                <b>Context menu</b> – Streamlined actions from the grid
              </li>
            </ul>
          </ul>
        </div>
      </div>

      {/* ===== Juggle Rewards ===== */}
      <div className="work-item">
        <Image
          src="/jugglerewards.svg"
          alt="Juggle Rewards"
          width={48}
          height={48}
          className="work-logo"
        />

        <div className="work-content">
          <div className="work-meta">
            June 2023 - Feb 2024 (Contract)
          </div>

          <div className="work-company">
            Juggle Rewards
          </div>

          <div>Lead App Developer</div>

          <b>Key Responsibilities & Achievements:</b>

          <ul className="work-list">
            <li>
                Created the MVP of Juggle Rewards App, a rewards program for users to redeem points and earn while spending at selected businesses in New Zealand. 
            </li>
            <ul>
                <li>
                    <a
                        className="work-link"
                        href="https://play.google.com/store/apps/details?id=com.juggle.jugglerewards"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                        src="/apple_logo.svg"
                        alt="Store icon"
                        width={16}
                        height={16}
                        />
                        Juggle Rewards App (React Native)
                    </a>
                </li>
            </ul>
            <li>
                Replicated Figma wireframes though typescript to create functional user interfaces with the user's experience in mind.
            </li>
            <li>
                Set up user authentication such as one time password (OTP) verification and email verifications.
            </li>
            <li>
                Created landing page for the business with key infomation about the business and how it will impact different stakeholders.
            </li>
            <ul>
                <li>
                    <a
                        className="work-link"
                        href="https://jugglerewards.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WorldIcon />
                        Juggle Rewards Home Page (React)
                    </a>
                </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
