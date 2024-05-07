// Call a method in parent component from a button in child component by passing the methis as props to the child component.

import React, { Component } from 'react'
import Childcomponent from './13_child_component'

class Parentcomponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        parentName: 'parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    // greetParent () {
    //     alert(`Guten Morgen ${this.state.parentName}`)
    // }

    greetParent (childName){
        alert(`Guten Morgen ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
        <div>
            <Childcomponent greetHandler={this.greetParent}/>
        </div>
        )
  }
}

export default Parentcomponent

/*
1. In the parent component, define the method.
2. On the child component tag, pass the method as a prop.
3. In the child component, access the method using the props object (props.fn_name()).
4. If a parameter is to be pased, use arrow function.

*/