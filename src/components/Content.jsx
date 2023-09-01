import React, { Component } from "react";
import Card from "./Card";
import surfer from "../assets/surfer.png";
import clapper from "../assets/clapperboard.png";
import cliTool from "../assets/cli-tool.png";
import js from "../assets/js.png";
import reactimg from "../assets/react.png";
import git from "../assets/git.png";
import reduximg from "../assets/redux.png";
import sass from "../assets/sass.png";
import nodejs from "../assets/node.png";
import python from "../assets/python.png";
import be_a_coder from "../assets/be-a-coder-img.png";
import codeventure from "../assets/codeventure.png";
import pathAnimation from "../assets/path-animatior.png";
import linkingPark from "../assets/LinkingPark.png";
import croftest from "../assets/croftest.png";

class Content extends Component {
  state = {
    projects: [
      {
        img: surfer,
        live_link: "https://croftkie.github.io/surf-report-live/",
        source_link: "https://github.com/croftKie/surf-report-live",
        app_name: "Surfer | Wave Reports",
        app_description:
          "Provides up-to-date wave height reports for any surf break in the world. JavaScript front-end with NodeJS proxy server providing API security. ",
        tech_used: [js, sass, nodejs],
        type: "project",
      },
      {
        img: codeventure,
        live_link: "https://croftkie.github.io/coding-adventure/",
        source_link: "https://github.com/croftKie/coding-adventure",
        app_name: "CodeVenture - Coding Puzzles",
        app_description:
          "Learn to think like a coder with this retro game, built using React, and Redux, using custom connections to a third party game library, KaboomJS",
        tech_used: [reactimg, reduximg, sass, js],
        type: "project",
      },
      {
        img: linkingPark,
        live_link: "https://croftkie.github.io/linking-park/",
        source_link: "https://github.com/croftKie/linking-park",
        app_name: "LinkingPark | Tab Manager",
        app_description:
          "A productivity app created in Vanilla JavaScript, with Bootstrap framework for styling and KaboomJS implementation for interactive element",
        tech_used: [js, sass, git],
        type: "project",
      },
      {
        img: cliTool,
        live_link: "https://www.npmjs.com/package/quick-react-app-builder/",
        source_link:
          "https://www.npmjs.com/package/quick-react-app-builder?activeTab=code",
        app_name: "React App Builder | CLI Tool",
        app_description:
          "CLI Tool for quickly spinning up a React app with Github and Redux Toolkit functionality - over 1000 downloads on NPM",
        tech_used: [js, nodejs, git],
        type: "package",
      },
      {
        img: pathAnimation,
        live_link: "https://www.npmjs.com/package/directional-path-animator",
        source_link:
          "https://www.npmjs.com/package/directional-path-animator?activeTab=code",
        app_name: "Four Directional Path Animator",
        app_description:
          "JavaScript package extending GSAP capabilite to create controlled four directional animation with collision detection and event emition.",
        tech_used: [js, nodejs, git],
        type: "package",
      },
      {
        img: croftest,
        live_link: "https://www.npmjs.com/package/croftest",
        source_link: "https://www.npmjs.com/package/croftest?activeTab=code",
        app_name: "Croftest | In-browser Unit Testing",
        app_description:
          "A stripped down unit testing framework for testing of in-browser code evaluation.",
        tech_used: [js, nodejs, git],
        type: "package",
      },
      {
        img: be_a_coder,
        live_link: "https://croftkie.github.io/be-a-coder/",
        source_link: "https://github.com/croftKie/be-a-coder",
        app_name: "Be-A-Coder | MatterJS",
        app_description:
          "A set of physics simulations to illustrate the life of a programmer building a piece of software. Uses MatterJS for 2d physics simulations.",
        tech_used: [js, git],
        type: "project",
      },
      {
        img: clapper,
        live_link: "https://github.com/croftKie/secura-cam",
        source_link: "https://github.com/croftKie/secura-cam",
        app_name: "Secura-cam | Hacker Catcher",
        app_description:
          "Secure your computer. Uses key-press monitoring and webcam access to capture evidence of anyone tampering with your computer.",
        tech_used: [python, git],
        type: "project",
      },
    ],
  };

  render() {
    const mobileCheck = window.innerWidth;

    const desktop = (
      <>
        {" "}
        <div className="left">
          <div className="title">
            <h4>Projects</h4>
          </div>
          <div className="cards">
            {this.state.projects.map((item) => {
              if (item.type === "project") {
                return (
                  <Card
                    source_link={item.source_link}
                    live_link={item.live_link}
                    img={item.img}
                    app_name={item.app_name}
                    app_description={item.app_description}
                    tech_used={item.tech_used}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="right">
          <div className="cards">
            {this.state.projects.map((item) => {
              if (item.type === "package") {
                return (
                  <Card
                    source_link={item.source_link}
                    live_link={item.live_link}
                    img={item.img}
                    app_name={item.app_name}
                    app_description={item.app_description}
                    tech_used={item.tech_used}
                  />
                );
              }
            })}
          </div>
          <div className="title">
            <h4>Packages</h4>
          </div>
        </div>
      </>
    );

    const mobile = (
      <>
        {this.state.projects.map((item) => {
          return (
            <Card
              source_link={item.source_link}
              live_link={item.live_link}
              img={item.img}
              app_name={item.app_name}
              app_description={item.app_description}
              tech_used={item.tech_used}
            />
          );
        })}
      </>
    );

    console.log(mobileCheck);
    return (
      <div className="content">{mobileCheck > 900 ? desktop : mobile}</div>
    );
  }
}

export default Content;
