import React from "react";
import { useParams } from "react-router-dom";
import { serviceData } from "../Data/serviceData"; 
  import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData.find((s) => s.slug === slug);
  //  useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [slug]);

  if (!service) {
    return <h2 className="text-center mt-20">Service Not Found</h2>;
  }

  return (
    <>
  <Navbar/>
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {service.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {service.desc}
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <video
              src={service.video}
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full shadow-lg transition">
            Buy Now
          </button>
        </div>
      </div>
    </section>
    <Footer/>
      </>
  );
};

export default ServiceDetail;
