const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

//custom icon
const issIcon = L.icon({
  iconUrl: "iss200.png",
  iconSize: [50, 32],
  iconAnchor: [22, 16]
});

const map = L.map("issMap").setView([0, 0], 0);
const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);
//set tile
L.tileLayer(tileUrl, { attribution }).addTo(map);

let firstTime = true;
async function getIss() {
  const res = await fetch(api_url);
  const data = await res.json();

  const { latitude, longitude } = data;

  //set marker
  //   marker.setLatLng([latitude, longitude]);
  //   if (firstTime) {
  //     map.setView([latitude, longitude], 5);
  //     firstTime = false;
  //   }

  //   // Always set the view to current lat lon and zoom!
  //   map.setView([latitude, longitude], map.getZoom());
  //   marker.setLatLng([latitude, longitude]);

  document.getElementById("lat").textContent = latitude.toFixed(2);
  document.getElementById("long").textContent = longitude.toFixed(2);
}

//get location
getIss();
setInterval(getIss, 1000);
