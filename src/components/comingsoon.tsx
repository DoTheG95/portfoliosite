'use client';

export default function Comingsoon() {
   return (
      <div className="w-full max-w-screen-xl mx-auto">
         <h4 className="text-2xl text-align:center sm:text-2xl md:text-2xl font-bold">
            Coming Soon
         </h4>
         <div className="pl-4 pt-4 border border-white">
            New Project uploads: 
            <div className="text-l sm:text-l md:text-l font-bold flex flex-row">
                  <a
                     className="flex gap-2 hover:underline hover:underline-offset-4"
                     href="https://www.cardboardaddiction.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     >
                     Community site for local trading card communities 
                  </a>
               </div>
            <br />
            <br />
         </div>
      </div>
   );
}