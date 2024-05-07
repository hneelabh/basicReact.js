import React, { Component } from 'react'

class MountingChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Radio Muller'
      }
      console.log('MountingChild Constructor.')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('MountingChild getDerivedStateFromProps.')
        return null
    }

    componentDidMount () {
        console.log('MountingChild componentDidMount.')  
    }


  render() {
    console.log('MountingChild Render.')
    return (
      <div>MountingChild part of Lifecycle.</div>
    )
  }
}

export default MountingChild