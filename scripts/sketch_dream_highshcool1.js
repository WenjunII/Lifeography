
let backgroundimg2
let capture;
let myCanvas;
let bottleimg1, bottleimg2, bottleimg3;
let dotSize = 1;
let spacing = 1.5;
let numWidth = dotSize * 5 + spacing * 5;
let numHeight = dotSize * 3 + spacing * 3;
let numGroups = 60;
const startButton = document.getElementById('startButton');
let myAudio;
let volumeSlide;
let speedSlider;
let myVideos;

function preload() {
    backgroundimg2 = loadImage('images/wenjuniihighschool/bacteria3.png');
    bottleimg1 = loadImage('images/wenjuniihighschool/bacteria2_1_2_2.png');
    bottleimg2 = loadImage('images/wenjuniihighschool/bacteria2_2_2_2.png');
    bottleimg3 = loadImage('images/wenjuniihighschool/bacteria2_3_2_2.png');
    myVideos = createVideo('videos/score.mp4');
}

function setup() {
    myCanvas = createCanvas(850, 499);
    myCanvas.parent('phighschool1');
    capture = createCapture(VIDEO);
    capture.size(205, 154);
    capture.hide();
    frameRate(1);
    volumeSlider = select('#volumeSlider');
    speedSlider = select('#speedSlider');
    myAudio = select('#myAudio');
    myAudio.elt.volume = volumeSlider.value();
    myAudio.elt.playbackRate = speedSlider.value();
    volumeSlider.input(onVolumeChange);
    speedSlider.input(onSpeedChange);
    noLoop();
};

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    myVideos.play();
    myVideos.loop();
    myVideos.volume(0);
    myVideos.hide();
    myAudio.play();
    myAudio.loop();
    loop();
});

function onVolumeChange() {
    let volume = volumeSlider.value();
    myAudio.elt.volume = volume;
}

function onSpeedChange() {
    let speed = speedSlider.value();
    myAudio.elt.playbackRate = speed;
}

function draw() {
    getVideo = myVideos.get();
    image(getVideo, 0, 0, 850, 499);
    image(bottleimg1, 50, 25);
    image(bottleimg2, 300, 25);
    image(bottleimg3, 560, 25);
    for (let i = 0; i < numGroups; i++) {
        let randNumber = String(floor(random(500, 700)));

        let x = floor(random(0, 850 - numWidth * 4));
        let y = floor(random(0, 499 - numHeight));

        for (let j = 0; j < 4; j++) {
            if (randNumber[j] !== undefined) {
                let xPos = x + j * (numWidth + spacing);
                drawDotNumber(randNumber[j], xPos, y);
            }
        }
    }
    capture.loadPixels();
    var stepSize = floor(map(2, 0, width, 5, 40));
    for (var x = 0; x < capture.width; x += stepSize) {
        for (var y = 0; y < capture.height; y += stepSize) {
            var index = ((y * capture.width) + x) * 4;
            var redVal = capture.pixels[index];
            var greenVal = capture.pixels[index + 1];
            var blueVal = capture.pixels[index + 2];
            push();
            translate(55, 65);
            noStroke();
            fill(redVal, 2 * greenVal, blueVal, 10);
            circle(x, y, stepSize / 1.5);
            pop();
            push();
            translate(323, 65);
            noStroke();
            fill(redVal, 2 * greenVal, blueVal / 2, 10);
            circle(x, y, stepSize / 1.5);
            pop();
            push();
            translate(595, 65);
            noStroke();
            fill(2 * redVal, greenVal, blueVal / 2, 10);
            circle(x, y, stepSize / 1.5);
            pop();
        }
    }
}

function drawDotNumber(num, x, y) {
    let dotMatrix = [
        '11111 10001 10001 10001 11111', // 0
        '00100 01100 00100 00100 11111', // 1
        '11111 00001 11111 10000 11111', // 2
        '11111 00001 11111 00001 11111', // 3
        '10001 10001 11111 00001 00001', // 4
        '11111 10000 11111 00001 11111', // 5
        '11111 10000 11111 10001 11111', // 6
        '11111 00001 00010 00100 01000', // 7
        '11111 10001 11111 10001 11111', // 8
        '11111 10001 11111 00001 11111'  // 9
    ];

    if (!num || num.trim() === '') {
        console.error('Invalid input:', num);
        return;
    }

    let index = parseInt(num);

    if (isNaN(index) || index < 0 || index >= dotMatrix.length) {
        console.error('Invalid index:', index);
        return;
    }

    let matrix = dotMatrix[index].split(' ').map(row => row.split(''));

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row] && matrix[row][col] === '1') {
                colorMode(HSL);
                fill('RED');
                rect(x + col * (dotSize + spacing), y + row * (dotSize + spacing), dotSize, dotSize);
            }
        }
    }
}