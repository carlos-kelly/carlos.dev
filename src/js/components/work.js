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
    .
  </div>
)

const styles = {
  work: {
    fontSize: '1.5rem',
    margin: '1.25rem 0 0'
  }
}
