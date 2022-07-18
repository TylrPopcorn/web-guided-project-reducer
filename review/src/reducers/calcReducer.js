import { ADD, SUBTRACT, ADD_TO_MEMORY, MULTIPLY } from "./actions/calcActions"

const reducer = (state, action) => {
  console.log("[REDUCER] -State: ", state)
  console.log("[REDUCER] -Action: ", action)
  switch (action.type) {
    case ADD:
      return { ...state, currentValue: state.currentValue + action.payload };
    case SUBTRACT:
      return { ...state, currentValue: state.currentValue - action.payload };
    case CLEAR:
      return { ...state, currentValue: 0 };
    case ADD_TO_MEMORY:
      return { ...state, memory: state.currentValue };
    case MULTIPLY:
      return { ...state, currentValue: state.currentValue = action.payload }
    default:
      return state;
  }
};

export default reducer;
