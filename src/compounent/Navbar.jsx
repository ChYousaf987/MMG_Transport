import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleets" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Destinations", href: "#destinations" },
    { name: "Branches", href: "#branches" },
  ];

  // Scrollspy logic
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean); // ignore undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = links.find((l) => l.href === `#${entry.target.id}`);
            if (link) setActive(link.name);
          }
        });
      },
      { threshold: 0.5 } // 50% of section visible
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
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
          <img src="/logos.png" className="w-24" alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`text-gray-700 border rounded-3xl px-3 py-2 font-medium transition-all duration-300 hover:scale-110 ${
                  active === link.name
                    ? "bg-[#01b154] text-white"
                    : "hover:bg-[#01b154] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div>
          <button className="border hidden md:flex bg-[#019546] text-white hover:bg-green-700 px-7 py-3 rounded-3xl hover:scale-110 transition-all duration-500 font-semibold">
            Contact
          </button>
        </div>

        {/* Mobile Button */}
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
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block text-gray-700 font-medium transition-all duration-300 ${
                    active === link.name
                      ? "bg-green-100 text-green-700 rounded-3xl px-3 py-2"
                      : "hover:bg-green-50 hover:text-green-600 rounded-3xl px-3 py-2"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
