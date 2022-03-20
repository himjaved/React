import React from "react";
import Footer from "./Footer";
import Search from "./Search";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-body">
        <Search />
        <div className="row city-weather">
          <div className="col-6">
            <div id="city-name">Melbourne</div>
            <div id="showDate">Sunday 17:50</div>

            <div id="weather-description">Clear</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Clear"
              id="icon"
              className="float-left"
              width="60px"
            />
            <div id="display-temp">17 °C</div>
          </div>

          <div className="col-6">
            <div id="humidity">Humidity: 68%</div>
            <div id="wind">Wind: 4km/h</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
