import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';


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
        backgroundColor:"skyblue",
        borderRadius:"10px"  
    },
    paper:{
        width:"100vw",
        padding:"10px"
    }
}));

const PinCard = (props) => {
    const classes = useStyles();
    const { from, to, date, msg} = props

    return (
        <Grid item xs={12} sm={3} className={classes.root}>
            <div className={classes.song}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography>
                                    {from} 
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>
                                    {to} 
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Paper>
                            <Typography>
                                {msg}
                            </Typography>
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={4}>
                                <Typography>
                                    {date} 
                                </Typography>
                            </Grid>
                </Grid>
            </div>
        </Grid>
    )
    
}
export default PinCard