import React from "react";
import UserTable from "./Usertable";
import Modal from "./Modal";

class UserCard extends React.Component {
  render() {
    const cotisations = [
      { mois: "Membres actifs", somme: "94 Membre" },
      { mois: "Membres bloqués", somme: "94 Membre" },
      { mois: "Total Effectif", somme: "94 Membre" },
    ];

    return (
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {cotisations.map((c, index) => (
              <div key={index} className="col-12 col-md-3">
                <div className="card mb-4 shadow">
                  <div className="card-body">
                    <p className="card-title">{c.mois}</p>
                    <h4 className="card-text fw-bold">{c.somme}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12 col-md-12">
            <Modal />
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default UserCard;
