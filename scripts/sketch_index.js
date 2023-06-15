console.log('SCRIPT LOADED');

let mesh3 = null;
let myMixer, myMixer2, myMixer3, myMixer4, myMixer5, myMixer6, myMixer7, myMixer8, myMixer9, myMixer10;

let indexsketch = function (p) {
    let loaded = false;
    let random1, random2, random3, random4, random5, random6, random7, random8, random9, random10, random11, random12;
    // let h, s, l, a, q, n;
    let table1, table2, table3, table4, table5, table6, table7, table8, table9, table10, table11, table12;
    let url1 = 'https://activecalories-tor-34267.herokuapp.com/api/data';
    let url2 = 'https://activetime-basin-50341.herokuapp.com/api/data';
    let url3 = 'https://ascent-castle-61731.herokuapp.com/api/data';
    let url4 = 'https://activityintensity-esct-08628.herokuapp.com/api/data';
    let url5 = 'https://cycles-sierra-46675.herokuapp.com/api/data';
    let url6 = 'https://descent-headland-21847.herokuapp.com/api/data';
    let url7 = 'https://distance-wave-76653.herokuapp.com/api/data';
    let url8 = 'https://heartrate-sea-14855.herokuapp.com/api/data';
    let url9 = 'https://intensity-coast-96368.herokuapp.com/api/data';
    let url10 = 'https://steps-waters-14638.herokuapp.com/api/data';
    let url11 = 'https://stresslevel-hollows-24922.herokuapp.com/api/data';
    let url12 = 'https://keywords-scrubland-70273.herokuapp.com/api/data';

    p.preload = function () {
        table1 = p.loadJSON(url1, p.onTableLoaded);
        table2 = p.loadJSON(url2, p.onTableLoaded);
        table3 = p.loadJSON(url3, p.onTableLoaded);
        table4 = p.loadJSON(url4, p.onTableLoaded);
        table5 = p.loadJSON(url5, p.onTableLoaded);
        table6 = p.loadJSON(url6, p.onTableLoaded);
        table7 = p.loadJSON(url7, p.onTableLoaded);
        table8 = p.loadJSON(url8, p.onTableLoaded);
        table9 = p.loadJSON(url9, p.onTableLoaded);
        table10 = p.loadJSON(url10, p.onTableLoaded);
        table11 = p.loadJSON(url11, p.onTableLoaded);
        table12 = p.loadJSON(url12, p.onTableLoaded);
    };

    p.onTableLoaded = function () {
        console.log('activecalories file loaded successfully');
        console.log('activetime file loaded successfully');
        console.log('ascent file loaded successfully');
        console.log('activityintensity file loaded successfully');
        console.log('cycles file loaded successfully');
        console.log('descent file loaded successfully');
        console.log('distance file loaded successfully');
        console.log('heartrate file loaded successfully');
        console.log('intensity file loaded successfully');
        console.log('steps file loaded successfully');
        console.log('stresslevel file loaded successfully');
        console.log('keywords file loaded successfully');
        loaded = true;
    }

    p.setup = function () {
        p.createCanvas(800, 800);
        p.colorMode(p.HSL, 360, 100, 100, 1);
        // p.angleMode(p.DEGREES);
        addMesh1();
        p.frameRate(2);
    }

    p.draw = function () {

        random1 = p.int(p.random(0, 1220));
        random2 = p.int(p.random(0, 5118));
        random3 = p.int(p.random(0, 25));
        random4 = p.int(p.random(0, 48));
        random5 = p.int(p.random(0, 11));
        random6 = p.int(p.random(0, 17));
        random7 = p.int(p.random(0, 4737));
        random8 = p.int(p.random(0, 136));
        random9 = p.int(p.random(0, 8));
        random10 = p.int(p.random(0, 6790));
        random11 = p.int(p.random(0, 116));
        random12 = p.int(p.random(0, 422));
        if (loaded) {
            // p.background(0);
            let random1Value = table1[random1].activecalories;
            let random1Value2 = p.map(random1Value, 0, 950, 0, 360);
            let random1Value3 = p.map(random1Value, 0, 950, 0, 100);
            let random1Value4 = p.map(random1Value, 0, 950, 5, 15);
            p.fill(random1Value2, random1Value3, random1Value3, 0.05);
            p.textSize(random1Value4);
            p.text(table1[random1].activecalories, p.random(p.width), p.random(p.height));
            let random2Value = table2[random2].activetime;
            let random2Value2 = p.map(random2Value, 3, 22029, 0, 360);
            let random2Value3 = p.map(random2Value, 3, 22029, 0, 100);
            let random2Value4 = p.map(random2Value, 3, 22029, 5, 15);
            p.fill(random2Value2, random2Value3, random2Value3, 0.05);
            p.textSize(random2Value4);
            p.text(table2[random2].activetime, p.random(p.width), p.random(p.height));
            let random3Value = table3[random3].ascent;
            let random3Value2 = p.map(random3Value, 0, 30, 0, 360);
            let random3Value3 = p.map(random3Value, 0, 30, 0, 100);
            let random3Value4 = p.map(random3Value, 0, 30, 5, 15);
            p.fill(random3Value2, random3Value3, random3Value3, 0.05);
            p.textSize(random3Value4);
            p.text(table3[random3].ascent, p.random(p.width), p.random(p.height));
            let random4Value = table4[random4].activityintensity;
            let random4Value2 = p.map(random4Value, 0, 232, 0, 360);
            let random4Value3 = p.map(random4Value, 0, 232, 0, 100);
            let random4Value4 = p.map(random4Value, 0, 232, 5, 15);
            p.fill(random4Value2, random4Value3, random4Value3, 0.05);
            p.textSize(random4Value4);
            p.text(table4[random4].activityintensity, p.random(p.width), p.random(p.height));
            let random5Value = table5[random5].cycles;
            let random5Value2 = p.map(random5Value, 0, 11, 0, 360);
            let random5Value3 = p.map(random5Value, 0, 11, 0, 100);
            let random5Value4 = p.map(random5Value, 0, 11, 5, 15);
            p.fill(random5Value2, random5Value3, random5Value3, 0.05);
            p.textSize(random5Value4);
            p.text(table5[random5].cycles, p.random(p.width), p.random(p.height));
            let random6Value = table6[random6].descent;
            let random6Value2 = p.map(random6Value, 0, 9, 0, 360);
            let random6Value3 = p.map(random6Value, 0, 9, 0, 100);
            let random6Value4 = p.map(random6Value, 0, 9, 5, 15);
            p.fill(random6Value2, random6Value3, random6Value3, 0.05);
            p.textSize(random6Value4);
            p.text(table6[random6].descent, p.random(p.width), p.random(p.height));
            let random7Value = table7[random7].distance;
            let random7Value2 = p.map(random7Value, 0, 15336, 0, 360);
            let random7Value3 = p.map(random7Value, 0, 15336, 0, 100);
            let random7Value4 = p.map(random7Value, 0, 15336, 5, 15);
            p.fill(random7Value2, random7Value3, random7Value3, 0.05);
            p.textSize(random7Value4);
            p.text(table7[random7].distance, p.random(p.width), p.random(p.height));
            let random8Value = table8[random8].heartrate;
            let random8Value2 = p.map(random8Value, 0, 146, 0, 360);
            let random8Value3 = p.map(random8Value, 0, 146, 0, 100);
            let random8Value4 = p.map(random8Value, 0, 146, 5, 15);
            p.fill(random8Value2, random8Value3, random8Value3, 0.05);
            p.textSize(random8Value4);
            p.text(table8[random8].heartrate, p.random(p.width), p.random(p.height));
            let random9Value = table9[random9].intensity;
            let random9Value2 = p.map(random9Value, 0, 7, 0, 360);
            let random9Value3 = p.map(random9Value, 0, 7, 0, 100);
            let random9Value4 = p.map(random9Value, 0, 7, 5, 15);
            p.fill(random9Value2, random9Value3, random9Value3, 0.05);
            p.textSize(random9Value4);
            p.text(table9[random9].intensity, p.random(p.width), p.random(p.height));
            let random10Value = table10[random10].steps;
            let random10Value2 = p.map(random10Value, 2, 21389, 0, 360);
            let random10Value3 = p.map(random10Value, 2, 21389, 0, 100);
            let random10Value4 = p.map(random10Value, 2, 21389, 5, 15);
            p.fill(random10Value2, random10Value3, random10Value3, 0.05);
            p.textSize(random10Value4);
            p.text(table10[random10].steps, p.random(p.width), p.random(p.height));
            let random11Value = table11[random11].stresslevel;
            let random11Value2 = p.map(random11Value, -2, 99, 0, 360);
            let random11Value3 = p.map(random11Value, -2, 99, 0, 100);
            let random11Value4 = p.map(random11Value, -2, 99, 5, 15);
            p.fill(random11Value2, random11Value3, random11Value3, 0.05);
            p.textSize(random11Value4);
            p.text(table11[random11].stresslevel, p.random(p.width), p.random(p.height));
            p.fill(p.random(0, 360), p.random(0, 100), p.random(0, 100), 0.05);
            p.textSize(p.random(5, 15));
            p.text(table12[random12].keywords, p.random(p.width), p.random(p.height));
        }
    }

};

const scene = new THREE.Scene();
const myCamera = new THREE.OrthographicCamera(window.innerWidth / - 3, window.innerWidth / 3, 600 / 3, 600 / - 3, 0.001, 2000);
myCamera.position.set(0, 0, 1000);
// myCamera.zoom = 10;
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, 600);
renderer.setClearColor(0xcccccc);
renderer.setPixelRatio(3);
document.getElementById('3d10').appendChild(renderer.domElement);

scene.background = new THREE.Color('rgb(25, 25, 25)');

const loader = new THREE.GLTFLoader();

const controls = new THREE.OrbitControls(myCamera, renderer.domElement);

// controls.target = new THREE.Vector3(0, 0, 0);

const video1 = document.getElementById('video1');
const texture1 = new THREE.VideoTexture(video1);

const video2 = document.getElementById('video2');
const texture2 = new THREE.VideoTexture(video2);

const clock = new THREE.Clock();
const clock2 = new THREE.Clock();
const clock3 = new THREE.Clock();
const clock4 = new THREE.Clock();
const clock5 = new THREE.Clock();
const clock6 = new THREE.Clock();
const clock7 = new THREE.Clock();
const clock8 = new THREE.Clock();
const clock9 = new THREE.Clock();
const clock10 = new THREE.Clock();

loader.load('models/wenjuniinew.glb', function (gltf) {
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

    const material1 = gltf.scene.getObjectByName('wenjunii').material;
    material1.map = texture1;
    // texture1.offset.y = -0.03;
    material1.map.offset.y = 1;
    material1.map.repeat.y = -1;
    video1.play();
    texture1.needsUpdate = true;

    const material2 = gltf.scene.getObjectByName('SuperShapesMesh004').material;
    material2.map = texture2;
    // texture2.offset.y = -0.03;
    material1.map.offset.y = 1;
    material1.map.repeat.y = -1;
    // texture2.offset.x = 0.03;
    video2.play();
    texture2.needsUpdate = true;

    myMixer = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer.clipAction(animation).play();
    });

    scene.add(gltf.scene);
    scene.position.set(0, 0, 0);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.scale.set(10, 10, 10);
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

let myp53 = new p5(indexsketch);

function addMesh1() {
    texture3 = new THREE.Texture();
    texture3.image = myp53.canvas;
    texture3.needsUpdate = true;
    let material3 = new THREE.MeshBasicMaterial({ map: texture3 });
    let geometry3 = new THREE.PlaneGeometry(800, 800);
    mesh3 = new THREE.Mesh(geometry3, material3);
    scene.add(mesh3);
    mesh3.position.set(0, 0, -100);
    animate();
}

const loader2 = new THREE.GLTFLoader();
const video4 = document.getElementById('video4');
const texture4 = new THREE.VideoTexture(video4);
const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
loader2.load('models/randomshape/randomshape1.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer2 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer2.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(-120, -300, 50);
    gltf.scene.rotation.set(0, 180, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 0;
    const rotationSpeed2 = 0.01;
    const moveSpeed2 = 1;
    function update2() {
        gltf.scene.rotation.y += rotationSpeed2;
        gltf.scene.rotation.x += rotationSpeed2;
    }
    function animate() {
        requestAnimationFrame(animate);
        update2();
    }
    animate();
});

const loader3 = new THREE.GLTFLoader();
loader3.load('models/randomshape/randomshape2.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer3 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer3.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(200, 0, 150);
    gltf.scene.rotation.set(0, 0, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 0;
    const rotationSpeed3 = 0.01;
    function update3() {
        gltf.scene.rotation.y += rotationSpeed3;
        gltf.scene.rotation.z += rotationSpeed3;
    }
    function animate() {
        requestAnimationFrame(animate);
        update3();
    }
    animate();
});

const loader4 = new THREE.GLTFLoader();
loader4.load('models/randomshape/randomshape3.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer4 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer4.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(-200, 200, 20);
    gltf.scene.rotation.set(0, 0, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 0;
    const rotationSpeed4 = 0.01;
    function update4() {
        gltf.scene.rotation.y += rotationSpeed4;
    }
    function animate() {
        requestAnimationFrame(animate);
        update4();
    }
    animate();
});

const loader5 = new THREE.GLTFLoader();
loader5.load('models/randomshape/randomshape4.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer5 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer5.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(-300, -200, 120);
    gltf.scene.rotation.set(0, 0, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 0;
    const rotationSpeed5 = 0.01;
    function update5() {
        gltf.scene.rotation.x += rotationSpeed5;
    }
    function animate() {
        requestAnimationFrame(animate);
        update5();
    }
    animate();
});

const loader6 = new THREE.GLTFLoader();
loader6.load('models/randomshape/randomshape5.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer6 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer6.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(-10, -100, -50);
    gltf.scene.rotation.set(0, 180, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 180;
    const rotationSpeed6 = 0.01;
    function update6() {
        gltf.scene.rotation.x += rotationSpeed6;
        gltf.scene.rotation.z += rotationSpeed6;
    }
    function animate() {
        requestAnimationFrame(animate);
        update6();
    }
    animate();
});

const loader7 = new THREE.GLTFLoader();
loader7.load('models/randomshape/randomshape6.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer7 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer7.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(250, 300, 200);
    gltf.scene.rotation.set(0, 0, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 0;
    const rotationSpeed7 = 0.01;
    function update7() {
        gltf.scene.rotation.z += rotationSpeed7;
    }
    function animate() {
        requestAnimationFrame(animate);
        update7();
    }
    animate();
});

const loader8 = new THREE.GLTFLoader();
loader8.load('models/randomshape/randomshape7.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer8 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer8.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(280, -260, 230);
    gltf.scene.rotation.set(0, 180, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 180;
    const rotationSpeed8 = 0.01;
    function update8() {
        gltf.scene.rotation.y += rotationSpeed8;
        gltf.scene.rotation.x += rotationSpeed8;
        gltf.scene.rotation.z += rotationSpeed8;
    }
    function animate() {
        requestAnimationFrame(animate);
        update8();
    }
    animate();
});

const loader9 = new THREE.GLTFLoader();
loader9.load('models/randomshape/randomshape8.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer9 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer9.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(-100, 40, 280);
    gltf.scene.rotation.set(0, 180, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 180;
    const rotationSpeed9 = 0.01;
    function update9() {
        gltf.scene.rotation.y += rotationSpeed9;
        gltf.scene.rotation.x += rotationSpeed9;
    }
    function animate() {
        requestAnimationFrame(animate);
        update9();
    }
    animate();
});

const loader10 = new THREE.GLTFLoader();
loader10.load('models/randomshape/randomshape9.glb', function (gltf) {
    gltf.scene.traverse(function (object) { object.frustumCulled = false; });
    gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = material4;
        }
    });
    video4.play();
    texture4.needsUpdate = true;
    myMixer10 = new THREE.AnimationMixer(gltf.scene);
    const animations = gltf.animations;

    gltf.animations.forEach(animation => {
        myMixer10.clipAction(animation).play();
    });
    gltf.scene.scale.set(8, 8, 8);
    gltf.scene.position.set(130, -180, 340);
    gltf.scene.rotation.set(0, 180, 0);
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 180;
    const rotationSpeed10 = 0.01;
    function update10() {
        gltf.scene.rotation.y += rotationSpeed10;
        gltf.scene.rotation.z += rotationSpeed10;
    }
    function animate() {
        requestAnimationFrame(animate);
        update10();
    }
    animate();
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, myCamera);
    texture3.needsUpdate = true;
    if (myMixer) {
        const delta = clock.getDelta();
        myMixer.update(delta);
    }
    if (myMixer2) {
        const delta = clock2.getDelta();
        myMixer2.update(delta);
    }
    if (myMixer3) {
        const delta = clock3.getDelta();
        myMixer3.update(delta);
    }
    if (myMixer4) {
        const delta = clock4.getDelta();
        myMixer4.update(delta);
    }
    if (myMixer5) {
        const delta = clock5.getDelta();
        myMixer5.update(delta);
    }
    if (myMixer6) {
        const delta = clock6.getDelta();
        myMixer6.update(delta);
    }
    if (myMixer7) {
        const delta = clock7.getDelta();
        myMixer7.update(delta);
    }
    if (myMixer8) {
        const delta = clock8.getDelta();
        myMixer8.update(delta);
    }
    if (myMixer9) {
        const delta = clock9.getDelta();
        myMixer9.update(delta);
    }
    if (myMixer10) {
        const delta = clock10.getDelta();
        myMixer10.update(delta);
    }

};