import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row gap-6 items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/Gary Kim CV 2025.pdf"
        download
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Download CV
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/DoTheG95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Git Hub
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/gary-kim-260b42213/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        LinkedIn
      </a>
    </div>
  );
}