import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    // increment () {
    //     this.setState({
    //         count: this.state.count + 1,
    //     }, 
    //     () => {
    //         console.log("Callback Value", this.state.count)
    //     })
    //     console.log("Outside Callback Value", this.state.count)
    // }

    // Rule 1 - Never modify the state directly outside constructor, always use setState!!!
    // here using cb function as due to async function, console.log is called earlier than the increment.
    // Rule 2 - Whenever a code is to be executed after hte change in the state, do not place it right after the code. Use a callback function.

    incrementFive () {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    // react may update multiple set state calls into update for better performance. Hence all the five set state calls are done in a single go, hence not updating the value.

    increment () {
        this.setState((prevState) =>({
            count: prevState.count + 1,
        }))
        console.log(this.state.count);
    }

    // Rule 3 - When you have to update a state based on prev state, make sure to pass in a function as an argument instead of a regular obj.
    
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
  }
}

export default Counter