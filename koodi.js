var multiplier = 1

var kertoinHinta = 200

function arvonlisa() {
    var value = parseInt(document.getElementById("number").innerHTML)
    value = value + multiplier
    document.getElementById("number").innerHTML = value
}

function kertoin(){
    var number = parseInt(document.getElementById("number").innerHTML)

    if (number < kertoinHinta){

    } else {
        multiplier = multiplier + 1
        kertoinHinta = kertoinHinta + 100
        parseInt(document.getElementById("number").innerHTML) 
    }
}