import React, { Component } from "react";
import Card from "./Card";
import surfer from "../assets/surfer.png";
import clapper from "../assets/clapperboard.png";
import cliTool from "../assets/cli-tool.png";
import overload from "../assets/bug_overload.png";
import splt from "../assets/splt.png";
import js from "../assets/js.png";
// import ts from "../assets/ts.png";
import reactimg from "../assets/react.png";
import git from "../assets/git.png";
import reduximg from "../assets/redux.png";
import sass from "../assets/sass.png";
import nodejs from "../assets/node.png";
import be_a_coder from "../assets/be-a-coder-img.png";

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
        img: clapper,
        live_link: "https://croftkie.github.io/clapperboard/",
        source_link: "https://github.com/croftKie/movie-buddy",
        app_name: "Clapperboard | Movie Search",
        app_description:
          "Algorithm-free movie search database created to provide solve a use case of finding new movies unrelated to previously watched content.",
        tech_used: [js, sass, reactimg, reduximg],
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
        img: splt,
        live_link: "https://croftkie.github.io/tip-calculator-FM/",
        source_link: "https://github.com/croftKie/tip-calculator-FM",
        app_name: "SPLT | Tip Calculator",
        app_description:
          "Tip calculator module created in vanilla JavaScript providing ability to easily split bills at group meals.",
        tech_used: [js, sass, git],
        type: "project",
      },
      {
        img: overload,
        live_link: "https://croftkie.github.io/bug-overload/",
        source_link: "https://github.com/croftKie/bug-overload",
        app_name: "Bug Overload | PyGame",
        app_description:
          "A little coder therapy for squashing bugs! Built using KaboomJS for game development and Bootstrap framework for website UI",
        tech_used: [js, sass, git],
        type: "project",
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
    ],
    mode: 0,
  };

  render() {
    if (this.state.mode === 0) {
      return (
        <div className="content">
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
        </div>
      );
    }

    if (this.state.mode === 1) {
      return (
        <div className="content">
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
      );
    }

    if (this.state.mode === 2) {
      return (
        <div className="content">
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
      );
    }
  }
}

export default Content;
