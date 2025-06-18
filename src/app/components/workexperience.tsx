'use client'
import Image from "next/image";
import WorldIcon from "./worldicon";

export default function WorkExperience() {
   return (
      <div className="w-full border border-white pb-4">
         <h4 className="pl-4 text-2xl sm:text-2xl md:text-2xl font-bold">
            Work Experience
         </h4>
         <div className="flex pt-4 pl-8 sm:text-left gap-4">
            <img
            src="/briskicon_new.png"
            alt="Brisk Cloudware"
            className="w-20 h-20"
            />
            <div>
               <div>June 2024 - June 2025 (12 month Contract) </div>

               <div className="text-xl sm:text-xl md:text-xl font-bold flex flex-row">
                  Brisk Cloudware (NCH Software)
               </div>
               Front End Developer <br/>
               Front end development of 'Brisk Appointment', a web-based scheduling platform. <br />
               Worked closely with product managers to implement new features, resolve bugs, and improve overall performance and user experience<br/>
               Update internal library with new components to be reused within the vast products of Brisk Cloudware and NCH Software <br/>
               <br />
               <b>Key Achievements: </b><br />
               <ul className="list-disc ml-5 mt-2">
                  <li> Modernised the UI of the landing page using vanilla JavaScript, HTML, CSS  </li>
                  <li> Update the appointment form so that fields are more interactive with utilisation of comboboxes </li>
                  <li> Load data such as user permissions, saved bookings and other customised settings from the database </li>
               </ul>
               Tech Stack:  HTML, CSS, Vanilla JS
            </div>
         </div>
         <div className="flex pt-4 pl-8 sm:text-left gap-4">
            <img
            src="/ezyvet.png"
            alt="ezyVet"
            className="w-20 h-20"
            />
            <div>
               Aug 2021 - Feb 2024 (Full time)<br />
               <div className="text-xl sm:text-xl md:text-xl font-bold">
                  ezyVet
               </div>
               Intermediate Software Solutions Advisor <br />
               Delivered software training, technical support, and documentation for ezyVet; a cloud-based veterinary SaaS practice management system. <br />
               Supported a global user base, contributed to revenue retention, and led cross-functional initiatives across customer support, training, and testing. <br />
               <br />
               <b>Key Responsibilities & Achievements: </b><br />
               <ul className="list-disc ml-5 mt-2">
                  <li>Created universal resources for stakeholders to easily navigate core functions of ezyVet</li>
                  <ul className="list-disc ml-5">
                     <li>
                        <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://www.ezyvet.com/webinar/ezyprint"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                           <WorldIcon />
                           Webinar
                        </a>
                     </li>
                  </ul>
                  <li>Performed testing on reported bugs and Identifeid core workflows to report to developers in the Jira</li>
                  <li>Created TWIG docuemnts using HTML for custom documentation</li>
               </ul>
            </div>
         </div>
         <div className="flex pt-4 pl-8 sm:text-left gap-4">
            <img
            src="/gorillatechlogo.jpeg"
            alt="Gorilla Technology"
            className="w-20 h-20"
            />
            <div>
               Aug 2019 - Aug 2021 <br />
               <div className="text-xl sm:text-xl md:text-xl font-bold">
                  Gorilla Technology
               </div>
               L3/L4 Technician & Audiovisual Engineer <br />
               Provided IT support for customers in NZ such as the Cancer Society NZ<br />
               <br />
               <b>Key Responsibilities & Achievements: </b><br />
               <ul className="list-disc ml-5 mt-2">
                  <li>Managed core sites for Gorilla Technology and World Podcasts</li>
                     <ul className="list-disc ml-5">
                        <li>
                           <a
                           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                           href="https://gorillatechnology.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                              <WorldIcon />
                              Gorilla Technology
                           </a>
                        </li>
                     </ul>
                  <li>Recorded and edited audio and video for NZ Tech Podcast</li>
                     <ul className="list-disc ml-5">
                        <li>
                           <a
                           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                           href="https://worldpodcasts.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                              <WorldIcon />
                              World Podcast
                           </a>
                        </li>
                     </ul>
               </ul>
            </div>
         </div>
         <div className="flex pt-4 pl-8 sm:text-left gap-4">
            <img
            src="/jnj.png"
            alt="National Holdings"
            className="w-20 h-20"
            />
            <div>
            Sep 2018 - June 2019 (Full time) <br />
            <div className="text-xl sm:text-xl md:text-xl font-bold">
               National Holdings (NCH Software)
            </div>
            IT Admin
            Managed all IT infrastructure and assets in the 'Sky World' building <br />
            Including all related websites: <br />
            <br />
               <b>Key Responsibilities & Achievements: </b><br />
            <ul className="list-disc ml-5 mt-2">
               <li>
                  <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://worldpodcasts.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     <WorldIcon />
                     Sky World
                  </a>
               </li>
               <li>
                  <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://www.metrolanes.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     <WorldIcon />
                     Metrolanes
                  </a>
               </li>
               <li>WWW.PASTAMAGO.CO.NZ (Discontinued)</li>
               <li>WWW.CHICKENCLUB.CO.NZ (Discontinued)</li>
            </ul>
            </div>
         </div>
      </div>
   );
}