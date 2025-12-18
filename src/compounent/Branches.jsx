import React from "react";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const branches = [
  {
    city: "Islamabad (Head Office)",
    address: "Plot #350, New Sabzi Mandi, I/11-4, Islamabad",
    phone: "051-4442997",
    mobile: "0300-5751141",
    highlight: true,
  },
  {
    city: "Lahore Office",
    address: "Bahrooni - Akbari Gate, Lahore",
    phone: "042-37662797",
    mobile: "0300-9441197",
  },
  {
    city: "Peshawar Office",
    address: "Haji Camp, Peshawar",
    phone: "091-2263297",
    mobile: "0300-5908697",
  },
];

const Branches = () => {
  return (
    <section
      id="branches"
      className="relative py-28 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden"
    >
      {/* Background blur shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            Our Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Branch Offices
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reach out to our offices across Pakistan for reliable transport and
            logistics services.
          </p>
        </motion.div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white/80 backdrop-blur rounded-3xl p-8 shadow-md hover:shadow-2xl transition ${
                branch.highlight ? "ring-2 ring-green-500" : ""
              }`}
            >
              {branch.highlight && (
                <span className="absolute -top-3 left-6 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Head Office
                </span>
              )}

              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                {branch.city}
              </h3>

              <div className="space-y-4">
                <p className="flex items-start gap-3 text-gray-600">
                  <MapPin size={20} className="mt-1 text-green-600" />
                  <span>{branch.address}</span>
                </p>

                <p className="flex items-center gap-3 text-gray-600">
                  <Phone size={20} className="text-green-600" />
                  <span>{branch.phone}</span>
                </p>

                <p className="text-gray-600 ml-9">
                  <span className="font-medium">Mobile:</span> {branch.mobile}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
