import { useDispatch, useSelector } from "react-redux";
import { incNum, decNum } from "./redux/actions/index";
import "./App.css";

function App() {
  const myCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="box">
        <div>
          <p>Increment/Decrement Counter</p>
        </div>
        <div>
          <p style={{ fontSize: '16px', textAlign: 'center', fontWeight: '500', color: '#34495E' }}>with ReactJS and Redux</p>
        </div>
        <div>
          <h1>{myCounter}</h1>
        </div>
        <div className="btn-box">
          <button className="btn" onClick={() => dispatch(incNum())}>
            Increment
          </button>
          <button className="btn" onClick={() => dispatch(decNum())}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
