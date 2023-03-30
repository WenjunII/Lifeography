
    var backgroundimg4;
    var freeimg;
    var rectopacity = 245;
    var backopacity = 245;
    // var s = 50;
    var heartarea;
    var rectmove = 0;
    var toggle_loop = false;
    let myCanvas;
  
    function preload() {
      backgroundimg4 = loadImage('images/wenjuniimarriage/ins_small.png');
    //   freeimg = loagImage('images/wenjuniimarriage/free.png');
    }
      
    function setup() {
      myCanvas = createCanvas(850, 10630);
      myCanvas.parent('p5marriage');
      // p.background(255, 255, 255, 0.5);
      
      noLoop();
    };
  
    function draw() {
      // p.frameRate(5);
      cursor('pointer');
      image(backgroundimg4, 0, 0);
      noStroke();
      fill(255, 255, 255, 0 + backopacity);
      rect(0, 0, 850, 10630);
      backopacity = 0;
      // p.noStroke();
      fill(255, 255, 255, rectopacity);
      rect(0, 0, 850, 1.5 + rectmove);
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
    function mousePressed() {
        if (toggle_loop && mouseX >=0 && mouseX <= 850 && mouseY >= 0 && mouseY <= 10630) {
          noLoop();
          toggle_loop = false;
        } else if(mouseX >=0 && mouseX <= 850 && mouseY >= 0 && mouseY <= 10630) {
          loop();
          toggle_loop = true;
        }
      }
 