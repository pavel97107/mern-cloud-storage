const initialState = {
  currentUser: null,
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, currentUser: action.payload, isAuth: true };
    case "LOG_OUT":
      return { ...state, currentUser: null, isAuth: false };
    default:
      return state;
  }
};

export const SET_USER_AC = (data) => ({ type: "SET_USER", payload: data });
export const LOG_OUT_AC = () => ({ type: "LOG_OUT"});