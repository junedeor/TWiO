//const map = L.map('map').setView([43.52, -120.58], 8); //center Oregon
const map = L.map('map').setView([45.51, -122.54], 8); //Portland
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// single point - gtg
//var marker = L.marker([45.5227, -122.658]).addTo(map);

// single custom circle - gtg **Shift Refresh to load!!**
// var circle = L.circle([45.522, -122.65], { //this will not work with more decimal spaces that this; might need to set the max decimal amounts in model
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500,
// }).addTo(map);  

// single smaller circle - gtg
// var circle = L.circle([45.522, -122.65], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 400,
// }).addTo(map);  


// popup - gtg
// marker.bindPopup("<b>Adore Delano (21+)").openPopup();

// event listener - gtg
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }
// map.on('click', onMapClick);

// event listener w/ popup instead of alert - gtg
// var popup = L.popup();
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }
// map.on('click', onMapClick);

// Custom Non-Icon Markers - gtg
var marker = L.circleMarker([45.522, -122.65], {
    radius: 8,
    fillColor: '#0267C1',
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
}).addTo(map);

// Custom Non-Icon Marker w/ PopUp - gtg 
//  ***Pop up loads right away, but still have to shift refresh for the marker***
marker.bindPopup("<b>Adore Delano (21+)").openPopup();

// Class of points