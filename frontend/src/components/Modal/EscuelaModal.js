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

function EscuelaModal({ open, handleClose, isEditing, recordId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [errorMessage, setErrorMessage] = useState("");
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
      setEmail("");
      setPassword("");
      setNombre("");
      setCalle("");
      setAltura("");
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
          {isEditing ? "Editar Instituto" : "Agregar Instituto"}
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
            <div>
              <label>Email</label>
              <br />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.vaue)}
              />
            </div>
          </div>
          <div class="CalleAltura">
            <div class="input-calleAltura inp1">
              <label>Calle</label>
              <br />
              <input
                type="text"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
              />
            </div>
            <div class="input-calleAltura">
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
          </div>
          <div>
            <label>Contraseña</label>
            <br />
            <input
              type="text"
              style={{ width: "300px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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

export default EscuelaModal;
