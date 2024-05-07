import React from 'react'

const heading = {
    fontSize: '50px',
    color: 'indigo'
}

function Inline() {
  return (
    <div>
        <h1 style={heading}>Inline</h1>
        <h3 className='error'>Accessing styles.css from other module. We can't access styles.module.css like this.</h3>
    </div>
  )
}

export default Inline

// In react, inline styles are not specified as a string. Instead they are specified with an object, whose key is the camelCased version of style name and value is usually string.