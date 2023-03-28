import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Skills({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Skills</h2>
      <div className="project__main">
        <div data-aos="fade-left" className="project__right">
          <p className="project__description project__body">
            <span className="project__specialText">Programming Languages: </span> Python, Javascript, Java, Go, HTML, CSS, TypeScript <br/>
            <span className="project__specialText">Backend Frameworks: </span> Node.js, Flask, Spring, Django <br/>
            <span className="project__specialText">Frontend Frameworks: </span> React.js, React Native, SCSS, Bootstrap, Material-UI <br/>
            <span className="project__specialText">Tools: </span> Git, AWS, GCP, Postman, MS Office <br/>
            <span className="project__specialText">CI / CD Tools: </span> GitHub Actions, Azure Pipelines <br/>
            <span className="project__specialText">Others: </span> RESTful API, Pytest, Junit, Chai.js, Penetration Testing, jasmine.js, Apache NiFi, Docker, Kubernetes <br/>
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Skills;
