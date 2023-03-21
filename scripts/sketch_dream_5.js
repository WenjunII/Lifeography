console.log('SCRIPT LOADED');

let myMixer;
const audio1 = document.getElementById('audio1');
audio1.play();

// const volumeSlider = document.getElementById('volumeSlider');

// volumeSlider.addEventListener('input', function () {
//     audio1.volume = parseFloat(volumeSlider.value / 100);
// });


const scene = new THREE.Scene();
const myCamera = new THREE.OrthographicCamera(800 / - 3, 800 / 3, 600 / 3, 600 / - 3, 0.001, 2000);
myCamera.position.set(0, 0, 1000);
// myCamera.zoom = 10;
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(800, 600);
renderer.setClearColor(0xcccccc);
renderer.setPixelRatio(3);
document.getElementById('3d5').appendChild(renderer.domElement);

scene.background = new THREE.Color('rgb(25, 25, 25)');

const loader = new THREE.GLTFLoader();

const controls = new THREE.OrbitControls(myCamera, renderer.domElement);

// controls.target = new THREE.Vector3(0, 0, 0);

const video1 = document.getElementById('video1');
const texture1 = new THREE.VideoTexture(video1);
const video2 = document.getElementById('video2');
const texture2 = new THREE.VideoTexture(video2);

const clock = new THREE.Clock();

const videoMaterial = new THREE.MeshBasicMaterial({ map: texture2 });
const planeGeometry = new THREE.PlaneGeometry(2320, 800);
const planeMesh = new THREE.Mesh(planeGeometry, videoMaterial);
scene.add(planeMesh);
planeMesh.position.set(0, 0, -100);
video2.play();

loader.load('models/wenjunii52.glb', function (gltf) {
    gltf.scene.traverse(child => {
        if (child.isMesh) {
            child.material.morphNormals = true;
            child.material.morphTargets = true;
            child.material.needsUpdate = true;
        }
        if (child.material) child.material.metalness = 0;
    });

    gltf.scene.traverse((object) => {
        const encoding = THREE.sRGBEncoding;
        if (object.isMesh) {
            const material = object.material;
            if (material.map) material.map.encoding = encoding;
            if (material.emissiveMap) material.emissiveMap.encoding = encoding;
            if (material.map || material.emissiveMap) material.needsUpdate = true;

            console.log(object.material);
        }
    });

    gltf.scene.traverse(function (object) { object.frustumCulled = false; });

    const material1 = gltf.scene.getObjectByName('5001').material;
    material1.map = texture1;
    // texture1.offset.y = -0.03;
    // texture1.offset.rotate = Math.PI;
    material1.map.offset.y = 1;
    material1.map.repeat.y = -1;
    video1.play();
    texture1.needsUpdate = true;

    myMixer = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer.clipAction(animation).play();
    });

    scene.add(gltf.scene);
    scene.position.set(0, 0, 0);
    gltf.scene.position.set(0, -100, 0);
    gltf.scene.scale.set(15, 15, 15);
    addLights();
    console.log('GLTF LOAD');
}, undefined, function (error) {
    console.log('GLTF ERROR');
    console.error(error);
});

function addLights() {
    console.log('LIGHTS')
    const directionlight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionlight);
    const ambientlightprobe = new THREE.AmbientLightProbe(0xffffff5, 0.8);
    scene.add(ambientlightprobe);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, myCamera);
    if (myMixer) {
        const delta = clock.getDelta();
        myMixer.update(delta);
    }
};

animate();