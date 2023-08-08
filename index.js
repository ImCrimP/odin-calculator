const display = document.querySelector("#asn");
const prevCalc = document.querySelector("#prevCalc");

const buttons = document.querySelectorAll(".btn");

let firstVal = '';
let secondVal = '';
let operator = '';
let opClick = false;

const clear = document.querySelector("#clear");
clearClicked = false;

const deleteBtn = document.querySelector("#delete");

const numArray = [
    document.querySelector("#zero"),
    document.querySelector("#one"),
    document.querySelector("#two"),
    document.querySelector("#three"),
    document.querySelector("#four"),
    document.querySelector("#five"),
    document.querySelector("#six"),
    document.querySelector("#seven"),
    document.querySelector("#eight"),
    document.querySelector("#nine")
];


const operatorsArray = [
    document.querySelector("#div"),
    document.querySelector("#mul"),
    document.querySelector("#sub"),
    document.querySelector("#add")
]


displayInput();




function displayInput(){
    
    numClick();
    operationClick();
    clearClick();
    deleteClick();
    
}


function numClick(){
    for(let i = 0; i < numArray.length; i++){
        numArray[i].addEventListener("click", ()=>{
            if(!opClick){
                firstVal += numArray[i].textContent;
                //console.log(firstVal) 
            }
            else{
                secondVal += numArray[i].textContent;
            }
            
            console.log("first value " + firstVal)
            console.log("second value " + secondVal);
        });
    }
}

function operationClick(){
    for(let i = 0; i < operatorsArray.length; i++){
        operatorsArray[i].addEventListener("click", () =>{
            if(firstVal != ''){
                operator = operatorsArray[i].textContent;
                opClick = true;
                console.log("operation " + operator); 
            }        
        })
    }
}

function clearClick(){
    clear.addEventListener("click", () => {
        firstVal = '';
        secondVal = '';
        clearClicked = true;
        opClick = false;
    })
}

function deleteClick(){
    deleteBtn.addEventListener("click", () => {
        if(!opClick){
            firstVal = firstVal.slice(0, -1);
            console.log("first value " + firstVal);
        }
        else{
            secondVal = secondVal.slice(0, -1);
            console.log("second Value " + secondVal);
        }
    })
}