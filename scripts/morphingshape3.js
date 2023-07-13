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
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

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
  vertexShader: document.getElementById('vertex').textContent,
  fragmentShader: document.getElementById('fragment').textContent,
  // color: 0xffffff
  wireframe: true
});

// Combine both, and add it to the scene.
let circle = new THREE.Line(circleGeometry, circleMesh);
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

    // Render the sphere onto the page again.
    renderer.render(scene, camera);
  });
}
