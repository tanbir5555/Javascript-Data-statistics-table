let numbers="25,254,24,24,26,36,65,65"

let each=numbers.split(",")
console.log(each)







//test of 25-30,30-35 split
let str ="25-30,30-35";

let classArray=str.split(",")

let lowClass=[]
let highClass=[]

for (let x = 0; x < classArray.length;x++){
    let splitClass = classArray[x].split("-");
    lowClass.push(splitClass[0])
    highClass.push(splitClass[1])

}

console.log(" low ="  +lowClass);
console.log(" high =" + highClass);