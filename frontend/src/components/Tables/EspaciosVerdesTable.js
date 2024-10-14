import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name) {
  return { name };
}

const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];
function EspaciosVerdesTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "50%", // Ocupa solo la mitad del ancho
        borderRadius: "10px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center", // Centrar el encabezado
                fontWeight: "bold",
              }}
            >
              Espacios Verdes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  textAlign: "center", // Centra el texto dentro de cada celda
                }}
              >
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EspaciosVerdesTable;
