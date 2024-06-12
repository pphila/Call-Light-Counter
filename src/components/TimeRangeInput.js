import React, { useState } from 'react';

const TimeRangeInput = ({ shift, setShift }) => {
  const [inputValue, setInputValue] = useState(shift);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const regex = /^([01]\d|2[0-3])[0-5]\d-([01]\d|2[0-3])[0-5]\d$/;
    if (regex.test(value)) {
      setShift(value);
    }
  };

  return(
    <div>
      <h3>
        Shift:
        <input 
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder='0000-0000'
        />
      </h3>
    </div>
  );
};

export default TimeRangeInput;