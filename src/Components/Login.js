import React from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
} from "@material-ui/core";
import '../style.css'
import logindata from '../Server/logindata.json'
const BRAND_NAME = "NeoSoft Technologies"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "",data:"", authflag: 1 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {
        event.preventDefault();
        var status=0;
        logindata.logindata.map(item=>{
            if(item.name==this.state.username && item.password==this.state.password ){
                status=1;
                
                
            }
        })
        const dataitem=logindata.logindata.find(item=>item.name==this.state.username)        
        if (status==1) {
            const data = [{"name": document.getElementById("email").value,"id":dataitem.id}]
            localStorage.setItem("logindetail",JSON.stringify(data))
            window.location.replace("/dashboard");

    } else {
    alert('Incorrect Credntials!');
}
    }
render() {
    return (
        <div style={{backgroundImage:"url('../images/background.jpg'",backgroundRepeat:"no-repeat",position:"center",backgroundSize:"cover"}}>
            <AppBar position="static" alignitems="center" color="primary">
                <Toolbar>
                    <Grid container >
                        <Grid item>
                            <Typography variant="h6">{BRAND_NAME}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{marginLeft:"70%"}}>
                        <Grid item>
                            <Typography variant="h6"><a href="/" style={{color:"white",textDecoration:"none"}}>Back</a></Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className="login-form"
                    >
                        <Paper
                            variant="elevation"
                            elevation={2}
                            className="login-background"
                        >
                            <Grid item>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={this.handleSubmit}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField

                                                type="email"
                                                placeholder="Email"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                value={this.state.username}
                                                onChange={(event) =>
                                                    this.setState({
                                                        [event.target.name]: event.target.value,
                                                    })
                                                }
                                                id="email"
                                                required
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                                value={this.state.password}
                                                onChange={(event) =>
                                                    this.setState({
                                                        [event.target.name]: event.target.value,
                                                    })
                                                }
                                                id="password"
                                                required
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="button-block"
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Forgot Password?
                                </Link>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
}
export default Login;