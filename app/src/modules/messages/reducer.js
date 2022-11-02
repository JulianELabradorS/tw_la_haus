import { getMessages } from "./actions";

const initialState = {
  messages: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getMessages.SUCCESS:
      return { ...state, messages: payload };
    default:
      return state;
  }
};
export default reducer;
