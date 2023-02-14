//SELECTION
var naira = document.getElementById("naira")
var dollar = document.getElementById("dollar")
var calculate = document.getElementById("Calculate")
var result = document.getElementById("result")
var forex = document.getElementById("forex")
var reset = document.getElementById("reset")
var error1 = document.getElementById("error1")
var error2 = document.getElementById("error2")


var exRate = 720;

//FUNCTIONS
//naira to dollar function
function CalcN2D(currency) {
    return currency + naira.value / exRate 
}

//dollar to naira function
function CalcD2N(currency) {
    return currency + dollar.value * exRate 
}

//PUSH CalcN2D
function finalN2D() {
    result.innerText = CalcN2D("$")
    if(naira.value > 5 || naira.value == "") {
    forex.innerText = "$1 =" + " " + exRate + " " + "NGN"
    }
}

//PUSH CalcD2N
function finalD2N() {
    result.innerText = CalcD2N("N")
    if(dollar.value > 1 || dollar.value == "") {
    forex.innerText = ""
    }
}

function resetButton() {
    result.innerText = ""
}

//INPUTS/BUTTONS
naira.addEventListener("input", function runDollar() {
    if(naira.value >= 1 && dollar.value <= 0){
        finalN2D()
        error1.innerText = ""
        error2.innerText = ""
    } else if(dollar.value >= 1 && naira.value <= 0){
        finalD2N()
        error1.innerText = ""
        error2.innerText = ""
    }
    else if(naira.value && dollar.value) {
        error1.innerText = "select only one currency"
        error2.innerText = "select only one currency"
        result.innerText = ""
    }
})

dollar.addEventListener("input", function runDollar() {
    if(naira.value >= 1 && dollar.value <= 0){
        finalN2D()
        error1.innerText = ""
        error2.innerText = ""
    } else if(dollar.value >= 1 && naira.value <= 0){
        finalD2N()
        error1.innerText = ""
        error2.innerText = ""
    }
    else if(naira.value && dollar.value) {
        error1.innerText = "select only one currency"
        error2.innerText = "select only one currency"
        result.innerText = ""
    }
})

calculate.addEventListener("click", function runNaira() {
    if(naira.value >= 1 && dollar.value <= 0){
        finalN2D()
        error1.innerText = ""
        error2.innerText = ""
    } else if(dollar.value >= 1 && naira.value <= 0){
        finalD2N()
        error1.innerText = ""
        error2.innerText = ""
    }
    else if(naira.value && dollar.value) {
        error1.innerText = "select only one currency"
        error2.innerText = "select only one currency"
        result.innerText = ""
    }
})

reset.addEventListener("click", resetButton)
