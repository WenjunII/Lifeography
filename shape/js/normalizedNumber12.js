function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 
}


var normalizedNumber12 = getRandomInt(1, 20);
console.log('random value has been loaded.');
// console.log(normalizedNumber12);

window.value12 = normalizedNumber12;