import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import icone from "../assets/Group 33777.png";
import icone1 from "../assets/category.png";
import icone2 from "../assets/user.png";
import icone3 from "../assets/healthicons_money-bag-outline.png";
import icone4 from "../assets/Vector (1).png";


class Sidebar extends Component {
  render() {
    return (
      <div
        className="text-white position-fixed"
        style={{
          padding: "8px",
        }}
      >
        <h3 className="pt-3">
          <img src={icone} alt="Logo" width="24" className="" />
          Bakéli Tontine
        </h3>
        <ul style={{ listStyleType: "none", padding: 5 }} className="pt-4">
          <li className="mb-3 ms-3 bgvert p-2">
            <Link
              to="/accueil"
              className="text-white link-underline link-underline-opacity-0 fw-bold fs-6 link "
            >
              <img src={icone1} alt="Logo" width="20" className="me-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-3 ms-3 ">
            <Link
              to="/utilisateurs"
              className="text-white link-underline link-underline-opacity-0 fw-bold fs-6 link "
            >
              <img src={icone2} alt="Logo" width="20" className="me-2 " />
              Utilisateurs
            </Link>
          </li>
          <li className="mb-3 ms-3">
            <Link
              to="/cotisations"
              className="text-white link-underline link-underline-opacity-0 fw-bold fs-6 link "
            >
              <img src={icone3} alt="Logo" width="20" className="me-2" />
              Cotisations
            </Link>
          </li>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-white fw-bold border border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={icone4} alt="Logo" width="20" className="me-2" />
              Paramètres
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Paramètres Généraux
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Utilisateurs
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Archives
                </Link>
                <Link className="dropdown-item" href="#">
                  Membres Bloqués
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}
<div className="dropdown">
  <link
    class="btn dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Paramètres
  </link>

  <ul className="dropdown-menu">
    <li>
      <link className="dropdown-item" href="#">
        Paramètres Généraux
      </link>
    </li>
    <li>
      <link className="dropdown-item" href="#">
        Utilisateurs
      </link>
    </li>
    <li>
      <link className="dropdown-item" href="#">
        Archives
      </link>
    </li>
    <li>
      <link className="dropdown-item" href="#">
        Membres Bloqués
      </link>
    </li>
  </ul>
</div>;

export default Sidebar;
