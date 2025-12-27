import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className=" w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:w-full md:h-[80vh] md:object-cover"
      >
        <source src="/videoss.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
