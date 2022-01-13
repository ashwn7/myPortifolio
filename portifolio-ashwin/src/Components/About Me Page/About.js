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
          Hello! My name is Ashwin Balaji Dhandapani and I am a Graduate Student at{" "}
          <span className="about__specialText">Northeastern University, Boston</span>{" "}
          I have 3.5 years of experience across jobs such as PLM consultant, Software Quality Analyst and DevSecOps Engineer{" "}
          I have interest in becoming a <span className="about__specialText">Full stack developer</span>,
          developing Front-end, creating APIs, and working with databases. Also, I am extremely
          interested in CyberSecurity, more specifically <span className="about__specialText">DevSecOps,
          </span> <span className="about__specialText">Security Automations</span> and <span className="about__specialText">Penetration Testing.</span>
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
        src="/images/AshwinBalajiDhandapani.jpeg"
        alt="Brand Logo"
        width="300"
        height="425"
      />
      <LightWave />
    </section>
  );
}

export default About;
