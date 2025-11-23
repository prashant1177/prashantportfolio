import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const tabButton = "px-4 py-2 text-sm md:text-base rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white/50";
const activeTabButton = "bg-white text-black font-medium border-white";

const itemStyle = "relative px-4 py-2 border border-white/10 text-neutral-300 rounded-xl text-sm md:text-base bg-white/5 backdrop-blur-sm transition-all duration-500";

export default function SkillsGrid() {
  const [active, setActive] = useState("Full-Stack Development");
  const [glowIndex, setGlowIndex] = useState(null);

  // Effect to randomly glow one skill every second
  useEffect(() => {
    const interval = setInterval(() => {
      const skillsCount = TABS[active].length;
      const randomIndex = Math.floor(Math.random() * skillsCount);
      setGlowIndex(randomIndex);
      
      // Turn off glow shortly after to create a pulse effect
      setTimeout(() => setGlowIndex(null), 800);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  return (
   <div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-12">
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
        {(Object.keys(TABS)).map((tab) => (
          <button
            key={tab}
            className={`${tabButton} ${active === tab ? activeTabButton : "text-white/60"}`}
            onClick={() => {
              setActive(tab);
              setGlowIndex(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="flex flex-wrap justify-center gap-3 md:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {TABS[active].map((skill, index) => {
            const isGlowing = glowIndex === index;
            
            return (
              <motion.div
                key={`${active}-${skill}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  borderColor: isGlowing ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.1)",
                  backgroundColor: isGlowing ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
                  boxShadow: isGlowing ? "0 0 20px rgba(255,255,255,0.3)" : "none",
                  color: isGlowing ? "#ffffff" : "#d4d4d4"
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={itemStyle}
              >
                {skill}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
