import React from "react";

class TableDashboard extends React.Component {
  render() {
    // Exemple de données
    const membres = [
      {
        membre: "Mariama Coly",
        montant: 25000,
        date: "01/06/2022",
        statut: "Validé",
      },
      {
        membre: "Jean Dupont",
        montant: 30000,
        date: "02/06/2022",
        statut: "En attente",
      },
      {
        membre: "Amina Diallo",
        montant: 15000,
        date: "03/06/2022",
        statut: "Validé",
      },
      {
        membre: "Ali Traoré",
        montant: 20000,
        date: "04/06/2022",
        statut: "En attente",
      },
      {
        membre: "Sophie Moreau",
        montant: 35000,
        date: "05/06/2022",
        statut: "Validé",
      },
      {
        membre: "Khalil Fofana",
        montant: 40000,
        date: "06/06/2022",
        statut: "En attente",
      },
    ];

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="bgvert">
              <th className="bgvert">Membre</th>
              <th className="bgvert">Montant (FCFA)</th>
              <th className="bgvert">Date</th>
              <th className="bgvert">Statut</th>
            </tr>
          </thead>
          <tbody>
            {membres.map((membre, index) => (
              <tr key={index}>
                <td>{membre.membre}</td>
                <td>{membre.montant} FCFA</td>
                <td>{membre.date}</td>
                <td>{membre.statut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableDashboard;
