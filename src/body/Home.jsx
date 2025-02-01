import { Link } from "react-router-dom";
import "../App.css";
import profile from "../assets/profile.png";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Service from "./Service";
import Work from "./Work";
import pdf from '../assets/resume.pdf'

const Home = () => {
  const downloadResume = () => {
  const link = document.createElement('a');
    link.href = pdf;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="home">
      <img src={profile} alt="shubham biradar" className="profile-img" />
      <h1>Hi! I'm Shubham V Biradar</h1>
      <h2 className="headline">
        frontend web developer
        <br />
      </h2>
      <p className="description">
        I am a frontend developer from Pune, Maharashtra with a passion for web development. I create responsive websites that are displayed on all devices desktops and smartphones. I am always ready to learn new technologies and improve my skills.
      </p>
      <div className="cta-buttons">
        <Link className="contact-btn" to="/contact">contact me → </Link>
        <button onClick={downloadResume} className="resume-btn">
          my resume ↓
        </button>
      </div>
    </div>
    <AboutUs/>
    <Service/>
    <Work/>
    <Contact/>
    </>
  );
};

export default Home;
