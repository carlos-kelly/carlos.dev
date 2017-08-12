import Document, { Head, Main, NextScript } from "next/document"
import { injectGlobal, ServerStyleSheet } from "styled-components"

injectGlobal`
  html, body {
    font-family: "NeueHaas", "Segoe UI", "Roboto", "Helvetica Neue", Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'NeueHaas';
    src: url('/static/fonts/NeueHaasUnicaPro-Light.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/NeueHaasUnicaPro-Light.otf')  format('opentype'),
         url('/static/fonts/NeueHaasUnicaPro-Light.woff') format('woff'),
         url('/static/fonts/NeueHaasUnicaPro-Light.ttf')  format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'NeueHaas';
    src: url('/static/fonts/NeueHaasUnicaPro-Medium.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/NeueHaasUnicaPro-Medium.otf')  format('opentype'),
         url('/static/fonts/NeueHaasUnicaPro-Medium.woff') format('woff'),
         url('/static/fonts/NeueHaasUnicaPro-Medium.ttf')  format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`

export default class BaseDocument extends Document {
  render() {
    const styleSheet = new ServerStyleSheet()
    const pageContent = styleSheet.collectStyles(<Main />)
    const styleTags = styleSheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Carlos Paelinck</title>
          <meta
            name="description"
            content="Carlos Paelinck‘s Personal Website"
          />
          <meta
            name="viewport"
            content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
          />
          <meta
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          { styleTags }
        </Head>
        <body>
          { pageContent }
          <NextScript />
        </body>
      </html>
    )
  }
}
