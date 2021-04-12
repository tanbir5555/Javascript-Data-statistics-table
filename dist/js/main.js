//========DOM elements
let playBtn = s("#btn_one");
let loadBtn = s("#btn_process");
let reset_btn = s("#btn_reset");


let min = s("#minvalue")
let max = s("#maxvalue")
let fre = s("#fre")

let hidden = s("#hidden")
let inputStart = s("#InputminValue")
let input_end = s("#InputmaxValue")
let classGap = s("#classGap")

let data_input = s("#unorganize_data");
let data_table = s("#data_table")


let DataPrintTable = s("#table_area")






//========DOM elements



//data storage unit ===========

let storage = {
    "main": [],
    "min": 0,
    "max": 0,
    "classGap": 0,
    "start": 0,
    "end": 0,
    "classMin": [],
    "classMax": [],
    "class": [],
    "frequency": [],
    "spquential_population": [],
    "midpoint": [],
    "fixi": [],


}



//data storage unit ===========

//reset 

function reset() {
    DataPrintTable.innerHTML = "";
    reset_btn.style.display = "none";
    loadBtn.style.display = "block"
    storage = {
        "main": [],
        "min": 0,
        "max": 0,
        "classGap": 0,
        "start": 0,
        "end": 0,
        "classMin": [],
        "classMax": [],
        "class": [],
        "frequency": [],
        "spquential_population": [],
        "midpoint": [],
        "fixi": [],


    }
    hidden.style.display = "none"
    printNow();
}


//reset


function printNow() {
    min.innerHTML = storage["min"];
    max.innerHTML = storage["max"];
    inputStart.value = storage["min"];
    input_end.value = storage["max"];
    fre.innerHTML = storage["main"].length
}

function printAll() {
    let table = cr("table");

    table.innerHTML = '';

    table.style.margin = "8px"
    let trHeader = cr("tr")

    let th1 = cr("th")
    th1.innerHTML = "Class"
    trHeader.appendChild(th1)

    let th2 = cr("th")
    th2.innerHTML = "frequency (fi)"
    trHeader.appendChild(th2)

    let th3 = cr("th")
    th3.innerHTML = "Spquential Population"
    trHeader.appendChild(th3)

    let th4 = cr("th")
    th4.innerHTML = "Class middle"
    trHeader.appendChild(th4)

    let th5 = cr("th")
    th5.innerHTML = "fixi"
    trHeader.appendChild(th5)

    table.appendChild(trHeader)


    for (let x = 0; x < storage["frequency"].length; x++) {

        let row = cr("tr");

        let tdClass = cr("td")
        tdClass.innerHTML = storage["class"][x]
        row.appendChild(tdClass)

        let tdFrequency = cr("td");
        tdFrequency.innerHTML = storage["frequency"][x]
        row.appendChild(tdFrequency)

        let sp = cr("td");
        sp.innerHTML = storage["spquential_population"][x]
        row.appendChild(sp)

        let middle = cr("td");
        middle.innerHTML = storage["midpoint"][x]
        row.appendChild(middle)

        let fixis = cr("td");
        fixis.innerHTML = storage["fixi"][x]
        row.appendChild(fixis)


        table.append(row)


    }

    cl(table)
    table.style.borderBottom = "2px solid red"

    DataPrintTable.prepend(table)



}


function DataProcess() {
    loadBtn.style.display = "none";
    reset_btn.style.display = "block"
    let data_input_value = data_input.value
    let splitArray = data_input_value.split(",");
    splitArray = splitArray.sort(function(a, b) { return a - b })
    storage["main"] = []
    for (let x = 0; x < splitArray.length; x++) {
        storage["main"].push(parseFloat(splitArray[x]))
    }

    storage["min"] = parseFloat(splitArray[0]);
    storage["max"] = parseFloat(splitArray[(splitArray.length - 1)]);
    hidden.style.display = "block"
    printNow()
    console.log(storage)
}



function getValue() {
    storage["classGap"] = parseFloat(classGap.value);
    storage["start"] = parseFloat(inputStart.value);
    storage["end"] = parseFloat(input_end.value);
}


function spquential_population() {
    let sp = storage["spquential_population"]
    let frequency = storage["frequency"]
    for (let x = 0; x < frequency.length; x++) {
        if (x === 0) {
            sp.push(frequency[x])
        } else {
            let va = frequency[x] + sp[(x - 1)]
            sp.push(va)
        }

    }

}

function midpoint(gap) {
    let start = storage["classMin"]
    let mid = storage["midpoint"];
    let dis = gap / 2
    for (let x = 0; x < start.length; x++) {
        let propervalue = start[x] + dis

        mid.push(propervalue)
    }


}


function fixi() {
    let mid = storage["midpoint"];
    let frequency = storage["frequency"];
    let fi_xi = storage["fixi"];

    for (let x = 0; x < mid.length; x++) {
        let val = mid[x] * frequency[x]
        fi_xi.push(val)
    }
}

function play() {
    hidden.style.display = "none"
    getValue();

    let gap = storage["classGap"];
    gap = parseFloat(gap)
    let start = storage["start"];
    start = parseFloat(start)
    let end = parseFloat(storage["end"]);

    //count row

    let class_Row = (end - start) / gap

    //adding data by looping

    for (let x = 0; x < class_Row + 1; x++) {
        let val = start + (gap * x);
        storage["classMin"].push(val);


        let valMax = (start + gap) + (x * gap);
        storage["classMax"].push(valMax);
        storage["frequency"].push(0)
        for (let y = 0; y < storage["main"].length; y++) {
            if (storage["main"][y] >= val && storage["main"][y] < valMax) {
                if (storage["frequency"][x] === null || storage["frequency"][x] === undefined || storage["frequency"][x] === NaN) {
                    storage["frequency"][x] == 0
                } else {
                    cl("perfect")
                }
                cl(storage["frequency"][x])
                storage["frequency"][x] = storage["frequency"][x] + 1
            }
        }




        let stringLow = val.toString()
        cl(stringLow)
        let stringHigh = valMax.toString()
        cl(stringHigh)
        let pushable_data = stringLow + "-" + stringHigh
        storage["class"].push(pushable_data)
    }
    midpoint(gap)
    spquential_population()
    fixi()

    printAll()
    console.log(storage)


}








loadBtn.addEventListener("click", function() {
    DataProcess()
})


playBtn.addEventListener("click", function() {
    play()
})
reset_btn.addEventListener("click", function() {
    reset()
})



function onstart() {
    let values = '0'
    for (let x = 0; x <= 39; x++) {
        let v = Math.floor(Math.random() * 40);


        if (x == 39) {
            values += v
        } else {
            values += (v + ",")
        }
    }
    data_input.value = values
}
onstart()