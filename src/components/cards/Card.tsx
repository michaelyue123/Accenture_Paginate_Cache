import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid, Drawer, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: 230,
  },
  title: {
    fontSize: 14,
  },
  ticketNumberSize: {
    fontSize: "30px"
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
  list: {
    width: "35vw",
    margin: "10px"
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
}));

interface SingleCardProp {
  singleCardDetail: any;
}

type Anchor = 'right';

const SingleCard: React.FC<SingleCardProp> = ({ singleCardDetail }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({right: false});

  // coreData Keys to display in the drawer
  const coreDataKeys = ["assignee", "shortDescription", "application"];

  // serviceData Keys to display in the drawer
  const serviceDataKeys = ["made_sla","upon_reject","opened_by","priority","activity_due","approval"];


  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const cardDrawer = (anchor: Anchor) => (
    <Grid
      container
      spacing={2}
      className={classes.list}
      role="presentation"
    >
      <IconButton aria-label="close" className={classes.closeButton} onClick={toggleDrawer(anchor, false)}>
        <CloseIcon />
      </IconButton>
      {/* Card Number */}
      <Grid item xs={12}>
        <Typography className={classes.ticketNumberSize}>
          {singleCardDetail.coreData.number}
        </Typography>
      </Grid>

      {/* Core Data key and value */}
      {coreDataKeys.map(key => (
        <React.Fragment key={key}>
          <Grid item xs={12} md={4} lg={3}>
            <b>{key}</b>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            {singleCardDetail.coreData[key] || "N/A"}
            <Divider />
          </Grid>
        </React.Fragment>
      ))}


      {/* Service Data key and value */}
      {serviceDataKeys.map(data => (
        <React.Fragment key={data}>
          <Grid item xs={12} md={4} lg={3}>
            <b>{data}</b>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            {singleCardDetail.serviceData[data] || "N/A"}
            <Divider />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );

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
        {(['right'] as Anchor[]).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>LEARN MORE</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
            >
              {cardDrawer(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </CardActions>
    </Card>
  );
};

export default SingleCard;
