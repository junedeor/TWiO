// Reser Stadium https://www.openstreetmap.org/#map=20/44.55948/-123.28152
//Center of Oregon 43° 52.1’ N, -120° 58.7’ W.
//Higher the zoom number, higher the resolution (started at 13)
    //6-8 is about right, just need to resize the map to fit those resolutions in the style sheet
const map = L.map('map').setView([43.52, -120.58], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//try linking / putting everything together in this file, but if that doesn't work than do it in html like tutorial
const concertLayer = L.geoJSON([concert], {

    style(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature,

    pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: '#ff7800',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

//GeoJSON format:
// var lightRailStop = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {
//                 "popupContent": "18th & California Light Rail Stop"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [-104.98999178409576, 39.74683938093904]
//             }
//         },{
//             "type": "Feature",
//             "properties": {
//                 "popupContent": "20th & Welton Light Rail Stop"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [-104.98689115047453, 39.747924136466565]
//             }
//         }
//     ]
// };