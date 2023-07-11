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
let sphereGeometry = new THREE.SphereGeometry(2, 100, 100);

// This section is about accessing our geometry vertices and their locations
sphereGeometry.positionData = [];
let v3 = new THREE.Vector3();
for (let i = 0; i < sphereGeometry.attributes.position.count; i++) {
  v3.fromBufferAttribute(sphereGeometry.attributes.position, i);
  sphereGeometry.positionData.push(v3.clone());
}

// A `normal` material uses the coordinates of an object to calculate its color
let sphereMesh = new THREE.MeshNormalMaterial();

// Combine both, and add it to the scene.
let sphere = new THREE.Mesh(sphereGeometry, sphereMesh);
scene.add(sphere);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let noise = openSimplexNoise.makeNoise4D(Date.now());
let clock = new THREE.Clock();

// Load CSV data
let csvData = [];
Papa.parse("csv/healthdata_heart_rate_with_values2.csv", {
    download: true,
    header: false,
    dynamicTyping: true,
    complete: function(results) {
        results.data.forEach(row => {
            csvData.push(row[0]);
        });
        // Start the animation loop after the CSV data has loaded
        startAnimationLoop();
    }
});

function startAnimationLoop() {
    renderer.setAnimationLoop(() => {
        // Get the time
        let t = clock.getElapsedTime() / 1.5;

        sphereGeometry.positionData.forEach((p, idx) => {
            // Use the value from your CSV data in place of the noise function

            let setNoise = noise(p.x * 0.4 + csvData[Math.floor(t) % csvData.length] / 300, p.y * 0.4 + csvData[Math.floor(t) % csvData.length] / 300, p.z * 0.4 + csvData[Math.floor(t) % csvData.length] / 300, t * 0.3);

            // let setNoise = csvData[Math.floor(t) % csvData.length] / 10;

            if (isNaN(setNoise)) {
              setNoise = noise(p.x * 0.5, p.y * 0.5, p.z * 0.5, t * 1);;
          }

            // Using our Vector3 function, copy the point data, and multiply it by the noise
            // this looks confusing - but it's just multiplying noise by the position at each vertice
            v3.copy(p).addScaledVector(p, setNoise);
            // Update the positions
            sphereGeometry.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
        });
        // Some housekeeping so that the sphere looks "right"
        sphereGeometry.computeVertexNormals();
        sphereGeometry.attributes.position.needsUpdate = true;

        // Render the sphere onto the page again.
        renderer.render(scene, camera);
    });
}
