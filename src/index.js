import "./style.css";
import { getWeather, processWeather } from "./weather_api/weather.js";
import {
    kelvinToCelsius,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
} from "./unit_conversion/conversion.js";

const test = getWeather("london");
