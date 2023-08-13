import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempInfo, setTempInfo] = useState({});
  const [isWeatherAvailable, setIsWeatherAvailable] = useState(false);
  const [error, setError] = useState(null);
  const [citySuggestions, setCitySuggestions] = useState([]);

  const searchTermHandler = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    fetchCitySuggestions(newSearchTerm);
  };

  const fetchCitySuggestions = async (input) => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/find?q=${input}&type=like&sort=population&appid=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();

      const suggestions = data.list
        .filter((city) =>
          city.name.toLowerCase().startsWith(input.toLowerCase())
        )
        .map((city) => city.name);

      setCitySuggestions(suggestions);
    } catch (error) {
      console.error(
        "An error occurred while fetching city suggestions:",
        error
      );
      setCitySuggestions([]);
    }
  };

  const getWeatherInfo = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiKey}`;

      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        setError("City not found");
        setIsWeatherAvailable(false);
      } else {
        const { temp, humidity, pressure } = data.main;
        const { main: weatherType } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;

        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weatherType,
          name,
          speed,
          country,
          sunset,
        };

        setTempInfo(myNewWeatherInfo);
        setIsWeatherAvailable(true);
        setError(null);
      }
    } catch (error) {
      setError("An error occurred while fetching data");
      setIsWeatherAvailable(false);
    }
    setSearchTerm("");
  };

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <form className=" flex items-center justify-center flex-col sm:flex-row w-4/5">
          <input
            type="text"
            placeholder="search city..."
            className="py-2 px-4 border border-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2 sm:w-1/2 focus:ring focus:ring-opacity-50 focus:border-gray-800 outline-none"
            value={searchTerm}
            onChange={searchTermHandler}
            list="city-suggestions"
          />
          <datalist id="city-suggestions">
            {citySuggestions.map((cityName, index) => (
              <option key={index} value={cityName} />
            ))}
          </datalist>
          <button
            type="submit"
            className="bg-gray-900 text-white py-2 px-4 rounded-md sm:w-auto hover:bg-gray-800 focus:ring focus:ring-opacity-50 focus:outline-none"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </form>
      </div>

      {isWeatherAvailable && <WeatherDetails {...tempInfo} />}
      {error && (
        <div className="flex items-center justify-center">
          {" "}
          <p className="text-red-500 bg-white px-6 py-4 rounded-md shadow">
            {error}
          </p>{" "}
        </div>
      )}
    </>
  );
};

export default Search;
