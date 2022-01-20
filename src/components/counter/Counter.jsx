import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{ //function component

  //Define the initial state in constructor
  constructor(){
    super();
    this.state = {
      counter : 0
    }
    //super();
    this.increment = this.increment.bind(this); //without this step we can't use state variables in this function "increment"

  }
  render(){
    return (
      <div className="counter">
        <button onClick = {this.increment}>+1</button> 
        <span className = "count">{this.state.counter}</span>
      </div>
    );
  }
    increment(){
      this.setState({
        counter : this.state.counter + 1
      });
      //console.log('increment');
    }
  }
   

  

  export default Counter;