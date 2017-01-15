import React from 'react'
import styled from 'styled-components'
import { Strong } from './type'

const WorkContainer = styled.div`
  font-size: 1.5rem;
  line-height: 1.3em;
  margin: 1.25rem 0 0;
`

export const Work = () => (
  <WorkContainer>
    I work at&nbsp;
    <a
      href="https://www.formidable.com"
      target="_blank"
    >
      Formidable Labs
    </a>
    &nbsp;and love <Strong>iOS</Strong>, <Strong>JavaScript</Strong> &amp; <Strong>React</Strong> development.
  </WorkContainer>
)
