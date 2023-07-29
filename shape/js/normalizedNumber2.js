var numbers2 = [];
var isFirstRow2 = true;
var min2 = Number.POSITIVE_INFINITY;
var max2 = Number.NEGATIVE_INFINITY;
var normalizedNumber2 = 0;
var normalizedNumberTone2 = 0;

Papa.parse('csv/healthdata_activity_intensity_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow2) {
            isFirstRow2 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min2 = Math.min(min2, value);
            max2 = Math.max(max2, value);
            numbers2.push(value);
        }
    },
    complete: function () {
        console.log('activity_intensity_with_values2 has been loaded.');
        selectRandomNumber2();
        selectRandomNumberTone2();
    }
});


function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber2() {
    let randomNumber2 = numbers2[Math.floor(Math.random() * numbers2.length)];
    normalizedNumber2 = parseInt(normalize(randomNumber2, min2, max2, 1, 10));
    console.log(normalizedNumber2);
    window.value2 = normalizedNumber2;
}

function selectRandomNumberTone2() {
    let randomNumber2 = numbers2[Math.floor(Math.random() * numbers2.length)];
    normalizedNumberTone2 = parseInt(normalize(randomNumber2, min2, max2, 1, 108));
    console.log(normalizedNumberTone2);
    window.valueTone2 = normalizedNumberTone2;
}


