import * as React from 'react';
import { Container, Box } from "@mui/system";
import { Grid, Button, TextField } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import User from '../components/User';
import '../css/pages_css/Password.css';



function Password() {
    return(
        <><Header></Header><Container>
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={1} md={3} ></Grid>
                    <Grid item xs={10} md={6}>
                        <Box className='Box_profile_info' alignContent='center' alignItems='center' textAlign='center'>
                            <User></User>
                            <TextField
                            className='Text_password'
                            margin="normal"
                            required
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            />
                            <TextField
                            className='Text_password'
                            margin="normal"
                            required
                            name="password"
                            label="Confirmar Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            />
                            <Button className='Button_password' variant='contained'>
                                Cambiar
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={3} ></Grid>
                </Grid>
            </Box>
        </Container>
        <Footer></Footer>
        </>
    )
}

export default Password;