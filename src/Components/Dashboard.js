import React, { Component } from 'react'
import Footercomponent from './Footercomponent'
import Navbardashboard from './Navbardashboard'
import userdata from '../Server/usersdata.json'
export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:"",
             name:"",
             email:"",
             mobile:"",
             department:"",
             salary:"",
             experience:"",
             images:""
        }
    }
    componentDidMount(){
        var userdetail1=localStorage.getItem("logindetail");
        var userdata1=JSON.parse(userdetail1)
        var userdetail2=userdata.userdata.find(item=>item.id==userdata1[0].id)
        this.setState({name:userdata1[0].name,id:userdata1[0].id,department:userdetail2.department,salary:userdetail2.salary,experience:userdetail2.experience,images:userdetail2.image})
        console.log(userdetail2)
    }
    render() {
        
        
        return (
            <div >
                <Navbardashboard />
                <h1>Profile</h1>
                <div style={{textAlign:"left" ,marginLeft:"35%",border:"2px solid black",padding:"30px",width:"300px",height:"450px",fontFamily:"sans-serif ",fontSize:"12px",marginTop:"20px",marginBottom:"20px"}}>
                    
                <img src={`../images/${this.state.images}`} alt="a"/>
                <hr />
                <div style={{padding:"20px"}}>
                <h1>
                EmployeeId:{this.state.id}
                </h1>
                <h1>Name:
                {this.state.name}</h1>
                <h1>Department:{this.state.department}</h1>
                <h1>Salry:{this.state.salary}Rs</h1>
                <h1>Experience:{this.state.experience}years</h1>

                </div>
                </div>
                <Footercomponent />
            </div>
        )
    }
}

export default Dashboard
