import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Hello there ! My name is Ashwin Balaji Dhandapani and I am a Graduate Student at{" "}
          <span className="about__specialText">Northeastern University, Boston majoring in Software Engineering Systems</span>{" "}
          I have 3.5 years of experience across in roles such as PLM consultant, Software Quality Analyst and DevSecOps Engineer{" "}
          My goal is to become a <span className="about__specialText">Full stack developer</span>,
          by gaining expertise in complex backend systems and Front-end development.
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="./images/AshwinBalajiDhandapani.jpeg"
        alt="Brand Logo"
        width="300"
        height="425"
      />
      <LightWave />
    </section>
  );
}

export default About;
