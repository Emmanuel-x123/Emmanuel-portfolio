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
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-gray/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-500 mb-6">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-400">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-400">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
              <div className="p-6 rounded-xl border-blue/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-gray-400 ">&#128218; Education</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li className="text-gray-400">
                          <strong>Frontend Dev</strong>-OTS INNOVATION.
                        </li>
                        <li className="text-gray-400">
                          Relevant Courses: Data structures,
                          Web development, Version control and Hosting.
                        </li>
                    </ul>
              </div>
              <div className="p-6 rounded-xl border-blue/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-gray-400 ">&#x1F4BC; Work experience</h3>
                    <div className="space-y-4 text-gray-400">
                        <div >
                            <h4 className="font-semibold">Software Engineer at Skyline ict cnslt</h4>
                            <p>Develop payment template and consumed backend logic in an LMS project</p>
                        </div>

                        <div >
                            <h4 className="font-semibold">intern at Swift moove</h4>
                            <p>Assisted in building the frontend for web application</p>
                        </div>
                    </div>
              </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
  };
  