import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function EscuelasButtons({ onButtonClick, onSecondButtonClick, onThirdButtonClick }) {
  return (
    <div
      class="container-botones-escuelas"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "3px",
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          margin: "5px",
          borderRadius: "100px",
        }}
        onClick={onButtonClick}
      >
        <AddIcon style={{ marginRight: "4px" }} /> Agregar
      </button>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          margin: "5px",
          borderRadius: "100px",
          width: "105px",
        }}
        onClick={onSecondButtonClick}
      >
        <EditIcon style={{ marginRight: "10px" }} />
        Editar
      </button>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          margin: "5px",
          borderRadius: "100px",
          width: "105px",
        }}
        onClick={onThirdButtonClick}
      >
        <DeleteIcon style={{ marginRight: "10px" }} />
        Borrar
      </button>
    </div>
  );
}

export default EscuelasButtons;
