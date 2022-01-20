import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';
class Counter extends Component{
  constructor(){
    super();
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <CounterButton by = {1} type = "+" incrementMethod = {this.increment}/>
        <CounterButton by = {5} type = "+" incrementMethod = {this.increment}/>
        <CounterButton by = {10} type = "+" incrementMethod = {this.increment}/>
        <CounterButton by = {-7} type = "-" incrementMethod = {this.increment}/>
        <span className = "count">{this.state.counter}</span>
        <div><button onClick = {this.reset}>Reset</button></div>

      </div>
    );
  }

  increment(by){
    this.setState(
      (prevState) => {
      return {counter : prevState.counter + by}
      }
    );
  }

  reset(){
    this.setState(
      (prevState) => {
      return {counter : 0}
      }
    );
  }
}



class CounterButton extends Component{ //function component
//important example on passing data from chlid to parent
  render = () => {
    return (
      <div className="counter">
        <button onClick = {this.increment}>{this.props.type}{this.props.by}</button> 
      </div>
    );
  }
    increment = () => {
      this.props.incrementMethod(this.props.by);
    }

    decrement = () => {
      this.props.decrementMethod(this.props.by);
    }

    reset = () => {
      this.props.resetMethod();
    }
  }
   
  CounterButton.defaultProps = {
    by : 1
  }
  export default Counter;