import React from 'react';
import { motion } from 'framer-motion';
import { projects } from './projectsData';

export default function Projects() {
  return (
    <section className="pt-8 px-4 md:px-0 bg-black text-white pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg md:text-xl font-bold text-center mt-8 md:mt-16 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          WHAT I HAVE BUILT
        </h3>

        <h1 className="text-3xl md:text-5xl font-extrabold text-center my-4">
          Featured Projects
        </h1>

        <p className="text-neutral-400 text-center text-sm md:text-base px-4 md:px-0 mb-16">
          I've built multiple projects that provide solutions to
          <br className="hidden md:block" /> real-world problems.
        </p>
      </motion.div>

      <div className="w-full flex flex-col gap-4 md:gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`w-full md:w-4/5 mx-auto sticky ${project.stickyOffset} 
              md:min-h-[400px]
              bg-neutral-900/80 backdrop-blur-xl border border-white/10 
              rounded-2xl md:rounded-3xl relative overflow-hidden grid md:grid-cols-2 shadow-2xl`}
          >
            {/* Metallic parallax background effect */}
            <div className="absolute inset-0 -z-10 bg-noise opacity-5 mix-blend-overlay"></div>
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white/5 to-transparent"></div>

            <div className="h-full w-full relative flex flex-col justify-center p-6 md:p-12">
              <div className="w-full">
                <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">
                  {project.tag}
                </h3>

                <h1 className="text-2xl md:text-4xl font-bold uppercase text-white mb-6">
                  {project.title}
                </h1>

                <p className="mb-8 font-light text-neutral-300 leading-relaxed">
                  {project.desc}
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live}
                  className="px-6 py-3 text-sm md:text-base font-semibold bg-white text-black rounded-lg inline-block hover:bg-neutral-200 transition-colors"
                >
                  View Live Site
                </motion.a>
              </div>
            </div>

            <div className="w-full h-full relative md:p-8 p-4 flex items-end justify-end">
               <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`w-full h-[250px] md:h-full rounded-xl md:rounded-tl-3xl overflow-hidden shadow-2xl border border-white/5 ${project.imageClass}`}
                >
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full flex items-center justify-center text-white/20 font-bold text-2xl">
                    Project Preview
                  </div>
                </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}