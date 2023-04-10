import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ArticleIcon from '@mui/icons-material/Article';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BuildIcon from '@mui/icons-material/Build';
import '../css/components_css/Home_rol.css'




function Home_student() {
    return(
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}><Box className="Box_margin" ></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Box className='Box_option' textAlign='center' >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5" >Nueva Solicitud</Typography>
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
                    <Box className='Box_option' textAlign='center'  >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} >
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5" >Solicitudes</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <CheckBoxIcon sx={{ fontSize: 60 }}></CheckBoxIcon>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}></Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className='Box_option' textAlign='center'  >
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

export default Home_student;