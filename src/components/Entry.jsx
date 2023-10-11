import React, { Component, createRef } from "react";
import gsap from "gsap";

class Entry extends Component {
  entry = createRef();
  render() {
    const animate = () => {
      const tl = gsap.timeline({ onComplete: this.props.handleComplete });
      tl.to(this.entry.current, {
        background:
          "linear-gradient(90deg, rgba(121,239,129,1) 100%, rgba(121,239,129,1) 100%",
        duration: 0.25,
      });
      tl.to(this.entry.current, {
        width: 0,
        duration: 1,
        delay: 1,
      });
      tl.play();
    };

    return (
      <>
        <div ref={this.entry} className="entry">
          <p>C:/KieranCroft/Portfolio{">"}</p>
          <input
            onKeyDown={(e) => {
              e.code === "Enter" && animate();
            }}
            type="text"
            placeholder="Type Enter to Start"
          />
        </div>
      </>
    );
  }
}

export default Entry;
