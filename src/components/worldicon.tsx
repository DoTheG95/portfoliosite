import Image from "next/image";

export default function WorldIcon() {
   return (
      <Image
         aria-hidden
         src="/globe.svg"
         alt="Globe Icon"
         width={16}
         height={16}
      />
   )
}
