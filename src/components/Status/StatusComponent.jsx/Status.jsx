import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import StatusCard from "./StatusCard";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight:"85vh",
      marginTop:"10px"
    },
    btn: {
      float:'right',
      margin:'10px'
    }
}));


const Status = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <StatusCard  
                    name={'Liked Songs'} 
                    creator={'by airwavemusictv'} 
                />
            </Grid>
        </div>
    )
}

export default Status;