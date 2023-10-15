import React, { Component, createRef } from "react";
import gsap from "gsap";

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

  componentDidMount() {
    gsap.to(this.sidebarRef.current, {
      opacity: 1,
      duration: 1,
      ease: "bounce.inOut",
      delay: 0.5,
    });
  }

  render() {
    return (
      <div ref={this.sidebarRef} className="sidenav">
        <div
          onClick={(e) => {
            this.props.runAnims();
            this.props.onModeChange(0);
            this.activeSelector(e);
          }}
          className="item what active"
        >
          <h4>Projects</h4>
        </div>
        <div
          onClick={(e) => {
            this.props.runAnims();
            this.props.onModeChange(1);
            this.activeSelector(e);
          }}
          className="item who"
        >
          <h4>About Me</h4>
        </div>
        <div
          onClick={(e) => {
            this.props.runAnims();
            this.props.onModeChange(2);
            this.activeSelector(e);
          }}
          className="item contact"
        >
          <h4>Read my CV</h4>
        </div>
      </div>
    );
  }
}

export default Sidenav;
