var numbers1 = [];
var isFirstRow1 = true;
var min1 = Number.POSITIVE_INFINITY;
var max1 = Number.NEGATIVE_INFINITY;
var normalizedNumber1 = 0;
var normalizedNumberTone1 = 0;

Papa.parse('csv/healthdata_active_calories_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow1) {
            isFirstRow1 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min1 = Math.min(min1, value);
            max1 = Math.max(max1, value);
            numbers1.push(value);
        }
    },
    complete: function () {
        console.log('active_calories_with_values2 has been loaded.');
        selectRandomNumber1();
        selectRandomNumberTone1();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber1() {
    let randomNumber1 = numbers1[Math.floor(Math.random() * numbers1.length)];
    normalizedNumber1 = parseInt(normalize(randomNumber1, min1, max1, 1, 100));
    console.log(normalizedNumber1);
    window.value1 = normalizedNumber1;
}

function selectRandomNumberTone1() {
    let randomNumber1 = numbers1[Math.floor(Math.random() * numbers1.length)];
    normalizedNumberTone1 = parseInt(normalize(randomNumber1, min1, max1, 1, 108));
    console.log(normalizedNumberTone1);
    window.valueTone1 = normalizedNumberTone1;
}



