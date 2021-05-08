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
      marginLeft:"30vw",
      padding:'10px',
      borderRadius:'10px',
      width:'50vw',
      textAlign:'center'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.picLink}
          title={"status id : "+props.data.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography size="small" color="secondary" className={classes.time}>
          {new Date(props.data.time).toString().substring(0,24)}
        </Typography>
      </CardActions>
    </Card>
  );
}
