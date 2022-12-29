import { IUser } from "../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}
