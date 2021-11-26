import { updateDisplay } from "../ui/ui.js";

async function getWeather(city) {
    try {
        const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64a5b0ec722ade163857cb5283dd0726`;
        const response = await fetch(link, { mode: "cors" });
        const weatherData = await response.json();
        console.log(weatherData);
        console.log(weatherData.main.temp);
        processWeather(weatherData);
        return weatherData;
    } catch (error) {
        console.log("error in getWeather for: " + city);
    }
}

async function processWeather(data) {
    console.log("here");
    console.log(data.main.temp);
    updateDisplay(data.name, data.main.temp);
}

export { getWeather, processWeather };
