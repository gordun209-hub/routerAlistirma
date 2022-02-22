import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";
import newsReducer from "../features/News/newsSlice";
const store = configureStore({
  reducer: {
    count: countReducer.reducer,
    news: newsReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
