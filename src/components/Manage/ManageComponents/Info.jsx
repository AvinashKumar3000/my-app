import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      padding:"10px",
      paddingBottom:"50px"
  },
  heading:{
      marginBottom:"20px"
  },
  input:{
      marginBottom:"10px"
  }
}));

export default function Info() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <Typography className={classes.heading}>
            ABOUT YOUR DETAILS
        </Typography>
        <TextField 
            id="id" 
            label="id" 
            variant="outlined" 
            fullWidth 
            className={classes.input}
        />
        <TextField 
            id="name" 
            label="name" 
            variant="outlined" 
            fullWidth 
            className={classes.input}
        />
        <TextField 
            id="gender" 
            label="gender" 
            variant="outlined" 
            fullWidth 
            className={classes.input}
        />
        <TextField 
            id="address" 
            label="address" 
            variant="outlined" 
            fullWidth 
            multiline
            className={classes.input}
        />
        <TextField
            id="dob"
            label="dob"
            type="date"
            defaultValue="2017-05-24"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            fullWidth
            className={classes.input}
        />
        <TextField
            id="doj"
            label="doj"
            type="date"
            defaultValue="2017-05-24"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            fullWidth
            className={classes.input}
        />
        <TextField 
            id="username" 
            label="username" 
            variant="outlined" 
            fullWidth 
            className={classes.input}
        />
        <TextField 
            id="password" 
            label="password" 
            variant="outlined" 
            fullWidth 
            className={classes.input}
        />
        <TextField 
            id="company Id" 
            label="company Id" 
            variant="outlined" 
            fullWidth 
            className={classes.input}
        />
    
    </div>
  );
}