// shamelessly copied and pasted, then modified slightly from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

var start = null;
var element = document.getElementById("myCanvas");
//element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  console.log(progress);
//  element.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
