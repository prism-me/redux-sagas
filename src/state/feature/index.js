import { combineReducers } from '@reduxjs/toolkit';
import languageSlice from './reducers';

const reducers = combineReducers({
    language : languageSlice,
});


export default reducers;

// const reducers = combineReducers({
//     blog: blogSlice,
//     solution: solutionSlice,
//     product: productSlice,
//     page: pageSlice,
//     section: sectionSlice,
//   });