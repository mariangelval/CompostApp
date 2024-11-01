import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import school from "../../assets/img/school-cartoon.png";
import "./InicioEscuela.css";
import AddIcon from "@mui/icons-material/Add";
import TabRecolecciones from "../../components/Tabs/TabRecolecciones";
import HistorialForm from "../../components/Form/HistorialForm";
function InicioEscuela() {
  return (
    <div className="container-inicio-escuela">
      <NavBar />
      <div className="conjunto-historial">
        <img src={school} alt="imagen de escuela"></img>
        <h1>E. T. N°12 D.E 1 “Libertador Gral. José de San Martín”</h1>
      </div>
      <hr></hr>
      <div className="container-recolecciones-escuela">
        <h2>Recolecciones</h2>
        <TabRecolecciones />
        <button className="boton-agregar">
          <AddIcon style={{ marginRight: "4px" }} /> Agregar
        </button>
      </div>
    </div>
  );
}

export default InicioEscuela;
