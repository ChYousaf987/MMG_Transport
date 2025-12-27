import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Destinations", href: "#destinations" },
    { name: "Branches", href: "#branches" },
  ];

  // Scrollspy 
 useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + 120; // offset for sticky navbar
    for (const link of links) {
      const section = document.querySelector(link.href);
      if (section) {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.name);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initial check

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleLinkClick = (name) => {
    setActive(name);
    setOpen(false);
  };

  return (
    <nav className="w-full bg-green-50 shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img src="/logos.png" className="w-24" alt="Logo" />
        </div>

        <ul className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <HashLink
                smooth
                to={`/${link.href}`}
                onClick={() => handleLinkClick(link.name)}
                className={`text-gray-700 border rounded-3xl px-3 py-2 font-medium transition-all duration-300 hover:scale-110 ${
                  active === link.name
                    ? "bg-[#01b154] text-white"
                    : "hover:bg-[#01b154] hover:text-white"
                }`}
              >
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div>
          <button className="border hidden md:flex bg-[#019546] text-white hover:bg-green-700 px-7 py-3 rounded-3xl hover:scale-110 transition-all duration-500 font-semibold">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <HashLink
                  smooth
                  to={`/${link.href}`}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block text-gray-700 font-medium transition-all duration-300 ${
                    active === link.name
                      ? "bg-green-100 text-green-700 rounded-3xl px-3 py-2"
                      : "hover:bg-green-50 hover:text-green-600 rounded-3xl px-3 py-2"
                  }`}
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
