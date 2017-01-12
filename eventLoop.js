
function newEvent(name,interval,rept){
 alert(name + " " + interval + " " + rept);
}

function update(time){

}

function requestAnimationFrame(){

}

function render(){

 requestAnimationFrame();
}

function gameLoop(){

 update(timeElapsed);
 render();
}
