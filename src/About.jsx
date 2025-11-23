import React from 'react';
import { motion } from 'framer-motion';
export default function About() {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          More About Me
        </h2>

        <p className="text-neutral-400 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
          I'm Prashant, I love solving real problems with beautiful UI and sharp
          backend logic. Most days you'll find me experimenting with new tech,
          improving my designs, or learning how to make systems faster and
          smarter.
        </p>
      </motion.div>

    </section>
  );
}