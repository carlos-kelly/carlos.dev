import styled from "react-emotion"
import { color } from "../constants"

export const Strong = styled.span`
  font-weight: 500;
`

export const Name = styled.div`
  font-size: 2.125rem;
  line-height: 1em;
  color: ${color};
`

export const Header = styled.div`
  font-size: 1.45rem;
  line-height: 1.3em;
  margin: 0.5rem 0 0;
  color: ${color};
  `

export const A = styled.a`
  text-decoration: none;
  color: ${color};
  outline-color: #7c4dff;

  &:hover, &:active {
    text-decoration: underline;
  }
`

export const IconLink = styled(A)`
  margin: 2em 1.25em 0 0;
  height: 40px;
  width: 40px;
  display: inline-block;

  @media (max-width: 48em) {
    margin: 2em 1em 0 0;
  }
`
