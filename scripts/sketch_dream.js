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
var dream = function( p ) { // p could be any variable name
  var img1, img2, img3, img4, img5, img6, img7;
  var selectimg1, selectimg2, selectimg3, selectimg4, selectimg5, selectimg6, selectimg7; 
  var showimg1, showimg2, showimg3, showimg4, showimg5, showimg6, showimg7;
  var i = 0; 
  // var dposition1, dposition2, dposition3, dposition4, dposition5, dposition6;
  var dpositionX1, dpositionY1, dpositionX2, dpositionY2, dpositionX3, dpositionY3, dpositionX4, dpositionY4, dpositionX5, dpositionY5, dpositionX6, dpositionY6, dpositionX7, dpositionY7, dpositionX8, dpositionY8;

  p.preload = function() {
    img1 = p.loadJSON('jason/search1.json');
    img2 = p.loadJSON('jason/search2.json');
    img3 = p.loadJSON('jason/search3.json');
    img4 = p.loadJSON('jason/search4.json');
    img5 = p.loadJSON('jason/search5.json');
    img6 = p.loadJSON('jason/search6.json');
    img7 = p.loadJSON('jason/search2.json');
  }

  p.setup = function() {
    p.createCanvas(800, 534);
    p.frameRate(10);
  };

  p.draw = function() {
    p.background(25, 25, 25);
    // p.frameRate(10);
    // var a = p.createA('http://p5js.org/', '<img src="images/p5js/hand.png">');
    // a.position(65 + positionX1, 7 + positionY1);
    selectimg1 = img1.images_results[i].original;
    selectimg2 = img2.images_results[i].original;
    selectimg3 = img3.images_results[i].original;
    selectimg4 = img4.images_results[i].original;
    selectimg5 = img5.images_results[i].original;
    selectimg6 = img6.images_results[i].original;
    selectimg7 = img7.images_results[i].original;
    // p.console.log(selectimg1);
    showimg1 = p.createImg(selectimg1);
    showimg1.size(800, 533);
    showimg1.position(0, 0);
    showimg2 = p.createImg(selectimg2);
    showimg2.size(291, 355);
    showimg2.position(65, 7);
    showimg7 = p.createImg(selectimg7);
    showimg7.size(291, 355);
    showimg7.position(395, 15);
    showimg3 = p.createImg(selectimg3);
    showimg3.size(250, 184);
    showimg3.position(225, 267);
    // showimg4 = createImg(selectimg4);
    // showimg4.p.position(237, 284);
    showimg5 = p.createImg(selectimg5);
    showimg5.size(275, 198);
    showimg5.position(365, 98);
    showimg6 = p.createImg(selectimg6);
    showimg6.size(193, 70);
    showimg6.position(193, 70);
    // dpositionX1 = p.random(-0.4, 0.4);
    // dpositionY1 = p.random(-0.4, 0.4);
    // dpositionX2 = p.random(-0.4, 0.4);
    // dpositionY2 = p.random(-0.4, 0.4);
    // dpositionX3 = p.random(-0.4, 0.4);
    // dpositionY3 = p.random(-0.4, 0.4);
    // dpositionX4 = p.random(-0.4, 0.4);
    // dpositionY4 = p.random(-0.4, 0.4);
    // dpositionX5 = p.random(-0.4, 0.4);
    // dpositionY5 = p.random(-0.4, 0.4);
    // dpositionX6 = p.random(-0.4, 0.4);
    // dpositionY6 = p.random(-0.4, 0.4);
    // dpositionX7 = p.random(-0.4, 0.4);
    // dpositionY7 = p.random(-0.4, 0.4);
    // dpositionX8 = p.random(-0.4, 0.4);
    // dpositionY8 = p.random(-0.4, 0.4);

    i++;
    if(i > 99) {
      i = 0;
     }

    // p.image(dimg2, 0 + dpositionX2, 0 + dpositionY2);
    // p.image(dimg1, 65 + dpositionX1, 7 + dpositionY1);
    // p.image(dimg8, 395 + dpositionX8, 15 + dpositionY8);
    // p.image(dimg5, 225 + dpositionX5, 267 + dpositionY5);
    // p.image(dimg4, 237 + dpositionX4, 284 + dpositionY4);
    // p.image(dimg3, 250 + dpositionX3, 300 + dpositionY3);
    // p.image(dimg7, 365 + dpositionX7, 98 + dpositionY7);
    // p.image(dimg6, 193 + dpositionX6, 70 + dpositionY6); 

  };

};
var myp5 = new p5(dream, 'c2');