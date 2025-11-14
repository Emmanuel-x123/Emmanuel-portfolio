import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [previewProject, setPreviewProject] = useState(null);

  const filters = ["All", "Web", "React", "Django"];

  const projects = [
    {
      title: "Fast Medic",
      desc: "Quick access to medical solutions and health education.",
      stack: ["HTML", "CSS", "Javascript"],
      category: "Web",
      link: "https://emmanuel-x123.github.io/solo-project.gitub.io/",
      github: "https://github.com/Emmanuel-x123",
      img: "https://emmanuel-x123.github.io/solo-project.gitub.io/img/hero%20mg.jpg",
    },
    {
      title: "Swift Moove",
      desc: "Financial platform with portfolio management tools.",
      stack: ["HTML", "CSS", "Javascript"],
      category: "Web",
      link: "https://emmanuel-x123.github.io/Swift-moove/",
      github: "https://github.com/Emmanuel-x123",
      img: "https://emmanuel-x123.github.io/Swift-moove/logo.jpg",
    },
    {
      title: "Swift Pay",
      desc: "Secure online banking application.",
      stack: ["HTML", "CSS", "Javascript", "Ajax", "Django"],
      category: "Django",
      link: null,
      github: "https://github.com/Emmanuel-x123/SwiftPay",
      img: "https://via.placeholder.com/500?text=Swift+Pay",
    },
    {
      title: "Quotes Generator",
      desc: "Generate motivational quotes instantly.",
      stack: ["HTML", "CSS", "Javascript"],
      category: "Web",
      link: "https://emmanuel-x123.github.io/Quote-Generator/",
      github: "https://github.com/Emmanuel-x123",
      img: "https://t4.ftcdn.net/jpg/05/56/56/13/360_F_556561310_tyw1t2cdOulVCSrTooXNnCg1iqNTqNLh.jpg",
    },
    {
      title: "Robot Friends",
      desc: "React app that filters robot names.",
      stack: ["React"],
      category: "React",
      link: "https://emmanuel-x123.github.io/Robot-friends/",
      github: "https://github.com/Emmanuel-x123",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…", // shortened
    },
    {
      title: "IQbase",
      desc: "LMS platform where users take courses or teach.",
      stack: ["React"],
      category: "React",
      link: "https://iqbase.netlify.app/",
      github: "https://github.com/Emmanuel-x123",
      img: "data:image/svg+xml;base64,PHN2ZyB3aW…", // shortened
    },
    {
      title: "ProNet",
      desc: "A property networking website.",
      stack: ["React", "node.js", "Express", "MongoDB"],
      category: "React",
      link: "https://pro-net-mu.vercel.app/",
      github: "https://github.com/Emmanuel-x123/Task-tracker",
      img: "https://pro-net-mu.vercel.app/pronet.png",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="
        min-h-screen 
        py-16 md:py-24 
        px-6 
        bg-gradient-to-b
        from-[#090C13] via-[#0A0D14]/95 to-[#05070A]
      "
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2
            className="  text-center 
  text-4xl font-extrabold mb-12
   gradient-text"
          >
            Featured Projects
          </h2>

          {/* Filters */}
          <div className="flex justify-center gap-3 mb-14 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2 rounded-full text-sm backdrop-blur-md border 
                  transition-all duration-300
                  ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white border-blue-500 shadow-lg"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence>
              {filteredProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Tilt glareEnable glareColor="lightblue" scale={1.05}>
                    <div
                      className="
                        h-full 
                        p-6 
                        rounded-2xl 
                        backdrop-blur-xl 
                        bg-white/5 
                        border border-white/10 
                        shadow-lg 
                        hover:shadow-2xl 
                        transition-all 
                        cursor-pointer
                      "
                      onClick={() => setPreviewProject(p)}
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="rounded-xl mb-4 w-full h-48 object-cover"
                      />

                      <h3 className="text-xl font-bold text-white mb-2">
                        {p.title}
                      </h3>

                      <p className="text-slate-300 text-sm mb-4">{p.desc}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.stack.map((tech) => (
                          <span
                            key={tech}
                            className="
                              bg-blue-500/10 
                              text-blue-400 
                              px-3 
                              py-1 
                              text-xs 
                              rounded-full
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-auto">
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            className="text-blue-400 hover:text-blue-300 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo →
                          </a>
                        )}
                        <a
                          href={p.github}
                          target="_blank"
                          className="text-cyan-400 hover:text-cyan-300 text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub →
                        </a>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {previewProject && (
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setPreviewProject(null)}
              >
                <motion.div
                  className="
                    bg-[#0B0F17] 
                    rounded-2xl 
                    p-6 
                    max-w-lg 
                    w-full 
                    border border-white/10 
                    shadow-2xl 
                    relative
                  "
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {previewProject.title}
                  </h3>

                  <img
                    src={previewProject.img}
                    className="rounded-xl w-full mb-4"
                  />

                  <p className="text-slate-300 mb-6">{previewProject.desc}</p>

                  <div className="flex gap-4">
                    {previewProject.link && (
                      <a
                        href={previewProject.link}
                        target="_blank"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={previewProject.github}
                      target="_blank"
                      className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg"
                    >
                      GitHub
                    </a>
                  </div>

                  <button
                    onClick={() => setPreviewProject(null)}
                    className="absolute top-3 right-3 text-white text-2xl"
                  >
                    ✖
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </RevealOnScroll>
    </section>
  );
};
