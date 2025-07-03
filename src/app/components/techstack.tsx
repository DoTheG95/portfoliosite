'use client';
import TechStackIcon from "./techstackicon";

export default function TechStack() {
   return (
      <div className="w-full max-w-screen-xl mx-auto">
         <h4 className="text-2xl text-align:center sm:text-2xl md:text-2xl font-bold">
            Tech stack
         </h4>
         <div className="border border-white
            grid 
            grid-cols-2    
            sm:grid-cols-3 
            md:grid-cols-6
            xlg:grid-cols-7 
            gap-6  
            justify-items-center">
            <TechStackIcon stackname="HTML5"/>
            <TechStackIcon stackname="CSS"/>
            <TechStackIcon stackname="JAVASCRIPT"/>
            <TechStackIcon stackname="TYPESCRIPT"/>
            <TechStackIcon stackname="NODEDOTJS"/>
            <TechStackIcon stackname="REACT"/>
            <TechStackIcon stackname="GIT"/>
            <TechStackIcon stackname="DART"/>
            <TechStackIcon stackname="Flutter"/>
            <TechStackIcon stackname="MYSQL"/>
            <TechStackIcon stackname="WORDPRESS"/>
         </div>
      </div>
   );
}