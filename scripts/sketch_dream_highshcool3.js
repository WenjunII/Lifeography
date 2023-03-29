const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
    document.getElementById('previewimage').style.display = 'none';

    const audio1 = document.getElementById('audio1');
    audio1.play();

    const scene = new THREE.Scene();
    const myCamera = new THREE.OrthographicCamera(880 / - 3, 880 / 3, 600 / 3, 600 / - 3, 0.001, 2000);
    myCamera.position.set(0, 0, 1000);
    // myCamera.zoom = 10;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(880, 600);
    renderer.setClearColor(0xcccccc);
    renderer.setPixelRatio(3);
    document.getElementById('highschool3').appendChild(renderer.domElement);

    scene.background = new THREE.Color('rgb(25, 25, 25)');

    const controls = new THREE.OrbitControls(myCamera, renderer.domElement);
    const video1 = document.getElementById('video1');
    const texture1 = new THREE.VideoTexture(video1);
    const video2 = document.getElementById('video2');
    const texture2 = new THREE.VideoTexture(video2);
    const video3 = document.getElementById('video3');
    const texture3 = new THREE.VideoTexture(video3);
    const video4 = document.getElementById('video4');
    const texture4 = new THREE.VideoTexture(video4);
    const video5 = document.getElementById('video5');
    const texture5 = new THREE.VideoTexture(video5);
    const video6 = document.getElementById('video6');
    const texture6 = new THREE.VideoTexture(video6);

    const videoMaterial1 = new THREE.MeshBasicMaterial({ map: texture1 });
    const planeGeometry1 = new THREE.PlaneGeometry(600, 401);
    const planeMesh1 = new THREE.Mesh(planeGeometry1, videoMaterial1);
    scene.add(planeMesh1);
    planeMesh1.position.set(0, 0, -200);

    const videoMaterial2 = new THREE.MeshBasicMaterial({ map: texture2 });
    const planeGeometry2 = new THREE.PlaneGeometry(600, 141);
    const planeMesh2 = new THREE.Mesh(planeGeometry2, videoMaterial2);
    scene.add(planeMesh2);
    planeMesh2.position.set(0, -130, -150);

    const videoMaterial3 = new THREE.MeshBasicMaterial({ map: texture3 });
    const planeGeometry3 = new THREE.PlaneGeometry(230, 107);
    const planeMesh3 = new THREE.Mesh(planeGeometry3, videoMaterial3);
    scene.add(planeMesh3);
    planeMesh3.position.set(0, -135, -100);

    const videoMaterial4 = new THREE.MeshBasicMaterial({ map: texture4 });
    const planeGeometry4 = new THREE.PlaneGeometry(160, 167);
    const planeMesh4 = new THREE.Mesh(planeGeometry4, videoMaterial4);
    scene.add(planeMesh4);
    planeMesh4.position.set(75, -120, -50);
    // video4.play();

    const videoMaterial5 = new THREE.MeshBasicMaterial({ map: texture5 });
    const planeGeometry5 = new THREE.PlaneGeometry(190, 60);
    const planeMesh5 = new THREE.Mesh(planeGeometry5, videoMaterial5);
    scene.add(planeMesh5);
    planeMesh5.position.set(4, -132, 0);

    const videoMaterial6 = new THREE.MeshBasicMaterial({ map: texture6 });
    const planeGeometry6 = new THREE.PlaneGeometry(35, 85);
    const planeMesh6 = new THREE.Mesh(planeGeometry6, videoMaterial6);
    scene.add(planeMesh6);
    planeMesh6.position.set(20, -136, 50);

    function playVideosWithInterval(videos, interval) {
        videos.forEach((video, index) => {
            setTimeout(() => {
                video.play();
            }, interval * index);
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, myCamera);
    };

    const videos = [video1, video2, video3, video4, video5, video6];
    playVideosWithInterval(videos, 1500);

    animate();

});