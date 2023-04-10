import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ArticleIcon from '@mui/icons-material/Article';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BuildIcon from '@mui/icons-material/Build';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import '../css/components_css/Home_rol.css'




function Home_admin() {
    return(
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}><Box className="Box_margin" ></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Box className='Box_option' textAlign='center' onClick={()=>{window.alert("Entradas/Salidas");}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5" >Entradas/Salidas</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <CoPresentIcon sx={{ fontSize: 60 }}></CoPresentIcon>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}></Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className='Box_option' textAlign='center' onClick={()=>{window.alert("Aceptar Solicitudes");}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5" >Aceptar Solicitudes</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <ArticleIcon sx={{ fontSize: 60 }}></ArticleIcon>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}></Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className='Box_option' textAlign='center' onClick={()=>{window.alert("Agregar Materiales");}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5" >Agregar Materiales</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <BusinessCenterIcon sx={{ fontSize: 60 }}></BusinessCenterIcon>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}></Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className='Box_option' textAlign='center' onClick={()=>{window.alert("Ver Materiales");}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5" >Ver Materiales</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <BuildIcon sx={{ fontSize: 60 }}></BuildIcon>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}></Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}></Grid>
            </Grid>
        </Container>
    )
}

export default Home_admin;