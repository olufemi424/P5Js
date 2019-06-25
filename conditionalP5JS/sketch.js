// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);

//   stroke(255);
//   strokeWeight(4);
//   noFill();

//   if (mouseX > 300) {
//     fill(255, 0, 200);
//   }

//   ellipse(300, 200, 100, 100);
// }

// let x = 0;
// let speed = 3;

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);
//   stroke(255);
//   strokeWeight(4);
//   noFill();
//   ellipse(x, 200, 100, 100);

//   if (x > width) {
//     speed = -3;
//   }

//   x = x + speed;
// }

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);

//   stroke(255);
//   strokeWeight(4);
//   noFill();

//   if (mouseX > 300 && mouseX < 400) {
//     fill(255, 0, 200);
//   }
//   rect(300, 200, 100, 100);
// }

// BOOLEAN CONDITIONALS
// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);

//   stroke(255);
//   strokeWeight(4);
//   noFill();

//   if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
//     if (mouseIsPressed) {
//       background(0, 255, 0);
//     }
//     fill(255, 0, 200);
//   }
//   rect(300, 200, 100, 100);
// }

/*
 *@LOAD IMAGE
 *
 *
 */
// let bg,
//   y = 0;

// function setup() {
//   bg = loadImage("floorImage.png");
//   createCanvas(1080, 900);
// }

// function draw() {
//   background(bg);

//   noFill();
//   stroke(226, 204, 0);
//   line(0, y, width, y);

//   console.log(y);
// }
