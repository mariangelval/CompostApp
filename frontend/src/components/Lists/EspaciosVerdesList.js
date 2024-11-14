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
  { id: "nombreEspacio", label: "Nombre", minWidth: 170 },
  { id: "direccion", label: "Dirección", minWidth: 100 },
  {
    id: "dimension",
    label: "Dimension",
    minWidth: 70,
    align: "right",
  },
  {
    id: "descipcion",
    label: "Descripción",
    minWidth: 100,
  },
];

function createData(nombreEspacio, direccion, dimension, descipcion) {
  return { nombreEspacio, direccion, dimension, descipcion };
}
const rows = [
  createData(
    "Parque Central",
    "Av. Bosque 234",
    5000,
    "Un parque con amplias áreas verdes y un lago central."
  ),
  createData(
    "Jardín Botánico",
    "Calle Flora 789",
    1200,
    "Espacio verde dedicado a la conservación de plantas nativas."
  ),
  createData(
    "Plaza de la Ciudadanía",
    "Calle Principal 567",
    2000,
    "Una plaza con jardines y áreas de descanso para la comunidad."
  ),
  createData(
    "Parque Ecológico",
    "Av. Ecológica 123",
    8000,
    "Gran espacio verde con senderos y zonas para la biodiversidad."
  ),
  createData(
    "Bosque Urbano",
    "Calle Sierra 456",
    7000,
    "Área forestal dentro de la ciudad, con rutas de senderismo."
  ),
];
function EspaciosVerdesList({ busqueda }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const espaciosFiltrados = rows.filter((espacios) =>
    espacios.nombreEspacio.toLowerCase().includes(busqueda.toLowerCase())
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
              {espaciosFiltrados
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
          count={espaciosFiltrados.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default EspaciosVerdesList;
