import App from "./src"
import { createElement } from "React"
import { renderToString } from "react-dom/server"
import { Server } from "hapi"
import { extractCritical } from 'emotion-server'

const server = new Server()

server.connection({ port: 3000, host: "localhost" })
server.route({
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    const app = createElement(App)
    const {
      html, ids, css
    } = extractCritical(renderToString(app))
    reply(`
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
    `)
  }
})
server.start(error => console.error(error))
