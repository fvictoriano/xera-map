//FYXEL TEST 



var bounds = [[0,0], [2000,2000]];

var map = L.map('mapid', {
    crs: L.CRS.Simple,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false,
    attributionControl: false,
    minZoom: -1,
    zoomSnap: 0.1,
    cursor: true
});

map.on('click',function(e) {
    alert(e.latlng);
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

L.marker([912.325625, 1480], {icon: gasIcon}).addTo(gas);
L.marker([1432.153196, 1130], {icon: gasIcon}).addTo(gas);
L.marker([758.376691, 860], {icon: gasIcon}).addTo(gas);
L.marker([644.414492, 1236], {icon: gasIcon}).addTo(gas);
L.marker([432.48479, 704], {icon: gasIcon}).addTo(gas);
L.marker([306.526571, 1166], {icon: gasIcon}).addTo(gas);
L.marker([422.495401, 692], {icon: gasIcon}).addTo(gas);
L.marker([618.423114, 344], {icon: gasIcon}).addTo(gas);







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








