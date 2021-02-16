import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

import Main from "./main/Main";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main data-test="main-component" />
    </Provider>
  );
};

export default App;
