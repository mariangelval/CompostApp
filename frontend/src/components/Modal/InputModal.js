import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function InputModal({ open, handleClose, onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="input-modal-title"
      aria-describedby="input-modal-description"
    >
      <Box sx={modalStyle}>
        <h2 id="input-modal-title">Ingresar ID</h2>
        <TextField
          label="Escribe algo"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: 2, backgroundColor: "#618760", marginRight: "5px" }}
        >
          Continuar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ marginTop: 2, backgroundColor: "#ff4f4f" }}
          className="boton-cancelar"
        >
          cancelar
        </Button>
      </Box>
    </Modal>
  );
}

export default InputModal;
