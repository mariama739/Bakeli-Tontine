import React from "react";
import image from "../assets/pregunta2.png"
import LoginForm from "./LoginForm";


class Connection extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 bgimage">
              <img src={image} alt="Logo" width="400" />
            </div>
            <div className="col-12 col-md-8">
              <h1 className="color text-center display-4 fw-bold mt-5 mb-5">Bienvenue sur Bakéli-tontine</h1>
                <h1>essay</h1>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Connection