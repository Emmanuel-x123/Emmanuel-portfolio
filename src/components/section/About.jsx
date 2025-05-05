import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "TailwindCSS",
    "React",
  ];
  const backendSkills = [
    "Python",
    "Django",
    "Javascript",
    "RESTful APIs",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          
          <div className="rounded-xl p-6 md:p-8 border-gray-200/10 border hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-500 mb-6 text-sm sm:text-base md:text-lg">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-400">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Backend Skills */}
              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-400">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Education & Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-8">
              {/* Education */}
              <div className="p-4 sm:p-6 rounded-xl border-blue-500/10 border hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-400">&#128218; Education</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Frontend Dev</strong> - OTS INNOVATION
                  </li>
                  <li>
                    Relevant Courses: Data structures, Web development, Version control and Hosting
                  </li>
                </ul>
              </div>
              
              {/* Experience */}
              <div className="p-4 sm:p-6 rounded-xl border-blue-500/10 border hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-400">&#x1F4BC; Work Experience</h3>
                <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                  <div>
                    <h4 className="font-semibold">Software Engineer at Skyline ICT Consult</h4>
                    <p>Developed payment template and consumed backend logic in an LMS project</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Intern at Swift Moove</h4>
                    <p>Assisted in building the frontend for web application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};