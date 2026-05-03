'use client';
import TechStackIcon from "./techstackicon";

const stack = [
  'HTML5',
  'CSS',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'NODEDOTJS',
  'REACT',
  'GIT',
  'DART',
  'Flutter',
  'MYSQL',
  'WORDPRESS',
];

export default function TechStack() {
  return (
    <div className="tech-section">
      <p className="section-label">Tech Stack</p>
      <div className="tech-grid">
        {stack.map((name) => (
          <div className="tech-item" key={name}>
            <TechStackIcon stackname={name} />
            <span className="tech-item-label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}