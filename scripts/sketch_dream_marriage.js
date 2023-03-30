
var backgroundimg4;
var freeimg;
var rectopacity = 245;
var backopacity = 245;
// var s = 50;
var heartarea;
var rectmove = 0;
var toggle_loop = false;
let myCanvas;
const startButton = document.getElementById('startButton');

function setup() {
    myCanvas = createCanvas(850, 10630);
    myCanvas.parent('p5marriage');
    // p.background(255, 255, 255, 0.5);
    noLoop();
};

function loadImages() {
    return new Promise((resolve) => {
        backgroundimg4 = loadImage('images/wenjuniimarriage/ins_small.png', resolve);
    });
}

startButton.addEventListener('click', async () => {
    // Await the image loading before proceeding
    await loadImages();
    startButton.style.display = 'none';
    document.getElementById('previewimage').style.display = 'none';
    loop();
});

function draw() {
    // p.frameRate(5);
    cursor('pointer');
    image(backgroundimg4, 0, 0);
    noStroke();
    // fill(255, 255, 255, 0 + backopacity);
    // rect(0, 0, 850, 10630);
    backopacity = 0;
    // p.noStroke();
    fill(255, 255, 255, rectopacity);
    rect(0, 0, 850, 1.5 + rectmove);
    rectmove += 5;
}
