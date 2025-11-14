import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center 
        px-4 sm:px-6 lg:px-8 overflow-hidden
        bg-gradient-to-b from-[#0A0D14] via-[#0F172A] to-[#0A0D14]
      "
    >

      {/* Soft Glow Background (iOS-friendly) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-[120px]" />
      </div>

      <RevealOnScroll>
        <div className="relative text-center z-10 max-w-3xl mx-auto">
          
          {/* Name / Title */}
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-bold mb-6 leading-tight
            bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent
          ">
            Hi, I'm Emmanuel Okukusie.
          </h1>

          {/* Subtext */}
          <p className="
            text-gray-400 text-base sm:text-lg md:text-xl 
            mb-10 mx-auto max-w-lg
          ">
            I'm a front-end developer focused on crafting clean and scalable web
            applications — blending performance, usability, and delightful UI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            {/* Projects Button */}
            <a
              href="#projects"
              className="
                relative bg-blue-600 text-white py-3 px-7 rounded-lg font-medium
                shadow-lg shadow-blue-600/20
                transition-all duration-200 hover:-translate-y-1 hover:shadow-blue-600/40
              "
            >
              View Projects
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="
                relative border border-blue-400/40 text-blue-300
                py-3 px-7 rounded-lg font-medium
                transition-all duration-200
                hover:bg-blue-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20
              "
            >
              Contact Me
            </a>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
