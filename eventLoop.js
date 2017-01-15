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


function newEvent(name,interval,rept){
 console.log('Event name: ' +name + '; Event interval: ' + interval + '; Event Repetitions: ' + rept);
 var event = {
  startTime: performance.now(),
  event_name: name,
  event_interval: interval,
  event_repetition: rept
 };
 eventArray.push(event);
 window.requestAnimationFrame(gameLoop);
}

function check(item, index, arr, elapsed_time){
 if(this.elapsed_time % arr[index].interval == 0){
  alert('hit');
 }
 else{alert('miss');}
}

function update(time){
 eventArray.forEach(check);
}


function render(){
}

