import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp-num">{props.celsius}</span>{" "}
        <span className="unit">°C |</span>{" "}
        <span className="unit">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp-num">{fahrenheit()} </span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C |
          </a>{" "}
        </span>
        <span className="unit"> °F </span>
      </div>
    );
  }
}
