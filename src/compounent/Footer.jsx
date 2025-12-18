import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">MMG Transport</h3>
          <p className="text-sm">
            Mushtarka Mehmand Goods Transport Company, providing reliable
            logistics services since 2006.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Fleet</li>
            <li>Branches</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Info</h4>
          <p className="text-sm">
            <strong>Islamabad:</strong> Plot #350, New Sabzi Mandi, I/11-4
          </p>
          <p className="text-sm">Phone: 051-4442997</p>
          <p className="text-sm">Cell: 0300-5751141</p>
          <p className="text-sm mt-2">Email: mahmandtransport@gmail.com</p>
        </div>

        {/* Branch Offices */}
        <div>
          <h4 className="font-semibold text-white mb-4">Branch Offices</h4>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Islamabad Office</strong>
            </li>
            <li>
              <strong>Lahore Office:</strong> Bahrooni - Akbari Gait, Lahore,
              Phone: 042-37662797, Cell: 0300-9441197
            </li>
            <li>
              <strong>Peshawar Office:</strong> Haji Camp Peshawar, Phone:
              091-2263297, Cell: 0300-5908697
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MMG Transport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
