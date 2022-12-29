import React from "react";
import "./App.css";

//Hooks
import { useAppDispatch, useAppSelector } from "./Store/hooks/redux";
import { userSlice } from "./Store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch();

  return <div className="App"></div>;
}

export default App;
