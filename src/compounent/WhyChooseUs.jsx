import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Serving clients with trust since 2006",
  "Affordable & transparent transport rates",
  "Reliable and on-time delivery",
  "Experienced & professional staff",
  "Nationwide transport coverage",
  "Modern fleet with lifter & crane support",
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden"
    >
      {/* Background blur shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-1"
        >
          <span className="inline-block text-center px-4 py-1 mb-4 text-sm font-semibold text-green-700 bg-green-200 rounded-full">
            Our Strengths
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
            Why Choose Us
          </h2>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            At Mushtarka Mehmand Goods Transport, we prioritize safety,
            reliability, and customer satisfaction by providing efficient
            transport solutions backed by years of industry experience.
          </p>

          <ul className="grid sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur rounded-2xl shadow hover:shadow-lg transition"
              >
                <CheckCircle className="text-green-600 mt-1" size={22} />
                <span className="text-gray-700">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-2"
        >
          <img
            src="/chouse.us.jpg"
            alt="Why Choose Mushtarka Mehmand Goods Transport"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-sm text-gray-500">Trusted Since</p>
            <p className="text-xl font-bold text-gray-800">2006</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
