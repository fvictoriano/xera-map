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

map.on('click',function(e) {
    alert(e.latlng);
});

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
var towers = L.layerGroup().addTo(map);

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
    "Towers": towers,
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

var towerIcon = L.icon({
    iconUrl: 'img/icons/tower.png',
    iconSize: [20, 20],
});


//markers
L.marker([578, 321], {icon: atvIcon}).addTo(atv);
L.marker([983, 382], {icon: atvIcon}).addTo(atv);//bakersfield left (confirmed)
L.marker([1568, 234], {icon: atvIcon}).addTo(atv);
L.marker([1287, 820], {icon: atvIcon}).addTo(atv);// near hedgewood (confirmed)
L.marker([1215, 1159], {icon: atvIcon}).addTo(atv);//winchester north (confirmed)
L.marker([1271, 1440], {icon: atvIcon}).addTo(atv);
L.marker([788, 1347], {icon: atvIcon}).addTo(atv);
L.marker([749, 1316], {icon: atvIcon}).addTo(atv);// arrow town left (confirmed)
L.marker([1010, 446], {icon: atvIcon}).addTo(atv);
L.marker([958, 1012], {icon: atvIcon}).addTo(atv);//center winchester (confirmed)

L.marker([435, 846], {icon: carIcon}).addTo(cars);//melrose left (confirmed)
L.marker([767, 1377], {icon: carIcon}).addTo(cars);//arrow town right (confirmed)
L.marker([1013, 1035], {icon: carIcon}).addTo(cars);//center top winchester (confirmed)
L.marker([1063, 1213], {icon: carIcon}).addTo(cars);//right winchester (confirmed)
L.marker([1157, 931], {icon: carIcon}).addTo(cars);//top winchester (confirmed)
//L.marker([1389, 1424], {icon: carIcon}).addTo(cars); not confirmed
L.marker([1338, 1446], {icon: carIcon}).addTo(cars);//gas station on moutain view (confirmed)
L.marker([453, 967], {icon: carIcon}).addTo(cars);
L.marker([1421, 1439], {icon: carIcon}).addTo(cars);//moutain view north (confirmed)

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
L.marker([538, 888], {icon: gasIcon}).addTo(gas);
L.marker([1046, 408], {icon: gasIcon}).addTo(gas);
L.marker([1542, 216], {icon: gasIcon}).addTo(gas);
L.marker([1406, 680], {icon: gasIcon}).addTo(gas);
L.marker([1056, 975], {icon: gasIcon}).addTo(gas);
L.marker([743, 1365], {icon: gasIcon}).addTo(gas);

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

L.marker([1652, 795], {icon: towerIcon}).addTo(towers);
L.marker([1420, 1747], {icon: towerIcon}).addTo(towers);
L.marker([984, 1436], {icon: towerIcon}).addTo(towers);
L.marker([816, 1023], {icon: towerIcon}).addTo(towers);
L.marker([1335, 1260], {icon: towerIcon}).addTo(towers);
L.marker([1418, 596], {icon: towerIcon}).addTo(towers);
L.marker([845, 1689], {icon: towerIcon}).addTo(towers);
L.marker([649, 718], {icon: towerIcon}).addTo(towers);
L.marker([368, 833], {icon: towerIcon}).addTo(towers);
L.marker([627, 1684], {icon: towerIcon}).addTo(towers);
L.marker([1398, 954], {icon: towerIcon}).addTo(towers);
L.marker([1724, 205], {icon: towerIcon}).addTo(towers);
L.marker([368, 833], {icon: towerIcon}).addTo(towers);
L.marker([368, 833], {icon: towerIcon}).addTo(towers);





// AREA NAMES


//east

var east = new L.marker([1002, 1780], { opacity: 0 }); //opacity may be set to zero
east.bindTooltip("EAST SETTLEMENT", {
    permanent: true,
    className: "settlement",
    offset: [-85, 30],   
});
east.addTo(settlements);

var north = new L.marker([1763, 502], { opacity: 0 }); //opacity may be set to zero
north.bindTooltip("NORTH SETTLEMENT", {
    permanent: true,
    className: "settlement",
    offset: [-85, 30],   
});
north.addTo(settlements);

var south = new L.marker([178, 157], { opacity: 0 }); //opacity may be set to zero
south.bindTooltip("SOUTH SETTLEMENT", {
    permanent: true,
    className: "settlement",
    offset: [-85, 30],   
});
south.addTo(settlements);

// red zone

var airfield = new L.marker([522.454947, 1834], { opacity: 0 }); //opacity may be set to zero
airfield.bindTooltip("WHITESTONE AIRFIELD", {
    permanent: true,
    className: "redzones",
    offset: [-100, 30],   
});
airfield.addTo(military);

var militarybase = new L.marker([1756, 1412], { opacity: 0 }); //opacity may be set to zero
militarybase.bindTooltip("NORTH MILITARY BASE", {
    permanent: true,
    className: "redzones",
    offset: [-100, 30],   
});
militarybase.addTo(military);

var prison = new L.marker([132, 1045], { opacity: 0 }); //opacity may be set to zero
prison.bindTooltip("PRISON", {
    permanent: true,
    className: "redzones",
    offset: [-50, 30],   
});
prison.addTo(military);


//old settlement

/*L.marker(
    [1002, 1780], 
    {icon: L.icon({ iconUrl: 'img/settlements/esettlement.png', iconSize: [115, 16] })}
).addTo(settlements)

//north

L.marker(
    [1763, 502], 
    {icon: L.icon({ iconUrl: 'img/settlements/nsettlement.png', iconSize: [120, 16] })}
).addTo(settlements)

//south

L.marker(
    [178, 157], 
    {icon: L.icon({ iconUrl: 'img/settlements/ssettlement.png', iconSize: [120, 16] })}
).addTo(settlements)*/

//old military

/*L.marker(
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
).addTo(military)*/

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


