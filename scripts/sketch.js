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
    p.createCanvas(850, 675);
    p.cursor('grab');
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
    p.createCanvas(850, 500);
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
var petridish = function( p ) { // p could be any variable name
  var backgroundimg, petridishimg1, petridishimg2, signimg1, signimg2, signimg3, signimg4, signimg5, signimg6, signimg7, signimg8;
  var area1, area2, area3, area4, area5, area6, area7, area8;
  var bacarea1, bacarea2, bacarea3, bacarea4, bacarea5, bacarea6, bacarea7, bacarea8; 
  var bacterialx1, bacterialx2, bacterialx3, bacterialx4, bacterialx5, bacterialx6, bacterialx7, bacterialx8;
  var bacterialy1, bacterialy2, bacterialy3, bacterialy4, bacterialy5, bacterialy6, bacterialy7, bacterialy8;
  var randomr, randomg, randomb;
  var toggle_loop = false;

  p.preload = function() {
    backgroundimg = p.loadImage('images/wenjuniihighschool/backgroundimg.png');
    petridishimg1 = p.loadImage('images/wenjuniihighschool/petri_dish.png');
    petridishimg2 = p.loadImage('images/wenjuniihighschool/petri_dish_2.png');
    signimg1 = p.loadImage('images/wenjuniihighschool/bac1.png');
    signimg2 = p.loadImage('images/wenjuniihighschool/bac2.png');
    signimg3 = p.loadImage('images/wenjuniihighschool/bac3.png');
    signimg4 = p.loadImage('images/wenjuniihighschool/bac4.png');
    signimg5 = p.loadImage('images/wenjuniihighschool/bac5.png');
    signimg6 = p.loadImage('images/wenjuniihighschool/bac6.png');
    signimg8 = p.loadImage('images/wenjuniihighschool/bac8.png');
  }

  p.setup = function() {
    p.createCanvas(850, 454);
    p.image(backgroundimg, 0, 0);
    // backgroundimg.resize(850, 472);
    p.image(petridishimg1, 50, 103);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 54, 106);
    p.pop();
    p.image(petridishimg1, 255, 103);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 259, 106);
    p.pop();
    p.image(petridishimg1, 475, 103);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 479, 106);
    p.pop();
    p.image(petridishimg1, 685, 103);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 689, 106);
    p.pop();
    p.image(petridishimg1, 42, 285);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 46, 288);
    p.pop();
    p.image(petridishimg1, 265, 285);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 269, 288);
    p.pop();
    p.image(petridishimg1, 482, 284);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 486, 287);
    p.pop();
    p.image(petridishimg1, 685, 285);
    p.push();
    p.tint(255, 110);
    p.image(petridishimg2, 689, 288);
    p.pop();
    p.cursor('help');
    p.noLoop();
  };

  p.draw = function() {
    // p.background(250, 250, 250);
    // area1 = p.dist(118, 170, p.mouseX, p.mouseY);
    // area2 = p.dist(323, 170, p.mouseX, p.mouseY);
    // area3 = p.dist(543, 170, p.mouseX, p.mouseY);
    // area4 = p.dist(753, 170, p.mouseX, p.mouseY);
    // area5 = p.dist(110, 352, p.mouseX, p.mouseY);
    // area6 = p.dist(333, 352, p.mouseX, p.mouseY);
    // area7 = p.dist(550, 352, p.mouseX, p.mouseY);
    // area8 = p.dist(753, 352, p.mouseX, p.mouseY);
  //  if (area1 <= 64 || area2 <= 64 || area3 <= 64 || area4 <= 64 || area5 <= 64 || area6 <= 64 || area7 <= 64 || area8 <= 64) {
  //     p.cursor('pointer'); 
  //   } else {
  //     p.cursor('default');
  //   }
    bacterialx1 = p.random(54, 182);
    bacterialy1 = p.random(106, 234);
    bacterialx2 = p.random(259, 387);
    bacterialy2 = p.random(106, 234);
    bacterialx3 = p.random(479, 607);
    bacterialy3 = p.random(106, 234);
    bacterialx4 = p.random(689, 817);
    bacterialy4 = p.random(106, 234);
    bacterialx5 = p.random(46, 174);
    bacterialy5 = p.random(288, 416);
    bacterialx6 = p.random(269, 397);
    bacterialy6 = p.random(288, 416);
    bacterialx7 = p.random(486, 614);
    bacterialy7 = p.random(288, 416);
    bacterialx8 = p.random(689, 817);
    bacterialy8 = p.random(288, 416);
    bacarea1 = p.dist(118, 170, bacterialx1, bacterialy1);
    bacarea2 = p.dist(323, 170, bacterialx2, bacterialy2);
    bacarea3 = p.dist(543, 170, bacterialx3, bacterialy3);
    bacarea4 = p.dist(753, 170, bacterialx4, bacterialy4);
    bacarea5 = p.dist(110, 352, bacterialx5, bacterialy5);
    bacarea6 = p.dist(333, 352, bacterialx6, bacterialy6);
    bacarea7 = p.dist(550, 352, bacterialx7, bacterialy7);
    bacarea8 = p.dist(753, 352, bacterialx8, bacterialy8);
    randomr = p.random(0, 255);
    randomg = p.random(0, 255);
    randomb = p.random(0, 255);
    if (bacarea1 <= 64) {
        p.stroke(255, 0, 0);
        p.strokeWeight(2);
        p.point(bacterialx1, bacterialy1);
        p.image(signimg1, 57, 154);
    }
    if (bacarea2 <= 64) {
        p.stroke(0, 0, 255);
        p.strokeWeight(2);
        p.point(bacterialx2, bacterialy2);
        p.image(signimg2, 265, 142);
  }
    if (bacarea3 <= 64) {
        p.stroke(0, 0, 0);
        p.strokeWeight(2);
        p.point(bacterialx3, bacterialy3);
        p.image(signimg3, 498, 148);
}
    if (bacarea4 <= 64) {
        p.stroke(255, 255, 0);
        p.strokeWeight(2);
        p.point(bacterialx4, bacterialy4);
        p.image(signimg4, 728, 133);
}
    if (bacarea5 <= 64) {
        p.stroke(0, 255, 0);
        p.strokeWeight(2);
        p.point(bacterialx5, bacterialy5);
        p.image(signimg5, 65, 320);
}
    if (bacarea6 <= 64) {
        p.stroke(255, 255, 255);
        p.strokeWeight(2);
        p.point(bacterialx6, bacterialy6);
        p.image(signimg6, 272, 333);
}
    if (bacarea7 <= 64) {
        p.stroke(randomr, randomg, randomb);
        p.strokeWeight(2);
        p.point(bacterialx7, bacterialy7);
}
    if (bacarea8 <= 64) {
        p.stroke(255, 0, 255);
        p.strokeWeight(2);
        p.point(bacterialx8, bacterialy8);
        p.image(signimg8, 692, 334);
}
    
  };

  p.mousePressed = function() {
    area1 = p.dist(425, 227, p.mouseX, p.mouseY);
    if (toggle_loop && area1 <=450) {
      p.noLoop();
      toggle_loop = false;
    } else if (area1 <=450) {
      p.loop();
      toggle_loop = true;
    }
  }
};
var myp5 = new p5(petridish, 'c5');

//Sketch Six
var petridish2 = function( p ) { // p could be any variable name
  var backgroundimg2
  var capture;

  p.preload = function() {
    backgroundimg2 = p.loadImage('images/wenjuniihighschool/bacteria2.png');
    // backgroundimg2.position(500, 0);
  }

  p.setup = function() {
    p.createCanvas(850, 499);
    p.image(backgroundimg2, 0, 0);
    capture = p.createCapture(p.VIDEO);
    capture.size(205, 154);
    capture.hide();
  };

  p.draw = function() {
    // p.background(220,220,220,255);
    capture.loadPixels();
// you can change the stepSize
//var stepSize = stepSize_slider.value();
var stepSize = p.floor(p.map(2, 0, p.width, 5, 40));
for (var x = 0; x < capture.width; x += stepSize) {
  for (var y = 0; y < capture.height; y += stepSize) {
    var index = ((y*capture.width) + x) * 4;
    // The code for your filter will go here!
    var redVal = capture.pixels[index];
    var greenVal = capture.pixels[index + 1];
    var blueVal = capture.pixels[index + 2];
    // you can add or remove the stroke
    // strokeWeight(1);
    // stroke(255,0,255,255);
    p.push();
    p.translate(60, 65);
    p.noStroke();
    // you can change the colors
    p.fill(redVal, 2*greenVal, blueVal, 10);
    // you can change the shape of the 'pixels'
    // rectMode(CENTER);
    // rect(x, y, stepSize, stepSize);
    p.circle(x, y, stepSize / 1.5);
    p.pop();
    p.push();
    p.translate(323, 65);
    p.noStroke();
    // you can change the colors
    p.fill(redVal, greenVal, 2*blueVal, 10);
    // you can change the shape of the 'pixels'
    // rectMode(CENTER);
    // rect(x, y, stepSize, stepSize);
    p.circle(x, y, stepSize / 1.5);
    p.pop();
    p.push();
    p.translate(589, 65);
    p.noStroke();
    // you can change the colors
    p.fill(2*redVal, greenVal, blueVal/2, 10);
    // you can change the shape of the 'pixels'
    // rectMode(CENTER);
    // rect(x, y, stepSize, stepSize);
    p.circle(x, y, stepSize / 1.5);
    p.pop();
  }
}
  }
};
var myp5 = new p5(petridish2, 'c6');

//Sketch Seven
var maze = function( p ) { // p could be any variable name
  var backgroundimg3
  var avatar1, avatar2;
  var avatar1posx = 0;
  var avatar1move = 0.1;
  var avatar2op = 0;
  var avatar2opchange = 1;
  var avatarplayop = 255;
  var avatarplayopchange = 1;
  // var doorOpen = 0;
  var ready = -1;
  var endMsg = "";
  var c;

  p.preload = function() {
    backgroundimg3 = p.loadImage('images/wenjuniicollege/newworld.png');
    avatar1 = p.loadImage('images/wenjuniicollege/avatar.png');
    avatar2 = p.loadImage('images/wenjuniicollege/avatar2.png');
  }
    
  p.setup = function() {
    p.createCanvas(800, 800);
    c = 'blue';
  };

  p.draw = function() {
    p.background(50, 50, 50);
    p.image(backgroundimg3, 25, 25);
    p.image(avatar1, 30 + avatar1posx, 20);
    avatar1posx += avatar1move
    if (avatar1posx > 3) {
      avatar1move *= -1;
    } else if (avatar1posx < -3) {
      avatar1move *= -1;
    }
    p.push();
    p.tint(255, 255 + avatar2op);
    p.image(avatar2, 730, 650);
    avatar2op -= avatar2opchange;
    if (avatar2op < -255) {
      avatar2opchange *= -1;
    } else if (avatar2op > 0) {
      avatar2opchange *= -1;
    }
    p.pop();

    // Game
    // var d = 220;
    // Reset background
    if(p.mouseX > 621 && p.mouseX < 731 && p.mouseY > 681 && p.mouseY < 731) {
      p.background(50, 50, 50);
      p.image(backgroundimg3, 25, 25);
      p.image(avatar1, 30 + avatar1posx, 20);
    avatar1posx += avatar1move
    if (avatar1posx > 3) {
      avatar1move *= -1;
    } else if (avatar1posx < -3) {
      avatar1move *= -1;
    }
    p.push();
    p.tint(255, 255 + avatar2op);
    p.image(avatar2, 730, 650);
    avatar2op -= avatar2opchange;
    if (avatar2op < -255) {
      avatar2opchange *= -1;
    } else if (avatar2op > 0) {
      avatar2opchange *= -1;
    }
    p.pop();
    }
    p.noStroke();
    
    // Entrance Box
    p.textSize(20);
    p.fill('green');
    p.rect(621, 681, 110, 50);
    p.fill('yellow');
    p.text("Entrance", 641, 715);
    
    // Exit Box
    p.fill('red');
    p.rect(69,69, 60, 40);
    p.fill(255);
    p.text("Exit", 80, 95);

    // Obstacles and Walls
    p.fill(0, 0, 0, avatarplayop);
    // p.circle(p.mouseX, p.mouseY, 30);
    avatarplayop -= avatarplayopchange;
    if (avatarplayop < 0) {
      avatarplayopchange *= -1;
    } else if (avatarplayop > 255) {
      avatarplayopchange *= -1;
    }
    // Big Walls
    p.rect(160,600, 571, 30);
    p.rect(160,250, 30, 350);
    p.rect(69,150, 560, 30);
    p.rect(430,150, 30, 410);
    // End Maze
    p.rect(320,10, 60, 100);
    p.rect(190,105, 80, 10);
    p.rect(430,105, 50, 10);
    p.rect(530,105, 50, 10);
    // Bubble Run
    p.ellipse(560,680, 30);
    p.ellipse(460,650, 90);
    p.ellipse(330,740, 150);
    p.ellipse(150, 650, 90);
    p.ellipse(300, 290, 150);
    p.ellipse(270, 450, 90);
    p.ellipse(330, 560, 90);
    p.ellipse(400, 420, 90);
    p.ellipse(500, 545, 40);
    p.ellipse(565, 500, 40);
    p.ellipse(600, 590, 40);
    p.ellipse(670, 550, 40);
    p.ellipse(630, 470, 40);
    p.ellipse(500, 460, 40);
    p.ellipse(710, 480, 40);
    p.ellipse(480, 365, 40);
    p.ellipse(545, 320, 40);
    p.ellipse(580, 410, 40);
    p.ellipse(650, 370, 40);
    p.ellipse(610, 290, 40);
    p.ellipse(480, 280, 40);
    p.ellipse(690, 300, 40);
    p.ellipse(550, 200, 80);
    p.ellipse(740, 200, 130);
    // Rect Run
    p.rect(50,530, 70, 30);
    p.rect(110,430, 60, 30);
    p.rect(30,340, 90, 30);
    p.rect(110, 250, 60, 30);

    // Play
    if(p.mouseX > 621 && p.mouseX < 731 && p.mouseY > 681 && p.mouseY < 731) {
      ready = 1;
      // endMsg = "";
      p.cursor('none');
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      c = 'gold';
      endMsg = "There are 14 years to go. Take your time.";

      // Cursor
      p.noStroke();
      p.fill(0, 0, 0, avatarplayop);
      p.circle(p.mouseX, p.mouseY, 20);
      avatarplayop -= avatarplayopchange;
      if (avatarplayop < 0) {
        avatarplayopchange *= -1;
      } else if (avatarplayop > 255) {
        avatarplayopchange *= -1;
      }
    }

    if(ready == 1) {
      p.cursor('none');

      // Cursor
      p.noStroke();
      p.fill(0, 0, 0, avatarplayop);
      p.circle(p.mouseX, p.mouseY, 20);
      avatarplayop -= avatarplayopchange;
      if (avatarplayop < 0) {
        avatarplayopchange *= -1;
      } else if (avatarplayop > 255) {
        avatarplayopchange *= -1;
      }
    }

    if(ready == -1) {
      p.cursor('default');
    }

    if(ready == 0) {
      p.cursor('default');
    }

    // Win Scenario
    if(ready == 1 && p.mouseX > 69 && p.mouseX < 129 && p.mouseY > 69 && p.mouseY < 109) {
        p.textSize(60);
        p.stroke(1);
        p.fill(c);
        p.text(endMsg, p.width/2-250, p.height/2);
        endMsg = "It’s a long run. Enjoy!";
        c = 'pink';
      }

      // Opening message
    if(ready == -1) {
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      c = 'gold';
      endMsg = "There are 14 years to go. Take your time.";
    }
  	
      // Lose Scenarios
      if(ready == 0) {
        p.textSize(30);
        p.stroke(1);
        p.fill(c);
        p.text(endMsg, p.width/2-250, p.height/2);
        endMsg = "Opps! Again?";
        c = 'red'
      }
    // // Big Walls
    // p.rect(160,600, 571, 30);
    if(p.mouseX > 160 - 10 && p.mouseX < 731 + 10 && p.mouseY > 600 - 10 && p.mouseY < 630 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(160,250, 30, 350);
    if(p.mouseX > 160 - 10 && p.mouseX < 190 + 10 && p.mouseY > 250 - 10 && p.mouseY < 600 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(69,150, 560, 30);
    if(p.mouseX > 69 - 10 && p.mouseX < 659 + 10 && p.mouseY > 150 - 10 && p.mouseY < 180 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(430,150, 30, 410);
    if(p.mouseX > 430 - 10 && p.mouseX < 460 + 10 && p.mouseY > 150 - 10 && p.mouseY < 560 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // // End Maze
    // p.rect(320,10, 60, 100);
    if(p.mouseX > 320 - 10 && p.mouseX < 380 + 10 && p.mouseY > 10 - 10 && p.mouseY < 110 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(190,105, 80, 10);
    if(p.mouseX > 190 - 10 && p.mouseX < 270 + 10 && p.mouseY > 105 - 10 && p.mouseY < 115 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(430,105, 50, 10);
    if(p.mouseX > 430 - 10 && p.mouseX < 480 + 10 && p.mouseY > 105 - 10 && p.mouseY < 115 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(530,105, 50, 10);
    if(p.mouseX > 530 - 10 && p.mouseX < 580 + 10 && p.mouseY > 105 - 10 && p.mouseY < 115 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    
    // Outside the canvas
    if(p.mouseX > p.width - 70 - 10 || p.mouseX < 0 + 10 + 70 || p.mouseY > p.height - 10 - 70 || p.mouseY < 0 + 10 + 70) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // if(p.mouseX == 0 && p.mouseY == 0)
    //   ready = -1;

    //Rect Run
    // p.rect(50,530, 70, 30);
    if(p.mouseX > 50 - 10 && p.mouseX < 120 + 10 && p.mouseY > 530 - 10 && p.mouseY < 560 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(110,430, 60, 30);
    if(p.mouseX > 110 - 10 && p.mouseX < 170 + 10 && p.mouseY > 430 - 10 && p.mouseY < 460 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(30,340, 90, 30);
    if(p.mouseX > 30 - 10 && p.mouseX < 120 + 10 && p.mouseY > 340 - 10 && p.mouseY < 370 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(110, 250, 60, 30);
    if(p.mouseX > 110 - 10 && p.mouseX < 170 + 10 && p.mouseY > 250 - 10 && p.mouseY < 280 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }

  
      // // Bubble Run
    // p.ellipse(560, 680, 30);
    if(p.dist(560, 680, p.mouseX, p.mouseY) < 15 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(460,650, 90);
    if(p.dist(460, 650, p.mouseX, p.mouseY) < 45 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(330,740, 150);
    if(p.dist(330, 740, p.mouseX, p.mouseY) < 75 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(150, 650, 90);
    if(p.dist(150, 650, p.mouseX, p.mouseY) < 45 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(300, 290, 150);
    if(p.dist(300, 290, p.mouseX, p.mouseY) < 75 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(270, 450, 90);
    if(p.dist(270, 450, p.mouseX, p.mouseY) < 45 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(330, 560, 90);
    if(p.dist(330, 560, p.mouseX, p.mouseY) < 45 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(400, 420, 90);
    if(p.dist(400, 420, p.mouseX, p.mouseY) < 45 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(500, 545, 40);
    if(p.dist(500, 545, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(565, 500, 40);
    if(p.dist(565, 500, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(600, 590, 40);
    if(p.dist(600, 590, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(670, 550, 40);
    if(p.dist(670, 550, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(630, 470, 40);
    if(p.dist(630, 470, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(500, 460, 40);
    if(p.dist(500, 460, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(710, 480, 40);
    if(p.dist(610, 480, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(480, 365, 40);
    if(p.dist(480, 365, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(545, 320, 40);
    if(p.dist(545, 320, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(580, 410, 40);
    if(p.dist(580, 410, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(650, 370, 40);
    if(p.dist(650, 370, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(610, 290, 40);
    if(p.dist(610, 290, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(480, 280, 40);
    if(p.dist(480, 280, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(690, 300, 40);
    if(p.dist(690, 300, p.mouseX, p.mouseY) < 20 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(550, 200, 80);
    if(p.dist(550, 200, p.mouseX, p.mouseY) < 40 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(740, 200, 130);
    if(p.dist(740, 200, p.mouseX, p.mouseY) < 65 + 10) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }

    
  }
};
var myp5 = new p5(maze, 'c7');

//Sketch Eight
var free = function( p ) { // p could be any variable name
  var backgroundimg4;
  var freeimg;
  var rectopacity = 245;
  var backopacity = 245;
  // var s = 50;
  var heartarea;
  var rectmove = 0;
  var toggle_loop = false;

  p.preload = function() {
    backgroundimg4 = p.loadImage('images/wenjuniimarriage/ins_small.png');
    freeimg = p.loagImage('images/wenjuniimarriage/free.png');
  }
    
  p.setup = function() {
    p.createCanvas(850, 10630);
    // p.background(255, 255, 255, 0.5);
    
    p.noLoop();
  };

  p.draw = function() {
    // p.frameRate(5);
    p.cursor('pointer');
    p.image(backgroundimg4, 0, 0);
    p.noStroke();
    p.fill(255, 255, 255, 0 + backopacity);
    p.rect(0, 0, 850, 10630);
    backopacity = 0;
    // p.noStroke();
    p.fill(255, 255, 255, rectopacity);
    p.rect(0, 0, 850, 1.5 + rectmove);
    rectmove += 5;

      


    // for(let i = 0; i < 861; i += 287) {
    //   for(let j =0; j < 10332; j += 287) {
    //     p.noStroke();
    //     p.fill(220, 220, 220, rectopacity);
    //     p.rect(2 + i, 320 + j, 285, 285);
    //     p.fill(255, 255, 255, heartopacity);
    //     p.heart(i+140, j+450, 35);
    //     if(p.dist(p.mouseX, p.mouseY, 2 + i + 142.5, 320 + j + 142.5) <= 35) {
    //       p.cursor('pointer');
    //       p.fill(255, 0, 0, heartopacity);
    //       p.heart(i+140, j+450, 35);
    //     }
    //   }
    // }
    
    
  }
  // p.heart = function(i, j, heartsize) {
  //   p.beginShape();
  //   p.vertex(i, j);
  //   p.bezierVertex(i - heartsize / 2, j - heartsize / 2, i - heartsize, j + heartsize / 3, i, j + heartsize);
  //   p.bezierVertex(i + heartsize, j + heartsize / 3, i + heartsize / 2, j - heartsize / 2, i, j);
  //   p.endShape(p.CLOSE);
  // }
  p.mousePressed = function() {
      if (toggle_loop && p.mouseX >=0 && p.mouseX <= 850 && p.mouseY >= 0 && p.mouseY <= 10630) {
        p.noLoop();
        toggle_loop = false;
      } else if(p.mouseX >=0 && p.mouseX <= 850 && p.mouseY >= 0 && p.mouseY <= 10630) {
        p.loop();
        toggle_loop = true;
      }
    }
    

};
var myp5 = new p5(free, 'c8');