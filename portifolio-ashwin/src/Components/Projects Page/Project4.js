import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Cloud Backend Project
          </h3>
          <p className="project__description project__body">
          Developed Node.js backend APIs to <span className="project__specialText">create user, get user / users information, update user information, delete user information and upload / download / delete media for the user</span> <br />
          Utilized AWS components such as <span className="project__specialText">Amazon RDS (MySQL) to store user information and authentication tokens, s3 for the media, AWS Lambda, Simple Email Service and Simple Notification Service</span> for user activation <br />
          Coded a <span className="project__specialText">Cloud formation template</span> to spin up a new Virtual Private Cloud for the application components such as the <span className="project__specialText">EC2 instances, Load balancers, S3, RDS and DynamoDB for the storage, SES, SNS, Lambda</span> and to create / configure security, autoscaling etc <br />
          Used <span className="project__specialText">GitHub actions and AWS CodeDeploy</span> for deployment of the application
          </p>
          <p className="project__tech project__body">
            &gt; Node.js · AWS · MySQL
          </p>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
