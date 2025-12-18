import React from "react";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-white/20 rounded-full">
            24/7 Transport Support
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Need Reliable Transport Services?
          </h2>

          <p className="mb-10 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with Mushtarka Mehmand Goods Transport today for safe,
            timely, and affordable logistics solutions across Pakistan.
          </p>

          <a
            href="tel:03005751141"
            className="inline-flex items-center gap-3 bg-white text-green-700 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            <PhoneCall size={22} />
            Call Now
          </a>

          <p className="mt-6 text-sm text-white/80">
            Serving nationwide since 2006
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
