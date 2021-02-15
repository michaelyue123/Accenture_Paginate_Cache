import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import CardGrid from "../cards/CardGrid";
import InitialLoading from "../loading/initial_loading/InitialLoading";
import Pagination from "../pagination/Pagination";
import { moveNextPage, backPreviousPage } from "../../actions";
import { PAGE_SIZE } from "../../constants";
import UncachedLoading from "../loading/uncached_loading/UncachedLoading";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#DCDCDC",
  },
});

const Main: React.FC = () => {
  const data = useSelector((state: any) => state.data);
  const classes = useStyles();

  const totalBackendCards: number = data.totalBackendCards;
  const currentPage: number = data.currentPage;
  const fetchedData: [] = data.fetchedData;
  let totalFetchedPage: number = 0;

  if (fetchedData) {
    totalFetchedPage = fetchedData.length / PAGE_SIZE;
  }

  // paginate fetched data to fit in one page
  const paginate = (
    data: typeof fetchedData,
    currentPage: number,
    pageSize: number
  ) => {
    let startIndex = (currentPage - 1) * pageSize;
    let lastIndex = currentPage * pageSize;
    return data.slice(startIndex, lastIndex);
  };

  return (
    <div className={classes.root}>
      {fetchedData.length > (currentPage - 1) * PAGE_SIZE ? (
        <React.Fragment>
          {currentPage === totalFetchedPage && <InitialLoading />}
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
    </div>
  );
};

export default Main;
