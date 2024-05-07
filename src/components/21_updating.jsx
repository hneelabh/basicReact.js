/*
Updating Life Cycle Methods:
Methods that are called when a component is being prerendered because of changes to either props or state.

There are a total of five (three are rarely used) methods:
1. static getDerivedStateFromProps (props, state)
2. shouldComponentUpdate (nextProps, nextState)
3. render ()
4. getSnapshotBeforeUpdate (prevProps, prevState)
5. componentDidUpdate (prevProp, prevState, snapshot)

static getDerivedStateFromProps (props, state) is a rarely used static method.
It receives props and state as its parameter and has to return either null 
or an object that represents the updated state of the component.
It's called every time a component is rerendered and is used when the state depends on props of component.

shouldComponentUpdate (nextProps, nextState)
This method receives the updated props and state it dictates if components should rerender or not by default. 
all class components will rerender whenever the props they receive or their state changes.
This method can prevent that default behavior by returning false.
We compare the existing props and state values with the next props and state values and return
true or false to let react know whether the component should update or not.
This method is basically for performance optimization and is rarely used.

render () method
Reads (this.props) and (this.state) and return the JSX which describes the UI.
Avoid changing the state or interacting with the Dom in the render method.

getSnapshotBeforeUpdate (prevProps, prevState)
Accepts previous props and previous state as its parameters and is called right
before the changes from the virtual DOM are to be reflected in the DOM. 
Used to capture some information from the DOM.
Will either return null or return a value - the returned value will
be passed as the third parameter to the next method (componentDidUpdate).

componentDidUpdate (prevProp, prevState, snapshot)
It's called after the render is finished in the rerender cycles.
I.e. we can be sure that the component and all its sub components have properly rendered itself.
After the update this method accepts three parameters: previous props, previous state and the snapshot.
Value returned from get snapshot before update method.
This method is guaranteed to be called only once in each rerender cycle.
*/

import React, { Component } from 'react'
import updatingChild from './21_updatingChild';

class Updating extends Component {

    static getDerivedStateFromProps (props, state) {
        console.log('Updating - getDerivedStateFromProps.')
        return null
    }

    shouldComponentUpdate() {
        console.log('Updating - shouldComponentUpdate.')
    }

    getSnapshotBeforeUpdate (prevProps, prevState){
        console.log('Updating - getSnapshotBeforeUpdate.')
    }

    componentDidUpdate () {
        console.log('Updating - componentDidUpdate.')
    }

  render() {
    <updatingChild/>
    return (<updatingChild/>
    // <div>
    //   <div>Updating</div>
    //   <div><updatingChild></updatingChild></div>
    // </div>
    )
  }
}

export default Updating