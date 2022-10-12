import React, {useState, useEffect} from 'react';
import './index.css';
function DigitalClock(){
  const [dateState, setDateState] = useState(new Date());
      useEffect(() => {
             setInterval(() => setDateState(new Date()), 1000);
      }, []);
  return (
    <div class="datetime">
          <div class="date">
          <span>
            {' '}
            {dateState.toLocaleDateString('en-GB', {
               day: 'numeric',
               month: 'short',
               year: 'numeric',
            })}
          </span>

          </div>
          <div class="time">
          <span id="hour">
           {dateState.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true,
          })}
          </span>
          </div>
        </div>

  );
}
export default DigitalClock;
