import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">
            <span className="items">About Me</span>
          </Link>
          <Link to="/experiences">
            <span className="items"> Experiences</span>
          </Link>
          <Link to="/projects">
            <span className="items"> Projects</span>
          </Link>
          <Link to="/contact">
            <span className="items"> Contact</span>
          </Link>
        </div>
        <section>
          <h1 className="title">Welcome to my portfolio!!!!</h1>
          <h3 className="title">My name is José Henrique Margraf Melo and I'm a Software Engineer Student.</h3>
        </section>
      </div>
    );
  }
}

export default Header;
