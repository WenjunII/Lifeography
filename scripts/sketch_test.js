

//Sketch Seven
var maze = function( p ) { // p could be any variable name
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

  p.preload = function() {
    backgroundimg3 = p.loadImage('images/wenjuniicollege/newworld.png');
    avatar1 = p.loadImage('images/wenjuniicollege/avatar.png');
    avatar2 = p.loadImage('images/wenjuniicollege/avatar2.png');
  }
    
  p.setup = function() {
    p.createCanvas(800, 800);
    c = 'blue';
  };

  p.draw = function() {
    p.background(50, 50, 50);
    p.image(backgroundimg3, 25, 25);
    p.image(avatar1, 30 + avatar1posx, 20);
    avatar1posx += avatar1move
    if (avatar1posx > 3) {
      avatar1move *= -1;
    } else if (avatar1posx < -3) {
      avatar1move *= -1;
    }
    p.push();
    p.tint(255, 255 + avatar2op);
    p.image(avatar2, 730, 650);
    avatar2op -= avatar2opchange;
    if (avatar2op < -255) {
      avatar2opchange *= -1;
    } else if (avatar2op > 0) {
      avatar2opchange *= -1;
    }
    p.pop();

    // Game
    // var d = 220;
    // Reset background
    if(p.mouseX > 621 && p.mouseX < 731 && p.mouseY > 681 && p.mouseY < 731) {
      p.background(50, 50, 50);
      p.image(backgroundimg3, 25, 25);
      p.image(avatar1, 30 + avatar1posx, 20);
    avatar1posx += avatar1move
    if (avatar1posx > 3) {
      avatar1move *= -1;
    } else if (avatar1posx < -3) {
      avatar1move *= -1;
    }
    p.push();
    p.tint(255, 255 + avatar2op);
    p.image(avatar2, 730, 650);
    avatar2op -= avatar2opchange;
    if (avatar2op < -255) {
      avatar2opchange *= -1;
    } else if (avatar2op > 0) {
      avatar2opchange *= -1;
    }
    p.pop();
    }
    p.noStroke();
    
    // Entrance Box
    p.textSize(20);
    p.fill('green');
    p.rect(621, 681, 110, 50);
    p.fill('yellow');
    p.text("Entrance", 641, 715);
    
    // Exit Box
    p.fill('red');
    p.rect(69,69, 60, 40);
    p.fill(255);
    p.text("Exit", 80, 95);

    // Obstacles and Walls
    p.fill(0, 0, 0, avatarplayop);
    // p.circle(p.mouseX, p.mouseY, 30);
    avatarplayop -= avatarplayopchange;
    if (avatarplayop < 0) {
      avatarplayopchange *= -1;
    } else if (avatarplayop > 255) {
      avatarplayopchange *= -1;
    }
    // Big Walls
    p.rect(160,600, 571, 30);
    p.rect(160,250, 30, 350);
    p.rect(69,150, 560, 30);
    p.rect(430,150, 30, 410);
    // End Maze
    p.rect(320,10, 60, 100);
    p.rect(190,105, 80, 10);
    p.rect(430,105, 50, 10);
    p.rect(530,105, 50, 10);
    // Bubble Run
    p.ellipse(560,680, 30);
    p.ellipse(460,650, 90);
    p.ellipse(330,740, 150);
    p.ellipse(150, 650, 90);
    p.ellipse(300, 290, 150);
    p.ellipse(270, 450, 90);
    p.ellipse(330, 560, 90);
    p.ellipse(400, 420, 90);
    p.ellipse(500, 545, 40);
    p.ellipse(565, 500, 40);
    p.ellipse(600, 590, 40);
    p.ellipse(670, 550, 40);
    p.ellipse(630, 470, 40);
    p.ellipse(500, 460, 40);
    p.ellipse(710, 480, 40);
    p.ellipse(480, 365, 40);
    p.ellipse(545, 320, 40);
    p.ellipse(580, 410, 40);
    p.ellipse(650, 370, 40);
    p.ellipse(610, 290, 40);
    p.ellipse(480, 280, 40);
    p.ellipse(690, 300, 40);
    p.ellipse(550, 200, 80);
    p.ellipse(740, 200, 130);
    // Rect Run
    p.rect(50,530, 70, 30);
    p.rect(110,430, 60, 30);
    p.rect(30,340, 90, 30);
    p.rect(110, 250, 60, 30);

    // Play
    if(p.mouseX > 621 && p.mouseX < 731 && p.mouseY > 681 && p.mouseY < 731) {
      ready = 1;
      // endMsg = "";
      p.cursor('none');
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      c = 'gold';
      endMsg = "There are 14 years to go. Take your time.";

      // Cursor
      p.noStroke();
      p.fill(0, 0, 0, avatarplayop);
      p.circle(p.mouseX, p.mouseY, 30);
      avatarplayop -= avatarplayopchange;
      if (avatarplayop < 0) {
        avatarplayopchange *= -1;
      } else if (avatarplayop > 255) {
        avatarplayopchange *= -1;
      }
    }

    if(ready == 1) {
      p.cursor('none');

      // Cursor
      p.noStroke();
      p.fill(0, 0, 0, avatarplayop);
      p.circle(p.mouseX, p.mouseY, 30);
      avatarplayop -= avatarplayopchange;
      if (avatarplayop < 0) {
        avatarplayopchange *= -1;
      } else if (avatarplayop > 255) {
        avatarplayopchange *= -1;
      }
    }

    if(ready == -1) {
      p.cursor('default');
    }

    if(ready == 0) {
      p.cursor('default');
    }

    // Win Scenario
    if(ready == 1 && p.mouseX > 69 && p.mouseX < 129 && p.mouseY > 69 && p.mouseY < 109) {
        p.textSize(60);
        p.stroke(1);
        p.fill(c);
        p.text(endMsg, p.width/2-250, p.height/2);
        endMsg = "It’s a long run. Enjoy!";
        c = 'pink';
      }

      // Opening message
    if(ready == -1) {
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      c = 'gold';
      endMsg = "There are 14 years to go. Take your time.";
    }
  	
      // Lose Scenarios
      if(ready == 0) {
        p.textSize(30);
        p.stroke(1);
        p.fill(c);
        p.text(endMsg, p.width/2-250, p.height/2);
        endMsg = "Opps! Again?";
        c = 'red'
      }
    // // Big Walls
    // p.rect(160,600, 571, 30);
    if(p.mouseX > 160 - 15 && p.mouseX < 731 + 15 && p.mouseY > 600 - 15 && p.mouseY < 630 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(160,250, 30, 350);
    if(p.mouseX > 160 - 15 && p.mouseX < 190 + 15 && p.mouseY > 250 - 15 && p.mouseY < 600 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(69,150, 560, 30);
    if(p.mouseX > 69 - 15 && p.mouseX < 659 + 15 && p.mouseY > 150 - 15 && p.mouseY < 180 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(430,150, 30, 410);
    if(p.mouseX > 430 - 15 && p.mouseX < 460 + 15 && p.mouseY > 150 - 15 && p.mouseY < 560 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // // End Maze
    // p.rect(320,10, 60, 100);
    if(p.mouseX > 320 - 15 && p.mouseX < 380 + 15 && p.mouseY > 10 - 15 && p.mouseY < 110 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(190,105, 80, 10);
    if(p.mouseX > 190 - 15 && p.mouseX < 270 + 15 && p.mouseY > 105 - 15 && p.mouseY < 115 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(430,105, 50, 10);
    if(p.mouseX > 430 - 15 && p.mouseX < 480 + 15 && p.mouseY > 105 - 15 && p.mouseY < 115 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(530,105, 50, 10);
    if(p.mouseX > 530 - 15 && p.mouseX < 580 + 15 && p.mouseY > 105 - 15 && p.mouseY < 115 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    
    // Outside the canvas
    if(p.mouseX > p.width - 70 - 15 || p.mouseX < 0 + 15 + 70 || p.mouseY > p.height - 15 - 70 || p.mouseY < 0 + 15 + 70) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // if(p.mouseX == 0 && p.mouseY == 0)
    //   ready = -1;

    //Rect Run
    // p.rect(50,530, 70, 30);
    if(p.mouseX > 50 - 15 && p.mouseX < 120 + 15 && p.mouseY > 530 - 15 && p.mouseY < 560 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(110,430, 60, 30);
    if(p.mouseX > 110 - 15 && p.mouseX < 170 + 15 && p.mouseY > 430 - 15 && p.mouseY < 460 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(30,340, 90, 30);
    if(p.mouseX > 30 - 15 && p.mouseX < 120 + 15 && p.mouseY > 340 - 15 && p.mouseY < 370 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.rect(110, 250, 60, 30);
    if(p.mouseX > 110 - 15 && p.mouseX < 170 + 15 && p.mouseY > 250 - 15 && p.mouseY < 280 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }

  
      // // Bubble Run
    // p.ellipse(560, 680, 30);
    if(p.dist(560, 680, p.mouseX, p.mouseY) < 15 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(460,650, 90);
    if(p.dist(460, 650, p.mouseX, p.mouseY) < 45 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(330,740, 150);
    if(p.dist(330, 740, p.mouseX, p.mouseY) < 75 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(150, 650, 90);
    if(p.dist(150, 650, p.mouseX, p.mouseY) < 45 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(300, 290, 150);
    if(p.dist(300, 290, p.mouseX, p.mouseY) < 75 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(270, 450, 90);
    if(p.dist(270, 450, p.mouseX, p.mouseY) < 45 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(330, 560, 90);
    if(p.dist(330, 560, p.mouseX, p.mouseY) < 45 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(400, 420, 90);
    if(p.dist(400, 420, p.mouseX, p.mouseY) < 45 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(500, 545, 40);
    if(p.dist(500, 545, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(565, 500, 40);
    if(p.dist(565, 500, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(600, 590, 40);
    if(p.dist(600, 590, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(670, 550, 40);
    if(p.dist(670, 550, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(630, 470, 40);
    if(p.dist(630, 470, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(500, 460, 40);
    if(p.dist(500, 460, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(710, 480, 40);
    if(p.dist(610, 480, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(480, 365, 40);
    if(p.dist(480, 365, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(545, 320, 40);
    if(p.dist(545, 320, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(580, 410, 40);
    if(p.dist(580, 410, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(650, 370, 40);
    if(p.dist(650, 370, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(610, 290, 40);
    if(p.dist(610, 290, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(480, 280, 40);
    if(p.dist(480, 280, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(690, 300, 40);
    if(p.dist(690, 300, p.mouseX, p.mouseY) < 20 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(550, 200, 80);
    if(p.dist(550, 200, p.mouseX, p.mouseY) < 40 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }
    // p.ellipse(740, 200, 130);
    if(p.dist(740, 200, p.mouseX, p.mouseY) < 65 + 15) {
      ready = 0;
      p.textSize(30);
      p.stroke(1);
      p.fill(c);
      p.text(endMsg, p.width/2-250, p.height/2);
      endMsg = "Opps! Again?";
      c = 'red'
    }

    
  }
};
var myp5 = new p5(maze, 'c7');
