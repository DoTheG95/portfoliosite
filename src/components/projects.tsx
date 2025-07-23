'use client';
import Image from "next/image";
import WorldIcon from "./worldicon";
import Link from 'next/link';

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
            If you are fan of the popular franchise [Pokemon] - this is a web app where you can keep track of your Nuzlocke Experience<br/>
            It is also designed to work with a Unique new rule I devised called the [fearlesslocke] <br/>
            Some key features are: search feature / filter by type / log [Pokemon] used through out your playthrough <br/>
            <Image
               src="/nuzlocke_main.png"
               alt="Profile picture"
               width={1400}
               height={300}
            />
            <Link href="/projects/fearlesslocke" className="text-[rgb(0_199_255)]">
               Read more here ... 
            </Link>
            <br />
         </div>
      </div>
   );
}