export default async function getWeather(city) {
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64a5b0ec722ade163857cb5283dd0726`;
    const response = await fetch(link, { mode: "cors" });
    return response.json();
}
