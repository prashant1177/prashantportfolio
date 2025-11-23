import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollY } = useScroll();

  const yRange = [0, 500];
  const opacityOutput = [1, 0];
  const yOutput = [0, 150];

  const opacity = useTransform(scrollY, yRange, opacityOutput);
  const y = useTransform(scrollY, yRange, yOutput);

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "circOut" },
    },
  };

  const socialVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND LAYERS */}
      
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black z-0"></div>

      {/* Floating Orbs (Parallax Glow) */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-white rounded-full blur-[120px] md:blur-[180px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[100px] md:blur-[160px]"
        />
      </motion.div>

      {/* FOREGROUND CONTENT */}
      {/* Wrapped in motion.div to apply scroll transformations (opacity fade out on scroll) */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center"
        >
          {/* HEADING */}
          <motion.h1 
            variants={itemVariants}
            className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
          >
            {/* Glow effect behind text */}
            <span className="absolute inset-0 blur-3xl bg-white/5 -z-10 rounded-full"></span>
            <span className="text-white/90">
             I'm{' '} 
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Prashant Patil
              </span>
            </span>
          </motion.h1>

          {/* DARK METALLIC ACCENT BAR */}
          <motion.div
            variants={lineVariants}
            className="w-32 sm:w-48 h-[2px] sm:h-[3px] mt-4 mb-6 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />

          {/* SUBHEADING */}
          <motion.span
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-neutral-300"
          >
            Full Stack Developer
          </motion.span>

          {/* PARAGRAPH */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-xl leading-relaxed mb-12"
          >
            I build clean, modern web applications with a polished creative vision.
Turning ideas into interactive reality.
          </motion.p>

          {/* SOCIALS */}
          <motion.div 
            variants={containerVariants}
            className="flex items-center gap-6"
          >
            {[
              { 
                href: "https://github.com/prashant1177/", 
                icon: (
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                ) 
              },
              { 
                href: "https://www.linkedin.com/in/prashantjpatil49/", 
                icon: (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                )
              },
              { 
                href: "mailto:prashantjpatil49@example.com", 
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" fill="none" />
                )
              },
              { 
                href: "https://drive.google.com/file/d/19jP0bkKtFwY4UcMq1dMxlblgVw7ii8pu/view?usp=sharing", 
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" fill="none" />
                )
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  {social.icon}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/30 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

    </div>
  );
}