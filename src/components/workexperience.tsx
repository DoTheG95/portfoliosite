'use client'
import WorldIcon from "./worldicon";
import Image from "next/image";

export default function WorkExperience() {
   return (
      <div className="w-full border border-white pb-4">
         <h4 className="pl-4 pt-4 text-2xl sm:text-2xl md:text-2xl font-bold">
            Work Experience
         </h4>
         <div className="flex pt-8 pl-8 sm:text-left gap-4">
            <Image
               src="/briskicon_new.png"
               alt="Brisk Cloudware"
               width={80}
               height={80}
               className="w-20 h-20"
            />
            <div>
               <div>June 2024 - June 2025 (12 month Contract) </div>
               <div className="text-xl sm:text-xl md:text-xl font-bold flex flex-row">
                  Brisk Cloudware (NCH Software)
               </div>
               Front End Developer <br/>
               <br />
               <b>Key Achievements: </b>
               <ul className="list-disc ml-5 mt-2">
                  <li>
                     Worked on the front end of the Brisk Cloudware booking software:
                     <ul className="list-disc ml-5">
                        <li>
                           <a
                           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
                  <li> Modernised the UI of the landing page using vanilla JavaScript, HTML, CSS  </li>
                  <li> Worked closely with Product Manager and other developers to deliver new features and investigate/resolve any reported bugs</li>
                  <li> Improved first-time user retention by designing and deploying targeted feature flags </li>
                  <li> Enhanced overall user experience through introcuding features like: </li>
                   <ul className="list-disc ml-5">
                     <li> <b>Combobox</b> - Enabled users to freely search and enter records such as client names</li>
                     <li> <b>Out of hour bookings</b> - Allowed appointments to be booked outside the standard times for special occasions </li>
                     <li> <b>Context menu</b> -  Streamlined common actions (e.g., booking appointments, blocking time slots) directly from the appointment grid </li>
                  </ul>
               </ul>
            </div>
         </div>
         <div className="flex pt-12 pl-8 sm:text-left gap-4">
            <Image
               src="/ezyvet.png"
               alt="ezyVet"
               width={80}
               height={80}
               className="w-20 h-20"
            />
            <div>
               Aug 2021 - Feb 2024 (Full time)<br />
               <div className="text-xl sm:text-xl md:text-xl font-bold">
                  ezyVet
               </div>
               Intermediate Software Solutions Advisor <br/>
               <br />
               <b>Key Achievements: </b>
               <ul className="list-disc ml-5 mt-2">
                  <li>Delivered software training, technical support, and documentation for stakeholders. </li>
                  <li>Supported a global user base, contributed to revenue retention, and led cross-functional initiatives across customer support, and the QA team.</li>
                  <li>Performed testing on reported bugs and identifeid core workflows which were logged in the Jira and reviewed with QA and devs</li>
                  <li>Utilised PHP to generate custom TWIG templates to generate additional revenue </li>
                   <li>Implement an effective training program for onboarding new team members for more technical aspects of the software; such as: </li>
                   <ul className="list-disc ml-5">
                     <li>Hardware troubleshooting steps</li>
                     <li>Configuration of IP and other windows settings for optimal efficiency</li>
                     <li>Break down of TWIG (PHP) coding to produce simple document templates</li>
                  </ul>
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
               </ul>
            </div>
         </div>
         <div className="flex pt-12 pl-8 sm:text-left gap-4">
            <Image
               src="/gorillatechlogo.jpeg"
               alt="Gorilla Technology"
               width={80}
               height={80}
               className="w-20 h-20"
            />
            <div>
               Aug 2019 - Aug 2021 (Full time)<br />
               <div className="text-xl sm:text-xl md:text-xl font-bold">
                  Gorilla Technology
               </div>
               IT Technician & Audiovisual Engineer <br/>
               <br />
               <b>Key Achievements: </b><br />
               <ul className="list-disc ml-5 mt-2">
                  <li> Provided IT support (L1/L2/L3) for customers including large organisations such as the Cancer Society NZ with over 500 users </li>
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
         <div className="flex pt-12 pl-8 sm:text-left gap-4">
            <Image
               src="/jnj.png"
               alt="National Holdings"
               width={80}
               height={80}
               className="w-20 h-20"
            />
            <div>
            Sep 2018 - June 2019 (Full time) <br />
            <div className="text-xl sm:text-xl md:text-xl font-bold">
               National Holdings / JNJ Management
            </div>
            IT Admin <br/>
            <br/>
            <b>Key Achievements: </b><br />
            <ul className="list-disc ml-5 mt-2">
               <li> Managed all IT infrastructure and assets in the Sky World building </li>
               <li> Including all related websites: </li>
               <ul className="list-disc ml-5">
                  <li>
                     <a
                     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                     href="https://www.skyworld.co.nz/"
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
            </ul>
            </div>
         </div>
      </div>
   );
}