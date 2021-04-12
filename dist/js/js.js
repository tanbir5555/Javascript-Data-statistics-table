class fun{
    constructor(){
        this.consoles = (ele)=>{
            return console.log(ele);
        }
    }
}


let consoleAndLog=new fun

function cl(element) {
    consoleAndLog.consoles(element)
}
function cr(name) {
    return document.createElement(name)
    
}
function s(element) {
    return document.querySelector(element)
    
}
function sAll(element) {
    return document.querySelectorAll(element)
}
class create{
    constructor(elementName,elementInnerHtml,ClassName,appendAfter){
        this.elementName=elementName;
        this.elementInnerHtml = elementInnerHtml;
        this.ClassName = ClassName
        this.element=()=>{
            this.div=cr(this.elementName);
            this.div.classList.add(this.ClassName)
            this.div.innerHTML = this.elementInnerHtml
            appendAfter.appendChild(this.div)
        }
    }
}


function td(element){
    let ele=cr("td");
    ele.innerHTML = element
    return ele;
}

function createRow(col1,col2,col3,col4,col5) {
    let tr=cr("tr");

    
    tr.appendChild(td(col1))
    tr.appendChild(td(col2))
    tr.appendChild(td(col3))
    tr.appendChild(td(col4))
    tr.appendChild(td(col5))
    return tr
}

let container=sAll(".container")
function createRow3(col1, col2, col3,)
{
    let tr = cr("tr");


    tr.appendChild(td(col1))
    tr.appendChild(td(col2))
    tr.appendChild(td(col3))
  
    return tr
}

