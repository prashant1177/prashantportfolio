import React from 'react';
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaCloud,
} from 'react-icons/fa';

import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens,
  SiReactrouter,
  SiVercel,
  SiCloudinary,
  SiGooglecloud,
  SiGithubactions,
  SiCanva,
  SiAdobephotoshop,
  SiVite,
} from 'react-icons/si';

const iconStyle = 'flex items-center gap-2 px-3 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition text-sm';

const SkillsGrid = () => {
  return (
    <div className="flex flex-col gap-4 text-white z-10">

      {/* Languages */}
      <div>
        <div className="flex flex-wrap gap-4 ">
          <div className={iconStyle}><FaPython /> Python</div>
          <div className={iconStyle}><FaJsSquare /> JavaScript</div>
          <div className={iconStyle}><FaJava /> Java</div>
          <div className={iconStyle}><FaDatabase /> SQL</div>

          <div className={iconStyle}><FaReact /> React</div>
          <div className={iconStyle}><FaNodeJs /> Node.js</div>
          <div className={iconStyle}><SiExpress /> Express.js</div>
          <div className={iconStyle}><SiJsonwebtokens /> JWT</div>
          <div className={iconStyle}><SiReactrouter /> React Router</div>
          <div className={iconStyle}><SiTailwindcss /> TailwindCSS</div>
          <div className={iconStyle}><FaBootstrap /> Bootstrap</div>
          <div className={iconStyle}><FaHtml5 /> HTML5</div>
          <div className={iconStyle}><FaCss3Alt /> CSS3</div>
          <div className={iconStyle}><SiVite /> Vite</div>
          <div className={iconStyle}><FaAws /> AWS</div>
          <div className={iconStyle}><FaGit /> Git</div>
          <div className={iconStyle}><FaGithub /> GitHub</div>
          <div className={iconStyle}><SiVercel /> Vercel</div>
          <div className={iconStyle}><SiCloudinary /> Cloudinary</div>
          <div className={iconStyle}><SiGooglecloud /> Google Cloud</div>
          <div className={iconStyle}><SiGithubactions /> GitHub Actions</div>
          
          <div className={iconStyle}><SiMongodb /> MongoDB</div>
          <div className={iconStyle}><SiMysql /> MySQL</div>
          
          <div className={iconStyle}><FaFigma /> Figma</div>
          <div className={iconStyle}><SiCanva /> Canva</div>
          <div className={iconStyle}><SiAdobephotoshop /> Photoshop</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
