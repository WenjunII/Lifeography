var numbers4 = [];
var isFirstRow4 = true;
var min4 = Number.POSITIVE_INFINITY;
var max4 = Number.NEGATIVE_INFINITY;
var normalizedNumber4 = 0;
var normalizedNumberTone4 = 0;

Papa.parse('csv/healthdata_steps_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow4) {
            isFirstRow4 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min4 = Math.min(min4, value);
            max4 = Math.max(max4, value);
            numbers4.push(value);
        }
    },
    complete: function () {
        console.log('healthdata_steps_with_values2 has been loaded.');
        selectRandomNumber4();
        selectRandomNumberTone4();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber4() {
    let randomNumber4 = numbers4[Math.floor(Math.random() * numbers4.length)];
    normalizedNumber4 = parseInt(normalize(randomNumber4, min4, max4, 1, 10));
    console.log(normalizedNumber4);
    window.value4 = normalizedNumber4;
}

function selectRandomNumberTone4() {
    let randomNumber4 = numbers4[Math.floor(Math.random() * numbers4.length)];
    normalizedNumberTone4 = parseInt(normalize(randomNumber4, min4, max4, 1, 108));
    console.log(normalizedNumberTone4);
    window.valueTone4 = normalizedNumberTone4;
}

