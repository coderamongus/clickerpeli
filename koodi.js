var number = 0
var multiplier = 1
var kertoinHinta = 50
var autoklikkaushinta = 50
var autoklikkaushinta2 = 250
var autoklikkaushinta3 = 350
var cps = 0

function updateUI() {
    document.getElementById("kertoinhinta").innerHTML = kertoinHinta
    document.getElementById("autoHinta1").innerHTML = autoklikkaushinta
    document.getElementById("autoHinta2").innerHTML = autoklikkaushinta2
    document.getElementById("autoHinta3").innerHTML = autoklikkaushinta3

}

function arvonlisa() {
    var value = parseInt(document.getElementById("number").innerHTML)
    value = value + multiplier
    document.getElementById("number").innerHTML = value
}

function kertoin(){
    var number = parseInt(document.getElementById("number").innerHTML)

    if (number < kertoinHinta){

    } else {
        number = number - kertoinHinta
        multiplier = multiplier + 1
        kertoinHinta = kertoinHinta + 100
        document.getElementById("kertoinhinta").innerHTML = kertoinHinta
        document.getElementById("number").innerHTML = number 
    }
}

function autoklikkaus1(){
    var number = parseInt(document.getElementById("number").innerHTML)

    if (number < autoklikkaushinta) {
    
    } else {
        number = number - autoklikkaushinta
        autoklikkaushinta = autoklikkaushinta + 50;
        document.getElementById("autoHinta1").innerHTML = autoklikkaushinta
        cps += 1;
        document.getElementById("number").innerHTML = number
    }
}

function autoklikkaus2(){
    var number = parseInt(document.getElementById("number").innerHTML)

    if (number < autoklikkaushinta2) {
    
    } else {
        number = number - autoklikkaushinta2
        autoklikkaushinta2 = autoklikkaushinta2 + 250;
        document.getElementById("autoHinta2").innerHTML = autoklikkaushinta2
        cps += 5;
        document.getElementById("number").innerHTML = number
    }
}

function autoklikkaus3(){
    var number = parseInt(document.getElementById("number").innerHTML)

    if (number < autoklikkaushinta3) {
    
    } else {
        number = number - autoklikkaushinta3
        autoklikkaushinta3 = autoklikkaushinta3 + 500;
        document.getElementById("autoHinta3").innerHTML = autoklikkaushinta3
        cps += 10;
        document.getElementById("number").innerHTML = number
    }
}

function timer() {
    var number = parseInt(document.getElementById("number").innerHTML)
    number = number + cps
    document.getElementById("number").innerHTML = number
}
setInterval(timer, 1000);
updateUI();
