//group according to "Type of Event" / 'event_type'
//it's LAT / LON here (opposite of table) so prob need to change that / at least be aware of it in the app code
// const concert = {
//     "type": "Feature",
//     "properties": {
//         "name": "Adore Delano (21+)",
//         "amenity": "Concert",
//         "popupContent": "Adore Delano (21+)"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [45.522, -122.65]
//     }
// };

console.log(concert)
const concert = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Adore Delano (21+)",
                "amenity": "Concert",
                "popupContent": "Adore Delano (21+)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.522, -122.65]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Pierre Kwenders",
                "amenity": "Concert",
                "popupContent": "Pierre Kwenders"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.562, -122.67]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Common Kings",
                "amenity": "Concert",
                "popupContent": "Common Kings"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.523, -122.67]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Stuff You Should Know",
                "amenity": "Concert",
                "popupContent": "Stuff You Should Know"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.519, -122.65]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Dirtwire",
                "amenity": "Concert",
                "popupContent": "Dirtwire"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [44.059, -121.30]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Matt Andersen",
                "amenity": "Concert",
                "popupContent": "Matt Andersen"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.558, -122.63]
            }
        }
    ]
};

const theater = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Legally Blonde - Eugene",
                "amenity": "Theater",
                "popupContent": "Legally Blonde - Eugene"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [44.0527, -123.093]
            }
        }
    ]
};

const ncaa_womens_basketball = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Colorado (Women) at Oregon (Women)",
                "amenity": "ncaa_womens_basketball",
                "popupContent": "Colorado (Women) at Oregon (Women)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [44.0449, -123.066]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Utah (Women) at Oregon State (Women)",
                "amenity": "ncaa_womens_basketball",
                "popupContent": "Utah (Women) at Oregon State (Women)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [44.5613, -123.281]
            }
        }
    ]
};    

const ncaa_basketball = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Idaho at Portland State",
                "amenity": "ncaa_basketball",
                "popupContent": "Idaho at Portland State"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.5117, -122.684]
            }
        }
    ]
};