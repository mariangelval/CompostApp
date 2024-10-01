import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button,IconButton, Menu, MenuItem } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu';
import '../NavBar/NavBar.css'
function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="fixed" className="navbar" sx={{backgroundColor:'#618760'}}>
            <Toolbar>
            <SpaIcon sx={{ mr: 1 }} />
                <Typography variant="h6" component="div" sx={{ my: 2 }}>
                    COMPOSTAPP
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                    <Button color='inherit'>Inicio</Button>
                    <Button color='inherit'>Formulario</Button>
                    
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
                    <IconButton
                        color="inherit"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Inicio</MenuItem>
                <MenuItem onClick={handleMenuClose}>Formulario</MenuItem>
                
            </Menu>
        </AppBar>
    );
}

export default Navbar;
