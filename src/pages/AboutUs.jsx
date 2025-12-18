import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300">
            Mushtarka Mehmand Goods Transport Company
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4">
              Mushtarka Mehmand Goods Transport Company is a registered
              transport company based in Islamabad. We have been providing
              reliable transport and logistics services since 2006.
            </p>

            <p className="text-gray-600 mb-4">
              Our company always prioritizes the interests and requirements of
              our clients to build long-term business relationships. We deliver
              cost-effective, safe, and professional transport solutions.
            </p>

            <p className="text-gray-600">
              <strong>NTN:</strong> 2683005-1 <br />
              <strong>Working Since:</strong> 2006
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/about/about-truck.jpg"
              alt="About MMG Transport"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>

          <p className="text-gray-600 text-lg">
            Our mission is to provide the best transport services at very
            economical prices. We aim to support businesses and individuals in
            achieving their short-term and long-term goals through reliable and
            efficient logistics solutions.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Serving since 2006",
              "Affordable pricing",
              "Reliable delivery",
              "Professional staff",
              "Nationwide coverage",
              "Modern fleet & equipment",
            ].map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Owner</h2>
          <p className="text-xl font-semibold">Attiq Sikandar</p>
          <p className="text-gray-300 mt-2">
            Founder & Owner of Mushtarka Mehmand Goods Transport Company
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
