import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@material-ui/icons';
import { Link } from '@mui/material';
import { render } from '@testing-library/react';
const theme = {
  spacing: 8,
}
export class Navbardashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.logout=this.logout.bind(this)
    }
    logout=()=>{
        localStorage.removeItem("logindetail");
        window.location.replace("/");
    }
    render(){
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
                        <Link  underline="none" color="inherit" style={{marginRight:"10px"}} onClick={this.logout}>
                            {"Logout"}
                        </Link>          
                    
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
}
export default Navbardashboard
