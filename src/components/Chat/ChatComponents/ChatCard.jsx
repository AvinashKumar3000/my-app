import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    root:{
        marginBottom:"10px"
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

const ChatCard = (props) => {
    const classes = useStyles();
    const { name, time, url} = props

    return (
        <Grid item xs={12} sm={3} className={classes.root}>
            <div className={classes.song}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <img src={url} alt="image" />
                    </Grid>
                    <Grid item xs={7}>
                        <Typography className={classes.title}>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>
                            {time} 
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
    
}
export default ChatCard