import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from "@mui/system";
import { Grid, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Container } from "@mui/system";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/pages_css/List_materiales.css'
import material from '../assets/images/List_materiales/esmeril.jpg'

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

function List_materiales() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    return(
        <><Header></Header>
        <Container>
            <Box className='Box_container'>
                <Grid container spacing={3}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <Box className='Box_item'  justifyContent='center' textAlign='center'>         
                            <Grid container spacing={2}>
                                <Grid className="Grid_item" item xs={12} md={3}>
                                    <Typography sx={{marginTop:'1.5rem'}} variant="h6" align="center" gutterBottom>
                                        Nombre del material
                                    </Typography>
                                </Grid>
                                <Grid sx={{marginBottom:'0.5rem'}} className="Grid_item" item xs={12} md={6}>
                                    <img className='image_material'  src={material} />
                                </Grid>
                                <Grid className="Grid_item" item xs={12} md={3}>
                                    <Button  sx={{marginTop: '3rem',
                                    fontWeight: 'bold',
                                    backgrounColor: 'red'}}   onClick={handleClickOpen}>
                                        Ver más
                                    </Button>
                                    <BootstrapDialog
                                        onClose={handleClose}
                                        aria-labelledby="customized-dialog-title"
                                        open={open}
                                    >
                                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                            Nombre del material
                                        </BootstrapDialogTitle>
                                        <DialogContent dividers>
                                        <Typography gutterBottom>
                                            Marca: TRUPER
                                        </Typography>
                                        <Typography gutterBottom>
                                            Serie de Elemento : N/A
                                        </Typography>
                                        <Typography gutterBottom>
                                            Código de identificación: N/A
                                        </Typography>
                                        <Typography gutterBottom>
                                            Descripción: tiene la funcion de afilar cualquier tipo de herramienta de corte
                                            Limpia, pule y da brillo a cualquier material 
                                            <br/>
                                            CUIDADOS
                                            <br/>
                                            Soporta 50 minutos de trabajo por 20 minutos de descanso. Máximo diario 6 hora 
                                        </Typography>
                                        <Typography gutterBottom>
                                            CARACTERÍSTICAS: Potencia nominal: 1  1/4 HP (930W) Velocidad: 3,400 rpm:  2 Piedras abrasivas grano fino y mediano  de 10" x 5/8" x 1/2"  Tensión: 127 V
                                        </Typography>
                                        </DialogContent>
                                        <DialogActions>
                                        
                                        </DialogActions>
                                    </BootstrapDialog>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <Box className='Box_item'  justifyContent='center' textAlign='center'>         
                            <Grid container spacing={2}>
                                <Grid className="Grid_item" item xs={12} md={3}>
                                    <Typography sx={{marginTop:'1.5rem'}} variant="h6" align="center" gutterBottom>
                                        Nombre del material
                                    </Typography>
                                </Grid>
                                <Grid sx={{marginBottom:'0.5rem'}} className="Grid_item" item xs={12} md={6}>
                                    <img className='image_material'  src={material} />
                                </Grid>
                                <Grid sx={{marginBottom:'0.5rem'}} className="Grid_item" item xs={12} md={3}>
                                    <Button  sx={{marginTop: '3rem',
                                    fontWeight: 'bold',
                                    backgrounColor: 'red'}}   onClick={handleClickOpen}>
                                        Ver más
                                    </Button>
                                    <BootstrapDialog
                                        onClose={handleClose}
                                        aria-labelledby="customized-dialog-title"
                                        open={open}
                                    >
                                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                            Nombre del material
                                        </BootstrapDialogTitle>
                                        <DialogContent dividers>
                                        <Typography gutterBottom>
                                            Marca: TRUPER
                                        </Typography>
                                        <Typography gutterBottom>
                                            Serie de Elemento : N/A
                                        </Typography>
                                        <Typography gutterBottom>
                                            Código de identificación: N/A
                                        </Typography>
                                        <Typography gutterBottom>
                                            Descripción: tiene la funcion de afilar cualquier tipo de herramienta de corte
                                            Limpia, pule y da brillo a cualquier material 
                                            <br/>
                                            CUIDADOS
                                            <br/>
                                            Soporta 50 minutos de trabajo por 20 minutos de descanso. Máximo diario 6 hora 
                                        </Typography>
                                        <Typography gutterBottom>
                                            CARACTERÍSTICAS: Potencia nominal: 1  1/4 HP (930W) Velocidad: 3,400 rpm:  2 Piedras abrasivas grano fino y mediano  de 10" x 5/8" x 1/2"  Tensión: 127 V
                                        </Typography>
                                        </DialogContent>
                                        <DialogActions>
                                        
                                        </DialogActions>
                                    </BootstrapDialog>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <Box className='Box_item'  justifyContent='center' textAlign='center'>         
                            <Grid container spacing={2}>
                                <Grid className="Grid_item" item xs={12} md={3}>
                                    <Typography sx={{marginTop:'1.5rem'}} variant="h6" align="center" gutterBottom>
                                        Nombre del material
                                    </Typography>
                                </Grid>
                                <Grid sx={{marginBottom:'0.5rem'}} className="Grid_item" item xs={12} md={6}>
                                    <img className='image_material'  src={material} />
                                </Grid>
                                <Grid className="Grid_item" item xs={12} md={3}>
                                    <Button  sx={{marginTop: '3rem',
                                    fontWeight: 'bold',
                                    backgrounColor: 'red'}}   onClick={handleClickOpen}>
                                        Ver más
                                    </Button>
                                    <BootstrapDialog
                                        onClose={handleClose}
                                        aria-labelledby="customized-dialog-title"
                                        open={open}
                                    >
                                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                            Nombre del material
                                        </BootstrapDialogTitle>
                                        <DialogContent dividers>
                                        <Typography gutterBottom>
                                            Marca: TRUPER
                                        </Typography>
                                        <Typography gutterBottom>
                                            Serie de Elemento : N/A
                                        </Typography>
                                        <Typography gutterBottom>
                                            Código de identificación: N/A
                                        </Typography>
                                        <Typography gutterBottom>
                                            Descripción: tiene la funcion de afilar cualquier tipo de herramienta de corte
                                            Limpia, pule y da brillo a cualquier material 
                                            <br/>
                                            CUIDADOS
                                            <br/>
                                            Soporta 50 minutos de trabajo por 20 minutos de descanso. Máximo diario 6 hora 
                                        </Typography>
                                        <Typography gutterBottom>
                                            CARACTERÍSTICAS: Potencia nominal: 1  1/4 HP (930W) Velocidad: 3,400 rpm:  2 Piedras abrasivas grano fino y mediano  de 10" x 5/8" x 1/2"  Tensión: 127 V
                                        </Typography>
                                        </DialogContent>
                                        <DialogActions>
                                        
                                        </DialogActions>
                                    </BootstrapDialog>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
            </Box>
        </Container>
        <Footer></Footer></>
    )
}

export default List_materiales;