import { useState } from "react";
import "./App.less";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <article>
        <h1>两栏布局:左侧固定+自适应</h1>
        <div class="outer">
          <div class="left">左侧</div>
          <div class="right">右侧</div>
        </div>
      </article>
    </div>
  );
}

export default App;
