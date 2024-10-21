import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Warning from "../../assets/img/warning.jpg";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ConfirmEscuelaModal({ open, handleClose, handleConfirm }) {
  return (
    <Modal open={open} onClose={handleClose} className="modal-warning">
      <Box sx={modalStyle}>
        <img src={Warning} alt="advertencia de borrado"></img>
        <h2>Confirmar Borrado</h2>
        <p>¿Estás seguro de que deseas borrar esta institución?</p>
        <Button variant="contained" color="secondary" onClick={handleConfirm} className="boton-confirmar">
          Confirmar
        </Button>
        <Button
          variant="contained"
          onClick={handleClose}
          className="boton-cancelar"
        >
          Cancelar
        </Button>
      </Box>
    </Modal>
  );
}

export default ConfirmEscuelaModal;
