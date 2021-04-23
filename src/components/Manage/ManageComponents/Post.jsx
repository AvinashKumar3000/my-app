import { Button, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import PostCard from './PostCard';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px",
        paddingBottom: "50px"
    },
    input: {
        marginBottom: "10px"
    }
}));


const Post = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
            </Container>
                <PostCard/>
        </div>
    )
}

export default Post;