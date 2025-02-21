import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faWallet, faSocks } from "@fortawesome/free-solid-svg-icons";

const Service = ({ icon, header }) => {
  return (
    <div className="service">
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="content-container">
        <h3>{header}</h3>
        <p>
          Et dolor incididunt mollit ipsum dolore duis est ipsum excepteur non.
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="service-section" id="services">
      <h2 className="app-title">
        Our <span className="teal">Services</span>
      </h2>
      <div className="service-list-container">
        <Service icon={faWallet} header="Saving Money" />
        <Service icon={faTree} header="Endless Hiking" />
        <Service icon={faSocks} header="Amazing Comfort" />
      </div>
    </div>
  );
};

export default Services;
