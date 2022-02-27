// import
import React, { useReducer } from "react";
import { style } from "../style";
const { displays } = style;

export default function DisplayList() {
  return displays.map((display) => (
    <Switcher display={display} key={display.id}>
      {(args) => <Child args={args}></Child>}
    </Switcher>
  ));
}

function Child({ args }) {
  const { name } = args;
  return (
    <div className={`outer ${name}`}>
      <div className="left">左侧</div>
      <div className="right">右侧</div>
    </div>
  );
}

function Switcher(props) {
  const { solution, displayName, id } = props.display;
  const [state, dispatch] = useReducer(reducer, {
    max: solution.length - 1,
    index: 0,
  });
  return (
    <article className={id}>
      <h1>{displayName}</h1>
      <div>
        <h3 className="inline-block">方法{state.index + 1}</h3>
        <button onClick={() => dispatch({ type: "previous" })}>previous</button>
        <button onClick={() => dispatch({ type: "next" })}>next</button>
        <h4 className="inline-block">class:{solution[state.index].name}</h4>
      </div>
      <div>{solution[state.index].detail}</div>
      {props.children({ name: solution[state.index].name })}
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
