import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import image1 from "../images/tour-1.jpeg";
import image2 from "../images/tour-2.jpeg";
import image3 from "../images/tour-3.jpeg";

const Tour = ({ image, header, country, price, days, date }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={image} alt={`Tour to ${country}`} />
      </div>
      <div>
        <div className="card-body">
          <div className="date-box">{date}</div>
          <h4>{header}</h4>
          <p>
            Ea cillum labore laboris aliqua veniam Lorem Lorem minim magna duis.
            Ea cillum labore laboris aliqua veniam Lorem Lorem minim magna duis.
          </p>
          <div className="card-footer">
            <div>
              <p>
                <FontAwesomeIcon icon={faMap} /> {country}
              </p>
            </div>
            <div>
              <p>From: {price}</p>
            </div>
            <div>
              <p>{days} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tours = () => {
  return (
    <div className="tour-section" id="tours">
      <h2 className="app-title">
        Featured <span className="teal">Tour</span>
      </h2>
      <div className="tour-container">
        <Tour
          image={image1}
          header="Tibet Adventure"
          date="August 26th, 2020"
          country="China"
          price="$2,100"
          days={6}
        />
        <Tour
          image={image2}
          header="Best Of Java"
          date="October 1st, 2020"
          country="Indonesia"
          price="$1,400"
          days={11}
        />
        <Tour
          image={image3}
          header="Explore Hong Kong"
          date="September 15th, 2020"
          country="Hong Kong"
          price="$5,000"
          days={8}
        />
      </div>
    </div>
  );
};

export default Tours;
