import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Project 1 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col h-full">
              <h3 className="text-gray-800 dark:text-gray-500 text-lg sm:text-xl font-bold mb-2">Fast Medic</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                Web platform providing quick access to authentic medical solutions and health education, empowering users to make informed decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://emmanuel-x123.github.io/solo-project.gitub.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors mt-auto inline-flex items-center"
              >
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col h-full">
              <h3 className="text-gray-800 dark:text-gray-500 text-lg sm:text-xl font-bold mb-2">Swift Moove</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                Financial platform with intuitive portfolio management tools and expert-led courses for informed investment decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://emmanuel-x123.github.io/Swift-moove/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors mt-auto inline-flex items-center"
              >
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col h-full">
              <h3 className="text-gray-800 dark:text-gray-500 text-lg sm:text-xl font-bold mb-2">Swift Pay</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                Secure online banking app for money transfers, bill payments, and financial management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript", "Ajax", "Django"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/Emmanuel-x123/SwiftPay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors mt-auto inline-flex items-center"
              >
                GitHub →
              </a>
            </div>

            {/* Project 4 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col h-full">
              <h3 className="text-gray-800 dark:text-gray-500 text-lg sm:text-xl font-bold mb-2">Quotes Generator</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                Discover inspiring words with our library of motivational quotes, perfect for sparking creativity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://emmanuel-x123.github.io/Quote-Generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors mt-auto inline-flex items-center"
              >
                View Project →
              </a>
            </div>

            {/* Project 5 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col h-full">
              <h3 className="text-gray-800 dark:text-gray-500 text-lg sm:text-xl font-bold mb-2">Robot Friends</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                React app that filters through and displays robot names when searched.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://emmanuel-x123.github.io/Robot-friends/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors mt-auto inline-flex items-center"
              >
                View Project →
              </a>
            </div>

            {/* Project 6 */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col h-full">
              <h3 className="text-gray-800 dark:text-gray-500 text-lg sm:text-xl font-bold mb-2">IQbase</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                Learning management system where users can take courses and become educators.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://iqbase.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors mt-auto inline-flex items-center"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};