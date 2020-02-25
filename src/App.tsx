import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import configureStore from "./store/store";
import QuizPage from "./modules/quiz/components/quiz.page";
import Background from "./modules/quiz/components/background.component";
const store = configureStore();

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Background>
          <Router basename={process.env.REACT_APP_ROUTER_BASENAME}>
            <QuizPage />
          </Router>
        </Background>
      </Provider>
    </div>
  );
};

export default App;
