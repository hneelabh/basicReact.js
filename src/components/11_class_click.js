import React, { Component } from 'react'

class Class_click extends Component {
  clickHandler () {
    console.log("Button is clicked.")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me!</button>
    </div>
    )
  }
}

export default Class_click