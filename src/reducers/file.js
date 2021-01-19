const initialState = {
  files: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILES":
      return {
        ...state,
        files: action.payload,
      };
    default:
      return state;
  }
};
