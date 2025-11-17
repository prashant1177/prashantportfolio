export default function Contact() {
  return (
    <div className="py-24 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-5xl flex flex-col items-center gap-10 p-10 bg-primary rounded-4xl">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-background text-center">
          Connect with me
        </h1>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prashantjpatil49/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-2xl flex items-center justify-center hover:bg-muted transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 md:w-8 md:h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.5v1.65h.05c.49-.94 1.7-1.94 3.5-1.94 3.74 0 4.43 2.46 4.43 5.67V20h-4v-6.67c0-1.6-.03-3.67-2.24-3.67-2.24 0-2.59 1.75-2.59 3.55V20h-4V8z" />
              </svg>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/prashant1177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-2xl flex items-center justify-center hover:bg-muted transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 md:w-8 md:h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.85 10.93.57.11.77-.25.77-.55 0-.27-.01-1.17-.02-2.12-3.19.69-3.87-1.38-3.87-1.38-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.66 1.23 3.31.94.1-.73.39-1.23.7-1.51-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.17-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.24 2.75.12 3.04.73.81 1.17 1.84 1.17 3.1 0 4.42-2.7 5.39-5.26 5.67.4.35.75 1.04.75 2.1 0 1.52-.01 2.75-.01 3.13 0 .3.2.66.78.55A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </div>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/prashu1177"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-2xl flex items-center justify-center hover:bg-muted transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 md:w-8 md:h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.26 5.24c-.77.35-1.6.59-2.47.7a4.32 4.32 0 0 0 1.88-2.38c-.83.5-1.75.86-2.73 1.06A4.28 4.28 0 0 0 12 8.04a12.13 12.13 0 0 1-8.8-4.46A4.28 4.28 0 0 0 4.1 9.4a4.27 4.27 0 0 1-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.45.12-.92.19-1.4.19-.34 0-.67-.03-.99-.1a4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.38-.01-.57a8.68 8.68 0 0 0 2.13-2.21z" />
              </svg>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:prashantjpatil@gmail.com">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-2xl flex items-center justify-center hover:bg-muted transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 md:w-8 md:h-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6h16l-8 5z" />
              </svg>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}
