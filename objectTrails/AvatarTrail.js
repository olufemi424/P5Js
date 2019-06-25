class Avatar {
  constructor(x, y, coord) {
    this.x = x;
    this.y = y;
    this.coord = coord;
    this.history = [];
  }

  generateHistory() {
    let v;

    for (let i = 0; i < this.coord.length; i++) {
      (i => {
        setTimeout(() => {
          v = createVector(this.coord[i][0], this.coord[i][1]);
          this.history.push(v);
        }, 100 * i);
      })(i);
    }
  }

  update() {
    if (this.history.length > 20) {
      this.history.splice(0, 1);
    }
  }

  show(color) {
    stroke(0);
    // noFill();
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      let posX = pos.x * 65 + 210;
      let posY = pos.y * 70 + 35;
      fill(color, random(color, 255), color);
      ellipse(posX, posY, 5, 5);
    }
    endShape(CLOSE);
  }
}

// ///////////////////////////////////

// SET UP CANVAS
const people = [];
let personAvatar;
let bg;

function setup() {
  bg = loadImage("floorImage.png"); //load floor plan
  createCanvas(968, 645);
}

async function clicked() {
  await readDataJson().then(({ pathData }) => {
    personAvatar = new Avatar(0, 0, pathData);
    personAvatar.generateHistory();
    people.push(personAvatar);
  });
}

function draw() {
  //set backgound to floor plan
  background(255);

  //update position of avater
  if (people.length > 0) {
    people.forEach(p => {
      p.update();
      p.show(random(0, 255));
    });
  }
  background(bg);
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

//click event listener
document.getElementById("button").addEventListener("click", clicked);
