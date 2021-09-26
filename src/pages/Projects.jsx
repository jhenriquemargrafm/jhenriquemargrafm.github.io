import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projectPhoto1 from "../project1.jpeg";
import projectPhoto2 from "../project2.jpg";
import projectPhoto3 from "../project3.png";

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
        Em construção
        <Carousel responsive={responsive}>
          <div><img src={projectPhoto1} alt="projeto1"/></div>
          <div><img src={projectPhoto2} alt="projeto2"/></div>
          <div><img src={projectPhoto3} alt="projeto3"/></div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
