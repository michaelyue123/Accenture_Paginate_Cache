import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";

import SingleCard from "./Card";

const useStyles = makeStyles({
  root: {
    padding: "1.5vw 10vw",
  },
});

interface CardGridProps {
  singlePageData?: any;
}

const CardGrid: React.FC<CardGridProps> = ({ singlePageData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-test="CardGrid-Display">
      <Grid container spacing={3}>
        {singlePageData &&
          singlePageData.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={uuidv4()}>
              <SingleCard singleCardDetail={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default CardGrid;
