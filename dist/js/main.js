//========DOM elements
let playBtn = s("#btn_one");
let loadBtn = s("#btn_process");
let reset_btn = s("#btn_reset");


let min = s("#minvalue")
let max = s("#maxvalue")
let fre = s("#fre")
let fixiTarget = s("#sumfixi")

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
    "classGap": 0,//Class range
    "Class_range": [],
    "start": 0,
    "end": 0,
    "classMin": [],
    "classMax": [],
    "class": [],
    "frequency": [],
    "less_than_Cumulative_Frequency": [],
    "greater_than_Cumulative_Frequency": [],
    "midpoint": [],
    "fixi": [],
    "sumfixi":0,
    "frequency_Density": [],
    "Relative_Frequency": [],
    "Percentage_Frequency": [],


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
        "classGap": 0,//Class range,
        "Class_range":[],
        "start": 0,
        "end": 0,
        "classMin": [],
        "classMax": [],
        "class": [],
        "frequency": [],
        "less_than_Cumulative_Frequency": [],
        "greater_than_Cumulative_Frequency": [],
        "midpoint": [],
        "fixi": [],
        "sumfixi": 0,
        "frequency_Density":[],
        "Relative_Frequency":[],
        "Percentage_Frequency":[],


    }
    hidden.style.display = "none"
    printNow();
}


//reset

function classRange(){
    for(let x=0;x<storage["classMin"].length;x++){
        let max = parseFloat(storage["classMax"][x])
        let min = parseFloat(storage["classMin"][x])
        let ans = max - min
        storage["Class_range"].push(ans);
        frequency_Density(ans,x);
        Relative_Frequency(x);
       
    }
}
function frequency_Density(range,serial){
    let frequency = storage["frequency"][serial];
    let fd = (frequency / range)
    storage["frequency_Density"].push(fd)
}

function Relative_Frequency(serial) {
    let f=storage["frequency"][serial]
    let rf=f/(storage["main"].length);
    storage["Relative_Frequency"].push(rf)
    Percentage_Frequency(rf)
}

function Percentage_Frequency(answer){
    let percent = answer*100;
    storage["Percentage_Frequency"].push(percent)
}
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

    function th(headerName) {
        let ths = cr("th")
        ths.innerHTML = headerName
        trHeader.appendChild(ths)
    }

    th("শ্রেণী")
    // let th1 = cr("th")
    // th1.innerHTML = "Class"
    // trHeader.appendChild(th1)
    th("গনসংখ্যা <br> (fi)")
    // let th2 = cr("th")
    // th2.innerHTML = "frequency (fi)"
    // trHeader.appendChild(th2)
    th(" উর্ধক্রম<br>ক্রমোযোজিত <br>গনসংখ্যা <br>(L.c.f)")
    th(" নিম্নক্রম <br>ক্রমোযোজিত <br>গনসংখ্যা <br>(M.c.f)")
    // let th3 = cr("th")
    // th3.innerHTML = "Spquential Population"
    // trHeader.appendChild(th3)
    th("শ্রেণী <br>মধ্যমান<br>(xi) ")
    // let th4 = cr("th")
    // th4.innerHTML = "Class middle"
    // trHeader.appendChild(th4)
    th("নিম্ন <br>শ্রেণী <br>সীমা <br>(s/L)")
    // let thLowercl=cr("th")
    // thLowercl.innerHTML="Lower Class limit"
    // trHeader.appendChild(thLowercl)
    th("উর্ধ <br>শ্রেণী <br>সীমা  <br>(u/h)")
    // let thUppercl = cr("th")
    // thUppercl.innerHTML = "Upper Class limit"
    // trHeader.appendChild(thUppercl)
    th("fixi")
    th("শ্রেণী <br>ব্যাপ্তি <br>(c)")
    th("গনসংখ্যা <br>ঘনত্ব<br>(fi/c) ")
    th("আপেক্ষিক <br>গনসংখ্যা<br>(fi/N)")
    th("শতকরা <br>গনসংখ্যা<br>(fi/N)*100%")
    
    // let th5 = cr("th")
    // th5.innerHTML = "fixi"
    // trHeader.appendChild(th5)

    table.appendChild(trHeader)


    for (let x = 0; x < storage["frequency"].length; x++) {

        let row = cr("tr");
        function td(innerElements) {
            let tdClass = cr("td")
            tdClass.innerHTML = innerElements
            row.appendChild(tdClass)
        }
        td(storage["class"][x])
        // let tdClass = cr("td")
        // tdClass.innerHTML = storage["class"][x]
        // row.appendChild(tdClass)
        td(storage["frequency"][x])
        // let tdFrequency = cr("td");
        // tdFrequency.innerHTML = storage["frequency"][x]
        // row.appendChild(tdFrequency)
        td(storage["less_than_Cumulative_Frequency"][x])
        td(storage["greater_than_Cumulative_Frequency"][x])
        // let sp = cr("td");
        // sp.innerHTML = storage["less_than_Cumulative_Frequency"][x]
        // row.appendChild(sp)
        td(storage["midpoint"][x])
        // let middle = cr("td");
        // middle.innerHTML = storage["midpoint"][x]
        // row.appendChild(middle)
        td(storage["classMin"][x])
        // let lowerClass = cr("td");
        // lowerClass.innerHTML = storage["classMin"][x]
        // row.appendChild(lowerClass)
        td(storage["classMax"][x])
        // let upperClass = cr("td");
        // upperClass.innerHTML = storage["classMax"][x]
        // row.appendChild(upperClass)
        td(storage["fixi"][x])
        td(storage["Class_range"][x])
        td(storage["frequency_Density"][x])
        td(storage["Relative_Frequency"][x])
        td(storage["Percentage_Frequency"][x]+"%")
       
        // let fixis = cr("td");
        // fixis.innerHTML = storage["fixi"][x]
        // row.appendChild(fixis)


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


function less_than_Cumulative_Frequency() {
    let sp = storage["less_than_Cumulative_Frequency"]
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

function greater_than_Cumulative_Frequency()
{
    let sp = storage["greater_than_Cumulative_Frequency"]
    let frequency = storage["frequency"]
    for (let x = 0; x < frequency.length; x++)
    {
        if (x === 0)
        {
            sp.push(frequency[frequency.length-1])
        } else
        {
            let va = frequency[frequency.length-(x+1)] + sp[(x - 1)]
            sp.push(va)
        }

    }
    sp.reverse()
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
    sam_of_Fixi()
}

function sam_of_Fixi() {
    let fi_xi = storage["fixi"];
   
    for (let x = 0; x < fi_xi.length;x++){
        storage["sumfixi"] = storage["sumfixi"] + fi_xi[x];
    }
    let sum = storage["sumfixi"]
    console.log(sum);
    fixiTarget.innerHTML = "sum of fixi = " + sum
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
    less_than_Cumulative_Frequency()
    greater_than_Cumulative_Frequency()
    fixi()
    classRange()
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