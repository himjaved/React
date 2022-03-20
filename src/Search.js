import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="Search">
      <h1>Weather App</h1>
      <form>
        {" "}
        <div className="row">
          <div className="col">
            {" "}
            <input
              type="text"
              className="city-input form-control form-control-sm"
            />
          </div>
          <div className="col">
            <input
              type="submit"
              value="Search"
              className="btn btn-success mb-1 btn-m"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
