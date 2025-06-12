import Image from "next/image";

export default function Socials() {
   return (
      <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
               href="https://github.com/DoTheG95"
               target="_blank"
               rel="noopener noreferrer"
            >
               <Image
               className="dark:invert"
               src="/github.svg"
               alt="GitHub"
               width={20}
               height={20}
               />
            </a>
            <a
               href="https://www.linkedin.com/in/gary-kim-260b42213/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <Image
               className="dark:invert"
               src="/linkedin.svg"
               alt="LinkedIn"
               width={20}
               height={20}
               />
            </a>
            <a
               href="https://github.com/DoTheG95"
               target="_blank"
               rel="noopener noreferrer"
            >
               <Image
               className="dark:invert"
               src="/mail.svg"
               alt="Mail"
               width={20}
               height={20}
               />
            </a>
      </div>
   )
}
