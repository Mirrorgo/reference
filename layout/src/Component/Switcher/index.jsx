import React, { useReducer } from "react";

export default function Switcher(props) {
  const { solution, displayName, displayId } = props.display;
  const [state, dispatch] = useReducer(reducer, {
    max: solution.length - 1, //为数组的长度-1
    index: 0,
  });
  return (
    <article className={displayId}>
      <h1>{displayName}</h1>
      <div>
        <h3 className="inline-block">方法{state.index + 1}</h3>
        {state.max !== 0 && (
          <button onClick={() => dispatch({ type: "previous" })}>
            previous
          </button>
        )}
        {state.max !== 0 && (
          <button onClick={() => dispatch({ type: "next" })}>next</button>
        )}
        <h4 className="inline-block">class:{solution[state.index].name}</h4>
      </div>
      <div>{solution[state.index].detail}</div>
      {props.children({ displayId, name: solution[state.index].name })}
    </article>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return state.index === state.max
        ? {
            ...state,
          }
        : {
            ...state, //展开语法一定要放在考前的位置,否则会被全部覆盖掉
            index: state.index + 1,
          };
    case "previous":
      return state.index === 0
        ? { ...state }
        : {
            ...state,
            index: state.index - 1,
          };
    default:
      throw new Error();
  }
}
