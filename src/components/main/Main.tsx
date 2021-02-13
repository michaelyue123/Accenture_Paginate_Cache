import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData.service";

import CardGrid from "../cards/CardGrid";
import Spinner from "../loading/Spinner";
import Pagination from "../pagination/Pagination";


interface MainProps {
  data: {}
  currentPage: number
  cachedPages: number
  lastPageIndex: number
  moveNextPage: () => void
  backPreviousPage: () => void
}

const Main: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);


  // loading for 2s
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  useEffect(() => {
    fetchData(4);
  }, []);

  return (
    <>
      {
        loading ? <Spinner />
        :
        <React.Fragment>
          <CardGrid />
          <Pagination  
              lastpageIndex={lastPageIndex}
              currentPage={currentPage}
              moveNextPage={moveNextPage}
              backPreviousPage={backPreviousPage} 
          />
        </React.Fragment>
      }
    </>
  );
};

export default Main;
