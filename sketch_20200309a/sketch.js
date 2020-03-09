var canvasWidth = 1920 / 2;
var canvasHeight = 1080 / 2;
var segments = 10;
var pX = 0;
var pY = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255, 255, 255);
  frameRate(10);
  stroke(0, 20);
}

function draw() {
  // for (let segment = 0; segment <= segments; segment++) {
  //   let cX = noise(pX) * canvasWidth / 2;
  //   let cY = noise(pY) * canvasHeight / 2;
  //   line(pX, pY, cX, cY);
  //   pX = cX;
  //   pY = cY;
  // }

}