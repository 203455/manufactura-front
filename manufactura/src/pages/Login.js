import * as React from 'react';
import { Container, Box, Grid, Typography, TextField, Button } from '@mui/material/';
import '../css/pages_css/Login.css';

function Login() {

    return (
        <Container>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}></Grid>
                    <Grid item xs={12} md={12}></Grid>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Box textAlign='center' alignContent='center' className='Box_content_login'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                </Grid>
                                <Grid item xs={12} md={12} >
                                    <Typography component="h1" variant="h5" >Iniciar Sesión</Typography>
                                </Grid>
                                <Grid item xs={12} md={12} >
                                    <Box component="form" noValidate sx={{ mt: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid xs={2} md={2} ></Grid>
                                            <Grid xs={8} md={8} >
                                                <Box>
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Correo"
                                                        name="email"
                                                        autoComplete="email"
                                                        autoFocus
                                                    />
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="Contraseña"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="current-password"
                                                    />
                                                    <Button

                                                        fullWidth
                                                        variant="contained"
                                                        sx={{ mt: 3, mb: 2 }}
                                                    >
                                                        Acceder
                                                    </Button>
                                                </Box>
                                            </Grid>
                                            <Grid xs={2} md={2} ></Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={12}></Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={3}></Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Login