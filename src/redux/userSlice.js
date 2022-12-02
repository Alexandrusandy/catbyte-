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
  },
});

export const {setUsers, addUser} = counterSlice.actions;

export default counterSlice.reducer;
