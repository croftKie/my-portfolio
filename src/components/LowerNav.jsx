import React, { Component } from "react";
import About from "./About";

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
      <div className="lower-nav">
        <About showToastMessage={this.props.showToastMessage}/>
        <div ref={this.buttonRef} className="buttons">
          <button
            className="active"
            onClick={(e) => {
              this.changeStyle(0), this.props.onModeChange("all");
            }}
          >
            All Builds
          </button>
          <button
            onClick={(e) => {
              this.changeStyle(1), this.props.onModeChange("projects");
            }}
          >
            Projects Only
          </button>
          <button
            onClick={(e) => {
              this.changeStyle(2), this.props.onModeChange("packages");
            }}
          >
            Published Packages
          </button>
        </div>
      </div>
    );
  }
}

export default LowerNav;
