let walker;

class Walker {
  constructor(size = 10, transp = 255) {
    this.size = size;
    this.alpha = transp;

    // // center start
    // this.x = width / 2;
    // this.y = height / 2;

    // random start
    this.x = random(0, width);
    this.y = random(0, height);

    this.stepX;
    this.stepY;
    this.r = random(80, 200);
    this.g = random(20, 120);
    this.b = random(20, 255);
  }

  display() {
    stroke(this.r, this.g, this.b, this.alpha);
    strokeWeight(this.size);
    point(this.x, this.y);
  }

  randomWalk() {
    this.stepX = round(random(-1, 1)) * this.size;
    this.stepY = round(random(-1, 1)) * this.size;
  }

  followMouse() {
    this.stepX = 0;
    this.stepY = 0;

    if (this.x < mouseX) {
      this.stepX = this.size;
    } else if (this.x > mouseX) {
      this.stepX = -1 * this.size;
    }

    if (this.y < mouseY) {
      this.stepY = this.size;
    } else if (this.y > mouseY) {
      this.stepY = -1 * this.size;
    }
  }

  step() {
    let r = random(1);
    // A 10% chance of following mouse
    if (r < 0.1) {
      this.followMouse();
    } else {
      this.randomWalk();
    }

    this.x += this.stepX;
    this.y += this.stepY;

    let margin = this.size * 2;

    this.x = constrain(this.x, margin, width - margin);
    this.y = constrain(this.y, margin, height - margin);
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
  // let canvasWidth = 1920 / 2;
  // let canvasHeight = 1080 / 2;
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  createCanvas(canvasWidth, canvasHeight);
  background(0, 0, 0);
  frameRate(60);
  walkers = makeWalkers(50, 12, 255);
}

function draw() {
  for (var i = 0; i < walkers.length; ++i) {
    walkers[i].step();
    walkers[i].display();
  }

  if (frameCount % 4 == 0) {
    background(0, 0, 0, 80);

  }
}

function mouseClicked() {
  background(0, 0, 0, 127);
  // prevent default
  return false;
}