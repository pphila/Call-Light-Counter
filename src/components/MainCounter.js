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
  
}