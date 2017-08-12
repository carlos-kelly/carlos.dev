import styled from "styled-components"
import { Content } from "../components/layout"
import { Picture } from "../components/picture"
import { Name, Header, Strong, A, IconLink } from "../components/text"
import {
  GitHubIcon, TwitterIcon, MediumIcon, PublicationsIcon, InstagramIcon
} from "../components/icons"

export default () => (
  <Content>
    <Picture src="/static/images/carlos.png" />
    <Name>
      Hello I&#8217;m&#32;<Strong>Carlos Paelinck</Strong>,
    </Name>
    <Header>
      a developer in Omaha creating apps with React and Node at&nbsp;
      <A
        href="https://www.formidable.com"
        target="_blank"
      >
        <Strong>Formidable.</Strong>
      </A>
    </Header>
    <IconLink
      href="https://github.com/carlospaelinck"
      target="_blank"
    >
      <GitHubIcon />
    </IconLink>
    <IconLink
      href="https://twitter.com/carlos_paelinck"
      target="_blank"
    >
      <TwitterIcon />
    </IconLink>
    <IconLink
      href="https://medium.com/@carlos_paelinck"
      target="_blank"
    >
      <MediumIcon />
    </IconLink>
    <IconLink
      href="https://www.instagram.com/carlospaelinck/"
      target="_blank"
    >
      <InstagramIcon />
    </IconLink>
    <IconLink
      href="https://www.publicationsapp.com"
      target="_blank"
    >
      <PublicationsIcon />
    </IconLink>
  </Content>
)
