import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState("home");

  // Sticky body scroll lock when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Detect active section based on scroll
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element && element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
          setActive(sec);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#1E293B]/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-gray-300 hover:text-blue-400 transition"
          >
            E<span className="text-blue-500">RO</span>
          </a>

          {/* Hamburger icon */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-7 h-6 relative cursor-pointer z-40 md:hidden text-gray-200 text-3xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-gray-300 hover:text-white transition-colors 
                  ${active === link.id ? "text-white" : ""}
                `}
              >
                {link.label}

                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                  ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
