import React, { Component } from 'react'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { borderRadius } from '@mui/system';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});
export class Changepassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             oldpassword:"",
             newpassword:"",
             confirmpassword:""
        }
        this.handler=this.handler.bind(this)
    }
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div style={{width:"500px",marginLeft:"32%",marginTop:"5%"}}>
                 <Paper className={classes.padding}>
                     <h1>Change Password</h1>
                <div className={classes.margin}>
                    <img src="../images/profile3.jpg" alt="image" style={{width:"120px",height:"120px" ,borderRadius:"50%"}} />
                <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Old Password" type="password" name="oldpassword" onChange={this.handler} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="New Password" type="password" name="newpassword" onChange={this.handler} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Confirm Password" type="password"  name="confirmpassword" onChange={this.handler} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '80px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Change Password</Button>
                    </Grid>
                </div>
            </Paper>
        
            </div>
        )
    }
}

export default withStyles(styles)(Changepassword);
