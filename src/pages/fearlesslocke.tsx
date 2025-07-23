'use client';
import Image from "next/image";
import WorldIcon from "@/components/worldicon";

export default function Projects() {
   return (
      <div className="w-full max-w-screen-xl mx-auto">
         <h4 className="text-2xl text-align:center sm:text-2xl md:text-2xl font-bold">
            Projects
         </h4>
         <div className="pl-4 pr-4 pt-4 border border-white">
            <div className="text-xl sm:text-xl md:text-xl font-bold flex flex-row">
               <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="http://fearlesslocke.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Fearless Nuzlocke tracker
                  <WorldIcon />
               </a>
            </div>
            <br />
            This is a personal project I worked on because I really love the game [Pokemon] <br />
            As well as challenges and a very common challenge from the community is a set of self-set rules called a Nuzlocke <br/>
            I wanted to come up with a way to easily visually track Pokemon that I have used in my Nuzlocke playthrough. <br/>
            With a new custom rule set I devised called the Fearless Nuzlocke <br />
            <br/>
            The site will load the Pokemon entries based on the Pokedex selected
            <br />
            You can also search and filter for Pokemon based on their types as well
            <br />
            <Image
               src="/nuzlocke_main.png"
               alt="Profile picture"
               width={1400}
               height={300}
            />
            <br />
            You can then click on the image to grey-out any pokemon you have caught or missed to keep track of your progress
            <Image
               src="/nuzlocke_example.png"
               alt="Profile picture"
               width={1400}
               height={300}
            />
            <br />
         </div>
      </div>
   );
}