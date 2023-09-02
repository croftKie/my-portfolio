import React, { Component, createRef } from "react";
import Skills from "./Skills";

import me from "../assets/me.svg";

class Who extends Component {
  state = {
    skill: [
      {
        type: "JavaScript",
        details: [
          "ES6+",
          "AJAX & REST",
          "GraphQL API",
          "Animation (Greensock)",
          "Graphing (d3.js)",
          "Realtime (websockets, socket.io)",
          "OAuth",
          "Git",
        ],
      },
      {
        type: "TypeScript",
        details: [
          "Legacy code refactoring",
          "ReactJS implementation",
          "NodeJS implementation",
          "custom definitions and interface",
        ],
      },
      {
        type: "ReactJS",
        details: [
          "Class/Functional",
          "custom hooks",
          "context",
          "Material UI",
          "Redux Toolkit",
          "NextJS",
        ],
      },
      {
        type: "NodeJS",
        details: [
          "Vanilla Server Development",
          "ExpressJS Server Development",
          "Routing",
          "API data fetching and caching",
          "Authentication and Data Validation",
          "File system and operations automation",
        ],
      },
      {
        type: "HTML5/CSS3",
        details: [
          "Semantically correct HTML for accessibility and SEO",
          "Responsive design",
          "pre-processors (SASS)",
          "CSS frameworks",
        ],
      },
      {
        type: "Testing",
        details: [
          "TypeScript",
          "Cypress",
          "Vitest",
          "Jest Unit Testing",
          "TDD principles",
        ],
      },
      {
        type: "Database",
        details: [
          "SQL",
          "MongoDB with Mongoose.js",
          "Firebase",
          "microservices",
        ],
      },
    ],
    currentSkill: 0,
  };
  sidebarRef = createRef();

  setCurrentSkill = (num) => {
    this.setState({ currentSkill: num });
  };
  activeSelector = (e) => {
    Array.from(this.sidebarRef.current.children).map((child) => {
      child.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  render() {
    return (
      <div className="who">
        <div className="hero">
          <div className="text">
            <p className="title">Hi, I'm Kieran.</p>
            <p>I'm an Engineer working in Full Stack Web Development.</p>
            <p>
              Currently, I'm writing in TypeScript and specialising in ReactJS
              and NodeJS.
            </p>
            <p>
              Open source advocate and maintain a portfolio of packages on NPM.
            </p>
          </div>
          <img src={me} alt="" />
        </div>
        <div className="skill-section">
          <div ref={this.sidebarRef} className="skills-list">
            <p
              onClick={(e) => {
                this.setCurrentSkill(0);
                this.activeSelector(e);
              }}
              className="active"
            >
              JavaScript
            </p>
            <p
              onClick={(e) => {
                this.setCurrentSkill(1);
                this.activeSelector(e);
              }}
            >
              TypeScript
            </p>
            <p
              onClick={(e) => {
                this.setCurrentSkill(2);
                this.activeSelector(e);
              }}
            >
              ReactJS
            </p>
            <p
              onClick={(e) => {
                this.setCurrentSkill(3);
                this.activeSelector(e);
              }}
            >
              NodeJS
            </p>
            <p
              onClick={(e) => {
                this.setCurrentSkill(4);
                this.activeSelector(e);
              }}
            >
              HTML5/CSS3
            </p>
            <p
              onClick={(e) => {
                this.setCurrentSkill(5);
                this.activeSelector(e);
              }}
            >
              Testing
            </p>
            <p
              onClick={(e) => {
                this.setCurrentSkill(6);
                this.activeSelector(e);
              }}
            >
              Databases
            </p>
          </div>
          <div className="details"></div>
          <div className="about-tech">
            <div className="details-tech">
              {this.state.skill.map((s, index) => {
                if (this.state.currentSkill === index) {
                  return (
                    <>
                      <div className="skill-type">
                        <p className="subtitle">Type:</p>
                        <p className="text">{s.type}</p>
                      </div>
                      <div className="skill-details">
                        <p className="subtitle">Details:</p>
                        <ul className="text">
                          {s.details.map((detail) => {
                            return <li>{detail}</li>;
                          })}
                        </ul>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Who;
