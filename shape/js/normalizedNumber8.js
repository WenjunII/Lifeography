var numbers8 = [];
var isFirstRow8 = true;
var min8 = Number.POSITIVE_INFINITY;
var max8 = Number.NEGATIVE_INFINITY;
var normalizedNumber8 = 0;
var normalizedNumberTone8 = 0;

Papa.parse('csv/healthdata_distance_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow8) {
            isFirstRow8 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min8 = Math.min(min8, value);
            max8 = Math.max(max8, value);
            numbers8.push(value);
        }
    },
    complete: function () {
        console.log('distance_with_values2 has been loaded.');
        selectRandomNumber8();
        selectRandomNumberTone8();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber8() {
    let randomNumber8 = numbers8[Math.floor(Math.random() * numbers8.length)];
    normalizedNumber8 = parseInt(normalize(randomNumber8, min8, max8, 1, 10));
    console.log(normalizedNumber8);
    window.value8 = normalizedNumber8;
}

function selectRandomNumberTone8() {
    let randomNumber8 = numbers8[Math.floor(Math.random() * numbers8.length)];
    normalizedNumberTone8 = parseInt(normalize(randomNumber8, min8, max8, 1, 108));
    console.log(normalizedNumberTone8);
    window.valueTone8 = normalizedNumberTone8;
}

