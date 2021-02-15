import React from "react";
import { CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const InitialLoading: React.FC = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress size={100} />
        <h1>Loading, please wait</h1>
      </Grid>
    </div>
  );
};

export default InitialLoading;
