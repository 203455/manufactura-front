import * as React from 'react';
import {Box, Grid, Typography, TextField, Button, Autocomplete} from '@mui/material/';
import { Container, Stack } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/pages_css/Form_solicitud.css'



function Form_materiales() {

    const [image, setImage] = React.useState([])


    const getImage = () => { document.getElementById('input_image').click() }

    const loadImages = (e) => {
        var images = []
        const reader = new FileReader();
        for (let index = 0; index < e.target.files.length; index++) {
            images.push(e.target.files[index])
        }
        setImage(images)
        for (let index = 0; index < e.target.files.length; index++) {
            document.getElementById(index + 30).removeAttribute('hidden')
            document.getElementById(index + 40).removeAttribute('hidden')
            reader.readAsDataURL(e.target.files[index])
            reader.onload = (e) => {
                e.preventDefault();
                document.getElementById(index + 40).src = e.target.result
            }
        }
    }


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
                                                    id="nombre_material"
                                                    label="Nombre del Material"
                                                    name="nombre_material"
                                                    autoFocus
                                                    />
                                                    <TextField
                                                    className='Textfield_normal'
                                                    type='text'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="marca"
                                                    label="Marca"
                                                    name="marca"
                                                    autoFocus
                                                    />
                                                    <TextField
                                                    className='Textfield_normal'
                                                    type='text'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="serie_elemento"
                                                    label="Serie de elemento"
                                                    name="serie_elemento"
                                                    autoFocus
                                                    />
                                                    <TextField
                                                    className='Textfield_normal'
                                                    type='text'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="codigo_identificacion"
                                                    label="Código de Identificación"
                                                    name="codigo_identificacion"
                                                    autoFocus
                                                    />
                                                    <TextField
                                                    className='Textfield_normal'
                                                    type='text'
                                                    multiline
                                                    maxRows={4}
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="descripcion"
                                                    label="Descripción"
                                                    name="descripcion"
                                                    autoFocus
                                                    />
                                                    <TextField
                                                    className='Textfield_normal'
                                                    multiline
                                                    maxRows={4}
                                                    type='text'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="caracteristicas"
                                                    label="Características"
                                                    name="caracteristicas"
                                                    autoFocus
                                                    />
                                                    <TextField
                                                    className='Textfield_normal'
                                                    type='number'
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="cantidad"
                                                    label="Cantidad"
                                                    name="cantidad"
                                                    autoFocus
                                                    />
                                                    <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    onClick={getImage}
                                                    sx={{ mt: 3, mb: 2 }}
                                                    >
                                                    Subir Imagen
                                                    </Button>
                                                    <input onChange={(e) => { loadImages(e) }} type="file" accept="image/*" id="input_image" hidden />
                                                    <Button
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                    >
                                                    Guardar
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

export default Form_materiales;