// Getting data from the API
const weatherApi =
  "https://api.met.no/weatherapi/locationforecast/2.0/?lat=59.93&lon=10.72&altitude=90";

const response = await fetch(weatherApi);
const data = await response.json();
const currentTemperature =
  data.properties.timeseries[0].data.instant.details.air_temperature;
const currentWindSpeed =
  data.properties.timeseries[0].data.instant.details.wind_speed;
const currentWeather =
  data.properties.timeseries[0].data.instant.details.summary;
const currentUvi =
  data.properties.timeseries[0].data.instant.details
    .ultraviolet_index_clear_sky;
console.log(data);

//Find weather widget

const temperatureDisplay = document.getElementById("temperature");
const windSpeedDisplay = document.getElementById("wind-speed");
const weatherDisplay = document.getElementById("Weather");
const uviDisplay = document.getElementById("UV-radiation");
//Oppdate  html element with the data

temperatureDisplay.textContent = currentTemperature;
windSpeedDisplay.textContent = currentWindSpeed;
weatherDisplay.textContent = currentWeather;
uviDisplay.textContent = currentUvi;
