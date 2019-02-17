import App from "./src";
import React from "react";
import express from "express";
import { renderToNodeStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import pageTemplate from "./src/page-template";

const server = express();
const port = 3000;

server.get("*", function(req, res) {
  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>carloskel.ly</title>
        <meta name="theme-color" content="#ffffff">
        <meta name="description" content="Carlos Personal Webpage">
        <meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
      </head>
      <body>
  `);
  const app = React.createElement(App);
  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(app);
  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));
  stream.pipe(
    res,
    { end: false }
  );
  stream.on("end", () => res.end("</body></html>"));
});

server.listen(port, () => `Carlos starting on port: ${port}`);
