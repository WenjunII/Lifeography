let img, img2, img3, img4, img5, img6, img7, img8;
let showimg, showimg2, showimg3, showimg4, showimg5, showimg6, showimg7, showimg8;
let positionX, positionY, positionX2, positionY2, positionX3, positionY3, positionX4, positionY4, positionX5, positionY5, positionX6, positionY6, positionX7, positionY7, positionX8, positionY8;

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
  // showimg2 = image(img2, 0, 0);
  // showimg2.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Sewing_machines,_Miyagi,_Japan.jpg"));
  // showimg = image(img, 65, 7);
  // showimg.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Hand_zur_Abmessung.jpg"));
  // showimg8 = image(img8, 395, 15);
  // showimg8.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Hand_zur_Abmessung.jpg"));
  // showimg5 = image(img5, 225, 267);
  // showimg5.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Woman_sewing_with_a_Singer_sewing_machine.png"));
  // showimg4 = image(img4, 237, 284);
  // showimg4.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Sewing_machine_by_MITSUBISHI_ad_1954.jpg"));
  // showimg3 = image(img3, 250, 300);
  // showimg3.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Hua_Nan_sewing_machine_-_04.jpg"));
  // showimg7 = image(img7, 365, 98);
  // showimg7.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Surface_Anatomy_Hips_and_Lower_Limbs.png"));
  // showimg6 = image(img6, 193, 70);
  // showimg6.mouseClicked(window.open("https://commons.wikimedia.org/wiki/File:Ramsay_Girl_sleeping.jpg"));
}

function draw() {
  background(25, 25, 25);
  frameRate(10);
  image(img2, 0 + positionX2, 0 + positionY2);
  image(img, 65 + positionX, 7 + positionY);
  image(img8, 395 + positionX8, 15 + positionY8);
  image(img5, 225 + positionX5, 267 + positionY5);
  image(img4, 237 + positionX4, 284 + positionY4);
  image(img3, 250 + positionX3, 300 + positionY3);
  image(img7, 365 + positionX7, 98 + positionY7);
  image(img6, 193 + positionX6, 70 + positionY6); 
  filter(BLUR, 1.8);
  positionX = random(-0.4, 0.4);
  positionY = random(-0.4, 0.4);
  positionX2 = random(-0.4, 0.4);
  positionY2 = random(-0.4, 0.4);
  positionX3 = random(-0.4, 0.4);
  positionY3 = random(-0.4, 0.4);
  positionX4 = random(-0.4, 0.4);
  positionY4 = random(-0.4, 0.4);
  positionX5 = random(-0.4, 0.4);
  positionY5 = random(-0.4, 0.4);
  positionX6 = random(-0.4, 0.4);
  positionY6 = random(-0.4, 0.4);
  positionX7 = random(-0.4, 0.4);
  positionY7 = random(-0.4, 0.4);
  positionX8 = random(-0.4, 0.4);
  positionY8 = random(-0.4, 0.4);
}