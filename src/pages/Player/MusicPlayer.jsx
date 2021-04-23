import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { MusicVideo, PlayCircleOutline } from '@material-ui/icons';
import React, { useState } from 'react';
import MainMusicPlayer from './MainMusicPlayer';

const miniPlayerStyles = makeStyles({
    miniPlayerRoot: {
        color: "white",
        backgroundColor: 'black',
        width: "100%",
        height: "60px",
        padding: '0px',
        borderTop: '2px solid gray'
    },
    img: {
        height: "100%",
        width: "100%",
        backgroundColor: 'gray'
    },
    details: {
        padding: "5px",
        paddingLeft: "13px"
    },
    songArtist: {
        color: "gray"
    },
    icon: {
        padding: '15px'
    }
})

const MiniPlayer = (props) => {
    const classes = miniPlayerStyles()
    return (
        <Container className={classes.miniPlayerRoot} onClick={props.changeShow}>
            <Grid container style={{ height: '100%', width: "100%" }}>
                <Grid item xs={2} className={classes.img}>
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
    const [show, setshow] = useState(false)
    const { musicId, setmusicId } = props

    const getMusic = () => {
        fetch("http://13.232.66.207:8080/Songs/getSongs/"+musicId)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            setmusicData(result)
          })
          .catch(error => console.log('error', error));
      }

    const changeShow = (e) => {
        console.log("clicked")
        e.preventDefault();
        setshow(!show);
    }
    return (
        <div>
            <div style={(!show)?{display:"block"}:{display:"none"}} >     
                <MiniPlayer changeShow={changeShow} />
            </div>
            <div style={(show)?{display:"block"}:{display:"none"}}>     
                <MainMusicPlayer musicId={musicId} setmusicId={setmusicId} changeShow={changeShow}/>
            </div>
        </div>
    )
}
export default MusicPlayer;