import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fleetData = [
  { name: "Pickup", slug: "pickup", img: "/shazor.png", cap: "500 KG" },
  { name: "Shahzore", slug: "shahzore", img: "/shahzor.png", cap: "2 Ton" },
  { name: "Mazda", slug: "mazda", img: "/mazda.png", cap: "5 Ton" },
  { name: "Ten Wheeler", slug: "ten-wheeler", img: "/ten-wheeler.png", cap: "16 Ton" },
  { name: "Bedford Truck", slug: "bedford-truck", img: "/bedforde.png", cap: "9 Ton" },
  { name: "20 Feet Container", slug: "20-feet-container", img: "/container.png", cap: "Heavy Cargo" },
  { name: "Crane", slug: "lifter-and-crane", img: "/crane.png", cap: "Loading & Crane" },
  { name: "Lifter", slug: "loading-unloading", img: "/lifter.png", cap: "Loading & Lifting" },
];


const Fleet = () => {
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
            Our Assets
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Transport Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A diverse and well-maintained fleet to ensure safe, efficient, and on-time transportation across Pakistan.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {fleetData.map((item, index) => (
            <Link
              key={item.slug}
              to={`/services/${item.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm opacity-80">Capacity</p>
                    <p className="text-white font-semibold">{item.cap}</p>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <button
                  className="mt-4 px-5 py-2 bg-green-700 text-white rounded-full text-sm font-medium hover:bg-green-800 transition">
                    Read More
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
