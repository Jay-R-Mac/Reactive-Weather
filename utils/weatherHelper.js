import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";


const weatherHelper = (forecast) => {
  switch (forecast) {
    case "Sunny":
      return sunny;
    case "Rainy":
      return rainy;
    case "Partly Cloudy":
      return partlyCloudy;
    case "Cloudy":
      return cloudy;
    default:
      return sunny; // Default to sunny if forecast doesn't match
  }
};

export default weatherHelper; 