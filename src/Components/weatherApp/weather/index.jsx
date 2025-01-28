import React, { useEffect, useState } from "react";
import Search from "../search";
import Loader from "./Loader";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=6375db36007e4296db225b5b25bc0261`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  useEffect(() => {
    fetchWeatherData("Bangalore");
  }, []);

  console.log(loading);
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="desc"> {weatherData?.weather[0]?.description}</p>
          <div className="weather-info">
            <div className="coloumn">
              <p>{weatherData?.wind?.speed} kmph</p>
              <p>wind speed</p>
            </div>

            <div className="coloumn">
              <p>{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
