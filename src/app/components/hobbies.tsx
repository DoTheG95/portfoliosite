'use client';

export default function Hobbies() {
   return (
      <div className="w-full">
         <h4 className="text-2xl sm:text-2xl md:text-2xl font-bold">
            Hobbies
         </h4>
         <div className="w-full border border-white flex flex-row">
          {/* Use Digimon TCG Template */}
            <ul>
              <li>
                TCG
              </li>
              <li>
                Bouldering
              </li>
              <li>
                Photography
              </li>
              <li>
                Road trips
              </li>
              <li>
                Gaming
              </li>
            </ul>
         </div>
      </div>
   );
}