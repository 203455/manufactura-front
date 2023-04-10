import * as React from 'react'
import { Grid, Button } from "@mui/material";
import { Container, Box } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/pages_css/Profile.css'
import User from '../components/User';

function Profile() {
    return(
        <><Header></Header><Container>
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={2} md={3} ></Grid>
                    <Grid item xs={8} md={6}>
                        <Box className='Box_profile_info' alignContent='center' alignItems='center' textAlign='center'>
                            <User></User>
                            <Button className='Button_profile' variant='contained'>
                                Cambiar Contraseña
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={3} ></Grid>
                </Grid>
            </Box>
        </Container>
        <Footer></Footer>
        </>
    )
}

export default Profile;