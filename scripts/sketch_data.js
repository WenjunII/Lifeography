// Sketch One
var dataA = function( p ) { // p could be any variable name
var randomN;
var heartR,
  unknown,
  unknown2,
  metabolicR,
  stressV,
  stressL,
  distanceV,
  caloriesV,
  stepV,
  speedX,
  speedY;
var speedVx = 0;
var speedVy = 0;
var xD = 1;
var yD = 1;
var i = 0;

  p.preload = function() {
    dimg1 = p.loadImage('images/healthdata2.png');
  }

  p.setup = function() {
    p.createCanvas(1300, 1000);
    p.background(0);
    p.image(dimg1, 0, 0);
    p.loadJSON(
    "https://random-data-api.com/api/number/random_number?size=100",
    p.gotData
    );
    // noLoop();
    p.frameRate(10);
    p.colorMode(p.HSL);
  // angleMode(DEGREES);
    p.ellipseMode(p.RADIUS);
    };

  p.draw = function() {
    p.translate(250, 100);
    // background(0);
  // loadJSON(
  //   "https://random-data-api.com/api/number/random_number?size=100",
  //   gotData
  // );
  // console.log(randomN);
    if (randomN) {
        p.drawMetabolic(i);
        p.drawHeart(i);
        p.drawStress(i);
        p.drawDistance(i);
        p.drawCalories(i);
        p.drawStep(i);

        i++;
        if (i > 99) {
        i = 0;
        }
    }
  // }
  };

  p.gotData = function(data) {
    randomN = data;
  }

  p.drawDistance = function(i) {
    heartR = randomN[i].normal + 25;
    unknown = randomN[i].id;
    unknown2 = p.random(randomN[i].id);
    metabolicR = randomN[i].non_zero_number;
    stressV = randomN[i].decimal;
    stressL = randomN[i].digit;
    distanceV = randomN[i].positive;
    caloriesV = randomN[i].negative;
    stepV = randomN[i].positive / 2;
    // speedV = randomN[i].digit + 10;
    p.stroke(100 + distanceV / 20 + unknown / 300, 50 + unknown / 1000, 50, 1);
    p.strokeWeight(unknown2 / 10000);
    p.line(
        200 + unknown / 500 + distanceV / 50 + unknown / 500,
        500 + unknown2 / 500 + distanceV / 50,
        400 - unknown / 500 - distanceV / 16 + unknown2 / 100,
        600 - unknown2 / 500 - distanceV / 16
    );
  }

  p.drawStress = function(i) {
    heartR = randomN[i].normal + 25;
    unknown = randomN[i].id;
    unknown2 = p.random(randomN[i].id);
    metabolicR = randomN[i].non_zero_number;
    stressV = randomN[i].decimal;
    stressL = randomN[i].digit;
    distanceV = randomN[i].positive;
    caloriesV = randomN[i].negative;
     stepV = randomN[i].positive / 2;
     // speedV = randomN[i].digit + 10;
    p.stroke(200 - stressL * 25, 50 + unknown / 1000, 50 - unknown2 / 1000, 1);
    p.strokeWeight(unknown2 / 10000);
    p.noFill();
    p.quad(
        478 + unknown / 1000,
        451 - stressL * 10,
        626 - unknown2 / 1000,
        440 - stressV,
        609 - stressV,
        533 - unknown2 / 1000,
        470 + stressL * 10,
        546 - stressV * 2
    );
  }

  p.drawMetabolic = function(i) {
    heartR = randomN[i].normal + 25;
    unknown = randomN[i].id;
     unknown2 = p.random(randomN[i].id);
     metabolicR = randomN[i].non_zero_number;
    stressV = randomN[i].decimal;
    stressL = randomN[i].digit;
    distanceV = randomN[i].positive;
    caloriesV = randomN[i].negative;
    stepV = randomN[i].positive / 2;
     // speedV = randomN[i].digit + 10;
    p.stroke(
        metabolicR + unknown / 50,
        50 + unknown / 1000,
        50 - unknown / 1000,
        1
    );
    p.strokeWeight(unknown / 10000);
    p.noFill();
    p.ellipse(
        400 + unknown / 1000,
        400 + unknown2 / 1000,
        300 + metabolicR + unknown / 100,
        300 + metabolicR + unknown2 / 50
    );
  }

  p.drawHeart = function(i) {
    heartR = randomN[i].normal + 25;
    unknown = randomN[i].id;
    unknown2 = p.random(randomN[i].id);
    metabolicR = randomN[i].non_zero_number;
    stressV = randomN[i].decimal;
    stressL = randomN[i].digit;
    distanceV = randomN[i].positive;
    caloriesV = randomN[i].negative;
    stepV = randomN[i].positive / 2;
    // speedV = randomN[i].digit + 10;
    p.stroke(
        heartR * 4 + unknown / 300,
        50 + unknown / 1000,
        50 - unknown2 / 1000,
        1
    );
    p.strokeWeight(unknown / 10000);
    p.noFill();
    p.circle(
        heartR + unknown / 150 + 250,
        heartR + unknown2 / 150 + 150,
        heartR / 2 + unknown / 500
    );
  }

  p.drawCalories = function(i) {
    heartR = randomN[i].normal + 25;
    unknown = randomN[i].id;
    unknown2 = p.random(randomN[i].id);
    metabolicR = randomN[i].non_zero_number;
    stressV = randomN[i].decimal;
    stressL = randomN[i].digit;
    distanceV = randomN[i].positive;
    caloriesV = randomN[i].negative / -10;
    stepV = randomN[i].positive / 2;
    // speedV = randomN[i].digit + 10;
    p.noFill();
    p.stroke(360 - caloriesV / 20, 50 + unknown2 / 1000, 100 - unknown2 / 100, 1);
    p.strokeWeight(unknown / 3000);
    p.point(100 + caloriesV, 130 + unknown / 10);
    p.point(100 + heartR * 7, 130 + unknown2 / 10);
    p.point(100 + metabolicR * 40, 130 + caloriesV);
    p.point(100 + stressV * 5, 130 + heartR * 3);
    p.point(100 + stressL * 30, 130 + metabolicR * 50);
    p.point(100 + distanceV * 1.5 / 20, 130 + stressV * 10);
    p.point(100 + unknown * 2 / 35, 130 + stressL * 10);
    p.point(100 + unknown2 * 3 / 50, 130 + distanceV / 10);
    // point(100 + caloriesV / 2, 120 + distanceV / 5);
    // point(100 + heartR * 5, 120 + stressL * 15);
    // point(100 + metabolicR * 20, 120 + unknown / 8);
    // point(100 + stressV * 8, 120 + caloriesV * 2);
    // point(100 + stressL * 20, 120 + unknown2 / 5);
    // point(100 + distanceV / 28, 120 + heartR * 13);
    // point(100 + unknown / 20, 120 + stressV * 15);
    // point(100 + unknown2 / 16, 120 + metabolicR * 60);
    // point(100 + caloriesV, 120 + heartR * 8);
    // point(100 + heartR * 7, 120 + metabolicR * 55);
    // point(100 + metabolicR * 40, 120 + stressL * 12);
    // point(100 + stressV * 5, 120 + unknown / 9);
    // point(100 + stressL * 30, 120 + distanceV / 8);
    // point(100 + distanceV / 18, 120 + unknown2 / 9);
    // point(100 + unknown / 15, 120 + caloriesV * 1.5);
    // point(100 + unknown2 / 14.5, 120 + stressV * 12);

    // console.log(caloriesV);
  }

  p.drawStep = function(i) {
    heartR = randomN[i].normal + 25;
    unknown = randomN[i].id;
    unknown2 = p.random(randomN[i].id);
    metabolicR = randomN[i].non_zero_number;
    stressV = randomN[i].decimal;
    stressL = randomN[i].digit;
    distanceV = randomN[i].positive;
    caloriesV = randomN[i].negative / -10;
    stepV = randomN[i].positive / 2;
    speedX = randomN[i].digit * 2;
    speedY = p.random(speedX);
    p.noFill();
    p.stroke(
        5 + stepV / 100 + unknown / 500,
        50 + unknown / 1000,
        100 - unknown2 / 100,
        1
    );
    p.strokeWeight(unknown2 / 10000);
    p.triangle(
        500 + stepV / 400 - speedVx + unknown / 500,
        145 + stepV / 400 + speedVy + unknown2 / 500,
        518 + stepV / 400 - speedVx + unknown2 / 500,
        125 + stepV / 400 + speedVy + unknown2 / 500,
        536 + stepV / 400 - speedVx + unknown / unknown2,
        145 + stepV / 400 + speedVy + unknown / unknown2
    );
    speedVx += speedX * xD;
    speedVy += speedY * yD;
    if (
        p.dist(
        400,
        400,
        530 + stepV / 200 - speedVx + unknown / 500,
        175 + stepV / 200 + speedVy
        ) > 350
    ) {
        xD *= -1;
        yD *= -1;
    } else if (
        p.dist(
        400,
        400,
        558 + stepV / 200 - speedVx + unknown2 / 500,
        120 + stepV / 200 + speedVy
        ) > 350
    ) {
        yD *= -1;
        xD *= -1;
    } else if (
        p.dist(
        400,
        400,
        586 + stepV / 200 - speedVx + unknown / unknown2,
        175 + stepV / 200 + speedVy
        ) > 350
    ) {
        yD *= -1;
        xD * -1;
    }
    // console.log(530 + stepV / 200 - speedVx + unknown / 500);
  }

};
var myp5 = new p5(dataA, 'd1');

