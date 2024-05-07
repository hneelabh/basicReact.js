import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedin: true
      }
    }

    render() {
        // return (
        // <div>
        //     <div>Welcome Harsh</div>
        //     <div>Welcome Guest</div>
        // </div>
        // )

        // M1: Using if-else approach
        // if(this.state.isLoggedin) {
        //     return (
        //         <div>Welcome Harsh</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        
        // M2 : Using JS element variables
        // let message;
        // if(this.state.isLoggedin) {
        //     message = <div>Welcome Harsh</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // M3 : Using the ternary operator
        return (        
            this.state.isLoggedin ? 
            <div>Welcome Harsh</div> :
            <div>Welcome Guest</div>
        )

        // M4 : Short Circuit Operator
        // done when we want to do nothing if the condition is false
        // return this.state.isLoggedin && <div>Welcome Harsh</div>
    }
}



export default Usergreeting