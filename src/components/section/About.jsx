import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  // Global toggle state (works for any section)
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (title) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Bootstrap",
    "TailwindCSS",
    "React.js",
    "React Router",
    "Redux",
    "Context API",
    "useReducer",
    "Styled-Components (CSS-in-JS)",
    "Responsive Design (Grid & Flexbox)",
    "Component-Driven Architecture",
    "Firebase Integration"
  ];

  const softSkills = [
    "Adaptability",
    "Teamwork",
    "Flexibility",
    "Communication",
    "Problem-solving",
    "Creativity",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "RESTful API Design",
    "MVC Architecture",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "JWT Authentication",
    "Role-Based Access Control (RBAC)",
    "Bcrypt",
    "API Rate Limiting",
    "CORS & Helmet",
    "Third-party API Integration",
    "Paystack Integration",
    "WebSockets",
    "Docker",
    "CI/CD (GitHub Actions)",
    "Render Deployment",
    "Jest",
    "Redis Caching"
  ];

  return (
    <section
      id="about"
      className="
        min-h-screen
        flex items-center justify-center
        py-16 md:py-24
        px-4 sm:px-6 lg:px-8
        bg-gradient-to-b from-[#0A0D14] via-[#0A0D14]/90 to-[#07090F]
      "
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">

          <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12 gradient-text">
            About Me
          </h2>

          <div className="
            rounded-2xl 
            p-8 md:p-12 
            backdrop-blur-xl 
            bg-white/5 
            border border-white/10 
            shadow-lg 
            hover:shadow-2xl 
            transition-all 
            duration-300
          ">

            <p className="text-gray-300 leading-relaxed mb-10 text-base md:text-lg">
              I’m a passionate software developer focused on creating
              scalable, user-friendly web applications. I love building clean
              interfaces, solving complex problems, and collaborating with
              teams to bring digital products to life.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {[
                { title: "Frontend", list: frontendSkills },
                { title: "Soft Skills", list: softSkills },
                { title: "Backend", list: backendSkills },
              ].map((group, index) => {

                const isExpanded = expandedSections[group.title];
                const skillsToShow = !isExpanded
                  ? group.list.slice(0, 5)
                  : group.list;

                return (
                  <div
                    key={index}
                    className="
                      rounded-xl 
                      p-6 
                      bg-white/5 
                      border border-white/10
                      backdrop-blur-md
                      hover:-translate-y-1 
                      transition-all 
                      duration-300
                    "
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">
                      {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {skillsToShow.map((item, idx) => (
                        <span
                          key={idx}
                          className="
                            bg-blue-500/10 
                            text-blue-400 
                            py-1 px-3 
                            rounded-full 
                            text-xs sm:text-sm 
                            hover:bg-blue-500/20 
                            transition
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {group.list.length > 5 && (
                      <button
                        onClick={() => toggleSection(group.title)}
                        className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition"
                      >
                        {isExpanded ? "Show Less" : "+ More"}
                      </button>
                    )}

                  </div>
                );
              })}

            </div>

            {/* Education & Experience stays untouched */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">

              <div className="
                p-6
                rounded-xl
                bg-white/5 
                border border-white/10 
                backdrop-blur-md 
                hover:-translate-y-1 
                transition-all
              ">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">
                  📚 Education
                </h3>
                <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
                  <li>
                    <strong className="text-gray-100">Frontend Development</strong> — OTS Innovation
                  </li>
                  <li>
                    Relevant Courses: Data Structures, Web Development, Version Control, Hosting
                  </li>
                </ul>
              </div>

              <div className="
                p-6 
                rounded-xl 
                bg-white/5 
                border border-white/10 
                backdrop-blur-md
                hover:-translate-y-1 
                transition-all
              ">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">
                  💼 Experience
                </h3>
                <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                  <div>
                    <h4 className="font-semibold text-gray-100">
                      Software Engineer — Skyline ICT Consult
                    </h4>
                    <p>
                      Built payment templates and integrated backend logic for an LMS platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100">
                      Intern — Swift Moove
                    </h4>
                    <p>
                      Assisted in building frontend UI for major product modules.
                    </p>
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