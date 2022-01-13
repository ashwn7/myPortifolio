import Logo from "../NavBar/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo />
    </footer>
  );
}

export default Footer;
