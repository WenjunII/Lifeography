
let backgroundimg, petridishimg1, petridishimg2, signimg1, signimg2, signimg3, signimg4, signimg5, signimg6, signimg7, signimg8;
let area1, area2, area3, area4, area5, area6, area7, area8;
let bacarea1, bacarea2, bacarea3, bacarea4, bacarea5, bacarea6, bacarea7, bacarea8;
let bacterialx1, bacterialx2, bacterialx3, bacterialx4, bacterialx5, bacterialx6, bacterialx7, bacterialx8;
let bacterialy1, bacterialy2, bacterialy3, bacterialy4, bacterialy5, bacterialy6, bacterialy7, bacterialy8;
let randomr, randomg, randomb;
// let toggle_loop = false;
let myCanvas2;

function preload() {
    backgroundimg = loadImage('images/wenjuniihighschool/backgroundimg.png');
    petridishimg1 = loadImage('images/wenjuniihighschool/petri_dish.png');
    petridishimg2 = loadImage('images/wenjuniihighschool/petri_dish_2.png');
    signimg1 = loadImage('images/wenjuniihighschool/bac1.png');
    signimg2 = loadImage('images/wenjuniihighschool/bac2.png');
    signimg3 = loadImage('images/wenjuniihighschool/bac3.png');
    signimg4 = loadImage('images/wenjuniihighschool/bac4.png');
    signimg5 = loadImage('images/wenjuniihighschool/bac5.png');
    signimg6 = loadImage('images/wenjuniihighschool/bac6.png');
    signimg8 = loadImage('images/wenjuniihighschool/bac8.png');
}

function setup() {
    myCanvas2 = createCanvas(850, 454);
    myCanvas2.parent('phighschool2');
    image(backgroundimg, 0, 0);
    // backgroundimg.resize(850, 472);
    image(petridishimg1, 50, 103);
    push();
    tint(255, 110);
    image(petridishimg2, 54, 106);
    pop();
    image(petridishimg1, 255, 103);
    push();
    tint(255, 110);
    image(petridishimg2, 259, 106);
    pop();
    image(petridishimg1, 475, 103);
    push();
    tint(255, 110);
    image(petridishimg2, 479, 106);
    pop();
    image(petridishimg1, 685, 103);
    push();
    tint(255, 110);
    image(petridishimg2, 689, 106);
    pop();
    image(petridishimg1, 42, 285);
    push();
    tint(255, 110);
    image(petridishimg2, 46, 288);
    pop();
    image(petridishimg1, 265, 285);
    push();
    tint(255, 110);
    image(petridishimg2, 269, 288);
    pop();
    image(petridishimg1, 482, 284);
    push();
    tint(255, 110);
    image(petridishimg2, 486, 287);
    pop();
    image(petridishimg1, 685, 285);
    push();
    tint(255, 110);
    image(petridishimg2, 689, 288);
    pop();
    cursor('help');
    // noLoop();
};

function draw() {
    bacterialx1 = random(54, 182);
    bacterialy1 = random(106, 234);
    bacterialx2 = random(259, 387);
    bacterialy2 = random(106, 234);
    bacterialx3 = random(479, 607);
    bacterialy3 = random(106, 234);
    bacterialx4 = random(689, 817);
    bacterialy4 = random(106, 234);
    bacterialx5 = random(46, 174);
    bacterialy5 = random(288, 416);
    bacterialx6 = random(269, 397);
    bacterialy6 = random(288, 416);
    bacterialx7 = random(486, 614);
    bacterialy7 = random(288, 416);
    bacterialx8 = random(689, 817);
    bacterialy8 = random(288, 416);
    bacarea1 = dist(118, 170, bacterialx1, bacterialy1);
    bacarea2 = dist(323, 170, bacterialx2, bacterialy2);
    bacarea3 = dist(543, 170, bacterialx3, bacterialy3);
    bacarea4 = dist(753, 170, bacterialx4, bacterialy4);
    bacarea5 = dist(110, 352, bacterialx5, bacterialy5);
    bacarea6 = dist(333, 352, bacterialx6, bacterialy6);
    bacarea7 = dist(550, 352, bacterialx7, bacterialy7);
    bacarea8 = dist(753, 352, bacterialx8, bacterialy8);
    randomr = random(0, 255);
    randomg = random(0, 255);
    randomb = random(0, 255);
    if (bacarea1 <= 64) {
        stroke(255, 0, 0);
        strokeWeight(2);
        point(bacterialx1, bacterialy1);
        image(signimg1, 57, 154);
    }
    if (bacarea2 <= 64) {
        stroke(0, 0, 255);
        strokeWeight(2);
        point(bacterialx2, bacterialy2);
        image(signimg2, 265, 142);
    }
    if (bacarea3 <= 64) {
        stroke(0, 0, 0);
        strokeWeight(2);
        point(bacterialx3, bacterialy3);
        image(signimg3, 498, 148);
    }
    if (bacarea4 <= 64) {
        stroke(255, 255, 0);
        strokeWeight(2);
        point(bacterialx4, bacterialy4);
        image(signimg4, 728, 133);
    }
    if (bacarea5 <= 64) {
        stroke(0, 255, 0);
        strokeWeight(2);
        point(bacterialx5, bacterialy5);
        image(signimg5, 65, 320);
    }
    if (bacarea6 <= 64) {
        stroke(255, 255, 255);
        strokeWeight(2);
        point(bacterialx6, bacterialy6);
        image(signimg6, 272, 333);
    }
    if (bacarea7 <= 64) {
        stroke(randomr, randomg, randomb);
        strokeWeight(2);
        point(bacterialx7, bacterialy7);
    }
    if (bacarea8 <= 64) {
        stroke(255, 0, 255);
        strokeWeight(2);
        point(bacterialx8, bacterialy8);
        image(signimg8, 692, 334);
    }

};

// function mousePressed() {
//     area1 = dist(425, 227, mouseX, mouseY);
//     if (toggle_loop && area1 <= 450) {
//         noLoop();
//         toggle_loop = false;
//     } else if (area1 <= 450) {
//         loop();
//         toggle_loop = true;
//     }
// }
