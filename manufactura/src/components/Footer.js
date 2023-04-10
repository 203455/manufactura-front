import { Typography} from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
    return(
        <footer>
            <Box sx={{ bgcolor: 'rgb(228, 237, 238)', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Taller Manufactura
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                >
                    @Universidad Politécnica de Chiapas
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer;