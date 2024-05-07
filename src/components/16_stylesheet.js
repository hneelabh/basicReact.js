import React from 'react'
import './16_myStyles.css'

function Stylesheet(props) {
    let className = props.primary ?  'primary' : ''
    return (
        <div>
            <h1 className = {`${className} font-xl`}>StyleSheets</h1>
        </div>
  )
}

export default Stylesheet

// for using multiple classes, the easiest method is to use template literals using backticks
// e.g. className = {`${className} font-xl`}
// can also use classNames library