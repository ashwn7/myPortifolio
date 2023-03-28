import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3({ id }) {
  return (
    <article id={id} className="project light">
      <div className="project__main">
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Party App</h3>
          <p className="project__description project__body">
            The <span className="project__specialText">PartyApp</span> project
            Allows an admin user to{" "} <span className="project__specialText">Add, edit, read and delete </span>
            an Event{" "} display information such as Party Location, Theme, Codes etc. Developed Backend functionalities 
            such as user roles, google map functionality, email verification, and booking confirmation and few front-end components
            such as the Ticket checkout page{" "}
          </p>
          <p className="project__tech project__body">
            &gt; Node.js · React.js · PostgresSQL
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/ashwinbalajidhandapani/whereIsTheParty"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=WhereIsTheParty - GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
