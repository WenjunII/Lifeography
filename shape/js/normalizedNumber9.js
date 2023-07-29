var numbers9 = [];
var isFirstRow9 = true;
var min9 = Number.POSITIVE_INFINITY;
var max9 = Number.NEGATIVE_INFINITY;
var normalizedNumber9 = 0;
var normalizedNumberTone9 = 0;

Papa.parse('csv/healthdata_intensity_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow9) {
            isFirstRow9 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min9 = Math.min(min9, value);
            max9 = Math.max(max9, value);
            numbers9.push(value);
        }
    },
    complete: function () {
        console.log('intensity_with_values2 has been loaded.');
        selectRandomNumber9();
        selectRandomNumberTone9();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber9() {
    let randomNumber9 = numbers9[Math.floor(Math.random() * numbers9.length)];
    normalizedNumber9 = parseInt(normalize(randomNumber9, min9, max9, 1, 10));
    console.log(normalizedNumber9);
    window.value9 = normalizedNumber9;
}

function selectRandomNumberTone9() {
    let randomNumber9 = numbers9[Math.floor(Math.random() * numbers9.length)];
    normalizedNumberTone9 = parseInt(normalize(randomNumber9, min9, max9, 1, 108));
    console.log(normalizedNumberTone9);
    window.valueTone9 = normalizedNumberTone9;
}
