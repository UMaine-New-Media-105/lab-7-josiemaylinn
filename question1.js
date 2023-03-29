shapeX = 20;
shapeY = 20;

let shapeColor = ["red", "lime", "cyan"];

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  for (let shapes = 0; shapes < 15; shapes++) {
    fill(random(shapeColor));
    ellipse(shapeX, shapeY, 25);
    shapeX += 25;
    shapeY += 25;
  }
}
