import React from "react";
import styled from "styled-components";
import { appFont, color } from "./constants";
import { Content } from "./components/layout";
import { Name, Header, Strong, A, IconLink } from "./components/text";
import { GitHubIcon, TwitterIcon, PublicationsIcon } from "./components/icons";

const Container = styled.section({
  fontFamily: appFont,
  color
});

export default function App() {
  return (
    <Container>
      <Content>
        <Name>
          Hello I&#8217;m&#32;<Strong>Carlos</Strong>,
        </Name>
        <Header>
          a developer in Omaha creating apps with React and Node at&nbsp;
          <A href="https://www.formidable.com" target="_blank" rel="noopener">
            <Strong>Formidable.</Strong>
          </A>
        </Header>
        {/* <IconLink
          href="https://formidable.com/blog/author/carlos-paelinck/"
          target="_blank"
          rel="noopener"
        >
          F
        </IconLink> */}
        <IconLink
          href="https://github.com/carlos-kelly"
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
          href="https://www.publicationsapp.com"
          target="_blank"
          rel="noopener"
        >
          <PublicationsIcon />
        </IconLink>
      </Content>
    </Container>
  );
}
