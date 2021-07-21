var bounds = [[0,0], [2000,2000]];

var map = L.map('mapid', {
    crs: L.CRS.Simple,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false,
    attributionControl: false,
    minZoom: -2,
    zoomSnap: 0.1,
});

/*map.on('click',function(e) {
    alert(e.latlng);
});*/

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
var militaryloot = L.layerGroup().addTo(map);

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
    "Military Loot": militaryloot,
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

var boxmilitaryIcon = L.icon({
    iconUrl: 'img/icons/box.png',
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
L.marker([1389, 1424], {icon: atvIcon}).addTo(atv);

L.marker([435, 846], {icon: carIcon}).addTo(cars);//melrose left (confirmed)
L.marker([767, 1377], {icon: carIcon}).addTo(cars);//arrow town right (confirmed)
L.marker([1013, 1035], {icon: carIcon}).addTo(cars);//center top winchester (confirmed)
L.marker([1063, 1213], {icon: carIcon}).addTo(cars);//right winchester (confirmed)
L.marker([1157, 931], {icon: carIcon}).addTo(cars);//top winchester (confirmed)
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
L.marker([986, 582], {icon: towerIcon}).addTo(towers);
L.marker([837, 724], {icon: towerIcon}).addTo(towers);
L.marker([521, 517], {icon: towerIcon}).addTo(towers);
L.marker([147, 1186], {icon: towerIcon}).addTo(towers);
L.marker([209, 1497], {icon: towerIcon}).addTo(towers);
L.marker([1156, 1396], {icon: towerIcon}).addTo(towers);
L.marker([1421, 334], {icon: towerIcon}).addTo(towers);

L.marker([908, 968], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1051, 1214], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1152, 935], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([749, 1321], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1288, 820], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([507, 961], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([722, 929], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([764, 663], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([558, 741], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([405, 1004], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1171, 396], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1318, 255], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1094, 1288], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([780, 1347], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([750, 1365], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([547, 885], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([469, 944], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1509, 1147], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1412, 1439], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1381, 1457], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([948, 446], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1005, 446], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1543, 170], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1500, 211], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1445, 763], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1402, 713], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1454, 680], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([1446, 465], {icon: boxmilitaryIcon}).addTo(militaryloot);
L.marker([982, 378], {icon: boxmilitaryIcon}).addTo(militaryloot);




// AREA NAMES

function createNametag(name, pos, classname, offset, layer)
{
    L.marker(pos, { opacity: 0})
        .bindTooltip(name, {
            permanent: true,
            className: classname,
            offset: offset
        })
        .addTo(layer)
}

createNametag("NORTH SETTLEMENT", [1763, 502], "nametag green", [-85, 30], settlements)
createNametag("EAST SETTLEMENT", [1002, 1780], "nametag green", [-85, 30], settlements)
createNametag("SOUTH SETTLEMENT", [178, 157], "nametag green", [-85, 30], settlements)

createNametag("NORTH MILITARY BASE", [1756, 1412], "nametag red", [-100, 20], military)
createNametag("WHITESTONE AIRFIELD", [522, 1834], "nametag red", [-100, 30], military)
createNametag("PRISON", [132, 1045], "nametag red", [-50, 30], military)

createNametag("WINCHESTER CITY", [1046, 1051], "nametag grey", [-80, 30], cities)
createNametag("ARROW TOWN", [752, 1345], "nametag grey", [-70, 30], cities)
createNametag("BAKERSFIELD", [975, 428], "nametag grey", [-70, 25], cities)
createNametag("HEDGEWOOD", [1458, 712], "nametag grey", [-65, 30], cities)
createNametag("HENDERSON", [1562, 200], "nametag grey", [-60, 25], cities)
createNametag("MELROSE", [492, 922], "nametag grey", [-50, 30], cities)
createNametag("MOUNTAIN VIEW", [1367, 1510], "nametag grey", [-80, 25], cities)
createNametag("PORT", [1150, 75], "nametag grey", [-45, 25], cities)
createNametag("SOUTHERN LAKES", [521, 1145], "nametag grey", [-80, 25], cities)

var layerControl = L.control.layers(null, overlays).addTo(map);

var layersList = layerControl._section
var btnContainer = document.createElement('div')
btnContainer.className = "btn-container"

var enableBtn = document.createElement('button')
enableBtn.className = "layer-btn"
enableBtn.appendChild(document.createTextNode("Enable All"))
enableBtn.addEventListener("click", _ => {
    inputs = layerControl._layerControlInputs
    for (i = 0; i < inputs.length; i++)
    {
        input = inputs[i]
        layer = layerControl._getLayer(input.layerId).layer
        if (!layerControl._map.hasLayer(layer)) {
            layerControl._map.addLayer(layer)
        }
        input.checked = true
    }
})

var disableBtn = document.createElement('button')
disableBtn.className = "layer-btn"
disableBtn.appendChild(document.createTextNode("Disable All"))
disableBtn.addEventListener("click", _ => {
    inputs = layerControl._layerControlInputs
    for (i = 0; i < inputs.length; i++)
    {
        input = inputs[i]
        layer = layerControl._getLayer(input.layerId).layer
        if (layerControl._map.hasLayer(layer)) {
            layerControl._map.removeLayer(layer)
        }
        input.checked = false
    }
})

btnContainer.appendChild(enableBtn)
btnContainer.appendChild(disableBtn)
layersList.prepend(btnContainer)


