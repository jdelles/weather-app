import {
    kelvinToCelsius,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
} from "../unit_conversion/conversion.js";

function updateDisplay(city, temp) {
    const display = document.querySelector("main");
    display.innerHTML = "";

    const box = document.createElement("div");
    box.className = "weather-box";

    const intro = document.createElement("h2");
    intro.textContent = `${city} Current Weather`;

    const info = document.createElement("div");
    const currentTemp = document.createElement("p");
    const cityTemp = kelvinToCelsius(temp);
    let cityTempF = celsiusToFahrenheit(cityTemp);
    cityTempF = Math.round(cityTempF);
    currentTemp.textContent = `The current temperature is ${cityTempF} degrees`;
    info.appendChild(currentTemp);

    box.appendChild(intro);
    box.appendChild(info);
    display.appendChild(box);
}

// function searchBox() {
//     const projectDiv = document.createElement("div");

//     const intro = document.createElement("h2");
//     intro.textContent = "Add a new project";

//     const form = document.createElement("form");

//     const title = document.createElement("input");
//     title.type = "text";
//     title.placeholder = "Project Name";
//     title.id = "projectName";

//     const submit = document.createElement("button");
//     submit.textContent = "Submit";
//     submit.addEventListener('click', (event) => {
//         event.preventDefault();
//         const name = document.querySelector("#projectName").value;
//         projectManager.createProject(name);
//         document.querySelector("#projectForm").classList.add("hidden");
//         updateDisplay();
//     });

//     const cancel = document.createElement("button");
//     cancel.classList.add('ghost-button');
//     cancel.textContent = "Cancel";
//     cancel.addEventListener('click', (event) => {
//         event.preventDefault();
//         document.querySelector("#projectName").value = "";
//         showProjectList();
//     });

//     form.appendChild(title);
//     form.appendChild(submit);
//     form.appendChild(cancel);

//     projectDiv.appendChild(intro);
//     projectDiv.appendChild(form);
//     projectDiv.classList.add('hidden');
//     projectDiv.id = "projectForm";

//     return projectDiv;
// }

function loadHeader() {
    const header = document.createElement("header");

    const name = document.createElement("h1");
    name.textContent = "Weather App";

    header.appendChild(name);

    const nav = document.createElement("nav");

    const search = document.createElement("button");
    search.addEventListener("click", (event) => {
        event.preventDefault();
    });
    search.textContent = "Search Placeholder";

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
