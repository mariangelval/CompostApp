import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import "../NavBar/NavBar.css";

function NavBarInstitucion() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navegate = useNavigate();
  const goToInicio = () => {
    navegate("/");
  };
  const goToCuenta = () => {
    navegate("/dashEscuela");
  };
  const goToSolicitud = () => {
    navegate("/solicitud");
  };
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
            <Button color="inherit" onClick={goToSolicitud}>
              Solicitud
            </Button>
            <Button color="inherit" onClick={goToInicio}>
              <LogoutIcon />
            </Button>
            <Button color="inherit" onClick={goToCuenta}>
              <AccountCircleIcon />
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
          <MenuItem onClick={goToCuenta}>
            <AccountCircleIcon />
            Inicio
          </MenuItem>
          <MenuItem onClick={goToSolicitud}>
            <EmailIcon />
            Solicitud
          </MenuItem>
          <MenuItem onClick={goToInicio}>
            <LogoutIcon />
            Salir
          </MenuItem>
        </Menu>
      </AppBar>
      <Box sx={{ height: 20 }} />
    </>
  );
}

export default NavBarInstitucion;
