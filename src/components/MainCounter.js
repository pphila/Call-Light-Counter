import React, { useState } from 'react';
import '../App.css';
import TimeRangeInput from './TimeRangeInput';

const MainCounter = () => {
  // const [date, setDate] = useState('');
  // const [shift, setShift] = useState('');
  // const [counters, setCounters] = useState(Array(30).fill(0));
  const [grids, setGrids] = useState([
    { date: '', shift: '', counters: Array(30).fill(0) }
  ]);

  const addNewGrid = () => {
    setGrids([
      ...grids,
      { date: '', shift: '', counters: Array(30).fill(0) }
    ]);
  };

  const handleDateChange = (index, newDate) => {
    const newGrids = [...grids];
    newGrids[index].date = newDate;
    setGrids(newGrids);
  }

  const handleShiftChange = (index, newShift) => {
    const newGrids = [...grids];
    newGrids[index].shift = newShift;
    setGrids(newGrids);
  };

  const incrementCounter = (gridIndex, counterIndex) => {
    const newGrids = [...grids];
    newGrids[gridIndex].counters[counterIndex] +=1;
    setGrids(newGrids);
  };

  const decrementCounter = (gridIndex, counterIndex) => {
    const newGrids = [...grids];
    newGrids[gridIndex].counters[counterIndex] -= 1;
    setGrids(newGrids);
  };

  return(
    // <div className='App'>
    //   <h1 className='title'>Call Light Counter</h1>
    //   <div>
    //     <h3 className='date'>
    //       Date:
    //       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    //     </h3>
    //     <TimeRangeInput shift={shift} setShift={setShift} />
    //   </div>
    //   <div className='grid'>
    //     {counters.map((count, index) => (
    //       <div key={index} className='counter-box'>
    //         <span>Room {index + 1}</span>
    //         <div className='counter-controls'>
    //           {count > 0 && <button onClick={() => decrementCounter(index)}>-</button>}
    //           <span className='counter-value'>{count}</span>
    //           <button onClick={() => incrementCounter(index)}>+</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className='App'>
      <h1 className='title'>Call Light Counter</h1>
      {grids.map((grid, gridIndex) => (
        <div key={gridIndex} className='grid-instance'>
          <div>
            <h3 className='date'>
              Date:
              <input
                type="date"
                value={grid.date}
                onChange={(e) => handleDateChange(gridIndex, e.target.value)}
              />
            </h3>
            <TimeRangeInput
              shift={grid.shift}
              setShift={(newShift) => handleShiftChange(gridIndex, newShift)}
            />
          </div>
          <div className='grid'>
            {grid.counters.map((count, counterIndex) => (
              <div key={counterIndex} className='counter-box'>
                <span>Room {counterIndex +1}</span>
                <div className='counter-controls'>
                  {count > 0 && (
                    <button onClick={() => decrementCounter(gridIndex, counterIndex)}>
                      -
                    </button>
                  )}
                  <span className='counter-value'>{count}</span>
                  <button onClick={() => incrementCounter(gridIndex, counterIndex)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={addNewGrid} className='add-grid-button'>
        New Shift
      </button>
    </div>
  );
}

export default MainCounter;