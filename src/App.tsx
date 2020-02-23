import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import configureStore from "./store/store";
const store = configureStore();

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Provider store={store}>Cool text here</Provider>
    </div>
  );
};

export default App;
