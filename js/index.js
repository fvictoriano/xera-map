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

//groups
var cars = L.layerGroup().addTo(map);
var atv = L.layerGroup().addTo(map);
var reactors = L.layerGroup().addTo(map);
var gas = L.layerGroup().addTo(map);
var compounds = L.layerGroup().addTo(map);

var overlays = {
    "Cars": cars,
    "ATVs": atv,
    "Reactors": reactors,
    "Gas Stations": gas,
    "Compounds": compounds,
}

//icons

var carIcon = L.icon({
iconUrl: 'img/icons/buggy.png',
iconSize: [35, 35],  
 });

var atvIcon = L.icon({
iconUrl: 'img/icons/atv.png',
iconSize: [25, 25],  
 });

var reactorIcon = L.icon({
iconUrl: 'img/icons/reactor.png',
iconSize: [20, 20],  
 });

var gasIcon = L.icon({
iconUrl: 'img/icons/gas.png',
iconSize: [20, 20],  
 });
 
var fistIcon = L.icon({
iconUrl: 'img/icons/fist.png',
iconSize: [22, 22],  
    });  

//markers
L.marker([578, 321], {icon: atvIcon}).addTo(atv)
L.marker([973, 374], {icon: atvIcon}).addTo(atv)
L.marker([1568, 234], {icon: atvIcon}).addTo(atv)
L.marker([1287, 820], {icon: atvIcon}).addTo(atv)
L.marker([1215, 1159], {icon: atvIcon}).addTo(atv)
L.marker([1271, 1440], {icon: atvIcon}).addTo(atv)
L.marker([445, 846], {icon: atvIcon}).addTo(atv)
L.marker([788, 1347], {icon: atvIcon}).addTo(atv)
L.marker([1430, 1439], {icon: atvIcon}).addTo(atv)
L.marker([749, 1316], {icon: atvIcon}).addTo(atv)

L.marker([435, 846], {icon: carIcon}).addTo(cars)
L.marker([767, 1377], {icon: carIcon}).addTo(cars)
L.marker([1008, 1049], {icon: carIcon}).addTo(cars)
L.marker([1050, 1214], {icon: carIcon}).addTo(cars)
L.marker([1157, 931], {icon: carIcon}).addTo(cars)
L.marker([1389, 1424], {icon: carIcon}).addTo(cars)
L.marker([1338, 1446], {icon: carIcon}).addTo(cars)
L.marker([965, 1003], {icon: carIcon}).addTo(cars)
L.marker([453, 967], {icon: carIcon}).addTo(cars)

L.marker([912, 1480], {icon: gasIcon}).addTo(gas);
L.marker([1432, 1130], {icon: gasIcon}).addTo(gas);
L.marker([758, 860], {icon: gasIcon}).addTo(gas);
L.marker([644, 1236], {icon: gasIcon}).addTo(gas);
L.marker([306, 1166], {icon: gasIcon}).addTo(gas);
L.marker([422, 692], {icon: gasIcon}).addTo(gas);
L.marker([618, 344], {icon: gasIcon}).addTo(gas);
L.marker([1258, 282], {icon: gasIcon}).addTo(gas);
L.marker([1476, 397], {icon: gasIcon}).addTo(gas);
L.marker([1332, 1445], {icon: gasIcon}).addTo(gas);

L.marker([427, 1409], {icon: reactorIcon}).addTo(reactors);
L.marker([1002, 1780], {icon: reactorIcon}).addTo(reactors);
L.marker([695, 243], {icon: reactorIcon}).addTo(reactors);

L.marker([237, 632], {icon: fistIcon}).addTo(compounds);
L.marker([1189, 634], {icon: fistIcon}).addTo(compounds);
L.marker([1656, 1033], {icon: fistIcon}).addTo(compounds);


//control map
L.control.layers(null, overlays).addTo(map);


