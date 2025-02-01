import "../App.css";
import about from "../assets/about.jpg";
import vs from '../assets/vscode.png'
import ec from '../assets/eclips.png'
import Intel from '../assets/intelij.png'

const AboutUs = () => {
  return (
    <div className="about" id="about">
      <div className="about-header">
        <h2>Introduction</h2>
        <h1>About Me</h1>
      </div>

      <div className="about-container">

        <div className="about-img">
          <img src={about} alt="" />
          <div className="about-round"></div>
        </div>

        <div className="about-details">

            <div className="about-content">
                <p>
                I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                </p>
            </div>

            <div className="about-info">
                
                <div className="info-box">
                  <i className="fa-solid fa-code"></i>
                  <h3>Languages</h3>
                  <p>HTML,CSS,JAVASCRIPT,REACT JS</p>
                  </div>

                  <div className="info-box">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <h3>Education</h3>
                  <p>BSC Computer Science</p>
                  </div>

                  <div className="info-box">
                  <i className="fa-solid fa-briefcase"></i>
                  <h3>Projects</h3>
                  <p>Built more than 3 projects</p>
                </div>

            </div>

            <div className="about-tools">
                <h1>Tools i use</h1>
                <div className="tools">
                  <div className="tool">
                      <img src={vs} alt="" />
                  </div>
                  <div className="tool">
                      <img src={Intel} alt="" />
                  </div>
                  <div className="tool">
                      <img src={ec} alt="" />
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
