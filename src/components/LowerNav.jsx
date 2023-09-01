import React, { Component } from "react";
import all from "../assets/project (1).png";
import projects from "../assets/project (3).png";
import npm from "../assets/project (2).png";

class LowerNav extends Component {
  state = {
    moduleOpen: false,
  };
  buttonRef = React.createRef(null);

  changeStyle = (e) => {
    Array.from(this.buttonRef.current.children).forEach((button) => {
      button.classList.remove("active");
    });
    this.buttonRef.current.children[e].classList.add("active");
  };

  render() {
    return (
      <div className="nav">
        <div ref={this.buttonRef} className="buttons">
          <button
            className="active"
            onClick={(e) => {
              this.changeStyle(0), this.props.onModeChange("all");
            }}
          >
            <img src={all} alt="" />
            All
          </button>
          <button
            onClick={(e) => {
              this.changeStyle(1), this.props.onModeChange("projects");
            }}
          >
            <img src={projects} alt="" />
            Projects
          </button>
          <button
            onClick={(e) => {
              this.changeStyle(2), this.props.onModeChange("packages");
            }}
          >
            <img src={npm} alt="" />
            Packages
          </button>
        </div>
      </div>
    );
  }
}

export default LowerNav;
