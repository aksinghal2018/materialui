import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import products from '../Server/product.json'
export class Product extends Component {
    render() {
        return (
            <div style={{padding:"20px" ,height:"500px",maxHeight: 560, overflow: 'auto' }}>
                <TableContainer component={Paper}>
                    <h1>Products</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sno</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >Quantity&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.pname}</TableCell>
              <TableCell >{row.price}</TableCell>
              <TableCell >{row.quantity}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )
    }
}

export default Product
