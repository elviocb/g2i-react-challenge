import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export default function configureStore() {
  const w: any = window;
  const devtools = (w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()) || compose;
  const middlewares = [thunk];
  const middleware = applyMiddleware(...middlewares);
  const store = middleware(devtools(createStore))(reducers);
  return store;
}
