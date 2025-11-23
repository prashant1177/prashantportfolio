import React from 'react';
import { motion } from 'framer-motion';
import SkillsGrid from './SkillsGrid';

export default function Tech() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-24 relative overflow-hidden">
      
      <div className="w-full md:w-3/5 flex flex-col h-full relative z-10 px-4 md:px-0">
          
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-900/10 to-transparent opacity-20 blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 text-center">
              MY TECHNICAL SKILLS
            </h1>
          </motion.div>

          {/* DARK METALLIC ACCENT BAR */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            className="mx-auto w-40 h-[3px] mt-3 mb-6 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          ></motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SkillsGrid />
          </motion.div>
        </div>
    </section>
  );
}