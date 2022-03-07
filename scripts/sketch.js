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
  var bpositionX1 = 0, bpositionY1, bpositionX2 = 0, bpositionY2, bpositionX3 = 0, bpositionY3, bpositionX4 = 0, bpositionY4, bpositionX5 = 0, bpositionY5, bpositionX6 = 0, bpositionY6, bpositionX7 = 0, bpositionY7, bpositionX8 = 0, bpositionY8, bpositionX9 = 0, bpositionY9, bpositionX10 = 0, bpositionY10, bpositionX11 = 0, bpositionY11, bpositionX12 = 0, bpositionY12, bpositionX13 = 0, bpositionY13, bpositionX14 = 0, bpositionY14, bpositionX15 = 0, bpositionY15, bpositionX16 = 0, bpositionY16, bpositionX17 = 0, bpositionY17, bpositionX18 = 0, bpositionY18, bpositionX19 = 0, bpositionY19, bpositionX20 = 0, bpositionY20, bpositionX21 = 0, bpositionY21, bpositionX22 = 0, bpositionY22, bpositionX23 = 0, bpositionY23, bpositionX24 = 0, bpositionY24;
  var ynoise = 0;
  var ynoise1 = 0, ynoise4 = 0, ynoise5 = 0, ynoise6 = 0, ynoise7 = 0, ynoise8 = 0, ynoise9 = 0, ynoise10 = 0, ynoise11 = 0, ynoise12 = 0, ynoise13 = 0, ynoise14 = 0, ynoise15 = 0, ynoise16 = 0, ynoise17 = 0, ynoise18 = 0, ynoise19 = 0, ynoise20 = 0, ynoise21 = 0, ynoise22 = 0, ynoise23 = 0, ynoise24 = 0;
  
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
    p.background(25, 25, 25);
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
    p.image(bimg2, 800 + bpositionX2, 0 + bpositionY2);
    p.image(bimg3, 600 + bpositionX3, 0 + bpositionY3);
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
    bpositionX1 += 0.5;
    bpositionY1 = p.map(p.noise(ynoise1), 0, 1, 0, p.height);
    bpositionX4 += 1.5;
    bpositionY4 = p.map(p.noise(ynoise4), 0, 1, 0, p.height);
    bpositionX5 += 1.3;
    bpositionY5 = p.map(p.noise(ynoise5), 0, 1, 0, p.height);
    bpositionX6 += 1.9;
    bpositionY6 = p.map(p.noise(ynoise6), 0, 1, 0, p.height);
    bpositionX7 += 0.8;
    bpositionY7 = p.map(p.noise(ynoise7), 0, 1, 0, p.height);
    bpositionX8 += 0.4;
    bpositionY8 = p.map(p.noise(ynoise8), 0, 1, 0, p.height);
    bpositionX9 += 1.7;
    bpositionY9 = p.map(p.noise(ynoise9), 0, 1, 0, p.height);
    bpositionX10 += 2;
    bpositionY10 = p.map(p.noise(ynoise10), 0, 1, 0, p.height);
    bpositionX11 += 0.9;
    bpositionY11 = p.map(p.noise(ynoise11), 0, 1, 0, p.height);
    bpositionX12 += 0.6;
    bpositionY12 = p.map(p.noise(ynoise12), 0, 1, 0, p.height);
    bpositionX13 += 1.6;
    bpositionY13 = p.map(p.noise(ynoise13), 0, 1, 0, p.height);
    bpositionX14 += 2.8;
    bpositionY14 = p.map(p.noise(ynoise14), 0, 1, 0, p.height);
    bpositionX15 += 0.85;
    bpositionY15 = p.map(p.noise(ynoise15), 0, 1, 0, p.height);
    bpositionX16 += 0.45;
    bpositionY16 = p.map(p.noise(ynoise16), 0, 1, 0, p.height);
    bpositionX17 += 1.85;
    bpositionY17 = p.map(p.noise(ynoise17), 0, 1, 0, p.height);
    bpositionX18 += 2.55;
    bpositionY18 = p.map(p.noise(ynoise18), 0, 1, 0, p.height);
    bpositionX19 += 1.95;
    bpositionY19 = p.map(p.noise(ynoise19), 0, 1, 0, p.height);
    bpositionX20 += 0.95;
    bpositionY20 = p.map(p.noise(ynoise20), 0, 1, 0, p.height);
    bpositionX21 += 2.3;
    bpositionY21 = p.map(p.noise(ynoise21), 0, 1, 0, p.height);
    bpositionX22 += 0.65;
    bpositionY22 = p.map(p.noise(ynoise22), 0, 1, 0, p.height);
    bpositionX23 += 1.05;
    bpositionY23 = p.map(p.noise(ynoise23), 0, 1, 0, p.height);
    bpositionX24 += 2.85;
    bpositionY24 = p.map(p.noise(ynoise24), 0, 1, 0, p.height);
    bpositionX2 = p.random(-0.4, 0.4);
    bpositionY2 = p.map(p.noise(ynoise), 0, 1, 0, p.height);
    bpositionX3 = p.random(-0, 0);
    bpositionY3 = p.mouseY;
    ynoise += 0.05;
    ynoise1 += 0.03;
    ynoise4 += 0.04;
    ynoise5 += 0.02;
    ynoise6 += 0.05;
    ynoise7 += 0.03;
    ynoise8 += 0.04;
    ynoise9 += 0.02;
    ynoise10 += 0.05;
    ynoise11 += 0.04;
    ynoise12 += 0.02;
    ynoise13 += 0.03;
    ynoise14 += 0.05;
    ynoise15 += 0.02;
    ynoise16 += 0.04;
    ynoise17 += 0.03;
    ynoise18 += 0.05;
    ynoise19 += 0.02;
    ynoise20 += 0.04;
    ynoise21 += 0.03;
    ynoise22 += 0.05;
    ynoise23 += 0.02;
    ynoise24 += 0.04;
    if(bpositionX1 + 100 >= 600 && bpositionY1 >= bpositionY3 && bpositionY1 <= bpositionY3 + 250) {
      bpositionX1 = 0;
    }else if(bpositionX1 + 100 >= 800 && bpositionY1 >= bpositionY2 && bpositionY1 <= bpositionY2 + 165) {
      bpositionX1 = 0;
    }else if(bpositionX1 + 100 >= p.width) {
      bpositionX1 = 0;
    }else if(bpositionX4 + 100 >= 600 && bpositionY4 >= bpositionY3 && bpositionY4 <= bpositionY3 + 250) {
      bpositionX4 = 0;
    }else if(bpositionX4 + 100 >= 800 && bpositionY4 >= bpositionY2 && bpositionY4 <= bpositionY2 + 165) {
      bpositionX4 = 0;
    }else if(bpositionX4 + 100 >= p.width) {
      bpositionX4 = 0;
    }else if(bpositionX5 + 100 >= 600 && bpositionY5 >= bpositionY3 && bpositionY5 <= bpositionY3 + 250) {
      bpositionX5 = 0;
    }else if(bpositionX5 + 100 >= 800 && bpositionY5 >= bpositionY2 && bpositionY5 <= bpositionY2 + 165) {
      bpositionX5 = 0;
    }else if(bpositionX5 + 100 >= p.width) {
      bpositionX5 = 0
    }else if(bpositionX6 + 100 >= 600 && bpositionY6 >= bpositionY3 && bpositionY6 <= bpositionY3 + 250) {
      bpositionX6 = 0;
    }else if(bpositionX6 + 100 >= 800 && bpositionY6 >= bpositionY2 && bpositionY6 <= bpositionY2 + 165) {
      bpositionX6 = 0;
    }else if(bpositionX6 + 100 >= p.width) {
      bpositionX6 = 0;
    }else if(bpositionX7 + 100 >= 600 && bpositionY7 >= bpositionY3 && bpositionY7 <= bpositionY3 + 250) {
      bpositionX7 = 0;
    }else if(bpositionX7 + 100 >= 800 && bpositionY7 >= bpositionY2 && bpositionY7 <= bpositionY2 + 165) {
      bpositionX7 = 0;
    }else if(bpositionX7 + 100 >= p.width) {
      bpositionX7 = 0;
    }else if(bpositionX8 + 100 >= 600 && bpositionY8 >= bpositionY3 && bpositionY8 <= bpositionY3 + 250) {
      bpositionX8 = 0;
    }else if(bpositionX8 + 100 >= 800 && bpositionY8 >= bpositionY2 && bpositionY8 <= bpositionY2 + 165) {
      bpositionX8 = 0;
    }else if(bpositionX8 + 100 >= p.width) {
      bpositionX8 = 0;
    }else if(bpositionX9 + 100 >= 600 && bpositionY9 >= bpositionY3 && bpositionY9 <= bpositionY3 + 250) {
      bpositionX9 = 0;
    }else if(bpositionX9 + 100 >= 800 && bpositionY9 >= bpositionY2 && bpositionY9 <= bpositionY2 + 165) {
      bpositionX9 = 0;
    }else if(bpositionX9 + 100 >= p.width) {
      bpositionX9 = 0;
    }else if(bpositionX10 + 100 >= 600 && bpositionY10 >= bpositionY3 && bpositionY10 <= bpositionY3 + 250) {
      bpositionX10 = 0;
    }else if(bpositionX10 + 100 >= 800 && bpositionY10 >= bpositionY2 && bpositionY10 <= bpositionY2 + 165) {
      bpositionX10 = 0;
    }else if(bpositionX10 + 100 >= p.width) {
      bpositionX10 = 0;
    }else if(bpositionX11 + 100 >= 600 && bpositionY11 >= bpositionY3 && bpositionY11 <= bpositionY3 + 250) {
      bpositionX11 = 0;
    }else if(bpositionX11 + 100 >= 800 && bpositionY11 >= bpositionY2 && bpositionY11 <= bpositionY2 + 165) {
      bpositionX11 = 0;
    }else if(bpositionX11 + 100 >= p.width) {
      bpositionX11 = 0;
    }else if(bpositionX12 + 100 >= 600 && bpositionY12 >= bpositionY3 && bpositionY12 <= bpositionY3 + 250) {
      bpositionX12 = 0;
    }else if(bpositionX12 + 100 >= 800 && bpositionY12 >= bpositionY2 && bpositionY12 <= bpositionY2 + 165) {
      bpositionX12 = 0;
    }else if(bpositionX12 + 100 >= p.width) {
      bpositionX12 = 0;
    }else if(bpositionX13 + 100 >= 600 && bpositionY13 >= bpositionY3 && bpositionY13 <= bpositionY3 + 250) {
      bpositionX13 = 0;
    }else if(bpositionX13 + 100 >= 800 && bpositionY13 >= bpositionY2 && bpositionY13 <= bpositionY2 + 165) {
      bpositionX13 = 0;
    }else if(bpositionX13 + 100 >= p.width) {
      bpositionX13 = 0;
    }else if(bpositionX14 + 100 >= 600 && bpositionY14 >= bpositionY3 && bpositionY14 <= bpositionY3 + 250) {
      bpositionX14 = 0;
    }else if(bpositionX14 + 100 >= 800 && bpositionY14 >= bpositionY2 && bpositionY14 <= bpositionY2 + 165) {
      bpositionX14 = 0;
    }else if(bpositionX14 + 100 >= p.width) {
      bpositionX14 = 0;
    }else if(bpositionX15 + 100 >= 600 && bpositionY15 >= bpositionY3 && bpositionY15 <= bpositionY3 + 250) {
      bpositionX15 = 0;
    }else if(bpositionX15 + 100 >= 800 && bpositionY15 >= bpositionY2 && bpositionY15 <= bpositionY2 + 165) {
      bpositionX15 = 0;
    }else if(bpositionX15 + 100 >= p.width) {
      bpositionX15 = 0;
    }else if(bpositionX16 + 100 >= 600 && bpositionY16 >= bpositionY3 && bpositionY16 <= bpositionY3 + 250) {
      bpositionX16 = 0;
    }else if(bpositionX16 + 100 >= 800 && bpositionY16 >= bpositionY2 && bpositionY16 <= bpositionY2 + 165) {
      bpositionX16 = 0;
    }else if(bpositionX16 + 100 >= p.width) {
      bpositionX16 = 0;
    }else if(bpositionX17 + 100 >= 600 && bpositionY17 >= bpositionY3 && bpositionY17 <= bpositionY3 + 250) {
      bpositionX17 = 0;
    }else if(bpositionX17 + 100 >= 800 && bpositionY17 >= bpositionY2 && bpositionY17 <= bpositionY2 + 165) {
      bpositionX17 = 0;
    }else if(bpositionX17 + 100 >= p.width) {
      bpositionX17 = 0;
    }else if(bpositionX18 + 100 >= 600 && bpositionY18 >= bpositionY3 && bpositionY18 <= bpositionY3 + 250) {
      bpositionX18 = 0;
    }else if(bpositionX18 + 100 >= 800 && bpositionY18 >= bpositionY2 && bpositionY18 <= bpositionY2 + 165) {
      bpositionX18 = 0;
    }else if(bpositionX18 + 100 >= p.width) {
      bpositionX18 = 0;
    }else if(bpositionX19 + 100 >= 600 && bpositionY19 >= bpositionY3 && bpositionY19 <= bpositionY3 + 250) {
      bpositionX19 = 0;
    }else if(bpositionX19 + 100 >= 800 && bpositionY19 >= bpositionY2 && bpositionY19 <= bpositionY2 + 165) {
      bpositionX19 = 0;
    }else if(bpositionX19 + 100 >= p.width) {
      bpositionX19 = 0;
    }else if(bpositionX20 + 100 >= 600 && bpositionY20 >= bpositionY3 && bpositionY20 <= bpositionY3 + 250) {
      bpositionX20 = 0;
    }else if(bpositionX20 + 100 >= 800 && bpositionY20 >= bpositionY2 && bpositionY20 <= bpositionY2 + 165) {
      bpositionX20 = 0;
    }else if(bpositionX20 + 100 >= p.width) {
      bpositionX20 = 0;
    }else if(bpositionX21 + 100 >= 600 && bpositionY21 >= bpositionY3 && bpositionY21 <= bpositionY3 + 250) {
      bpositionX21 = 0;
    }else if(bpositionX21 + 100 >= 800 && bpositionY21 >= bpositionY2 && bpositionY21 <= bpositionY2 + 165) {
      bpositionX21 = 0;
    }else if(bpositionX21 + 100 >= p.width) {
      bpositionX21 = 0;
    }else if(bpositionX22 + 100 >= 600 && bpositionY22 >= bpositionY3 && bpositionY22 <= bpositionY3 + 250) {
      bpositionX22 = 0;
    }else if(bpositionX22 + 100 >= 800 && bpositionY22 >= bpositionY2 && bpositionY22 <= bpositionY2 + 165) {
      bpositionX22 = 0;
    }else if(bpositionX22 + 100 >= p.width) {
      bpositionX22 = 0;
    }else if(bpositionX23 + 100 >= 600 && bpositionY23 >= bpositionY3 && bpositionY23 <= bpositionY3 + 250) {
      bpositionX23 = 0;
    }else if(bpositionX23 + 100 >= 800 && bpositionY23 >= bpositionY2 && bpositionY23 <= bpositionY2 + 165) {
      bpositionX23 = 0;
    }else if(bpositionX23 + 100 >= p.width) {
      bpositionX23 = 0;
    }else if(bpositionX24 + 100 >= 600 && bpositionY24 >= bpositionY3 && bpositionY24 <= bpositionY3 + 250) {
      bpositionX24 = 0;
    }else if(bpositionX24 + 100 >= 800 && bpositionY24 >= bpositionY2 && bpositionY24 <= bpositionY2 + 165) {
      bpositionX24 = 0;
    }else if(bpositionX24 + 100 >= p.width) {
      bpositionX24 = 0;
    }
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

//Sketch Five
// var salute = function( p ) { // p could be any variable name
//   var wenjunii10;
//   var eyeimg, shirtimg, browimg1, browimg2, lashesimg1, lashesimg2, skinimg, pantsimg, teethimg, tongueimg;
//   var transcriptimg1, transcriptimg2, commentimg1, commentimg2;

//   p.preload = function() {
//     wenjunii10 = p.loadModel('models/wenjunii10/wenjunii10.obj');
//     eyeimg = p.loadImage('models/wenjunii10/textures/brown_eye.png');
//     shirtimg = p.loadImage('models/wenjunii10/textures/crude_male_tex.png');
//     browimg1 = p.loadImage('models/wenjunii10/textures/eyebrow001.png');
//     browimg2 = p.loadImage('models/wenjunii10/textures/eyebrow007.png');
//     lashesimg1 = p.loadImage('models/wenjunii10/textures/eyelashes01.png');
//     lashesimg2 = p.loadImage('models/wenjunii10/textures/eyelashes02.png');
//     skinimg = p.loadImage('models/wenjunii10/textures/middleage_lightskinned_male_diffuse2.png');
//     pantsimg = p.loadImage('models/wenjunii10/textures/simple_pants_diffuse_white.png');
//     teethimg = p.loadImage('models/wenjunii10/textures/teeth.png');
//     tongueimg = p.loadImage('models/wenjunii10/textures/tongue01_diffuse.png');
//     transcriptimg1 = p.loadImage('images/wenjunii10/transcript1.jpg');
//     transcriptimg2 = p.loadImage('images/wenjunii10/transcript2.jpg');
//     commentimg1 = p.loadImage('images/wenjunii10/comment1.jpg');
//     commentimg2 = p.loadImage('images/wenjunii10/comment2.png');
//   }

//   p.setup = function() {
//     p.createCanvas(980, 500, p.WEBGL);
//     p.ortho();
//     p.angleMode(p.DEGREES);
//   };

//   p.draw = function() {
//     p.background(250, 250, 250);
//     // p.image(transcriptimg1, 0, 0);
//     // p.image(transcriptimg2, p.width / 2, 0);
//     // p.image(comment1, 200, 200);
//     // p.image(comment2, 600, 200);
//     p.push();
//     p.orbitControl();
//     p.translate(0, 245);
//     p.scale(40);
//     p.texture(eyeimg);
//     p.texture(shirtimg);
//     p.texture(browimg1);
//     p.texture(browimg2);
//     p.texture(lashesimg1);
//     p.texture(lashesimg2);
//     p.texture(skinimg);
//     p.texture(pantsimg);
//     p.texture(teethimg);
//     p.texture(tongueimg);
//     //p.textureMode(NORMAL);
//     p.rotateZ(180);
//     p.model(wenjunii10);
//     p.pop();


    
//   };
// };
// var myp5 = new p5(salute, 'c5');
