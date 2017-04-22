import Document, { Head, Main, NextScript } from "next/document"
import styleSheet from "styled-components/lib/models/StyleSheet"
import { injectGlobal } from "styled-components"

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
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style
        dangerouslySetInnerHTML={{
          __html: styleSheet.rules().map(rule => rule.cssText).join("\n")
        }}
      />
    )

    return { ...page, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Carlos Paelinck</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
