import React from "react";
import {
  FaTruck,
  FaBoxOpen,
  FaShippingFast,
  FaTruckMoving,
  FaWarehouse,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { title: "Pickup", desc: "Up to 500 KG", icon: <FaBoxOpen /> },
  { title: "Shahzore", desc: "2 Ton Capacity", icon: <FaTruck /> },
  { title: "Mazda", desc: "5 Ton Capacity", icon: <FaTruckMoving /> },
  { title: "Hino", desc: "10 Ton Capacity", icon: <FaTruckMoving /> },
  { title: "Ten Wheeler", desc: "16 Ton Capacity", icon: <FaTruckMoving /> },
  { title: "Bedford Truck", desc: "9 Ton Capacity", icon: <FaTruck /> },
  {
    title: "20 Feet Container",
    desc: "Heavy Cargo Transport",
    icon: <FaShippingFast />,
  },
  {
    title: "40 Feet Container",
    desc: "Industrial & Commercial Cargo",
    icon: <FaShippingFast />,
  },
  { title: "Lifter & Crane", desc: "Safe Heavy Loading", icon: <FaTools /> },
  {
    title: "Loading / Unloading",
    desc: "Professional Labor Support",
    icon: <FaWarehouse />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
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
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Transport Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete logistics and transportation solutions with reliable fleet
            options for businesses and individuals across Pakistan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-white/80 backdrop-blur rounded-3xl p-8 shadow-md hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 text-green-700 mb-6 group-hover:bg-green-600 group-hover:text-white transition">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
