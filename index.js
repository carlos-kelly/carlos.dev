import App from "./src";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { Server } from "hapi";
import { extractCritical } from "emotion-server";
import pageTemplate from "./src/page-template";

const server = new Server();
const port = 3000;

server.connection({ port, host: "localhost" });
server.route({
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    const app = createElement(App);
    const { html, ids, css } = extractCritical(renderToString(app));
    reply(pageTemplate({ html, css }));
  }
});
server.route({
  method: "*",
  path: "/{p*}",
  handler: (request, reply) => reply.redirect("/")
});
server.start(error => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`Running carlospaelinck.io on port ${port} 🏳️‍🌈🚀`);
});
