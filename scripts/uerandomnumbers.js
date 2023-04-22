console.log('SCRIPT LOADED');


    let loaded = false;
    let random1, random2, random3, random4, random5, random6, random7, random8, random9, random10, random11, random12;
    // let h, s, l, a, q, n;
    let table1, table2, table3, table4, table5, table6, table7, table8, table9, table10, table11, table12;
    let columnData1 = [];
    let columnData2 = [];
    let columnData3 = [];
    let columnData4 = [];
    let columnData5 = [];
    let columnData6 = [];
    let columnData7 = [];
    let columnData8 = [];
    let columnData9 = [];
    let columnData10 = [];
    let columnData11 = [];
    let columnData12 = [];

    function preload() {
        table1 = loadTable('csv/healthdata_active_calories_with_values.csv', 'csv', 'header', onTableLoaded);
        table2 = loadTable('csv/healthdata_active_time_with_values.csv', 'csv', 'header', onTableLoaded);
        table3 = loadTable('csv/healthdata_ascent_with_values.csv', 'csv', 'header', onTableLoaded);
        table4 = loadTable('csv/healthdata_activity_intensity_with_values.csv', 'csv', 'header', onTableLoaded);
        table5 = loadTable('csv/healthdata_cycles_with_values.csv', 'csv', 'header', onTableLoaded);
        table6 = loadTable('csv/healthdata_descent_with_values.csv', 'csv', 'header', onTableLoaded);
        table7 = loadTable('csv/healthdata_distance_with_values.csv', 'csv', 'header', onTableLoaded);
        table8 = loadTable('csv/healthdata_heart_rate_with_values.csv', 'csv', 'header', onTableLoaded);
        table9 = loadTable('csv/healthdata_intensity_with_values.csv', 'csv', 'header', onTableLoaded);
        table10 = loadTable('csv/healthdata_steps_with_values.csv', 'csv', 'header', onTableLoaded);
        table11 = loadTable('csv/healthdata_stress_level_with_values.csv', 'csv', 'header', onTableLoaded);
        table12 = loadTable('csv/keywords.csv', 'csv', 'header', onTableLoaded);
    };

    function onTableLoaded() {
        console.log('CSV file loaded successfully');
        console.log(table1.getRowCount() + ' rows loaded');
        console.log(table2.getRowCount() + ' rows loaded');
        console.log(table3.getRowCount() + ' rows loaded');
        console.log(table4.getRowCount() + ' rows loaded');
        console.log(table5.getRowCount() + ' rows loaded');
        console.log(table6.getRowCount() + ' rows loaded');
        console.log(table7.getRowCount() + ' rows loaded');
        console.log(table8.getRowCount() + ' rows loaded');
        console.log(table9.getRowCount() + ' rows loaded');
        console.log(table10.getRowCount() + ' rows loaded');
        console.log(table11.getRowCount() + ' rows loaded');
        console.log(table12.getRowCount() + ' rows loaded');
        for (let i = 0; i < table1.getRowCount(); i++) {
            let row1 = table1.getRow(i);
            columnData1.push(row1.get('active_calories'));
        };
        for (let j = 0; j < table2.getRowCount(); j++) {
            let row2 = table2.getRow(j);
            columnData2.push(row2.get('active_time'));
        };
        for (let k = 0; k < table3.getRowCount(); k++) {
            let row3 = table3.getRow(k);
            columnData3.push(row3.get('ascent'));
        };
        for (let l = 0; l < table4.getRowCount(); l++) {
            let row4 = table4.getRow(l);
            columnData4.push(row4.get('current_activity_type_intensity'));
        }
        for (let m = 0; m < table5.getRowCount(); m++) {
            let row5 = table5.getRow(m);
            columnData5.push(row5.get('cycles'));
        }
        for (let n = 0; n < table6.getRowCount(); n++) {
            let row6 = table6.getRow(n);
            columnData6.push(row6.get('descent'));
        }
        for (let o = 0; o < table7.getRowCount(); o++) {
            let row7 = table7.getRow(o);
            columnData7.push(row7.get('distance'));
        }
        for (let q = 0; q < table8.getRowCount(); q++) {
            let row8 = table8.getRow(q);
            columnData8.push(row8.get('heart_rate'));
        }
        for (let r = 0; r < table9.getRowCount(); r++) {
            let row9 = table9.getRow(r);
            columnData9.push(row9.get('intensity'));
        }
        for (let s = 0; s < table10.getRowCount(); s++) {
            let row10 = table10.getRow(s);
            columnData10.push(row10.get('steps'));
        }
        for (let t = 0; t < table11.getRowCount(); t++) {
            let row11 = table11.getRow(t);
            columnData11.push(row11.get('stress_level_value'));
        }
        for (let u = 0; u < table12.getRowCount(); u++) {
            let row12 = table12.getRow(u);
            columnData12.push(row12.get('keywords'));
        }
        console.log(columnData1);
        console.log(columnData2);
        console.log(columnData3);
        console.log(columnData4);
        console.log(columnData5);
        console.log(columnData6);
        console.log(columnData7);
        console.log(columnData8);
        console.log(columnData9);
        console.log(columnData10);
        console.log(columnData11);
        console.log(columnData12);
        loaded = true;
    }

    function setup() {
        createCanvas(windowWidth, windowHeight);
        // p.createCanvas(800, 800);
        // p.background(255);
        // p.colorMode(p.HSL, 360, 100, 100, 1);
        // p.angleMode(p.DEGREES);
        // addMesh1();
        // frameRate(2);
        
        colorMode(HSL, 360, 100, 100, 1);
        // p.angleMode(p.DEGREES);
        // addMesh1();
        frameRate(1);
    }

    function draw() {
        background(0);
        random1 = int(random(1, 38099));
        random2 = int(random(1, 38188));
        random3 = int(random(1, 5984));
        random4 = int(random(1, 414013));
        random5 = int(random(1, 6252));
        random6 = int(random(1, 8710));
        random7 = int(random(1, 16134));
        random8 = int(random(1, 227985));
        random9 = int(random(1, 155928));
        random10 = int(random(1, 29758));
        random11 = int(random(1, 430762));
        random12 = int(random(1, 241));
        if (loaded) {
            // p.background(0);
            let random1Value = columnData1[random1];
            let random1Value2 = map(random1Value, 0, 975, 0, 360);
            let random1Value3 = map(random1Value, 0, 975, 0, 100);
            let random1Value4 = map(random1Value, 0, 975, 20, 60);
            fill(random1Value2, random1Value3, random1Value3, 1);
            textSize(random1Value4);
            text(random1Value, 100, 100);
            let random2Value = columnData2[random2];
            let random2Value2 = map(random2Value, 1, 22693, 0, 360);
            let random2Value3 = map(random2Value, 1, 22693, 0, 100);
            let random2Value4 = map(random2Value, 1, 22693, 20, 60);
            fill(random2Value2, random2Value3, random2Value3, 1);
            textSize(random2Value4);
            text(random2Value, 100, 200);
            let random3Value = columnData3[random3];
            let random3Value2 = map(random3Value, 0.002, 32.423, 0, 360);
            let random3Value3 = map(random3Value, 0.002, 32.423, 0, 100);
            let random3Value4 = map(random3Value, 0.002, 32.423, 20, 60);
            fill(random3Value2, random3Value3, random3Value3, 1);
            textSize(random3Value4);
            text(random3Value, 100, 300);
            let random4Value = columnData4[random4];
            let random4Value2 = map(random4Value, -2, 232, 0, 360);
            let random4Value3 = map(random4Value, -2, 232, 0, 100);
            let random4Value4 = map(random4Value, -2, 232, 20, 60);
            fill(random4Value2, random4Value3, random4Value3, 1);
            textSize(random4Value4);
            text(random4Value, 100, 400);
            let random5Value = columnData5[random5];
            let random5Value2 = map(random5Value, 0, 11.128, 0, 360);
            let random5Value3 = map(random5Value, 0, 11.128, 0, 100);
            let random5Value4 = map(random5Value, 0, 11.128, 20, 60);
            fill(random5Value2, random5Value3, random5Value3, 1);
            textSize(random5Value4);
            text(random5Value, 100, 500);
            let random6Value = columnData6[random6];
            let random6Value2 = map(random6Value, 0, 9.42, 0, 360);
            let random6Value3 = map(random6Value, 0, 9.42, 0, 100);
            let random6Value4 = map(random6Value, 0, 9.42, 20, 60);
            fill(random6Value2, random6Value3, random6Value3, 1);
            textSize(random6Value4);
            text(random6Value, 100, 600);
            let random7Value = columnData7[random7];
            let random7Value2 = map(random7Value, 0, 15481.25, 0, 360);
            let random7Value3 = map(random7Value, 0, 15481.25, 0, 100);
            let random7Value4 = map(random7Value, 0, 15481.25, 20, 60);
            fill(random7Value2, random7Value3, random7Value3, 1);
            textSize(random7Value4);
            text(random7Value, 500, 100);
            let random8Value = columnData8[random8];
            let random8Value2 = map(random8Value, 0, 232, 0, 360);
            let random8Value3 = map(random8Value, 0, 232, 0, 100);
            let random8Value4 = map(random8Value, 0, 232, 20, 60);
            fill(random8Value2, random8Value3, random8Value3, 1);
            textSize(random8Value4);
            text(random8Value, 500, 200);
            let random9Value = columnData9[random9];
            let random9Value2 = map(random9Value, 0, 7, 0, 360);
            let random9Value3 = map(random9Value, 0, 7, 0, 100);
            let random9Value4 = map(random9Value, 0, 7, 20, 60);
            fill(random9Value2, random9Value3, random9Value3, 1);
            textSize(random9Value4);
            text(random9Value, 500, 300);
            let random10Value = columnData10[random10];
            let random10Value2 = map(random10Value, 2, 21389, 0, 360);
            let random10Value3 = map(random10Value, 2, 21389, 0, 100);
            let random10Value4 = map(random10Value, 2, 21389, 20, 60);
            fill(random10Value2, random10Value3, random10Value3, 1);
            textSize(random10Value4);
            text(random10Value, 500, 400);
            let random11Value = columnData11[random11];
            let random11Value2 = map(random11Value, -2, 174, 0, 360);
            let random11Value3 = map(random11Value, -2, 174, 0, 100);
            let random11Value4 = map(random11Value, -2, 174, 20, 60);
            fill(random11Value2, random11Value3, random11Value3, 1);
            textSize(random11Value4);
            text(random11Value, 500, 500);
            fill(random(0, 360), random(0, 100), random(0, 100), 1);
            textSize(random(20, 60));
            text(columnData12[random12], 500, 600);
        }
        
    }