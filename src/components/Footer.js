import React from "react";
import { NavLinks } from "../components/links";
import SocialLinks from "../components/SocialIcon";

const CopyWright = () => {
  return (
    <div className="copywright">
      <p>CopyWright © Backroads Tours Company 2022. All Rights Reserved</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div class="footer-container">
      <NavLinks />
      <SocialLinks />
      <CopyWright />
    </div>
  );
};

export default Footer;
