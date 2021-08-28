import React, { Component } from 'react';
import profilePhoto from '../profile-photo.jpeg';
import Header from '../components/Header';
import Footer from '../components/Footer';

class About extends Component {
  render() {
    return (
      <div className="Site">
        <Header/>
        <div className="Site-content section center">
          <img
            className="photo"
            src={ profilePhoto }
            alt="foto do linkedin"
          />
          <h1> About Me</h1>
          <span>Hi! How are you?</span>
          <span></span>
        </div>
        <Footer/>
      </div>       
    );
  }
}

export default About;