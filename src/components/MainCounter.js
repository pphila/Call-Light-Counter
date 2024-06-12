import React, { useState } from 'react';
import '../App.css';
import TimeRangeInput from './TimeRangeInput';

const MainCounter = () => {
  const [date, setDate] = useState('');
  const [shift, setShift] = useState('');
  const [counters, setCounters] = useState(Array(30).fill(0));

  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] +=1;
    setCounters(newCounters);
  };

  const decrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);
  };

  return(
    <div className='App'>
      <h1 className='title'>Call Light Counter</h1>
      <div>
        <h3 className='date'>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </h3>
        <TimeRangeInput shift={shift} setShift={setShift} />
      </div>
      <div className='grid'>
        {counters.map((count, index) => (
          <div key={index} className='counter-box'>
            <span>Room {index + 1}</span>
            <div className='counter-controls'>
              {count > 0 && <button onClick={() => decrementCounter(index)}>-</button>}
              <span className='counter-value'>{count}</span>
              <button onClick={() => incrementCounter(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCounter;