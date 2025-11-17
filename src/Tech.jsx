import SkillsGrid from "./SkillsGrid";

export default function Tech() {
  return (
    <div className=" flex flex-col items-center justify-center gap-10 pt-24 ">


      {/* Metallic container */}
      <div className="w-full md:w-3/5 flex flex-col h-full">
        <div className="relative w-full h-fit p-10 bg-neutral-950/90 border border-white/5 rounded-3xl overflow-hidden">

          {/* Metallic brushed texture */}
          <div className="absolute inset-0 -z-10 opacity-10 HeroSection"></div>

          {/* Soft top glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 to-transparent opacity-20"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 text-center">
            MY TECHNICAL SKILLS
          </h1>
          {/* DARK METALLIC ACCENT BAR */}
          <div className="mx-auto w-40 h-[3px] mt-3 mb-6 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.15)]"></div>


          {/* Skills */}
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
}
