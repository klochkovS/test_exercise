const express = require('express');

const PORT = 1234;

express()
  .use(express.static('dist'))
  .get('/*', r => r.res.sendFile('dist/index.html', { root: '.' }))
  .use(r => r.res.status(404).end('Still not here, sorry!'))
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
  .listen(process.env.PORT || PORT);
