import React from "react"
import styled from "react-emotion"
import { appFont, color } from "./constants"
import { Content } from "./components/layout"
import { Name, Header, Strong, A, IconLink } from "./components/text"
import {
  GitHubIcon, TwitterIcon, MediumIcon, PublicationsIcon, InstagramIcon
} from "./components/icons"

const App = styled.div({
  fontFamily: appFont,
  color
})

export default () => (
  <App>
    <Content>
      <Name>
        Hello I&#8217;m&#32;<Strong>Carlos</Strong>,
      </Name>
      <Header>
        a developer in Omaha creating apps with React and Node at&nbsp;
        <A
          href="https://www.formidable.com"
          target="_blank"
          rel="noopener"
        >
          <Strong>Formidable.</Strong>
        </A>
      </Header>
      <IconLink
        href="https://github.com/carlospaelinck"
        target="_blank"
        rel="noopener"
      >
        <GitHubIcon />
      </IconLink>
      <IconLink
        href="https://twitter.com/carlos_paelinck"
        target="_blank"
        rel="noopener"
      >
        <TwitterIcon />
      </IconLink>
      <IconLink
        href="https://medium.com/@carlos_paelinck"
        target="_blank"
        rel="noopener"
      >
        <MediumIcon />
      </IconLink>
      <IconLink
        href="https://www.instagram.com/carlospaelinck/"
        target="_blank"
        rel="noopener"
      >
        <InstagramIcon />
      </IconLink>
      <IconLink
        href="https://www.publicationsapp.com"
        target="_blank"
        rel="noopener"
      >
        <PublicationsIcon />
      </IconLink>
    </Content>
  </App>
)
