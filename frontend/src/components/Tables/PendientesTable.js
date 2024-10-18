import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

function createData(pendientes, dia) {
  return { pendientes, dia };
}
const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];

function PendientesTable() {
  const today = new Date().toISOString().split("T")[0];

  const [dateValues, setDateValues] = useState(() => {
    const savedDates = localStorage.getItem("dateValues");
    return savedDates ? JSON.parse(savedDates) : Array(rows.length).fill("");
  });
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleDateChange = (event) => {
    const newDateValue = event.target.value;
    setDateValues((prev) => {
      const newValues = [...prev];
      newValues[currentIndex] = newDateValue;
      localStorage.setItem("dateValues", JSON.stringify(newValues));
      return newValues;
    });
  };

  const handleClickOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    setOpen(false);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                borderRight: "1px solid black",
                width: "50%",
                textAlign: "center",
              }}
            >
              Recoleccion Pendientes
            </TableCell>
            <TableCell
              sx={{
                width: "50%",
                textAlign: "center",
              }}
            >
              Dia Programado
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.pendientes}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: "1px solid black",
                  width: "50%",
                  textAlign: "center",
                  padding: "8px",
                }}
              >
                {row.pendientes}
              </TableCell>
              <TableCell
                sx={{
                  width: "50%",
                  textAlign: "center",
                  padding: "8px",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => handleClickOpen(index)}
                >
                  {dateValues[index] ? "Cambiar Fecha" : "Seleccionar Fecha"}
                </Button>
                <div>
                  {dateValues[index] &&
                    `Fecha seleccionada: ${dateValues[index]}`}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Seleccionar Fecha</DialogTitle>
        <DialogContent>
          <TextField
            type="date"
            fullWidth
            onChange={handleDateChange}
            defaultValue={dateValues[currentIndex]}
            inputProps={{
              min: today,
            }}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              handleAccept();
              handleDateChange({ target: { value: dateValues[currentIndex] } });
            }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}

export default PendientesTable;