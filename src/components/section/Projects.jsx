import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import DetailOverlay from "../DetailOverlay";

// Detail panel variants for the sliding effect
const panelVariants = {
    // Desktop: slides in from the right edge
    hidden: { x: "100%", opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { 
            type: "spring", 
            stiffness: 150, 
            damping: 20, 
            delayChildren: 0.1 
        } 
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
};

// Data remains the same, ensure projects have a longDesc field for detail view
// ... 

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [openProject, setOpenProject] = useState(null); // Stores the full project object

    const filters = ["All", "Web", "React", "Django", "Mobile"];
    const projects = [
     {
        title: "ShopWave",
        desc: "Eccommerce Moble application",
        stack: ["React", "React Native", "Node Express js"],
        category: "Mobile",
        link: "https://shopwave-ztsa.onrender.com/login",
        github: "https://github.com/Emmanuel-x123",
        img: "https://res.cloudinary.com/dfoarz416/image/upload/shopwave-lg_oammpx.png",
        longDesc: "This is an On going project built with React native an Node for the backend, leveraged cloudinary inngest mongoose as some for the key dependencies."
      },
      {
        title: "Fast Medic",
        desc: "Quick access to medical solutions and health education.",
        stack: ["HTML", "CSS", "Javascript"],
        category: "Web",
        link: "https://emmanuel-x123.github.io/solo-project.gitub.io/",
        github: "https://github.com/Emmanuel-x123",
        img: "https://emmanuel-x123.github.io/solo-project.gitub.io/img/hero%20mg.jpg",
        longDesc: "This project provides users with rapid access to medical resources and preventative health information. It features a modern, responsive design for accessibility on all devices."
      },
      // ... include the rest of your project data with longDesc ...
      {
        title: "Swift Moove",
        desc: "Financial platform with portfolio management tools.",
        stack: ["HTML", "CSS", "Javascript"],
        category: "Web",
        link: "https://emmanuel-x123.github.io/Swift-moove/",
        github: "https://github.com/Emmanuel-x123",
        img: "https://emmanuel-x123.github.io/Swift-moove/logo.jpg",
        longDesc: "A comprehensive financial platform allowing users to track investments, analyze market trends, and manage personal portfolios with secure, real-time data."
      },
      {
        title: "Swift Pay",
        desc: "Secure online banking application.",
        stack: ["HTML", "CSS", "Javascript", "Ajax", "Django"],
        category: "Django",
        link: null,
        github: "https://github.com/Emmanuel-x123/SwiftPay",
        img: "data:image/jpeg;base64,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",
        longDesc: "Built with Django, this is a secure, server-side rendered application focused on core online banking functionalities, ensuring reliable transaction processing and data protection."
      },
      {
        title: "Quotes Generator",
        desc: "Generate motivational quotes instantly.",
        stack: ["HTML", "CSS", "Javascript"],
        category: "Web",
        link: "https://emmanuel-x123.github.io/Quote-Generator/",
        github: "https://github.com/Emmanuel-x123",
        img: "https://t4.ftcdn.net/jpg/05/56/56/13/360_F_556561310_tyw1t2cdOulVCSrTooXNnCg1iqNTqNLh.jpg",
        longDesc: "A fun, client-side application that fetches and displays motivational quotes using an external API, showcasing API integration and asynchronous JavaScript handling."
      },
      {
        title: "Robot Friends",
        desc: "React app that filters robot names.",
        stack: ["React"],
        category: "React",
        link: "https://emmanuel-x123.github.io/Robot-friends/",
        github: "https://github.com/Emmanuel-x123",
        img: "data:image/jpeg;base64,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", 
        longDesc: "A classic React exercise demonstrating component state management, filtering, and passing props, using the robohash API to generate unique avatars."
      },
      {
        title: "IQbase",
        desc: "LMS platform where users take courses or teach.",
        stack: ["React"],
        category: "React",
        link: "https://iqbase.netlify.app/",
        github: "https://github.com/Emmanuel-x123",
        img: "data:image/jpeg;base64,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",
        longDesc: "A fully featured Learning Management System (LMS) built with React. It allows for user registration, course creation, enrollment, and progress tracking, using modern front-end state management."
      },
      {
        title: "ProNet",
        desc: "A property networking website.",
        stack: ["React", "node.js", "Express", "MongoDB"],
        category: "React",
        link: "https://pro-net-mu.vercel.app/",
        github: "https://github.com/Emmanuel-x123/Task-tracker",
        img: "https://pro-net-mu.vercel.app/pronet.png",
        longDesc: "A full-stack application (MERN stack) designed for real estate professionals to network, share leads, and manage properties in a collaborative online environment."
      },
    ];
  
    const filteredProjects =
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { 
                delay: i * 0.1, 
                type: "spring", 
                stiffness: 100,
                damping: 10,
            },
        }),
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    };

    return (
        <section id="projects" className="min-h-screen py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#090C13] via-[#0A0D14]/95 to-[#05070A]">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-12 text-white">
                        Featured Projects
                    </h2>
                    
                    {/* Filters */}
                    <div className="flex justify-center gap-3 mb-14 flex-wrap">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                aria-pressed={activeFilter === filter}
                                className={`
                                    px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md border 
                                    transition-all duration-300 ease-in-out
                                    ${
                                        activeFilter === filter
                                            ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30"
                                            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-blue-500/50"
                                    }
                                `}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        <AnimatePresence>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((p, i) => (
                                    <motion.div
                                        key={p.title}
                                        custom={i}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        whileHover={{ scale: 1.03, rotate: 1, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)" }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        //  Open the Detail Overlay on click
                                        onClick={() => setOpenProject(p)} 
                                        className="cursor-pointer"
                                    >
                                        <div className="h-full flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl transition-all duration-300">
                                            
                                            {/*  Card Image: Source of Transition */}
                                            <motion.img
                                                layoutId={`project-image-${p.title}`}
                                                src={p.img}
                                                alt={p.title}
                                                className="rounded-xl mb-4 w-full h-48 object-cover border border-white/5"
                                            />

                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {p.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm mb-4 flex-grow">{p.desc}</p>
                                            
                                            {/* ... rest of the card content ... */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {p.stack.map((tech) => (
                                                    <span key={tech} className="bg-blue-500/10 text-blue-400 px-3 py-1 text-xs rounded-full font-medium">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-4 mt-auto">
                                                {p.link && (
                                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors" onClick={(e) => e.stopPropagation()}>
                                                        <FaExternalLinkAlt className="text-xs" /> Live Demo
                                                    </a>
                                                )}
                                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 transition-colors" onClick={(e) => e.stopPropagation()}>
                                                        <FaGithub className="text-xs" /> GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 text-slate-400">
                                    No projects found for this category.
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </RevealOnScroll>
            
            {/* 2. THE STICKY DETAIL OVERLAY (Always rendered at the end) */}
            <AnimatePresence>
                {openProject && (
                    <DetailOverlay 
                        project={openProject} 
                        onClose={() => setOpenProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
};