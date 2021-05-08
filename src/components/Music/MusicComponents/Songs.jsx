import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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


const Songs = (props) => {

    const [songsList, setsongsList] = useState([])
    useEffect(() => {
        fetch("http://13.232.66.207:8080/Songs/getSongs")
            .then(response => response.json())
            .then(result => {
                setsongsList(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    const playSong = (obj) => {
        const songRange = songsList.map((ele) => ele.id );
        props.handleData({
            songRange:songRange,
            play_idx:obj.id
        })
        console.log("I am clicked the songs which is : ")
        console.log(obj)
    }   

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                {
                    songsList.map((song) => {
                        return (
                            <div onClick={(e) => {
                                e.preventDefault();
                                playSong(song);
                                 }}
                                style={{width:"100%"}}
                                 id={"div-"+song.id}
                            >
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
                            </div>
                        )
                    })
                }

            </Grid>
        </div>
    )
}

export default Songs;