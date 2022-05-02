

//Sketch Eight
var free = function( p ) { // p could be any variable name
  var backgroundimg4;
  var freeimg;
  var rectopacity = 245;
  var backopacity = 245;
  // var s = 50;
  var heartarea;
  var rectmove = 0;
  var toggle_loop = false;

  p.preload = function() {
    backgroundimg4 = p.loadImage('images/wenjuniimarriage/ins_small.png');
    freeimg = p.loagImage('images/wenjuniimarriage/free.png');
  }
    
  p.setup = function() {
    p.createCanvas(850, 10630);
    // p.background(255, 255, 255, 0.5);
    
    p.noLoop();
  };

  p.draw = function() {
    // p.frameRate(5);
    p.cursor('pointer');
    p.image(backgroundimg4, 0, 0);
    p.noStroke();
    p.fill(255, 255, 255, 0 + backopacity);
    p.rect(0, 0, 850, 10630);
    backopacity = 0;
    // p.noStroke();
    p.fill(255, 255, 255, rectopacity);
    p.rect(0, 0, 850, 1.5 + rectmove);
    rectmove += 5;

      


    // for(let i = 0; i < 861; i += 287) {
    //   for(let j =0; j < 10332; j += 287) {
    //     p.noStroke();
    //     p.fill(220, 220, 220, rectopacity);
    //     p.rect(2 + i, 320 + j, 285, 285);
    //     p.fill(255, 255, 255, heartopacity);
    //     p.heart(i+140, j+450, 35);
    //     if(p.dist(p.mouseX, p.mouseY, 2 + i + 142.5, 320 + j + 142.5) <= 35) {
    //       p.cursor('pointer');
    //       p.fill(255, 0, 0, heartopacity);
    //       p.heart(i+140, j+450, 35);
    //     }
    //   }
    // }
    
    
  }
  // p.heart = function(i, j, heartsize) {
  //   p.beginShape();
  //   p.vertex(i, j);
  //   p.bezierVertex(i - heartsize / 2, j - heartsize / 2, i - heartsize, j + heartsize / 3, i, j + heartsize);
  //   p.bezierVertex(i + heartsize, j + heartsize / 3, i + heartsize / 2, j - heartsize / 2, i, j);
  //   p.endShape(p.CLOSE);
  // }
  p.mousePressed = function() {
      if (toggle_loop) {
        p.noLoop();
        toggle_loop = false;
      } else {
        p.loop();
        toggle_loop = true;
      }
    }
    

};
var myp5 = new p5(free, 'c8');
