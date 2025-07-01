'use client';
import TechStackIcon from "./techstackicon";

export default function TechStack() {
   return (
      <div className="w-full">
         <h4 className="text-2xl sm:text-2xl md:text-2xl font-bold">
            Tech stack
         </h4>
         <div className="w-full border border-white flex flex-row">
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