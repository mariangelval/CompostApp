import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const formModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EscuelaUPModal({ open, handleClose }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { nombre, email, calle, altura, password };
    console.log("Datos enviados:", formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={formModalStyle}>
        <h2>Editar una Institución</h2>
        <form className="form-modal" onSubmit={handleSubmit}>
          <div className="CalleAltura">
            <div className="inp1">
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
                onChange={(e) => setEmail(e.target.value)} // Corregido el 'value'
              />
            </div>
          </div>
          <div className="CalleAltura">
            <div className="input-calleAltura inp1">
              <label>Calle</label>
              <br />
              <input
                type="text"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
              />
            </div>
            <div className="input-calleAltura">
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
              color="primary"
              className="boton-cancelar"
            >
              Cancelar
            </Button>
            <Button
              style={{ borderRadius: "100px", width: "120px" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Guardar
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default EscuelaUPModal;
