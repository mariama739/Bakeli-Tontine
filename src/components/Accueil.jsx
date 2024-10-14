import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

class Acceuil extends Component {
  render() {
    return (
      <div className="bg-secondary-subtle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-2 bgsidebar vh-100">
              <Sidebar />
            </div>
            <div className="col-12 col-md-10">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Acceuil;
