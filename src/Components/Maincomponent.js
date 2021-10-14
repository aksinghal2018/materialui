import React, { Component } from 'react'
import Footercomponent from './Footercomponent'
import MiddleComponent from './MiddleComponent'
import Navcomponent from './Navcomponent'
export class Maincomponent extends Component {
    componentDidMount(){
        if(localStorage.getItem("logindetail")!=undefined){
            window.location.replace("/dashboard");
        }
    }
    render() {
        return (
            <div style={{backgroundImage:"url('../images/background/jpg'"}}>
                <Navcomponent />
                <MiddleComponent />
                <Footercomponent />
            </div>
        )
    }
}

export default Maincomponent
