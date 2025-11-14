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

  const softSkills = [
    "Adaptability",
    "Teamwork",
    "Flexibility",
    "Communication",
    "Problem-solving",
    "Creativity",
  ];

  const backendSkills = ["Python", "Django", "API Development", "C# .NET"];

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

          {/* Section Title */}
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12 gradient-text">
            About Me
          </h2>

          {/* Main Card */}
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

            {/* Intro */}
            <p className="text-gray-300 leading-relaxed mb-10 text-base md:text-lg">
              I’m a passionate software developer focused on creating
              scalable, user-friendly web applications. I love building clean
              interfaces, solving complex problems, and collaborating with
              teams to bring digital products to life.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Shared Card Style */}
              {[
                { title: "Frontend", list: frontendSkills },
                { title: "Soft Skills", list: softSkills },
                { title: "Backend", list: backendSkills },
              ].map((group, index) => (
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
                    {group.list.map((item, idx) => (
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
                </div>
              ))}

            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">

              {/* Education */}
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

              {/* Experience */}
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
