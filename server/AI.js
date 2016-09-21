"use strict";

const React= require('react');
const ReactDOMServer = require('react-dom/server');

const searcher= require('./searcher');
const trender = require('./trender');
const scrapper = require('./scrapper');
const analizer = require('./analizer');

const Page = require('../src/views/page');
const Index= require('../src/views/index');

let AI = {};

AI.trends = [];

AI.searcher = (trends, server) => {
  searcher(trends)
    .then(results => AI.scrapper(results, server))
    .catch(err => console.error('error on searcher -->', err));
};

AI.scrapper = (results, server) => {
  scrapper(results)
    .then(pages => {
      AI.analizer(pages, server);
    })
    .catch(err => console.error('error on scrapper -->', err));
};

AI.analizer = (pages, server) => {
  AI.render(analizer(pages), server);
};

AI.init = (server) => {
  trender()
    .then((trends) => {
      AI.trends = trends;
      AI.searcher(trends, server);
    })
    .catch(err => { console.error('error on trender -->', err); });

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



