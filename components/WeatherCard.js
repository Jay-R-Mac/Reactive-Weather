import React from "react";
import weatherHelper from "../utils/weatherHelper.js"

function WeatherCard({city}) {
 const icon = weatherHelper(city.forecast)
  return (
    <div class = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {icon} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city.city}</h3>
            <h5 className="card-text">{city.temperature}</h5>
            <h5 className="card-text">{city.forecast}</h5>
        </div>
    </div>
  );
};

module.exports = WeatherCard