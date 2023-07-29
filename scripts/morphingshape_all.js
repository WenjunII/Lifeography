import * as THREE from "https://cdn.skypack.dev/three@0.133.1";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls.js";
import Papa from "https://cdn.skypack.dev/papaparse";
import openSimplexNoise from "https://cdn.skypack.dev/open-simplex-noise";

// Scene
let scene = new THREE.Scene();

// Camera
let camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
camera.position.set(1.5, -0.5, 6);

// Renderer
let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(innerWidth, innerHeight);

// Append our renderer to the webpage. Basically, this appends the `canvas` to our webpage.
// document.body.appendChild(renderer.domElement);
document.getElementById('d1').appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

// Create a texture loader
const textureLoader = new THREE.TextureLoader();

// Load the image
const texture = textureLoader.load('images/healthdata2.png');

// Create a material
const material = new THREE.MeshBasicMaterial({ map: texture });

// Create a geometry
const geometry = new THREE.PlaneGeometry(5, 5);

// Create a mesh
const plane2 = new THREE.Mesh(geometry, material);
plane2.position.set(-2, 0, -2);
plane2.scale.set(5.5, 5.5, 5.5);
plane2.rotation.set(0.1, 0.2 ,-0.05);
scene.add(plane2);

// Create our geometry
let circleGeometry = new THREE.CircleGeometry(3, 1000, 100, 500);

// This section is about accessing our geometry vertices and their locations
circleGeometry.positionData = [];
let v3 = new THREE.Vector3();
for (let i = 0; i < circleGeometry.attributes.position.count; i++) {
  v3.fromBufferAttribute(circleGeometry.attributes.position, i);
  circleGeometry.positionData.push(v3.clone());
}

// A `normal` material uses the coordinates of an object to calculate its color
// let planeMesh = new THREE.MeshBasicMaterial({
//   color: 0x898989,
//   wireframe: true
// });

// let planeMesh = new THREE.MeshNormalMaterial({
//   wireframe: true
// });

let circleMesh = new THREE.ShaderMaterial({
  uniforms: {
    colorA: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
    colorB: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
    colorC: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
    colorD: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
  },
  vertexShader: document.getElementById('vertex3').textContent,
  fragmentShader: document.getElementById('fragment3').textContent,
  // color: 0xffffff
  // wireframe: true
});

// Combine both, and add it to the scene.
let circle = new THREE.Line(circleGeometry, circleMesh);
circle.position.set(-2, 0, 0);
circle.scale.set(2, 2, 2);
scene.add(circle);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let noise = openSimplexNoise.makeNoise4D(Date.now());
let clock = new THREE.Clock();

// Load CSV data
let csvData = [];
Papa.parse("csv/healthdata_active_calories_with_values2.csv", {
  download: true,
  header: false,
  dynamicTyping: true,
  complete: function (results) {
    results.data.forEach(row => {
      csvData.push(row[0]);
    });
    console.log(csvData);
    // Start the animation loop after the CSV data has loaded
    startAnimationLoop();
  }
});

// Create our geometry
let sphereGeometry = new THREE.SphereGeometry(2, 50, 50);

// This section is about accessing our geometry vertices and their locations
sphereGeometry.positionData = [];
let v32 = new THREE.Vector3();
for (let i = 0; i < sphereGeometry.attributes.position.count; i++) {
  v32.fromBufferAttribute(sphereGeometry.attributes.position, i);
  sphereGeometry.positionData.push(v32.clone());
}

// A `normal` material uses the coordinates of an object to calculate its color
let sphereMesh = new THREE.ShaderMaterial({
  uniforms: {
    colorA: { type: 'vec3', value: new THREE.Vector3(0.5, 0.5, 0.5) },

  },
  vertexShader: document.getElementById('vertex1').textContent,
  fragmentShader: document.getElementById('fragment1').textContent,
});

// Combine both, and add it to the scene.
let sphere = new THREE.Line(sphereGeometry, sphereMesh);
sphere.position.set(-2, 0, 1);
sphere.scale.set(0.2, 0.2, 0.2);
scene.add(sphere);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let noise2 = openSimplexNoise.makeNoise4D(Date.now());
let clock2 = new THREE.Clock();

// Load CSV data
let csvData2 = [];
Papa.parse("csv/healthdata_heart_rate_with_values2.csv", {
  download: true,
  header: false,
  dynamicTyping: true,
  complete: function (results) {
    results.data.forEach(row => {
      csvData2.push(row[0]);
    });
    console.log(csvData2);
    // Start the animation loop after the CSV data has loaded
    startAnimationLoop();
  }
});

// Create our geometry
let planeGeometry = new THREE.BoxGeometry(3, 3, 3, 20, 50, 50);

// This section is about accessing our geometry vertices and their locations
planeGeometry.positionData = [];
let v33 = new THREE.Vector3();
for (let i = 0; i < planeGeometry.attributes.position.count; i++) {
  v33.fromBufferAttribute(planeGeometry.attributes.position, i);
  planeGeometry.positionData.push(v33.clone());
}

// A `normal` material uses the coordinates of an object to calculate its color
// let planeMesh = new THREE.MeshBasicMaterial({
//   color: 0x898989,
//   wireframe: true
// });

// let planeMesh = new THREE.MeshNormalMaterial({
//   wireframe: true
// });

let planeMesh = new THREE.ShaderMaterial({
  uniforms: {
    colorA: { type: 'vec3', value: new THREE.Vector3(0.5, 0.5, 0.5) },

  },
  vertexShader: document.getElementById('vertex2').textContent,
  fragmentShader: document.getElementById('fragment2').textContent,
  wireframe: true
});

// Combine both, and add it to the scene.
let plane = new THREE.Mesh(planeGeometry, planeMesh);
plane.position.set(1, 1, 2);
plane.scale.set(0.3, 0.3, 0.3);
scene.add(plane);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let noise3 = openSimplexNoise.makeNoise4D(Date.now());
let clock3 = new THREE.Clock();

// Load CSV data
let csvData3 = [];
Papa.parse("csv/healthdata_activity_intensity_with_values2.csv", {
  download: true,
  header: false,
  dynamicTyping: true,
  complete: function (results) {
    results.data.forEach(row => {
      csvData3.push(row[0]);
    });
    console.log(csvData3);
    // Start the animation loop after the CSV data has loaded
    startAnimationLoop();
  }
});

let torusGeometry = new THREE.TorusGeometry(5, 2, 150, 150, 7);

// This section is about accessing our geometry vertices and their locations
torusGeometry.positionData = [];
let v34 = new THREE.Vector3();
for (let i = 0; i < torusGeometry.attributes.position.count; i++) {
  v34.fromBufferAttribute(torusGeometry.attributes.position, i);
  torusGeometry.positionData.push(v34.clone());
}

// Create a new Float32Array to hold the colors
let colors7 = new Float32Array(torusGeometry.attributes.position.count * 3); // *3 because each color is r,g,b
// let color7 = new THREE.Color();

for (let i = 0; i < torusGeometry.attributes.position.count; i++) {
  // Generate a color for each point
  let color7 = new THREE.Color();
  color7.setHSL(i / torusGeometry.attributes.position.count, 1, 0.5); // Set color using hue, saturation, lightness

  // Add the color to the array
  colors7[i * 3] = color7.r;
  colors7[i * 3 + 1] = color7.g;
  colors7[i * 3 + 2] = color7.b;
}

// Create a BufferAttribute with the color array and add it to the geometry
torusGeometry.setAttribute('color', new THREE.BufferAttribute(colors7, 3));

let vertexShader = `
    varying vec3 vColor;

    void main() {
        vColor = color;

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 2.0;
        gl_Position = projectionMatrix * mvPosition;
    }
`;

let fragmentShader = `
    varying vec3 vColor;

    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
`;

// A `normal` material uses the coordinates of an object to calculate its color
// let planeMesh = new THREE.MeshBasicMaterial({
//   color: 0x898989,
//   wireframe: true
// });

// let planeMesh = new THREE.MeshNormalMaterial({
//   wireframe: true
// });

let torusMesh = new THREE.ShaderMaterial({
  // uniforms: {
  //   colorA: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
  //   colorB: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
  //   colorC: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
  //   colorD: { type: 'vec3', value: new THREE.Vector3(0.25, 0.25, 0.25) },
  // },
  // vertexShader: document.getElementById('vertex').textContent,
  // fragmentShader: document.getElementById('fragment').textContent,
  // wireframe: false
  // color: 0xffffff,
  // size: 0.08
  vertexColors: THREE.VertexColors, // This tells Three.js to use the colors attribute
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

// Combine both, and add it to the scene.
let torus = new THREE.Points(torusGeometry, torusMesh);
torus.scale.set(0.4, 0.4, 0.4);
torus.position.set(-1.1, 0, 0.5);
scene.add(torus);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let noise4 = openSimplexNoise.makeNoise4D(Date.now());
let clock4 = new THREE.Clock();

// Load CSV data
let csvData4 = [];
Papa.parse("csv/healthdata_steps_with_values2.csv", {
  download: true,
  header: false,
  dynamicTyping: true,
  complete: function (results) {
    results.data.forEach(row => {
      csvData4.push(row[0]);
    });
    console.log(csvData4);
    // Start the animation loop after the CSV data has loaded
    startAnimationLoop();
  }
});

// Create our geometry
let torusGeometry2 = new THREE.TorusKnotGeometry(10, 5, 100, 100, 4, 3);

// This section is about accessing our geometry vertices and their locations
torusGeometry2.positionData = [];
let v35 = new THREE.Vector3();
for (let i = 0; i < torusGeometry2.attributes.position.count; i++) {
  v35.fromBufferAttribute(torusGeometry2.attributes.position, i);
  torusGeometry2.positionData.push(v35.clone());
}

// A `normal` material uses the coordinates of an object to calculate its color
// let planeMesh = new THREE.MeshBasicMaterial({
//   color: 0x898989,
//   wireframe: true
// });

// let planeMesh = new THREE.MeshNormalMaterial({
//   wireframe: true
// });

let torusMesh2 = new THREE.ShaderMaterial({
  uniforms: {
    colorA: { type: 'vec3', value: new THREE.Vector3(0.5, 0.5, 0.5) },
    colorB: { type: 'vec3', value: new THREE.Vector3(0.1, 0.1, 0.1) }
  },
  vertexShader: document.getElementById('vertex5').textContent,
  fragmentShader: document.getElementById('fragment5').textContent,
  wireframe: true
});

// Combine both, and add it to the scene.
let torus2 = new THREE.Mesh(torusGeometry2, torusMesh2);
torus2.scale.set(0.02, 0.02, 0.02);
torus2.position.set(1.5, -1.5, 2.5);
scene.add(torus2);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let noise5 = openSimplexNoise.makeNoise4D(Date.now());
let clock5 = new THREE.Clock();

// Load CSV data
let csvData5 = [];
Papa.parse("csv/healthdata_stress_level_with_values2.csv", {
  download: true,
  header: false,
  dynamicTyping: true,
  complete: function (results) {
    results.data.forEach(row => {
      csvData5.push(row[0]);
    });
    console.log(csvData5);
    // Start the animation loop after the CSV data has loaded
    startAnimationLoop();
  }
});


let currentFrame = 0;

function startAnimationLoop() {
  renderer.setAnimationLoop(() => {
    // Get the time

    let t = clock.getElapsedTime(csvData[currentFrame % csvData.length]) / 2;
    // console.log(Math.sin(csvData[Math.floor(t) % csvData.length]));
    currentFrame++;

    circleGeometry.positionData.forEach((p, idx) => {
      // Use the value from your CSV data in place of the noise function
      let aData = csvData[Math.floor(t) % csvData.length] / 5000;
      // let sineWave = (Math.sin(csvData[Math.floor(t) % csvData.length]) * Math.PI);
      let setNoise = noise(p.x * 100 + aData, p.y * 100 + aData, p.z * 100 + aData, t / 2);

      // let setNoise = csvData[Math.floor(t) % csvData.length] / 10;

      if (isNaN(setNoise)) {
        setNoise = noise(p.x * 100 + aData, p.y * 100 + aData, p.z * 100 + aData, t / 2);
      }

      // Using our Vector3 function, copy the point data, and multiply it by the noise
      // this looks confusing - but it's just multiplying noise by the position at each vertice
      v3.copy(p).addScaledVector(p, setNoise);
      // Update the positions
      circleGeometry.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
    });
    // console.log(sineWave);
    // Some housekeeping so that the sphere looks "right"
    circleGeometry.computeVertexNormals();
    circleGeometry.attributes.position.needsUpdate = true;

    // Calculate a new color based on the elapsed time
    // let randomNumber = THREE.MathUtils.randFloat(-100, 100);
    let color = new THREE.Color();
    color.setHSL(t * 0.1 + csvData[Math.floor(t) % csvData.length], 0.5, 0.2);

    let color2 = new THREE.Color();
    color2.setHSL(t * -0.1 + csvData[Math.floor(t) % csvData.length], 0.5, 0.2);

    let color3 = new THREE.Color();
    color3.setHSL(t * 0.2 + csvData[Math.floor(t) % csvData.length], 0.5, 0.2);

    let color4 = new THREE.Color();
    color4.setHSL(t * -0.2 + csvData[Math.floor(t) % csvData.length], 0.5, 0.2);

    // Update the colorA uniform with the new color
    circleMesh.uniforms.colorA.value = color;
    circleMesh.uniforms.colorB.value = color2;
    circleMesh.uniforms.colorC.value = color3;
    circleMesh.uniforms.colorD.value = color4;

    let t2 = clock2.getElapsedTime() / 2;
    // console.log(t * 0.1);

    sphereGeometry.positionData.forEach((p, idx) => {
      // Use the value from your CSV data in place of the noise function

      let setNoise2 = noise2(p.x * 0.4 + csvData2[Math.floor(t2) % csvData2.length] / 300, p.y * 0.4 + csvData2[Math.floor(t2) % csvData2.length] / 300, p.z * 0.4 + csvData2[Math.floor(t2) % csvData2.length] / 300, t2 * 0.3);

      // let setNoise = csvData[Math.floor(t) % csvData.length] / 10;

      if (isNaN(setNoise2)) {
        setNoise2 = noise2(p.x * 0.5, p.y * 0.5, p.z * 0.5, t2 * 0.3);
      }

      // Using our Vector3 function, copy the point data, and multiply it by the noise
      // this looks confusing - but it's just multiplying noise by the position at each vertice
      v32.copy(p).addScaledVector(p, setNoise2);
      // Update the positions
      sphereGeometry.attributes.position.setXYZ(idx, v32.x, v32.y, v32.z);
    });
    // Some housekeeping so that the sphere looks "right"
    sphereGeometry.computeVertexNormals();
    sphereGeometry.attributes.position.needsUpdate = true;

    // Calculate a new color based on the elapsed time
    // let randomNumber = THREE.MathUtils.randFloat(-100, 100);
    let color5 = new THREE.Color();
    color5.setHSL(t2 * 0.1 + csvData2[Math.floor(t2) % csvData2.length], 0.5, 0.3);

    // Update the colorA uniform with the new color
    sphereMesh.uniforms.colorA.value = color5;

    let t3 = clock3.getElapsedTime() / 2;
    // console.log(csvData[currentFrame]);
    // currentFrame++;

    planeGeometry.positionData.forEach((p, idx) => {
      // Use the value from your CSV data in place of the noise function
      // let sineWave = (Math.sin(csvData[Math.floor(t) % csvData.length]) * Math.PI);
      let setNoise3 = noise3(p.x * 0.8, p.y * 0.8, p.z * 0.8, (Math.sin(t3 / 2 + csvData3[currentFrame % csvData3.length] / 4000) * Math.PI));

      // let setNoise = csvData[Math.floor(t) % csvData.length] / 10;

      if (isNaN(setNoise3)) {
        setNoise3 = noise3(p.x * 0.8, p.y * 0.8, p.z * 0.8, (Math.sin(t3 / 2 + csvData3[currentFrame % csvData3.length] / 4000) * Math.PI));
      }

      // Using our Vector3 function, copy the point data, and multiply it by the noise
      // this looks confusing - but it's just multiplying noise by the position at each vertice
      v33.copy(p).addScaledVector(p, setNoise3);
      // Update the positions
      planeGeometry.attributes.position.setXYZ(idx, v33.x, v33.y, v33.z);
    });
    // console.log(sineWave);
    // Some housekeeping so that the sphere looks "right"
    planeGeometry.computeVertexNormals();
    planeGeometry.attributes.position.needsUpdate = true;

    // Calculate a new color based on the elapsed time
    // let randomNumber = THREE.MathUtils.randFloat(-100, 100);
    let color6 = new THREE.Color();
    color6.setHSL(t3 * -0.1 + csvData3[Math.floor(t3) % csvData3.length], 0.5, 0.3);

    // Update the colorA uniform with the new color
    planeMesh.uniforms.colorA.value = color6;

    let t4 = clock4.getElapsedTime() / 2;
    // console.log(Math.sin(csvData[Math.floor(t) % csvData.length]));
    // currentFrame++;

    torusGeometry.positionData.forEach((p, idx) => {
      // Use the value from your CSV data in place of the noise function
      let aData = csvData4[Math.floor(t4) % csvData4.length] / 5000;
      // let sineWave = (Math.sin(csvData[Math.floor(t) % csvData.length]) * Math.PI);
      let setNoise4 = noise4(p.x * 10000, p.y * 10000, p.z * 10000, t4 / 2);

      // let setNoise = csvData[Math.floor(t) % csvData.length] / 10;

      if (isNaN(setNoise4)) {
        setNoise4 = noise4(p.x * 10000, p.y * 10000, p.z * 10000, t4 / 2);
      }

      // Using our Vector3 function, copy the point data, and multiply it by the noise
      // this looks confusing - but it's just multiplying noise by the position at each vertice
      v34.copy(p).addScaledVector(p, setNoise4);
      // Update the positions
      torusGeometry.attributes.position.setXYZ(idx, v34.x, v34.y, v34.z);

      // console.log(sineWave);

      // Generate a new color for each point
      let color7 = new THREE.Color();
      color7.setHSL((t4 / 5 + aData / 20 + idx / torusGeometry.attributes.position.count) % 1, 0.5, 0.3); // Set color using hue, saturation, lightness

      // Update the color in the array
      colors7[idx * 3] = color7.r;
      colors7[idx * 3 + 1] = color7.g;
      colors7[idx * 3 + 2] = color7.b;

    });

    // Update the colors attribute with the new colors
    torusGeometry.attributes.color.needsUpdate = true;

    // Some housekeeping so that the sphere looks "right"
    torusGeometry.computeVertexNormals();
    torusGeometry.attributes.position.needsUpdate = true;

    let t5 = clock5.getElapsedTime(csvData5[currentFrame % csvData5.length]) / 2;
    // console.log(csvData[currentFrame]);
    // currentFrame++;

    torusGeometry2.positionData.forEach((p, idx) => {
      // Use the value from your CSV data in place of the noise function
      let aData2 = csvData5[Math.floor(t5) % csvData5.length] / 1000;
      // let sineWave = (Math.sin(csvData[Math.floor(t) % csvData.length]) * Math.PI);
      let setNoise5 = noise5(p.x * 0.8 + aData2, p.y * 0.8 + aData2, p.z * 0.8 + aData2, t5 / 2);

      // let setNoise = csvData[Math.floor(t) % csvData.length] / 10;

      if (isNaN(setNoise5)) {
        setNoise5 = noise5(p.x * 0.8 + aData2, p.y * 0.8 + aData2, p.z * 0.8 + aData2, t5 / 2);
      }

      // Using our Vector3 function, copy the point data, and multiply it by the noise
      // this looks confusing - but it's just multiplying noise by the position at each vertice
      v35.copy(p).addScaledVector(p, setNoise5);
      // Update the positions
      torusGeometry2.attributes.position.setXYZ(idx, v35.x, v35.y, v35.z);
    });
    // console.log(sineWave);
    // Some housekeeping so that the sphere looks "right"
    torusGeometry2.computeVertexNormals();
    torusGeometry2.attributes.position.needsUpdate = true;

    // Calculate a new color based on the elapsed time
    // let randomNumber = THREE.MathUtils.randFloat(-100, 100);
    let color9 = new THREE.Color();
    color9.setHSL(t5 * 0.1 + csvData5[Math.floor(t5) % csvData5.length], 0.5, 0.3);

    let color10 = new THREE.Color();
    color10.setHSL(t5 * 0.2 + csvData5[Math.floor(t5) % csvData5.length], 0.5, 0.3);

    // Update the colorA uniform with the new color
    torusMesh2.uniforms.colorA.value = color9;
    torusMesh2.uniforms.colorB.value = color10;

    // Render the sphere onto the page again.
    renderer.render(scene, camera);
  });
}
