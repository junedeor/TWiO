const map = L.map('map').setView([43.52, -120.58], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// single point gtg
var marker = L.marker([45.5227, -122.658]).addTo(map);

// popup gtg
marker.bindPopup("<b>Adore Delano (21+)").openPopup();

// event listener gtg
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }
// map.on('click', onMapClick);

// event listener w/ popup instead of alert
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);