import React, { Component, createRef } from "react";
import Nav from "./components/Nav";
import { mouseMove } from "./utils/mouseMove";
import "./css/App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidenav from "./components/Sidenav";
import Who from "./components/Who";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Entry from "./components/Entry";
import gsap from "gsap";

class App extends Component {
  state = {
    currentMode: 0,
    enter: sessionStorage.getItem("enterMode") || 0,
  };
  mouseCursor = createRef();
  projects = createRef();
  detailsBar = createRef();

  onModeChange = (mode) => {
    this.setState({ currentMode: mode });
  };

  showToastMessage = (text) => {
    toast(text, { position: "bottom-left" });
  };
  handleComplete = () => {
    this.setState({ enter: 1 });
    sessionStorage.setItem("enterMode", 1);
  };

  componentDidUpdate() {
    const tl = gsap.timeline();
    tl.to(this.projects.current, {
      opacity: 1,
      duration: 1,
      ease: "bounce.inOut",
      delay: 1.2,
    });
    tl.to(this.detailsBar.current, {
      opacity: 1,
      duration: 1,
      ease: "bounce.inOut",
      delay: 0.5,
    });
    tl.play();
  }
  componentDidMount() {
    const tl = gsap.timeline();
    tl.to(this.projects.current, {
      opacity: 1,
      duration: 1,
      ease: "bounce.inOut",
      delay: 1.2,
    });
    tl.to(this.detailsBar.current, {
      opacity: 1,
      duration: 1,
      ease: "bounce.inOut",
      delay: 0.5,
    });
    tl.play();
  }

  render() {
    window.addEventListener("mousemove", (event) => {
      mouseMove(event, this.mouseCursor.current);
    });

    const portfolio = (
      <>
        <Nav showToastMessage={this.showToastMessage} />
        <div className="container" style={{ height: "95%", width: "95%" }}>
          <Sidenav sidenav={this.sidenav} onModeChange={this.onModeChange} />
          <div ref={this.detailsBar} className="details">
            <div
              className={
                this.state.currentMode === 0
                  ? "inner"
                  : this.state.currentMode === 1
                  ? "inner two"
                  : "inner three"
              }
            ></div>
          </div>
          <div ref={this.projects} className="content">
            <div className="bar"></div>
            {this.state.currentMode === 0 ? (
              <Projects />
            ) : this.state.currentMode === 1 ? (
              <Who />
            ) : (
              <Contact />
            )}
          </div>
        </div>
        <ToastContainer />
        <div ref={this.mouseCursor} className="mouseCursor"></div>
      </>
    );

    if (this.state.enter === 0) {
      return (
        <>
          <Entry handleComplete={this.handleComplete} />
          <div ref={this.mouseCursor} className="mouseCursor"></div>
        </>
      );
    } else {
      return portfolio;
    }
  }
}

export default App;
