import React from "react"; // Correct the import statement
import weatherHelper from '../utils/weatherHelper'; // Assuming this is the correct path

function Location({ data, location }) {
  // Find the city based on the current location
  const city = data.find((city) => city.city === location);

  if (!city) {
    return <p>City not found!</p>
  }
  
  // Use weatherHelper to get the appropriate icon based on the forecast
  const icon = weatherHelper(city.forecast);

  return (
    <div class="card"> 
      <p>Your Location's Weather</p>
      <div className="img-container">
        <img className="card-img-top" src={icon} alt="Weather icon" id="icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

export default Location;
