import React, { Component } from "react";
import SocialBar from "./socialBar";

class Nav extends Component {
  state = {
    moduleOpen: false,
  };
  render() {
    return (
      <div className="header">
        <div className="info">
          <div className="name">
            <h3>Kieran Croft</h3>
          </div>
          <div className="lower">
            <div className="job">
              <h3>Software Engineer</h3>
            </div>
            <SocialBar showToastMessage={this.props.showToastMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
