shapeX = 0;
shapeY = 0;
offset = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noLoop();

  for (let shapes = 0; shapes < 8; shapes++) {
    for (let blueChannel = 0; blueChannel < 255; blueChannel += 30) {
      fill(255, 0, blueChannel);
      square(shapeX, shapeY, 50);
      fill(255, 0, blueChannel);
      square(shapeX, shapeY + offset, 50);
      fill(255, 0, blueChannel);
      square(shapeX, shapeY + offset * 2, 50);
      fill(255, 0, blueChannel);
      square(shapeX, shapeY + offset * 3, 50);
      fill(255, 0, blueChannel);
      square(shapeX, shapeY + offset * 4, 50);
      fill(255, 0, blueChannel);
      square(shapeX, shapeY + offset * 5, 50);
      fill(255, 0, blueChannel);
      square(shapeX, shapeY + offset * 6, 50);
      fill(255, 0, blueChannel);
      square(shapeX, shapeY + offset * 7, 50);

      shapeX += 50;
    }
  }
}
