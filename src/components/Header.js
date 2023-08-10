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
    <div>
      <section >
        <div >
          <h1 id="greeting">{greeting}</h1>
        </div>

        <div >
          <p>Local time:</p>
          <div >
            <div >
              <span data-time="hours" >
                {time.getHours()}
              </span>
              <span >Hours</span>
            </div>
            <span >:</span>
            <div >
              <span data-time="minutes" >
                {time.getMinutes()}
              </span>
              <span >mins</span>
            </div>
            <span>:</span>
            <div >
              <span data-time="seconds">
                {time.getSeconds()}
              </span>
              <span>secs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
