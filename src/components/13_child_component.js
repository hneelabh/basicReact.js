import React from 'react'

function Childcomponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        <button onClick={() => props.greetHandler('child')} >Greet Parent from Child</button>
    </div>
  )
}

export default Childcomponent

// What we want here is that when we click the button in the child component, we want to execute the method defined in the parent component.
// Basically a child component calls a parent component method.

// for passing a parameter, use of arrow functions in done.