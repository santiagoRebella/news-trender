"use strict";

const express = require('express');
const server = express();
const AI = require('./server/AI');
const PORT = process.env.NODE_ENV === 'production' ? 80 : 3000;

AI.init(server);

server.listen(PORT, function () {
  console.log(`server listening on port ${PORT}`);
});
