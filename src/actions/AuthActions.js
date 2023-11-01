import authService from "../api/services/auth";

import { authSlice } from "../reducers/authReducer";

export const registerUser = (user) => {
  return async (dispatch) => {
    await authService.register(user);
    dispatch(reset);
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

export const { reset } = authSlice.actions;
