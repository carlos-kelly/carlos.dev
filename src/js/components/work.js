import React from 'react'

export const Work = () => (
  <div style={styles.work}>
    I work at&nbsp;
    <a
      href="https://www.formidable.com"
      target="_blank"
    >
      Formidable Labs
    </a>
    &nbsp;and love <span style={styles.strong}>iOS</span>, <span style={styles.strong}>JavaScript</span> &amp; <span style={styles.strong}>React</span> development.
  </div>
)

const styles = {
  work: {
    fontSize: '1.5rem',
    margin: '1.25rem 0 0',
    lineHeight: '1.3em'
  },
  strong: {
    fontWeight: 500
  }
}
