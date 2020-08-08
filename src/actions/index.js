import { AUTH_USER, AUTH_ERROR } from "./type";
import axios from "axios";

export const signUp = (formProps, callback) => async (dispatch) => {
  try {
    let res = await axios.post("https://reqres.in/api/login", formProps);

    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem("token", res.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "UNVALID USER REQUEST" });
  }
};
