import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "auto",
    paddingLeft: "0px",
    backgroundColor: "white",
    width: "100%"
  },
  tab: {
    width: "24px",
    height: "24px",
    padding: "10px"
  },
  switch: {
    padding: "2px"
  },
  input:{
    margin:"10px"
  }
}));

export default function InOut(props) {
  const classes = useStyles()

  const handleChange = (stateValue) => {
    postAttendance(stateValue);
  };

  const postAttendance = (stateValue) => {
    const data = {
      date: new Date(),
      type: (stateValue) ? 1 : 0,
      empId: localStorage.getItem("employeeId")
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://springboot-lemon.herokuapp.com/attendance", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        props.updateTable();
      })
      .catch(error => console.log('error', error));
  }
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={5}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.input}
            onClick={(e) => {e.preventDefault(); handleChange(true)}}
          >
            IN
                </Button>
        </Grid>
        <Grid item xs={6} style={{paddingLeft:"5vw"}}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.input}
            onClick={(e) => {e.preventDefault(); handleChange(false)}}
          >
            OUT
                </Button>
        </Grid>
      </Grid>
    </div>
  );
}
