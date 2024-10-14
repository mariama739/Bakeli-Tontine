import React from "react";
import { Link } from "react-router-dom";


class SingUp extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h2 className="color d-flex justify-content-center mb-5 mt-5 fw-bold">
              Inscription
            </h2>

            <div className="col-12 col-md-6 text-center">
              <div>
                <label
                  for="lastName"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Nom
                </label>
                <input type="text" name="lastName" id="lastName" />
              </div>
              <div>
                <label
                  for="birtdate"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Date de naissance
                </label>
                <input
                  type="date"
                  name="birtdate"
                  id="birtdate"
                  style={{ paddingLeft: "50px" }}
                />
              </div>
              <div>
                <label
                  for="password"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Définir mot de passe
                </label>
                <input type="password" name="password" id="password" />
              </div>
              <div>
                <label
                  for="mail"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  E-mail
                </label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label
                  for="adress"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Adresse
                </label>
                <input type="text" name="adress" id="adress" />
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div>
                <label
                  for="firstName"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Prénom
                </label>
                <input type="text" name="firstName" id="firstName" />
              </div>
              <div>
                <label
                  for="profession"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Profession
                </label>
                <input type="text" name="profession" id="profession" />
              </div>
              <div>
                <label
                  for="password"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Confirmer mot de passe
                </label>
                <input type="password" name="password" id="password" />
              </div>
              <div>
                <label
                  for="phone"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Téléphone
                </label>
                <input type="number" name="phone" id="phone" />
              </div>
              <div>
                <label
                  for="organisation"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Organisation
                </label>
                <input type="text" name="organisation" id="organisation" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              type="submit"
              className="rounded-3 fw-bold bgbutton "
              style={{ width: "40%", padding: "8px", marginBottom: "10px" }}
            >
              S'inscrire
            </button>
          </div>

          <div style={{ marginTop: "10px" }}>
            <span className="d-flex justify-content-center">
              Vous avez dèja un compte ?{" "}
              <Link to="/connection">
                <b>Connectez-Vous</b>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default SingUp;
