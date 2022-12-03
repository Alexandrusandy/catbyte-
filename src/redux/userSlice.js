import {createSlice} from '@reduxjs/toolkit';
const users = [];
const initialState = {
  users: users,
};

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users.unshift(action.payload);
    },
    removeUser(state, action) {
      state.users.splice(action.payload, 1);
    },
  },
});

export const {setUsers, addUser, removeUser} = counterSlice.actions;

export default counterSlice.reducer;
