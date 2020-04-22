/* eslint-disable */
const express = require('express');
const connectHistory = require('connect-history-api-fallback');

const app = express();

app.use(
  connectHistory({
    index: '/dist/index.html',
  })
);