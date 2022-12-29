import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { InstanceOf } from "reselect/es/types";
import { IUser } from "../models/IUser";
import { AppDispatch } from "../Store";
import { userSlice } from "./UserSlice";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_: void, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
