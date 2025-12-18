import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const destinations = [
  "Islamabad",
  "Lahore",
  "Peshawar",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Karachi",
  "Nationwide Pakistan",
];

const Destinations = () => {
  return (
    <section
      id="destinations"
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
            Coverage Area
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide reliable and timely goods transportation services across
            major cities and nationwide coverage throughout Pakistan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {destinations.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group flex items-center justify-center gap-3 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="p-2 rounded-xl bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white transition">
                <MapPin size={20} />
              </div>
              <span className="font-semibold text-gray-800">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
