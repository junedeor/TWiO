// Reser Stadium https://www.openstreetmap.org/#map=20/44.55948/-123.28152
//Center of Oregon 43° 52.1’ N, -120° 58.7’ W.
//Higher the zoom number, higher the resolution (started at 13)
    //6-8 is about right, just need to resize the map to fit those resolutions in the style sheet
var map = L.map('map').setView([43.52, -120.58], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

// map.on('click', onMapClick);

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);