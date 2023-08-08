//const display = document.querySelector("#asn");
//const prevCalc = document.querySelector("#prevCalc");
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
                console.log("first value " + firstValInt);
                prevCalc.textContent =  `${secondVal} ${operator}`;
                display.textContent = firstVal;
            }
            else{
                secondVal += numArray[i].textContent;
                secondValInt = parseInt(secondVal);
                console.log("second value " + secondValInt);
                prevCalc.textContent = `${firstVal} ${operator}`;
                display.textContent = secondVal;
            }
        });
    }
}

function operationClick(){

    /*
    let div = operator[0];
    let mul = operator[1];
    let sub = operator[2];
    let add = operator[3];
    */

    for(let i = 0; i < operatorsArray.length; i++){
        operatorsArray[i].addEventListener("click", () =>{
            if(firstVal != ''){
                operator = operatorsArray[i].textContent;
                if(!opClick){
                    //prevCalc.textContent += operator;

                    /*if(secondVal != ""){
                        if(operator == "÷"){
                            answer = secondVal / firstVal;
                            display.textContent = answer;
                            prevCalc = `${secondVal} ÷ ${firstVal}`;
                        }
                    }
                    */
                    firstVal.textContent = "";
                    prevCalc.textContent = `${firstVal} ${operator}`;
                    opClick = true;
                }
                else{
                    secondVal.textContent = ""
                    prevCalc.textContent = `${secondVal} ${operator}`;
                    opClick = false;
                }
                
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
        operator = "";
        prevCalc.textContent = "";
        display.textContent = "0";
    })
}

function deleteClick(){
    deleteBtn.addEventListener("click", () => {
        
        if(!opClick){
        
            if(firstVal != ""){
                let lastChar = firstVal.charAt(firstVal.length - 1);
                lastChar == "." ? decClick = false : decClick = true;
                firstVal = firstVal.slice(0, -1);
                console.log("first value " + firstVal);
                display.textContent = firstVal;
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
                console.log("second Value " + secondVal);
                display.textContent = secondVal;
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
        }
        else if(!decClick && opClick){
            decClick = true;
            secondVal += "."
            display.textContent = secondVal;
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
    //display

    /*
    for(let i = 0; i < buttons.length; i++){
        buttons.addEventListener("click", () => {

        })
    }
    */
}

function displayOpOrEq (){

}