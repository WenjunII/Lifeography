
let backgroundimg2
let capture;
let myCanvas;
let bottleimg1, bottleimg2, bottleimg3;
let scaleNumbers = 0;
let dotSize = 1;
let spaceBetweenDots = 2;
let numbers = {
    0: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
    1: [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 1]
    ],
    2: [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1]
    ],
    3: [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ],
      4: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
      ],
      5: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ],
      6: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      7: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
      ],
      8: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      9: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
      ]
  };

function preload() {
    backgroundimg2 = loadImage('images/wenjuniihighschool/bacteria3.png');
    // backgroundimg2.position(500, 0);
    bottleimg1 = loadImage('images/wenjuniihighschool/bacteria2_1_2_2.png');
    bottleimg2 = loadImage('images/wenjuniihighschool/bacteria2_2_2_2.png');
    bottleimg3 = loadImage('images/wenjuniihighschool/bacteria2_3_2_2.png');
}

function setup() {
    myCanvas = createCanvas(850, 499);
    myCanvas.parent('phighschool');
    image(backgroundimg2, 0, 0);
    image(bottleimg1, 50, 25);
    image(bottleimg2, 300, 25);
    image(bottleimg3, 560, 25);
    capture = createCapture(VIDEO);
    capture.size(205, 154);
    capture.hide();
    scaleNumbers = int(random(30, 4000));
};

function draw() {
    // p.background(220,220,220,255);
    // image(bottleimg1, 50, 25);
    // image(bottleimg2, 300, 25);
    // image(bottleimg3, 560, 25);
    capture.loadPixels();
    // you can change the stepSize
    //var stepSize = stepSize_slider.value();
    var stepSize = floor(map(2, 0, width, 5, 40));
    for (var x = 0; x < capture.width; x += stepSize) {
        for (var y = 0; y < capture.height; y += stepSize) {
            var index = ((y * capture.width) + x) * 4;
            // The code for your filter will go here!
            var redVal = capture.pixels[index];
            var greenVal = capture.pixels[index + 1];
            var blueVal = capture.pixels[index + 2];
            // you can add or remove the stroke
            // strokeWeight(1);
            // stroke(255,0,255,255);
            push();
            translate(55, 65);
            noStroke();
            // you can change the colors
            fill(redVal, 2 * greenVal, blueVal, 10);
            // you can change the shape of the 'pixels'
            // rectMode(CENTER);
            // rect(x, y, stepSize, stepSize);
            circle(x, y, stepSize / 1.5);
            pop();
            push();
            translate(323, 65);
            noStroke();
            // you can change the colors
            fill(redVal, greenVal, 2 * blueVal, 10);
            // you can change the shape of the 'pixels'
            // rectMode(CENTER);
            // rect(x, y, stepSize, stepSize);
            circle(x, y, stepSize / 1.5);
            pop();
            push();
            translate(595, 65);
            noStroke();
            // you can change the colors
            fill(2 * redVal, greenVal, blueVal / 2, 10);
            // you can change the shape of the 'pixels'
            // rectMode(CENTER);
            // rect(x, y, stepSize, stepSize);
            circle(x, y, stepSize / 1.5);
            pop();
        }
    }
}

function drawNumber(number, x, y) {
    for (let i = 0; i < number.length; i++) {
      for (let j = 0; j < number[i].length; j++) {
        if (number[i][j] === 1) {
          fill(0);
          rect(x + j * (dotSize + spaceBetweenDots), y + i * (dotSize + spaceBetweenDots), dotSize, dotSize);
        }
      }
    }
  }