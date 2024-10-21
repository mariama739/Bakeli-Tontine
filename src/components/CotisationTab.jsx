import React from "react";
import { IoEyeSharp } from "react-icons/io5";

class CotisationTable extends React.Component {
  render() {
    // Exemple de données
    const cotisations = [
      {
        membre: "Mariama Coly",
        date: "01/06/2022",
        montantCotise: 200000,
        montantRestant: 100000,
        statut: "Terminé",
      },
      {
        membre: "Jean Dupont",
        date: "02/06/2022",
        montantCotise: 150000,
        montantRestant: 50000,
        statut: "En cours",
      },
      {
        membre: "Amina Diallo",
        date: "03/06/2022",
        montantCotise: 300000,
        montantRestant: 200000,
        statut: "Terminé",
      },
      {
        membre: "Ali Traoré",
        date: "04/06/2022",
        montantCotise: 100000,
        montantRestant: 70000,
        statut: "En cours",
      },
      {
        membre: "Sophie Moreau",
        date: "05/06/2022",
        montantCotise: 250000,
        montantRestant: 100000,
        statut: "Terminé",
      },
      {
        membre: "Khalil Fofana",
        date: "06/06/2022",
        montantCotise: 350000,
        montantRestant: 150000,
        statut: "En cours",
      },
    ];

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="bgvert">Membre</th>
              <th className="bgvert">Date</th>
              <th className="bgvert">Montant cotisé (FCFA)</th>
              <th className="bgvert">Montant restant (FCFA)</th>
              <th className="bgvert">Statut</th>
              <th className="bgvert">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cotisations.map((cotisation, index) => (
              <tr key={index}>
                <td>{cotisation.membre}</td>
                <td>{cotisation.date}</td>
                <td>{cotisation.montantCotise} FCFA</td>
                <td>{cotisation.montantRestant} FCFA</td>
                <td>{cotisation.statut}</td>
                <td>
                  <div className="">
                    <IoEyeSharp />
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

export default CotisationTable;
