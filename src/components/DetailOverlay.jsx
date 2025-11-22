import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
const DetailOverlay = ({ project, onClose }) => {
    
    // Panel animation variants (adjust for mobile to slide up from bottom if desired)
    const panelVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { type: "spring", stiffness: 150, damping: 20 } 
        },
        exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
    };

    // Backdrop fade-in
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } },
        exit: { opacity: 0, transition: { delay: 0.1 } }, // Fade out before panel slides away
    };

    return (
        // Backdrop: Fixed to fill the screen
        <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 overflow-hidden"
            // Desktop: Transparent backdrop. Mobile: Dark overlay for focus.
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} 
        >
            
            {/* Click the backdrop to close */}
            <div className="absolute inset-0" onClick={onClose} /> 

            {/* 🔑 THE SLIDING DETAIL PANEL */}
            <motion.div
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                // Tailwind classes for the fixed, sliding panel
                className="
                    fixed top-0 right-0 
                    h-full 
                    w-full max-w-lg 
                    bg-[#0B0F17] 
                    shadow-2xl 
                    p-6 md:p-8 
                    overflow-y-auto 
                    border-l border-white/10
                "
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking panel content
            >
                <button
                    onClick={onClose}
                    aria-label="Close Project Details"
                    className="absolute top-4 left-4 text-white hover:text-red-400 transition-colors text-2xl"
                >
                    <FaTimes />
                </button>

                <h1 className="text-3xl font-bold text-white mb-6 pt-10">
                    {project.title}
                </h1>

                {/* 🔑 Image: Target of Transition - Must match layoutId and be a motion.img */}
                <motion.img
                    layoutId={`project-image-${project.title}`}
                    src={project.img}
                    alt={project.title}
                    className="rounded-xl w-full max-h-64 object-cover mb-6 border border-white/10"
                />

                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {project.longDesc}
                </p>

                <h3 className="text-xl font-bold text-blue-400 mb-3">
                    Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                        <span key={tech} className="bg-blue-500/10 text-blue-400 px-3 py-1 text-xs rounded-full font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center gap-2">
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center gap-2">
                        <FaGithub /> GitHub
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default DetailOverlay; // You should export this component