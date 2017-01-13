
function newEvent(name,interval,rept){
 alert(name + " " + interval + " " + rept);
}

function update(time){

}


function render(){

 requestAnimationFrame();
}

function gameLoop(){

 update(timeElapsed);
 render();
}
