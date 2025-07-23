'use client';

interface TechStackProps {
  stackname: string;
}

export default function TechStackIcon ({ stackname }: TechStackProps) {
  const imageSrc = `./techstack/${stackname.toLowerCase()}.svg`;

  return (
    <div className="flex flex-col pt-4 pl-4 pr-4">
      <img
        src={imageSrc}
        alt={stackname}
        className="w-[100px] h-auto min-w-[80px] max-w-[120px] object-contain mx-auto"
        />
      <div className="text-center">{stackname}</div>
    </div>
  );
}
