/*
Mounting Lifecycle Methods :
Methods which are called when an instance of a component is being created and inserted into the DOM.

In the order that they are invoked:
1. constructor (props)
2. static getDerivedStateFromProps (props, state)
3. render ()
4. componentDidMount ()

Constructor is a special function that will get called whenever a new component is created.
Perfect for initializing state or binding the event handlers to the class instance.
One should never make HTTP requests from within a constructor.
Two important points while defining our own constructor :
1. To call a special function called super - calls the base class constructor in our
component. we have access to (this.Props) only after we have initially called super passing in the props as an argument.
2. Constructor is also the only place one can change or set the state by
directly overwriting (this.state) fields. In all other scenarios (this.setState) is used.

getDerivedStateFromProps (props, state) is a static method. It is a rerely used lifecycle method.
Used when the state of the component depends on changes in props over time.
If nitial state of the component depends on the props being passed to the component, then this method is used to set the state.
Since this method is a static method, it does not have access to the (this) keyword.
So (this.state) can't be called in this method, instead an object that represents the new state of the component is returned.

render () method is the only required method in a class component.
In the render method we simply read (this.props) and (this.state) and return the JSX which describes the UI.
The render function is a pure function for the given props and state. It should always render the same UI.
To avoid - changing the state of the component or interacting with the Dom or making any Ajax calls.

componentDidMount () - this method will be called only once in the whole lifecycle of a given component. 
Is invoked immediately after a component and all its children components have been rendered to the DOM.
This method is the perfect place to cause side-effects, can interact with the DOM or perform Ajax calls to load data.
A good place to perform initialization that requires Dom nodes and also load data by making Network requests.
*/

import React, { Component } from 'react'
import MountingChild from './20_mountingChild'

class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Radio Muller'
      }
      console.log('Mounting Constructor.')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('Mounting getDerivedStateFromProps.')
        return null
    }

    componentDidMount () {
        console.log('Mounting componentDidMount.')  
    }


  render() {
    console.log('Mounting Render.')
    return (
    <div>
      <div>Mounting part of Lifecycle.</div>
      <MountingChild/>
    </div>
    )
  }
}

export default Mounting