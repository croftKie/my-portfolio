import React, { Component, createRef } from "react";
import surfer from "../assets/4.png";
import cliTool from "../assets/5.png";
import codeventure from "../assets/1.png";
import linkingPark from "../assets/2.png";
import arcade from "../assets/3.png";
import mime from "../assets/6.png";
import Card from "./Card";

class Projects extends Component {
  state = {
    projects: [
      {
        img: surfer,
        live_link: "https://croftkie.github.io/surf-report-live/",
        source_link: "https://github.com/croftKie/surf-report-live",
        app_name: "Tide Chaser - Wave Reports",
        app_description:
          "Provides up-to-date wave height, speed and interval reports for any surf break in the world. JavaScript front-end with NodeJS proxy server providing API security and user authentication/database query routing",
        tech_used: ["JavaScript ES6", "SASS", "NodeJS", "GSAP"],
        type: "Web Application",
      },
      {
        img: mime,
        live_link: "https://croftkie.github.io/mime-js-landing/",
        source_link: "https://www.npmjs.com/package/mime-js",
        app_name: "MimeJS - Templating Framework",
        app_description:
          "A custom templating framework written to emulate the component based architecture of ReactJS in vanilla JavaScript. Allows HTML/CSS/JS to be developed in components and compiled to a multi-page web application for deployment",
        tech_used: ["NodeJS", "JavaScript ES6", "File System"],
        type: "Package/Framework",
      },
      {
        img: linkingPark,
        live_link: "https://croftkie.github.io/linking-park/",
        source_link: "https://github.com/croftKie/linking-park",
        app_name: "LinkingPark - Tab Manager",
        app_description:
          "A productivity app created in React with TypeScript, using KaboomJS for HTML canvas interactivity. Used as an immersive browser tab manager.",
        tech_used: [
          "JavaScript ES6",
          "ReactJS",
          "NodeJS",
          "Bcrypt",
          "SQL",
          "SASS",
        ],
        type: "Web Application",
      },
      {
        img: cliTool,
        live_link: "https://www.npmjs.com/package/quick-react-app-builder/",
        source_link:
          "https://www.npmjs.com/package/quick-react-app-builder?activeTab=code",
        app_name: "React App Builder - CLI Tool",
        app_description:
          "CLI for creating a React Application skeleton with the possibility to include Redux, Router, and GitHub Repo integration. Written using NodeJS and file system manipulation.",
        tech_used: ["NodeJS", "JavaScript ES6", "File System"],
        type: "Package/Framework",
      },
      {
        img: codeventure,
        live_link: "https://croftkie.github.io/coding-adventure/",
        source_link: "https://github.com/croftKie/coding-adventure",
        app_name: "CodeVenture - Coding Practice",
        app_description:
          "Learn to think like a coder with this retro 'Codewars' style puzzle app, built using React with Redux for state management and local storage of persistence.",
        tech_used: ["ReactJS", "Redux", "SASS", "JavaScript ES6"],
        type: "Web Application",
      },
      {
        img: arcade,
        live_link: "https://croftkie.github.io/the-arcade/",
        source_link: "https://github.com/croftKie/the-arcade",
        app_name: "The Arcade - Retro Canvas Games",
        app_description:
          "A web arcade for all those retro games from your childhood. Developed using Vanilla JavaScript and GSAP for animation",
        tech_used: ["JavaScript ES6", "GSAP Animation", "HTML5/CSS3"],
        type: "Package",
      },
    ],
    currentProject: 0,
  };

  sidebarRef = createRef();

  projectChange = (projectIndex) => {
    this.setState({ currentProject: projectIndex });
  };

  activeSelector = (e) => {
    if (e.target.nodeName === "DIV") {
      Array.from(this.sidebarRef.current.children).map((child) => {
        child.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  };

  render() {
    return (
      <div className="projects">
        <div ref={this.sidebarRef} className="sidebar-projects">
          {this.state.projects.map((project, index) => {
            return (
              <div
                onClick={(e) => {
                  this.projectChange(index);
                  this.activeSelector(e);
                }}
                className={index === 0 ? "item active" : "item"}
              >
                <p>{project.app_name}</p>
              </div>
            );
          })}
        </div>
        <div className="content-projects">
          <Card project={this.state.projects[this.state.currentProject]} />
        </div>
      </div>
    );
  }
}

export default Projects;
