export default function Projects() {
  return (
    <div className="py-12 md:py-24 px-4 md:px-0">
      <h3 className="text-lg md:text-xl font-bold text-center mt-8 md:mt-16 bg-secondary bg-clip-text text-transparent">
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
        {/* Project 1 - Hotel Booking */}
        <div className="w-full md:w-3/5 mx-auto sticky top-16 min-h-[400px] md:h-[500px] bg-slate-800 border-2 md:border-3 border-white/30 rounded-2xl md:rounded-4xl">
          <div className="h-full w-full relative flex flex-col md:flex-row p-6 md:ps-12 md:pt-12">
            <div className="absolute inset-0 -z-10 opacity-5 HeroSection rounded-2xl md:rounded-4xl"></div>

            <div className="w-full md:w-full text-slate-100">
              <h3 className="text-base md:text-lg font-bold bg-secondary bg-clip-text text-transparent">
                MERN STACK PROJECT
              </h3>
              <h1 className="text-2xl md:text-4xl font-extrabold mt-2 md:mt-4">
                Hotel Booking Site
              </h1>
              <hr className="text-white/50 my-4 md:my-8" />
              <div className="my-4 mb-8 md:mb-16">
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    User authentication with roles for admin and users.
                  </h6>
                </div>
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    Room listing, booking, and image upload via Cloudinary.
                  </h6>
                </div>
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    Built with Node.js, Express, MongoDB, and EJS.
                  </h6>
                </div>
              </div>
              <a 
                href="https://hotelbooking-phi.vercel.app/" 
                className="px-4 md:px-6 py-2 text-base md:text-xl bg-text text-slate-900 rounded-lg font-sans inline-block"
              >
                View Live Site
              </a>
            </div>
            <div className="w-full h-32 md:h-full md:ps-8 pt-4 md:pt-12">
              <div className="w-full h-full bg-green-200 rounded-tl-2xl md:rounded-tl-4xl overflow-hidden project1">
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 - Job Portal */}
        <div className="w-full md:w-3/5 mx-auto sticky top-24 min-h-[400px] md:h-[500px] bg-slate-800 border-2 md:border-3 border-white/30 rounded-2xl md:rounded-4xl">
          <div className="h-full w-full relative flex flex-col md:flex-row p-6 md:ps-12 md:pt-12">
            <div className="absolute inset-0 -z-10 opacity-5 HeroSection rounded-2xl md:rounded-4xl"></div>

            <div className="w-full md:w-full text-slate-100">
              <h3 className="text-base md:text-lg font-bold bg-secondary bg-clip-text text-transparent">
                FULL STACK PROJECT
              </h3>
              <h1 className="text-2xl md:text-4xl font-extrabold mt-2 md:mt-4">
                Job Portal
              </h1>
              <hr className="text-white/50 my-4 md:my-8" />
              <div className="my-4 mb-8 md:mb-16">
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    Role-based dashboards for recruiters and job seekers
                  </h6>
                </div>
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    Features job posting, applications, and search filters
                  </h6>
                </div>
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    Deployed using Vercel.
                  </h6>
                </div>
              </div>
              <a 
                href="https://jobhunt-eight.vercel.app/" 
                className="px-4 md:px-6 py-2 text-base md:text-xl bg-text text-slate-900 rounded-lg font-sans inline-block"
              >
                View Live Site
              </a>
            </div>
            <div className="w-full h-32 md:h-full md:ps-8 pt-4 md:pt-12">
              <div className="w-full h-full bg-green-200 rounded-tl-2xl md:rounded-tl-4xl overflow-hidden project2">
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 - NoteBot.ai */}
        <div className="w-full md:w-3/5 mx-auto sticky top-32 min-h-[400px] md:h-[500px] bg-slate-800 border-2 md:border-3 border-white/30 rounded-2xl md:rounded-4xl">
          <div className="h-full w-full relative flex flex-col md:flex-row p-6 md:ps-12 md:pt-12">
            <div className="absolute inset-0 -z-10 opacity-5 HeroSection rounded-2xl md:rounded-4xl"></div>

            <div className="w-full md:w-full text-slate-100">
              <h3 className="text-base md:text-lg font-bold bg-secondary bg-clip-text text-transparent">
                PYTHON + REACT
              </h3>
              <h1 className="text-2xl md:text-4xl font-extrabold mt-2 md:mt-4">
                NoteBot.ai
              </h1>
              <hr className="text-white/50 my-4 md:my-8" />
              <div className="my-4 mb-8 md:mb-16">
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    AI-powered note generation from YouTube and PDFs
                  </h6>
                </div>
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    Deployed full-stack app for students and professionals
                  </h6>
                </div>
                <div className="text-slate-50/50 font-sans text-sm md:text-lg flex my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4 md:size-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
                    ></path>
                  </svg>
                  <h6 className="ps-2">
                    Uses NLP to summarize and extract key content
                  </h6>
                </div>
              </div>
              <a 
                href="https://notes-bot-nine.vercel.app/" 
                className="px-4 md:px-6 py-2 text-base md:text-xl bg-text text-slate-900 rounded-lg font-sans inline-block"
              >
                View Live Site
              </a>
            </div>
            <div className="w-full h-32 md:h-full md:ps-8 pt-4 md:pt-12">
              <div className="w-full h-full bg-green-200 rounded-tl-2xl md:rounded-tl-4xl overflow-hidden project3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}