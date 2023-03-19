console.log('SCRIPT LOADED');

let sketch = function (p) {
    let loaded = false;
    let random13;
    // let h, s, l, a, q, n;
    let table13;
    let columnData13 = [];
    let audioContext = new AudioContext();
    let gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    let heartrateValue;
    let heartRate;

    p.preload = function () {
        table13 = p.loadTable('csv/healthdata_heart_rate_with_values.csv', 'csv', 'header', p.onTableLoaded);
    };

    p.onTableLoaded = function () {
        console.log('CSV file loaded successfully');
        console.log(table13.getRowCount() + ' rows loaded');
        for (let v = 0; v < table13.getRowCount(); v++) {
            let row13 = table13.getRow(v);
            columnData13.push(row13.get('heart_rate'));
        }
        console.log(columnData13);
        loaded = true;
    }

    p.setup = function () {
        p.createCanvas(800, 800);
        p.colorMode(p.HSL, 360, 100, 100, 1);
        // p.angleMode(p.DEGREES);
        p.frameRate(2);
    }

    p.draw = function () {
        random13 = p.int(p.random(1, 227985));
    }

    setInterval(function () {
        heartRate = columnData13[random13];
        heartrateValue = p.map(heartRate, 0, 200, 3000, 5000);
        let oscillator = audioContext.createOscillator();
        oscillator.type = "sawtooth";
        oscillator.connect(gainNode);
        oscillator.frequency.value = heartrateValue;
        gainNode.gain.value = 0.03;
        oscillator.start();
        setTimeout(function () {
            oscillator.stop();
        }, 100);
    }, 2000);
};

let myp5 = new p5(sketch, 'c1');
setTimeout(() => {
    if (myp5.canvas) {
        myp5.canvas.style.display = 'none';
    }
}, 1000);

