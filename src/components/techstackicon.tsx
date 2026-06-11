'use client';

interface TechStackProps {
  stackname: string;
}
import Image from "next/image";

export default function TechStackIcon ({ stackname }: TechStackProps) {
  const imageSrc = `./techstack/${stackname.toLowerCase()}.svg`;

  return (
    <div className="flex flex-col pt-4 pl-4 pr-4">
      <Image
        src={imageSrc}
        alt={stackname}
        width={100}
        height={80}
        className="w-[100px] h-auto min-w-[80px] max-w-[120px] object-contain mx-auto"
        />
      <div className="text-center">{stackname}</div>
    </div>
  );
}
