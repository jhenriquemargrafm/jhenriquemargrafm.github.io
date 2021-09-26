import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import project1 from "../img/react-kanban.png";
import "./projects.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = () => {
  return (
    <div className="Site">
      <Header />
      <div className="Site-content section">
        Projects
        <Carousel responsive={responsive}>
          <div className="project">
            <Link
              to={{ pathname: "https://jhenriquemargrafm.github.io/react-kanban/" }}
              target="_blank"
            >
            <img src={project1} 
              className="projectphoto" 
              alt="foto do projeto Kanban com React" 
            />
            </Link>
          </div>
          <div></div>
          <div></div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
