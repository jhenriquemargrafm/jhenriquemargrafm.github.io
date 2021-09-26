import React, { Component } from "react";
import profilePhoto from "../img/profile-photo.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";

class About extends Component {
  render() {
    return (
      <div className="Site">
        <Header />
        <div className="Site-content section center">
          <span>About Me</span>
          <img className="photo" src={profilePhoto} alt="foto do linkedin" />
          <span>I am focusing on Python at the moment.</span>
          <span>I have a solid knowledge in Javascript and React.</span>
          <span>I also work as a translator/reviewer and sports trader.</span>
          <span>My hobbies are reading, sports in general and movies.</span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
