import PurpleArrows from "../LandingPage/PurpleArrows";
import DarkWave from "../Waves/DarkWave";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, my name is</span>
        <h1 className="landing__mainText">Ashwin Balaji Dhandapani</h1>
        <h1 className="landing__mainText">I Love Solving Problems !!</h1>
      </div>

      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__mainText">Software Engineering Systems</h1>
        <h1 className="landing__mainText">Graduate Student</h1>
      </div>

      <PurpleArrows />

      <LeftSocialMediaIcons />

      <DarkWave />
    </section>
  );
}

export default Landing;
