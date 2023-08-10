import React, { useState, useEffect } from 'react';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours();
  let greeting = 'Good Morning!';

  if (hours >= 12 && hours < 17) {
    greeting = 'Good Afternoon!';
  } else if (hours >= 17) {
    greeting = 'Good Evening!';
  }

  return (
    <div className="bg-gray-900" >
  <section className=" py-6 p-7 flex justify-between items-center">
   <div>
    <h1  className="font-semibold text-xl sm:text-2xl capitalize text-white">{greeting}</h1>
    <p className="font-normal text-sm sm:text-base mt-1 text-white">Retrieving weather information...</p>
  </div>

  <div className="right-side bg-gray-700 rounded-lg p-4 flex items-center justify-center flex-col text-white">
    <p className=" font-normal text-xs sm:text-sm mb-2">Local time:</p>
    <div className=" flex">
      <div className=" flex flex-col justify-center items-start bg-gray-600 px-3 py-1 rounded">
        <span data-time="hours" className=" font-bold text-lg sm:text-xl">{time.getHours()}</span>
        <span className="  font-normal text-xs sm:text-sm capitalize">Hours</span>
      </div>
      <span className="  font-bold text-lg sm:text-xl mx-4 items-center">:</span>
      <div className=" flex flex-col justify-center items-start bg-gray-600 px-3 py-1 rounded">
        <span data-time="minutes" className=" font-bold text-lg sm:text-xl">{time.getMinutes()}</span>
        <span className="  font-normal text-xs sm:text-sm capitalize">mins</span>
      </div>
      <span className="  font-bold text-lg sm:text-xl mx-4 items-center">:</span>
      <div className=" flex flex-col justify-center items-start bg-gray-600 px-3 py-1 rounded">
        <span data-time="seconds" className=" font-bold text-lg sm:text-xl">{time.getSeconds()}</span>
        <span className=" font-normal text-xs sm:text-sm capitalize">secs</span>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Header;
