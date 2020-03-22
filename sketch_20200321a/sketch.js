let walker;

class Walker {
  constructor(size = 10, transp = 255) {
    this.x = width / 2;
    this.y = height / 2;
    // this.x = random(0, width);
    // this.y = random(0, height);
    this.size = size;
    this.alpha = transp;
    this.r = random(80, 200);
    this.g = random(20, 120);
    this.b = random(20, 255);
  }

  display() {
    stroke(this.r, this.g, this.b, this.alpha);
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

function makeWalkers(n = 10, size = 10, transp = 25) {
  var Walkers = new Array(n)
  for (var i = 0; i < n; ++i) {
    Walkers[i] = new Walker(size, transp)
  }
  return Walkers
}

function setup() {
  let canvasWidth = screen.width;
  let canvasHeight = screen.height - 100;
  createCanvas(canvasWidth, canvasHeight);
  background(0, 0, 0);
  frameRate(30);
  walkers = makeWalkers(2000, 4, 150);
}

function draw() {
  if (frameCount % 1 == 0) {
    background(0, 0, 0, 40);
  }
  for (var i = 0; i < walkers.length; ++i) {
    walkers[i].step();
    walkers[i].display();
  }

}

function mouseClicked() {
  background(255, 255, 255, 127);
  // prevent default
  return false;
}