import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: "3rem",
    justifyContent: "center"
  },
  card: {
    maxWidth: 345,
    width: "-webkit-fill-available"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const UserProfileCard = ({ selectedUserInfo }) => {
  const classes = useStyles();
  const { first_name, last_name, email, avatar } = selectedUserInfo;
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          style={{ borderRadius: "50%" }}
          image={avatar}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {`${first_name} ${last_name}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfileCard;
