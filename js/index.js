var bounds = [[0,0], [2000,2000]];

var map = L.map('mapid', {
    crs: L.CRS.Simple,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false,
    attributionControl: false,
    minZoom: -1,
    zoomSnap: 0.1,
});

// map.on('click',function(e) {
//     alert(e.latlng);
// });

var image = L.imageOverlay('img/map.png', bounds).addTo(map);
map.fitBounds(bounds)

//groups
var settlements = L.layerGroup().addTo(map);
var military = L.layerGroup().addTo(map);
var cities = L.layerGroup().addTo(map);
var cars = L.layerGroup().addTo(map);
var atv = L.layerGroup().addTo(map);
var reactors = L.layerGroup().addTo(map);
var gas = L.layerGroup().addTo(map);
var compounds = L.layerGroup().addTo(map);
var helis = L.layerGroup().addTo(map);
var bunkers = L.layerGroup().addTo(map);

var overlays = {
    "Cities": cities,
    "Settlements": settlements,
    "Military": military,
    "Cars": cars,
    "ATVs": atv,
    "Gas Stations": gas,
    "Compound Events": compounds,
    "Reactor Events": reactors,
    "Helicopter Crashes": helis,
    "Bunker Events": bunkers,
}

//icons

var carIcon = L.icon({
    iconUrl: 'img/icons/buggy2.png',
    iconSize: [28, 28],
});

var atvIcon = L.icon({
    iconUrl: 'img/icons/atv2.png',
    iconSize: [25, 25],  
});

var reactorIcon = L.icon({
    iconUrl: 'img/icons/reactor.png',
    iconSize: [20, 20],  
});

var gasIcon = L.icon({
    iconUrl: 'img/icons/gas2.png',
    iconSize: [20, 20],  
});
 
var fistIcon = L.icon({
    iconUrl: 'img/icons/fist.png',
    iconSize: [20, 20],  
});

var heliIcon = L.icon({
    iconUrl: 'img/icons/helicopter.png',
    iconSize: [20, 20], 
});

var bunkerIcon = L.icon({
    iconUrl: 'img/icons/bunker.png',
    iconSize: [20, 20], 
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
L.marker([695, 243], {icon: reactorIcon}).addTo(reactors);
L.marker([1584, 1782], {icon: reactorIcon}).addTo(reactors);

L.marker([237, 632], {icon: fistIcon}).addTo(compounds);
L.marker([1189, 634], {icon: fistIcon}).addTo(compounds);
L.marker([1656, 1033], {icon: fistIcon}).addTo(compounds);

L.marker([1439, 1020], {icon: heliIcon}).addTo(helis);
L.marker([257, 998], {icon: heliIcon}).addTo(helis);
L.marker([472, 1722], {icon: heliIcon}).addTo(helis);

L.marker([597, 534], {icon: bunkerIcon}).addTo(bunkers);
L.marker([1816, 1372], {icon: bunkerIcon}).addTo(bunkers);
L.marker([1254, 133], {icon: bunkerIcon}).addTo(bunkers);


// AREA NAMES

L.marker(
    [1002, 1780], 
    {icon: L.icon({ iconUrl: 'img/settlements/esettlement.png', iconSize: [115, 16] })}
).addTo(settlements)

L.marker(
    [1763, 502], 
    {icon: L.icon({ iconUrl: 'img/settlements/nsettlement.png', iconSize: [120, 16] })}
).addTo(settlements)

L.marker(
    [178, 157], 
    {icon: L.icon({ iconUrl: 'img/settlements/ssettlement.png', iconSize: [120, 16] })}
).addTo(settlements)

L.marker(
    [520, 1828], 
    {icon: L.icon({ iconUrl: 'img/military/airfield.png', iconSize: [130, 16] })}
).addTo(military)

L.marker(
    [1756, 1412], 
    {icon: L.icon({ iconUrl: 'img/military/milbase.png', iconSize: [130, 16] })}
).addTo(military)

L.marker(
    [132, 1045], 
    {icon: L.icon({ iconUrl: 'img/military/prison.png', iconSize: [50, 16] })}
).addTo(military)

L.marker(
    [1046, 1051], 
    {icon: L.icon({ iconUrl: 'img/cities/winchester.png', iconSize: [110, 16] })}
).addTo(cities)

L.marker(
    [752, 1345], 
    {icon: L.icon({ iconUrl: 'img/cities/arrowtown.png', iconSize: [80, 16] })}
).addTo(cities)

L.marker(
    [975, 428], 
    {icon: L.icon({ iconUrl: 'img/cities/bakersfield.png', iconSize: [80, 16] })}
).addTo(cities)

L.marker(
    [1458, 712], 
    {icon: L.icon({ iconUrl: 'img/cities/hedgewood.png', iconSize: [80, 16] })}
).addTo(cities)

L.marker(
    [1562, 200], 
    {icon: L.icon({ iconUrl: 'img/cities/henderson.png', iconSize: [80, 16] })}
).addTo(cities)

L.marker(
    [492, 922], 
    {icon: L.icon({ iconUrl: 'img/cities/melrose.png', iconSize: [67, 16] })}
).addTo(cities)

L.marker(
    [1367, 1510], 
    {icon: L.icon({ iconUrl: 'img/cities/mountainview.png', iconSize: [100, 16] })}
).addTo(cities)

L.marker(
    [1150, 75], 
    {icon: L.icon({ iconUrl: 'img/cities/port.png', iconSize: [35, 16] })}
).addTo(cities)

L.marker(
    [521, 1145], 
    {icon: L.icon({ iconUrl: 'img/cities/southernlakes.png', iconSize: [105, 16] })}
).addTo(cities)

//control map
L.control.layers(null, overlays).addTo(map);


