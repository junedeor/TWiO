//group according to "Type of Event" / 'event_type'
//it's LON / LAT here (opposite of table) so prob need to change that / at least be aware of it in the app code

const concert = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "Adore Delano (21+)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.658, 45.5227]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Pierre Kwenders"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.674, 45.5621]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Common Kings"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.676, 45.5232]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Stuff You Should Know"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.652, 45.5192]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Dirtwire"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-121.308, 44.0597]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Matt Andersen"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.635, 45.5589]
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
                "popupContent": "Legally Blonde - Eugene"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-123.093, 44.0527]
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
                "popupContent": "Colorado (Women) at Oregon (Women)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-123.066, 44.0449]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Utah (Women) at Oregon State (Women)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-123.281, 44.5613]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "Idaho at Portland State"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.684, 45.5117]
            }
        }
    ]
};