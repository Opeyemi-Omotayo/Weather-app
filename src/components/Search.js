import React, {useState, useEffect} from 'react';
import WeatherDetails from './WeatherDetails';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [tempInfo, setTempInfo] = useState({});
    const [isWeatherAvailable, setIsWeatherAvailable] = useState(false);
    const [error, setError] = useState(null);

    const searchTermHandler = (e) => {
        setSearchTerm(e.target.value);
    }

    const getWeatherInfo = async (e) => {

      if (e) {
        e.preventDefault();
      }
      
      try {
        const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiKey}`;
  
        let res = await fetch(url);
        let data = await res.json();
        if (data.cod === '404') {
          setError('City not found');
          setIsWeatherAvailable(false);
        }else{
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
        setError('An error occurred while fetching data');
        setIsWeatherAvailable(false);
      }
    };
  
    useEffect(() => {
      if (searchTerm) {
        getWeatherInfo();
      }
    }, [searchTerm]);

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
    />
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
{error && <div className='flex items-center justify-center'> <p className="text-red-500 bg-white px-6 py-4 rounded-md shadow">{error}</p> </div>}
</>
  )
}

export default Search;