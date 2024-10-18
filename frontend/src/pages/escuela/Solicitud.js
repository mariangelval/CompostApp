import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SchoolForm from "../../components/Form/SchoolForm";
import "./Solicitud.css"
function Solicitud() {
  return (
    <div className="solicitud-container">
      <NavBar />
      <h1>Solicitud</h1>
      <SchoolForm />
    </div>
  );
}

export default Solicitud;
