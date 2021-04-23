import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import PlayListCard from "./PlayListCard";
import PostCard from "../../Manage/ManageComponents/PostCard";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight:"85vh",
      padding:"10px"
    },
    btn: {
      float:'right',
      margin:'10px'
    }
}));


const Album = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PostCard></PostCard>
        </div>
    )
}

export default Album;