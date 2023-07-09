import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [data, setData] = useState([]);
  const [inputCity, setInputCity] = useState("");

  //using axios to call the api
  const getWeatherDetails = (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_APIKEY}`;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //while changing the input handleChangeInput function will set that value in setInputCity
  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  return (
    <div className="weather-container">
      <div>
        <input
          type="text"
          className="weather-input"
          placeholder="Search temperature of your city.."
          onChange={handleChangeInput}
          value={inputCity}
        />
        <button type="submit" className="weather-btn" onClick={handleSearch}>
          Search
        </button>
        {Object.keys(data).length > 0 && (
          <div className="weather-details">
            <p>
              Location: <span>{data?.name}</span>
            </p>
            <p>
              Temperature:{" "}
              <span>{(data?.main?.temp - 273.15).toFixed(2)}°C</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
