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

//Sketch Three
var beat = function( p ) { // p could be any variable name
  var bimg1, bimg2, bimg3, bimg4, bimg5, bimg6, bimg7, bimg8, bimg9, bimg10, bimg11, bimg12, bimg13, bimg14, bimg15, bimg16, bimg17, bimg18, bimg19, bimg20, bimg21, bimg22, bimg23, bimg24;
  var bpositionX1, bpositionY1, bpositionX2, bpositionY2, bpositionX3, bpositionY3, bpositionX4, bpositionY4, bpositionX5, bpositionY5, bpositionX6, bpositionY6, bpositionX7, bpositionY7, bpositionX8, bpositionY8, bpositionX9, bpositionY9, bpositionX10, bpositionY10, bpositionX11, bpositionY11, bpositionX12, bpositionY12, bpositionX13, bpositionY13, bpositionX14, bpositionY14, bpositionX15, bpositionY15, bpositionX16, bpositionY16, bpositionX17, bpositionY17, bpositionX18, bpositionY18, bpositionX19, bpositionY19, bpositionX20, bpositionY20, bpositionX21, bpositionY21, bpositionX22, bpositionY22, bpositionX23, bpositionY23, bpositionX24, bpositionY24;

  p.preload = function() {
    bimg1 = p.loadImage('images/wenjunii7/cane.png');
    bimg4 = p.loadImage('images/wenjunii7/cane.png');
    bimg5 = p.loadImage('images/wenjunii7/cane.png');
    bimg6 = p.loadImage('images/wenjunii7/cane.png');
    bimg7 = p.loadImage('images/wenjunii7/cane.png');
    bimg8 = p.loadImage('images/wenjunii7/cane.png');
    bimg9 = p.loadImage('images/wenjunii7/cane.png');
    bimg10 = p.loadImage('images/wenjunii7/cane.png');
    bimg11 = p.loadImage('images/wenjunii7/cane.png');
    bimg12 = p.loadImage('images/wenjunii7/cane.png');
    bimg13 = p.loadImage('images/wenjunii7/cane.png');
    bimg14 = p.loadImage('images/wenjunii7/cane.png');
    bimg15 = p.loadImage('images/wenjunii7/cane.png');
    bimg16 = p.loadImage('images/wenjunii7/cane.png');
    bimg17 = p.loadImage('images/wenjunii7/cane.png');
    bimg18 = p.loadImage('images/wenjunii7/cane.png');
    bimg19 = p.loadImage('images/wenjunii7/cane.png');
    bimg20 = p.loadImage('images/wenjunii7/cane.png');
    bimg21 = p.loadImage('images/wenjunii7/cane.png');
    bimg22 = p.loadImage('images/wenjunii7/cane.png');
    bimg23 = p.loadImage('images/wenjunii7/cane.png');
    bimg24 = p.loadImage('images/wenjunii7/cane.png');
    bimg2 = p.loadImage('images/wenjunii7/wenjunii7.png');
    bimg3 = p.loadImage('images/wenjunii7/grandma.png');
  }

  p.setup = function() {
    p.createCanvas(900, 675);
  };

  p.draw = function() {
    p.background(250, 250, 250);
    p.image(bimg1, 0 + bpositionX1, 0 + bpositionY1);
    p.image(bimg4, 0 + bpositionX4, 30 + bpositionY4);
    p.image(bimg5, 0 + bpositionX5, 60 + bpositionY5);
    p.image(bimg6, 0 + bpositionX6, 90 + bpositionY6);
    p.image(bimg7, 0 + bpositionX7, 120 + bpositionY7);
    p.image(bimg8, 0 + bpositionX8, 150 + bpositionY8);
    p.image(bimg9, 0 + bpositionX9, 180 + bpositionY9);
    p.image(bimg10, 0 + bpositionX10, 210 + bpositionY10);
    p.image(bimg11, 0 + bpositionX11, 240 + bpositionY11);
    p.image(bimg12, 0 + bpositionX12, 270 + bpositionY12);
    p.image(bimg13, 0 + bpositionX13, 300 + bpositionY13);
    p.image(bimg14, 0 + bpositionX14, 330 + bpositionY14);
    p.image(bimg15, 0 + bpositionX15, 360 + bpositionY15);
    p.image(bimg16, 0 + bpositionX16, 390 + bpositionY16);
    p.image(bimg17, 0 + bpositionX17, 420 + bpositionY17);
    p.image(bimg18, 0 + bpositionX18, 450 + bpositionY18);
    p.image(bimg19, 0 + bpositionX19, 480 + bpositionY19);
    p.image(bimg20, 0 + bpositionX20, 510 + bpositionY20);
    p.image(bimg21, 0 + bpositionX21, 540 + bpositionY21);
    p.image(bimg22, 0 + bpositionX22, 570 + bpositionY22);
    p.image(bimg23, 0 + bpositionX23, 600 + bpositionY23);
    p.image(bimg24, 0 + bpositionX24, 630 + bpositionY24);
    p.image(bimg2, 800 + bpositionX2, 290 + bpositionY2);
    p.image(bimg3, 600 + bpositionX3, 200 + bpositionY3);
    bimg1.resize(100, 33);
    bimg4.resize(100, 33);
    bimg5.resize(100, 33);
    bimg6.resize(100, 33);
    bimg7.resize(100, 33);
    bimg8.resize(100, 33);
    bimg9.resize(100, 33);
    bimg10.resize(100, 33);
    bimg11.resize(100, 33);
    bimg12.resize(100, 33);
    bimg13.resize(100, 33);
    bimg14.resize(100, 33);
    bimg15.resize(100, 33);
    bimg16.resize(100, 33);
    bimg17.resize(100, 33);
    bimg18.resize(100, 33);
    bimg19.resize(100, 33);
    bimg20.resize(100, 33);
    bimg21.resize(100, 33);
    bimg22.resize(100, 33);
    bimg23.resize(100, 33);
    bimg24.resize(100, 33);
    bimg2.resize(45, 165);
    bimg3.resize(72, 250);
    bpositionX1 = p.random(-0.4, 0.4);
    bpositionY1 = p.random(-0.4, 0.4);
    bpositionX4 = p.random(-0.4, 0.4);
    bpositionY4 = p.random(-0.4, 0.4);
    bpositionX5 = p.random(-0.4, 0.4);
    bpositionY5 = p.random(-0.4, 0.4);
    bpositionX6 = p.random(-0.4, 0.4);
    bpositionY6 = p.random(-0.4, 0.4);
    bpositionX7 = p.random(-0.4, 0.4);
    bpositionY7 = p.random(-0.4, 0.4);
    bpositionX8 = p.random(-0.4, 0.4);
    bpositionY8 = p.random(-0.4, 0.4);
    bpositionX9 = p.random(-0.4, 0.4);
    bpositionY9 = p.random(-0.4, 0.4);
    bpositionX10 = p.random(-0.4, 0.4);
    bpositionY10 = p.random(-0.4, 0.4);
    bpositionX11 = p.random(-0.4, 0.4);
    bpositionY11 = p.random(-0.4, 0.4);
    bpositionX12 = p.random(-0.4, 0.4);
    bpositionY12 = p.random(-0.4, 0.4);
    bpositionX13 = p.random(-0.4, 0.4);
    bpositionY13 = p.random(-0.4, 0.4);
    bpositionX14 = p.random(-0.4, 0.4);
    bpositionY14 = p.random(-0.4, 0.4);
    bpositionX15 = p.random(-0.4, 0.4);
    bpositionY15 = p.random(-0.4, 0.4);
    bpositionX16 = p.random(-0.4, 0.4);
    bpositionY16 = p.random(-0.4, 0.4);
    bpositionX17 = p.random(-0.4, 0.4);
    bpositionY17 = p.random(-0.4, 0.4);
    bpositionX18 = p.random(-0.4, 0.4);
    bpositionY18 = p.random(-0.4, 0.4);
    bpositionX19 = p.random(-0.4, 0.4);
    bpositionY19 = p.random(-0.4, 0.4);
    bpositionX20 = p.random(-0.4, 0.4);
    bpositionY20 = p.random(-0.4, 0.4);
    bpositionX21 = p.random(-0.4, 0.4);
    bpositionY21 = p.random(-0.4, 0.4);
    bpositionX22 = p.random(-0.4, 0.4);
    bpositionY22 = p.random(-0.4, 0.4);
    bpositionX23 = p.random(-0.4, 0.4);
    bpositionY23 = p.random(-0.4, 0.4);
    bpositionX24 = p.random(-0.4, 0.4);
    bpositionY24 = p.random(-0.4, 0.4);
    bpositionX2 = p.random(-0.4, 0.4);
    bpositionY2 = p.random(-0.4, 0.4);
    bpositionX3 = p.random(-0, 0);
    bpositionY3 = p.random(-0, 0);

  };
};
var myp5 = new p5(beat, 'c3');

//Sketch Four
var beat2 = function( p ) { // p could be any variable name
  var b2img1, b2img2;
  var b2positionX1, b2positionY1, b2positionX2, b2positionY2;
  var b2positionX3 = 1;
  var positionmove = 0.1;

  p.preload = function() {
    b2img1 = p.loadImage('images/wenjunii7/grandma_2.png');
    b2img2 = p.loadImage('images/wenjunii7/wenjunii7_2.png');
  }

  p.setup = function() {
    p.createCanvas(900, 500);
  };

  p.draw = function() {
    p.background(25, 25, 25);
    p.image(b2img2, 665 + b2positionX2 + b2positionX3, 210 + b2positionY2);
    p.image(b2img1, 500 + b2positionX1, 80 + b2positionY1);
    b2img1.resize(259, 400);
    b2img2.resize(68, 265);
    b2positionX1 = p.random(-0, 0);
    b2positionY1 = p.random(-0, 0);
    b2positionX2 = p.random(-0.4, 0.4);
    b2positionY2 = p.random(-0.4, 0.4);
    b2positionX3 += positionmove;
    if (b2positionX3 >12) {
      positionmove *= -1;
    } else if (b2positionX3 < -20) {
      positionmove *= -1;
    }
    
  };
};
var myp5 = new p5(beat2, 'c4');
