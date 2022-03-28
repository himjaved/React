import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="weather-body">
        <div className="row city-weather">
          <div className="col-6">
            <div className="city-name">{props.data.cityName}</div>
            <div>
              <FormattedDate date={props.data.date} />
            </div>

            <div className="description">{props.data.description}</div>
          </div>

          <div className="col-6">
            <div>Humidity: {props.data.humidity}%</div>
            <div>Wind: {props.data.wind} km/h</div>
          </div>
        </div>
        <div className="float-left">
          <WeatherIcon code={props.data.icon} size={52} />{" "}
          <div className="temperature-display">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
