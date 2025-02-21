import React from "react";

const HeroContainer = () => {
  return (
    <div className="hero-container">
      <h1>CONTINUE EXPLORING</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <button>Explore Tours</button>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero" id="home">
      <HeroContainer />
    </div>
  );
};

export default Hero;
