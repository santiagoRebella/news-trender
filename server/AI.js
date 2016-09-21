"use strict";

const React= require('react');
const ReactDOMServer = require('react-dom/server');

const searcher= require('./searcher');
const trender = require('./trender');
const scrapper = require('./scrapper');
const parsePages = require('./parse-pages');
const proper = require('./proper');

const Page = require('../src/views/page');
const Index= require('../src/views/index');

let AI = {};

AI.trends = [];
AI.properData = [];

AI.searcher = (data, server) => {
  searcher(data)
    .then(results => AI.scrapper(results, server))
    .catch(err => console.error('error on searcher -->', err));
};

AI.scrapper = (results, server) => {
  scrapper(results)
    .then(data => {
      AI.properData = parsePages(data);
      AI.render(proper(parsePages(data)), server);
    })
    .catch(err => console.error('error on scrapper -->', err));
};

AI.init = (server) => {
  trender()
    .then((data) => {
      AI.trends = data;
      AI.searcher(data, server);
    })
    .catch((data) => { console.error('error on trender -->', data); });

  AI.timer();
};

AI.render = (data, server) => {

  server.get('/:key', function (req, res) {
    if (data[req.params.key]) {
      const page = React.createElement(Page, {data: data[req.params.key]});
      res.send(ReactDOMServer.renderToStaticMarkup(page));
    }
  });
  server.get('/', function (req, res) {
    const index = React.createElement(Index, {data: data});
    res.send(ReactDOMServer.renderToStaticMarkup(index));
  });

};

AI.restartInterval;
AI.keepAliveInterval;

AI.timer = () => {
  // http://sstut.com/javascript/convert-hours-minutes-seconds-to-milliseconds.php
  const restartDelay = 10800000; // 3 hours
  const keepAliveDelay = 900000; // 15 mins

  clearInterval(AI.restartInterval);
  AI.restartInterval = setInterval(AI.init, restartDelay);

  clearInterval(AI.keepAliveInterval);
  AI.keepAliveInterval = setInterval(() => {
    console.log('keeping it real', new Date());
  }, keepAliveDelay);
}


module.exports = AI;



