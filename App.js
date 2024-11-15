import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import cities from "./data";
import Location from "./components/Location";
import Form from "./components/Form";


function App() {
  const [location, setLocation] = useState("Rome");
  return (
    <>
      
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} />
      <Location data={cities} location={location} />
      <div className="app">
        {cities.map((city, index) => {
          return <WeatherCard city={city} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
