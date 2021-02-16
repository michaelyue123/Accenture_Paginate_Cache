import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
  spanMargin: {
    fontSize: 18,
    marginTop: 5,
  },
  buttonStyle: {
    padding: "5px",
    fontSize: 13,
  },
}));

interface PaginationProps {
  currentPage: number;
  totalBackendCards: number;
  moveNextPage?: () => void;
  backPreviousPage?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalBackendCards,
  moveNextPage,
  backPreviousPage,
}) => {
  const classes = useStyles();
  let backendPage: number = 0;

  if (totalBackendCards) {
    backendPage = Math.ceil(totalBackendCards / 12);
  }

  return (
    <Grid container spacing={5} data-test="component-pagination">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {currentPage > 1 && (
            <Grid item>
              <Button
                className={classes.buttonStyle}
                onClick={backPreviousPage}
                data-test="back-button"
              >
                Back
              </Button>
            </Grid>
          )}

          <Grid item className={classes.spanMargin}>
            <span>
              Page <span data-test="currentPageIndex">{currentPage}</span> of{" "}
              {backendPage}
            </span>
          </Grid>

          {currentPage < backendPage && (
            <Grid item>
              <Button
                className={classes.buttonStyle}
                onClick={moveNextPage}
                data-test="next-button"
              >
                Next
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pagination;
