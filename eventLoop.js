var eventArray = [];

// shamelessly copied and pasted, then modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//------------------------------------------------
var start = null;
var element = document.getElementById("myCanvas");

function gameLoop(timestamp) {
 if (!start) start = timestamp;
   
 var progress = timestamp - start;
// console.log('progress: ' + progress);
 if (progress < 2000) {
  window.requestAnimationFrame(gameLoop);
 } 
 update(timestamp);
 render();
}
//-----------------------------------------------

//window.requestAnimationFrame(gameLoop);

function newEvent(name,interval,rept){
 console.log('Event name: ' +name + '; Event interval: ' + interval + '; Event Repetitions: ' + rept);
 var event = {
  startTime: performance.now(),
  event_name: name,
  event_interval: interval,
  event_repetition: rept
 };
 eventArray.push(event);
}

function update(time){

}


function render(){
}

