function animate({ timing, draw, duration }) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
const train = document.querySelector(".ball");
const linear = () => {
  const draw = (progress) => {
    train.style.transform = `translate(${progress}px, 0)`;
  };

  // 沿着x轴匀速运动
  animate({
    duration: 1000,
    timing(timeFraction) {
      return timeFraction * 100;
    },
    draw,
  });
};
