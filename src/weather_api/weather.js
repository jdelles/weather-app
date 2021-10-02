async function getWeather(city) {
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64a5b0ec722ade163857cb5283dd0726`;
    const response = await fetch(link, { mode: "cors" });
    const data = await response.json();
    return processWeather(data);
}

async function processWeather(data) {
    console.log(data);
    return data.main.temp;
}

export { getWeather, processWeather };
