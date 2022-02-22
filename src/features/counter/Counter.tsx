import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, reset } from "./counterSlice";
import { getNewsFromApi } from "../../services/getNews";

function Counter() {
  const news = getNewsFromApi().then((news) => news.articles[0]);
  console.log(news);
  const count = useAppSelector((state) => state.count.count);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <h2>reset count</h2>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}

export default Counter;
