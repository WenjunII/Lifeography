// Sketch One
var dream = function (p) { // p could be any variable name
    var dpositionX1 = 0, dpositionY1 = 0, dpositionX2 = 0, dpositionY2 = 0, dpositionX4 = 0, dpositionY4 = 0, dpositionX5 = 0, dpositionY5 = 0, dpositionX6 = 0, dpositionY6 = 0, dpositionX7 = 0, dpositionY7 = 0, dpositionX8 = 0, dpositionY8 = 0;
    var myVideo1, myVideo2, myVideo3, myVideo4, myVideo5, myVideo6, myVideo7;
    var loadedVideosCount = 0;

    p.preload = function () {
        myVideo1 = p.createVideo('videos/background.mp4', p.onVideoLoaded);
        myVideo2 = p.createVideo('videos/child.mp4', p.onVideoLoaded);
        myVideo3 = p.createVideo('videos/lefthand.mp4', p.onVideoLoaded);
        myVideo4 = p.createVideo('videos/righthand.mp4', p.onVideoLoaded);
        myVideo5 = p.createVideo('videos/mother.mp4', p.onVideoLoaded);
        myVideo6 = p.createVideo('videos/sewing.mp4', p.onVideoLoaded);
        myVideo7 = p.createVideo('videos/thigh.mp4', p.onVideoLoaded);
    }

    p.onVideoLoaded = function () {
        loadedVideosCount++;
        if (loadedVideosCount === 7) {
            p.setupVideos()
        } ;
    }

    p.setupVideos = function () {
        myVideo1.hide();
        myVideo1.loop();
        myVideo1.play();
        myVideo2.hide();
        myVideo2.loop();
        myVideo2.play();
        myVideo3.hide();
        myVideo3.loop();
        myVideo3.play();
        myVideo4.hide();
        myVideo4.loop();
        myVideo4.play();
        myVideo5.hide();
        myVideo5.loop();
        myVideo5.play();
        myVideo6.hide();
        myVideo6.loop();
        myVideo6.play();
        myVideo7.hide();
        myVideo7.loop();
        myVideo7.play();
    }

    p.setup = function () {
        p.createCanvas(800, 534);
        p.frameRate(10);
    };

    p.draw = function () {
        p.background(25, 25, 25);
        p.image(myVideo1, 0 + dpositionX2, 0 + dpositionY2, 800, 533);
        p.image(myVideo3, 65 + dpositionX1, 7 + dpositionY1, 274, 335);
        p.image(myVideo4, 395 + dpositionX8, 15 + dpositionY8, 274, 335);
        p.image(myVideo6, 225 + dpositionX5, 267 + dpositionY5, 250, 184);
        p.image(myVideo5, 287 + dpositionX4, 284 + dpositionY4, 65, 65);
        p.image(myVideo7, 365 + dpositionX7, 98 + dpositionY7, 275, 198);
        p.image(myVideo2, 193 + dpositionX6, 70 + dpositionY6, 230, 134);
        dpositionX1 = p.random(-0.4, 0.4);
        dpositionY1 = p.random(-0.4, 0.4);
        dpositionX2 = p.random(-0.4, 0.4);
        dpositionY2 = p.random(-0.4, 0.4);
        dpositionX4 = p.random(-0.4, 0.4);
        dpositionY4 = p.random(-0.4, 0.4);
        dpositionX5 = p.random(-0.4, 0.4);
        dpositionY5 = p.random(-0.4, 0.4);
        dpositionX6 = p.random(-0.4, 0.4);
        dpositionY6 = p.random(-0.4, 0.4);
        dpositionX7 = p.random(-0.4, 0.4);
        dpositionY7 = p.random(-0.4, 0.4);
        dpositionX8 = p.random(-0.4, 0.4);
        dpositionY8 = p.random(-0.4, 0.4);
    };
};
var myp5 = new p5(dream, 'c1');

