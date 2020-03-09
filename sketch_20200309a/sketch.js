var canvasWidth = 1920 / 2;
var canvasHeight = 1080 / 2;
var step = 1;

var cY;
var borderX = 20;
var borderY = 10;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255, 255, 255);
  frameRate(14);
  stroke(0, 10);
}


function draw() {
  var pX = -999;
  var pY = -999;
  var yNoise = mouseX;
  // var yNoise = random(0, 1000);
  // var increment = map(mouseY % canvasHeight, 0, canvasHeight, 0.001, 0.009);
  var increment = 0.005;

  for (let cX = borderX; cX <= canvasWidth - borderX; cX += step) {
    cY = borderY + (noise(yNoise) * (canvasHeight - borderY));
    if (pX > -999) {
      line(cX, cY, pX, pY);
    }
    pX = cX;
    pY = cY;
    yNoise += increment;
  }

}

function mouseClicked() {
  background(255, 255, 255, 127);
  // prevent default
  return false;
}