let table = cr("table")
table.appendChild(createRow(01, "Tanbir", "roll", "Age", "Reg"))
container[0].appendChild(table)

let rowTr = new create("tr", "Hello", "tableRow", table)






let dataTable=s("#data_table")

for(let x=0;x<=5;x++){
   // dataTable.appendChild(createRow3("0"+x , 13, 13))
}

let btnOne = s("#btn_one")
btnOne.addEventListener("click",function() {
    let inputData = s("#unorganize_data").value //'213,32143,3,341,53,454,53,453,453,4,54,54,5'//
    cl(inputData)
    cl(typeof (inputData))
    
   
    let eachNumberString = inputData.split(",");
    eachNumber=[]
    eachNumberString.sort(function(a, b){return a-b})
    for(let y=0;y<eachNumberString.length;y++){
    	eachNumber.push(parseInt(eachNumberString[y]))
    }
    console.log(eachNumber)
    let somethingGiven=false
    //==========
    let minValue=null
    if(s("#minValue").value){
    	minValue=s("#minValue").value
    	minValue=parseInt(minValue)
    	somethingGiven=true
    }else{
    	 minValue=eachNumber[0]
    }
    
    
    let maxValue=eachNumber[(eachNumber.length)-1]
    console.log(maxValue+" max value====")
    console.log(minValue+"min value=====")
    let range=maxValue-minValue
    console.log("range="+ range)
    let eachClass=5
    if(range>90){
    	eachClass=20
    }else if(range>100){
    	eachClass=50
    }else if(range>200){
    	eachClass=1000
    }else if(range>500){
    	eachClass=200
    }else if(range>1000){
    	eachClass=500
    }else if(range<=90){
    	eachClass=5
    }
console.log("each class = "+eachClass)
  /*  let section1 = minValue+range
    let section2 = minValue+(range*2)
    let section3 = minValue+(range*3)
    let section4 = minValue+(range*4)
    let section5 = minValue+(range*5)
    let section6 = minValue+(range*6)
    let section7 = minValue+(range*7)
    let section8 = minValue+(range*8)
    let section9 = minValue+(range*9)
    let section10 = minValue+(range*10)
    let section11 = minValue+(range*11)*/
    let sectionsRight={}
    let sectionsLeft={}
    if(somethingGiven==true){
    	    sectionsRight={
	    	1:minValue+eachClass,
	    	2:minValue+(eachClass*2),
	    	3:minValue+(eachClass*3),
	    	4:minValue+(eachClass*4),
	    	5:minValue+(eachClass*5),
	    	6:minValue+(eachClass*6),
	    	7:minValue+(eachClass*7),
	    	8:minValue+(eachClass*8),
	    	9:minValue+(eachClass*9),
	    	10:minValue+(eachClass*10),
	    	11:minValue+(eachClass*11),
	    	12:minValue+(eachClass*12),
	    }
	    console.log("sectionsRight")
	    console.log(sectionsRight)
	    console.log("sectionsRight")
	 sectionsLeft={
	    	1:minValue,
	    	2:(minValue+(eachClass*2))-eachClass,
	    	3:(minValue+(eachClass*3))-eachClass,
	    	4:(minValue+(eachClass*4))-eachClass,
	    	5:(minValue+(eachClass*5))-eachClass,
	    	6:(minValue+(eachClass*6))-eachClass,
	    	7:(minValue+(eachClass*7))-eachClass,
	    	8:(minValue+(eachClass*8))-eachClass,
	    	9:(minValue+(eachClass*9))-eachClass,
	    	10:(minValue+(eachClass*10))-eachClass,
	    	11:(minValue+(eachClass*11))-eachClass,
	    	12:(minValue+(eachClass*12))-eachClass,
	    }
	    console.log("sectionsLeft")
 	console.log(sectionsLeft)
 	console.log("sectionsLeft")
    }else{
    	sectionsRight={
	    	1:minValue+eachClass,
	    	2:minValue+(eachClass*2),
	    	3:minValue+(eachClass*3),
	    	4:minValue+(eachClass*4),
	    	5:minValue+(eachClass*5),
	    	6:minValue+(eachClass*6),
	    	7:minValue+(eachClass*7),
	    	8:minValue+(eachClass*8),
	    	9:minValue+(eachClass*9),
	    	10:minValue+(eachClass*10),
	    	11:minValue+(eachClass*11),
	    	12:minValue+(eachClass*12),
	    }
	    console.log("sectionsRight")
	    console.log(sectionsRight)
	    console.log("sectionsRight")
	 sectionsLeft={
	    	1:(minValue+eachClass)-eachClass,
	    	2:(minValue+(eachClass*2))-eachClass,
	    	3:(minValue+(eachClass*3))-eachClass,
	    	4:(minValue+(eachClass*4))-eachClass,
	    	5:(minValue+(eachClass*5))-eachClass,
	    	6:(minValue+(eachClass*6))-eachClass,
	    	7:(minValue+(eachClass*7))-eachClass,
	    	8:(minValue+(eachClass*8))-eachClass,
	    	9:(minValue+(eachClass*9))-eachClass,
	    	10:(minValue+(eachClass*10))-eachClass,
	    	11:(minValue+(eachClass*11))-eachClass,
	    	12:(minValue+(eachClass*12))-eachClass,
	    }
	    console.log("sectionsLeft")
 	console.log(sectionsLeft)
 	console.log("sectionsLeft")
	    }
    
	 let Classification=[]
	 
	 for(let x=0;x<12;x++){
	 	let togather=  sectionsLeft[x+1]+" - " +sectionsRight[x+1]
	 	Classification.push(togather)
	 }       
console.log("classification====================")
console.log(Classification)
console.log("classification=================")



    //=========
 



    // string_to_array = function (str)
    // {
    //     return str.trim().split(" ");
    // };
    // let eachNumber = string_to_array(inputData);


    cl(typeof(eachNumber))
    cl(eachNumber[2])
    cl("loop")
    for (let x = 0; x < Classification.length;x++){
        cl(eachNumber[x])
        dataTable.appendChild(createRow3(Classification[x], 13,Classification[x]))
    }
    
})

rowTr.element()