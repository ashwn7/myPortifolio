import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Skills({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Skills</h2>
      <div className="project__main">
        <div data-aos="fade-left" className="project__right">
          <p className="project__description project__body">
            <span className="project__specialText">Programming Languages: </span> Python, Java, Javascript, C++ <br/>
            <span className="project__specialText">Frameworks: </span> Django, Flask, node.js, React <br/>
            <span className="project__specialText">Software Testing: </span> Automated Functional Testing (Selenium TestNG Framework), Manual (Functional and API Testing) <br/>
            <span className="project__specialText">Information Security: </span> DevSecOps Implementation (SAST – SonarCloud, SonarQube, familiar with Checkmarx; DAST – Rapid7 AppSpider, OWASP ZAP; Infra Scanning Tool – Rapid7 InsightVM), Application Penetration Testing - Burp Suite, OWASP ZAP, Nmap, Metasploit <br/>
            <span className="project__specialText">Cloud Technologies: </span> Azure, AWS <br/>
            <span className="project__specialText">Tools: </span> Git, Azure Devops, Postman, MS Office <br/>
          </p>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Skills;
