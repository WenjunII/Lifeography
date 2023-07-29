var numbers5 = [];
var isFirstRow5 = true;
var min5 = Number.POSITIVE_INFINITY;
var max5 = Number.NEGATIVE_INFINITY;
var normalizedNumber5 = 0;
var normalizedNumberTone5 = 0;

Papa.parse('csv/healthdata_active_time_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow5) {
            isFirstRow5 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min5 = Math.min(min5, value);
            max5 = Math.max(max5, value);
            numbers5.push(value);
        }
    },
    complete: function () {
        console.log('active_time_with_values2 has been loaded.');
        selectRandomNumber5();
        selectRandomNumberTone5();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber5() {
    let randomNumber5 = numbers5[Math.floor(Math.random() * numbers5.length)];
    normalizedNumber5 = parseInt(normalize(randomNumber5, min5, max5, 1, 100));
    console.log(normalizedNumber5);
    window.value5 = normalizedNumber5;
}

function selectRandomNumberTone5() {
    let randomNumber5 = numbers5[Math.floor(Math.random() * numbers5.length)];
    normalizedNumberTone5 = parseInt(normalize(randomNumber5, min5, max5, 1, 108));
    console.log(normalizedNumberTone5);
    window.valueTone5 = normalizedNumberTone5;
}

