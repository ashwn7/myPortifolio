import Project1 from "./Project1";
import Project2 from "./Project2";
import Skills from "./Skills";

function Projects() {
  return (
    <section className="projects">
      <Project1 id="project1" />
      <Project2 />
      <Skills/>
    </section>
  );
}

export default Projects;
