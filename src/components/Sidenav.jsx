import React, { Component, createRef } from "react";

class Sidenav extends Component {
  sidebarRef = createRef();

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
      <div ref={this.sidebarRef} className="sidenav">
        <div
          onClick={(e) => {
            this.props.onModeChange(0);
            this.activeSelector(e);
          }}
          className="item what active"
        >
          <h4>Projects</h4>
        </div>
        <div
          onClick={(e) => {
            this.props.onModeChange(1);
            this.activeSelector(e);
          }}
          className="item who"
        >
          <h4>About Me</h4>
        </div>
        <div
          onClick={(e) => {
            this.props.onModeChange(2);
            this.activeSelector(e);
          }}
          className="item contact"
        >
          <h4>Contact Me</h4>
        </div>
      </div>
    );
  }
}

export default Sidenav;
