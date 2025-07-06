'use client';
import Image from "next/image";

export default function Projects() {
   return (
      <div className="w-full max-w-screen-xl mx-auto">
         <h4 className="text-2xl text-align:center sm:text-2xl md:text-2xl font-bold">
            Projects
         </h4>
         <div className="border border-white">
            Fearless Nuzlocke tracker <br />
            The goal: <br />
            Allow players to easily track their Pokemon Nuzlocke experience <br/>
            With a new custom rule set I devised called the Fearless Nuzlocke <br />
            Read more about it here:  
            <a 
            href="https://www.oneesports.gg/league-of-legends/what-is-fearless-draft/"  className="text-blue-500 underline hover:text-blue-700" target="_blank"> 
               Rules of the Fearless Nuzlocke 
            </a>
            <br />
            <Image
               src="/nuzlocke_main.png"
               alt="Profile picture"
               width={1400}
               height={300}
            />
            <br />
            Click on the Pokemon to indicate any captures
            <Image
               src="/nuzlocke_example.png"
               alt="Profile picture"
               width={1400}
               height={300}
            />
            Visit the full page and play around with the features here: 
         </div>
      </div>
   );
}