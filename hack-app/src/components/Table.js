import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function BasicTable() {
    const [locations, setLocations] = useState([]);
  
    useEffect(() => {
    const fetchData = async () => {
      const locations = await axios.get("http://localhost:3001");
      console.log(locations.data);
      setLocations(locations.data);
    } 

    fetchData();
  }, [])

  console.log(locations);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tip colectare</TableCell>
            <TableCell align="right">Adresa</TableCell>
            <TableCell align="right">Companie</TableCell>
            <TableCell align="right">Latitudine</TableCell>
            <TableCell align="right">Longitudine</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location) => (
            <TableRow
              key={location.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{location['tip colectare']}</TableCell>
              <TableCell align="right">{location.adresa}</TableCell>
              <TableCell align="right">{location.companie}</TableCell>
              <TableCell align="right">{location.latitudine}</TableCell>
              <TableCell align="right">{location.longitudine}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
