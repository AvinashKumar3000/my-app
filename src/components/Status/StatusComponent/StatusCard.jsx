import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  media: {
    height: 140,
  },
  time:{
      color:"black",
      backgroundColor:'white',
      marginLeft:"60vw",
      padding:'10px',
      borderRadius:'10px',
      width:'20vw',
      textAlign:'center'
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            status line
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography size="small" color="secondary" className={classes.time}>
          Share
        </Typography>
      </CardActions>
    </Card>
  );
}
