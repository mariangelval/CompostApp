import * as React from "react";
import { useState } from "react";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
const columns = [
  { id: "nombreEscuela", label: "nombre", minWidth: 170 },
  { id: "direccion", label: "direccion", minWidth: 100 },
  {
    id: "codigoPostal",
    label: "codigoPostal",
    minWidth: 170,
    align: "right",
  },
];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

function createData(nombreEscuela, direccion, codigoPostal) {
  return { nombreEscuela, direccion, codigoPostal };
}

const rows = [
  createData("Escuela Primaria Hidalgo", "Av. Revolución 123", "11560"),
  createData("Colegio Juárez", "Calle Libertad 456", "23000"),
  createData("Instituto Nacional de Educación", "Av. Central 789", "28940"),
  createData("Escuela Secundaria Morelos", "Calle 5 de Mayo 321", "55870"),
  createData("Colegio Internacional", "Av. Paseo de la Reforma 234", "04340"),
  createData("Escuela Técnica #1", "Calle Reforma Agraria 876", "60900"),
  createData("Liceo Francés", "Calle Insurgentes 987", "21000"),
  createData("Escuela de Ciencias Exactas", "Av. Universidad 654", "07960"),
  createData("Escuela Modelo", "Calle Independencia 112", "76230"),
  createData("Centro Educativo Santa Fe", "Av. Colón 567", "11000"),
];

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
function EscuelasList() {
  const [busqueda, setBusqueda] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const productosFiltrados = rows.filter((producto) =>
    producto.nombreEscuela.toLowerCase().includes(busqueda.toLowerCase())
  );
  return (
    <div>
      <h1>Escuelas</h1>
      <label>
        Buscar por nombre:
        <Search sx={{ backgroundColor: "white", border: "1px solid black" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Escribe el nombre del instituto"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </label>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
              {productosFiltrados
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
          count={rows.length}
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
