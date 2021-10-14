import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import user from '../Server/usersdata.json'
export class Usercomponent extends Component {
    render() {
        return (
            <div style={{padding:"20px" ,height:"500px",maxHeight: 560, overflow: 'auto' }}>
              <h1>Users</h1>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Department</TableCell>
            <TableCell >Salary</TableCell>
            <TableCell >Expririence</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.userdata.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.department}</TableCell>
              <TableCell >{row.salary}</TableCell>
              <TableCell >{row.experience}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )

    }
}

export default Usercomponent
