import { takeEvery, put, call } from "redux-saga/effects";
import { languageChange } from "./feature/reducers";

function* workSetLanguage() {
  
  console.log("navigate");

}

export function* languageSaga() {
  yield takeEvery("lang/setLanguage", workSetLanguage);
  //yield takeEvery(languageChange());
  
}


