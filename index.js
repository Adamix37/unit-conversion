const metersFeet = document.getElementById("meters-to-feet")
const feetMeters = document.getElementById("feet-to-meters")
const litersGallons = document.getElementById("liters-to-gallons")
const gallonsLiters = document.getElementById("gallons-to-liters")
const kilosPounds = document.getElementById("kilos-to-pounds")
const poundsKilos = document.getElementById("pounds-to-kilos")
const convertBtn = document.getElementById("convert")

convertBtn.addEventListener("click", function() {
    const valueOfInput = document.getElementById("inputbox").value
    metersFeet.textContent = `Meters to feet: ${(valueOfInput * 3.2808399).toFixed(3)}`
    feetMeters.textContent = `Feet to meters: ${(valueOfInput * 0.3048).toFixed(3)}`
    litersGallons.textContent = `Liters to gallons: ${(valueOfInput * 0.264172052).toFixed(3)}`
    gallonsLiters.textContent = `Gallons to liters: ${(valueOfInput * 3.78541178).toFixed(3)}`
    kilosPounds.textContent = `Kilos to pounds: ${(valueOfInput * 2.20462262).toFixed(3)}`
    poundsKilos.textContent =`Pounds to kilos: ${(valueOfInput * 0.45359237).toFixed(3)}`
})