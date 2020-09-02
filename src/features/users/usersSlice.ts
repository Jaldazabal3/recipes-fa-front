import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface User {
  name: string;
  url: string;
  followers: number;
}

interface UsersState {
  list: User[];
}

const initialState: UsersState = {
  list: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: state => {
      console.log('hola')
    }
  }
})

export const { addUser } = usersSlice.actions;

export const getUsers = (state: RootState) => state.users.list;

export default usersSlice.reducer;
