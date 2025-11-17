import { useState } from "react";

const TABS = {
  "Frontend Development": [
    "HTML5",
    "CSS3",
    "Responsive Design",
    "React.js",
    "React Hooks",
    "React Router",
    "Component Architecture",
    "Nextjs",
    "TailwindCSS",
    "Bootstrap",
    "DOM Manipulation",
    "Performance Optimization",
    "SEO Optimization",
  ],
 "Full-Stack Development": [
    // Languages
    "TypeScript",
    "JavaScript (ES6+)",
    "Python",
    "Java",
    "SQL",
    "JSON",
    "Bash/Shell Scripting",

    // Databases
    "DBMS",
    "MongoDB",
    "MySQL",
    "Schema Design",
    "Indexing & Query Optimization",
    "ACID Principles",

    // DevOps + Cloud
    "Git",
    "GitHub",
    "CI/CD Pipelines",
    "Docker",
    "Docker Compose",
    "AWS",
    "Vercel",
    "Cloudinary",
    "Version Control Workflows",


    // Other
    "Debugging",
    "Clean Code Practices",
    "Agile Workflows",
    "Team Collaboration",
    "Problem Solving",
    "Code Review",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication",
    "Authorization",
    "JWT",
    "Middleware Development",
    "Microservices Basics",
    "Server-Side Rendering (SSR)",
    "Database Integration",
    "Environment Variables & Config",
  ],

 
};

const tabButton =
  "px-4 py-2 text-sm rounded-md border border-white/20 hover:bg-white/10 transition";

const itemStyle =
  "px-3 py-2 border border-white/20 text-white rounded-md text-sm bg-white/5 backdrop-blur-sm";

export default function SkillsGrid() {
  const [active, setActive] = useState("Full-Stack Development");

  return (
    <div className="flex flex-col gap-6 text-white w-full">

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {Object.keys(TABS).map((tab) => (
          <button
            key={tab}
            className={`${tabButton} ${
              active === tab ? "bg-white text-black" : ""
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {TABS[active].map((skill) => (
          <div key={skill} className={itemStyle}>
            {skill}
          </div>
        ))}
      </div>

    </div>
  );
}
