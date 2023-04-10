import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from "@mui/system";
import { Grid, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Container } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/pages_css/List_practicas.css'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

function Solicitudes_progress() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [distance, setDistance] = React.useState(5);

    const [progreso, setProgreso] = React.useState(0);

    const acceptSoli = () =>{
        setDistance(distance-1)
        setProgreso(progreso+1)
        handleClose()
    }

    const deleteSoli = () =>{
        setDistance(distance-1)
        handleClose()
    };

    const finished = ()=>{
        setProgreso(progreso-1)
        handleClose()
    }

    return(
        <><Header></Header>
        <Container>
            <Box className='Box_container'>
                <Grid container spacing={3}>
                <Grid className="Grid_item" item xs={12} md={12}>
                        <Typography variant="h5" align="center" gutterBottom>
                            En Progreso
                        </Typography>
                    </Grid>
                    {progreso>0
                    ? Array.from(Array(progreso)).map((_,index)=>(
                        <><Grid item xs={1} md={2}></Grid><Grid item xs={10} md={8}>
                            <Box className='Box_item' justifyContent='center' textAlign='center'>
                                <Grid container spacing={2}>
                                    <Grid className="Grid_item" item xs={12} md={3}>
                                        <Typography variant="h6" align="center" gutterBottom>
                                            Nombre de la Solicitud
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '0.5rem' }} className="Grid_item" item xs={12} md={6}>
                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            Nombre de la materia
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            Nombre del jefe de equipo
                                        </Typography>
                                    </Grid>
                                    <Grid className="Grid_item" item xs={12} md={3}>
                                        <Button sx={{ marginTop: '0.8rem', fontWeight: 'bold', marginBottom: '1.5rem' }} onClick={handleClickOpen}>
                                            Ver más
                                        </Button>
                                        <BootstrapDialog
                                            onClose={handleClose}
                                            aria-labelledby="customized-dialog-title"
                                            open={open}
                                        >
                                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                Titulo de la Práctica
                                            </BootstrapDialogTitle>
                                            <DialogContent dividers>
                                                <Typography gutterBottom>
                                                    Nombre de la materia
                                                </Typography>
                                                <Typography gutterBottom>
                                                    Participantes: 203455, 203454, 203453, 203452, 203451
                                                </Typography>
                                                <Typography gutterBottom>
                                                    Materiales a emplear: Guantes de Proteccion, lentes de proteccion,
                                                    lentes de protección, Taladro.
                                                </Typography>
                                                <Typography gutterBottom>
                                                    Observaciones: N/A
                                                </Typography>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button variant="outlined" color="secundary" autoFocus onClick={finished}>
                                                    Terminar
                                                </Button>
                                            </DialogActions>
                                        </BootstrapDialog>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid><Grid item xs={1} md={2}></Grid></>
                    ))
                    : <Grid className="Grid_item" item xs={12} md={12}>
                        <Typography variant="h6" align="center" gutterBottom>
                            No Hay Solicitudes en Progreso
                        </Typography>
                    </Grid>}
                    <Grid className="Grid_item" item xs={12} md={12}>
                        <Typography variant="h5" align="center" gutterBottom>
                            En Espera
                        </Typography>
                    </Grid>
                    {Array.from(Array(distance)).map((_,index)=>(
                        <><Grid item xs={1} md={2}></Grid><Grid item xs={10} md={8}>
                            <Box className='Box_item' justifyContent='center' textAlign='center'>
                                <Grid container spacing={2}>
                                    <Grid className="Grid_item" item xs={12} md={3}>
                                        <Typography variant="h6" align="center" gutterBottom>
                                            Nombre de la Solicitud
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '0.5rem' }} className="Grid_item" item xs={12} md={6}>
                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            Nombre de la materia
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            Nombre del jefe de equipo
                                        </Typography>
                                    </Grid>
                                    <Grid className="Grid_item" item xs={12} md={3}>
                                        <Button sx={{ marginTop: '0.8rem', fontWeight: 'bold', marginBottom: '1.5rem' }} onClick={handleClickOpen}>
                                            Ver más
                                        </Button>
                                        <BootstrapDialog
                                            onClose={handleClose}
                                            aria-labelledby="customized-dialog-title"
                                            open={open}
                                        >
                                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                Titulo de la Práctica
                                            </BootstrapDialogTitle>
                                            <DialogContent dividers>
                                                <Typography gutterBottom>
                                                    Nombre de la materia {index}
                                                </Typography>
                                                <Typography gutterBottom>
                                                    Participantes: 203455, 203454, 203453, 203452, 203451
                                                </Typography>
                                                <Typography gutterBottom>
                                                    Materiales a emplear: Guantes de Proteccion, lentes de proteccion,
                                                    lentes de protección, Taladro.
                                                </Typography>
                                                <Typography gutterBottom>
                                                    Observaciones: N/A
                                                </Typography>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button variant='outlined' color="success" autoFocus onClick={acceptSoli}>
                                                    Empezar
                                                </Button>
                                                <Button variant="outlined" color="error" autoFocus onClick={deleteSoli}>
                                                    Eliminar
                                                </Button>
                                            </DialogActions>
                                        </BootstrapDialog>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid><Grid item xs={1} md={2}></Grid></>
                    ))}
                </Grid>
            </Box>
        </Container>
        <Footer></Footer></>
    )
}

export default Solicitudes_progress;