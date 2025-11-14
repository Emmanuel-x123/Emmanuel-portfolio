export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[#0F172A]/90 backdrop-blur-xl 
      flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen ? "h-screen opacity-100" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Close Btn */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Links */}
      {links.map((link, index) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white my-4 transition-all duration-500
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{ transitionDelay: `${index * 80}ms` }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
