import { Component } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
import classes from './Counter.module.css';
import {counterActions} from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.show);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(1));
  };
  
  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  };
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

class CounterClass extends Component {
  incrementHandler = () => {
    this.props.increment();
  };
  
  decrementHandler = () => {
    this.props.decrement();
  };
  
  toggleCounterHandler = () => {};

  render() {
    return(
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler}>INCREMENT</button>
          <button onClick={this.decrementHandler}>DECREMENT</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  };
};

export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
