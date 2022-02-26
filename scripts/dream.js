let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

function preload() {
	img = loadImage('images/p5js/hand.png');
	img2 = loadImage('images/p5js/sewing_machine.png');
	img3 = loadImage('images/p5js/sewing_machine_2.png');
	img4 = loadImage('images/p5js/sewing_machine_3.png');
	img5 = loadImage('images/p5js/sewing_machine_4.png');
	img6 = loadImage('images/p5js/sleep.png');
	img7 = loadImage('images/p5js/thigh.png');
    img8 = loadImage('images/p5js/hand2.png');
}

function setup() {
  let canvas = createCanvas(800, 534);
  canvas.parent('sketch-holder');
}

function draw() {
  background(25, 25, 25);
  image(img2, 0, 0);
  image(img, 65, 5);
  image(img8, 395, 13);
  image(img5, 225, 267);
  image(img4, 237, 284);
  image(img3, 250, 300);
  image(img7, 365, 98);
  image(img6, 193, 70); 
}