import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import ChatCard from './ChatCard'


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


const Group = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <Grid container spacing={0}>
                <ChatCard  
                    name={'Liked Songs'} 
                    time={'10:00 AM'} 
                    url={"#"}
                />
            </Grid>
        </div>
    )
}

export default Group;