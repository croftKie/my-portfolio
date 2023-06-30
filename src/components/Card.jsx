import React, { Component, createRef } from "react";
import code from "../assets/codeFav.png";
import right from "../assets/right-arrow.png";
import info from "../assets/info-button.png";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

class Card extends Component {
  state = {
    animSource: false,
    infoBox: false,
  };

  infoRef = createRef();
  cardRef = createRef();
  render() {
    const customEase =
      "M0,0 C0,0 0.039,-0.007 0.06,-0.018 0.12,-0.051 0.163,-0.092 0.22,-0.12 0.235,-0.127 0.255,-0.126 0.272,-0.121 0.288,-0.117 0.303,-0.108 0.315,-0.095 0.337,-0.069 0.354,-0.044 0.37,-0.01 0.393,0.038 0.403,0.072 0.42,0.127 0.44,0.197 0.449,0.238 0.465,0.311 0.504,0.502 0.614,0.744 0.742,0.888 0.868,1.03 1,1 1,1 ";
    const showSourceCodeLink = () => {
      this.setState({ animSource: !this.state.animSource });
    };

    const showInfo = () => {
      if (this.state.infoBox) {
        const tl = gsap.timeline();
        tl.to(this.cardRef.current, {
          height: 200,
          ease: CustomEase.create("custom", customEase),
          duration: 1,
        });
        tl.to(this.infoRef.current, {
          y: 210,
          opacity: 0,
          ease: CustomEase.create("custom", customEase),
        });
        setTimeout(() => {
          this.infoRef.current.classList.add("hide");
        }, 500);
        this.setState({ infoBox: !this.state.infoBox });
      } else {
        this.infoRef.current.classList.remove("hide");
        const tl = gsap.timeline();
        tl.to(this.cardRef.current, {
          height: 410,
          ease: "expo.inOut",
          duration: 1,
        });
        tl.to(this.infoRef.current, {
          y: 1,
          opacity: 1,
          delay: 0,
          ease: "expo.inOut",
          duration: 1,
        });
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
