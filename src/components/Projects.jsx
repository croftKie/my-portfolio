import React, { Component, createRef } from "react";
import surfer from "../assets/4.png";
import luna from "../assets/luna.png";
import cliTool from "../assets/5.png";
import js from "../assets/js.png";
import reactimg from "../assets/react.png";
import git from "../assets/git.png";
import reduximg from "../assets/redux.png";
import sass from "../assets/sass.png";
import nodejs from "../assets/node.png";
import python from "../assets/python.png";
import be_a_coder from "../assets/8.png";
import codeventure from "../assets/1.png";
import pathAnimation from "../assets/6.png";
import linkingPark from "../assets/2.png";
import croftest from "../assets/3.png";
import Card from "./Card";

class Projects extends Component {
  state = {
    projects: [
      {
        img: surfer,
        live_link: "https://croftkie.github.io/surf-report-live/",
        source_link: "https://github.com/croftKie/surf-report-live",
        app_name: "Surfer | Wave Reports",
        app_description:
          "Provides up-to-date wave height, speed and interval reports for any surf break in the world. JavaScript front-end with NodeJS proxy server providing API security and user authentication/database query routing",
        tech_used: [js, sass, nodejs],
        type: "Project",
      },
      {
        img: cliTool,
        live_link: "https://www.npmjs.com/package/quick-react-app-builder/",
        source_link:
          "https://www.npmjs.com/package/quick-react-app-builder?activeTab=code",
        app_name: "React App Builder | CLI Tool",
        app_description:
          "CLI for creating a React Application skeleton with the possibility to include Redux, Router, and GitHub Repo integration. Written using NodeJS and file system manipulation.",
        tech_used: [js, nodejs, git],
        type: "Package",
      },
      {
        img: linkingPark,
        live_link: "https://croftkie.github.io/linking-park/",
        source_link: "https://github.com/croftKie/linking-park",
        app_name: "LinkingPark | Tab Manager",
        app_description:
          "A productivity app created in React with TypeScript, using KaboomJS for HTML canvas interactivity. Used as an immersive browser tab manager.",
        tech_used: [js, sass, git],
        type: "Project",
      },
      {
        img: luna,
        live_link: "https://github.com/croftKie/luna-assistant",
        source_link:
          "https://github.com/croftKie/luna-assistant/blob/main/app.py",
        app_name: "Luna | Personal Voice Assistant",
        app_description:
          "Luna can help you manage tasks, open websites and tab groups for you and much more. Written in Python and using only open-source code and a handful of modules to provide a voice assistant that you can modify to your needs.",
        tech_used: [python, git],
        type: "project",
      },
      {
        img: codeventure,
        live_link: "https://croftkie.github.io/coding-adventure/",
        source_link: "https://github.com/croftKie/coding-adventure",
        app_name: "CodeVenture - Coding Puzzles",
        app_description:
          "Learn to think like a coder with this retro puzzle app, built using React with Redux for state management and TauriJS to allow for desktop executable creation.",
        tech_used: [reactimg, reduximg, sass, js],
        type: "Project",
      },
      {
        img: pathAnimation,
        live_link: "https://www.npmjs.com/package/directional-path-animator",
        source_link:
          "https://www.npmjs.com/package/directional-path-animator?activeTab=code",
        app_name: "Four Directional Path Animator",
        app_description:
          "JavaScript package extending GSAP capability to create controlled four directional animation of elements with collision detection and event emition.",
        tech_used: [js, nodejs, git],
        type: "Package",
      },
      {
        img: croftest,
        live_link: "https://www.npmjs.com/package/croftest",
        source_link: "https://www.npmjs.com/package/croftest?activeTab=code",
        app_name: "Croftest | In-browser Unit Testing",
        app_description:
          "A code evaluation and testing library, being used within CodeVenture for function evaluation. Performs central tests of platforms such as Jest. Use cases could include performing comparision tests on languages.",
        tech_used: [js, nodejs, git],
        type: "Package",
      },
      {
        img: be_a_coder,
        live_link: "https://croftkie.github.io/be-a-coder/",
        source_link: "https://github.com/croftKie/be-a-coder",
        app_name: "Coder Therapy | MatterJS",
        app_description:
          "A set of physics simulations built using MatterJS for 2d physics simulation and Bootstrap for modular front-end styling.",
        tech_used: [js, git],
        type: "Project",
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
