// Sketch One
var randomsong = function (p) {
    let songs = [];
    let songCount = 241;
    let currentSongIndex = 0;

    p.preload = function () {
        for (let i = 1; i <= songCount; i++) {
            let song = p.loadSound(`audios/keywords/sound${i}.mp3`);
            songs.push(song);
        }
    }

    p.playRandomSong = function () {
        let randomIndex = p.floor(p.random(songCount));
        let song = songs[randomIndex];
        song.play();
        currentSongIndex = randomIndex;
    }

    p.stopSong = function () {
        let randomIndex = p.floor(p.random(songCount));
        let song = songs[randomIndex];
        song.stop();
    }

    p.setup = function () {
        //   createCanvas(400, 400);
        // p.playRandomSong();

    }

    p.draw = function () {
        //   background(220);
        if (songs[currentSongIndex].isPlaying() == false) {
            setTimeout(p.playRandomSong, 5000);
            setTimeout(p.stopSong, 5000);
        }
    }



};
var myp52 = new p5(randomsong, 'c1');
