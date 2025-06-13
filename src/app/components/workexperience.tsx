'use client'
import Image from "next/image";

export default function WorkExperience() {
   return (
      <div className="w-full border border-white pb-4">
         <h4 className="pl-4 text-2xl sm:text-2xl md:text-2xl font-bold">
            Work Experience
         </h4>
         <div className="flex pt-4 pl-8 sm:text-left gap-4">
            <img
            src="/briskicon_new.png"
            alt="Brisk Cloudware"
            className="w-20 h-auto"
            />
            <div>
            <div className="text-xl sm:text-xl md:text-xl font-bold">
               Brisk Cloudware (NCH Software)
            </div>
            - June 2024 - June 2025 (12 month Contract) <br />
            Bachelor of Science <br />
            Double Major in Computer Science and Information Systems <br />
            </div>
         </div>
      </div>
   );
}