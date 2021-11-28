import {
    kelvinToCelsius,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
} from "../unit_conversion/conversion.js";
import { getWeather } from "../weather_api/weather.js";

// add functionality to convert between C and F

function updateDisplay(city, tempCurrent, tempMax, tempMin, condition) {
    const display = document.querySelector("main");
    display.innerHTML = "";

    const box = document.createElement("div");
    box.className = "weather-box";

    const intro = document.createElement("h2");
    intro.textContent = `${city} Weather`;

    const info = document.createElement("div");

    // current temp
    const currentTemp = document.createElement("p");
    let cityTemp = kelvinToCelsius(tempCurrent);
    cityTemp = celsiusToFahrenheit(cityTemp);
    cityTemp = Math.round(cityTemp);
    currentTemp.textContent = `The current temperature is ${cityTemp} degrees`;

    // high temp
    const highTemp = document.createElement("p");
    let cityHigh = kelvinToCelsius(tempMax);
    cityHigh = celsiusToFahrenheit(cityHigh);
    cityHigh = Math.round(cityHigh);
    highTemp.textContent = `The high temperature is ${cityHigh} degrees`;

    // low temp
    const lowTemp = document.createElement("p");
    let cityLow = kelvinToCelsius(tempMin);
    cityLow = celsiusToFahrenheit(cityLow);
    cityLow = Math.round(cityLow);
    lowTemp.textContent = `The low temperature is ${cityLow} degrees`;

    const currentCondition = document.createElement("p");
    currentCondition.textContent = `The current condition is ${condition}`;

    info.appendChild(currentTemp);
    info.appendChild(highTemp);
    info.appendChild(lowTemp);
    info.appendChild(currentCondition);

    box.appendChild(intro);
    box.appendChild(info);
    display.appendChild(box);
}

function searchBox() {
    const search = document.createElement("div");
    const form = document.createElement("form");

    const location = document.createElement("input");
    location.type = "text";
    location.placeholder = "Enter Your Location: ";
    location.id = "cityLocation";

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const city = document.querySelector("#cityLocation").value;
        location.value = "";
        getWeather(city);
    });

    form.appendChild(location);
    form.appendChild(submit);

    search.appendChild(form);

    return search;
}

function loadHeader() {
    const header = document.createElement("header");

    const name = document.createElement("h1");
    name.textContent = "Weather App";

    header.appendChild(name);

    const nav = document.createElement("nav");

    const search = searchBox();

    nav.appendChild(search);

    header.appendChild(nav);

    return header;
}

function loadMain() {
    return document.createElement("main");
}

function loadFooter() {
    const footer = document.createElement("footer");
    const div = document.createElement("div");
    div.innerHTML =
        '<p>Copyright © <a href="https://www.github.com/jdelles">James Delles</a> 2021</p>';

    footer.appendChild(div);

    return footer;
}

function load() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader());
    content.appendChild(loadMain());
    content.appendChild(loadFooter());
}

export { load, updateDisplay };
