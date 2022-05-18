import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "lang",
  initialState: "en",
  reducers: {
    setLanguage: (lang, action) => {
      console.log("language came -" , action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

export const languageChange = (lang) => (dispatch, getState) => {
  dispatch({ type: setLanguage.type, payload: lang});
};
