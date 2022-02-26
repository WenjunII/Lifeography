let img, img2, img3, img4, img5, img6, img7, img8;
let showimg, showimg2, showimg3, showimg4, showimg5, showimg6, showimg7, showimg8;

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
  image(img2, 0, 0);
  image(img, 65, 7);
  image(img8, 395, 15);
  image(img5, 225, 267);
  image(img4, 237, 284);
  image(img3, 250, 300);
  image(img7, 365, 98);
  image(img6, 193, 70); 
}