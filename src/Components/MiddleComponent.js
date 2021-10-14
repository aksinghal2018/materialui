import React, { Component } from 'react'
import Contentcomponent from './Contentcomponent'
import Sidebarcomponent from './Sidebarcomponent'
import { Alert, Grid } from '@mui/material'
import Categorycomponent from './Categorycomponent'
import Product from './Product'
import Feedbackcomp from './Feedbackcomp'
import Orders from './Orders'
import Usercomponent from './Usercomponent'
import Usercredential from './Usercredential'
var status=0;
export class MiddleComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status:0
        }
        this.product=this.product.bind(this);

    }
    product=(id)=>{
        this.setState({status:id})  
    }
    
    render() {
        var comp=<Contentcomponent />
        switch(this.state.status){
           case 0 : comp=<Categorycomponent />;break;
           case 1 :comp=<Usercomponent />;break;
           case 2 : comp=<Usercredential />;break;
           case 3:  comp=<Product />;break;
           case 4: comp=<Orders />;break;
           case 5: comp=<Feedbackcomp />;break;
           
           default:comp=<Contentcomponent />
        }
        
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Sidebarcomponent product={this.product} user={this.user}/>
                    </Grid>
                    <Grid item xs={9}>
                        {comp}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MiddleComponent
