import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdArchive } from "react-icons/md";
import { MdBlock } from "react-icons/md";


class UserTable extends React.Component {
  render() {
    // Exemple de données
    const utilisateurs = [
      {
        membre: "Mariama Coly",
        date: "01/06/2022",
        seuil: 300000,
        progression: 80,
        statut: "Terminé",
      },
      {
        membre: "Jean Dupont",
        date: "02/06/2022",
        seuil: 250000,
        progression: 60,
        statut: "En cours",
      },
      {
        membre: "Amina Diallo",
        date: "03/06/2022",
        seuil: 400000,
        progression: 90,
        statut: "Terminé",
      },
      {
        membre: "Ali Traoré",
        date: "04/06/2022",
        seuil: 150000,
        progression: 50,
        statut: "En cours",
      },
      {
        membre: "Sophie Moreau",
        date: "05/06/2022",
        seuil: 350000,
        progression: 75,
        statut: "Terminé",
      },
      {
        membre: "Khalil Fofana",
        date: "06/06/2022",
        seuil: 500000,
        progression: 40,
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
              <th className="bgvert">Seuil (FCFA)</th>
              <th className="bgvert">Progression</th>
              <th className="bgvert">Statut</th>
              <th className="bgvert">Actions</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((utilisateur, index) => (
              <tr key={index}>
                <td>{utilisateur.membre}</td>
                <td>{utilisateur.date}</td>
                <td>{utilisateur.seuil} FCFA</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${utilisateur.progression}%` }}
                      aria-valuenow={utilisateur.progression}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {utilisateur.progression} %
                    </div>
                  </div>
                </td>
                <td>{utilisateur.statut}</td>
                <td>
                  <div className="btn me-1 ">
                    <IoEyeSharp />
                  </div>
                  <div className="btn me-1">
                    <MdArchive />
                  </div>
                  <div className="btn ">
                    <MdBlock />
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

export default UserTable;
