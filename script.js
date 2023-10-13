randomX = 120
randomY = 285
//worldDiv.style.backgroundPosition = "150px"; Cambia la posición del fondo del div
// pinIMG.style.left = randomX + "px"
// pinIMG.style.top = randomY + "px"
//TODO Implementar boton de limpiar
var pinIMG = document.getElementById("mappin")
function getCountry() {
    let worldDiv = document.querySelector(".world")
    let country = document.getElementById("countryInput").value.trim().toLowerCase()
    const VALIDCOUNTRYS = document.getElementById("countrys")
    let continentX = 0
    let dotX = 60
    let dotY = 170
    //TODO Refactorizar código de manera mas eficiente
    document.getElementById("countryInput").readOnly = true
    if (window.getComputedStyle(pinIMG).getPropertyValue("opacity") == 1) {
        fadePin()
    }

    //Obtiene una lista con los valores de los datalist
    let lista = Array.prototype.map.call(VALIDCOUNTRYS.options, function (option) {
        return option.value.toLowerCase()
    })
    if (lista.indexOf(country) >= 0) {
        country = country.toLowerCase().replace(/\s+/g, "")
        console.log("country: " + country)
        //EUROPA
        if (country == "alemania" || country == "reinounido") {
            continentX = -195
            if (country == "alemania") {
                dotX = 30
                dotY = 72
            } else if (country == "reinounido") {
                dotX = 5
                dotY = 65
            }
            //AMERICA
        } else if (country == "argentina") {
            dotX = 60
            dotY = 270
        } else if (country == "venezuela") {
            dotX = 60
            dotY = 170
        } else if (country == "estadosunidos") {
            dotX = -25
            dotY = 100
        }
        // AFRICA
        else if (country == "nigeria" || country == "egipto") {
            continentX = -215
            if (country == "nigeria") {
                dotX = 5
                dotY = 165
            } else if (country == "egipto") {
                dotX = 55
                dotY = 125
            }
            // ASIA
        } else if (country == "japón" || country == "coreadelsur") {
            continentX = -400
            dotY = 100
            if (country == "japón") {
                dotX = 115
            } else if (country == "coreadelsur") {
                dotX = 85
            }
            // OCEANIA
        } else {
            continentX = -465
            if (country == "australia") {
                dotX = 40
                dotY = 240
            } else if (country == "nuevazelanda") {
                dotX = 120
                dotY = 285
            }
        }
    } else {
        alert("pais no valido")
        document.getElementById("countryInput").readOnly = false
        return false
    }

    //Mov Map
    const move = [{ backgroundPosition: "0px" }, { backgroundPosition: continentX + "px" }]

    const pause = {
        duration: 5000,
        iterations: 1,
        fill: "forwards",
    }

    worldDiv.animate(move, pause)

    // Agrega un oyente de eventos al elemento worldDiv
    worldDiv.addEventListener("animationend", (event) => {
        // Llama al método movePin() cuando se activa el evento
        console.log("empieza animacion")
        movePin(dotX, dotY)
    })
    if (country == "argentina" || country == "estadosunidos" || country == "venezuela") {
        movePin(dotX, dotY)
    } else {
        setTimeout(() => {
            movePin(dotX, dotY)
        }, 5000)
    }
    //TODO Mejorar caso Venezuela con input y readOnly
    if (country != "venezuela") {
        setTimeout(() => {
            dotX = 60
            dotY = 170
            fadePin()
            //Mov Map
            const move = [{ backgroundPosition: continentX + "px" }, { backgroundPosition: "0px" }]

            const pause = {
                duration: 5000,
                iterations: 1,
                fill: "forwards",
            }
            setTimeout(() => {
                movePin(dotX, dotY)
            }, 5000)
            worldDiv.animate(move, pause)
            document.getElementById("countryInput").readOnly = false
        }, 20000)
    } else {
        document.getElementById("countryInput").readOnly = false
    }
}
function movePin(x, y) {
    //const pinIMG = document.getElementById("mappin")

    pinIMG.style.opacity = 0
    pinIMG.style.left = x + "px"
    pinIMG.style.top = y + "px"
    const appearing = [{ opacity: 0 }, { opacity: 1 }]
    const pause = {
        duration: 300,
        iterations: 1,
        fill: "forwards",
    }
    pinIMG.animate(appearing, pause)
}
function fadePin() {
    //const pinIMG = document.getElementById("mappin")
    const appearing = [{ opacity: 1 }, { opacity: 0 }]
    const pause = {
        duration: 300,
        iterations: 1,
        fill: "forwards",
    }
    pinIMG.animate(appearing, pause)
}
function inputChecker(event) {
    //     97
    // script.js:161 98
    // script.js:161 99
    // script.js:161 100
    // script.js:161 101
    // script.js:161 102
    // script.js:161 103
    // script.js:161 104
    // script.js:161 105
    // script.js:161 111
    // script.js:161 106
    // script.js:161 109
    // script.js:161 107
    // script.js:161 13
    // script.js:161 110
    let key = event.keyCode
    console.log(key)
    if (
        (key > 64 && key < 91) ||
        (key > 96 && key < 123) ||
        key === 8 ||
        key === 32 ||
        key === 192 ||
        key === 165
    ) {
        return true
    } else {
        return false
    }
}
