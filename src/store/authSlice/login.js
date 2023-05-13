import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: localStorage.getItem("token") || false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserData } = authSlice.actions;

export const fetchUserData = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_API_URL}/auth/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setUserData(response.data));
  } catch (error) {
    console.error(error);
  }
};

export default authSlice.reducer;
