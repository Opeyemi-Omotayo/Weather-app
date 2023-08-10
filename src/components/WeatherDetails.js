import React, { useState, useEffect } from "react";

function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
}) {
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="flex items-center justify-center rounded-md">
      <article className="border shadow w-3/6 ">
        <div className="w-40">
          <i className={`wi  ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="flex flex-row">
            <div className=" uppercase text-4xl font-light">
              {weatherType}
            </div>
            <div className=" text-sm">
              {name}, {country}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-around py-5 border-t border-b border-gray-300">
            <div >
              <p>
                <i className={"wi wi-sunset text-4xl"}></i>
              </p>
              <p >
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div >
              <p>
                <i className={"wi wi-humidity text-4xl"}></i>
              </p>
              <p >
                {humidity} <br />
                Humidity
              </p>
            </div>
          
            <div >
              <p>
                <i className={"wi wi-rain text-4xl"}></i>
              </p>
              <p >
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div >
              <p>
                <i className={"wi wi-strong-wind text-4xl"}></i>
              </p>
              <p>
                {speed} <br />
                Speed
              </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default WeatherDetails;
