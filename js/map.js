var mapSW = [200, 8000];
var mapNE = [8000, 200];

var map = L.map('mapid').setView([0, 0], 1);

L.tileLayer('img/{z}/{x}/{y}.png', {
    minZoom: 3,
    maxZoom: 5,
    noWrap: true,
    crs: L.CRS.Simple,                                  
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
    map.unproject(mapSW, map.getMaxZoom()),
    map.unproject(mapNE, map.getMaxZoom())
));

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

var car1 = L.marker([-21.248422, 34.453125],{icon: carIcon}).addTo(map);
var car2 = L.marker([5.484768, 19.467773],{icon: carIcon}).addTo(map);
var car3 = L.marker([-2.943041, 0.439453],{icon: carIcon}).addTo(map);
var car4 = L.marker([0.483393, 3.867188],{icon: carIcon}).addTo(map);
var car5 = L.marker([-43.548548, -2.021484],{icon: carIcon}).addTo(map);
var car6 = L.marker([-43.866218, -13.227539],{icon: carIcon}).addTo(map);
var car7 = L.marker([24.607069, 40.473633],{icon: carIcon}).addTo(map);
var car8 = L.marker([13.068777, -5.844727],{icon: carIcon}).addTo(map);
var car9 = L.marker([32.583849, 37.30957],{icon: carIcon}).addTo(map);
var car10 = L.marker([5.484768, 19.467773],{icon: carIcon}).addTo(map);
var car11 = L.marker([5.484768, 19.467773],{icon: carIcon}).addTo(map);
var car12 = L.marker([5.484768, 19.467773],{icon: carIcon}).addTo(map);
var car13 = L.marker([5.484768, 19.467773],{icon: carIcon}).addTo(map);

var atv1 = L.marker([19.062118,12.832031],{icon: atvIcon}).addTo(map);
var atv2 = L.marker([-21.534847, 29.223633],{icon: atvIcon}).addTo(map);
var atv3 = L.marker([-19.352611, 31.816406],{icon: atvIcon}).addTo(map);
var atv4 = L.marker([-45.151053, -13.007812],{icon: atvIcon}).addTo(map);
var atv5 = L.marker([35.85344, 40.297852],{icon: atvIcon}).addTo(map);
var atv6 = L.marker([-1.098565, -58.31543],{icon: atvIcon}).addTo(map);
var atv7 = L.marker([-36.173357, -61.040039],{icon: atvIcon}).addTo(map);
var atv8 = L.marker([45.367584, -66.665039],{icon: atvIcon}).addTo(map);
var atv9 = L.marker([24.686952, -15.46875],{icon: atvIcon}).addTo(map);
var atv10 = L.marker([29.458731, 40.869141],{icon: atvIcon}).addTo(map);
var atv11 = L.marker([19.062118,12.832031],{icon: atvIcon}).addTo(map);
var atv12 = L.marker([19.062118,12.832031],{icon: atvIcon}).addTo(map);
var atv13 = L.marker([19.062118,12.832031],{icon: atvIcon}).addTo(map);

var rdat1 = L.marker([-45.95115, 37.177734], {icon: radioactiveIcon}).addTo(map);
var rdat2 = L.marker([-26.509905, -67.851563], {icon: radioactiveIcon}).addTo(map);
var rdat3 = L.marker([46.528635, 70.664063], {icon: radioactiveIcon}).addTo(map);

var gas1 = L.marker([-21.412162, -12.480469], {icon: gasIcon}).addTo(map);
var gas2 = L.marker([-45.706179, -27.37793], {icon: gasIcon}).addTo(map);
var gas3 = L.marker([-38.548165, -9.887695], {icon: gasIcon}).addTo(map);
var gas4 = L.marker([39.571822, -53.393555], {icon: gasIcon}).addTo(map);
var gas5 = L.marker([23.079732, -63.632813], {icon: gasIcon}).addTo(map);
var gas6 = L.marker([-53.014783, 14.941406], {icon: gasIcon}).addTo(map);
var gas7 = L.marker([-7.798079, 43.286133], {icon: gasIcon}).addTo(map);
var gas8 = L.marker([28.265682, 40.517578], {icon: gasIcon}).addTo(map);
var gas9 = L.marker([36.031332, 12.216797], {icon: gasIcon}).addTo(map);
var gas10 = L.marker([3.645, -53.481445], {icon: gasIcon}).addTo(map);
var gas11 = L.marker([-33.027088, -58.623047], {icon: gasIcon}).addTo(map);
var gas12 = L.marker([43.644026, -70.576172], {icon: gasIcon}).addTo(map);
var gas13 = L.marker([-30.372875, 20.478516], {icon: gasIcon}).addTo(map);
var gas14 = L.marker([46.528635, 70.664063], {icon: gasIcon}).addTo(map);







//groups
var cars = L.layerGroup([car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13]).addTo(map);
var atv = L.layerGroup([atv1,atv2,atv3,atv4,atv5,atv6,atv7,atv8,atv9,atv10,atv11,atv12,atv13]).addTo(map);
var radioactives = L.layerGroup([rdat1,rdat2,rdat3]).addTo(map);
var gas = L.layerGroup([gas1,gas2,gas3,gas4,gas5,gas6,gas7,gas8,gas9,gas10,gas11,gas12,gas13,gas14]).addTo(map);

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


