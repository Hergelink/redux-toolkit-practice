import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';

export const userSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateName: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          return (user.name = action.payload.name);
        }
      });
    },

    updateUserName: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          return (user.username = action.payload.username);
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateName, updateUserName } = userSlice.actions;
export default userSlice.reducer;
