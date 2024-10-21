import React, { Component } from 'react'
import { FaRegBell } from "react-icons/fa";
import image from "../assets/Ellipse 9.png";
import { Link } from "react-router-dom"; 


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-white position-fixed shadow">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold">Admin Dashboard</a>
            <form className="d-flex me-5" role="search">
              <FaRegBell className="fs-3 m-2 " />
              <img src={image} alt="Logo" width="50" />
              <div className="dropdown ">
                <button
                  className="btn dropdown-toggle border border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ndiaga SALL
                  
                </button>
                {/* <p className="font mb-3">Administrateur</p> */}
                <ul className="dropdown-menu text-center">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Modifier mot de passe
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Déconnexion
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar