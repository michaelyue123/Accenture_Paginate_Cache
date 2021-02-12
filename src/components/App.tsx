import React,{ useEffect } from 'react';
import { fetchData } from '../services/fetchData.service';

const App = () => {

  useEffect(() => {
    fetchData(10);
  }, []);

  return (
    <div className="App">
      APP
    </div>
  );
}

export default App;
