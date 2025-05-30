import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed bg-clip-text text-transparent text-blue-200">
            Hi, I'm Emmanuel Okukusie.
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            I'm a front-end developer who loves creating clean, scalable web applications. My goal is to build solutions that offers both exceptional performance and a delightful user experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)]">
              View Projects
            </a>
            <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.2)] hover:bg-blue-500/10">
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

