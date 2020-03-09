function setup() {
  createCanvas(720, 720);
  noCursor();
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  frameRate(30);
}

function draw() {
  // let randomX = random(0, 719);
  let randomX = (frameCount * 8) % 720;
  // let randomY = random(0, 719);
  let randomY = (frameCount * 8) % 720;
  background(randomY / 2, 100, 100);

  fill(360 - (randomY / 2), 100, 100);
  rect(360, 360, randomX + 1, randomX + 1);
}