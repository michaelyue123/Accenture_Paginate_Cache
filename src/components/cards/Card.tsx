import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid, Drawer, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    height: 230,
  },
  title: {
    fontSize: 14,
  },
  ticketNumberSize: {
    fontSize: "30px",
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
  list: {
    width: "28vw",
    margin: "10px",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

interface SingleCardProp {
  singleCardDetail?: any;
}

// create a type anchor to achieve drawer toggling
type Anchor = "right";

const SingleCard: React.FC<SingleCardProp> = ({ singleCardDetail }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({ right: false });

  // coreData name to display in the drawer
  const coreDataList = ["assignee", "shortDescription", "application"];

  // serviceData name to display in the drawer
  const serviceDataList = [
    "made_sla",
    "upon_reject",
    "opened_by",
    "priority",
    "activity_due",
    "approval",
  ];

  // toggle drawer to show on the right hand side
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // card drawer UI
  const cardDrawer = (anchor: Anchor) => (
    <Grid
      container
      spacing={2}
      className={classes.list}
      role="presentation"
      data-test="CardDrawer-Display"
    >
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={toggleDrawer(anchor, false)}
      >
        <CloseIcon />
      </IconButton>

      <Grid item xs={12}>
        <Typography className={classes.ticketNumberSize}>
          {singleCardDetail && singleCardDetail.coreData.number}
        </Typography>
      </Grid>

      {coreDataList.map((key) => (
        <React.Fragment key={key}>
          <Grid item xs={12} md={4} lg={3}>
            <b>{key === "shortDescription" ? "short Description" : key}</b>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            {(singleCardDetail && singleCardDetail.coreData[key]) || "N/A"}
            <Divider />
          </Grid>
        </React.Fragment>
      ))}

      {serviceDataList.map((data) => (
        <React.Fragment key={data}>
          <Grid item xs={12} md={4} lg={3}>
            <b>{data}</b>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            {(singleCardDetail && singleCardDetail.serviceData[data]) || "N/A"}
            <Divider />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );

  return (
    <Card
      className={classes.root}
      variant="outlined"
      data-test="CardSummary-Display"
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          New
        </Typography>
        <Typography variant="h5" component="h2">
          {singleCardDetail && singleCardDetail.coreData.number}
        </Typography>
        <Typography className={classes.detail} color="textSecondary">
          Application:{" "}
          {singleCardDetail && singleCardDetail.coreData.application}
          <br />
          Assignee: {singleCardDetail && singleCardDetail.coreData.assignee}
        </Typography>
        <br></br>
        <Typography variant="body2" component="p">
          {singleCardDetail && singleCardDetail.coreData.description}{" "}
          {singleCardDetail && singleCardDetail.coreData.shortDescription}
        </Typography>
      </CardContent>

      <CardActions>
        {(["right"] as Anchor[]).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>LEARN MORE</Button>
            <Drawer anchor={anchor} open={state[anchor]}>
              {cardDrawer(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </CardActions>
    </Card>
  );
};

export default SingleCard;
