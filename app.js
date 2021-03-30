// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // returnamos el valor
    return valueInDollar;
}

/*********Conversión de DOLAR a YEN */
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yenes
    let valueInYenes = 0.83 * oneEuroIs.JPY;
    //return the yenes value
    return valueInYenes;
}

module.exports = { fromEuroToDollar, fromDollarToYen }