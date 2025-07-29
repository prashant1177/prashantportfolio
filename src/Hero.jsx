import men from "./assets/men.gif";
export default function Hero() {
  return (
    <div class=" flex items-center justify-center h-screen w-full text-white overflow-hidden relative">
      <div className="flex items-center justify-center ">
        <div className="w-full h-full HeroSection absolute opacity-5 -z-30 "></div>
        <div className="overflow-clip w-3/5 rounded-full absolute blur z-9 aspect-square shadow-2xl shadow-muted opacity-0 animate-[fadeIn_0.3s_ease-in_0.7s_forwards]">
          <img src={men} className="menFloating z-30" />
        </div>
        <div className="w-4/5 rounded-full absolute blur z-8 aspect-square shadow-2xl shadow-muted opacity-0 animate-[fadeIn_0.3s_ease-in_1.2s_forwards]"></div>
        <div className="w-full  rounded-full absolute blur z-7 aspect-square shadow-2xl shadow-muted opacity-0 animate-[fadeIn_0.3s_ease-in_1.7s_forwards]"></div>

        <div class="flex flex-col items-center justify-center  h-screen w-full text-slate-200 overflow-hidden relative mt-8">
        
          <h1 class="text-7xl text-center font-extrabold font-mono">Hey, I'm <br/>
          Prashant Patil</h1>
          <p class="text-lg mb-8 text-center text-slate-400">
            I can build webapp with clean code and creative  <br />vision
            - turning ideas into reality.
          </p>
          <a href="https://drive.google.com/file/d/19jP0bkKtFwY4UcMq1dMxlblgVw7ii8pu/view?usp=sharing" class="bg-primary mt-16 z-20 text-background px-6 py-3 rounded-lg hover:bg-primary/95 transition duration-300">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
