import Switcher from "../Switcher";
import { style } from "../../style";
const { displays } = style;

export default function DisplayList() {
  return displays.map((display) => (
    <Switcher display={display} key={display.displayId}>
      {(args) => <Child args={args}></Child>}
    </Switcher>
  ));
}

function Child({ args }) {
  const { name, displayId } = args;
  console.log(displayId); //TODO:用于区分不同的child,然后用不同的html结构
  switch (displayId) {
    case "block1":
      return (
        <div className={`outer ${name}`}>
          <div className="left">左侧</div>
          <div className="right">右侧</div>
        </div>
      );
    case "block2":
      return name === "two" ? (
        <div>
          {/* 双飞翼 */}
          <div id="main" class="float">
            <div id="main-wrap">main</div>
          </div>
          <div id="left" class="float">
            left
          </div>
          <div id="right" class="float">
            right
          </div>
        </div>
      ) : (
        <div className={`outer ${name}`}>
          {/* 圣杯 || flex */}
          {/* NOTE:这里先写中间的盒子,最先被渲染,这就是这个布局的重点!!! */}
          {/* NOTE:主要用于帮助理解盒模型,本身的意义不是那么大,用flex和order也能实现,而且方便 */}
          {/* 圣杯布局👎 使用float布局; 两侧使用 margin 负值,
          以便和中间内容横向重叠;使用padding防止中间内容被两侧覆盖 */}
          <p className="center">中间:最先被渲染</p>
          <p className="left">左边</p>
          <p className="right">右边</p>
        </div>
      );
    default:
      return <div>displayId错误</div>;
  }
}
