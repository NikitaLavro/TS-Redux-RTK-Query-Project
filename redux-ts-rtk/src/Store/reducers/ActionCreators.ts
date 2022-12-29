import axios from "axios";
import { IUser } from "../models/IUser";
import { AppDispatch } from "../Store";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IUser>(
      "https://jsonplaceholder.typicode.com/users"
    );
  } catch (error) {}
};
