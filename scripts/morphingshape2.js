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
let planeGeometry = new THREE.BoxGeometry(3, 3, 3, 20, 50, 50);

// This section is about accessing our geometry vertices and their locations
planeGeometry.positionData = [];
let v3 = new THREE.Vector3();
for (let i = 0; i < planeGeometry.attributes.position.count; i++) {
  v3.fromBufferAttribute(planeGeometry.attributes.position, i);
  planeGeometry.positionData.push(v3.clone());
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
  vertexShader: document.getElementById('vertex').textContent,
  fragmentShader: document.getElementById('fragment').textContent,
  wireframe: true
});

// Combine both, and add it to the scene.
let plane = new THREE.Mesh(planeGeometry, planeMesh);
scene.add(plane);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let noise = openSimplexNoise.makeNoise4D(Date.now());
let clock = new THREE.Clock();

// Load CSV data
let csvData = [];
Papa.parse("csv/healthdata_activity_intensity_with_values2.csv", {
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

    let t = clock.getElapsedTime() / 2;
    // console.log(csvData[currentFrame]);
    currentFrame++;

    planeGeometry.positionData.forEach((p, idx) => {
      // Use the value from your CSV data in place of the noise function
      // let sineWave = (Math.sin(csvData[Math.floor(t) % csvData.length]) * Math.PI);
      let setNoise = noise(p.x * 0.8, p.y * 0.8, p.z * 0.8, (Math.sin(t / 2 + csvData[currentFrame % csvData.length] / 4000) * Math.PI));

      // let setNoise = csvData[Math.floor(t) % csvData.length] / 10;

      if (isNaN(setNoise)) {
        setNoise = noise(p.x * 0.8, p.y * 0.8, p.z * 0.8, (Math.sin(t / 2 + csvData[currentFrame % csvData.length] / 4000) * Math.PI));
      }

      // Using our Vector3 function, copy the point data, and multiply it by the noise
      // this looks confusing - but it's just multiplying noise by the position at each vertice
      v3.copy(p).addScaledVector(p, setNoise);
      // Update the positions
      planeGeometry.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
    });
    // console.log(sineWave);
    // Some housekeeping so that the sphere looks "right"
    planeGeometry.computeVertexNormals();
    planeGeometry.attributes.position.needsUpdate = true;

    // Calculate a new color based on the elapsed time
    // let randomNumber = THREE.MathUtils.randFloat(-100, 100);
    let color = new THREE.Color();
    color.setHSL(t * -0.1 + csvData[Math.floor(t) % csvData.length], 0.5, 0.3);

    // Update the colorA uniform with the new color
    planeMesh.uniforms.colorA.value = color;

    // Render the sphere onto the page again.
    renderer.render(scene, camera);
  });
}
