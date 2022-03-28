import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temp-num">{props.celsius}</span>{" "}
      <span className="unit">°C</span> <span className="unit"> </span>
    </div>
  );
}
