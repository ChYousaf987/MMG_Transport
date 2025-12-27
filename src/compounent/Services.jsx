import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaBoxOpen,
  FaTruckMoving,
  FaShippingFast,
  FaTools,
  FaWarehouse,
} from "react-icons/fa";
import { serviceData} from "../Data/serviceData";

const iconMap = {
  Pickup: <FaBoxOpen />,
  Shahzore: <FaTruck />,
  Mazda: <FaTruckMoving />,
  Hino: <FaTruckMoving />,
  "Ten Wheeler": <FaTruckMoving />,
  "Bedford Truck" : <FaTruck/>,
"20 Feet Container" : <FaShippingFast/>,
"40 Feet Container" : <FaShippingFast/>,
"Lifter & Crane" : <FaTools/>,
  "Loading/Unloading": <FaWarehouse />,
};

const Services = () => {
  return (
    <section
    id="services" className="py-28 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Transport Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reliable transport solutions across Pakistan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {serviceData.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 text-green-700 mb-6">
                  <span className="text-2xl">
                    {iconMap[service.title]}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.shortDesc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;