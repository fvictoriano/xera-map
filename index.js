var bounds = [[0,0], [2000,2000]];

var map = L.map('mapid', {
    crs: L.CRS.Simple,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false,
    attributionControl: false,
    minZoom: -2,
    zoomSnap: 0.1,
    cursor: true
});

var image = L.imageOverlay('img/map.png', bounds).addTo(map);
map.fitBounds(bounds)

//icons

var carIcon = L.icon({
iconUrl: 'img/icons/buggy.png',
iconSize: [35, 35],  
 });
var atvIcon = L.icon({
iconUrl: 'img/icons/atv.png',
iconSize: [25, 25],  
 });
var radioactiveIcon = L.icon({
iconUrl: 'img/icons/radioactive.png',
iconSize: [20, 20],  
 });
var gasIcon = L.icon({
iconUrl: 'img/icons/gas.png',
iconSize: [20, 20],  
 });    

//markers








//groups
var cars = L.layerGroup().addTo(map);
var atv = L.layerGroup().addTo(map);
var radioactives = L.layerGroup().addTo(map);
var gas = L.layerGroup().addTo(map);

var overlays = {
    "Cars": cars,
    "ATV": atv,
    "Radioactive Mission": radioactives,
    "Gas Station": gas,
    
}
//control map
L.control.layers(null, overlays).addTo(map);

//icons






//map.on('click',function(e) {
//    alert(e.latlng);
//});


