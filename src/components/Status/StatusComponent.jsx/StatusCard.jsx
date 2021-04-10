import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
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
        backgroundColor:"#5B595A",
        borderRadius:"10px",
        color:"white"
    }
}));

const StatusCard = (props) => {
    const classes = useStyles();
    const { name, creator } = props
    return (
        <Grid item xs={12} sm={3} style={{marginBottom:"10px"}}>
            <div className={classes.folder}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <FontAwesomeIcon icon={faIdBadge} size="3x" color="gray"/>
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
export default StatusCard