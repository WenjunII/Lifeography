var numbers7 = [];
var isFirstRow7 = true;
var min7 = Number.POSITIVE_INFINITY;
var max7 = Number.NEGATIVE_INFINITY;
var normalizedNumber7 = 0;
var normalizedNumberTone7 = 0;

Papa.parse('csv/healthdata_cycles_with_values2.csv', {
    download: true,
    step: function (row) {
        if (isFirstRow7) {
            isFirstRow7 = false;
        } else {
            var value = parseFloat(row.data[0]);  // assuming the value is in the first column
            min7 = Math.min(min7, value);
            max7 = Math.max(max7, value);
            numbers7.push(value);
        }
    },
    complete: function () {
        console.log('cycles_with_values2 has been loaded.');
        selectRandomNumber7();
        selectRandomNumberTone7();
    }
});



function normalize(value, min, max, newMin, newMax) {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

function selectRandomNumber7() {
    let randomNumber7 = numbers7[Math.floor(Math.random() * numbers7.length)];
    normalizedNumber7 = parseInt(normalize(randomNumber7, min7, max7, 1, 10));
    console.log(normalizedNumber7);
    window.value7 = normalizedNumber7;
}

function selectRandomNumberTone7() {
    let randomNumber7 = numbers7[Math.floor(Math.random() * numbers7.length)];
    normalizedNumberTone7 = parseInt(normalize(randomNumber7, min7, max7, 1, 108));
    console.log(normalizedNumberTone7);
    window.valueTone7 = normalizedNumberTone7;
}

