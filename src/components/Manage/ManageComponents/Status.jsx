import { Button, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import StatusCard from './StatusCard';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px",
        paddingBottom: "50px"
    },
    input: {
        marginBottom: "10px"
    }
}));


const Status = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Button
                    variant="contained"
                    color="secondary"
                >
                    update Status
                </Button>
            </Container>
                <StatusCard/>
        </div>
    )
}

export default Status;