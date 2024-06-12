import React, { useState } from 'react';
import '../App.css';

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
    <div>
      <h1>Call Light Counter</h1>
      <div>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Shift:
          <input type="date" value={shift} onChange={(e) => setShift(e.target.value)} />
        </label>
      </div>
      <div className='grid'>
        {counters.map((count, index) => (
          <div key={index} className='counter-box'>
            <span>Room {index + 1}</span>
            <button onClick={() => incrementCounter(index)}>+</button>
            <span>{count}</span>
            {count > 0 && <button onClick={() => decrementCounter(index)}>-</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCounter;