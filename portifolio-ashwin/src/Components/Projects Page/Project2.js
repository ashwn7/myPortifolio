import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Twitter Data Project
          </h3>
          <p className="project__description project__body">
          (Ongoing Project) Developed scripts using Python <span className="project__specialText">to extract Twitter Data</span> from
          tweets such as important words, named entities, locations and
          <span className="project__specialText">packaged</span>{" "}
          script to a twitter NLP library and upload highly anotated datasets to Kaggle.
          </p>
          <p className="project__tech project__body">
            &gt; Python · Twitter API · Kaggle API
          </p>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
