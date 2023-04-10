import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ArticleIcon from '@mui/icons-material/Article';
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../css/components_css/Home_rol.css'
import Header from "../components/Header";
import Footer from "../components/Footer";




function Nueva_solicitud() {
    return(
        <><Header></Header><Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}><Box className="Box_margin"></Box></Grid>
                <Grid item xs={12} md={6}>
                    <Box className='Box_option' textAlign='center' onClick={() => { window.alert("Práctica"); } }>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5">Práctica</Typography>
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
                <Grid item xs={12} md={6}>
                    <Box className='Box_option' textAlign='center' onClick={() => { window.alert("Solicitud Externa"); } }>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Box className="Box_option_margin">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={12}>
                                            <Typography component="h1" variant="h5">Solicitud Externa</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <AddBoxIcon sx={{ fontSize: 60 }}></AddBoxIcon>
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
        <Footer></Footer>
        </>
    )
}

export default Nueva_solicitud;