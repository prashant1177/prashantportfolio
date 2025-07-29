import men from "./assets/men.gif";

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-96 md:h-screen w-full text-white overflow-hidden relative px-4 sm:px-6 lg:px-0">
      <div className="flex items-center justify-center lg:w-full">
        <div className="w-full h-full HeroSection absolute opacity-5 -z-30"></div>
        
        {/* Floating image - responsive for mobile/tablet, original for laptop+ */}
        <div className="overflow-clip h-2/5 md:h-auto md:w-3/5 rounded-full absolute blur z-9 aspect-square shadow-2xl shadow-muted opacity-0 animate-[fadeIn_0.3s_ease-in_0.7s_forwards]">
        <div className="flex justify-center items-center h-full w-full">
          <img src={men} className="menFloating md:w-auto md:h-auto h-24 " alt="Prashant Patil" /></div>
        </div>
        
        {/* Background circles - responsive for mobile/tablet, original for laptop+ */}
        <div className=" h-3/5 md:h-auto md:w-4/5 rounded-full absolute blur z-8 aspect-square shadow-2xl shadow-muted opacity-0 animate-[fadeIn_0.3s_ease-in_1.2s_forwards]"></div>
        <div className=" h-4/5 md:h-auto md:w-full rounded-full absolute blur z-7 aspect-square shadow-2xl shadow-muted opacity-0 animate-[fadeIn_0.3s_ease-in_1.7s_forwards]"></div>

        <div className="flex flex-col items-center justify-center h-screen w-full text-slate-200 overflow-hidden relative mt-8">
          {/* Responsive heading - keeps original size for laptop+ */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-extrabold font-mono">
            Hey, I'm <br/>
            Prashant Patil
          </h1>
          
          {/* Responsive paragraph - keeps original size for laptop+ */}
          <p className="text-sm sm:text-base lg:text-lg mb-8 text-center text-slate-400 px-4 lg:px-0">
            I can build webapp with clean code and creative <br className="hidden sm:block" />
            vision - turning ideas into reality.
          </p>
          
          {/* Responsive button - keeps original size for laptop+ */}
          <a 
            href="https://drive.google.com/file/d/19jP0bkKtFwY4UcMq1dMxlblgVw7ii8pu/view?usp=sharing" 
            className="bg-primary mt-8 sm:mt-12 lg:mt-16 z-20 text-background px-4 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg hover:bg-primary/95 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}