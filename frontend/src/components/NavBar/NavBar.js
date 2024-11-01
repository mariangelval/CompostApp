import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import "../NavBar/NavBar.css";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navegate = useNavigate();
  const goToEscuelas = () => {
    navegate("/escuelas");
  };
  const goToInicio = () => {
    navegate("/dash");
  };
  const goToSolicitud = () => {
    navegate("/solicitud");
  };

  const goToEspaciosVerdes=()=>{
    navegate("/espacios-verdes");
  }
  const goToInicioEscuela=()=>{
    navegate("/dashEscuela");
  }

  return (
    <>
      <AppBar position="fixed" className="navbar">
        <Toolbar>
          <SpaIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ my: 2 }}>
            COMPOSTAPP
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button color="inherit" onClick={goToInicio}>
              Inicio
            </Button>
            <Button color="inherit" onClick={goToSolicitud}>
              Formulario
            </Button>
            <Button color="inherit" onClick={goToEscuelas}>
              Buscar
            </Button>
            <Button color="inherit" onClick={goToEspaciosVerdes}>
              Espacios Verdes
            </Button>
            <Button color="inherit" onClick={goToInicioEscuela}>
              Inicio2
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={goToInicio}>Inicio</MenuItem>
          <MenuItem onClick={goToSolicitud}>Formulario</MenuItem>
          <MenuItem onClick={goToEscuelas}>Buscar</MenuItem>
          <MenuItem onClick={goToEspaciosVerdes}>Espacios Verdes</MenuItem>
          <MenuItem onClick={goToInicioEscuela}>Inicio2</MenuItem>
        </Menu>
      </AppBar>
      <Box sx={{ height: 20 }} />
    </>
  );
}

export default Navbar;
