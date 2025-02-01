import "../App.css";
import shop from "../assets/shop.png";
import recipe from "../assets/recipe.png";
import ecommerce from "../assets/ecommerce.png";

const Work = () => {
  return (
    <div className="portfolio-container">
        <div className="work-container">
      <h1>My portfolio</h1>
      <h2>My latest work</h2>
      <p>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
      </div>

      <div className="project-grid">
        <div className="project-card">
          <img src={shop} alt="Frontend project" />
          <h3> ParamPara The Wedding Culture</h3>
          <p>Web Design</p>
        </div>
        <div className="project-card">
          <img src={recipe} alt="Geo-based app" />
          <h3>Recipe website</h3>
          <p>web design</p>
        </div>
        <div className="project-card">
          <img src={ecommerce} alt="Photography site" />
          <h3>E-commerce website</h3>
          <p>Web Design</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
