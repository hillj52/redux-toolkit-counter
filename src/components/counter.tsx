import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import classes from './counter.module.css';

const Counter: React.FC = () => {
  const counter = useTypedSelector(({ counter }) => counter.value);
  const showCounter = useTypedSelector(({ counter }) => counter.isVisible);
  const { increment, decrement, toggleCounter } = useActions();

  const incrementHandler = () => {
    increment();
  }

  const decrementHandler = () => {
    decrement();
  }

  const toggleCounterHandler = () => {
    toggleCounter();
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
