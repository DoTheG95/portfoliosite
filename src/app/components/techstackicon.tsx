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
        className="w-48 h-auto"
      />
      <div className="text-center">{stackname}</div>
    </div>
  );
}
