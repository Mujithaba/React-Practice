import React, { useReducer } from "react";

const initialState = {
  showANDhideTextFlag: false,
  changeTextStyleFlag: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Hide-Text":
      return {
        ...state,
        showANDhideTextFlag: false,
      };
    case "Show-Text":
      return {
        ...state,
        showANDhideTextFlag: true,
      };
    case "Change-Colour":
      return {
        ...state,
        changeTextStyleFlag: !state.changeTextStyleFlag,
      };

    default:
      return state;
  }
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state?.showANDhideTextFlag ? (
        <h3
          style={{
            backgroundColor: state?.changeTextStyleFlag ? "red" : "cyan",
          }}
        >
          Using the useReducer Hook
        </h3>
      ) : null}
      <button onClick={() => dispatch({ type: "Hide-Text" })}>Hide text</button>
      <button onClick={() => dispatch({ type: "Show-Text" })}>Show text</button>
      <button onClick={() => dispatch({ type: "Change-Colour" })}>
        Change color text
      </button>
    </div>
  );
}
