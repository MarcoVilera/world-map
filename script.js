console.log("Prueba")
//TODO Implementar Rotación Img
//TODO Implementar Reproducción de sonido
const pinIMG = document.getElementById("mappin")
const pinDiv = document.querySelector(".dot")
const worldDiv = document.querySelector(".world")

const pinWidth = pinDiv.offsetWidth
const pinHeight = pinDiv.offsetHeight

let randomX = Math.floor(Math.random() * pinWidth)
let randomY = Math.floor(Math.random() * pinHeight)
pinIMG.style.visibility = "visible"
randomX = 105
randomY = 215
//worldDiv.style.backgroundPosition = "150px"; Cambia la posición del fondo del div
pinIMG.style.left = randomX + "px"
pinIMG.style.top = randomY + "px"
