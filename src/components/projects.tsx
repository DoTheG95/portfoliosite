'use client';
import WorldIcon from "./worldicon";
import Link from 'next/link';

const showElementById = (id: string) => {
   const el = document.getElementById(id);
   if (!el) return;
   el.hidden = false;
}

export default function Projects() {
   return (
      <div className="w-full max-w-screen-xl mx-auto">
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
            <br />
            If you are fan of the popular franchise [Pokemon] - this is a web app where you can keep track of your Nuzlocke Experience<br/>
            It is also designed to work with a Unique new rule I devised called the [fearlesslocke] <br/>
            Some key features are: search feature / filter by type / log [Pokemon] used through out your playthrough <br/>
            <br/>
            Currently this app loads Pokemon entries based on the Pokedex selected 
            <br />
            You can also search and filter for Pokemon based on their types as well
            <br />
            The main feature is being able to track all Pokemon caught and used as well as any evolutions of the Pokemon as well. 
           <br />
           <br/>
            <Link href="https://www.fearlesslocke.xyz/" className="text-[rgb(0_199_255)]">
               Click here to try it out!
            </Link>
            <br />
            <br/>
            <Link href="https://github.com/DoTheG95/fearlesslocke" className="text-[rgb(0_199_255)]">
               Project Github
            </Link>
         </div>
         <div className="pl-4 pr-4 pt-4 border border-white">
            <div className="text-xl sm:text-xl md:text-xl font-bold flex flex-row">
               <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://www.cardboardaddiction.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Cardboard Addiction
                  <WorldIcon />
               </a>
            </div>
            
            <div className="pl-4 pr-4 pt-4 pb-4 border border-white">
               Tech stack:
               
            </div>
            <a 
               className="text-[rgb(0_199_255)]"
               onClick={e => {
                  e.preventDefault();
                  showElementById('cardboard_addiction_techstack');
                  (e.currentTarget as HTMLAnchorElement).hidden = true;
               }}>
                  Click here to see Tech stacks used 
               </a>
               <div id="cardboard_addiction_techstack" hidden>
                  This web application is built with React <br/>
                  Deployed with Vercel <br/>
                  Pokemon RESTful API: Pokeapi <br/>
                  Login Authentication and Cloud Storage through: Firebase<br/>
               </div>
            <br />
            A community driven marketplace for lovers of TCG. <br/>
            Users can create listings, communities and market posts for their TCG cards. <br/>
           <br/>
            <Link href="https://www.fearlesslocke.xyz/" className="text-[rgb(0_199_255)]">
               Click here to try it out!
            </Link>
            <br />
            <br/>
            <Link href="https://github.com/DoTheG95/bristbanetradesystem" className="text-[rgb(0_199_255)]">
               Project Github
            </Link>
         </div>
      </div>
   );
}