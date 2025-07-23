'use client';
import Image from "next/image";
import WorldIcon from "@/components/worldicon";
import Link from "next/link";

export default function Projects() {
   
   const showElementById = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.hidden = false;
   }

   return (
      <div>
         <h4 className="text-2xl p-4 sm:text-2xl md:text-2xl font-bold">
            <Link href="/">
               &lt; Back Home
            </Link>
         </h4>
         <div className="pb-4 w-full max-w-screen-xl mx-auto">
            <div className="pl-4 pr-4 pt-4 border border-white">
               <div className="text-xl sm:text-xl md:text-xl font-bold flex flex-row">
                  <a
                     className="flex gap-2 hover:underline hover:underline-offset-4"
                     href="http://fearlesslocke.xyz/"
                     target="_blank"
                     rel="noopener noreferrer"
                     >
                     Fearless Nuzlocke tracker
                     <WorldIcon />
                  </a>
               </div>
               <br />
               <a 
               className="text-[rgb(0_199_255)]"
               onClick={e => {
                  e.preventDefault();
                  showElementById('fearless_techstack');
                  (e.currentTarget as HTMLAnchorElement).hidden = true;
               }}>
                  Click here to see Tech stacks used 
               </a>
               <div id="fearless_techstack" hidden>
                  This web application is built with React <br/>
                  Deployed with Vercel <br/>
                  Pokemon RESTful API: Pokeapi <br/>
                  Login Authentication and Cloud Storage through: Firebase<br/>
               </div>
               <br/>
               Currently this app loads Pokemon entries based on the Pokedex selected 
               <br />
               You can also search and filter for Pokemon based on their types as well
               <br />
               The main feature is being able to track all Pokemon caught and used as well as any evolutions of the Pokemon as well. 
               <Image
                  src="/nuzlocke_main.png"
                  alt="Profile picture"
                  width={1400}
                  height={300}
               />
               <br />
               You can then click on the Pokemon you have caught or missed to keep track of your progress - this will update to all the relevt evolution chains of the selected Pokemon. <br/>
               Example screen shot of clicking `&apos;`Charmandar`&apos;` resulting in `&apos;`Charmeleon`&apos;` and `&apos;`Charizard`&apos;` being selected.
               <Image
                  src="/nuzlocke_example.png"
                  alt="Profile picture"
                  width={1400}
                  height={300}
               />
               <br />
            </div>
         </div>
      </div>
   );
}