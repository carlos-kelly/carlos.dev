import React from 'react'

export const Links = () => (
  <div style={styles.links}>
    <a
      style={styles.link}
      href="https://github.com/carlospaelinck"
      target="_blank"
    >
      GitHub
    </a>
    <a
      style={styles.link}
      href="https://twitter.com/carlos_paelinck"
      target="_blank"
    >
      Twitter
    </a>
    <a
      style={styles.link}
      href="https://medium.com/@carlos_paelinck"
      target="_blank"
    >
      Medium
    </a>
    <a
      style={styles.link}
      href="https://www.instagram.com/carlospaelinck/"
      target="_blank"
    >
      Instagram
    </a>
    <a
      style={styles.link}
      href="http://www.publicationsapp.com"
      target="_blank"
    >
      Publications
    </a>
  </div>
)

const styles = {
  links: {
    fontSize: '1.25rem',
    margin: '1rem 0 0'
  },
  link: {
    margin: '0 0.5em 0 0'
  }
}
