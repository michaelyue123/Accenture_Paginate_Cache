import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchData } from "../../services/fetchData.service";

import CardGrid from "../cards/CardGrid";
import InitialLoading from "../loading/initial_loading/InitialLoading";
import Pagination from "../pagination/Pagination";


interface IRootState {
  data: []
}

const Main: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const data = useSelector((state: IRootState) => state.data);

  console.log(data);


  // loading for 2s
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <InitialLoading />
      ) : (
        <React.Fragment>
          <CardGrid />
          {/* <Pagination
            lastpageIndex={lastPageIndex}
            currentPage={currentPage}
            moveNextPage={moveNextPage}
            backPreviousPage={backPreviousPage}
          /> */}
        </React.Fragment>
      )}
    </>
  );
};

export default Main;
