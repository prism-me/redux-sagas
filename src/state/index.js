import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducers from "./feature";
// ...
import {languageSaga} from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(languageSaga);

//  const action = (type) => store.dispatch({ type });
