
import "ol/ol.css"
import "@/style"
import {Map, View} from 'ol';

const map = new Map({
    target: 'map', layers: [new TileLayer({
        source: new OSM()
    })], view: new View({
        center: [103.22, 34.23], zoom: 10,
        projection:"EPSG:4326"
    })
});
