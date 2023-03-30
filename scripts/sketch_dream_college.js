
var backgroundimg3
var avatar1, avatar2;
var avatar1posx = 0;
var avatar1move = 0.1;
var avatar2op = 0;
var avatar2opchange = 1;
var avatarplayop = 255;
var avatarplayopchange = 1;
// var doorOpen = 0;
var ready = -1;
var endMsg = "";
var c;
let myCanvas;
let myVideo;
const startButton = document.getElementById('startButton');

function preload() {
    // backgroundimg3 = loadImage('images/wenjuniicollege/newworld.png');
    avatar1 = loadImage('images/wenjuniicollege/avatar.png');
    avatar2 = loadImage('images/wenjuniicollege/avatar2.png');
    myVideo = createVideo('videos/land.mp4');
}

function setup() {
    myCanvas = createCanvas(800, 800);
    myCanvas.parent('p5college');
    c = 'blue';
    noLoop();
};

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    myVideo.play();
    myVideo.loop();
    myVideo.volume(0);
    myVideo.hide();
    // myAudio2.play();
    // myAudio2.loop();
    loop();
});

function draw() {
    background(50, 50, 50);
    let getVideo = myVideo.get();
    image(getVideo, 70, 70, 660, 660);
    // image(backgroundimg3, 25, 25);
    image(avatar1, 30 + avatar1posx, 20);
    avatar1posx += avatar1move
    if (avatar1posx > 3) {
        avatar1move *= -1;
    } else if (avatar1posx < -3) {
        avatar1move *= -1;
    }
    push();
    tint(255, 255 + avatar2op);
    image(avatar2, 730, 650);
    avatar2op -= avatar2opchange;
    if (avatar2op < -255) {
        avatar2opchange *= -1;
    } else if (avatar2op > 0) {
        avatar2opchange *= -1;
    }
    pop();

    // Game
    // var d = 220;
    // Reset background
    if (mouseX > 621 && mouseX < 731 && mouseY > 681 && mouseY < 731) {
        background(50, 50, 50);
        // image(backgroundimg3, 25, 25);
        let getVideo = myVideo.get();
    image(getVideo, 70, 70, 660, 660);
        image(avatar1, 30 + avatar1posx, 20);
        avatar1posx += avatar1move
        if (avatar1posx > 3) {
            avatar1move *= -1;
        } else if (avatar1posx < -3) {
            avatar1move *= -1;
        }
        push();
        tint(255, 255 + avatar2op);
        image(avatar2, 730, 650);
        avatar2op -= avatar2opchange;
        if (avatar2op < -255) {
            avatar2opchange *= -1;
        } else if (avatar2op > 0) {
            avatar2opchange *= -1;
        }
        pop();
    }
    noStroke();

    // Entrance Box
    textSize(20);
    fill('green');
    rect(621, 681, 110, 50);
    fill('yellow');
    text("Entrance", 641, 715);

    // Exit Box
    fill('red');
    rect(69, 69, 60, 40);
    fill(255);
    text("Exit", 80, 95);

    // Obstacles and Walls
    fill(0, 0, 0, avatarplayop);
    // p.circle(p.mouseX, p.mouseY, 30);
    avatarplayop -= avatarplayopchange;
    if (avatarplayop < 0) {
        avatarplayopchange *= -1;
    } else if (avatarplayop > 255) {
        avatarplayopchange *= -1;
    }
    // Big Walls
    rect(160, 600, 571, 30);
    rect(160, 250, 30, 350);
    rect(69, 150, 560, 30);
    rect(430, 150, 30, 410);
    // End Maze
    rect(320, 10, 60, 100);
    rect(190, 105, 80, 10);
    rect(430, 105, 50, 10);
    rect(530, 105, 50, 10);
    // Bubble Run
    ellipse(560, 680, 30);
    ellipse(460, 650, 90);
    ellipse(330, 740, 150);
    ellipse(150, 650, 90);
    ellipse(300, 290, 150);
    ellipse(270, 450, 90);
    ellipse(330, 560, 90);
    ellipse(400, 420, 90);
    ellipse(500, 545, 40);
    ellipse(565, 500, 40);
    ellipse(600, 590, 40);
    ellipse(670, 550, 40);
    ellipse(630, 470, 40);
    ellipse(500, 460, 40);
    ellipse(710, 480, 40);
    ellipse(480, 365, 40);
    ellipse(545, 320, 40);
    ellipse(580, 410, 40);
    ellipse(650, 370, 40);
    ellipse(610, 290, 40);
    ellipse(480, 280, 40);
    ellipse(690, 300, 40);
    ellipse(550, 200, 80);
    ellipse(740, 200, 130);
    // Rect Run
    rect(50, 530, 70, 30);
    rect(110, 430, 60, 30);
    rect(30, 340, 90, 30);
    rect(110, 250, 60, 30);

    // Play
    if (mouseX > 621 && mouseX < 731 && mouseY > 681 && mouseY < 731) {
        ready = 1;
        // endMsg = "";
        cursor('none');
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        c = 'gold';
        endMsg = "There are 14 years to go. Take your time.";

        // Cursor
        noStroke();
        fill(0, 0, 0, avatarplayop);
        circle(mouseX, mouseY, 20);
        avatarplayop -= avatarplayopchange;
        if (avatarplayop < 0) {
            avatarplayopchange *= -1;
        } else if (avatarplayop > 255) {
            avatarplayopchange *= -1;
        }
    }

    if (ready == 1) {
        cursor('none');

        // Cursor
        noStroke();
        fill(0, 0, 0, avatarplayop);
        circle(mouseX, mouseY, 20);
        avatarplayop -= avatarplayopchange;
        if (avatarplayop < 0) {
            avatarplayopchange *= -1;
        } else if (avatarplayop > 255) {
            avatarplayopchange *= -1;
        }
    }

    if (ready == -1) {
        cursor('default');
    }

    if (ready == 0) {
        cursor('default');
    }

    // Win Scenario
    if (ready == 1 && mouseX > 69 && mouseX < 129 && mouseY > 69 && mouseY < 109) {
        textSize(60);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "It’s a long run. Enjoy!";
        c = 'pink';
    }

    // Opening message
    if (ready == -1) {
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        c = 'gold';
        endMsg = "There are 14 years to go. Take your time.";
    }

    // Lose Scenarios
    if (ready == 0) {
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // // Big Walls
    // p.rect(160,600, 571, 30);
    if (mouseX > 160 - 10 && mouseX < 731 + 10 && mouseY > 600 - 10 && mouseY < 630 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(160,250, 30, 350);
    if (mouseX > 160 - 10 && mouseX < 190 + 10 && mouseY > 250 - 10 && mouseY < 600 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(69,150, 560, 30);
    if (mouseX > 69 - 10 && mouseX < 659 + 10 && mouseY > 150 - 10 && mouseY < 180 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(430,150, 30, 410);
    if (mouseX > 430 - 10 && mouseX < 460 + 10 && mouseY > 150 - 10 && mouseY < 560 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // // End Maze
    // p.rect(320,10, 60, 100);
    if (mouseX > 320 - 10 && mouseX < 380 + 10 && mouseY > 10 - 10 && mouseY < 110 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(190,105, 80, 10);
    if (mouseX > 190 - 10 && mouseX < 270 + 10 && mouseY > 105 - 10 && mouseY < 115 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(430,105, 50, 10);
    if (mouseX > 430 - 10 && mouseX < 480 + 10 && mouseY > 105 - 10 && mouseY < 115 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(530,105, 50, 10);
    if (mouseX > 530 - 10 && mouseX < 580 + 10 && mouseY > 105 - 10 && mouseY < 115 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }

    // Outside the canvas
    if (mouseX > width - 70 - 10 || mouseX < 0 + 10 + 70 || mouseY > height - 10 - 70 || mouseY < 0 + 10 + 70) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // if(p.mouseX == 0 && p.mouseY == 0)
    //   ready = -1;

    //Rect Run
    // p.rect(50,530, 70, 30);
    if (mouseX > 50 - 10 && mouseX < 120 + 10 && mouseY > 530 - 10 && mouseY < 560 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(110,430, 60, 30);
    if (mouseX > 110 - 10 && mouseX < 170 + 10 && mouseY > 430 - 10 && mouseY < 460 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(30,340, 90, 30);
    if (mouseX > 30 - 10 && mouseX < 120 + 10 && mouseY > 340 - 10 && mouseY < 370 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.rect(110, 250, 60, 30);
    if (mouseX > 110 - 10 && mouseX < 170 + 10 && mouseY > 250 - 10 && mouseY < 280 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }


    // // Bubble Run
    // p.ellipse(560, 680, 30);
    if (dist(560, 680, mouseX, mouseY) < 15 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(460,650, 90);
    if (dist(460, 650, mouseX, mouseY) < 45 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(330,740, 150);
    if (dist(330, 740, mouseX, mouseY) < 75 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(150, 650, 90);
    if (dist(150, 650, mouseX, mouseY) < 45 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(300, 290, 150);
    if (dist(300, 290, mouseX, mouseY) < 75 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(270, 450, 90);
    if (dist(270, 450, mouseX, mouseY) < 45 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(330, 560, 90);
    if (dist(330, 560, mouseX, mouseY) < 45 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(400, 420, 90);
    if (dist(400, 420, mouseX, mouseY) < 45 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(500, 545, 40);
    if (dist(500, 545, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(565, 500, 40);
    if (dist(565, 500, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(600, 590, 40);
    if (dist(600, 590, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(670, 550, 40);
    if (dist(670, 550, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(630, 470, 40);
    if (dist(630, 470, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(500, 460, 40);
    if (dist(500, 460, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(710, 480, 40);
    if (dist(610, 480, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(480, 365, 40);
    if (dist(480, 365, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(545, 320, 40);
    if (dist(545, 320, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(580, 410, 40);
    if (dist(580, 410, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(650, 370, 40);
    if (dist(650, 370, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(610, 290, 40);
    if (dist(610, 290, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(480, 280, 40);
    if (dist(480, 280, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(690, 300, 40);
    if (dist(690, 300, mouseX, mouseY) < 20 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(550, 200, 80);
    if (dist(550, 200, mouseX, mouseY) < 40 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }
    // p.ellipse(740, 200, 130);
    if (dist(740, 200, mouseX, mouseY) < 65 + 10) {
        ready = 0;
        textSize(30);
        stroke(1);
        fill(c);
        text(endMsg, width / 2 - 250, height / 2);
        endMsg = "Oops! Again?";
        c = 'red'
    }


}