// Sketch One
var dream = function( p ) { // p could be any variable name
  var img1, img2, img3, img4, img5, img6, img7, img8;
  var showimg, showimg2, showimg3, showimg4, showimg5, showimg6, showimg7, showimg8;
  var positionX, positionY, positionX2, positionY2, positionX3, positionY3, positionX4, positionY4, positionX5, positionY5, positionX6, positionY6, positionX7, positionY7, positionX8, positionY8;

  p.preload = function() {
    img1 = p.loadImage('images/p5js/hand.png');
    img2 = p.loadImage('images/p5js/sewing_machine.png');
    img3 = p.loadImage('images/p5js/sewing_machine_2.png');
    img4 = p.loadImage('images/p5js/sewing_machine_3.png');
    img5 = p.loadImage('images/p5js/sewing_machine_4.png');
    img6 = p.loadImage('images/p5js/sleep.png');
    img7 = p.loadImage('images/p5js/thigh.png');
    img8 = p.loadImage('images/p5js/hand2.png');
  }

  p.setup = function() {
    p.createCanvas(800, 534);
  };

  p.draw = function() {
    p.background(25, 25, 25);
    p.frameRate(10);
    // var a = p.createA('http://p5js.org/', '<img src="images/p5js/hand.png">', [_blank]);
    // a.position(100, 100);
    p.image(img2, 0 + positionX2, 0 + positionY2);
    p.image(img1, 65 + positionX, 7 + positionY);
    p.image(img8, 395 + positionX8, 15 + positionY8);
    p.image(img5, 225 + positionX5, 267 + positionY5);
    p.image(img4, 237 + positionX4, 284 + positionY4);
    p.image(img3, 250 + positionX3, 300 + positionY3);
    p.image(img7, 365 + positionX7, 98 + positionY7);
    p.image(img6, 193 + positionX6, 70 + positionY6); 
    positionX = p.random(-0.4, 0.4);
    positionY = p.random(-0.4, 0.4);
    positionX2 = p.random(-0.4, 0.4);
    positionY2 = p.random(-0.4, 0.4);
    positionX3 = p.random(-0.4, 0.4);
    positionY3 = p.random(-0.4, 0.4);
    positionX4 = p.random(-0.4, 0.4);
    positionY4 = p.random(-0.4, 0.4);
    positionX5 = p.random(-0.4, 0.4);
    positionY5 = p.random(-0.4, 0.4);
    positionX6 = p.random(-0.4, 0.4);
    positionY6 = p.random(-0.4, 0.4);
    positionX7 = p.random(-0.4, 0.4);
    positionY7 = p.random(-0.4, 0.4);
    positionX8 = p.random(-0.4, 0.4);
    positionY8 = p.random(-0.4, 0.4);
  };
};
var myp5 = new p5(dream, 'c1');

// Sketch Two
// var smiles = function( p ) { 
//   var img;

//   p.preload = function() {
//     img = p.loadImage('images/dream_of_a_world_of_smiles_and_laughter.jpg');
//   }

//   p.setup = function() {
//     p.createCanvas(900, 507);
//   };

//   p.draw = function() {
//     p.background(25, 25, 25);
//     p.image(img, 0, 0);
//   };
// };
// var myp5 = new p5(smiles, 'c2');