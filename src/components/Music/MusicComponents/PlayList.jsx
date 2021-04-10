import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import PlayListCard from "./PlayListCard";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight:"85vh",
    },
    btn: {
      float:'right',
      margin:'10px'
    }
}));


const PlayList = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" className={classes.btn} disabled={true}>
                        home
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <PlayListCard  
                    name={'Liked Songs'} 
                    creator={'by airwavemusictv'} 
                    type={"folder"}
                />
            </Grid>
        </div>
    )
}

export default PlayList;