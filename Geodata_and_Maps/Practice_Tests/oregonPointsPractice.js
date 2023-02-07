//const map = L.map('map').setView([43.52, -120.58], 8); //center Oregon
const map = L.map('map').setView([45.51, -122.54], 8); //Portland
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//make this a function
// var marker = L.circleMarker([45.522, -122.65], {
//     radius: 8,
//     fillColor: '#0267C1',
//     color: '#000',
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8,
// }).addTo(map);

// marker.bindPopup("<b>Adore Delano (21+)").openPopup();