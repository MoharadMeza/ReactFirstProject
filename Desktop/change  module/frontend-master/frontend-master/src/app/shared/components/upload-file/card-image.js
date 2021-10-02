import React from "react";
import { Card, CardMedia, CardActions, Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import profilePlaceHolder from "../../../assets/images/profile.png";

const useStyles = makeStyles({
  card: {
    maxWidth: 180,
    width: 180,
    maxHeight: 180
  },
  media: {
    height: 140
  },
  button: {
    color: "red"
  }
});

export const CardImage = ({ image, removeFile, index }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          image
            ? `${process.env.REACT_APP_API_UPLOAD}/${image}`
            : profilePlaceHolder
        }
      />
      <CardActions className={`${!image && "d-none"}`}>
        <Button className={classes.button} onClick={() => removeFile(index)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
