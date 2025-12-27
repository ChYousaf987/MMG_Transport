import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Government Departments",
    logo: "got.svg",
  },
  {
    name: "TEVTA Wood Working Centre",
    logo: "tevtta.png",
  },
  {
    name: "Mercy Corps",
    logo: "mc.jpg",
  },
  {
    name: "Helping Hand",
    logo: "hh.png",
  },
  {
    name: "Fouz International",
    logo: "fi.png",
  },
  {
    name: "Quantum Engineering",
    logo: "qe.png",
  },
  {
    name: "Sun Green Solar",
    logo: "sg.png",
  },
  {
    name: "WellCare Pharma",
    logo: "wh.png",
  },
  {
    name: "Abbott Laboratories",
    logo: "al.png",
  },
  {
    name: "DS Pharma",
    logo: "ds.png",
  },
];

const Clients = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
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
            Trusted Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Valued Clients
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We proudly serve government departments, international NGOs, and
            leading private companies across Pakistan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -12 }}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 text-center shadow-lg"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 mx-auto mb-4 object-contain"
              />

              <p className="font-semibold text-gray-800 hover:text-green-600 transition">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
