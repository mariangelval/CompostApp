import React from "react";
import PendientesTable from "../../components/Tables/PendientesTable";
import EspaciosVerdesTable from "../../components/Tables/EspaciosVerdesTable";
import compostIcon from "../../assets/img/compost.png";
import Navbar from "../../components/NavBar/NavBar";
import "./Inicio.css";

function Inicio() {
  return (
    <div class="container-pendientes">
      <Navbar />
      <PendientesTable />
      <div class="container-verdes-reserva">
        <EspaciosVerdesTable />
        <div class="reserva-compost">
          <div class="p-style">
            <p>Reserva de Compost</p>
          </div>
          <img src={compostIcon} alt="composta icono"></img>
          <div class="p-style k">
            <p>12k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
