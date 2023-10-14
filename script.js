//TODO Implementar boton de limpiar
var pinIMG = document.getElementById("mappin")
var div = document.getElementById("country-info")
shrinkDiv()
function getCountry() {
    shrinkDiv()
    let worldDiv = document.querySelector(".world")
    let button = document.getElementById("search")
    button.disabled = true
    let countryInput = document.getElementById("countryInput")
    let country = countryInput.value.trim().toLowerCase()
    countryInput.readOnly = true
    const VALIDCOUNTRYS = document.getElementById("countrys")
    let divData = []
    let continentX = 0
    let dotX = 0
    let dotY = 0
    //TODO Refactorizar código de manera mas eficiente
    //TODO Refactorizar codigo para que si se ingresa un pais erroneo y ya esta marcada venezuela, no desaparezca el pin
    //TODO Refactorizar codigo para que los botones no se puedan pulsar hasta que acabe la rotacion

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
                divData = [
                    "Continente: Europa",
                    "Capital: Berlín.",
                    "Idioma oficial: Alemán.",
                    "Gentilicio: Alemán, alemana, alemanes.",
                    "Moneda: Euro (€, EUR).",
                    "Forma de gobierno: República Federal Parlamentaria.",
                    "Presidente: Frank-Walter Steinmeier.",
                    "Superficie: 357.375,62 km².",
                    "Población: 84.270.625 hab.",
                    "Densidad Poblacional: 233 hab/km².",
                    "Platos típicos principales: Bretzel: Una rosquilla horneada en forma de lazo, originaria de la región de Baviera. Schnitzel: Un filete empanizado y frito, generalmente hecho con carne de cerdo. Kartoffelpuffer: Tortitas de patata rallada, fritas en aceite.",
                ]
            } else if (country == "reinounido") {
                divData = [
                    "Continente: Europa",
                    "Capital: Londres.",
                    "Idioma oficial: Inglés.",
                    "Gentilicio: Británico, británica, británico.",
                    "Moneda: Libra esterlina (£, GBP).",
                    "Forma de gobierno: Monarquia parlamentaria unitaria.",
                    "Primer minisitro: Rishi Sunak.",
                    "Superficie: 243.610 km².",
                    "Población:  67.736.800 hab.",
                    "Densidad Poblacional: 270,7 hab/km².",
                    "Platos típicos principales: Lenguado de Dover: Es un pescado plano que se cocina con mantequilla y limón. Pastel de cordero: Es un pastel salado que se rellena con carne de cordero, verduras y puré de patatas. Filete y pastel de riñón: Es un pastel salado que se rellena con carne de res, riñones y verduras.",
                ]
                dotX = 5
                dotY = 65
            }
            //AMERICA
        } else if (country == "argentina") {
            dotX = 60
            dotY = 270
            divData = [
                "Continente: América del Sur.",
                "Capital: Buenos Aires.",
                "Idioma oficial: Castellano.",
                "Gentilicio: Argentino, argentina, argentinos.",
                "Moneda: Peso ($, ARS).",
                "Forma de gobierno: República federal presidencialista.",
                "Presidente: Alberto Fernández.",
                "Superficie: 2.780.400 km².",
                "Población: 46.044.703 hab.",
                "Densidad Poblacional: 16,56 hab/km².",
                "Platos típicos principales: Asado: Diferentes tipos de cortes de carne que se asan en una parrilla a fuego lento. Locro: Especie de sopa espesa y abundante hecha de maíz, frijoles, patatas, calabaza y algún tipo de carne. Choripán: Sándwich compuesto por chorizo y pan.",
            ]
        } else if (country == "venezuela") {
            dotX = 60
            dotY = 170
            divData = [
                "Continente: América del Sur.",
                "Capital: Caracas.",
                "Idioma oficial: Castellano.",
                "Gentilicio: Venezolano, venezolana, venezolanos.",
                "Moneda: Bolívar (Bs, VED).",
                "Forma de gobierno: República federal presidencialista.",
                "Presidente: Nicolás Maduro.",
                "Superficie: 916.445 km².",
                "Población: 30.518.260 hab.",
                "Densidad Poblacional: 35,7 hab/km².",
                "Platos típicos principales: Pabellón criollo: Es un guiso de carne desmenuzada, arroz, frijoles negros y plátanos maduros fritos. Patacones: Son unas tortillas de plátano verde frito que se sirven como acompañamiento. Cachapa: Es una tortilla dulce preparada con maíz tierno rallado y queso. Arepa: Es una torta de masa de maíz rellena con queso, carne, aguacate, jamón, entre otros ingredientes.",
            ]
        } else if (country == "estadosunidos") {
            dotX = -25
            dotY = 100
            divData = [
                "Continente: América del Norte.",
                "Capital: Washington D.C.",
                "Idioma oficial: Ninguno (el inglés es el principal).",
                "Gentilicio: Estadounidense, estadounidenses.",
                "Moneda: Dólar estadounidense ($, USD).",
                "Forma de gobierno: República federal presidencialista.",
                "Presidente: Joe Biden.",
                "Superficie: 9.147.593 km².",
                "Población: 339.665.118 hab.",
                "Densidad Poblacional: 32,8 hab/km².",
                "Platos típicos principales: El Philly cheesesteak: es un sándwich que se compone de filete de res cortado en tiras, cebolla caramelizada y queso provolone o queso tipo Cheez Whiz. El Reuben sándwich: es un sándwich caliente que se compone de carne en conserva, queso suizo, chucrut y salsa rusa o aderezo Thousand Island, todo ello servido entre dos rebanadas de pan de centeno. La Jambalaya: es un plato que se compone de arroz, carne (como pollo o salchicha), mariscos (como camarones o cangrejos), verduras y especias.",
            ]
        }
        // AFRICA
        else if (country == "nigeria" || country == "egipto") {
            continentX = -215
            if (country == "nigeria") {
                dotX = 5
                dotY = 165
                divData = [
                    "Continente: África.",
                    "Capital: Abuya.",
                    "Idioma oficial: Inglés.",
                    "Gentilicio: Nigeriano, nigeriana, nigerianos.",
                    "Moneda: Naira (₦, NGN).",
                    "Forma de gobierno: República federal presidencialista.",
                    "Presidente: Bola Tinubu.",
                    "Superficie: 923.768 km².",
                    "Población: 222.486.000 hab.",
                    "Densidad Poblacional: 240,8 hab./km²",
                    "Platos típicos principales: Arroz frito nigeriano: Se prepara con arroz, verduras, carne y especias. Jollof rice: Es un plato de arroz cocinado con tomate y especias. Melon seed and beef soup: Es una sopa de semillas de melón y carne.",
                ]
            } else if (country == "egipto") {
                divData = [
                    "Continente: África (y parte de Asia).",
                    "Capital: El Cairo.",
                    "Idioma oficial: Árabe.",
                    "Gentilicio: Egipcio, egipcia, egipcios.",
                    "Moneda: Libra egipcia (LE, ج.م, EGP).",
                    "Forma de gobierno: República semipresidencialista.",
                    "Presidente: Abdelfatah Al-Sisi.",
                    "Superficie: 996.603 km².",
                    "Población: 112.716.600 hab.",
                    "Densidad Poblacional: 104,6 hab./km².",
                    "Platos típicos principales: Falafel: una bola frita o croqueta hecha de garbanzos o habas secas. Ful mudammas: un plato de habas cocidas y trituradas, a menudo se sirve con pan pita. Kushari: un plato vegetariano que consta de arroz, lentejas, macarrones y cebolla frita, cubierto con salsa de tomate.",
                ]
                dotX = 55
                dotY = 125
            }
            // ASIA
        } else if (country == "japón" || country == "coreadelsur") {
            continentX = -400
            dotY = 100
            if (country == "japón") {
                dotX = 115
                divData = [
                    "Continente: Asia.",
                    "Capital: Tokio.",
                    "Idioma oficial: Japonés.",
                    "Gentilicio: Japonés, japonesa, japoneses.",
                    "Moneda: Yen (¥, JPY).",
                    "Forma de gobierno: Monarquía parlamentaria.",
                    "Primer ministro: Fumio Kishida.",
                    "Superficie: 377.975 km².",
                    "Población: 123.719.238 hab.",
                    "Densidad Poblacional: 334,23 hab./km².",
                    "Platos típicos principales: Sashimi: es un platillo japonés que consiste en rebanadas finas de pescado crudo, generalmente servido con salsa de soja y wasabi. Nigiri: es un tipo de sushi que consiste en una bola de arroz cubierta con una rebanada de pescado crudo o mariscos. Temaki: es un cono de alga nori relleno de arroz, pescado crudo, verduras y otros ingredientes.",
                ]
            } else if (country == "coreadelsur") {
                divData = [
                    "Continente: Asia.",
                    "Capital: Seúl.",
                    "Idioma oficial: Coreano.",
                    "Gentilicio: Surcoreano, surcoreana, surcoreanos.",
                    "Moneda:  Won surcoreano (₩ / 원, KRW).",
                    "Forma de gobierno: República presidencialista.",
                    "Presidente: Yoon Suk-yeol.",
                    "Superficie: 100.339 km².",
                    "Población: 51.966.948 hab.",
                    "Densidad Poblacional: 515 hab./km².",
                    "Platos típicos principales: Kimchi: Es un plato fermentado a base de col china, rábano, ajo, jengibre y pimiento rojo. Es un acompañamiento común en la mayoría de las comidas coreanas. Bibimbap: Es un plato de arroz mezclado con verduras, carne, huevo y pasta de chile rojo. Bulgogi: Es un plato de carne marinada en salsa de soja, ajo, azúcar y aceite de sésamo. Se cocina a la parrilla y se sirve con arroz y verduras.",
                ]
                dotX = 85
            }
            // OCEANIA
        } else {
            continentX = -465
            if (country == "australia") {
                dotX = 40
                dotY = 240
                divData = [
                    "Continente: Oceanía.",
                    "Capital: Camberra.",
                    "Idioma oficial: Inglés.",
                    "Gentilicio: Australiano, australiana, australianos.",
                    "Moneda: Dólar australiano ($, AUD).",
                    "Forma de gobierno: Monarquía constitucional federal parlamentaria.",
                    "Primer ministro: Anthony Albanese.",
                    "Superficie: 7.741.220 km².",
                    "Población: 26.020.805 hab.",
                    "Densidad Poblacional: 3,4 hab./km².",
                    "Platos típicos principales: Tim Tam: Una galleta rectangular con capas de galleta y crema de chocolate. Carne asada australiana: La carne asada es muy popular en Australia, y es común ver a familias y amigos compartiendo un buen asado en la playa o en sus casas. Cocodrilo, canguro o búfalo: Estos animales exóticos son comunes en la dieta australiana.",
                ]
            } else if (country == "nuevazelanda") {
                dotX = 120
                dotY = 285
                divData = [
                    "Continente: Oceanía.",
                    "Capital: Wellington.",
                    "Idioma oficial: Inglés.",
                    "Gentilicio: Neozelandés, neozelandesa, neozelandeses.",
                    "Moneda: Dólar neozelandés ($, NZD).",
                    "Forma de gobierno: Monarquía parlamentaria.",
                    "Primer ministro: Chris Hipkins.",
                    "Superficie: 268.838 km².",
                    "Población: 5.006.020 hab.",
                    "Densidad Poblacional: 18,3 hab./km².",
                    "Platos típicos principales: Hangi maorí: Es un método de cocción tradicional maorí que se prepara en un horno en el suelo. Se cocina carne, pescado y verduras al vapor. Asado Hogget: Es un cordero asado que se cocina con patatas, batatas, guisantes y calabaza. Se baña con una deliciosa salsa de menta. Tartas saladas (o «pies»): Son pasteles salados rellenos de carne, verduras y queso.",
                ]
            }
        }
    } else {
        alert("Pais no válido. Seleccionando país de origen....")
        if (window.getComputedStyle(pinIMG).getPropertyValue("opacity") == 0) {
            dotX = 60
            dotY = 170
            movePin(dotX, dotY)
            countryInput.value = ""
            divData = [
                "Continente: América del Sur.",
                "Capital: Caracas.",
                "Idioma oficial: Castellano.",
                "Gentilicio: Venezolano, venezolana, venezolanos.",
                "Moneda: Bolívar (Bs, VED).",
                "Forma de gobierno: República federal presidencialista.",
                "Presidente: Nicolás Maduro.",
                "Superficie: 916.445 km².",
                "Población: 30.518.260 hab.",
                "Densidad Poblacional: 35,7 hab/km².",
                "Platos típicos principales: Pabellón criollo: Es un guiso de carne desmenuzada, arroz, frijoles negros y plátanos maduros fritos. Patacones: Son unas tortillas de plátano verde frito que se sirven como acompañamiento. Cachapa: Es una tortilla dulce preparada con maíz tierno rallado y queso. Arepa: Es una torta de masa de maíz rellena con queso, carne, aguacate, jamón, entre otros ingredientes.",
            ]
        }

        loadContent(divData)
        expandDiv()
        button.disabled = false
        countryInput.readOnly = false
        return false
    }
    if (
        window.getComputedStyle(pinIMG).getPropertyValue("opacity") == 1 &&
        dotX != 60 &&
        dotY != 170
    ) {
        fadePin()
    }

    //Mov Map
    const move = [{ backgroundPosition: "0px" }, { backgroundPosition: continentX + "px" }]

    const pause = {
        duration: 5000,
        iterations: 1,
        fill: "forwards",
    }

    worldDiv.animate(move, pause)
    if (country == "argentina" || country == "estadosunidos" || country == "venezuela") {
        movePin(dotX, dotY)
        loadContent(divData)
        expandDiv()
    } else {
        setTimeout(() => {
            loadContent(divData)
            movePin(dotX, dotY)
            expandDiv()
        }, 5000)
    }
    //TODO Mejorar caso Venezuela con input y readOnly
    if (country != "venezuela") {
        setTimeout(() => {
            dotX = 60
            dotY = 170
            fadePin()
            shrinkDiv()
            divData = [
                "Continente: América del Sur.",
                "Capital: Caracas.",
                "Idioma oficial: Castellano.",
                "Gentilicio: Venezolano, venezolana, venezolanos.",
                "Moneda: Bolívar (Bs, VED).",
                "Forma de gobierno: República federal presidencialista.",
                "Presidente: Nicolás Maduro.",
                "Superficie: 916.445 km².",
                "Población: 30.518.260 hab.",
                "Densidad Poblacional: 35,7 hab/km².",
                "Platos típicos principales: Pabellón criollo: Es un guiso de carne desmenuzada, arroz, frijoles negros y plátanos maduros fritos. Patacones: Son unas tortillas de plátano verde frito que se sirven como acompañamiento. Cachapa: Es una tortilla dulce preparada con maíz tierno rallado y queso. Arepa: Es una torta de masa de maíz rellena con queso, carne, aguacate, jamón, entre otros ingredientes.",
            ]
            loadContent(divData)
            //Mov Map Inverso
            const move = [{ backgroundPosition: continentX + "px" }, { backgroundPosition: "0px" }]

            const pause = {
                duration: 5000,
                iterations: 1,
                fill: "forwards",
            }
            setTimeout(() => {
                movePin(dotX, dotY)
                expandDiv()
            }, 5000)
            worldDiv.animate(move, pause)
            countryInput.readOnly = false
            countryInput.value = ""
            button.disabled = false
        }, 20000)
    } else {
        countryInput.readOnly = false
        countryInput.value = ""
        button.disabled = false
        divData = [
            "Continente: América del Sur.",
            "Capital: Caracas.",
            "Idioma oficial: Castellano.",
            "Gentilicio: Venezolano, venezolana, venezolanos.",
            "Moneda: Bolívar (Bs, VED).",
            "Forma de gobierno: República federal presidencialista.",
            "Presidente: Nicolás Maduro.",
            "Superficie: 916.445 km².",
            "Población: 30.518.260 hab.",
            "Densidad Poblacional: 35,7 hab/km².",
            "Platos típicos principales: Pabellón criollo: Es un guiso de carne desmenuzada, arroz, frijoles negros y plátanos maduros fritos. Patacones: Son unas tortillas de plátano verde frito que se sirven como acompañamiento. Cachapa: Es una tortilla dulce preparada con maíz tierno rallado y queso. Arepa: Es una torta de masa de maíz rellena con queso, carne, aguacate, jamón, entre otros ingredientes.",
        ]
        loadContent(divData)
        expandDiv()
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
function expandDiv() {
    console.log(div)
    div.animate(
        {
            width: "500px",
            padding: "15px",
        },
        {
            duration: 2000,
            easing: "ease-in-out",
            fill: "forwards",
        }
    )
    div.addEventListener("animationend", () => {
        div.style.display = "visible"
    })
}
function shrinkDiv() {
    div.animate(
        { width: 0, padding: 0 },
        { duration: 2000, easing: "ease-in-out", fill: "forwards" }
    )
    div.addEventListener("animationend", () => {
        div.style.display = "none"
    })
}
function loadContent(datos) {
    let contentDiv = document.getElementById("country-content")
    contentDiv.innerHTML = ""
    let data = datos
    console.log(typeof data)
    // Crea una nueva lista desordenada
    let lista = document.createElement("ul")

    // Agrega cada dato a la lista como un elemento <li>
    for (let i = 0; i < data.length; i++) {
        let elemento = document.createElement("li")
        elemento.innerHTML = data[i]
        lista.appendChild(elemento)
    }

    // Agrega la lista al div
    contentDiv.appendChild(lista)

    // Agrega un mensaje de depuración
    console.log("La lista de datos es:", datos)
}
