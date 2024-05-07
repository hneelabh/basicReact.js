import React, { Component } from 'react'

class updatingChild extends Component {

    static getDerivedStateFromProps (props, state) {
        console.log('UpdatingChild - getDerivedStateFromProps.')
        return null
    }

    shouldComponentUpdate() {
        console.log('UpdatingChild - shouldComponentUpdate.')
    }

    getSnapshotBeforeUpdate (prevProps, prevState){
        console.log('UpdatingChild - getSnapshotBeforeUpdate.')
    }

    componentDidUpdate () {
        console.log('UpdatingChild - componentDidUpdate.')
    }

  render() {
    console.log('UpdatingChild - render.')
    return (
      <div>Updating Child</div>
    )
  }
}

export default updatingChild