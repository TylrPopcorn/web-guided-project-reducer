import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";

const initialState = {
  currentValue: 0,
  Memory: 0,
}
import actions from "./actions/calcActions"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //Reducer has to follow this pattern: (state, action)


  //Action (Type, Payload)
  /*
  console.log("initialState", initialState)
  let newStateObject = reducer(initialState, actions.multiplyAction(8))
  console.log("newStateObject", newStateObject)

  console.log("initlaState after reducer call", initialState)
*/

  const handleAdd = () => {
    dispatch(actions.add(2))
  }

  const handleSubtract = () => {
    dispatch(actions.subtractAction(5))
  }

  const handleClear = () => {
    dispatch(actions.clearAction())
  }

  useEffect(() => {
    console.log("i rerendered")
  })

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn" onClick={handleAdd}>
        + 2
      </button>

      <button type="button" className="btn" onClick={handleSubtract}>
        - 5
      </button>

      <button type="button" className="btn" onClick={handleClear}>
        CE
      </button>
    </div>
  );
}
