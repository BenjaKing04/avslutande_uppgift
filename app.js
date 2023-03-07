var map;
var moving = false;
var totalDistance = 0;
var lastSeenAt = {x: null, y: null};

function moveMap(event){
    if (moving == true) {
        console.log(event);
    }
   

}

function stopMove(){
    console.log("stoped");
}


function init(){
    map = document.getElementById("map-layer");
    map.addEventListener("mousedown", function(e){
        moving = true;
    });
    map.addEventListener("mouseup", function(e){
        moving = false;
    });
    map.addEventListener("mousemove", function(e){
        moveMap(e);          
    });
}


document.addEventListener("DOMContentLoaded", init);
