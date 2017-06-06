const fs = require('fs');
const path = require('path');
const express = require('express');
const db = require('./db');
// Support .jsx on Node runtime
require('babel-register')({
    extensions: ['.jsx', '.js'],
    ignore: [/node_modules\/(?!react)/]
});

// Server-side Entry (.jsx)
const ssr = require('../es/ssr');

// basic HTTP server via express:
const app = express();

const BUNDLE_FILE_URL = '/bundle.client.js';
const BUNDLE_FILE_PATH = path.join(__dirname, `../dist${BUNDLE_FILE_URL}`);

// bundle js file
app.get(BUNDLE_FILE_URL, (req, res) => {
    fs.readFile(BUNDLE_FILE_PATH, 'utf-8', (err, ctx) => {
        res.send(ctx);
    });
});

// on each request, render and return a component:
app.get('/', (req, res) => {
    const data = db.getUser();
    const ssrResult = ssr(data);
    // send it back wrapped up as an HTML5 document:
    res.send(`<!DOCTYPE html>
      <html>
      <head>
        <title>Preact SSR</title>
      </head>
      <body>
        ${ssrResult.html ? ssrResult.html : '<div id="app"></div>'}
        <script>window.__backend_data__ = ${JSON.stringify(ssrResult.state)};</script>
        <script src="${BUNDLE_FILE_URL}"></script>
      </body>
      </html>`);
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Preact Server start on ${PORT}`);
});
