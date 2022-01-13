import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project1({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Daycare Center</h3>
          <p className="project__description project__body">
            The <span className="project__specialText">DayCare</span> project
            Allows an admin user to{" "} <span className="project__specialText">Add, edit, read and delete </span>
            Students and Teacher{" "} display information such as teacher allocated to a student,
            students allocated to teachers, vaccination information of students, alerts for vaccination &
            yearly performance review due for Teachers{" "}
          </p>
          <p className="project__tech project__body">
            &gt; Java · SwingAPI · PostgresSQL
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/ashwinkumar6/CSYE6200_DayCare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=DaycareProject - GitHub Repository"
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

export default Project1;
