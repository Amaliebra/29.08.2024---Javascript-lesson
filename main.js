const weatherApi =
  "https://api.met.no/weatherapi/locationforecast/2.0/?lat=59.93&lon=10.72&altitude=90";

const response = await fetch(weatherApi);
const data = await response.json();

const currentTemperature =
  data.properties.timeseries[0].data.instant.details.air_temperature;
console.log(currentTemperature);

//Find weather widget from html
