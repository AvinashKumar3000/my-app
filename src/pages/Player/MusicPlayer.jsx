import {  Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { PlayCircleOutline } from '@material-ui/icons';
import React from 'react';
import MainMusicPlayer from './MainMusicPlayer';

const miniPlayerStyles = makeStyles({
    miniPlayerRoot:{
        color:"white",
        backgroundColor:'black',
        width:"100%",
        height:"60px",
        padding:'0px',
        borderTop:'2px solid gray'
    },
    img:{
        height:"100%",
        width:"100%",
        backgroundColor:'gray'
    },
    details:{
        padding:"5px",
        paddingLeft:"13px"
    },
    songArtist:{
        color:"gray"
    },
    icon:{
        padding:'15px'
    }
})

const miniPlayer = ( props ) => {
    const classes = miniPlayerStyles()
    return (
        <Container className={classes.miniPlayerRoot}>
            <Grid container style={{height:'100%',width:"100%"}}>
                <Grid item xs={2}className={classes.img}>
                    <img src="#" alt="d" />
                </Grid>
                <Grid item xs={8} className={classes.details}>
                    <Typography >
                        <div>
                            song name
                        </div>
                        <div className={classes.songArtist}>
                            song artist
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={2} className={classes.icon}>
                    <PlayCircleOutline></PlayCircleOutline>
                </Grid>
            </Grid>
        </Container>
    )
}


const MusicPlayer = (props) => {
    return (
        <MainMusicPlayer/>
    )
}
export default MusicPlayer;