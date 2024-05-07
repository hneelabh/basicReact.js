// The reason we bind event handlers in react is purely due to how 'this' keyword behaves in js. It is not caz that's how react works.
// 'this' keyword is undefined in a event handler, and hence event binding is required.
// use 'rconst' snippet for constructor.

import React, { Component } from 'react'

class Event_bind extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            message : "Hello"
        }

        //   // M3 : Binding in constructor
        //   this.clickHandler = this.clickHandler.bind(this);
    }

        // clickHandler() {
        //     this.setState({
        //         message : "Goodbye"
        //     })
        //     console.log(this)
        // }

        // M4 : Class ppt as an arrow fn
        clickHandler = () => {
            this.setState({
                message:"Goodbye"
            })
        }
        

    render() {
        return (
        <div>
            <div>{this.state.message}</div>
            {/* M1 : Binding in the render method */}
            {/* <button onClick={this.clickHandler.bind(this)}>Bound in render</button> */}
            
            {/* M2 : Arrow function in render */}
            {/* <button onClick = {() => this.clickHandler()}>Bound by arrow fn</button> */}

            {/* M3/M4 done in constructor. Use these more.*/}
            <button onClick = {this.clickHandler}>Binding in constructor</button>

        </div>
        )
    }
}

export default Event_bind