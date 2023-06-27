import React, { Component, createRef } from "react";
import code from "../assets/codeFav.png";
import right from "../assets/right-arrow.png";
import info from "../assets/info-button.png";
import { gsap } from "gsap";

class Card extends Component {
  state = {
    animSource: false,
    infoBox: false,
  };

  infoRef = createRef();
  cardRef = createRef();
  render() {
    const showSourceCodeLink = () => {
      this.setState({ animSource: !this.state.animSource });
    };

    const showInfo = () => {
      if (this.state.infoBox) {
        const tl = gsap.timeline();
        tl.to(this.cardRef.current, { height: 200 });
        tl.to(this.infoRef.current, { y: 210, opacity: 0 });
        setTimeout(() => {
          this.infoRef.current.classList.add("hide");
        }, 500);
        this.setState({ infoBox: !this.state.infoBox });
      } else {
        this.infoRef.current.classList.remove("hide");
        const tl = gsap.timeline();
        tl.to(this.cardRef.current, { height: 410 });
        tl.to(this.infoRef.current, { y: 1, opacity: 1, delay: 0 });
        this.setState({ infoBox: !this.state.infoBox });
      }
    };
    return (
      <>
        <div ref={this.cardRef} className="card">
          <a href={this.props.live_link} target="_blank">
            <img src={this.props.img} alt="" />
          </a>
          <div className="card-nav">
            <div
              onMouseEnter={showSourceCodeLink}
              onMouseLeave={showSourceCodeLink}
              className="sourceCodeModule"
            >
              <img src={code} alt="" />
              <a href={this.props.source_link} target="_blank">
                <h4>source code</h4>
              </a>
              <img
                className={
                  this.state.animSource
                    ? "rightImg rightImgAnimated"
                    : "rightImg"
                }
                src={right}
                alt=""
              />
            </div>
            <div className="info">
              <img onClick={showInfo} src={info} alt="" />
            </div>
          </div>
          <div ref={this.infoRef} className="info-card">
            <h3>{this.props.app_name}</h3>
            <p>{this.props.app_description}</p>
            <div className="tech-images">
              {this.props.tech_used.map((i) => {
                return <img src={i} alt="" />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
