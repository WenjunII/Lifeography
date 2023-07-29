// Source via foxbat07 
// https://github.com/foxbat07/Supershapes

var gui = new dat.GUI();
var getValue1 = window.value1;
var getValue2 = window.value2;
var getValue3 = window.value3;
var getValue4 = window.value4;
var getValue5 = window.value5;
var getValue6 = window.value6;
var getValue7 = window.value7;
var getValue8 = window.value8;
var getValue9 = window.value9;
var getValue10 = window.value10;
var getValue11 = window.value11;
var getValue12 = window.value12;
var getValue13 = window.value13;

var controls = new function () {
    this.takeImage = function () { saveAsImage() };
    this.exportShape = function () { exportGLTF() };
    this.researchLink = function () { window.open('http://paulbourke.net/geometry/supershape/') };
    this.backgroundColor = 0x1a1a1a;
    this.form = 'Fullform';
    this.emissiveColor = Math.floor(Math.random() * 0xFFFFFF);
    this.shapeColor1 = Math.floor(Math.random() * 0xFFFFFF);
    this.stripes = 1;
    this.shapeColor2 = Math.floor(Math.random() * 0xFFFFFF);

    this.radialSegments = 100;
    this.heightSegments = 100;
    this.wireframe = false;

    this.radius = 1;
    this.m1 = getValue1;
    this.n11 = getValue2;
    this.n21 = getValue3;
    this.n31 = getValue4;

    this.height = getValue13;
    this.m2 = getValue5;
    this.n12 = getValue6;
    this.n22 = getValue7;
    this.n32 = getValue8;

    this.a1 = getValue9;
    this.b1 = getValue10;
    this.a2 = getValue11;
    this.b2 = getValue12;

    this.randomGenerate = function () { location.reload(); };
};

// var general = gui.addFolder('Superformula 3D');
// general.add(controls, 'takeImage').name('Take screenshot');
// general.add(controls, 'exportShape').name('Export Shape (ff)');
// general.add(controls, 'researchLink').name('Learn more');
// general.open();

// var f0 = gui.addFolder('Form & Color');
// f0.addColor(controls, 'backgroundColor').name('Background');
// f0.add(controls, 'form', ['None', 'Lines', 'Points', 'Fullform']);
// // f0.add(controls, 'wireframe').name('Show Quad Wireframe');
// f0.addColor(controls, 'shapeColor1').name('Mesh Color');
// f0.addColor(controls, 'emissiveColor').name('Emissive Color');
// f0.add(controls, 'stripes', 0, 3).step(1).name('Stripe Freq');
// f0.addColor(controls, 'shapeColor2').name('Stripe Color');
// f0.open();

// var f1 = gui.addFolder('Supershape 1');
// f1.add(controls, 'm1', 0, 100).step(1).name('m1 - lat freq');
// f1.add(controls, 'radius', 1, 5);
// f1.add(controls, 'n11', 0.1, 10);
// f1.add(controls, 'n21', 0.1, 10);
// f1.add(controls, 'n31', 0.1, 10);
// f1.add(controls, 'a1', 0.1, 10);
// f1.add(controls, 'b1', 0.1, 10);
// f1.close();

// var f2 = gui.addFolder('Supershape 2');
// f2.add(controls, 'm2', 0, 100).step(1).name('m2 - long freq');
// f2.add(controls, 'height', 1, 5);
// f2.add(controls, 'n12', 0.1, 10);
// f2.add(controls, 'n22', 0.1, 10);
// f2.add(controls, 'n32', 0.1, 10);
// f2.add(controls, 'a2', 0.1, 20);
// f2.add(controls, 'b2', 0.1, 20);
// f2.close();

gui.add(controls, 'randomGenerate').name('Generate Again');

var f3 = gui.addFolder('Health Data');
f3.add(controls, 'm1', 0, 100).step(1).name('Active Calories');
f3.add(controls, 'n11', 0.1, 10).name('Activity Intensity');
f3.add(controls, 'n21', 0.1, 10).name('Heart Rate');
f3.add(controls, 'n31', 0.1, 10).name('Steps');
f3.add(controls, 'm2', 0, 100).step(1).name('Active Time');
f3.add(controls, 'n12', 0.1, 10).name('Ascent');
f3.add(controls, 'n22', 0.1, 10).name('Cycles');
f3.add(controls, 'n32', 0.1, 10).name('Distance');
f3.add(controls, 'a1', 0.1, 10).name('Intensity');
f3.add(controls, 'b1', 0.1, 10).name('Stress Level');
f3.add(controls, 'a2', 0.1, 20).name('Descent');
f3.close();

console.log(getValue1);
console.log(getValue2);
console.log(getValue3);
console.log(getValue4);
console.log(getValue5);
console.log(getValue6);
console.log(getValue7);
console.log(getValue8);
console.log(getValue9);
console.log(getValue10);
console.log(getValue11);
console.log(getValue12);
console.log(getValue13);
