
import React from "react";
import TableDashboard from "./tableaux";
import TableDashboardprogress from "./TableauxProgress";

class Dashboard extends React.Component {
  render() {
    // Exemple de données pour les cotisations
    const cotisations = [
      { mois: "Juin", somme: 225000 },
      { mois: "Mai", somme: 100000 },
    ];

    return (
      <div>
        <div className="container">
          <div className="row">
            {cotisations.map((c, index) => (
              <div key={index} className="col-12 col-md-3">
                <div className="card mb-4 shadow">
                  <div className="card-body">
                    <p className="card-title">{c.mois}</p>
                    <h4 className="card-text">{c.somme} FCFA</h4>
                    <p>Compared to ($21340</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 col-md-6">
              <div className="card mb-4 shadow p-2">
                <div className="card-body">
                  <p className="card-title">Caisse</p>
                  <p>3.500.000 FCFA / 5.000.000 FCFA</p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar bg-success"
                      style={{
                        width: "45%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <TableDashboard />
            </div>
            <div className="col-12 col-md-5">
              <TableDashboardprogress />
            </div>
          </div>
        </div>
      </div>
    );
    
  }
}


export default Dashboard;
