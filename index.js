const display = document.querySelector("#asn");
const prevCalc = document.querySelector("#prevCalc");

const buttons = document.querySelectorAll(".btn");

let firstVal = '';
let firstValInt;
let secondVal = '';
let secondValInt;
let operator = '';
let opClick = false;

const clear = document.querySelector("#clear");
clearClicked = false;

const deleteBtn = document.querySelector("#delete");

const decimal = document.querySelector("#dec");
let decClick = false;

const equal = document.querySelector("#eq");
let eqClick = false;

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


run();




function run(){
    
    numClick();
    operationClick();
    clearClick();
    deleteClick();
    decimalClick();
    equalClick();

}


function numClick(){
    for(let i = 0; i < numArray.length; i++){
        numArray[i].addEventListener("click", ()=>{
            if(!opClick){
                firstVal += numArray[i].textContent;
                console.log("first value " + firstVal)
            }
            else{
                secondVal += numArray[i].textContent;
                console.log("second value " + secondVal);
            }
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
            decClick = false;    
        })
    }
}

function clearClick(){
    clear.addEventListener("click", () => {
        firstVal = '';
        secondVal = '';
        clearClicked = true;
        opClick = false;
        decClick = false;
    })
}

function deleteClick(){
    deleteBtn.addEventListener("click", () => {
        if(!opClick){
            let lastChar = firstVal.charAt(firstVal.length - 1);
            lastChar == "." ? decClick = false : decClick = true;
            firstVal = firstVal.slice(0, -1);
            console.log("first value " + firstVal);
        }
        else{
            let lastChar = secondVal.charAt(secondVal.length - 1);
            lastChar == "." ? decClick = false : decClick = true;
            secondVal = secondVal.slice(0, -1);
            console.log("second Value " + secondVal);
        }
    })
}

function decimalClick(){
    decimal.addEventListener("click", () => {
        if(!decClick && !opClick){
            decClick = true;
            firstVal += "."
        }
        else if(!decClick && opClick){
            decClick = true;
            secondVal += "."
        }
    })
}

function equalClick(){
    equal.addEventListener("click", () => {
        if(firstVal != '' && secondVal != ""){
            eqClick = true;
            console.log("=")
        }
    })
}

function displayInput(){
    for(let i = 0; i < buttons.length; i++){
        buttons.addEventListener("click", () => {

        })
    }
}