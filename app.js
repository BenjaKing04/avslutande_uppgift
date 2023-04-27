var map;
var realMap;
var moving = false;
var lastPosition = {};
var scale = 1;
var marker;

function moveMap(event) {
  if (moving == true) {
    // Get the position of where the mouse is
    var currentX = event.clientX;
    var currentY = event.clientY;
    // Get the distance the mouse has moved since last location
    var deltaX = currentX - lastPosition.x;
    var deltaY = currentY - lastPosition.y;
    // Update map position
    var mapLeft = realMap.offsetLeft + deltaX;
    var mapTop = realMap.offsetTop + deltaY;
    realMap.style.left = mapLeft + "px";
    realMap.style.top = mapTop + "px";
    // Move the marker
    if (marker) {
      var markerLeft = marker.offsetLeft + deltaX;
      var markerTop = marker.offsetTop + deltaY;
      marker.style.left = markerLeft + "px";
      marker.style.top = markerTop + "px";
    }
    // Save the position of the mouse
    lastPosition.x = currentX;
    lastPosition.y = currentY;
  }
}

function zoomMap(event) {
  var delta = event.deltaY;
  var zoomIntensity = 0.05;
  if (delta > 0) {
    // Zoom out
    scale -= zoomIntensity;
  } else {
    // Zoom in
    scale += zoomIntensity;
  }
  // Restrict the scale
  if (scale < 0.1 ) {
    scale = 0.1;
  } else if (scale > 3) {
    scale = 3;
  }
  // Update the map scale
  realMap.style.transform = "scale(" + scale + ")";
  // Resize the marker
  if (marker) {
    var markerSize = 20 / scale;
    marker.style.width = markerSize + "px";
    marker.style.height = markerSize + "px";
  }
}

function init() {
  map = document.getElementById("map-layer");
  realMap = document.getElementById("the-image");

  // Add a marker to the map
  marker = document.createElement("div");
  marker.className = "marker";
  map.appendChild(marker);

  // Function for the map to move
  map.addEventListener("mousedown", function (e) {
    moving = true;
    lastPosition.x = e.clientX;
    lastPosition.y = e.clientY;
  });

  map.addEventListener("mouseup", function (e) {
    moving = false;
  });

  // Function for moving the map while dragging with the mouse
  map.addEventListener("mousemove", function (e) {
    moveMap(e);
  });

  // Function for zooming the map
  map.addEventListener("wheel", function (e) {
    zoomMap(e);
    e.preventDefault();
  });
}

document.addEventListener("DOMContentLoaded", init);
