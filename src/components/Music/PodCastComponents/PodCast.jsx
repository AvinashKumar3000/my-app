import { makeStyles } from "@material-ui/core";
import React from "react";
import PodCastCard from "./PodCastCard";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    card: {
      padding:"10px"
    }
  });

const PodCast = () => {
    const classes = useStyles()
    return (
        <div className="app-podcast" className={classes.root}>
            <div className={classes.card}>
                <PodCastCard/>
            </div>
        </div>
    )
}
export default PodCast;