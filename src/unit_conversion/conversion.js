function kelvinToCelsius(temperature) {
    return temperature - 273.15;
}

function fahrenheitToCelsius(temperature) {
    return ((temperature - 32) * 5) / 9;
}

function celsiusToFahrenheit(temperature) {
    return (temperature * 9) / 5 + 32;
}

export { kelvinToCelsius, fahrenheitToCelsius, celsiusToFahrenheit };
