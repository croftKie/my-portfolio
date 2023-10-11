import React, { Component } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

class Card extends Component {
  state = {
    animSource: false,
    infoBox: false,
  };
  render() {
    const project = this.props.project;
    return (
      <>
        <div className="header-projects">
          <div className="item">
            <h4 className="subtitle">NAME:</h4>
            <h4>{project.app_name}</h4>
          </div>
          <div className="item">
            <h4 className="subtitle">TYPE:</h4>
            <h4>{project.type}</h4>
          </div>
          <div className="item">
            <h4 className="subtitle">TECH USED:</h4>
            {project.tech_used.map((tech) => {
              return <p>{tech}</p>;
            })}
          </div>
        </div>
        <div className="image">
          <img src={project.img} alt="" />
        </div>
        <div className="description">
          <h4 className="subtitle">DESCRIPTION:</h4>
          <p>{project.app_description}</p>
        </div>
        <div className="buttons">
          <a href={project.live_link}>
            <button>Go to Live Version</button>
          </a>
          <a href={project.source_link}>
            <button>Go to Source Code</button>
          </a>
        </div>
      </>
    );
  }
}

export default Card;
