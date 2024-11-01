import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Inicio from "../pages/gobierno/Inicio";
import Escuelas from "../pages/gobierno/Escuelas";
import Solicitud from "../pages/escuela/Solicitud";
import EspaciosVerdes from "../pages/gobierno/EspaciosVerdes";
import InicioEscuela from "../pages/escuela/InicioEscuela";
function Routing() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dash" element={<Inicio />} />
          <Route path="/escuelas" element={<Escuelas />} />
          <Route path="/solicitud" element={<Solicitud />} />
          <Route path="/espacios-verdes" element={<EspaciosVerdes/>}/>
          <Route path="/dashEscuela" element={<InicioEscuela/>}/>
        </Routes>
      </Router>
  );
}

export default Routing;
