import React from "react";
import aboutImg from "../images/about.jpeg";

const About = () => {
  return (
    <div id="about">
      <h2 className="app-title">
        About <span className="teal">Us</span>
      </h2>
      <div className="aboutContainer">
        <div className="aboutImg">
          <img src={aboutImg} alt="Beach on a sunny day" />
        </div>
        <div className="aboutContentContainer">
          <h3>Explore The Difference</h3>
          <p>
            Ipsum ut aute eu reprehenderit. Ex enim magna quis id velit pariatur
            et officia cillum pariatur. Deserunt cupidatat proident sit laboris
            est eu tempor laborum nisi dolor nulla quis aliquip. Magna minim
            sint labore elit. Dolore laboris id occaecat proident reprehenderit
            labore.
          </p>
          <p>
            Ipsum ut aute eu reprehenderit. Ex enim magna quis id velit pariatur
            et officia cillum pariatur. Deserunt cupidatat proident sit laboris
            est eu tempor laborum nisi dolor nulla quis aliquip. Magna minim
            sint labore elit. Dolore laboris id occaecat proident reprehenderit
            labore.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
