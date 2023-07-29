var numbers6 = [];
var isFirstRow6 = true;
var min6 = Number.POSITIVE_INFINITY;
var max6 = Number.NEGATIVE_INFINITY;
var normalizedNumber6 = 0;
var normalizedNumberTone6 = 0;

Papa.parse('csv/healthdata_ascent_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow6) {
            isFirstRow6 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min6 = Math.min(min6, value);
            max6 = Math.max(max6, value);
            numbers6.push(value);
        }
    },
    complete: function () {
        console.log('ascent_with_values2 has been loaded.');
        selectRandomNumber6();
        selectRandomNumberTone6();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber6() {
    let randomNumber6 = numbers6[Math.floor(Math.random() * numbers6.length)];
    normalizedNumber6 = parseInt(normalize(randomNumber6, min6, max6, 1, 10));
    console.log(normalizedNumber6);
    window.value6 = normalizedNumber6;
}

function selectRandomNumberTone6() {
    let randomNumber6 = numbers6[Math.floor(Math.random() * numbers6.length)];
    normalizedNumberTone6 = parseInt(normalize(randomNumber6, min6, max6, 1, 108));
    console.log(normalizedNumberTone6);
    window.valueTone6 = normalizedNumberTone6;
}

