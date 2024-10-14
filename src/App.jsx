import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Connection from "./components/Connection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inscription from "./components/Inscription";
import Accueil from "./components/Accueil";
import Cotisations from "./components/Cotisations";
import Utilisateurs from "./components/Utilisateurs";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <div>
            <Routes>
              <Route path="/connection" element={<Connection />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/utilisateurs" element={<Utilisateurs />} />
              <Route path="/cotisations" element={<Cotisations />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
