export default ({ html, css }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>carlospaelinck.io</title>
      <style>${css}</style>
    </head>
    <body>
      ${html}
    </body>
  </html>
`
