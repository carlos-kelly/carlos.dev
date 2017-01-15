import React from 'react'
import styled from 'styled-components'

const LinksContainer = styled.div`
  font-size: 1.25rem;
  margin: 1rem 0 0;
`

const A = styled.a`
  margin: 0 0.5em 0 0
`

export const Links = () => (
  <LinksContainer>
    <A
      href="https://github.com/carlospaelinck"
      target="_blank"
    >
      GitHub
    </A>
    <A
      href="https://twitter.com/carlos_paelinck"
      target="_blank"
    >
      Twitter
    </A>
    <A
      href="https://medium.com/@carlos_paelinck"
      target="_blank"
    >
      Medium
    </A>
    <A
      href="https://www.instagram.com/carlospaelinck/"
      target="_blank"
    >
      Instagram
    </A>
    <A
      href="http://www.publicationsapp.com"
      target="_blank"
    >
      Publications
    </A>
  </LinksContainer>
)
