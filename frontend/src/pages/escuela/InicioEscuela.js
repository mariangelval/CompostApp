import React, { useState } from "react";
import school from "../../assets/img/school-cartoon.png";
import "./InicioEscuela.css";
import AddIcon from "@mui/icons-material/Add";
import TabRecolecciones from "../../components/Tabs/TabRecolecciones";
import HistorialForm from "../../components/Form/HistorialForm";
import { useNavigate } from "react-router-dom";
import NavBarInstitucion from "../../components/NavBar/NavBarInstitucion";

function InicioEscuela() {
  const [tabSeleccionada, setTabSeleccionada] = useState(0); // Estado para rastrear la pestaña seleccionada

  const manejarCambioDeTab = (nuevoValor) => {
    setTabSeleccionada(nuevoValor); // Actualizar la pestaña seleccionada
  };
  const navegate = useNavigate();
  const goToFormulario = () => {
    navegate("/solicitud");
  };
  return (
    <div className="container-inicio-escuela">
      <NavBarInstitucion />
      <div className="conjunto-historial">
        <img src={school} alt="imagen de escuela"></img>
        <h1>E. T. N°12 D.E 1 “Libertador Gral. José de San Martín”</h1>
      </div>
      <hr></hr>
      <div className="container-recolecciones-escuela">
        <div className="tab-recolecciones">
          <h2>Recolecciones</h2>
          <TabRecolecciones onChange={manejarCambioDeTab} />
        </div>
        <div className="container-boton-agregar">
          <button className="boton-agregar" onClick={goToFormulario}>
            <AddIcon style={{ marginRight: "4px" }} /> Agregar
          </button>
        </div>
      </div>
      {tabSeleccionada === 1 && <HistorialForm />}
    </div>
  );
}

export default InicioEscuela;
