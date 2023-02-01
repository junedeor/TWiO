// initialize the map and set its view to our chosen geographical coordinates and a zoom level:
    //(By default (as we didn’t pass any options when creating the map instance), all mouse and touch interactions on the map are enabled, and it has zoom and attribution controls. Note that the setView call also returns the map object — most Leaflet methods act like this when they don’t return an explicit value, which allows convenient jQuery-like method chaining.)
//var map = L.map('map').setView([51.505, -0.09], 13);
var map = L.map('map').setView([44.559, -123.281], 13);
// add a tile layer to add to our map, in this case it’s a OpenStreetMap tile layer. Creating a tile layer usually involves setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer. 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// add a marker - use this for event coords?
var marker = L.marker([51.5, -0.09]).addTo(map);
// Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
// Add a polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
//Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this. 
    //The bindPopup method attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object, and 
    //the openPopup method (for markers only) immediately opens the attached popup (user doesn't have to click)
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
//You can also use popups as layers (when you need something more than attaching a popup to an object)
    //Here we use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

//Dealing with events

//Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function. It allows you to react to user interaction:
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
//Each object has its own set of events — see documentation for details. 
    //The first argument of the listener function is an event object — it contains useful information about the event that happened. For example, map click event object (e in the example above) has latlng property which is a location at which the click occurred.
//Let’s improve our example by using a popup instead of an alert (a pop-up w/ the coordinates of the spot you clicked appears)
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);