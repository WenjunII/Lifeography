function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 
}


var normalizedNumber13 = getRandomInt(1, 5);
console.log('random value has been loaded.');
// console.log(normalizedNumber13);

window.value13 = normalizedNumber13;