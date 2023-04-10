import * as React from 'react';
import {Box, Grid, Typography, TextField, Button, Autocomplete} from '@mui/material/';
import { Container, Stack } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/pages_css/Form_solicitud.css'



function Form_practica() {
    return(
        <>
        <Header></Header>
        <Container>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}></Grid>
                    <Grid item xs={12} md={12}></Grid>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Box className='Box_form' textAlign='center' alignContent='center'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                </Grid>
                                <Grid item xs={12} md={12} >
                                    <Typography component="h1" variant="h5" >Práctica</Typography>
                                </Grid>
                                <Grid item xs={12} md={12} >
                                    <Box component="form" noValidate sx={{ mt: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid xs={2} md={2} ></Grid>
                                            <Grid xs={8} md={8} >
                                                <Box>
                                                    <TextField
                                                    className='Textfield_normal'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="nombre_materia"
                                                    label="Materia"
                                                    name="materia"
                                                    autoFocus
                                                    />
                                                    <TextField
                                                    className='Textfield_normal'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="nombre_practica"
                                                    label="Práctica"
                                                    name="practica"
                                                    autoFocus
                                                    />
                                                    <Stack>
                                                    <Autocomplete
                                                    className='Textfield_normal'
                                                    multiple
                                                    id="tags-outlined"
                                                    options={materiales}
                                                    getOptionLabel={(option) => option.title}
                                                    filterSelectedOptions
                                                    renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Materiales"
                                                    />
                                                    )}
                                                    />
                                                    </Stack>
                                                    <TextField
                                                    className='Textfield_normal'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="observacion"
                                                    label="Observaciones"
                                                    name="observaciones"
                                                    autoFocus
                                                    />
                                                    <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                    >
                                                    Generar
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
                    <Grid item xs={1} md={3}></Grid>
                </Grid>
            </Box>
        </Container>
        <Footer></Footer>
        </>
    )
}

const materiales = [
    { title: 'Destornillador' },
    { title: 'Guantes' },
    { title: 'Cortadora' },
    { title: 'Taladro' },
    { title: 'Martillo' },
  ];


export default Form_practica;