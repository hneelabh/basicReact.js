import React, { Component } from 'react'

class Destruct_class extends Component {
  render() {
    const {name, callname} = this.props;
    // const {state1, state2} = this.state;
    return (
      <div>
        <h1>
            Welcome {name} a.k.a {callname}
        </h1>
      </div>
    )
  }
}

export default Destruct_class