import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "nombre", label: "Nombre", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "calle", label: "Calle", minWidth: 170 },
  { id: "altura", label: "Altura", minWidth: 100, align: "right" },
];

function createData(id, nombre, email, calle, altura) {
  return { id, nombre, email, calle, altura };
}

const rows = [
  createData(
    1,
    "Escuela Primaria Hidalgo",
    "contacto@hidalgo.edu",
    "Av. Revolución",
    123
  ),
  createData(2, "Colegio Juárez", "info@juarez.edu", "Calle Libertad", 456),
  createData(
    3,
    "Instituto Nacional de Educación",
    "contacto@ine.edu",
    "Av. Central",
    789
  ),
  createData(
    4,
    "Escuela Secundaria Morelos",
    "info@morelos.edu",
    "Calle 5 de Mayo",
    321
  ),
  createData(
    5,
    "Colegio Internacional",
    "contacto@internacional.edu",
    "Av. Paseo de la Reforma",
    234
  ),
  createData(
    6,
    "Escuela Técnica #1",
    "info@tecnica1.edu",
    "Calle Reforma Agraria",
    876
  ),
  createData(
    7,
    "Liceo Francés",
    "contacto@liceofrances.edu",
    "Calle Insurgentes",
    987
  ),
  createData(
    8,
    "Escuela de Ciencias Exactas",
    "info@cienciasexactas.edu",
    "Av. Universidad",
    654
  ),
  createData(
    9,
    "Escuela Modelo",
    "contacto@model.edu",
    "Calle Independencia",
    112
  ),
  createData(
    10,
    "Centro Educativo Santa Fe",
    "info@santafe.edu",
    "Av. Colón",
    567
  ),
];

function EscuelasList({ busqueda }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const escuelasFiltrados = rows.filter((escuela) =>
    escuela.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  return (
    <div className="tabla">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440, width: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#416340",
                      color: "white", // Color de texto del encabezado
                      fontWeight: "bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {escuelasFiltrados
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={escuelasFiltrados.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default EscuelasList;
