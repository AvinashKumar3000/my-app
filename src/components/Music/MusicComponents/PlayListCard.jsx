import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "5px"
    },
    btn: {
        float: 'right',
        margin: '10px'
    },
    icon: {
        margin: "auto",

    },
    title: {
        fontWeight: "bold",
        textAlign: "right"
    },
    subtitle: {
        textAlign: "right"
    },
    folder: {
        flexGrow: 1,
        minHeight: "50px",
        marginLeft: "10px",
        marginRight: "10px",
        padding: "10px",
        backgroundColor: "greenyellow",
        borderRadius: "10px"
    },
    song: {
        flexGrow: 1,
        minHeight: "50px",
        marginLeft: "10px",
        marginRight: "10px",
        padding: "10px",
        backgroundColor: "gray",
        borderRadius: "10px"
    }
}));

const SongCardHere = (props) => {
    const classes = useStyles();
    const [songData, setsongData] = useState({})
    useEffect(() => {
        fetch("https://springboot-lemon.herokuapp.com/Songs/getSongs/"+props.sId)
          .then(response => response.json())
          .then(result => {
            setsongData(result);
          })
          .catch(error => console.log('error', error));
    }, [])
    return (
        <div className={classes.song} >
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <img src={songData.cover} alt="image" style={{ width: "50px", height: "50px" }} />
                </Grid>
                <Grid item xs={10}>
                    <Typography className={classes.title}>
                        {songData.name}
                    </Typography>
                    <Typography className={classes.subtitle}>
                        {songData.playlists}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

const PlayListCard = (props) => {
    const classes = useStyles();
    const { id, name, creator, type, url } = props
    const [songList, setsongList] = useState([])
    useEffect(() => {
        fetch("https://springboot-lemon.herokuapp.com/playlistsongs/" + id)
            .then(response => response.json())
            .then(result => {
                setsongList(result)
                console.log("the songs : ")
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    const onClickSong = (sid) => {
        const li = songList.map((ele) => ele.songId)
        props.handleData({
            songRange:li,
            play_idx:sid
        })
    }
    if (type == 'folder') {
        return (
            <Grid item xs={12} sm={3} style={{ marginBottom: "10px" }} className={classes.root}>
                <Accordion className={classes.accordion} className={classes.folder}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div >
                            <Grid container spacing={3}>
                                <Grid item xs={3} >
                                    <FontAwesomeIcon icon={faFolder} size="3x" color="gray" />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography className={classes.title}>
                                        {name}
                                    </Typography>
                                    <Typography className={classes.subtitle}>
                                        {creator}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Grid item xs={12} sm={3} className={classes.root}>
                            {
                               songList.map((ele) => {
                                   return(
                                       <div  
                                            style={{paddingTop:"5px"}} 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onClickSong(ele.songId)
                                            }}
                                        >
                                            <SongCardHere sId={ele.songId}/>
                                       </div>
                                   )
                               })
                            }
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        )
    }

    return (
        <Grid item xs={12} sm={3} className={classes.root}>
            <div className={classes.song}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <img src={url} alt="image" style={{ width: "50px", height: "50px" }} />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={classes.title}>
                            {name}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {creator}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )

}
export default PlayListCard