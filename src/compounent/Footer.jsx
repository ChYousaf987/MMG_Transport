import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Branches", href: "#branches" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Company Info */}
        <div className="space-y-4">
          <img
            src="/logos.png"
            className="w-28 filter brightness-0 invert"
            alt="Logo"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Mushtarka Mehmand Goods Transport Company , providing reliable
            logistics services since 2006.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-white hover:underline transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white mb-4">Contact Info</h4>
          <p className="text-sm">
            <strong>Islamabad:</strong> Plot #350, New Sabzi Mandi, I/11-4
          </p>
          <p className="text-sm">☎ 051-4442997</p>
          <p className="text-sm">📱 0300-5751141</p>
          <p className="text-sm mt-2">✉ mahmandtransport@gmail.com</p>
        </div>

        {/* Branch Offices */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white mb-4">Branch Offices</h4>
          <p className="text-sm">
            <strong>Islamabad:</strong> New Sabzi Mandi
          </p>
          <p className="text-sm">
            <strong>Lahore:</strong>Bahrooni - Akbari Gait, Lahore,
              Phone: 042-37662797, Cell: 0300-9441197
          </p>
          <p className="text-sm">
            <strong>Peshawar:</strong> Haji Camp Peshawar, Phone:
              091-2263297, Cell: 0300-5908697
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MMG Transport. <Link to="https://codesvista.com/">All rights reserved By Codesvista.</Link>
      </div>
    </footer>
  );
};

export default Footer;
