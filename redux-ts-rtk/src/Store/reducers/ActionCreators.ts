import axios from "axios";
import { InstanceOf } from "reselect/es/types";
import { IUser } from "../models/IUser";
import { AppDispatch } from "../Store";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(userSlice.actions.usersFetchingError(error.message));
  }
};
