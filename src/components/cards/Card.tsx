import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 230,
  },
  title: {
    fontSize: 14,
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
});

interface SingleCardProp {
  singleCardDetail: any;
}

const SingleCard: React.FC<SingleCardProp> = ({ singleCardDetail }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          New
        </Typography>
        <Typography variant="h5" component="h2">
          {singleCardDetail.coreData.number}
        </Typography>
        <Typography className={classes.detail} color="textSecondary">
          Application: {singleCardDetail.coreData.application}
          <br />
          Assignee: {singleCardDetail.coreData.assignee}
        </Typography>
        <Typography variant="body2" component="p">
          {singleCardDetail.coreData.description}{" "}
          {singleCardDetail.coreData.shortDescription}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
