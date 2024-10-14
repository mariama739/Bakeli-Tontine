import React, { Component } from "react";
import image from "../assets/Sign up-pana 1 (1).png";
import SingUp from "./SingUp";

class Inscription extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 bgimage">
              <img src={image} alt="Logo" width="400" />
            </div>
            <div className="col-12 col-md-8">

              <SingUp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inscription;
