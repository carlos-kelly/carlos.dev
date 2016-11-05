import React, { Component } from 'react'
import { Intro } from './components/intro';
import { Work } from './components/work';

export class IndexView extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Intro />
        <Work />
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
