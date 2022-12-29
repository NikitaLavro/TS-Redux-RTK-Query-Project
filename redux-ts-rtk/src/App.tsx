import React, { useEffect } from "react";
import "./App.css";

//Hooks
import { useAppDispatch, useAppSelector } from "./Store/hooks/redux";
import { fetchUsers } from "./Store/reducers/ActionCreators";
import { userSlice } from "./Store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
