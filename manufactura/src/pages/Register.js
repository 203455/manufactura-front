import * as React from 'react';
import { Grid, Typography, Button, Stack, Autocomplete, TextField} from "@mui/material";
import { Box, Container } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/pages_css/List_practicas.css'
import '../css/pages_css/Form_solicitud.css'


function Register() {


    const [distance, setDistance] = React.useState(0);

    const acceptSoli = () =>{
        setDistance(distance+1)
    }

    const deleteSoli = () =>{
        setDistance(distance-1)
    };

    return(
        <><Header></Header>
        <Container>
            <Box className='Box_container'>
                <Grid container spacing={3}>
                <Grid className="Grid_item" item xs={12} md={12}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Nuevo ingreso
                    </Typography>
                </Grid>
                <Grid item xs={1} md={2}></Grid>
                <Grid item xs={10} md={8} >
                    <Box className='Box_form' textAlign='center' alignContent='center'>
                        <Grid item xs={12} md={12} >
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid xs={2} md={2} ></Grid>
                                    <Grid xs={8} md={8} >
                                        <Box>
                                            <Stack>
                                                <Autocomplete
                                                className='Textfield_normal'
                                                id="tags-outlined"
                                                options={matriculas}
                                                getOptionLabel={(option) => option.title}
                                                filterSelectedOptions
                                                renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Usuario"
                                                    placeholder="Matricula"
                                                />
                                                )}
                                                />
                                            </Stack>
                                            <TextField
                                            className='Textfield_50'
                                            margin="normal"
                                            required
                                            name="grado"
                                            label="Grado"
                                            type="number"
                                            id="grado"
                                            />
                                            <TextField
                                            className='Textfield_50'
                                            margin="normal"
                                            required
                                            name="grupo"
                                            label="Grupo"
                                            type="text"
                                            id="grupo"
                                            />
                                            <TextField
                                            className='Textfield_normal'
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="nombre_actividad"
                                            label="Actividad"
                                            name="actividad"
                                            autoFocus
                                            />
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
                                            fullWidth
                                            variant="contained"
                                            onClick={acceptSoli}
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
                    </Box>
                </Grid>
                <Grid item xs={1} md={2}></Grid>
                <Grid className="Grid_item" item xs={12} md={12}>
                        <Typography variant="h5" align="center" gutterBottom>
                            En Progreso
                        </Typography>
                    </Grid>
                    {distance > 0 ? Array.from(Array(distance)).map((_,index)=>(
                        <><Grid item xs={1} md={2}></Grid><Grid item xs={10} md={8}>
                            <Box className='Box_item' justifyContent='center' textAlign='center'>
                                <Grid container spacing={2}>
                                    <Grid sx={{marginBottom:'0.4rem'}} className="Grid_item" item xs={12} md={3}>
                                        <Typography sx={{marginTop:'0.4rem', marginBottom:'0.5rem'}} variant="h6" align="center">
                                            Nombre del Usuario
                                        </Typography>
                                        <Typography
                                            sx={{marginBottom:'0.5rem'}}
                                            variant="subtitle1"
                                            align="center"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            Grado y Grupo
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '0.8rem' }} className="Grid_item" item xs={12} md={6}>
                                        <Typography
                                            sx={{marginTop: '0.3rem', marginBottom:'0.3rem'}}
                                            variant="subtitle1"
                                            align="center"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            Nombre de la Actividad
                                        </Typography>
                                        <Typography
                                            sx={{marginTop: '0.5rem'}}
                                            variant="subtitle1"
                                            align="center"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            Equipo Utilizado
                                        </Typography>
                                    </Grid>
                                    <Grid className="Grid_item" item xs={12} md={3}>
                                        <Button color='error' sx={{ marginTop: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }} onClick={deleteSoli}>
                                            Finalizar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid><Grid item xs={1} md={2}></Grid></>
                    ))
                : <Grid className="Grid_item" item xs={12} md={12}>
                    <Typography variant="h6" align="center" gutterBottom>
                        No hay usuarios usando el material
                    </Typography>
                </Grid>
                }
                </Grid>
            </Box>
        </Container>
        <Footer></Footer></>
    )
}


const matriculas = [
    { title: 193893 },
    { title: 213688 },
    { title: 193423 },
    { title: 203454 },
    { title: 203455 },
  ];


const materiales = [
    { title: 'Destornillador' },
    { title: 'Guantes' },
    { title: 'Cortadora' },
    { title: 'Taladro' },
    { title: 'Martillo' },
  ];

export default Register;