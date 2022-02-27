import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import DisplayList from "./Component/DisplayList";
import "./App.less";
// TODO:显示所有的css文件的内容,如何获取❓搁置
// STAR:先熟练useReducer,之后再用immerReducer

// TODO:children:暂时用不上
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <DisplayList></DisplayList>
      </ErrorBoundary>
    </div>
  );
}
export default App;
