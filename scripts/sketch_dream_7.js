
let bimg1, bimg2, bimg3, bimg4, bimg5, bimg6, bimg7, bimg8, bimg9, bimg10, bimg11, bimg12, bimg13, bimg14, bimg15, bimg16, bimg17, bimg18, bimg19, bimg20, bimg21, bimg22, bimg23, bimg24;
let bpositionX1 = 0, bpositionY1, bpositionX2 = 0, bpositionY2, bpositionX3 = 0, bpositionY3, bpositionX4 = 0, bpositionY4, bpositionX5 = 0, bpositionY5, bpositionX6 = 0, bpositionY6, bpositionX7 = 0, bpositionY7, bpositionX8 = 0, bpositionY8, bpositionX9 = 0, bpositionY9, bpositionX10 = 0, bpositionY10, bpositionX11 = 0, bpositionY11, bpositionX12 = 0, bpositionY12, bpositionX13 = 0, bpositionY13, bpositionX14 = 0, bpositionY14, bpositionX15 = 0, bpositionY15, bpositionX16 = 0, bpositionY16, bpositionX17 = 0, bpositionY17, bpositionX18 = 0, bpositionY18, bpositionX19 = 0, bpositionY19, bpositionX20 = 0, bpositionY20, bpositionX21 = 0, bpositionY21, bpositionX22 = 0, bpositionY22, bpositionX23 = 0, bpositionY23, bpositionX24 = 0, bpositionY24;
let ynoise = 0;
let ynoise1 = 0, ynoise4 = 0, ynoise5 = 0, ynoise6 = 0, ynoise7 = 0, ynoise8 = 0, ynoise9 = 0, ynoise10 = 0, ynoise11 = 0, ynoise12 = 0, ynoise13 = 0, ynoise14 = 0, ynoise15 = 0, ynoise16 = 0, ynoise17 = 0, ynoise18 = 0, ynoise19 = 0, ynoise20 = 0, ynoise21 = 0, ynoise22 = 0, ynoise23 = 0, ynoise24 = 0;
let myVideos2;
let loadedVideosCount2 = 0;
let myCanvas2;
const startButton2 = document.getElementById('startButton2');
let myAudio2;
let volumeSlide2;


function preload() {
    bimg1 = loadImage('images/wenjunii7/cane.png');
    bimg4 = loadImage('images/wenjunii7/cane.png');
    bimg5 = loadImage('images/wenjunii7/cane.png');
    bimg6 = loadImage('images/wenjunii7/cane.png');
    bimg7 = loadImage('images/wenjunii7/cane.png');
    bimg8 = loadImage('images/wenjunii7/cane.png');
    bimg9 = loadImage('images/wenjunii7/cane.png');
    bimg10 = loadImage('images/wenjunii7/cane.png');
    bimg11 = loadImage('images/wenjunii7/cane.png');
    bimg12 = loadImage('images/wenjunii7/cane.png');
    bimg13 = loadImage('images/wenjunii7/cane.png');
    bimg14 = loadImage('images/wenjunii7/cane.png');
    bimg15 = loadImage('images/wenjunii7/cane.png');
    bimg16 = loadImage('images/wenjunii7/cane.png');
    bimg17 = loadImage('images/wenjunii7/cane.png');
    bimg18 = loadImage('images/wenjunii7/cane.png');
    bimg19 = loadImage('images/wenjunii7/cane.png');
    bimg20 = loadImage('images/wenjunii7/cane.png');
    bimg21 = loadImage('images/wenjunii7/cane.png');
    bimg22 = loadImage('images/wenjunii7/cane.png');
    bimg23 = loadImage('images/wenjunii7/cane.png');
    bimg24 = loadImage('images/wenjunii7/cane.png');
    bimg2 = loadImage('images/wenjunii7/wenjunii7new.png');
    bimg3 = loadImage('images/wenjunii7/grandmanew.png');
    myVideos2 = createVideo('videos/home.mp4');
    myAudio2 = loadSound('audios/cry.mp3');
}

function setup() {
    myCanvas2 = createCanvas(800, 667);
    myCanvas2.parent('p57');
    volumeSlider2 = document.getElementById('volumeSlider2');
    volumeSlider2.addEventListener('input', adjustVolume2);
    frameRate(10);
    noLoop();
    cursor('grab');
};

startButton2.addEventListener('click', () => {
    startButton2.style.display = 'none';
    myVideos2.play();
    myVideos2.loop();
    myVideos2.volume(0);
    myVideos2.hide();
    myAudio2.play();
    myAudio2.loop();
    loop();
});

function adjustVolume2() {
    const normalizedVolume = volumeSlider2.value / 100;
    myAudio2.setVolume(normalizedVolume);
}

function draw() {
    background(25, 25, 25);
    getVideo = myVideos2.get();
    image(getVideo, 0, 0, 800, 667);
    image(bimg1, 0 + bpositionX1, 50 + bpositionY1);
    image(bimg4, 0 + bpositionX4, 80 + bpositionY4);
    image(bimg5, 0 + bpositionX5, 120 + bpositionY5);
    image(bimg6, 0 + bpositionX6, 180 + bpositionY6);
    image(bimg7, 0 + bpositionX7, 220 + bpositionY7);
    image(bimg8, 0 + bpositionX8, 260 + bpositionY8);
    image(bimg9, 0 + bpositionX9, 310 + bpositionY9);
    image(bimg10, 0 + bpositionX10, 340 + bpositionY10);
    image(bimg11, 0 + bpositionX11, 370 + bpositionY11);
    image(bimg12, 0 + bpositionX12, 400 + bpositionY12);
    image(bimg13, 0 + bpositionX13, 440 + bpositionY13);
    image(bimg14, 0 + bpositionX14, 480 + bpositionY14);
    image(bimg15, 0 + bpositionX15, 510 + bpositionY15);
    image(bimg16, 0 + bpositionX16, 540 + bpositionY16);
    image(bimg17, 0 + bpositionX17, 580 + bpositionY17);
    image(bimg18, 0 + bpositionX18, 600 + bpositionY18);
    image(bimg19, 0 + bpositionX19, 630 + bpositionY19);
    image(bimg20, 0 + bpositionX20, 650 + bpositionY20);
    image(bimg21, 0 + bpositionX21, 690 + bpositionY21);
    image(bimg22, 0 + bpositionX22, 710 + bpositionY22);
    image(bimg23, 0 + bpositionX23, 730 + bpositionY23);
    image(bimg24, 0 + bpositionX24, 750 + bpositionY24);
    image(bimg2, 700 + bpositionX2, 0 + bpositionY2);
    image(bimg3, 550 + bpositionX3, 0 + bpositionY3);
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
    bpositionY1 = map(noise(ynoise1), 0, 1, 0, height);
    bpositionX4 += 1.5;
    bpositionY4 = map(noise(ynoise4), 0, 1, 0, height);
    bpositionX5 += 1.3;
    bpositionY5 = map(noise(ynoise5), 0, 1, 0, height);
    bpositionX6 += 1.9;
    bpositionY6 = map(noise(ynoise6), 0, 1, 0, height);
    bpositionX7 += 0.8;
    bpositionY7 = map(noise(ynoise7), 0, 1, 0, height);
    bpositionX8 += 0.4;
    bpositionY8 = map(noise(ynoise8), 0, 1, 0, height);
    bpositionX9 += 1.7;
    bpositionY9 = map(noise(ynoise9), 0, 1, 0, height);
    bpositionX10 += 2;
    bpositionY10 = map(noise(ynoise10), 0, 1, 0, height);
    bpositionX11 += 0.9;
    bpositionY11 = map(noise(ynoise11), 0, 1, 0, height);
    bpositionX12 += 0.6;
    bpositionY12 = map(noise(ynoise12), 0, 1, 0, height);
    bpositionX13 += 1.6;
    bpositionY13 = map(noise(ynoise13), 0, 1, 0, height);
    bpositionX14 += 2.8;
    bpositionY14 = map(noise(ynoise14), 0, 1, 0, height);
    bpositionX15 += 0.85;
    bpositionY15 = map(noise(ynoise15), 0, 1, 0, height);
    bpositionX16 += 0.45;
    bpositionY16 = map(noise(ynoise16), 0, 1, 0, height);
    bpositionX17 += 1.85;
    bpositionY17 = map(noise(ynoise17), 0, 1, 0, height);
    bpositionX18 += 2.55;
    bpositionY18 = map(noise(ynoise18), 0, 1, 0, height);
    bpositionX19 += 1.95;
    bpositionY19 = map(noise(ynoise19), 0, 1, 0, height);
    bpositionX20 += 0.95;
    bpositionY20 = map(noise(ynoise20), 0, 1, 0, height);
    bpositionX21 += 2.3;
    bpositionY21 = map(noise(ynoise21), 0, 1, 0, height);
    bpositionX22 += 0.65;
    bpositionY22 = map(noise(ynoise22), 0, 1, 0, height);
    bpositionX23 += 1.05;
    bpositionY23 = map(noise(ynoise23), 0, 1, 0, height);
    bpositionX24 += 2.85;
    bpositionY24 = map(noise(ynoise24), 0, 1, 0, height);
    bpositionX2 = random(-0.4, 0.4);
    bpositionY2 = map(noise(ynoise), 0, 1, 0, height);
    bpositionX3 = random(-0, 0);
    bpositionY3 = mouseY;
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
    if (bpositionX1 + 100 >= 600 && bpositionY1 >= bpositionY3 && bpositionY1 <= bpositionY3 + 250) {
        bpositionX1 = 0;
    } else if (bpositionX1 + 100 >= 800 && bpositionY1 >= bpositionY2 && bpositionY1 <= bpositionY2 + 165) {
        bpositionX1 = 0;
    } else if (bpositionX1 + 100 >= width) {
        bpositionX1 = 0;
    } else if (bpositionX4 + 100 >= 600 && bpositionY4 >= bpositionY3 && bpositionY4 <= bpositionY3 + 250) {
        bpositionX4 = 0;
    } else if (bpositionX4 + 100 >= 800 && bpositionY4 >= bpositionY2 && bpositionY4 <= bpositionY2 + 165) {
        bpositionX4 = 0;
    } else if (bpositionX4 + 100 >= width) {
        bpositionX4 = 0;
    } else if (bpositionX5 + 100 >= 600 && bpositionY5 >= bpositionY3 && bpositionY5 <= bpositionY3 + 250) {
        bpositionX5 = 0;
    } else if (bpositionX5 + 100 >= 800 && bpositionY5 >= bpositionY2 && bpositionY5 <= bpositionY2 + 165) {
        bpositionX5 = 0;
    } else if (bpositionX5 + 100 >= width) {
        bpositionX5 = 0
    } else if (bpositionX6 + 100 >= 600 && bpositionY6 >= bpositionY3 && bpositionY6 <= bpositionY3 + 250) {
        bpositionX6 = 0;
    } else if (bpositionX6 + 100 >= 800 && bpositionY6 >= bpositionY2 && bpositionY6 <= bpositionY2 + 165) {
        bpositionX6 = 0;
    } else if (bpositionX6 + 100 >= width) {
        bpositionX6 = 0;
    } else if (bpositionX7 + 100 >= 600 && bpositionY7 >= bpositionY3 && bpositionY7 <= bpositionY3 + 250) {
        bpositionX7 = 0;
    } else if (bpositionX7 + 100 >= 800 && bpositionY7 >= bpositionY2 && bpositionY7 <= bpositionY2 + 165) {
        bpositionX7 = 0;
    } else if (bpositionX7 + 100 >= width) {
        bpositionX7 = 0;
    } else if (bpositionX8 + 100 >= 600 && bpositionY8 >= bpositionY3 && bpositionY8 <= bpositionY3 + 250) {
        bpositionX8 = 0;
    } else if (bpositionX8 + 100 >= 800 && bpositionY8 >= bpositionY2 && bpositionY8 <= bpositionY2 + 165) {
        bpositionX8 = 0;
    } else if (bpositionX8 + 100 >= width) {
        bpositionX8 = 0;
    } else if (bpositionX9 + 100 >= 600 && bpositionY9 >= bpositionY3 && bpositionY9 <= bpositionY3 + 250) {
        bpositionX9 = 0;
    } else if (bpositionX9 + 100 >= 800 && bpositionY9 >= bpositionY2 && bpositionY9 <= bpositionY2 + 165) {
        bpositionX9 = 0;
    } else if (bpositionX9 + 100 >= width) {
        bpositionX9 = 0;
    } else if (bpositionX10 + 100 >= 600 && bpositionY10 >= bpositionY3 && bpositionY10 <= bpositionY3 + 250) {
        bpositionX10 = 0;
    } else if (bpositionX10 + 100 >= 800 && bpositionY10 >= bpositionY2 && bpositionY10 <= bpositionY2 + 165) {
        bpositionX10 = 0;
    } else if (bpositionX10 + 100 >= width) {
        bpositionX10 = 0;
    } else if (bpositionX11 + 100 >= 600 && bpositionY11 >= bpositionY3 && bpositionY11 <= bpositionY3 + 250) {
        bpositionX11 = 0;
    } else if (bpositionX11 + 100 >= 800 && bpositionY11 >= bpositionY2 && bpositionY11 <= bpositionY2 + 165) {
        bpositionX11 = 0;
    } else if (bpositionX11 + 100 >= width) {
        bpositionX11 = 0;
    } else if (bpositionX12 + 100 >= 600 && bpositionY12 >= bpositionY3 && bpositionY12 <= bpositionY3 + 250) {
        bpositionX12 = 0;
    } else if (bpositionX12 + 100 >= 800 && bpositionY12 >= bpositionY2 && bpositionY12 <= bpositionY2 + 165) {
        bpositionX12 = 0;
    } else if (bpositionX12 + 100 >= width) {
        bpositionX12 = 0;
    } else if (bpositionX13 + 100 >= 600 && bpositionY13 >= bpositionY3 && bpositionY13 <= bpositionY3 + 250) {
        bpositionX13 = 0;
    } else if (bpositionX13 + 100 >= 800 && bpositionY13 >= bpositionY2 && bpositionY13 <= bpositionY2 + 165) {
        bpositionX13 = 0;
    } else if (bpositionX13 + 100 >= width) {
        bpositionX13 = 0;
    } else if (bpositionX14 + 100 >= 600 && bpositionY14 >= bpositionY3 && bpositionY14 <= bpositionY3 + 250) {
        bpositionX14 = 0;
    } else if (bpositionX14 + 100 >= 800 && bpositionY14 >= bpositionY2 && bpositionY14 <= bpositionY2 + 165) {
        bpositionX14 = 0;
    } else if (bpositionX14 + 100 >= width) {
        bpositionX14 = 0;
    } else if (bpositionX15 + 100 >= 600 && bpositionY15 >= bpositionY3 && bpositionY15 <= bpositionY3 + 250) {
        bpositionX15 = 0;
    } else if (bpositionX15 + 100 >= 800 && bpositionY15 >= bpositionY2 && bpositionY15 <= bpositionY2 + 165) {
        bpositionX15 = 0;
    } else if (bpositionX15 + 100 >= width) {
        bpositionX15 = 0;
    } else if (bpositionX16 + 100 >= 600 && bpositionY16 >= bpositionY3 && bpositionY16 <= bpositionY3 + 250) {
        bpositionX16 = 0;
    } else if (bpositionX16 + 100 >= 800 && bpositionY16 >= bpositionY2 && bpositionY16 <= bpositionY2 + 165) {
        bpositionX16 = 0;
    } else if (bpositionX16 + 100 >= width) {
        bpositionX16 = 0;
    } else if (bpositionX17 + 100 >= 600 && bpositionY17 >= bpositionY3 && bpositionY17 <= bpositionY3 + 250) {
        bpositionX17 = 0;
    } else if (bpositionX17 + 100 >= 800 && bpositionY17 >= bpositionY2 && bpositionY17 <= bpositionY2 + 165) {
        bpositionX17 = 0;
    } else if (bpositionX17 + 100 >= width) {
        bpositionX17 = 0;
    } else if (bpositionX18 + 100 >= 600 && bpositionY18 >= bpositionY3 && bpositionY18 <= bpositionY3 + 250) {
        bpositionX18 = 0;
    } else if (bpositionX18 + 100 >= 800 && bpositionY18 >= bpositionY2 && bpositionY18 <= bpositionY2 + 165) {
        bpositionX18 = 0;
    } else if (bpositionX18 + 100 >= width) {
        bpositionX18 = 0;
    } else if (bpositionX19 + 100 >= 600 && bpositionY19 >= bpositionY3 && bpositionY19 <= bpositionY3 + 250) {
        bpositionX19 = 0;
    } else if (bpositionX19 + 100 >= 800 && bpositionY19 >= bpositionY2 && bpositionY19 <= bpositionY2 + 165) {
        bpositionX19 = 0;
    } else if (bpositionX19 + 100 >= width) {
        bpositionX19 = 0;
    } else if (bpositionX20 + 100 >= 600 && bpositionY20 >= bpositionY3 && bpositionY20 <= bpositionY3 + 250) {
        bpositionX20 = 0;
    } else if (bpositionX20 + 100 >= 800 && bpositionY20 >= bpositionY2 && bpositionY20 <= bpositionY2 + 165) {
        bpositionX20 = 0;
    } else if (bpositionX20 + 100 >= width) {
        bpositionX20 = 0;
    } else if (bpositionX21 + 100 >= 600 && bpositionY21 >= bpositionY3 && bpositionY21 <= bpositionY3 + 250) {
        bpositionX21 = 0;
    } else if (bpositionX21 + 100 >= 800 && bpositionY21 >= bpositionY2 && bpositionY21 <= bpositionY2 + 165) {
        bpositionX21 = 0;
    } else if (bpositionX21 + 100 >= width) {
        bpositionX21 = 0;
    } else if (bpositionX22 + 100 >= 600 && bpositionY22 >= bpositionY3 && bpositionY22 <= bpositionY3 + 250) {
        bpositionX22 = 0;
    } else if (bpositionX22 + 100 >= 800 && bpositionY22 >= bpositionY2 && bpositionY22 <= bpositionY2 + 165) {
        bpositionX22 = 0;
    } else if (bpositionX22 + 100 >= width) {
        bpositionX22 = 0;
    } else if (bpositionX23 + 100 >= 600 && bpositionY23 >= bpositionY3 && bpositionY23 <= bpositionY3 + 250) {
        bpositionX23 = 0;
    } else if (bpositionX23 + 100 >= 800 && bpositionY23 >= bpositionY2 && bpositionY23 <= bpositionY2 + 165) {
        bpositionX23 = 0;
    } else if (bpositionX23 + 100 >= width) {
        bpositionX23 = 0;
    } else if (bpositionX24 + 100 >= 600 && bpositionY24 >= bpositionY3 && bpositionY24 <= bpositionY3 + 250) {
        bpositionX24 = 0;
    } else if (bpositionX24 + 100 >= 800 && bpositionY24 >= bpositionY2 && bpositionY24 <= bpositionY2 + 165) {
        bpositionX24 = 0;
    } else if (bpositionX24 + 100 >= width) {
        bpositionX24 = 0;
    }
};