import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { Navigation } from "./pages/Navigation";
import { Home } from "./pages/Home";
import Counter from "./features/counter/Counter";
import News from "./features/News/News";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path={"counter"} element={<Counter />} />
            <Route path={"home"} element={<Home />} />
            <Route path={"news"} element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
