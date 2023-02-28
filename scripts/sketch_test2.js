// Sketch One
var dream = function( p ) { // p could be any variable name
  var dimg1, dimg2, dimg3, dimg4, dimg5, dimg6, dimg7, dimg8;
  var dpositionX1, dpositionY1, dpositionX2, dpositionY2, dpositionX3, dpositionY3, dpositionX4, dpositionY4, dpositionX5, dpositionY5, dpositionX6, dpositionY6, dpositionX7, dpositionY7, dpositionX8, dpositionY8;

  p.preload = function() {
    dimg1 = p.loadImage('images/p5js/hand.png');
    dimg2 = p.loadImage('images/p5js/sewing_machine.png');
    dimg3 = p.loadImage('images/p5js/sewing_machine_2.png');
    dimg4 = p.loadImage('images/p5js/sewing_machine_3.png');
    dimg5 = p.loadImage('images/p5js/sewing_machine_4.png');
    dimg6 = p.loadImage('images/p5js/sleep.png');
    dimg7 = p.loadImage('images/p5js/thigh.png');
    dimg8 = p.loadImage('images/p5js/hand2.png');
  }

  p.setup = function() {
    p.createCanvas(800, 534);
  };

  p.draw = function() {
    p.background(25, 25, 25);
    p.frameRate(10);
    // var a = p.createA('http://p5js.org/', '<img src="images/p5js/hand.png">');
    // a.position(65 + positionX1, 7 + positionY1);
    p.image(dimg2, 0 + dpositionX2, 0 + dpositionY2);
    p.image(dimg1, 65 + dpositionX1, 7 + dpositionY1);
    p.image(dimg8, 395 + dpositionX8, 15 + dpositionY8);
    p.image(dimg5, 225 + dpositionX5, 267 + dpositionY5);
    p.image(dimg4, 237 + dpositionX4, 284 + dpositionY4);
    p.image(dimg3, 250 + dpositionX3, 300 + dpositionY3);
    p.image(dimg7, 365 + dpositionX7, 98 + dpositionY7);
    p.image(dimg6, 193 + dpositionX6, 70 + dpositionY6); 
    dpositionX1 = p.random(-0.4, 0.4);
    dpositionY1 = p.random(-0.4, 0.4);
    dpositionX2 = p.random(-0.4, 0.4);
    dpositionY2 = p.random(-0.4, 0.4);
    dpositionX3 = p.random(-0.4, 0.4);
    dpositionY3 = p.random(-0.4, 0.4);
    dpositionX4 = p.random(-0.4, 0.4);
    dpositionY4 = p.random(-0.4, 0.4);
    dpositionX5 = p.random(-0.4, 0.4);
    dpositionY5 = p.random(-0.4, 0.4);
    dpositionX6 = p.random(-0.4, 0.4);
    dpositionY6 = p.random(-0.4, 0.4);
    dpositionX7 = p.random(-0.4, 0.4);
    dpositionY7 = p.random(-0.4, 0.4);
    dpositionX8 = p.random(-0.4, 0.4);
    dpositionY8 = p.random(-0.4, 0.4);
  };
};
var myp5 = new p5(dream, 'c1');

