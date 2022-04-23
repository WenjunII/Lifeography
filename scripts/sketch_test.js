

//Sketch Six
var petridish2 = function( p ) { // p could be any variable name
  var backgroundimg2
  var capture;

  p.preload = function() {
    backgroundimg2 = p.loadImage('images/wenjuniihighschool/bacteria.png');
  }

  p.setup = function() {
    p.createCanvas(850, 499);
    p.image(backgroundimg2, 0, 0);
    capture = p.createCapture(p.VIDEO);
    capture.size(200, 150);
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
    p.translate(67, 80);
    p.noStroke();
    // you can change the colors
    p.fill(2*redVal, greenVal, blueVal/2, 10);
    // you can change the shape of the 'pixels'
    // rectMode(CENTER);
    // rect(x, y, stepSize, stepSize);
    p.circle(x, y, stepSize / 1.5);
    p.pop();
    p.push();
    p.translate(325, 80);
    p.noStroke();
    // you can change the colors
    p.fill(2*redVal, greenVal, blueVal/2, 10);
    // you can change the shape of the 'pixels'
    // rectMode(CENTER);
    // rect(x, y, stepSize, stepSize);
    p.circle(x, y, stepSize / 1.5);
    p.pop();
    p.push();
    p.translate(580, 80);
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
