const highschool2 = (p) => {
    let backgroundimg, petridishimg1, petridishimg2, signimg1, signimg2, signimg3, signimg4, signimg5, signimg6, signimg7, signimg8;
    let area1, area2, area3, area4, area5, area6, area7, area8;
    let bacarea1, bacarea2, bacarea3, bacarea4, bacarea5, bacarea6, bacarea7, bacarea8;
    let bacterialx1, bacterialx2, bacterialx3, bacterialx4, bacterialx5, bacterialx6, bacterialx7, bacterialx8;
    let bacterialy1, bacterialy2, bacterialy3, bacterialy4, bacterialy5, bacterialy6, bacterialy7, bacterialy8;
    let randomr, randomg, randomb;
    // let toggle_loop = false;
    let myCanvas2;
    const startButton2 = document.getElementById('startButton2');
    // let myVideos2;

    p.preload = function () {
        backgroundimg = p.loadImage('images/wenjuniihighschool/backgroundimg2.png');
        petridishimg1 = p.loadImage('images/wenjuniihighschool/petri_dish.png');
        petridishimg2 = p.loadImage('images/wenjuniihighschool/petri_dish_2.png');
        signimg1 = p.loadImage('images/wenjuniihighschool/bac1.png');
        signimg2 = p.loadImage('images/wenjuniihighschool/bac2.png');
        signimg3 = p.loadImage('images/wenjuniihighschool/bac3.png');
        signimg4 = p.loadImage('images/wenjuniihighschool/bac4.png');
        signimg5 = p.loadImage('images/wenjuniihighschool/bac5.png');
        signimg6 = p.loadImage('images/wenjuniihighschool/bac6.png');
        signimg8 = p.loadImage('images/wenjuniihighschool/bac8.png');
        // myVideos2 = loadVideo('videos/exam.mp4');
    }
    p.setup = function () {
        p.createCanvas(850, 454);
        // myCanvas2.parent('phighschool2');
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

    startButton2.addEventListener('click', () => {
        startButton2.style.display = 'none';
        p.loop();
    });

    p.draw = function () {
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
};

let phighschool2 = new p5(highschool2, 'phighschool2');