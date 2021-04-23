import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
      padding:"auto",
      paddingLeft:"0px",
      backgroundColor:"white",
      width:"100%"
    },
    tab:{
        width:"24px",
        height:"24px",
        padding:"10px"
    },
    switch:{
      padding:"2px"
    }
  }));

export default function InOut() {
  const classes = useStyles()
  const [state, setState] = React.useState(true);

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  return (
    <div className={classes.root}>
        <Grid container>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.tab}>
                    OUT
                </Typography>
            </Grid>
            <Grid item xs={2} >
                <IOSSwitch checked={state.checked} onChange={handleChange} name="checkedB" className={classes.switch}/>
            </Grid>
            <Grid item xs={1}>
                <Typography className={classes.tab}>
                    IN
                </Typography>
            </Grid>
        </Grid>
    </div>
  );
}
