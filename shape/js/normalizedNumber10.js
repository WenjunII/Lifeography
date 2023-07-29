var numbers10 = [];
var isFirstRow10 = true;
var min10 = Number.POSITIVE_INFINITY;
var max10 = Number.NEGATIVE_INFINITY;
var normalizedNumber10 = 0;
var normalizedNumberTone10 = 0;

Papa.parse('csv/healthdata_stress_level_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow10) {
            isFirstRow10 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min10 = Math.min(min10, value);
            max10 = Math.max(max10, value);
            numbers10.push(value);
        }
    },
    complete: function () {
        console.log('stress_level_with_values2 has been loaded.');
        selectRandomNumber10();
        selectRandomNumberTone10();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber10() {
    let randomNumber10 = numbers10[Math.floor(Math.random() * numbers10.length)];
    normalizedNumber10 = parseInt(normalize(randomNumber10, min10, max10, 1, 10));
    console.log(normalizedNumber10);
    window.value10 = normalizedNumber10;
}

function selectRandomNumberTone10() {
    let randomNumber10 = numbers10[Math.floor(Math.random() * numbers10.length)];
    normalizedNumberTone10 = parseInt(normalize(randomNumber10, min10, max10, 1, 108));
    console.log(normalizedNumberTone10);
    window.valueTone10 = normalizedNumberTone10;
}

