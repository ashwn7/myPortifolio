import { FaGithub, FaLinkedin} from "react-icons/fa";
import "./SocialMediaIcons.css";

function SocialMediaIcons() {
  return (
    <div className="socialMediaIcons">
      <hr className="socialMediaIcons__leftHr hr" />
      <a
        href="https://github.com/ashwn7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="socialMediaIcons__github footer__icon" size={30} />
      </a>
      <a
        href="https://github.com/ashwinbalajidhandapani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin
          className="socialMediaIcons__linkedin footer__icon"
          size={30}
        />
      </a>
      <hr className="socialMediaIcons__rightHr hr" />
    </div>
  );
}

export default SocialMediaIcons;
