import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    root:{
        marginBottom:"5px"
    },
    btn: {
      float:'right',
      margin:'10px'
    },
    icon:{
        margin:"auto",
        
    },
    title:{
        fontWeight:"bold"
    },
    folder:{
        flexGrow: 1,
        minHeight:"50px",
        marginLeft:"10px",
        marginRight:"10px",
        padding:"10px",
        backgroundColor:"greenyellow",
        borderRadius:"10px"
    },
    song:{
        flexGrow: 1,
        minHeight:"50px",
        marginLeft:"10px",
        marginRight:"10px",
        padding:"10px",
        backgroundColor:"gray",
        borderRadius:"10px"  
    }
}));

const PlayListCard = (props) => {
    const classes = useStyles();
    const { id, name, creator, type, url} = props
    const onSongClick = () => {
        
    }
    if ( type == 'folder' ) {
        return (
            <Grid item xs={12} sm={3} style={{marginBottom:"10px"}} className={classes.root}>
                <div className={classes.folder}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <FontAwesomeIcon icon={faFolder} size="3x" color="gray"/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography className={classes.title}>
                                {name}
                            </Typography>
                            <Typography>
                                {creator}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    } 

    return (
        <Grid item xs={12} sm={3} className={classes.root}>
            <div className={classes.song}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <img src={url} alt="image" style={{width:"50px",height:"50px"}}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={classes.title}>
                            {name}
                        </Typography>
                        <Typography>
                            {creator} 
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
    
}
export default PlayListCard