import React, { Component } from 'react';
import './Counter.css';

function Counter(){ //function component
    return (
      <div className="counter">
        
        <button onClick = {increment}>+1</button> 
        <span className = "count">0</span>

        
      </div>
    );
  }

  function increment(){
      console.log('increment');
  }

  export default Counter;