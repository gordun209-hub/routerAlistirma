import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { getNews } from "./newsSlice";

const News = () => {
  const dispatch = useAppDispatch();
  const allNews = useAppSelector((state) => state.news.news.articles);
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div>
      <h1>News</h1>
      <ul>
        {allNews.map((news: any) => (
          <li key={news.title}>
            <h4>{news.title}</h4>
            <img
              style={{ width: "450px", height: "120px" }}
              src={news.urlToImage}
              alt={news.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
