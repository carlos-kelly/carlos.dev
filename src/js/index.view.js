import React from 'react'
import { Intro, Work, Links } from './components'
import styled from 'styled-components'

const IndexContainer = styled.div`
  margin: 30vh auto 0;
  text-align: left;
  width: 80%;
`

export const IndexView = () => (
  <IndexContainer>
    <Intro />
    <Work />
    <Links />
  </IndexContainer>
)
