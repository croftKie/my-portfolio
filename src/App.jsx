import React, { Component, createRef } from "react";
import Nav from "./components/Nav";
import { mouseMove } from "./utils/mouseMove";
import "./css/App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidenav from "./components/Sidenav";
import Who from "./components/Who";
import Projects from "./components/Projects";

class App extends Component {
  state = {
    currentMode: 0,
  };
  mouseCursor = createRef();
  onModeChange = (mode) => {
    this.setState({ currentMode: mode });
  };

  showToastMessage = (text) => {
    toast(text, { position: "bottom-left" });
  };

  render() {
    window.addEventListener("mousemove", (event) => {
      mouseMove(event, this.mouseCursor.current);
    });

    return (
      <>
        <Nav showToastMessage={this.showToastMessage} />
        <div className="container">
          <Sidenav onModeChange={this.onModeChange} />
          <div className="details">
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
          <div className="content">
            <div className="bar"></div>
            {this.state.currentMode === 0 ? (
              <Projects />
            ) : this.state.currentMode === 1 ? (
              <Who />
            ) : (
              <></>
            )}
          </div>
        </div>
        <ToastContainer />
        <div ref={this.mouseCursor} className="mouseCursor"></div>
      </>
    );
  }
}

export default App;
