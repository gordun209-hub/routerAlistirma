import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getNewsFromApi } from "../../services/getNews";
// get news from api
const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    loading: false,
    error: null,
  },
  reducers: {
    getNewsStart: (state) => {
      state.loading = true;
    },
    getNewsSuccess: (state, action: PayloadAction<any>) => {
      state.news = action.payload;
      state.loading = false;
    },
    getNewsFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const getNews = (): any => async (dispatch: any) => {
  try {
    dispatch(newsSlice.actions.getNewsStart());
    const news = await getNewsFromApi();
    dispatch(newsSlice.actions.getNewsSuccess(news));
  } catch (error) {
    dispatch(newsSlice.actions.getNewsFailure(error));
  }
};

export const selectNews = (state: RootState) => state.news.news;
export const selectLoading = (state: RootState) => state.news.loading;
export const selectError = (state: RootState) => state.news.error;
export default newsSlice;
export const { getNewsStart, getNewsSuccess, getNewsFailure } =
  newsSlice.actions;
