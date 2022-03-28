import React, { useState } from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      cityName: response.data.name,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    weatherSearch();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }
  function weatherSearch() {
    const apiKey = "e8474ded332284d7f681067582717bab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <h1>Weather App</h1>

        <form className="search-form" onSubmit={handleSubmit}>
          {" "}
          <div className="row">
            <div className="col-6">
              {" "}
              <input
                type="text"
                className="city-input form-control form-control-m"
                placeholder="Enter a city..."
                onChange={handleChangeCity}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-success mb-1 btn-m"
              />
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    weatherSearch();
    return <p>Loading...</p>;
  }
}
