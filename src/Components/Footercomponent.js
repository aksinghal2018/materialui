import React, { Component } from 'react'
import { AppBar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import '../style.css';
export class Footercomponent extends Component {
    render() {
        return (
            <AppBar position="static" color="primary" className="footer">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 NeoSoft Technologies
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        )
    }
}

export default Footercomponent
