Vue.component('EventItem', {
    template: ``
}
)






new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        page_name: "Map View",
        short_title: null,
        event_type: null,
        lat: null,
        lon: null,
        all_events: null,
        local_dtg: null,
    },
    methods: {
        mapCoords() {
            
            axios.get('/api/v1').then(res => {
                this.all_events = res.data.filter(e => e.lat && e.lon)
            })
            .then(x => this.createMap())
        },
        createMap() {
            this.map = L.map('map').setView([45.51, -122.54], 8); 
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.map)
            this.all_events.forEach (mapEvent => this.mapMarker(mapEvent))
            
                
        },
        mapMarker(mapEvent) {
            console.log(mapEvent)
            const marker = L.circleMarker([mapEvent.lat, mapEvent.lon], {
                radius: 8,
                fillColor: '#0267C1',
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
            }).addTo(this.map);
            marker.addTo(this.map)
    
            marker.bindPopup(mapEvent.short_title).openPopup(); 
        }
    },
    
    mounted() {
        this.mapCoords()
        // this.createMap()

    },

})    

