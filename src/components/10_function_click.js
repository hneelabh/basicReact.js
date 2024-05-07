import React from 'react'

function Function_click() {

    function clickHandler () {
        console.log("Button clicked.")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
        {/* We pass the fn as event handler. Adding a paranthesis makes it a fn call, that's not what we want. */}
    </div>
  )
}

export default Function_click