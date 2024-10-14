import React, { Component } from "react";
import { Link } from "react-router-dom"; 

class Sidebar extends Component {
  render() {
    return (
      <div
        className="text-white"
        style={{
          width: "200px",
          padding: "10px",
        }}
      >
        <h3>Bakéli Tontine</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link
              to="/dashboard"
              className="text-white link-underline link-underline-opacity-0 fw-bold fs-6 "
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/utilisateurs"
              className="text-white link-underline link-underline-opacity-0 fw-bold fs-6"
            >
              Utilisateurs
            </Link>
          </li>
          <li>
            <Link
              to="/cotisations"
              className="text-white link-underline link-underline-opacity-0 fw-bold fs-6"
            >
              Cotisations
            </Link>
          </li>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}
<div class="dropdown">
  <a
    class="btn dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Paramètres
  </a>

  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="#">
        Paramètres Généraux
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        Utilisateurs
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        Archives
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="#">
        Membres Bloqués
      </a>
    </li>
  </ul>
</div>;

export default Sidebar;
