
export default function Hero() {
  return (
    <div className="flex items-center justify-center h-96 md:h-screen w-full text-white overflow-hidden relative px-4 sm:px-6 lg:px-0">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>

      {/* PARALLAX GLOW LAYERS */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-[20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[180px]"
          style={{ transform: "translateZ(-20px)" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-[15%] w-[500px] h-[500px] bg-white/3 rounded-full blur-[160px]"
          style={{ transform: "translateZ(-40px)" }}
        ></div>
      </div>

      {/* FOREGROUND */}
      <div className="flex items-center justify-center lg:w-full bg-black/5 backdrop-blur-sm relative z-0">

        <div className="flex flex-col items-center justify-center h-fit w-fit relative transition-all duration-1000 rounded-2xl p-4 sm:p-8 lg:p-24">

          {/* HEADING */}
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-1">
            <span className="absolute inset-0 blur-2xl bg-white/5"></span>
            <span className="relative z-10 text-white/95 ">
              Hey, I'm <span className={`text-white transition-all duration-1000`}>Prashant Patil</span>
            </span>
          </h1>

          {/* DARK METALLIC ACCENT BAR */}
          <div className="w-40 h-[3px] mt-3 mb-4 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.15)]"></div>

          {/* SUBHEADING */}
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Full Stack Developer
          </span>

          {/* PARAGRAPH */}
          <p className="text-sm sm:text-base lg:text-lg mb-8 text-center text-white/60 max-w-xl leading-relaxed">
            I build clean, modern web applications with a polished creative vision.
            
            Turning ideas into interactive reality.
          </p>

          {/* BUTTON */}
        </div>
      </div>
        {/* SOCIALS */}
          <div className="absolute bottom-24 flex items-center gap-4 sm:gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/prashant1177/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prashantjpatil49/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:prashantjpatil49@example.com"
              className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/19jP0bkKtFwY4UcMq1dMxlblgVw7ii8pu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </a>
          </div>
    </div>
  );
}
