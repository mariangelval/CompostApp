import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HistorialForm from "../../components/Form/HistorialForm";
import "./Historial.css"
function Historial() {
  return (
    <div className="historial-container">
      <NavBar />
      <div className="conjunto-historial">
        <h1>Historial</h1>
        <button className="boton-agregar">Agregar</button>
      </div>
      <HistorialForm />
    </div>
  );
}

export default Historial;
