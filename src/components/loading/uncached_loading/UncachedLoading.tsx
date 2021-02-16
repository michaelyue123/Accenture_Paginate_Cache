import { LinearProgress } from "@material-ui/core";
import React from "react";

const UncachedLoading: React.FC = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <LinearProgress />
      <h2 style={{ textAlign: "center" }}>
        Click too quick, please wait for more cards to load.
      </h2>
    </div>
  );
};

export default UncachedLoading;
