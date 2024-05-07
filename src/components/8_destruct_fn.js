// use snipped rce for class and rfc for the function code's skeleton

import React from 'react'

const Destruct = ({name, callname}) => {
  return (
    <div>
        <h1>
            Welcome {name} a.k.a {callname}
        </h1>
    </div>
  )
}

// M2 :-

// const Destruct = props => {
// const {name, callname} = props
//  return (
//      <div>
//          <h1>
//              Welcome {name} a.k.a {callname}
//          </h1>
//      </div>
//  )
// }

export default Destruct