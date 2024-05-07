import React from 'react'

function Person({i}) {
  return (
    <div>
        <h2>I am {i.name}. I am {i.age} years old. I know {i.skill}.</h2>
    </div>
  )
}

export default Person