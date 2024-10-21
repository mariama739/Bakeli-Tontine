import React from "react";

class TableDashboardprogress extends React.Component {
  render() {
    // Exemple de données
    const membres = [
      { membre: "Mariama Coly", date: "01/06/2022", progression: 100 },
      { membre: "Jean Dupont", date: "02/06/2022", progression: 100 },
      { membre: "Amina Diallo", date: "03/06/2022", progression: 64 },
      { membre: "Ali Traoré", date: "04/06/2022", progression: 57 },
      { membre: "Sophie Moreau", date: "05/06/2022", progression: 50 },
      { membre: "Khalil Fofana", date: "06/06/2022", progression: 20 },
    ];

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="bgvert">Membre</th>
              <th className="bgvert">Date</th>
              <th className="bgvert">Progression</th>
            </tr>
          </thead>
          <tbody>
            {membres.map((membre, index) => (
              <tr key={index}>
                <td>{membre.membre}</td>
                <td>{membre.date}</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${membre.progression}%` }}
                      aria-valuenow={membre.progression}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {membre.progression} %
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableDashboardprogress;
