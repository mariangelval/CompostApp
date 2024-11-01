import "./Historial.css";
import * as React from "react";
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
  { id: "peso", label: "Peso (kilos)", minWidth: 100 },
  { id: "fechaPedido", label: "Fecha de Pedido", minWidth: 100 },
  { id: "obsPedido", label: "Observaciones de Pedido", minWidth: 150 },
  { id: "fechaRetiro", label: "Fecha de Retiro", minWidth: 100 },
  { id: "obsRetiro", label: "Observaciones de Retiro", minWidth: 150 },
];

function createData(id, peso, fechaPedido, obsPedido, fechaRetiro, obsRetiro) {
  return { id, peso, fechaPedido, obsPedido, fechaRetiro, obsRetiro };
}

const rows = [
  createData(1, 23.3, "2024-10-03", "Pedido en tiempo", "2024-10-05", "Entregar en la oficina de administración"),
  createData(2, 24, "2024-09-20", "Pedido urgente", "2024-09-22", "Recoger en recepción"),
  createData(3, 10, "2024-09-09", "Sin observaciones", "2024-09-11", "Confirmar con la Sra. Ana antes de entregar"),
  createData(4, 9, "2024-09-03", "Pedido en curso", "2024-09-05", "Llevar a la sala de profesores"),
  createData(5, 8, "2024-08-20", "Verificar peso", "2024-08-22", "Entregar a la Sra. Laura en el aula 3"),
  createData(6, 30, "2024-08-01", "Pedido especial", "2024-08-03", "Coordinar con el portero para la entrega"),
  createData(7, 7, "2024-07-23", "Sin observaciones", "2024-07-25", "Retirar del almacén"),
  createData(8, 20, "2024-07-04", "Pedido programado", "2024-07-06", "Entregar a la docente en el patio"),
  createData(9, 90, "2024-06-25", "Gran volumen", "2024-06-27", "Entregar en el gimnasio"),
  createData(10, 10, "2024-06-12", "Sin observaciones", "2024-06-14", "Retirado por el Sr. Carlos"),
  createData(11, 20, "2024-05-23", "Pedido en curso", "2024-05-25", "Confirmar entrega con la administración"),
  createData(12, 12, "2024-05-01", "Sin observaciones", "2024-05-03", "Entregar a la Sra. María en su oficina"),
  createData(13, 23, "2024-04-20", "Sin observaciones", "2024-04-22", "Entregar a la Sra. Julia en el salón 2"),
  createData(14, 25, "2024-04-03", "Pedido regular", "2024-04-05", "Coordinar entrega con el conserje"),
  createData(15, 27, "2024-03-16", "Sin observaciones", "2024-03-18", "Retirar del depósito"),
];

function HistorialForm() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "900px", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align="left">
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default HistorialForm;
