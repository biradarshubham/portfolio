import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h1>
            S<span>HUBH</span>
          </h1>
          <p>shubhambiradar0812@gmail.com</p>
        </div>
        <hr />
        <p className="copyright">
          &copy; 2024 Shubham V Biradar. All rights reserved.
        </p>
        <div className="social-links">
          <a href="https://github.com/biradarshubham" className="github">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shubham-biradar-519049327/" className="linkedin">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/shubhambiradar0812" className="instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
