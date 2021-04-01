import React from "react";
import "./Css/Card.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  // console.log("carddata", props.data);
  return (
    <Card className={classes.root} id="Card_container">
      <CardActionArea>
        <CardMedia className={classes.media} image={props.data.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.venue} {props.data.type} event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.description}
          </Typography>
        </CardContent>
        <div className="Card_text">
          <span>Price of the event -{props.data.price}$</span>

          <span>Discount at max-{props.data.discount}%</span>
        </div>
      </CardActionArea>
      <CardActions id="Card_buttons">
        <Link to="/null" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" id="submit_button">
            Attending
          </Button>
        </Link>
        <Link to="/null" style={{ textDecoration: "none" }}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
