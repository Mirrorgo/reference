export const style = {
  displays: [
    {
      displayId: "block1",
      displayName: "两栏布局:左侧固定+右侧自适应",
      solution: [
        {
          name: "one",
          detail:
            "利用浮动, 左边元素宽度固定 ,设置向左浮动。将右边元素的 margin-left 设为固定宽度 。注意,因为右边元素的 width 默认为 auto ,所以会自动撑满父元素",
        },
        {
          name: "two",
          detail:
            "同样利用浮动,左边元素宽度固定 ,设置向左浮动。右侧元素设置 overflow: hidden; 这样右边就触发了 BFC ,BFC 的区域不会与浮动元素发生重叠,所以两侧就不会发生重叠",
        },
        {
          name: "three",
          detail: "利用 flex 布局,左边元素固定宽度,右边的元素设置 flex: 1",
        },
        {
          name: "four",
          detail:
            "利用绝对定位,父级元素设为相对定位。左边元素 absolute  定位,宽度固定。右边元素的 margin-left  的值设为左边元素的宽度值",
        },
        {
          name: "five",
          detail:
            "利用绝对定位,父级元素设为相对定位。左边元素宽度固定,右边元素 absolute  定位, left  为宽度大小,其余方向定位为 0",
        },
      ],
    },
    {
      displayId: "block2",
      displayName: "三栏布局:圣杯布局&双飞翼&flex+order",
      detail:
        "目的:三栏布局,中间一栏最先加载和渲染,两侧内容固定,中间内容随着宽度自适应",
      solution: [
        {
          name: "one",
          detail:
            "圣杯布局👎 使用float布局; 两侧使用 margin 负值,以便和中间内容横向重叠;使用padding防止中间内容被两侧覆盖",
        },
        {
          name: "two",
          detail:
            "双飞翼👎 使用float布局; 两侧使用 margin 负值,以便和中间内容横向重叠;使用margin防止中间内容被两侧覆盖",
        },
        {
          name: "three",
          detail: "利用flex+order实现👍",
        },
      ],
    },
  ],
};
