export default function Break() {
  const items = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "Maintainable",
    "Responsive",
    "Usable",
    "Reliable",
    "Optimised"
  ];

  return (
    <div className="overflow-x-clip  mt-24 mb-16 ">
      <div className="relative py-3 ">
        {/* Dark metallic background */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/50 to-neutral-950"></div>

        {/* Dark metallic background */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10"></div>

        {/* Glossy bar highlight */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-white/20 to-transparent"></div>

        {/* Scrolling container */}
        <div className="flex whitespace-nowrap animate-scroll">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-6"
            >
              <span className="text-neutral-500 font-extrabold uppercase text-sm tracking-wide">
                {item}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                className="text-gray-300 rotate-12 opacity-80"
              >
                <path
                  fill="currentColor"
                  d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9"
                ></path>
              </svg>
            </div>
          ))}
        </div>
      </div>

 
    </div>
  );
}
