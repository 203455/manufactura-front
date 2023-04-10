import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { Box, Container } from "@mui/system";
import {AccountCircle} from "@mui/icons-material"
import '../css/components_css/Header.css'


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <AppBar position="static" component='nav' >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                    onClick={window.location.href='/inicio'}
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none'
                    }}
                    >
                        Taller Manufactura
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}></Box>
                    <Box sx={{ flexGrow: 0 }}  className='Header_icon'>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMenu}
                            sx={{p: 0 }}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem  >Perfil</MenuItem>
                            <MenuItem  >Cerrar Sesión</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;