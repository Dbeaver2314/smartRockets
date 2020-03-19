let population;
// Each rocket is alive till 400 frames
let lifespan = 800;
// Made to display count on screen
let lifeP;
// Keeps track of frames
let count = 0;
// Where rockets are trying to go
let target;
// Max force applied to rocket
let maxforce = 0.2;

// Dimensions of barrier
let rx = 100;
let ry = 150;
let rw = 500;
let rh = 10;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
  lifeRemaining = createP();
  lifeRemaining.html("lives until 800");
}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for rockets
  fill("red");
  rect(rx, ry, rw, rh);
  // Renders target
  fill("green");
  ellipse(target.x, target.y, 16, 16);
}
