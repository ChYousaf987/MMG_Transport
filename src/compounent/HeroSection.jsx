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
        className=" w-full h-[80vh] object-cover"
      >
        <source src="/videoss.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
