import { Link } from "react-router-dom";
import "./ResumeButton.css";

function ResumeButton() {
  return (
    <Link
      className="navItem resumeButton"
      to="/public/Resume_Dhandapani_AshwinBalaji_SDE.pdf"
      target="_blank"
    >
      <h3>Download Resume</h3>
    </Link>
  );
}

export default ResumeButton;
