import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default function configureStore(): any {
  const w: any = window as any;
  const devtools: any = w.devToolsExtension ? w.devToolsExtension() : (f: any) => f;
  const middlewares = [thunk];
  const middleware = applyMiddleware(...middlewares);
  const store: any = middleware(devtools(createStore))(reducers);
  return store;
}
