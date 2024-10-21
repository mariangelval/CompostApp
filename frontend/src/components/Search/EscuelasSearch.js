import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "100px",
  padding: "4px",
  width: "100%",
  paddingLeft: "10px",
  backgroundColor: "#ece6f0", // Fondo del contenedor de búsqueda
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1, // Para que el input ocupe el espacio restante
  color: "inherit",
  backgroundColor: "#ece6f0", // Fondo del input
  border: "none",
  outline: "none", // Para remover borde
  width: "400px",
}));

function EscuelasSearch({ busqueda, setBusqueda }) {
  return (
    <Search>
      {/* Ícono de búsqueda a la izquierda */}
      <SearchIcon style={{ marginRight: "4px", color: "black" }} />

      {/* Input para buscar */}
      <StyledInputBase
        type="text"
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Escribe el nombre del instituto"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export default EscuelasSearch;
