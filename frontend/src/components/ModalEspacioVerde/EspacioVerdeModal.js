import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "40px",
  p: 4,
};

function EspacioVerdeModal({ open, handleClose, isEditing, recordId }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [dimension, setDimension] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState("");
  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isEditing && recordId) {
      // para cargar desde la bd
    }
  }, [isEditing, recordId]);
  useEffect(() => {
    if (open) {
      setAltura("");
      setCalle("");
      setDescripcion("");
      setDimension(0);
      setNombre("");
    }
  }, [open]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="modal-escuela"
    >
      <Box sx={modalStyle}>
        <h2 id="modal-title">
          {isEditing ? "Editar Espacio Verde" : "Agregar Espacio Verde"}
        </h2>

        <form className="form-modal">
          <div className="CalleAltura">
            <div class="inp1">
              <label>Nombre</label>
              <br />
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div class="input-calleAltura inp1">
              <label>Calle</label>
              <br />
              <input
                type="text"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
              />
            </div>
          </div>
          <div class="CalleAltura">
            <div class="inp1">
              <label>Altura</label>
              <br />
              <input
                type="number"
                value={altura}
                step={0.001}
                min="0"
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
            <div class="input-calleAltura inp1">
              <label>Dimensión</label>
              <br />
              <input
                type="number"
                value={dimension}
                min="0"
                onChange={(e) => setDimension(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Descripcion</label>
            <br />
            <textarea
              name="descripcion"
              rows="4"
              cols="38"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div className="container-botones-agregar">
            <Button
              onClick={handleClose}
              style={{
                borderRadius: "100px",
                width: "120px",
                backgroundColor: "#ff4f4f",
              }}
              variant="contained"
              className="button-cancelar"
            >
              Cancelar
            </Button>
            <Button
              style={{ borderRadius: "100px", width: "120px" }}
              variant="contained"
              type="submit"
              className="boton-confirmar"
            >
              Guardar
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default EspacioVerdeModal;
