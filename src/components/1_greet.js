import React from "react"

const greet = () => <h1>Hello Peepul</h1>

export default greet

// created out first functional component, but it won't be rendered in browser as of now.
// This greet component is in no way connected to the rest of the browser
// So, export greet function from Greet.js and import it into App.js, and then include in app component

// named import :-
// export const Greet = () => {
//     <h1> Hello Peepul </h1>
// }


// an example of class component 

// import React, { Component} from "react";

// class Greet extends Component {
//     render () {
//         return <h1> Hello Peepul </h1>
//     }
// }
// export default Greet
