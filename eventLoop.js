var eventArray = [];
var start = null;
var canvas = document.getElementById("myCanvas");
var killLoop = false;

function setStop(){
 killLoop = true;
}
function setGo(){
 killLoop = false;
}

function gameLoop(timestamp) {
 if (!start) start = timestamp;
 var progress = timestamp - start;
 console.log(eventArray);
 if(!killLoop){
  update();
  render();
 }
}


function newEvent(name,interval,rept){
 console.log('Event name: ' +name + '; Event interval: ' + interval + '; Event Repetitions: ' + rept);
 let event = {
  startTime: performance.now(),
  event_name: name,
  event_interval: interval,
  event_repetition: rept
 };
 eventArray.push(event);
 gameLoop(performance.now());
}

function update(){
}


function render(){
 window.requestAnimationFrame(gameLoop);
}

