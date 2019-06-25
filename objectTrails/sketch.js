let particles;
let bg;

function setup() {
  bg = loadImage("floorImage.png"); //load floor plan
  createCanvas(968, 645);
}

function clicked() {
  (async function mousePressed() {
    const { pathData, start } = await readDataJson();
    particles = new Avatar(pathData);
    particles.createCoordVector();
  })();
}

function draw() {
  //set backgound to floor plan
  background(bg);
  if (particles) {
    // particles.update();
    particles.show();
  }
}

// read and parse json data
async function readDataJson() {
  const pathData = [];
  const xyc = await fetch("2019_02_21T22_52_35_864.json");
  const data = await xyc.json();

  data[0]["com_xy"].forEach(coord => {
    pathData.push(coord);
  });

  const start = data[0]["com_xy"][0];

  return { pathData, start };
}

document.getElementById("button").addEventListener("click", clicked);
