import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="footer-text"> You can find me here</span>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/jhenriquemargrafm/" }}
          target="_blank"
        >
          <img
            src="https://i.ibb.co/Kx2GSrT/linkedin.png"
            width="48px"
            height="48px"
            alt="Link para o Linkedin"
          />
        </Link>
        <Link
          to={{ pathname: "https://github.com/jhenriquemargrafm" }}
          target="_blank"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/github-108-438008.png"
            width="48px"
            height="48px"
            alt="Link para o GitHub"
          />
        </Link>
      </div>
    );
  }
}

export default Footer;
