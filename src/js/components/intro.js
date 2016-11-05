import React from 'react'
import { Picture } from './picture'

export const Intro = () => (
  <div>
    <Picture />
    <div style={styles.name}>
      Hello I&#8217;m&#32;<span style={styles.strong}>Carlos Paelinck</span>,
    </div>
    <div style={styles.header}>
      a Software Engineer in Omaha, Nebraska.
    </div>
  </div>
)

const styles = {
  name: {
    fontSize: '2.125rem',
    lineHeight: '1em'
  },
  strong: {
    fontWeight: 500
  },
  header: {
    fontSize: '1.45rem'
  }
}
