import React, { Component, createRef } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import LowerNav from "./components/LowerNav";
import { mouseMove } from "./utils/mouseMove";
import "./css/App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    currentMode: "all",
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
        {/* <LowerNav
          showToastMessage={this.showToastMessage}
          onModeChange={this.onModeChange}
          mouseCursorRef={this.mouseCursor}
        /> */}
        <Content currentMode={this.state.currentMode} />
        <ToastContainer />
        <div ref={this.mouseCursor} className="mouseCursor"></div>
      </>
    );
  }
}

export default App;
