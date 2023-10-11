import React, { Component, createRef } from "react";
import SocialBar from "./socialBar";
import gsap from "gsap";

class Nav extends Component {
  state = {
    moduleOpen: false,
  };
  info = createRef();
  name = createRef();
  job = createRef();
  social = createRef();

  componentDidMount() {
    const tl = gsap.timeline();
    tl.to(this.info.current, { opacity: 1, duration: 1, ease: "bounce.inOut" });
    tl.play();
  }
  render() {
    return (
      <div className="header">
        <div ref={this.info} className="info">
          <div className="name">
            <h3 ref={this.name}>Kieran Croft</h3>
          </div>
          <div ref={this.info} className="lower">
            <div className="job">
              <h3 ref={this.job}>Software Developer</h3>
            </div>
            <SocialBar
              ref={this.social}
              showToastMessage={this.props.showToastMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
