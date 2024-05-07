import React, { Component} from "react";

class Propsclass extends Component {
    render () {
        return <h1>Welcome {this.props.name} a.k.a {this.props.callname}</h1>
    }
}

export default Propsclass;