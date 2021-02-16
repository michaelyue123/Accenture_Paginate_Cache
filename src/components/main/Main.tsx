import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import CardGrid from "../cards/CardGrid";
import InitialLoading from "../loading/initial_loading/InitialLoading";
import Pagination from "../pagination/Pagination";
import { PAGE_SIZE } from "../../constants";
import UncachedLoading from "../loading/uncached_loading/UncachedLoading";
import { applicationAction } from "../../actions";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#DCDCDC",
  },
});

const Main: React.FC = () => {
  // get fetched data from store
  const data = useSelector((state: any) => state.appData);
  const classes = useStyles();

  const dispatch = useDispatch();

  // extract variables from data
  const { totalBackendCards, currentPage, fetchedData } = data;

  // fire API call and watch API call
  useEffect(() => {
    function requestData() {
      dispatch(applicationAction.fetchDataRequest());
    }
    requestData();
  }, [dispatch]);

  // update total fetched page
  useEffect(() => {
    dispatch(applicationAction.getInitialFetchedPages());
  }, [dispatch]);

  // paginate fetched data
  // make one slice of total fetched data on every 12 cards
  const paginate = (
    data: typeof fetchedData,
    currentPage: number,
    pageSize: number
  ) => {
    let startIndex = (currentPage - 1) * pageSize;
    let lastIndex = currentPage * pageSize;
    return data.slice(startIndex, lastIndex);
  };

  // tigger move next page action and dispatch to store
  const moveNextPage = () => {
    dispatch(applicationAction.requestNextPage());
  };

  // tigger back previous page action and dispatch to store
  const backPreviousPage = () => {
    dispatch(applicationAction.backPreviousPage());
  };

  return (
    <div className={classes.root}>
      {fetchedData.length === 0 ? (
        <InitialLoading />
      ) : (
        <>
          {fetchedData.length > (currentPage - 1) * PAGE_SIZE ? (
            <React.Fragment data-test="main-component-display">
              <CardGrid
                singlePageData={paginate(fetchedData, currentPage, PAGE_SIZE)}
              />
              <Pagination
                totalBackendCards={totalBackendCards}
                currentPage={currentPage}
                moveNextPage={moveNextPage}
                backPreviousPage={backPreviousPage}
              />
            </React.Fragment>
          ) : (
            <UncachedLoading />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
