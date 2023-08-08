const calc = document.querySelector("#screen");

const prevCalc = document.createElement("div");
prevCalc.setAttribute("id", "prevCalc");
prevCalc.textContent = "";
calc.appendChild(prevCalc);

const display = document.createElement("div");
display.setAttribute("id","ans");
display.textContent = "0";
calc.appendChild(display);




const buttons = document.querySelectorAll(".btn");

let firstVal = '';
let firstValInt;
let secondVal = '';
let secondValInt;
let operator = '';
let operatorVal;
let opClick = false;

const clear = document.querySelector("#clear");
clearClicked = false;

const deleteBtn = document.querySelector("#delete");

const decimal = document.querySelector("#dec");
let decClick = false;

const equal = document.querySelector("#eq");
let eqClick = false;

let answer;

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
                firstValInt = parseInt(firstVal);
                prevCalc.textContent =  `${firstVal} ${operator}`;
                display.textContent = firstVal;
            }
            else{
                secondVal += numArray[i].textContent;
                secondValInt = parseInt(secondVal);
                prevCalc.textContent = `${firstVal} ${operator}`;
                display.textContent = secondVal;
            }
        });
    }
}

function operationClick(){

    for(let i = 0; i < operatorsArray.length; i++){
        operatorsArray[i].addEventListener("click", () =>{
            if(firstVal != ''){
                operator = operatorsArray[i].textContent;
                if(!opClick){
                    
                    prevCalc.textContent = `${firstVal} ${operator} ${secondVal}`;
                    opClick = true;
                    
                }
                else{
                    
                    prevCalc.textContent = `${firstVal} ${operator} ${secondVal}`; 
                    
                }
               
            }

            decClick = false;
            eqClick = false;    
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
        operator = "";
        prevCalc.textContent = "";
        display.textContent = "0";
        eqClick = false;
    })
}

function deleteClick(){
    deleteBtn.addEventListener("click", () => {
        
        if(!opClick){
        
            if(firstVal != ""){
                let lastChar = firstVal.charAt(firstVal.length - 1);
                lastChar == "." ? decClick = false : decClick = true;
                firstVal = firstVal.slice(0, -1);
                display.textContent = firstVal;
                prevCalc.textContent = firstVal;
                if(firstVal == ""){
                    display.textContent = "0"
                }
            }
        }
        else{
            
            if(secondVal.length > 0){
                let lastChar = secondVal.charAt(secondVal.length - 1);
                lastChar == "." ? decClick = false : decClick = true;
                secondVal = secondVal.slice(0, -1);
                display.textContent = secondVal;
                prevCalc.textContent = secondVal;
                if(secondVal == ""){
                    display.textContent = "0";
                }
            } 
        }
    })
}

function decimalClick(){
    decimal.addEventListener("click", () => {
        if(!decClick && !opClick){
            decClick = true;
            firstVal += "."
            display.textContent = firstVal;
            prevCalc.textContent = firstVal;
        }
        else if(!decClick && opClick){
            decClick = true;
            secondVal += "."
            display.textContent = secondVal;
            prevCalc.textContent = secondVal;
        }
    })
}

function equalClick(){
    equal.addEventListener("click", () => {
        mathLogic();
    })
}

function mathLogic(){
    if(firstVal != '' && secondVal != ""){

        firstValInt = parseFloat(firstVal);
        secondValInt = parseFloat(secondVal);
        
            
        if(operator == "÷"){
            answer = Math.floor(1000 * (firstValInt / secondValInt))/1000;
            display.textContent = answer;
        }
        else if(operator == "x"){
            answer = Math.floor(1000* (firstValInt * secondValInt))/1000;
            display.textContent = answer;
        }
        else if(operator == "-"){
            answer = Math.floor(1000*(firstValInt - secondValInt))/1000;
            display.textContent = answer;
        }
        else if (operator == "+"){
            answer = Math.floor(1000*(firstValInt + secondValInt))/1000;
            display.textContent = answer;
        }
        prevCalc.textContent = `${firstVal} ${operator} ${secondVal} =`;

        firstVal = answer;
        secondVal = "";
        operator = "";
        
        
        eqClick = true;
        
    }
}