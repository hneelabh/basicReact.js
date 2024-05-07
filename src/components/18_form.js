// We want to get rid of the jsx and give react full control over  the form rendering.
// So we need the controlled components, and react state is the single source of truth for the input element.

/*
THere are three simple steps:
1. Create a HTML element.
2. Assign the component state to the element value.
3. Assign an onChange handler that updates the state whenever there is a change.
*/

import React, { Component } from 'react'

export class Form extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      username : 'hneelabh',
      comments : 'Hello there! Enter your comments here.',
      topic: 'react'
      // assigning the default values

    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username : event.target.value
      // this captures the value anytime its changed
    })
    // this.setState is used to assign the captured value back to the state property and update the state
  }

  handleCommentChange = (event) => {
    this.setState({
      comments : event.target.value
    })
  }

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault() // doesnt let page refresh after submission
  }

  render() {
    // const {username, comments, topic} = this.state;
    // destructuring, can remove this.state from the three occurences.
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>Username : </label>
          <input 
            type='text'
            value = {this.state.username}
            onChange={this.handleUsernameChange} 
          />
        </div>
        <div>
          <label>Comments </label>
          <textarea value = {this.state.comments} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
          <label>Topic </label>
          <select value = {this.setState.topic} onChange={this.handleTopicChange}>
          <option value="react">React</option>
          <option value='angular'>Angular</option>
          <option value='next'>Next</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>  
    )
  }
}

export default Form

/*
  username : ''
Here, we have username as a state property, which is supplied as a value to the value attribute in
  value = {this.state.username}

Whenever there is a change, the new value is propogated to handleUsernameChange, which sets back the state property username to the updated value.

When the state is set, the render method is called again, and the new value is available to the value property.

And that's how we do have a controlled component
*/

// if having no form component, create a button, create an onclick handler on that button and have the exzct same body as onSubmit event.