import React,{ useEffect } from 'react';
import { fetchData } from '../services/fetchData.service';
import CardGrid from './cards/CardGrid';
import Pagination from './pagination/Pagination';

const App = () => {

  useEffect(() => {
    fetchData(10);
  }, []);

  return (
    <React.Fragment>
      <CardGrid data={1} />
      <Pagination
          
      />
    </React.Fragment>
  );
}

export default App;
