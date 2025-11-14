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
        fixed inset-0 
        z-40 
        bg-[#0F172A]/80   /* iOS fix: needs solid color behind blur */
        backdrop-blur-2xl 
        flex flex-col items-center justify-center

        transform-gpu will-change-transform will-change-opacity 
        transition-all duration-300 ease-out

        ${menuOpen ? "opacity-100 h-[100dvh] pointer-events-auto" 
                   : "opacity-0 h-0 pointer-events-none"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="
          absolute top-6 right-6 
          text-white text-4xl 
          transform-gpu will-change-transform
        "
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      {links.map((link, index) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMenuOpen(false)}
          className={`
            text-3xl font-semibold text-white my-4 
            transform-gpu will-change-transform will-change-opacity
            transition-all duration-500

            ${menuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-6"}
          `}
          style={{
            transitionDelay: `${index * 90 + 100}ms`
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
