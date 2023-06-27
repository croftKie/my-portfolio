import React, { Component } from "react";
import Card from "./Card";
import surfer from "../assets/surfer.png";
import clapper from "../assets/clapperboard.png";
import cliTool from "../assets/cli-tool.png";
import splt from "../assets/splt.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import reactimg from "../assets/react.png";
import git from "../assets/git.png";
import reduximg from "../assets/redux.png";
import sass from "../assets/sass.png";
import nodejs from "../assets/node.png";
import python from "../assets/python.png";

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
      },
      {
        img: clapper,
        live_link: "https://croftkie.github.io/clapperboard/",
        source_link: "https://github.com/croftKie/movie-buddy",
        app_name: "Clapperboard | Movie Search",
        app_description:
          "Algorithm-free movie search database created to provide solve a use case of finding new movies unrelated to previously watched content.",
        tech_used: [js, sass, reactimg, reduximg],
      },
      {
        img: cliTool,
        live_link: "https://www.npmjs.com/package/quick-react-app-builder/",
        source_link:
          "https://www.npmjs.com/package/quick-react-app-builder?activeTab=code",
        app_name: "React App Builder | CLI Tool",
        app_description:
          "CLI Tool for quickly spinning up a React app with Github and Redux Toolkit functionality - currently at 700 downloads on NPM",
        tech_used: [js, nodejs, git],
      },
      {
        img: splt,
        live_link: "https://croftkie.github.io/tip-calculator-FM/",
        source_link: "https://github.com/croftKie/tip-calculator-FM",
        app_name: "SPLT | Tip Calculator",
        app_description:
          "Tip calculator module created in vanilla JavaScript providing ability to easily split bills at group meals.",
        tech_used: [js, sass, git],
      },
    ],
  };

  render() {
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
}

export default Content;
