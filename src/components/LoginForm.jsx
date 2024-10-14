import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      errors: {
        phone: "",
        password: "",
      },
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { phone, password } = this.state;
    const errors = { phone: "", password: "" };
    let isValid = true;

    // Validation pour le numéro de téléphone
    if (!phone) {
      errors.phone = "Le numéro de téléphone est requis";
      isValid = false;
    } else if (!/^\d{8}$/.test(phone)) {
      errors.phone = "Le numéro de téléphone doit comporter 8 chiffres";
      isValid = false;
    }

    // Validation pour le mot de passe
    if (!password) {
      errors.password = "Le mot de passe est requis";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Le mot de passe doit comporter au moins 6 caractères";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      console.log("Formulaire soumis:", this.state);
    }
  };

  render() {
    
    const { phone, password, errors } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h2 className="color mt-3">Connectez-Vous</h2>
        <p className="color mt-3">Connectez-vous et gérer vos cotisation</p>

        {/* Champ téléphone */}
        <div>
          <input
            className="bginput rounded-3 text-white mt-3"
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="N° téléphone"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
        </div>

        {/* Champ mot de passe*/}
        <div>
          <input
            className="bginput rounded-3 text-white mt-3"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Mot de passe"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
          <p className="d-flex justify-content-end mt-3">
            mot de pass oublier?
          </p>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="rounded-3 fw-bold bgbutton"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        >
          Connexion
        </button>

        {/* Lien vers la page d'inscription */}
        <div style={{ marginTop: "10px" }}>
          <span>
            Vous n'avez pas de compte ?{" "}
            <Link to="/inscription">
              <b>Inscrivez-Vous</b>
            </Link>
          </span>
        </div>
      </form>
    );
  }
}

export default LoginForm;
