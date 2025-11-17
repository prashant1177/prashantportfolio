import { projects } from "./projectsData";

export default function Projects() {
  return (
    <div className="pt-8  px-4 md:px-0">
      <h3 className="text-lg md:text-xl font-bold text-center mt-8 md:mt-16 bg-primary bg-clip-text text-transparent">
        WHAT I HAVE BUILT
      </h3>

      <h1 className="text-3xl md:text-5xl font-extrabold text-center my-4">
        Featured Projects
      </h1>

      <p className="text-neutral-300 text-center text-sm md:text-base px-4 md:px-0">
        I've built multiple projects that provide solutions to
        <br className="hidden md:block" /> real-world problems.
      </p>

      <div className="w-full flex flex-col my-8 md:my-16 gap-4 md:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-full md:w-3/5 mx-auto sticky ${project.stickyOffset} 
              md:h-fit
              bg-neutral-950 border border-white/10 
              rounded-2xl md:rounded-4xl relative overflow-hidden grid md:grid-cols-2 `}
          >
            {/* Metallic parallax background */}
            <div className="absolute inset-0 -z-10  opacity-5 mix-blend-screen"></div>

            <div className="h-full w-full relative flex flex-col md:flex-row p-6 md:ps-12 md:pt-12">
              <div className="w-full text-slate-100">
                <h3 className="text-xs font-light w-fit uppercase italic">
                  {project.tag}
                </h3>

                <h1 className="text-2xl md:text-4xl font-bold uppercase mt-2   border-b-2 border-primary w-fit pb-2">
                  {project.title}
                </h1>

                <div className="my-4 mb-8 md:mb-16">
                      <h6 className="">{project.desc}</h6>
                </div>

                <a
                  href={project.live}
                  className="px-4 md:px-6 py-2 text-base md:text-xl bg-text text-slate-900 rounded-lg  inline-block"
                >
                  View Live Site
                </a>
              </div>

              
            </div><div className="w-full h-full  md:ps-8 md:pt-16  pt-4">
                <div
                  className={`w-full h-full rounded-tl-2xl md:rounded-tl-4xl overflow-hidden hover:scale-101 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]  ${project.imageClass}`}
                />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
