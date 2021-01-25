import api from "../api";
import {LOG_OUT_AC, SET_USER_AC} from "../reducers/user";

export function login(userdata, history) {
  return async (dispatch) => {
    try {
      const { data } = await api.auth.login(userdata);
      dispatch(SET_USER_AC(data));
      localStorage.setItem("token", data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
}

export function register(userdata, history) {
  return async () => {
    try {
      await api.auth.register(userdata);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
}

export function logout(history) {
  return async (dispatch) => {
    try {
      localStorage.removeItem('token')
      dispatch(LOG_OUT_AC())
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
}
