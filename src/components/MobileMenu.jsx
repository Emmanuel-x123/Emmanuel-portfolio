export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`
        fixed inset-0 z-40 bg-[#0F172A]/90 backdrop-blur-xl
        flex flex-col items-center justify-center
        transition-opacity duration-200 ease-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl"
      >
        &times;
      </button>

      {/* Links */}
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMenuOpen(false)}
          className={`
            text-3xl font-semibold text-white my-4
            transition-transform duration-200
            ${menuOpen ? "scale-100" : "scale-95"}
          `}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
