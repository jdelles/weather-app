import "./style.css";
import { getWeather, processWeather } from "./weather_api/weather.js";
import {
    kelvinToCelsius,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
} from "./unit_conversion/conversion.js";
import { load } from "./ui/ui.js";

load();
const cityWeather = getWeather("london");
