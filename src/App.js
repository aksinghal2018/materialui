import './App.css';
import React, { Component } from 'react'
import Main, { Maincomponent } from './Components/Maincomponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Nopagefound from './Components/Nopagefound';
import Usercomponent from './Components/Usercomponent';
import Changepassword from './Components/Changepassword';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirect:false
    }
  }
  componentDidMount(){
    if(localStorage.getItem('logindetail')!=undefined){
      this.setState({redirect:true});
    }
    else{
      this.setState({redirect:false});
    }
  }
render(){
  var value="";
  if(this.state.redirect === true){
    
        value=<Router><Route path="/dashboard" component={Dashboard} /></Router>
    
}
else{
  value="";
}
  return (
    <div className="App">
  
      <Router>
      <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/users" exact>
            <Usercomponent />
          </Route>
          <Route path="/" exact>
            <Maincomponent />
          </Route>
          <Route path="/login" exact>
            
            <Login />
          </Route>
          <Route path="/changepassword" exact>
            
            <Changepassword />
          </Route>
          {value}
          <Route component={Nopagefound}>
            
          </Route>
        </Switch>
    </Router>
    </div>
  );
}}

export default App;
