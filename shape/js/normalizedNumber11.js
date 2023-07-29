var numbers11 = [];
var isFirstRow11 = true;
var min11 = Number.POSITIVE_INFINITY;
var max11 = Number.NEGATIVE_INFINITY;
var normalizedNumber11 = 0;
var normalizedNumberTone11 = 0;

Papa.parse('csv/healthdata_descent_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow11) {
            isFirstRow11 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min11 = Math.min(min11, value);
            max11 = Math.max(max11, value);
            numbers11.push(value);
        }
    },
    complete: function () {
        console.log('descent_with_values2 has been loaded.');
        selectRandomNumber11();
        selectRandomNumberTone11();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber11() {
    let randomNumber11 = numbers11[Math.floor(Math.random() * numbers11.length)];
    normalizedNumber11 = parseInt(normalize(randomNumber11, min11, max11, 1, 20));
    console.log(normalizedNumber11);
    window.value11 = normalizedNumber11;
}

function selectRandomNumberTone11() {
    let randomNumber11 = numbers11[Math.floor(Math.random() * numbers11.length)];
    normalizedNumberTone11 = parseInt(normalize(randomNumber11, min11, max11, 1, 108));
    console.log(normalizedNumberTone11);
    window.valueTone11 = normalizedNumberTone11;
}

