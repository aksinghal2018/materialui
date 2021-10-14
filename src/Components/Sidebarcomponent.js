import React, { Component } from 'react'
import '../style.css'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Paper } from '@mui/material'
const item=["Category","User","Usercredential","Products","Orders","Feedback"];
export class Sidebarcomponent extends Component {
    render() {
        return (
            <div className="sidebar" style={{ height: "540px", borderRight: "10px solid blue", borderLeft: "20px solid blue" }}>
                <Paper style={{ height:"540px",maxHeight: 560, overflow: 'auto' }}>
                <h1>Menu</h1>
                    <List >
                        {
                            item.map((itemdata,index)=>{
                                return(

                        <ListItem disablePadding>
                            <ListItemButton sx={{ borderBottom: 1, borderTop: 1 }}>
                                <ListItemText id={index} primary={itemdata} onClick={()=>this.props.product(index)}/>
                            </ListItemButton>
                        </ListItem>
                                )
                            })
                        }
                    </List>
                </Paper>

            </div>
        )
    }
}

export default Sidebarcomponent
