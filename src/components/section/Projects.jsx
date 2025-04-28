import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center 
    justify-center py-20">
        <RevealOnScroll>
         <div className="max-w-5xl max-auto px-4">
           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured projects
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-gray/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-gray-400 text-xl font-bold mb-2">Fast Medic</h3>
                    <p className="text-gray-400">Fast Medic is a web-based platform providing quick access to authentic medical solutions and health education, empowering users to make informed decisions and combat health misinformation.</p>
                    <div>
                        {["HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span
                                 key={key}
                                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                 >
                                  {tech}
                             </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://emmanuel-x123.github.io/solo-project.gitub.io/"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-gray/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-gray-400 text-xl font-bold mb-2">Swift Moove</h3>
                    <p className="text-gray-400">Swift Moove is a web-based platform that empowers users to take control of their finances with intuitive portfolio management tools and expert-led courses, helping them make informed investment decisions and achieve financial success.</p>
                    <div>
                        {["HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span
                                 key={key}
                                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                 >
                                  {tech}
                             </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://emmanuel-x123.github.io/Swift-moove/"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-gray/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-gray-400 text-xl font-bold mb-2">Swift Pay</h3>
                    <p className="text-gray-400">Swift Pay is a secure online banking app that lets you transfer money, pay bills, and manage your finances with ease. Fast, convenient, and reliable, Swift Pay puts you in control of your money, anytime, anywhere.</p>
                    <div>
                        {["HTML", "CSS", "Javascript", "Ajax", "Django"].map((tech, key) => (
                            <span
                                 key={key}
                                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                 >
                                  {tech}
                             </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Emmanuel-x123/SwiftPay"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">GitHub </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-gray/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-gray-400 text-xl font-bold mb-2">Quotes generator</h3>
                    <p className="text-gray-400">Discover inspiring words with our Quote Generator! Get instant access to a vast library of motivational quotes, perfect for sparking creativity, focus, or reflection. Generate quotes by topic, author, or randomly – and share your favorites with others.</p>
                    <div>
                        {["HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span
                                 key={key}
                                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                 >
                                  {tech}
                             </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://emmanuel-x123.github.io/Quote-Generator/"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-gray/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-gray-400 text-xl font-bold mb-2">Robot Friends</h3>
                    <p className="text-gray-400">Robo friends is just a simple React app that filters through and displays the name of the robot when it is searched </p>
                    <div>
                        {["React",].map((tech, key) => (
                            <span
                                 key={key}
                                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                 >
                                  {tech}
                             </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://emmanuel-x123.github.io/Robot-friends/"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                    </div>
                </div>
           </div>
         </div>
         </RevealOnScroll>
    </section>
}