import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px",
        paddingBottom: "120px"
    },
    heading: {
        marginBottom: "20px"
    },
    input: {
        marginBottom: "10px",
        padding:"10px",
        border:"2px solid black"
    },
    h:{
        color:"blue"
    }
}));

export default function Info() {
    const classes = useStyles();
    const [state, setstate] = useState({})
    useEffect(() => {
        updateData();
    }, [])
    const updateData = () => {
        fetch("https://springboot-lemon.herokuapp.com/employee/getById/"+localStorage.getItem("employeeId"))
            .then(response => response.json())
            .then(result => {
                setstate(result)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div className={classes.root} >
            <Typography className={classes.heading}>
                ABOUT YOUR DETAILS
            </Typography>
            {
                Object.keys(state).map((ele) => {
                    return(
                        <Box className={classes.input}>
                            <Typography className={classes.h}>
                                {ele}
                            </Typography>
                            <Typography>
                                {state[ele]}
                            </Typography>
                        </Box>
                    )
                })
            }
        </div>
    );
}