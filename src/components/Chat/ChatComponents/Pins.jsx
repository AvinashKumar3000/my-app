import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PinCard from "./PinCard";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight:"85vh",
      paddingTop:'10px'
    },
    btn: {
      float:'right',
      margin:'10px'
    }
}));


const Pin = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <Grid container spacing={0}>
                <PinCard  
                    from={'Gnanavel'} 
                    to={'avinash'} 
                    date={"1/2/21 10:00 AM"}
                    msg={"safasfasfas das as as fas as "}
                />
            </Grid>
        </div>
    )
}

export default Pin;