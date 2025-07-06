'use client'
import Image from "next/image";
import WorldIcon from "./worldicon";

export default function Education() {
   return (
      <div className="w-full border border-white pb-4">
         <h4 className="pl-4 pt-4 text-2xl sm:text-2xl md:text-2xl font-bold">
            Education
         </h4>
         <div className="flex pl-4 sm:text-left gap-4 items-start">
            <Image
               src="https://icons.auckland.ac.nz/assets/logos/uoa/horizontal/uoa_logo.svg"
               alt="University of Auckland Logo"
               width={48}
               height={12}
               className="w-48 h-auto"
            />
            <div>
            2014 - 2017 <br />
            <div className="text-xl sm:text-xl md:text-xl font-bold">
               The University of Auckland (UoA)
            </div>
            Bachelor of Science <br />
            Double Major in Computer Science and Information Systems <br />
            </div>
         </div>
         <h4 className="pl-4 pt-8 text-2xl sm:text-2xl md:text-2xl font-bold">
            Start ups
         </h4>
         <div className="flex pl-4 pt-6 sm:text-left gap-4 items-start">
            <Image
               src="./jugglerewards.svg"
               alt="Juggle Rewards"
               width={48}
               height={12}
               className="w-48 h-auto"
            />
            <div>
               June 2023 - Feb 2024 (Contract) <br />
               <div className="text-xl sm:text-xl md:text-xl font-bold">
                  Juggle Rewards
               </div>
               Lead App developer <br />
               Created Juggle Rewards App <br />
               <br/>
               <b>Key Responsibilities & Achievements: </b><br />
               <ul className="list-disc ml-5 mt-2">
                  <li> Replicated Figma wireframes using TypeScript to create functional interfaces, ensuring pixel-perfect replication and smooth interactivity.</li>
                  <li> Managed Jira tickets and leading Agile sprints as Scrum Master, driving timely and efficient results for a team of 3 developers.</li>
                  <li> Maintained a high standard of code quality by adhering to clean code principles and enforcing consistent code review practices. </li>
                  <li> GitHub version control, streamlining collaboration and ensuring safe, trackable code deployments.</li>
               </ul>
               <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://jugglerewards.app/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <WorldIcon />
                  Juggle Rewards Home Page - (React)
               </a>
               <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://play.google.com/store/apps/details?id=com.juggle.jugglerewards"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     aria-hidden
                     src="/apple_logo.svg"
                     alt="Apple icon"
                     width={16}
                     height={16}
                  />
                  Juggle Rewards App - (React Native) * Only available in the NZ App store
               </a>
            </div>
         </div>
      </div>
   );
}