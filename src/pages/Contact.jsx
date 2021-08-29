import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import emailSymbol from "../email-symbol.png";

class Contact extends Component {
  render() {
    return (
      <div className="Site">
        <Header />
        <div className="Site-content section center">
          <h1 className="title">Where you can find me?</h1>
          <span>LINKEDIN</span>
          <span>https://www.linkedin.com/in/jhenriquemargrafm/</span>
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
          <br></br>
          <span>GITHUB</span>
          <span>https://github.com/jhenriquemargrafm</span>
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
          <br></br>
          <span>Or you can send me an email:</span>
          <span>jh.margraf@gmail.com</span>
          <img
            src={emailSymbol}
            width="48px"
            height="48px"
            alt="Link para o Email"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
