import React, { Component } from 'react'
import { Intro, Work, Links } from './components'

export class IndexView extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Intro />
        <Work />
        <Links />
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '36vh auto 0',
    textAlign: 'left',
    width: '80%'
  }
}
