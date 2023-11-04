import authService from "../api/services/auth";

import { authSlice } from "../reducers/authReducer";

export const registerUser = (user) => {
  return async (dispatch) => {
    const response = await authService.register(user);
    dispatch(message(response));
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    await authService.login(user);
    dispatch(reset);
  };
};

/*
export const logoutUser = (user) => {
  return async (dispatch) => {
    await authService.logout(user);
    dispatch(reset);
  };
};*/

export const { reset, message } = authSlice.actions;
