import React from "react";
import { FaTruck, FaShippingFast, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaTruck className="w-7 h-7 text-green-600" />,
    title: "Fleet Services",
    desc: "Mazda, Hino, Bedford, Ten Wheelers",
  },
  {
    icon: <FaShippingFast className="w-7 h-7 text-green-600" />,
    title: "Container & Cargo",
    desc: "20 & 40 feet containers with lifters & cranes",
  },
  {
    icon: <FaBuilding className="w-7 h-7 text-yellow-600" />,
    title: "Corporate Clients",
    desc: "Government, NGOs, and private companies",
  },
  {
    icon: <FaTruck className="w-7 h-7 text-red-600" />,
    title: "Medicine Transport",
    desc: "Safe delivery for pharmaceutical companies",
  },
];

const AboutCompany = () => {
  return (
    <section
      id="about"
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
            Since 2006
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5">
            Mushtarka Mehmand Goods Transport
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Reliable, safe, and economical transport solutions across Pakistan,
            committed to long-term partnerships and customer satisfaction.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Our mission is to provide professional, secure, and cost-effective
              transport services. We support businesses and individuals in
              achieving their short, medium, and long-term logistics goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="p-3 bg-gray-100 rounded-xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/trucks.png"
              alt="Mushtarka Mehmand Transport Fleet"
              className="rounded-3xl shadow-2xl border border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500">Trusted by</p>
              <p className="font-bold text-gray-800">
                Government • NGOs • Corporates
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
