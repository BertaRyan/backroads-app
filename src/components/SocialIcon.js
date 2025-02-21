import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faSquarespace,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const icons = [
  { icon: faTwitter, link: "/www.twitter.com" },
  { icon: faFacebook, link: "/www.facebook.com" },
  { icon: faSquarespace, link: "/www.squarespace.com" },
];

const Icon = ({ iconStyle, iconVar, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className={iconStyle} icon={iconVar} />
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="social-container">
      {icons.map((el) => {
        return (
          <Icon key={el} iconStyle="icon" iconVar={el.icon} link={el.link} />
        );
      })}
    </div>
  );
};

export default SocialLinks;
