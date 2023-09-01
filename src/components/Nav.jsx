import React, { Component } from "react";
import About from "./About";
import SocialBar from "./socialBar";
import me from "../assets/me.svg";

class Nav extends Component {
  state = {
    moduleOpen: false,
  };
  render() {
    return (
      <div className="header">
        <div className="info">
          <div className="name">
            <h3>Kieran Croft</h3>
          </div>
          <div className="lower">
            <div className="job">
              <h3>Software Engineer</h3>
            </div>
            <SocialBar showToastMessage={this.props.showToastMessage} />
          </div>
        </div>
        <div className="about">
          <h4>Who am I?</h4>
          <div className="info-content">
            <div className="text">
              <p>Hi, I'm Kieran.</p>
              <p>I'm an Engineer working in Full Stack Web Development.</p>
              <p>
                Currently, I'm writing in TypeScript and specialising in ReactJS
                and NodeJS.
              </p>
              <p>
                Open source advocate and maintain a portfolio of packages on
                NPM.
              </p>
            </div>
            <img src={me} alt="" />
          </div>
        </div>
        <About showToastMessage={this.props.showToastMessage} />
      </div>
    );
  }
}

export default Nav;
