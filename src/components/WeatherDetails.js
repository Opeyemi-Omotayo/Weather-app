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
    <div className="flex items-center justify-center">
      <article className="border shadow lg:w-3/6 w-4/6 bg-white rounded-md opacity-80">
        <div className="flex items-center justify-around lg:text-6xl text-3xl text-sky-400 py-6 lg:py-8 ">
          <i className={`wi  ${weatherState}`}></i>
        </div>
        <div className="flex items-center justify-between border-t border-sky-200 w-full">
          <div className="px-8 lg:text-2xl text-lg">
            <span>{temp}&deg;</span>
          </div>
          <div className="flex items-center justify-center flex-col bg-sky-400 w-4/6 text-white py-2">
            <div className=" uppercase text-lg lg:text-3xl font-light">
              {weatherType}
            </div>
            <div className="text-sm  lg:text-lg font-light">
              {name}, {country}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-around py-4 border-t border-sky-200">
           <div className="flex flex-col sm:flex-row" >
              <p className="text-sky-400 px-3">
                <i className={"wi wi-sunset text-sm lg:text-4xl"}></i>
              </p>
              <p className="text-sm">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="flex flex-col sm:flex-row">
              <p className="text-sky-400 px-3">
                <i className={"wi wi-humidity text-lg lg:text-4xl"}></i>
              </p>
              <p className="text-sm">
                {humidity} <br />
                Humidity
              </p>
            </div>
           
          <div className="flex flex-col sm:flex-row">
              <p className="text-sky-400 px-3">
                <i className={"wi wi-rain text-lg lg:text-4xl"}></i>
              </p>
              <p className="text-sm">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="flex flex-col sm:flex-row ">
              <p className="text-sky-400 px-3">
                <i className={"wi wi-strong-wind text-lg lg:text-4xl"}></i>
              </p>
              <p className="text-sm">
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
