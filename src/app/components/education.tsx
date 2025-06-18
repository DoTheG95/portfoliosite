'use client'
import WorldIcon from "./worldicon";

export default function Education() {
   return (
      <div className="w-full border border-white pb-4">
         <h4 className="pl-4 text-2xl sm:text-2xl md:text-2xl font-bold">
            Education
         </h4>
         <div className="flex pl-4 sm:text-left gap-4">
            <img
            src="https://icons.auckland.ac.nz/assets/logos/uoa/horizontal/uoa_logo.svg"
            alt="University of Auckland Logo"
            className="w-48 h-auto"
            />
            <div>
            <div className="text-xl sm:text-xl md:text-xl font-bold">
               The University of Auckland (UoA)
            </div>
            2014 - 2017 <br />
            Bachelor of Science <br />
            Double Major in Computer Science and Information Systems <br />
            </div>
         </div>
         <h4 className="pl-4 text-2xl sm:text-2xl md:text-2xl font-bold">
            Start ups
         </h4>
         <div className="flex pl-4 sm:text-left gap-4">
            <img
            src="./jugglerewards.svg"
            alt="Juggle Rewards"
            className="w-48 h-auto"
            />
            <div>
            <div className="text-xl sm:text-xl md:text-xl font-bold">
               Juggle Rewards
            </div>
            June 2023 - Feb 2024 (Contract) <br />
            Lead App developer <br />
            Created Juggle Rewards App <br />
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
            href="https://jugglerewards.app/"
            target="_blank"
            rel="noopener noreferrer"
            >
               <WorldIcon />
               Juggle Rewards Home Page - (React)
            </a>
            </div>
         </div>
      </div>
   );
}