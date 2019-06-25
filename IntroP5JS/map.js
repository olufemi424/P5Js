// let r = 0;
// let b = 255;

// function setup() {
//   createCanvas(500, 400);
// }

// function draw() {
//   //background

//   r = map(mouseX, 0, 600, 0, 255);
//   b = map(mouseX, 0, 600, 255, 0);
//   background(r, 0, b);

//   //ellipse
//   fill(250, 118, 222);
//   ellipse(mouseX, 200, 64, 64);
// }

//RANDOM SPOTS ALL OVER THE CANVAS
// const spot = {
//   x: 100,
//   y: 50
// };

// const col = {
//   r: 255,
//   g: 0,
//   b: 0
// };

// function setup() {
//   createCanvas(600, 400);
//   background(0);
// }

// function draw() {
//   col.r = random(100, 255);
//   col.g = 0;
//   col.b = random(100, 190);

//   spot.x = random(0, width);
//   spot.y = random(0, height);

//   noStroke();
//   fill(col.r, col.g, col.b, 100);
//   ellipse(spot.x, spot.y, 24, 24);
// }

// layered canvas
let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  extraCanvas.clear(); // not necessary / clear color
  background(0); // clear background
}

function draw() {
  // No trails!
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);

  // trails
  if (mouseIsPressed) {
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);
  }

  image(extraCanvas, 0, 0);
  fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
}
