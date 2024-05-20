import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [showCounter, setShowCounter] = useState(true); // State to toggle visibility of the counter

  const toggleCounterHandler = () => {
    setShowCounter((prevState) => !prevState); // Toggle the state
  };

  const incrementBy5Handler = () => {
    dispatch({ type: 'increment'}); // Dispatch increment action with payload 5
  };

  const decrementBy5Handler = () => {
    dispatch({ type: 'decrement'}); // Dispatch decrement action with payload 5
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>} {/* Show counter only if showCounter is true */}
      <button onClick={incrementBy5Handler}>Increment By 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrementBy5Handler}>Decrement By 5</button>
    </main>
  );
};

export default Counter;
