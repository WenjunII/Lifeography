let randomN;
let heartR,
  unknown,
  unknown2,
  metabolicR,
  stressV,
  stressL,
  distanceV,
  caloriesV, stepV, speedX, speedY;
let speedVx = 0;
let speedVy = 0;
let xD = 1;
let yD = 1;
let i = 0;

function setup() {
  createCanvas(800, 800);
  // background(0);
  loadJSON(
    "https://random-data-api.com/api/number/random_number?size=100",
    gotData
  );
  // noLoop();
  frameRate(10);
  colorMode(HSL);
  // angleMode(DEGREES);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  // loadJSON(
  //   "https://random-data-api.com/api/number/random_number?size=100",
  //   gotData
  // );
  // console.log(randomN);
  if (randomN) {
    drawMetabolic(i);
    drawHeart(i);
    drawStress(i);
    drawDistance(i);
    drawCalories(i);
    drawStep(i);

    i++;
    if (i > 99) {
      i = 0;
    }
  }
  // }
}

function gotData(data) {
  // console.log(data[0].id);
  randomN = data;
}

function drawDistance(i) {
  heartR = randomN[i].normal + 25;
  unknown = randomN[i].id;
  unknown2 = random(randomN[i].id);
  metabolicR = randomN[i].non_zero_number;
  stressV = randomN[i].decimal;
  stressL = randomN[i].digit;
  distanceV = randomN[i].positive;
  caloriesV = randomN[i].negative;
  stepV = randomN[i].positive / 2;
  // speedV = randomN[i].digit + 10;
  stroke(100 + distanceV / 20, 100, 50, 1);
  strokeWeight(unknown2 / (unknown / 2));
  line(
    200 + unknown / 1000 + distanceV / 50,
    500 + unknown2 / 1000 + distanceV / 50,
    400 - unknown / 1000 - distanceV / 16,
    600 - unknown2 / 1000 - distanceV / 16
  );
}

function drawStress(i) {
  heartR = randomN[i].normal + 25;
  unknown = randomN[i].id;
  unknown2 = random(randomN[i].id);
  metabolicR = randomN[i].non_zero_number;
  stressV = randomN[i].decimal;
  stressL = randomN[i].digit;
  distanceV = randomN[i].positive;
  caloriesV = randomN[i].negative;
  stepV = randomN[i].positive / 2;
  // speedV = randomN[i].digit + 10;
  stroke(200 - stressL * 25, 100 - unknown / 1000, 50 - unknown2 / 1000, 1);
  strokeWeight(unknown2 / 1000);
  noFill();
  quad(
    438 + unknown / 1000,
    431 - stressL * 10,
    586 - unknown2 / 1000,
    420 - stressV,
    569 - stressV,
    513 - unknown2 / 1000,
    430 + stressL * 10,
    526 - stressV * 2
  );
}

function drawMetabolic(i) {
  heartR = randomN[i].normal + 25;
  unknown = randomN[i].id;
  unknown2 = random(randomN[i].id);
  metabolicR = randomN[i].non_zero_number;
  stressV = randomN[i].decimal;
  stressL = randomN[i].digit;
  distanceV = randomN[i].positive;
  caloriesV = randomN[i].negative;
  stepV = randomN[i].positive / 2;
  // speedV = randomN[i].digit + 10;
  stroke(
    metabolicR + unknown / 50,
    100 - unknown2 / 1000,
    50 - unknown / 1000,
    1
  );
  strokeWeight(unknown / 1000);
  noFill();
  ellipse(
    400 + unknown / 1000,
    400 + unknown2 / 1000,
    300 + metabolicR + unknown / 100,
    300 + metabolicR + unknown2 / 50
  );
}

function drawHeart(i) {
  heartR = randomN[i].normal + 25;
  unknown = randomN[i].id;
  unknown2 = random(randomN[i].id);
  metabolicR = randomN[i].non_zero_number;
  stressV = randomN[i].decimal;
  stressL = randomN[i].digit;
  distanceV = randomN[i].positive;
  caloriesV = randomN[i].negative;
  stepV = randomN[i].positive / 2;
  // speedV = randomN[i].digit + 10;
  stroke(
    heartR * 4 + unknown / 200,
    100 - unknown / 1000,
    50 - unknown2 / 1000,
    1
  );
  strokeWeight(unknown / 2500);
  noFill();
  circle(
    heartR + unknown / 500 + 200,
    heartR + unknown2 / 500 + 200,
    heartR / 2 + unknown / 500
  );
}

function drawCalories(i) {
  heartR = randomN[i].normal + 25;
  unknown = randomN[i].id;
  unknown2 = random(randomN[i].id);
  metabolicR = randomN[i].non_zero_number;
  stressV = randomN[i].decimal;
  stressL = randomN[i].digit;
  distanceV = randomN[i].positive;
  caloriesV = randomN[i].negative / -10;
  stepV = randomN[i].positive / 2;
  // speedV = randomN[i].digit + 10;
  noFill();
  stroke(360 - caloriesV / 20, 100 - unknown / 1000, 100 - unknown2 / 100, 1);
  strokeWeight(unknown / 1000);
  point(100 + caloriesV, 120 + unknown / 10);
  point(100 + heartR * 7, 120 + unknown2 / 10);
  point(100 + metabolicR * 40, 130 + caloriesV);
  point(100 + stressV * 5, 120 + heartR * 3);
  point(100 + stressL * 30, 120 + metabolicR * 50);
  point(100 + distanceV / 18, 120 + stressV * 10);
  point(100 + unknown / 15, 120 + stressL * 10);
  point(100 + unknown2 / 14.5, 120 + distanceV / 10);
  point(100 + caloriesV / 2, 120 + distanceV / 5);
  point(100 + heartR * 5, 120 + stressL * 15);
  point(100 + metabolicR * 20, 120 + unknown / 8);
  point(100 + stressV * 8, 120 + caloriesV * 2);
  point(100 + stressL * 20, 120 + unknown2 / 5);
  point(100 + distanceV / 28, 120 + heartR * 13);
  point(100 + unknown / 20, 120 + stressV * 15);
  point(100 + unknown2 / 16, 120 + metabolicR * 60);
  point(100 + caloriesV, 120 + heartR * 8);
  point(100 + heartR * 7, 120 + metabolicR * 55);
  point(100 + metabolicR * 40, 120 + stressL * 12);
  point(100 + stressV * 5, 120 + unknown / 9);
  point(100 + stressL * 30, 120 + distanceV / 8);
  point(100 + distanceV / 18, 120 + unknown2 / 9);
  point(100 + unknown / 15, 120 + caloriesV * 1.5);
  point(100 + unknown2 / 14.5, 120 + stressV * 12);
  
  
  // console.log(caloriesV);
}

function drawStep(i) {
heartR = randomN[i].normal + 25;
  unknown = randomN[i].id;
  unknown2 = random(randomN[i].id);
  metabolicR = randomN[i].non_zero_number;
  stressV = randomN[i].decimal;
  stressL = randomN[i].digit;
  distanceV = randomN[i].positive;
  caloriesV = randomN[i].negative / -10;
  stepV = randomN[i].positive / 2;
  speedX = randomN[i].digit * 2;
  speedY = random(speedX);
  noFill();
  stroke(5 + stepV / 100 + unknown / 500, 100 - unknown / 1000, 100 - unknown2 / 100, 1);
  strokeWeight(unknown2 / 3000);
  triangle(530 + stepV / 200 - speedVx + unknown / 500, 175 + stepV / 200 + speedVy, 558 + stepV / 200 - speedVx + unknown2 / 500, 120 + stepV / 200 + speedVy, 586 + stepV / 200 - speedVx + unknown / unknown2, 175 + stepV / 200 + speedVy);
  speedVx += speedX * xD;
  speedVy += speedY * yD;
  if(dist(400, 400, 530 + stepV / 200 - speedVx + unknown / 500, 175 + stepV / 200 + speedVy) > 300) {
     xD *= -1;
    yD *= -1;
     }
  else if(dist(400, 400, 558 + stepV / 200 - speedVx + unknown2 / 500, 120 + stepV / 200 + speedVy) > 300) {
     yD *= -1;
    xD *= -1;
     }
  else if(dist(400, 400, 586 + stepV / 200 - speedVx + unknown / unknown2, 175 + stepV / 200 + speedVy) > 300) {
     yD *= -1;
    xD * -1;
     }
  // console.log(530 + stepV / 200 - speedVx + unknown / 500);
}
