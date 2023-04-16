const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
    // window.location.href = 'dream_2.html';
    document.getElementById('previewimage').style.display = 'none'
    const audio1 = document.getElementById('audio1');
    audio1.play();

    let mesh3 = null;
    let myMixer, myMixer2, myMixer3, myMixer4, myMixer5, myMixer6, myMixer7, myMixer8, myMixer9, myMixer10;
    let myp53;
    let texture3 = new THREE.Texture();

    let indexsketch = function (p) {
        let ecgData = [];
        let myPosition = 100;
        let mySpeed = 1;
        let myVideos;
        let offset = 0;
        let centerLineY;
        let colors;

        p.preload = function () {
            myVideos = p.createVideo('videos/wenjuniichapter1.mp4');
            myVideos.attribute('width', '500');
            myVideos.attribute('height', '225');
        }

        p.setup = function () {
            p.createCanvas(800, 400);
            centerLineY = p.height - 140;
            myVideos.hide();
            myVideos.loop();
            colors = [
                p.color(255, 0, 0, 150),
                p.color(0, 255, 0, 150),
                p.color(0, 0, 255, 150)
            ];
            p.angleMode(p.DEGREES);
        }

        p.draw = function () {
            p.background(255, 255, 255);
            getVideo = myVideos.get();
            p.image(getVideo, 10, -8);
            for (let i = 0; i < 3; i++) {
                p.drawWrappedGradientLine(colors[i], centerLineY - 20 + i * 20, 15, offset + i * 120);
            }
            offset -= 5;
        }

        p.drawWrappedGradientLine = function (col, centerY, lineHeight, angleOffset) {
            p.push();
            for (let x = -p.width; x < p.width; x++) {
                let angle = p.map(x, -p.width, p.width, 0, 360);
                let y = p.sin(angle + angleOffset) * lineHeight;
                let z = p.cos(angle + angleOffset) * lineHeight;
                p.stroke(col);
                p.line(x - 1, centerLineY + y, x, centerLineY + y);
            }
            p.pop();
        }
    }

    myp53 = new p5(indexsketch);

    const scene = new THREE.Scene();
    const myCamera = new THREE.OrthographicCamera(880 / - 3, 880 / 3, 600 / 3, 600 / - 3, 0.001, 2000);
    myCamera.position.set(0, 0, 1000);
    // myCamera.zoom = 10;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(880, 600);
    renderer.setClearColor(0xcccccc);
    renderer.setPixelRatio(3);
    document.getElementById('3dawake').appendChild(renderer.domElement);

    scene.background = new THREE.Color('rgb(150, 150, 150)');

    const loader = new THREE.GLTFLoader();

    const controls = new THREE.OrbitControls(myCamera, renderer.domElement);

    // controls.target = new THREE.Vector3(0, 0, 0);

    const video1 = document.getElementById('video1');
    const texture1 = new THREE.VideoTexture(video1);

    const video2 = document.getElementById('video2');
    const texture2 = new THREE.VideoTexture(video2);

    const video5 = document.getElementById('video5');
    const texture5 = new THREE.VideoTexture(video5);

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
        gltf.scene.scale.set(8, 8, 8);
        addLights();
        addMesh1();
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

    // let myp53 = new p5(indexsketch);

    function addMesh1() {
        // texture3 = new THREE.Texture();
        texture3.image = myp53.canvas;
        texture3.needsUpdate = true;
        let material3 = new THREE.MeshBasicMaterial({ map: texture3 });
        let geometry3 = new THREE.PlaneGeometry(880, 600);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(-140, -140, 50);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(220, 0, 150);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(-160, 100, 20);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(-220, -30, 120);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(-10, -80, -50);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(150, 130, 200);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(140, -120, 230);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(-60, 40, 280);
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
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(90, -20, 340);
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
    animate();

});