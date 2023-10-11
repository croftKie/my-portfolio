import React, { Component } from "react";
import cv from "../assets/cv.pdf";

class Contact extends Component {
  render() {
    return (
      <div className="cv">
        <iframe src={cv} height={"100%"} width={"100%"}></iframe>
      </div>
    );
  }
}

export default Contact;
