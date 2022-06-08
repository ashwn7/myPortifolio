import "./LeftSocialMediaIcons.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";

function LeftSocialMediaIcons() {
  return (
    <div className="leftSocialMediaIcons">
      <hr className="leftSocialMediaIcons__mobileLeftBar mobile__hr" />
      <a
        href="https://github.com/ashwinbalajidhandapani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="leftSocialMediaIcons__github icon" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/ashwin-balaji-dhandapani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin className="leftSocialMediaIcons__linkedin icon" size={30} />
      </a>
      </div>
  );
}

export default LeftSocialMediaIcons;
