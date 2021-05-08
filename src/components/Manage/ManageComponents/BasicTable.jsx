import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 60,
  },
});

function createData(date, type) {
  return { date, type };
}


const BasicTable = forwardRef((props,ref) => {
  const classes = useStyles();
  const [rows, setrows] = useState([])

  useImperativeHandle(ref, () => ({
    load () { loadTable(); }
  }));
  
  useEffect(() => {
    loadTable();
  }, [])

  const loadTable = () => {
    fetch("https://springboot-lemon.herokuapp.com/attendance/"+localStorage.getItem("employeeId"))
    .then(response => response.json())
    .then(result => {
      console.log(result)
      result = result.reverse();
      var li = []
      result.forEach(ele => {
        li.push(
            createData(
              new Date(ele.date).toString().substring(0,24),
              (ele.type == 1)?"IN":"OUT"
            )
        )
      });
      setrows(li)
    })
    .catch(error => console.log('error', error));
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date and time</TableCell>
            <TableCell align="right">Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
})

export default BasicTable;
