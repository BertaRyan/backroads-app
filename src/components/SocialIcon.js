import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faSquarespace,
} from "@fortawesome/free-brands-svg-icons";

const icons = [faTwitter, faFacebook, faSquarespace];

const Icon = ({ iconStyle, iconVar }) => {
  return (
    <a href="#">
      <FontAwesomeIcon className={iconStyle} icon={iconVar} />
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="social-container">
      {icons.map((el) => {
        return <Icon key={el} iconStyle="icon" iconVar={el} />;
      })}
    </div>
  );
};

export default SocialLinks;
