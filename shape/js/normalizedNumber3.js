var numbers3 = [];
var isFirstRow3 = true;
var min3 = Number.POSITIVE_INFINITY;
var max3 = Number.NEGATIVE_INFINITY;
var normalizedNumber3 = 0;
var normalizedNumberTone3 = 0;

Papa.parse('csv/healthdata_heart_rate_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow3) {
            isFirstRow3 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min3 = Math.min(min3, value);
            max3 = Math.max(max3, value);
            numbers3.push(value);
        }
    },
    complete: function () {
        console.log('heart_rate_with_values2 has been loaded.');
        selectRandomNumber3();
        selectRandomNumberTone3();
    }
});


function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber3() {
    let randomNumber3 = numbers3[Math.floor(Math.random() * numbers3.length)];
    normalizedNumber3 = parseInt(normalize(randomNumber3, min3, max3, 1, 10));
    console.log(normalizedNumber3);
    window.value3 = normalizedNumber3;
}

function selectRandomNumberTone3() {
    let randomNumber3 = numbers3[Math.floor(Math.random() * numbers3.length)];
    normalizedNumberTone3 = parseInt(normalize(randomNumber3, min3, max3, 1, 108));
    console.log(normalizedNumberTone3);
    window.valueTone3 = normalizedNumberTone3;
}

