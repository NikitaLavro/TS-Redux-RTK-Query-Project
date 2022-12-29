import React from "react";
import "./App.css";

//Hooks
import { useAppDispatch, useAppSelector } from "./Store/hooks/redux";
import { userSlice } from "./Store/reducers/UserSlice";

function App() {
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;

  const dispatch = useAppDispatch;

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Inccrement</button>
    </div>
  );
}

export default App;
