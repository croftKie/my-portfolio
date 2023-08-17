import React, { Component } from "react";
import About from "./About";
import SocialBar from "./socialBar";
class Nav extends Component {
  state = {
    moduleOpen: false,
  };
  render() {
    return (
      <div className="nav">
        <div className="info">
          <div className="name">
            <h3>Kieran Croft</h3>
            <p>Fullstack Software Developer</p>
          </div>
          <SocialBar showToastMessage={this.props.showToastMessage} />
        </div>
        <div className="about open">
          <p>I build things for the web.</p>
          <p>
            Experienced in front-end and back-end web development, I create
            robust applications using a range of technologies.
          </p>
        </div>
      </div>
    );
  }
}

export default Nav;
