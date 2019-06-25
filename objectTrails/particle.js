function Avatar(coord) {
  // this.x = x;
  // this.y = y;

  this.history = [];

  this.createCoordVector = function() {
    for (let i = 0; i < coord.length; i++) {
      (i => {
        setTimeout(() => {
          let b = createVector(coord[i][0], coord[i][1]);
          this.history.push(b);
        }, 100 * i);
      })(i);
    }
  };

  this.update = function() {
    if (this.history.length > 50) {
      this.history.splice(0, 1);
    }
    remove();
  };

  this.show = function() {
    stroke(0);
    // fill(0, 30);
    noFill();
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      let posX = pos.x * 65 + 210;
      let posY = pos.y * 70 + 35;
      ellipse(posX, posY, 5, 5);
    }
    endShape();
  };
}
