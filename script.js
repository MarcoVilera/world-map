console.log("Prueba")
//TODO Implementar Rotación Img
//TODO Implementar Reproducción de sonido
const pinIMG = document.getElementById("mappin")
const pinDiv = document.querySelector(".dot")
var worldDiv = document.querySelector(".world")

const pinWidth = pinDiv.offsetWidth
const pinHeight = pinDiv.offsetHeight

let randomX = Math.floor(Math.random() * pinWidth)
let randomY = Math.floor(Math.random() * pinHeight)
pinIMG.style.visibility = "visible"
randomX = 0
randomY = 0
//worldDiv.style.backgroundPosition = "150px"; Cambia la posición del fondo del div
pinIMG.style.left = randomX + "px"
pinIMG.style.top = randomY + "px"

function getCountry() {
    let country = document.getElementById("countryInput").value
    const VALIDCOUNTRYS = document.getElementById("countrys")
    countryList = VALIDCOUNTRYS.querySelectorAll("option")
    for (let i of countryList)
        if (country === i.value)
            console.log("pais valido")
        
    country.toLowerCase().replace(/\s+/g, "")
    console.log(country.toLowerCase())
    const move = [
        { backgroundPosition: "300px 15px" },
        { backgroundPosition: "0px 0px" }
    ]

    const pause ={
        duration: 5000,
        iterations: 1,
        fill: "forwards"
}
    worldDiv.animate(move,pause)   
    
}