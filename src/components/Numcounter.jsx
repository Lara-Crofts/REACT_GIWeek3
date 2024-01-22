// React: A Simple Counter
  // this.state required for class component 

  import React, { useState } from "react";

  class Numcounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0, showText: true };
  
      //event handlers 
      this.incrementCount = this.incrementCount.bind(this);
      this.decrementCount = this.decrementCount.bind(this);
      this.toggleShowText = this.toggleShowText.bind(this);
    }
  
    incrementCount = () => {  
      this.setState({ count: this.state.count + 1 });
    };
  
    decrementCount = () => {  
      this.setState({ count: this.state.count - 1 });
    };
  
    toggleShowText = () => { 
      this.setState({ showText: !this.state.showText });
    };
  
  
    //display content 
    render() {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
          <button onClick={this.toggleShowText}>Reveal Message</button>
          {this.state.showText && <p>This is a message! Hey there! :y</p>}
        </div>
      );
    }
  }
  
  export default Numcounter;
  
  
  