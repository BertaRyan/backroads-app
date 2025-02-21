import React from "react";

import { NavLinks } from "../components/links";
import SocialLinks from "../components/SocialIcon";
import logo from "../images/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="backroads logo" />
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="header">
      <div className="navbar">
        <Logo />
        <NavLinks />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Navigation;
