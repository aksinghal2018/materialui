import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@material-ui/icons';
import { Link } from '@mui/material';
const theme = {
  spacing: 8,
}
export default function Navarcomponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" >
                        <Link m={8} href="#" underline="none" color="inherit" style={{marginRight:"10px"}}>
                            {"Home"}
                        </Link>
                        <Link href="#" underline="none" color="inherit" style={{marginRight:"10px"}}>
                            {"Contactus"}
                        </Link>
                        <Link href="#" underline="none" color="inherit" style={{marginRight:"10px"}}>
                            {"Aboutus"}
                        </Link>
                        <Link href="/login" underline="none" color="inherit" style={{marginRight:"10px"}}>
                            {"Login"}
                        </Link>          
                    
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
