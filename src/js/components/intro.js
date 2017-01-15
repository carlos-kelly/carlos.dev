import React from 'react'
import { Picture } from './picture'
import { Strong } from './type'
import carlosImg from '../../images/carlos.png'
import styled from 'styled-components'

const Name = styled.div`
  font-size: 2.125rem;
  line-height: 1em;
`

const Header = styled.div`
  font-size: 1.45rem;
  line-height: 1.3em;
`

export const Intro = () => (
  <div>
    <Picture src={carlosImg} />
    <Name>
      Hello I&#8217;m&#32;<Strong>Carlos Paelinck</Strong>,
    </Name>
    <Header>
      a Software Developer in Omaha, Nebraska.
    </Header>
  </div>
)
