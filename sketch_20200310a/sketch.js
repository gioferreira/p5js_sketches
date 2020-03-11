let walker;

class Walker {
  constructor(size = 10, transp = 255) {
    this.x = width / 2;
    this.y = height / 2;
    this.size = size;
    this.alpha = transp;
  }

  display() {
    stroke(0, this.alpha);
    strokeWeight(this.size);
    point(this.x, this.y);
  }

  step() {
    var choice = int(random(4));
    if (choice == 0) {
      this.x += this.size;
    } else if (choice == 1) {
      this.x -= this.size;
    } else if (choice == 2) {
      this.y += this.size;
    } else {
      this.y -= this.size;
    }
    this.x = constrain(this.x, this.size, width - this.size);
    this.y = constrain(this.y, this.size, height - this.size);
  }
}

function setup() {
  let canvasWidth = 1920 / 2;
  let canvasHeight = 1080 / 2;
  createCanvas(canvasWidth, canvasHeight);
  background(255, 255, 255);
  frameRate(30);
  w = new Walker(10, 50);
}

function draw() {
  w.step();
  w.display();
  w.step();
  w.display();
  if (frameCount % 10 == 0) {
    background(255, 255, 255, 20);

  }
}

function mouseClicked() {
  background(255, 255, 255, 127);
  // prevent default
  return false;
}