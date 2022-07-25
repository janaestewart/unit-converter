/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
Requirements
-  Generate all conversions when users click the convert button
- Round the numbers down to nearest 3rd decimal
*/

//grab the input, the button and the conversion sections

let numConvert = document.getElementById("convertNum")
const convertBtn = document.getElementById("convertBtn")

let lengthSect = document.getElementById("lengthConversion")


let volumeSect = document.getElementById("volumeConversion")

let massSect = document.getElementById("massConversion")




//add event listener

convertBtn.addEventListener('click', conversion)

function conversion(){
    convertLength()
    convertVolume()
    convertMass()
}

function convertLength(){
    let feetToMeters = numConvert.value/3.281
    let metersToFeet = numConvert.value*3.281

    // let lengthText = document.createElement('p')

    let lengthText = `<p class='converted'> ${numConvert.value} meters = ${feetToMeters.toFixed(3)} feet | ${numConvert.value} feet = ${metersToFeet.toFixed(3)} meters </p>`

    lengthSect.innerHTML = lengthText
}

function convertVolume(){
    let litersToGallons = numConvert.value/2.204
    let gallonsToLiters = numConvert.value*2.204


    let volumeText = `<p class='converted'> ${numConvert.value} liters = ${litersToGallons.toFixed(3)} gallons | ${numConvert.value} gallons = ${gallonsToLiters.toFixed(3)} liters </p>`

    volumeSect.innerHTML = volumeText
}

function convertMass(){
    let kilosToPounds = numConvert.value/.264
    let poundsToKilos = numConvert.value*.264


    let massText = `<p class='converted'> ${numConvert.value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${numConvert.value} pounds = ${poundsToKilos.toFixed(3)} kilos </p>`

    massSect.innerHTML = massText
}