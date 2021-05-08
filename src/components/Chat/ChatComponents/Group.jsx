import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import ChatCard from './ChatCard'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: "85vh",
        paddingTop: '10px'
    },
    btn: {
        float: 'right',
        margin: '10px'
    }
}));


const Group = (props) => {

    const chatClick = () => {
        const ele={
            name:"company group",
            id:53,
            type:'grp'
        }
        props.showChat(ele);
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid container spacing={0}>
                <div
                    style={{ width: '100%' }}
                    onClick={(e) => {
                        console.log("clicked")
                        e.preventDefault();
                        chatClick();
                    }}
                >
                    <ChatCard
                        name="company Chat"
                        time={53}
                    />

                </div>
            </Grid>
        </div>
    )
}

export default Group;