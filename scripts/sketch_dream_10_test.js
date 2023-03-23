console.log('SCRIPT LOADED');
let myMixer2;

const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(90, window.innerWidth / 1.2 / window.innerHeight, 0.001, 2000);

const renderer2 = new THREE.WebGLRenderer({ alpha: true });
renderer2.setSize(window.innerWidth / 1.36 / 1.2, window.innerHeight / 1.36);
renderer2.setClearColor(0xcccccc);
renderer2.setPixelRatio(3);
document.getElementById('3d10').appendChild(renderer2.domElement);

scene2.background = new THREE.Color('rgb(25, 25, 25)');

const loader2 = new THREE.GLTFLoader();

const rloader = new THREE.RGBELoader();

const controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);

controls2.target = new THREE.Vector3(0, 6.5, 0);
camera2.position.set(-2, 7, 8);

const video3 = document.getElementById('video3');
const texture3 = new THREE.VideoTexture(video3);
const video4 = document.getElementById('video4');
const texture4 = new THREE.VideoTexture(video4);

const clock2 = new THREE.Clock();

rloader.load('images/wenjunii10/graduation_photo.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;

    scene2.background = texture;
    scene2.environment = texture;
    // texture.setPixelRatio(10);
});

loader2.load('models/wenjunii102.glb', function (gltf) {
    // Loop over all of the child objects in the model and turn
    // off metalness feature in material
    // your model has metalness set too high 
    gltf.scene.traverse(child => {
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

    const material1 = gltf.scene.getObjectByName('wenjunii10002').material;
    material1.map = texture1;
    // texture1.offset.y = -0.03;
    // texture1.offset.rotate = Math.PI;
    material1.map.offset.y = 1;
    material1.map.repeat.y = -1;
    video1.play();
    texture1.needsUpdate = true;

    const material3 = gltf.scene.getObjectByName('wenjunii10002_4').material;
    material3.map = texture3;
    // texture1.offset.y = -0.03;
    // texture1.offset.rotate = Math.PI;
    material3.map.offset.y = 1;
    material3.map.repeat.y = -1;
    video3.play();
    texture3.needsUpdate = true;

    const material4 = gltf.scene.getObjectByName('wenjunii10002_5').material;
    material4.map = texture4;
    // texture1.offset.y = -0.03;
    // texture1.offset.rotate = Math.PI;
    material4.map.offset.y = 1;
    material4.map.repeat.y = -1;
    video4.play();
    texture4.needsUpdate = true;

    myMixer2 = new THREE.AnimationMixer(gltf.scene);
    const animations2 = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer2.clipAction(animation).play();
    });

    scene2.add(gltf.scene);
    addLights2();
    console.log('GLTF LOAD');
}, undefined, function (error) {
    console.log('GLTF ERROR');
    console.error(error);

});

function addLights2() {
    console.log('LIGHTS')
    const directionlight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene2.add(directionlight);
    const ambientlightprobe = new THREE.AmbientLightProbe(0xffffff5, 0.8);
    scene2.add(ambientlightprobe);
}

function animate2() {
    requestAnimationFrame(animate2);

    // gltf.rotation.x += 0.01;
    scene2.rotation.y += 0.003;
    controls2.update();
    renderer2.render(scene2, camera2);
    if (myMixer2) {
        const delta = clock2.getDelta();
        myMixer2.update(delta);
    }
};

animate2();