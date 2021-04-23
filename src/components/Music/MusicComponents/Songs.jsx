import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import PlayListCard from "./PlayListCard";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: "85vh",
        paddingTop:"10px",
        paddingBottom:"120px"
    },
    btn: {
        float: 'right',
        margin: '10px'
    }
}));


const Songs = () => {
    const [songsList, setsongsList] = useState([])
    useEffect(() => {
        fetch("http://13.232.66.207:8080/Songs/getSongs")
            .then(response => response.json())
            .then(result => {
                setsongsList(result)
            })
            .catch(error => console.log('error', error));
    }, [])
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid container spacing={0}>
                {
                    songsList.map((song) => {
                        return (
                            <PlayListCard
                                style={{
                                    margin:"5px"
                                }}
                                id={song.id}
                                name={song.name}
                                creator={song.artists}
                                type={"song"}
                                url={song.cover}
                            />
                        )
                    })
                }

            </Grid>
        </div>
    )
}

export default Songs;