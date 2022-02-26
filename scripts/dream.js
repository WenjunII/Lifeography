let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;

function preload() {
	img = loadImage('images/p5js/hand.png');
	img2 = loadImage('images/p5js/sewing_machine.png');
	img3 = loadImage('images/p5js/sewing_machine_2.png');
	img4 = loadImage('images/p5js/sewing_machine_3.png');
	img5 = loadImage('images/p5js/sewing_machine_4.png');
	img6 = loadImage('images/p5js/sleep.png');
	img7 = loadImage('images/p5js/thigh.png');
}

function setup() {
  let canvas = createCanvas(800, 534);
  canvas.parent('sketch-holder');
  image(img2, 0, 0);
}

function draw() {
  background(25, 25, 25);
  fill(255, 204, 0);
  line(100, 100, 200, 200);
  triangle(50, 200, 100, 300, 200, 400);
}