var map;
var realMap;
var moving = false;
var lastPosition = {};
function moveMap(event){
    if (moving == true) {
        console.log(event);
        //Spara musens X o Y (Det borde vara event.clientX (och Y))
        //Jämnför med förra postionen (som du kan spara i lastpostion[0] och[1])
        // och skapa ett relativt värde
        //Flytta kartan med hjälp av att uppdatera realMap.style.left = "nya relativa värdet"
    }
}

function init(){
    map = document.getElementById("map-layer");
    realMap = document.getElementById("the-image");
    map.addEventListener("mousedown", function(e){
        moving = true;
    });
    map.addEventListener("mouseup", function(e){
        moving = false;
    });
    map.addEventListener("mousemove", function(e){
        moveMap(e);          
    });
    window.addEventListener("wheel", function(e){

        if(moving == true){
            console.log(e.wheelDeltaY);

        }
    })
}


document.addEventListener("DOMContentLoaded", init);
