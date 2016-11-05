import React, { Component } from 'react'
import Radium from 'radium'

@Radium
export class IndexView extends Component {
  render() {
    return (
      <div style={[ styles.base ]}>
        Carlos Paelinck
      </div>
    )
  }
}

const styles = {
  base: {
    color: '#f00'
  }
}
