let dpositionX1 = 0, dpositionY1 = 0, dpositionX2 = 0, dpositionY2 = 0, dpositionX4 = 0, dpositionY4 = 0, dpositionX5 = 0, dpositionY5 = 0, dpositionX6 = 0, dpositionY6 = 0, dpositionX7 = 0, dpositionY7 = 0, dpositionX8 = 0, dpositionY8 = 0;
		let myVideo1, myVideo2, myVideo3, myVideo4, myVideo5, myVideo6, myVideo7;
		let getVideo1, getVideo2, getVideo3, getVideo4, getVideo5, getVideo6, getVideo7;
		let loadedVideosCount = 0;
		let myVideos = [];
		const startButton = document.getElementById('startButton');
		let myAudio;
        let myCanvas;
        let volumeSlider;

		function preload() {
			myVideos[0] = createVideo(['videos/background.mp4'], onVideoLoaded);
			myVideos[1] = createVideo(['videos/child.mp4'], onVideoLoaded);
			myVideos[2] = createVideo(['videos/lefthand.mp4'], onVideoLoaded);
			myVideos[3] = createVideo(['videos/righthand.mp4'], onVideoLoaded);
			myVideos[4] = createVideo(['videos/mother.mp4'], onVideoLoaded);
			myVideos[5] = createVideo(['videos/sewing.mp4'], onVideoLoaded);
			myVideos[6] = createVideo(['videos/thigh.mp4'], onVideoLoaded);
			myAudio = loadSound('audios/sewingmachinesound.mp3');
		}

		function onVideoLoaded() {
			loadedVideosCount++;
			console.log("Loaded video #" + loadedVideosCount);
			if (loadedVideosCount === myVideos.length) {
				console.log("All videos loaded, setting up...");
				setupVideos();
			} else if (loadedVideosCount > myVideos.length) {
				console.error("Error loading video #" + loadedVideosCount);
			}
		}

		function setupVideos() {
			for (let i = 0; i < myVideos.length; i++) {
				myVideos[i].size(800, 534);
				// myVideos[i].play();
				myVideos[i].loop();
				myVideos[i].volume(0);
				myVideos[i].hide();
			}
		}


		function setup() {
			myCanvas = createCanvas(800, 534);
            myCanvas.parent('p5sewing');
            volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', adjustVolume);
			frameRate(10);
			noLoop();
		}

		startButton.addEventListener('click', () => {
			startButton.style.display = 'none';
			playAllVideos();
			myAudio.play();
			loop();
		});

		function playAllVideos() {
			for (let i = 0; i < myVideos.length; i++) {
				if (myVideos[i].loadedmetadata) {
					myVideos[i].play();
					console.log("Video started playing.");
				}
			}
		}

        function adjustVolume() {
            const normalizedVolume = volumeSlider.value / 100;
            myAudio.setVolume(normalizedVolume);
        }

		function draw() {
			background(25, 25, 25);
			getVideo1 = myVideos[0].get();
			getVideo2 = myVideos[2].get();
			getVideo3 = myVideos[3].get();
			getVideo4 = myVideos[5].get();
			getVideo5 = myVideos[4].get();
			getVideo6 = myVideos[6].get();
			getVideo7 = myVideos[1].get();
			dpositionX2 = random(-0.4, 0.4);
			dpositionY2 = random(-0.4, 0.4);
			image(getVideo1, 0 + dpositionX2, 0 + dpositionY2, 800, 533);
			dpositionX1 = random(-0.4, 0.4);
			dpositionY1 = random(-0.4, 0.4);
			image(getVideo2, 65 + dpositionX1, 7 + dpositionY1, 274, 335);
			dpositionX8 = random(-0.4, 0.4);
			dpositionY8 = random(-0.4, 0.4);
			image(getVideo3, 395 + dpositionX8, 15 + dpositionY8, 274, 335);
			dpositionX5 = random(-0.4, 0.4);
			dpositionY5 = random(-0.4, 0.4);
			image(getVideo4, 225 + dpositionX5, 267 + dpositionY5, 250, 184);
			dpositionX4 = random(-0.4, 0.4);
			dpositionY4 = random(-0.4, 0.4);
			image(getVideo5, 287 + dpositionX4, 284 + dpositionY4, 65, 65);
			dpositionX7 = random(-0.4, 0.4);
			dpositionY7 = random(-0.4, 0.4);
			image(getVideo6, 365 + dpositionX7, 98 + dpositionY7, 275, 198);
			dpositionX6 = random(-0.4, 0.4);
			dpositionY6 = random(-0.4, 0.4);
			image(getVideo7, 193 + dpositionX6, 70 + dpositionY6, 230, 134);

		};